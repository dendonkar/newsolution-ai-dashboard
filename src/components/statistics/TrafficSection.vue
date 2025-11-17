<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 flex flex-col gap-4"
  >
    <!-- 제목 영역 -->
    <div class="flex items-start justify-between">
      <div>
        <h2 class="text-lg font-semibold text-slate-800">30일 방문자 추이</h2>
        <p class="text-sm text-slate-500 mt-1">일별 방문자 수 변화</p>
      </div>

      <!-- 범례 -->
      <div class="flex items-center gap-4 text-sm mt-1">
        <div class="flex items-center gap-1">
          <span
            class="w-3 h-3 rounded-full"
            style="background-color: #2563eb"
          ></span>
          <span class="text-slate-600">방문자</span>
        </div>

        <div class="flex items-center gap-1">
          <span
            class="w-3 h-3 rounded-full"
            style="background-color: #22c55e"
          ></span>
          <span class="text-slate-600">신규 방문자</span>
        </div>
      </div>
    </div>

    <!-- 차트 박스 -->
    <div class="w-full h-72 mt-2">
      <!-- 로딩: 점선 박스 -->
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center w-full h-full rounded-xl border-2 border-dashed border-slate-200 bg-slate-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-slate-400 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3v1m0 16v1m18-1v1m0-16V3M9 15l3-3 4 4"
          />
        </svg>

        <p class="text-slate-600 font-medium">방문자 추이 차트</p>
        <p class="text-slate-400 text-sm mt-1">Chart.js Line Chart 영역</p>
      </div>

      <!-- 실제 차트 출력 -->
      <TrafficChart v-else :labels="labels" :values="values" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TrafficChart from "@/components/statistics/TrafficChart.vue";

const props = defineProps<{
  loading: boolean;
  labels: string[];
  values: number[];
}>();
</script>
