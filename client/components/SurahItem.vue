<script setup lang="ts">
import { Verses } from '~~/types';

const props = defineProps<{
  surahNumber: number;
  surahNameEnglish: string;
  surahNameTranslation: string;
  surahNameArabic: string;
  verses: Verses;
}>();

const generateImageSrc = (surah: number, verse: number) => {
  return `../assets/quran/${surah}_${verse}.png`;
};

const versesList = props.verses;
</script>

<template>
  <div>
    <div
      class="flex text-sm justify-around items-center bg-primary-blue text-white font-body rounded-md"
    >
      <p>{{ props.surahNumber }}</p>
      <p>{{ props.surahNameEnglish }} | {{ props.surahNameTranslation }}</p>
      <p>{{ props.surahNameArabic }}</p>
    </div>
    <div
      v-for="(verse, index) in props.verses.en"
      class="bg-gray-300 p-2 my-2 rounded-md"
    >
      <img :src="generateImageSrc(props.surahNumber, verse.id)" />
      <p>{{ verse.text }}</p>
      {{ props.verses.ur[index].text }}
    </div>
  </div>
</template>
