import redis 

def main(args):
  db = redis.Redis(args.get("redis", "localhost"))
  key = 'address2:' + args.get("name", "")
  try:
    res = db.delete(key)
    return { "del": res }
  except Exception as ex:
    return { "error": str(ex) }