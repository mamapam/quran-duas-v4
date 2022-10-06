<script setup lang="ts">
import { useSurahStore } from '~~/stores/SurahStore';
import { SurahResponse } from '~~/types';

const surahStore = useSurahStore();
const surahData: SurahResponse[] = surahStore.getSurahList;
</script>

<template>
  <div
    class="h-[25%] overflow-scroll bg-gray-200 p-4 overflow-x-hidden m-2 rounded-md font-body text-sm"
  >
    <div class="flex justify-between pb-4 items-center">
      <p class="font-bold text-sm pb-2 uppercase tracking-widest">Filter</p>
      <button
        class="bg-transparent hover:bg-primary-blue font-semibold hover:text-white py-1 px-2 border-2 border-primary-blue hover:border-transparent rounded tracking-widest uppercase"
      >
        RESET
      </button>
    </div>
    <ul
      class="flex flex-col flex-wrap items-start max-h-160 sm:max-h-106 gap-4"
    >
      <li v-for="surah in surahData" :key="surah.id">
        <p class="text-left">
          <label :for="surah.id.toString()">
            <input
              type="checkbox"
              class="align-bottom relative -top-1 mr-1"
              :id="surah.id.toString()"
            />
            {{ surah.surah.englishName }}
          </label>
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input[type='checkbox'] {
  transform: scale(1.5);
}
</style>
