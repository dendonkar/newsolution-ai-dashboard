<template>
  <div class="p-6 flex flex-col gap-8">
    <!-- KPI -->
    <KPISection :loading="loading" :data="kpiData" />

    <!-- Chart -->
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-80">
      <LineChart v-if="!loading" :labels="chartLabels" :values="chartValues" />
      <ChartSkeleton v-else />
    </div>

    <!-- Insight Section -->
    <InsightSection :loading="loading" :insights="insightList" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

/* UI Components */
import KPISection from "@/components/kpi/KPISection.vue";
import LineChart from "@/components/charts/LineChart.vue";
import ChartSkeleton from "@/components/skeleton/ChartSkeleton.vue";
import InsightSection from "@/insight/InsightSection.vue";

/* Dashboard Logic */
import { useDashboard } from "@/components/composables/useDashboard";

const {
  loading,
  kpiData,
  chartLabels,
  chartValues,
  insightList,
  loadDashboard,
} = useDashboard();

onMounted(() => loadDashboard());
</script>
