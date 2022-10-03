import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';

dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  logger.error('woah there');
  logger.warn('woah there');
  logger.info('woah there');
  logger.debug('woah there');
  logger.http('woah there');
  res.send('Hello World');
});

app.listen(5000, () => {
  logger.info(`Listening on port 5000...`);
});
