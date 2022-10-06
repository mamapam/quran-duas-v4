import { defineStore } from 'pinia';
import { SurahResponse } from '~~/types';

export const useSurahStore = defineStore('SurahStore', {
  state: () => {
    return {
      surahList: [] as SurahResponse[],
    };
  },
  getters: {
    getSurahList(state) {
      return state.surahList;
    },
  },
  actions: {
    setSurahList(surahs: SurahResponse[]) {
      this.surahList = surahs;
    },
  },
});
