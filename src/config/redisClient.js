const redis = require("redis");

// Create a Redis client
const client = redis.createClient({
  host: 'localhost', // Make sure Redis server is running on localhost or update the host accordingly
  port: 6379,
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

module.exports = client;
