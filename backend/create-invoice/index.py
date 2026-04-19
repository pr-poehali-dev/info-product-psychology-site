import os
import json
import hmac
import hashlib
import time
import urllib.request
import urllib.error

def handler(event: dict, context) -> dict:
    """Создаёт инвойс CryptoCloud и возвращает ссылку на оплату."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            'body': ''
        }

    # Генерируем подписанный токен доступа
    secret = os.environ.get('ACCESS_SECRET', '')
    timestamp = str(int(time.time()))
    payload = f"paid:{timestamp}"
    signature = hmac.new(secret.encode(), payload.encode(), hashlib.sha256).hexdigest()
    access_token = f"{timestamp}.{signature}"

    body = json.loads(event.get('body') or '{}')
    origin = body.get('origin', 'https://info-product-psychology-site.poehali.dev')
    success_url = f"{origin}/secrets?token={access_token}"

    # API ключ — автоматически добавляем префикс Token если нет
    api_key = os.environ.get('CRYPTOCLOUD_API_KEY', '').strip()
    if api_key and not api_key.startswith('Token '):
        api_key = f'Token {api_key}'

    payload_data = json.dumps({
        'shop_id': 'PVYbc2w7jDSWc7aJ',
        'amount': 20,
        'currency': 'USD',
        'success_url': success_url,
    }).encode('utf-8')

    req = urllib.request.Request(
        'https://api.cryptocloud.plus/v2/invoice/create',
        data=payload_data,
        headers={
            'Authorization': api_key,
            'Content-Type': 'application/json',
        },
        method='POST'
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': f'CryptoCloud {e.code}', 'detail': error_body[:300]})
        }

    # Ссылка на оплату в result.link
    pay_url = (result.get('result') or {}).get('link', '')

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        'body': json.dumps({'pay_url': pay_url, 'raw': result})
    }
