import { Router } from 'express';
import { getQuranData } from '../controllers/quran';

const router = Router();

router.get('/quran', getQuranData);

export default router;
