var obj = JSON.parse($response.body);
obj.subscriber.entitlements={
    "premium": {
        "expires_date": "2099-12-31T23:59:59Z",
        "product_identifier": "com.neybox.pillow.premium.month",
        "purchase_date": "2023-09-26T00:00:00Z"
      }
};
obj.subscriber.subscriptions={
    "com.neybox.pillow.premium.month": {
        "expires_date": "2099-12-31T23:59:59Z",
        "original_purchase_date": "2023-09-26T00:00:00Z",
        "purchase_date": "2023-09-26T00:00:00Z"
      }
};

$done({ "body": JSON.stringify(obj) });