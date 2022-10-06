import { SurahResponse } from '~~/types';

export default defineEventHandler(async (event) => {
  const url = 'http://localhost:5005/api/quran';
  const data: SurahResponse[] = await $fetch(url);
  return data;
});
