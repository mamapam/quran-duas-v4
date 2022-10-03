import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5005;
const SERVER = {
  hostName: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const CLIENT_HOSTNAME = process.env.CLIENT_HOST || 'localhost';
const CLIENT_PORT = process.env.CLIENT_PORT || '3000';
const CLIENT = {
  hostName: CLIENT_HOSTNAME,
  port: CLIENT_PORT,
};

const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS = {
  hostName: REDIS_HOSTNAME,
  port: REDIS_PORT,
};

const { QURAN_API } = process.env;

const config = {
  environment: ENVIRONMENT,
  server: SERVER,
  client: CLIENT,
  redis: REDIS,
  quranApi: QURAN_API,
};

export default config;
