<template>
  <div
    class="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2 border border-slate-100"
  >
    <h3 class="text-sm font-medium text-slate-500">{{ title }}</h3>

    <p class="text-2xl font-bold text-slate-800">{{ value }}</p>

    <!-- 증감 표시 -->
    <div
      v-if="diff !== null"
      class="text-sm font-semibold"
      :class="{
        'text-emerald-600': diff > 0,
        'text-red-500': diff < 0,
        'text-slate-500': diff === 0,
      }"
    >
      <span v-if="diff > 0">▲ {{ diff }}%</span>
      <span v-else-if="diff < 0">▼ {{ Math.abs(diff) }}%</span>
      <span v-else>-</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  value: string | number;
  diff: number | null;
}
defineProps<Props>();
</script>
