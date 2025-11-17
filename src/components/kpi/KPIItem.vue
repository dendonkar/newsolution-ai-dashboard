<template>
  <div
    class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2"
  >
    <p class="text-sm text-slate-500 font-medium">{{ label }}</p>

    <p class="text-3xl font-bold text-slate-800">
      {{ value }}
    </p>

    <p
      class="text-sm font-medium"
      :class="trend >= 0 ? 'text-emerald-600' : 'text-red-500'"
    >
      {{ trend >= 0 ? "+" + trend : trend }}%
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
  trend: number;
}>();
</script>
