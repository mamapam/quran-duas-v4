<script setup lang="ts">
const props = defineProps<{ verse: string }>();

const numDictionary = {
  0: '&#1632;',
  1: '&#1633;',
  2: '&#1634;',
  3: '&#1635;',
  4: '&#1636;',
  5: '&#1637;',
  6: '&#1638;',
  7: '&#1639;',
  8: '&#1640;',
  9: '&#1641;',
};

const convertToArabicNumber = (englishNum: string): string => {
  const arabicNumber: string[] = [];
  [...englishNum].reverse().forEach((char) => {
    arabicNumber.unshift(numDictionary[char]);
  });
  return arabicNumber.join('');
};
</script>

<template>
  <span
    dir="ltr"
    class="ayah font-quran1 text-xs px-5 inline-block relative text-size-sm"
    v-html="convertToArabicNumber(props.verse)"
  ></span>
</template>

<style scoped>
.ayah::after {
  content: '\06DD';
  display: block;
  position: absolute;
  font-size: 2rem;
  top: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
