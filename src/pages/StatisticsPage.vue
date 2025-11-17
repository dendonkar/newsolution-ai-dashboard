<template>
  <div class="page-wrapper flex flex-col gap-8">
    <!-- 필터 -->
    <StatsFilter />

    <!-- KPI Section (총 방문자 / 유니크 방문자 / 재방문자) -->
    <KPIStats
      :total-visitors="totalVisitors"
      :unique-visitors="uniqueVisitors"
      :returning-users="returningUsers"
      :loading="loading"
    />

    <!-- 30일 방문자 추이 -->
    <TrafficSection
      :labels="weeklyLabels"
      :values="weeklyValues"
      :loading="loading"
    />

    <!-- 유입 경로 분석 + 디바이스 분포 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <SourceSection
        :labels="sourceLabels"
        :values="sourceValues"
        :loading="loading"
      />

      <DeviceDistributionChart
        :labels="deviceLabels"
        :values="deviceValues"
        :loading="loading"
      />
    </div>

    <!-- 브라우저 통계 -->
    <BrowserStats :loading="loading" :browser-stats="browserStats" />

    <!-- 방문 로그 테이블 -->
    <VisitTable :logs="visitLogs" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStatistics } from "@/components/composables/useStatistics";

/* Sections */
import StatsFilter from "@/components/statistics/StatsFilter.vue";
import KPIStats from "@/components/statistics/KPIStats.vue";
import TrafficSection from "@/components/statistics/TrafficSection.vue";
import SourceSection from "@/components/statistics/SourceSection.vue";
import BrowserStats from "@/components/statistics/BrowserStats.vue";
import VisitTable from "@/components/statistics/VisitTable.vue";

/* Charts */
import DeviceDistributionChart from "@/components/charts/DeviceDistributionChart.vue";

/* 상태 로직 */
const {
  loading,
  weeklyLabels,
  weeklyValues,
  deviceStats,
  sourceStats,
  visitLogs,
  browserStats,
  totalVisitors,
  uniqueVisitors,
  returningUsers,
  loadStatistics,
} = useStatistics();

/* 유입 경로 */
const sourceLabels = computed(() =>
  sourceStats.value.map((item) => item.source)
);
const sourceValues = computed(() => sourceStats.value.map((item) => item.rate));

/* 디바이스 데이터 */
const deviceLabels = computed(() =>
  deviceStats.value.map((item) => item.device)
);
const deviceValues = computed(() =>
  deviceStats.value.map((item) => item.count)
);

onMounted(() => {
  loadStatistics();
});
</script>
