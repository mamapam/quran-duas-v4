<script setup lang="ts">
import { useSurahStore } from '~~/stores/SurahStore';
import { SurahResponse } from '~~/types';

const surahStore = useSurahStore();
const surahData: SurahResponse[] = surahStore.getSurahList;
</script>

<template>
  <div class="h-[25%] overflow-scroll bg-gray-200 p-4 overflow-x-hidden">
    <ul class="flex flex-col flex-wrap max-h-160 sm:max-h-106 gap-4">
      <li v-for="surah in surahData" :key="surah.id">
        <input type="checkbox" />{{ surah.surah.englishName }}
      </li>
    </ul>
  </div>
</template>
