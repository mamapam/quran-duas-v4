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

const { REDIS_URL } = process.env;

const { QURAN_API } = process.env;

const config = {
  environment: ENVIRONMENT,
  server: SERVER,
  client: CLIENT,
  redis: REDIS_URL,
  quranApi: QURAN_API,
};

export default config;
