import redis

def main(args):
  db = redis.Redis(args.get("redis", "localhost"))
  keys = db.keys('address2:*')
  try:
    res =  db.delete(*keys) if len(keys) > 0 else 0 
    return {'delall': res}
  except Exception as ex:
    return { "error": str(ex) }
