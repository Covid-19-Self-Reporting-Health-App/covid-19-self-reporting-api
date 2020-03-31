// redis-client.js
const redis = require('redis');
const {promisify} = require('util');
const client = redis.createClient(
  process.env.REDIS_URL || 'redis://127.0.0.1:6379'
);

module.exports = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};
