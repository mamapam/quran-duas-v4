<script setup lang="ts">
import { useSurahStore } from '~~/stores/SurahStore';
import { SurahResponse } from '~~/types';

const surahStore = useSurahStore();
const surahData: SurahResponse[] = surahStore.getSurahList;
const checked = ref([] as number[]);

const resetFilter = () => (checked.value = []);

watch(checked, (newChecked) => {
  surahStore.setFilterList(newChecked);
});
</script>

<template>
  <div class="bg-gray-200 p-4 m-2 rounded-md font-body text-sm">
    <div class="flex justify-between pb-4 items-center">
      <p class="font-bold text-sm pb-2 uppercase tracking-widest">
        Filter <Icon name="eva:options-outline" />
      </p>
      <button
        class="bg-transparent hover:bg-primary-blue font-semibold hover:text-white py-1 px-2 border-2 border-primary-blue hover:border-transparent rounded tracking-widest uppercase"
        @click="resetFilter"
      >
        Reset
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
              v-model="checked"
              :value="surah.id"
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
