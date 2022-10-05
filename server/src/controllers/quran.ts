import { Request, Response } from 'express';
import logger from '../utils/logger';
import redis from '../utils/redis-init';
import { SurahResponse } from '../types';

export const getQuranData = async (_: Request, res: Response) => {
  try {
    const quranDataString = await redis.get('quran-data');
    if (quranDataString !== null) {
      const quranData: SurahResponse[] = JSON.parse(quranDataString);
      return res.status(200).json(quranData);
    } else {
      logger.error('Unexpected error thrown');
      return res.status(500);
    }
  } catch (error) {
    logger.error(error);
    return res.status(500);
  }
};
