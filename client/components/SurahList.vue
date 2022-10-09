<script setup lang="ts">
import { useSurahStore } from '~~/stores/SurahStore';
import { SurahResponse } from '~~/types';

const surahStore = useSurahStore();

const surahData: SurahResponse[] = surahStore.getSurahList;

const filteredSurahs = computed(() => {
  const filtered = surahStore.getFilteredList;
  if (filtered.length === 0) {
    return surahData;
  } else {
    const filteredSurahs = surahData.filter((surah) =>
      filtered.includes(surah.id)
    );
    return filteredSurahs;
  }
});
</script>

<template>
  <div class="bg-gray-200 p-4 m-2 rounded-md font-body text-sm">
    <surah-item
      v-for="surah in filteredSurahs"
      :key="surah.id"
      :surah-number="surah.surah.number"
      :surah-name-arabic="surah.surah.arabicName"
      :surah-name-english="surah.surah.englishName"
      :surah-name-translation="surah.surah.englishTranslation"
      :verses="surah.verses"
    />
  </div>
</template>
