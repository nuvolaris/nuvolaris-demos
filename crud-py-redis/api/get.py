import redis, json

def main(args):
  db = redis.Redis(args.get("redis", "localhost"))
  key = 'address2:' + args.get("name", "")
  try:
    val = db.get(key).decode("utf-8")
    return json.loads(val)
  except Exception as ex:
    return { "error": str(ex) }