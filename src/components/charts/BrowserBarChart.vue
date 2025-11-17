<template>
  <div class="w-full h-full">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
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
}>();

/** Bar Chart Data */
const chartData = computed<ChartData<"bar">>(() => ({
  labels: [...props.labels],
  datasets: [
    {
      label: "Browser Rate",
      data: [...props.values],
      backgroundColor: "#3B82F6",
      borderRadius: 6,
      barThickness: 55,
    },
  ],
}));

/** Bar Chart Options */
const chartOptions = computed<ChartOptions<"bar">>(() => ({
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
}));
</script>
