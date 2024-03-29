import { setTimeout } from 'timers/promises';
import axios from '../utils/axios-config';
import logger from '../utils/logger';
import { verses } from './verses';
import type { QuranApiAyahResponse, SurahResponse, Verse } from '../types';

const data: SurahResponse[] = [];

const createVerseUrl = (surah: number, ayah: number) => {
  return `/ayah/${surah}:${ayah}/editions/en.sahih,ur.ahmedali,quran-simple`;
};

export const getQuranData = async () => {
  // Access surah object
  for (const s of verses) {
    const surahObject: SurahResponse = {
      id: s.surah,
      surah: {
        number: 0,
        arabicName: '',
        englishName: '',
        englishTranslation: '',
      },
      verses: {
        en: [],
        ur: [],
        ar: [],
      },
    };

    // Loop through ayahs array, create url and call with axios.
    // Store surah response from first ayah, and store verse data from all ayah
    for (let i = 0; i < s.ayah.length; i++) {
      logger.info(`Getting surah ${s.surah} - verse ${s.ayah[i]}`);
      const url = createVerseUrl(s.surah, s.ayah[i]);

      try {
        const {
          data: { data },
        } = await axios.get<QuranApiAyahResponse>(url);
        const englishData = data[0];
        const urduData = data[1];
        const arabicData = data[2];

        if (i == 0) {
          // in first ayah, store surah data as well
          surahObject.surah.number = englishData.surah.number;
          surahObject.surah.arabicName = englishData.surah.name;
          surahObject.surah.englishName = englishData.surah.englishName;
          surahObject.surah.englishTranslation =
            englishData.surah.englishNameTranslation;
        }

        const englishVerseData: Verse = {
          id: englishData.numberInSurah,
          text: englishData.text,
        };
        surahObject.verses.en.push(englishVerseData);

        const urduVerseData: Verse = {
          id: urduData.numberInSurah,
          text: urduData.text,
        };
        surahObject.verses.ur.push(urduVerseData);

        const arabicVerseData: Verse = {
          id: arabicData.numberInSurah,
          text: arabicData.text,
        };
        surahObject.verses.ar.push(arabicVerseData);
      } catch (error) {
        logger.error(error);
      }
    }
    data.push(surahObject);
    logger.info(`Completed surah ${s.surah}`);
    await setTimeout(1000);
  }

  return data;
};
