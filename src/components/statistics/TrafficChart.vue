<template>
  <Line :data="lineChartData" :options="lineChartOptions" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const props = defineProps<{
  labels: string[];
  values: number[];
}>();

const lineChartData = computed<ChartData<"line">>(() => ({
  labels: props.labels,
  datasets: [
    {
      label: "Visitors",
      data: props.values,
      borderColor: "#2563EB",
      backgroundColor: "rgba(37, 99, 235, 0.15)",
      borderWidth: 2,
      fill: true,
      tension: 0.35,
      pointRadius: 3,
      pointHoverRadius: 5,
      pointBackgroundColor: "#2563EB",
    },
  ],
}));

const lineChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: false,
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
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#64748B" },
    },
    y: {
      grid: { color: "#E2E8F0" },
      ticks: { color: "#64748B" },
    },
  },
}));
</script>
