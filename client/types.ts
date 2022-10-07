export interface Verse {
  id: number;
  text: string;
}

export interface Verses {
  en: Verse[];
  ur: Verse[];
}

export interface Surah {
  number: number;
  arabicName: string;
  englishName: string;
  englishTranslation: string;
}

export interface SurahResponse {
  id: number;
  surah: Surah;
  verses: Verses;
}
