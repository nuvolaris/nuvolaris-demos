async function main(args) {

    let res = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + args.sendgrid
        },
        body: JSON.stringify({
            "from": { "email": args.from },
            "subject": "Sending with SendGrid is Fun",
            "personalizations": [
                { "to": [{ "email": args.to }] }
            ],
            "content": [
                { "type": "text/plain", "value": "and easy to do anywhere, even with cURL" }
            ]
        })
    })
    return { 
        body: { ok: res.ok } 
    }
}
