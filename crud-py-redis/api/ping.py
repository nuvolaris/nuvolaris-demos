import redis

def main(args):
  db = redis.Redis(args.get("redis", "localhost"))
  return {
    "body": db.ping()
  }