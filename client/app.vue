<script setup lang="ts">
import { onMounted } from 'vue';
import { useSurahStore } from './stores/SurahStore';

const surahStore = useSurahStore();

onMounted(() => {
  setTimeout(() => {
    surahStore.fetch();
  }, 2000);
  //surahStore.fetch();
  // console.log(surahStore.getSurahList);
});
</script>

<template>
  <div class="h-screen">
    <the-nav />
    {{ surahStore.getSurahList }}
  </div>
</template>
