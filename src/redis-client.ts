// redis-client.js
import redis, {RedisClient} from 'redis';
import {promisify} from 'util';
const client: RedisClient = redis.createClient(
  process.env.REDIS_URL || 'redis://127.0.0.1:6379'
);

export default {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};
