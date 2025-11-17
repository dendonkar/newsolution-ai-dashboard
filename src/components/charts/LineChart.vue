<template>
  <div class="w-full h-full">
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
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

const chartData = ref<ChartData<"line">>();
const chartOptions = ref<ChartOptions<"line">>({
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { ticks: { color: "#64748B" }, grid: { display: false } },
    y: { ticks: { color: "#64748B" }, grid: { color: "#E2E8F0" } },
  },
});

watchEffect(() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(59,130,246,0.4)");
  gradient.addColorStop(1, "rgba(59,130,246,0)");

  chartData.value = {
    labels: props.labels,
    datasets: [
      {
        label: "Visitors",
        data: props.values,
        borderColor: "#3B82F6",
        backgroundColor: gradient,
        borderWidth: 2,
        fill: true,
        tension: 0.35,
        pointRadius: 3,
      },
    ],
  };
});
</script>
