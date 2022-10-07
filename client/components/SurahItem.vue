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
</script>

<template>
  <div>
    <div
      class="flex flex-col xs:flex-row text-sm justify-around items-center bg-primary-blue text-white font-body rounded-md p-2 text-center"
    >
      <p>{{ props.surahNumber }}</p>
      <p class="font-semibold">
        {{ props.surahNameEnglish }} | {{ props.surahNameTranslation }}
      </p>
      <p class="font-arabic">{{ props.surahNameArabic }}</p>
    </div>
    <div
      v-for="(verse, index) in props.verses.en"
      class="bg-gray-300 p-2 my-2 rounded-md flex flex-col"
    >
      <img
        :src="generateImageSrc(props.surahNumber, verse.id)"
        class="self-end"
      />
      <p class="text-sm md:text-base">{{ verse.text }}</p>
      <p class="self-end font-urdu text-lg lg:text-xl" dir="rtl">
        {{ props.verses.ur[index].text }}
      </p>
    </div>
  </div>
</template>
