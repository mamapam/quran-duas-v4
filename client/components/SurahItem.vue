<script setup lang="ts">
import { Verses } from '~~/types';

const props = defineProps<{
  surahNumber: number;
  surahNameEnglish: string;
  surahNameTranslation: string;
  surahNameArabic: string;
  verses: Verses;
}>();
</script>

<template>
  <div>
    <div
      class="flex flex-col xs:flex-row text-sm justify-around items-center bg-primary-blue text-white font-body rounded-t-none rounded-md p-2 text-center sticky -top-4"
    >
      <p>{{ props.surahNumber }}</p>
      <p class="font-semibold">
        {{ props.surahNameEnglish }} | {{ props.surahNameTranslation }}
      </p>
      <p class="font-quran text-lg">{{ props.surahNameArabic }}</p>
    </div>
    <div
      v-for="(verse, index) in props.verses.en"
      :key="verse.text"
      class="bg-gray-300 p-2 my-2 rounded-md flex flex-col gap-3"
    >
      <p class="self-end font-quran text-lg lg:text-xl" dir="rtl">
        {{ props.verses.ar[index].text
        }}<verse-ending :verse="props.verses.ar[index].id.toString()" />
      </p>
      <p class="text-sm md:text-base">{{ verse.text }}</p>
      <p class="self-end font-urdu text-lg lg:text-xl" dir="rtl">
        {{ props.verses.ur[index].text }}
      </p>
    </div>
  </div>
</template>
