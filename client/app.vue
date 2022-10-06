<script setup lang="ts">
import { useSurahStore } from './stores/SurahStore';

const surahStore = useSurahStore();

onServerPrefetch(async () => {
  const { data } = await useFetch('/api/quran');
  surahStore.setSurahList(data.value);
});
</script>

<template>
  <div class="h-screen">
    <the-nav />
    {{ surahStore.getSurahList }}
  </div>
</template>
