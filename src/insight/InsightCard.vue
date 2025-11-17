<template>
  <div
    class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
  >
    <div class="flex items-center gap-3 mb-3">
      <div
        class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
      >
        <component :is="icon" class="w-6 h-6 text-primary" />
      </div>

      <h3 class="text-lg font-semibold text-slate-800">
        {{ title }}
      </h3>
    </div>

    <p class="text-slate-600 text-sm leading-relaxed mb-4">
      {{ description }}
    </p>

    <span class="text-primary text-sm font-medium">AI 추천</span>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  title: string;
  description: string;
}>();
</script>
