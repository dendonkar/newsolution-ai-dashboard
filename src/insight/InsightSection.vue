<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold text-slate-800">AI 분석 인사이트</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InsightCard
        v-for="insight in insights"
        :key="insight.title"
        :icon="insight.icon"
        :title="insight.title"
        :description="insight.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InsightCard from "./InsightCard.vue";
import type { Component } from "vue";

defineProps<{
  loading?: boolean;
  insights: {
    icon: Component;
    title: string;
    description: string;
  }[];
}>();
</script>
