<script setup lang="ts">
import { useSurahStore } from './stores/SurahStore';

useHead({ title: 'Quran Duas' });

const surahStore = useSurahStore();

onServerPrefetch(async () => {
  const { data } = await useFetch('/api/quran');
  surahStore.setSurahList(data.value);
});
</script>

<template>
  <div class="h-screen">
    <the-nav />
    <div
      class="grid grid-cols-1 grid-rows-[1fr_2fr] h-[calc(100vh-7rem)] md:h-[calc(100vh-5rem)]"
    >
      <surah-filter class="overflow-scroll overflow-x-hidden" />
      <surah-list class="overflow-scroll overflow-x-hidden" />
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 0.5rem;
  height: 1rem;
}
::-webkit-scrollbar-track {
  background: rgb(158, 167, 158);
}
::-webkit-scrollbar-thumb {
  background: rgb(70, 73, 70);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(35, 36, 35, 0.5);
}

@supports (scrollbar-color: red blue) {
  * {
    scrollbar-color: rgb(70, 73, 70) rgb(158, 167, 158);
    scrollbar-width: thin;
  }
}

@font-face {
  font-family: 'MeQuran';
  src: local('MeQuran'), url('./assets/fonts/me_quran_2.ttf') format('truetype');
}

@font-face {
  font-family: 'QalamQuran';
  src: local('QalamQuran'),
    url('./assets/fonts/al_qalam_quran.ttf') format('truetype');
}

@font-face {
  font-family: 'Urdu';
  src: local('Urdu'), url('./assets/fonts/Jameel_1.ttf') format('truetype');
}
</style>
