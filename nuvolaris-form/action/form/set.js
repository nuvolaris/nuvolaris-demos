async function main(args){
    console.log(args)
    const db = require("redis").createClient({"url":args.redis})
    await db.connect()
    //validate firstname, lastname and email
    let msg = []
    let errors = []
    if (args.firstname){
        msg.push("Firstname: "+args.firstname)
    } else {
        errors.push("no firstname provided")
    }
    if (args.firstname){
        msg.push("Lastname: "+args.lastname)
    } else {
        errors.push("no lastname provided")
    }
    var re =/\S+@\S+\.\S+/;
    if (args.email && re.test(args.email)) {
        msg.push("Email: "+args.email)
    } else {
        errors.push("no email provided")
    }
    if(errors.length){
        return{"body":{"ok":false, "error":errors}}
    }
    
    let key = "messages:"+args.email
    let value = JSON.stringify({
        "Firstname": args.firstname || "",
        "Lastname": args.lastname || "",
        "Company": args.company || "",
        "Email": args.email || "",
        "Textmessage": args.textmessage || ""
    })
    return db.set(key,value)
    .then(replay => ({"body":{"ok":replay=="OK",error:replay}}))
    .catch(err => ({"body":{"ok":false, "error": err }}))
    }
