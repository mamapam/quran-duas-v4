import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.PORT || 5005;
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

const { REDIS_HOST } = process.env || 'localhost';
const { REDIS_PASS } = process.env;
const { REDIS_PORT } = process.env || 6379;
const REDIS = {
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASS,
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
