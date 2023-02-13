import { SurahResponse } from '~~/types';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.api;
  const url = `${baseUrl}/api/quran`;
  const data: SurahResponse[] = await $fetch(url);
  return data;
});
