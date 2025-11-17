<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 flex flex-col gap-4"
  >
    <!-- 제목 -->
    <div>
      <h2 class="text-lg font-semibold text-slate-800">유입 경로 분석</h2>
      <p class="text-sm text-slate-500 mt-1">
        어디서 가장 많이 방문하는지 확인하세요.
      </p>
    </div>

    <!-- 본문 -->
    <div class="flex flex-col lg:flex-row gap-6 mt-2">
      <!-- 로딩: 시안 동일한 점선 박스 -->
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center w-full lg:w-1/2 h-64 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50"
      >
        <!-- 아이콘 -->
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

        <p class="text-slate-600 font-medium">유입 경로 차트</p>
        <p class="text-slate-400 text-sm mt-1">Chart.js Doughnut Chart 영역</p>
      </div>

      <!-- 도넛 차트 -->
      <div v-else class="relative w-full lg:w-1/2 h-64">
        <Doughnut :data="pieData" :options="pieOptions" />

        <!-- 중앙 숫자 -->
        <div
          class="absolute inset-0 flex items-center justify-center flex-col pointer-events-none"
        >
          <span class="text-2xl font-semibold text-slate-800">
            {{ centerValue }}%
          </span>
          <span class="text-sm text-slate-500">주요 경로</span>
        </div>
      </div>

      <!-- 범례 -->
      <div class="flex-1 flex flex-col gap-3">
        <div
          v-for="(label, index) in labels"
          :key="label"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-2">
            <span
              class="w-3 h-3 rounded-full"
              :style="{ backgroundColor: segmentColors[index] }"
            />
            <span class="text-slate-700 text-sm">{{ label }}</span>
          </div>

          <span class="text-slate-800 font-medium text-sm">
            {{ values[index] }}%
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const props = defineProps<{
  labels: readonly string[];
  values: readonly number[];
  loading: boolean;
}>();

const segmentColors: readonly string[] = [
  "#2563EB",
  "#0EA5E9",
  "#6366F1",
  "#22C55E",
];

const pieData = computed(
  (): ChartData<"doughnut"> => ({
    labels: [...props.labels],
    datasets: [
      {
        data: [...props.values],
        backgroundColor: segmentColors.slice(0, props.labels.length),
        borderWidth: 0,
      },
    ],
  })
);

const pieOptions = computed(
  (): ChartOptions<"doughnut"> => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0F172A",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        displayColors: false,
        padding: 10,
      },
    },
  })
);

/* 중앙 값 = 가장 높은 비율 */
const centerValue = computed<number>(() => {
  const max = Math.max(...props.values);
  return max;
});
</script>
