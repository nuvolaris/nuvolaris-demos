import redis, json

def main(args):
  try:
    db = redis.Redis(args.get("redis", "localhost"))
    key = 'address2:' + args.get("name", "")
    value = {
      "name": args.get("name", ""),
      'company': args.get("company", ""),
      'phone': args.get("phone", "")
    }
    res = db.set(key, json.dumps(value))
    return { "set": res }
  except Exception as ex:
    return { "error": str(ex) }
