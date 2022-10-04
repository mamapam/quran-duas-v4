import express, { Request, Response } from 'express';
import client from './utils/redis-init';
import config from './utils/config';
import logger from './utils/logger';
import { getQuranData } from './data/quran-data';

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

app.get('/', (req: Request, res: Response) => {
  logger.error('woah there');
  logger.warn('woah there');
  logger.info('woah there');
  logger.debug('woah there');
  logger.http('woah there');
  res.send('Hello World');
});

app.listen(config.server.port, () => {
  logger.info(`Listening on port ${config.server.port}...`);
});
