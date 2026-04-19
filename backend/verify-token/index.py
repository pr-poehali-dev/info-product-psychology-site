import os
import hmac
import hashlib
import json
import time

TOKEN_TTL = 60 * 60 * 24 * 365  # 1 год

def handler(event: dict, context) -> dict:
    """
    Проверяет подписанный токен доступа к закрытому контенту.
    Возвращает valid: true/false.
    """
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    token = body.get('token', '')

    if '.' not in token:
        return _response(False)

    parts = token.split('.', 1)
    if len(parts) != 2:
        return _response(False)

    timestamp_str, signature = parts[0], parts[1]

    if not timestamp_str.isdigit():
        return _response(False)

    timestamp = int(timestamp_str)

    if int(time.time()) - timestamp > TOKEN_TTL:
        return _response(False)

    secret = os.environ.get('ACCESS_SECRET', '')
    payload = f"paid:{timestamp_str}"
    expected = hmac.new(secret.encode(), payload.encode(), hashlib.sha256).hexdigest()

    valid = hmac.compare_digest(expected, signature)
    return _response(valid)


def _response(valid: bool) -> dict:
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'valid': valid})
    }
