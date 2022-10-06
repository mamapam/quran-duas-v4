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
  };
}
