import { createClient } from 'redis';
import logger from './logger';
import config from './config';

const client = createClient({
  password: config.redis.password,
  socket: {
    host: config.redis.host,
    port: +config.redis.port!,
  },
});

client.on('connect', () => {
  logger.info('Client connected to redis.');
});

client.on('ready', () => {
  logger.info('Client connected to redis and ready to use.');
});

client.on('error', (err) => {
  logger.error(`Redis Error: ${err}`);
});

client.on('end', () => {
  logger.info('Client disconnected from redis.');
});

process.on('SIGINT', () => {
  client.quit();
});

export default client;
