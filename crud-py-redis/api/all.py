import redis, json

def main(args):
  db = redis.Redis(args.get("redis", "localhost"))
  keys = db.keys('address2:*')
  if len(keys) == 0:
    return {'data': []}
  else:
    try:
      data = [json.loads(x) for x in db.mget(keys)]
      return {'data': data }
    except Exception as ex:
      return { "error": str(ex) }
