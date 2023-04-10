const https = require('https');

function main(args) {

    let postData = JSON.stringify({
        "personalizations": [{ "to": [{ "email": args.to }] }],
        "from": { "email": args.from },
        "subject": "Sending with SendGrid is Fun",
        "content": [
            { "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }
        ]
    })

    let options = {
        hostname: 'api.sendgrid.com',
        port: 443,
        path: '/v3/mail/send',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Bearer ' + args.sendgrid
        }
    };
    return new Promise(function (resolve, reject) {
        let req = https.request(options, function (res) {
            // reject on bad status
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject({"body": {"ok": false, "error": res.statusCode }});
            }
            res.on('data', function(data) { 
                console.log(data)
            })
            // resolve on end
            res.on('end', function () {
                resolve({"body":{"ok": true}});
            });
        });
        // reject on request error
        req.on('error', function (err) {
            reject({"body":{"ok": false, "error": err }});
        });
        if (postData) {
            req.write(postData);
        }
        // IMPORTANT
        req.end();
    });
}