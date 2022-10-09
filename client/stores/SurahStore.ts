import { defineStore } from 'pinia';
import { SurahResponse } from '~~/types';

export const useSurahStore = defineStore('SurahStore', {
  state: () => {
    return {
      surahList: [] as SurahResponse[],
      filteredSurahs: [] as number[],
    };
  },
  getters: {
    getSurahList(state) {
      return state.surahList;
    },
    getFilteredList(state) {
      return state.filteredSurahs;
    },
  },
  actions: {
    setSurahList(surahs: SurahResponse[]) {
      this.surahList = surahs;
    },
    setFilterList(surahNums: number[]) {
      this.filteredSurahs = surahNums;
    },
  },
});
