import os
import hmac
import hashlib
import json
import time

def handler(event: dict, context) -> dict:
    """
    Генерирует подписанный токен доступа к закрытому контенту.
    Вызывается CryptoCloud после успешной оплаты через success_url.
    """
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    secret = os.environ.get('ACCESS_SECRET', '')
    timestamp = str(int(time.time()))
    payload = f"paid:{timestamp}"
    signature = hmac.new(secret.encode(), payload.encode(), hashlib.sha256).hexdigest()
    token = f"{timestamp}.{signature}"

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'token': token})
    }
