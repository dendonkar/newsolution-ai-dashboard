<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- 카드 반복 -->
    <div
      v-for="kpi in kpiItems"
      :key="kpi.label"
      class="bg-white rounded-xl border border-slate-200 shadow-sm p-6"
    >
      <!-- 로딩 중일 때 -->
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center w-full h-24 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-slate-400 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3v1m0 16v1m18-1v1m0-16V3M9 15l3-3 4 4"
          />
        </svg>

        <p class="text-slate-600 font-medium">{{ kpi.label }}</p>
      </div>

      <!-- 로딩 아니면 -->
      <div v-else>
        <p class="text-sm text-slate-500">{{ kpi.label }}</p>
        <p class="text-2xl font-semibold text-slate-800 mt-2">
          {{ kpi.value.toLocaleString() }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean;
  totalVisitors: number;
  uniqueVisitors: number;
  returningUsers: number;
}>();

/* 카드용 가공 데이터 */
const kpiItems = [
  { label: "총 방문자", value: props.totalVisitors },
  { label: "유니크 방문자", value: props.uniqueVisitors },
  { label: "재방문자", value: props.returningUsers },
];
</script>
