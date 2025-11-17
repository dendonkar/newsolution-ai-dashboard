<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 flex flex-col gap-4"
  >
    <!-- 제목 영역 -->
    <div>
      <h2 class="text-lg font-semibold text-slate-800">브라우저 통계</h2>
      <p class="text-sm text-slate-500 mt-1">브라우저별 방문 비율</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8 mt-4">
      <!-- 왼쪽: 브라우저 Progress 리스트 -->
      <div class="flex-1 flex flex-col gap-4">
        <div
          v-for="browserItem in browserStats"
          :key="browserItem.browser"
          class="flex flex-col gap-1"
        >
          <!-- 상단: 브라우저 이름 + 비율 -->
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <component
                :is="iconMap[browserItem.browser]"
                class="w-5 h-5 text-slate-600"
              />
              <span class="text-slate-700 text-sm">
                {{ browserItem.browser }}
              </span>
            </div>

            <span class="text-slate-800 font-medium text-sm">
              {{ browserItem.rate }}%
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full rounded-full bg-blue-600 transition-all"
              :style="{ width: browserItem.rate + '%' }"
            />
          </div>
        </div>
      </div>

      <!-- 오른쪽: Bar Chart -->
      <div class="w-full lg:w-1/2 h-48">
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

          <p class="text-slate-600 font-medium">브라우저 통계 차트</p>
          <p class="text-slate-400 text-sm mt-1">Chart.js Bar Chart</p>
        </div>

        <BrowserBarChart v-else :labels="chartLabels" :values="chartValues" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

/* 타입 임포트 */
import type { BrowserStat } from "@/components/composables/useStatistics";

/* props 타입 */
const props = defineProps<{
  loading: boolean;
  browserStats: readonly BrowserStat[];
}>();

/* Bar Chart 컴포넌트 */
import BrowserBarChart from "@/components/charts/BrowserBarChart.vue";

/* 브라우저 아이콘 */
import { GlobeAltIcon } from "@heroicons/vue/24/outline";

/* iconMap 타입 안전하게 정의 */
const iconMap: Record<BrowserStat["browser"], typeof GlobeAltIcon> = {
  Chrome: GlobeAltIcon,
  Safari: GlobeAltIcon,
  Edge: GlobeAltIcon,
  Firefox: GlobeAltIcon,
};

/* BarChart용 labels */
const chartLabels = computed<string[]>(() =>
  props.browserStats.map((browserItem) => browserItem.browser)
);

/* BarChart용 values */
const chartValues = computed<number[]>(() =>
  props.browserStats.map((browserItem) => browserItem.rate)
);
</script>
