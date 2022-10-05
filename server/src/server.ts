import express from 'express';
import cors from 'cors';
import client from './utils/redis-init';
import config from './utils/config';
import logger from './utils/logger';
import { getQuranData } from './data/quran-data';
import quranRoutes from './routes/quran';

client.connect();
const app = express();

const primeCache = async () => {
  const dataString = await client.get('quran-data');
  if (dataString === null) {
    const data = await getQuranData();
    await client.set('quran-data', JSON.stringify(data));
  }
};
primeCache();

app.use(cors());

app.use('/api', quranRoutes);

app.listen(config.server.port, () => {
  logger.info(`Listening on port ${config.server.port}...`);
});
