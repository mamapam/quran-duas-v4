export interface VersesObject {
  surah: number;
  ayah: number[];
}

export interface Verse {
  id: number;
  text: string;
}

export interface SurahResponse {
  id: number;
  surah: {
    number: number;
    arabicName: string;
    englishName: string;
    englishTranslation: string;
  };
  verses: {
    en: Verse[];
    ur: Verse[];
    ar: Verse[];
  };
}

export interface QuranApiAyahData {
  number: number;
  text: string;
  edition: {
    identifier: string;
    language: string;
    name: string;
    englishName: string;
    format: string;
    type: string;
    direction: string;
  };
  surah: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface QuranApiAyahResponse {
  code: number;
  status: string;
  data: QuranApiAyahData[];
}
