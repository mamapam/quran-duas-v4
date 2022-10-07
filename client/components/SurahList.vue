<script setup lang="ts">
import { useSurahStore } from '~~/stores/SurahStore';

const surahStore = useSurahStore();

const surahList = surahStore.getSurahList;
</script>

<template>
  <div class="bg-gray-200 p-4 m-2 rounded-md font-body text-sm">
    <surah-item
      v-for="surah in surahList"
      :key="surah.id"
      :surah-number="surah.surah.number"
      :surah-name-arabic="surah.surah.arabicName"
      :surah-name-english="surah.surah.englishName"
      :surah-name-translation="surah.surah.englishTranslation"
      :verses="surah.verses"
    />
  </div>
</template>
