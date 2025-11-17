<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 flex flex-col gap-6"
  >
    <!-- 제목 -->
    <div>
      <h2 class="text-lg font-semibold text-slate-800">디바이스 분포</h2>
      <p class="text-sm text-slate-500 mt-1">방문자 디바이스 비율</p>
    </div>

    <!-- 리스트 -->
    <div class="flex flex-col gap-4">
      <div
        v-for="(deviceLabel, index) in labels"
        :key="deviceLabel"
        class="flex flex-col gap-1"
      >
        <div class="flex justify-between items-center">
          <span class="text-slate-700 text-sm">
            {{ deviceLabel }}
          </span>

          <span class="text-slate-800 font-medium text-sm">
            {{ values[index] }}%
          </span>
        </div>

        <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full bg-blue-600 transition-all"
            :style="{ width: values[index] + '%' }"
          />
        </div>
      </div>
    </div>

    <!-- 하단 Bar Chart -->
    <div class="w-full h-48">
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center w-full h-full rounded-xl border-2 border-dashed border-slate-200 bg-slate-50"
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

        <p class="text-slate-600 font-medium">Bar Chart 영역</p>
        <p class="text-slate-400 text-sm mt-1">Chart.js Bar Chart</p>
      </div>

      <Bar v-else :data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const props = defineProps<{
  labels: readonly string[];
  values: readonly number[];
  loading: boolean;
}>();

/* Bar Chart 데이터 */
const chartData = computed(
  (): ChartData<"bar"> => ({
    labels: [...props.labels],
    datasets: [
      {
        label: "Visitors",
        data: [...props.values],
        backgroundColor: "#3B82F6",
        borderRadius: 6,
        barThickness: window.innerWidth < 768 ? 28 : 55,
      },
    ],
  })
);

/* Bar Chart 옵션 */
const chartOptions = computed(
  (): ChartOptions<"bar"> => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
      y: {
        grid: { color: "#E2E8F0" },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
    },
  })
);
</script>
