import { createClient } from 'redis';
import logger from './logger';
import config from './config';

const client = createClient({
  socket: {
    host: config.redis.hostName,
    port: +config.redis.port,
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
