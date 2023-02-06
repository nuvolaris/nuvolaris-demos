import redis
def main(args):
    db = redis.Host("redis")
    return {
        "body": "hello"
    }