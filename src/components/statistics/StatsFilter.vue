<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
  >
    <!-- 왼쪽: 타이틀 -->
    <div>
      <h2 class="text-lg font-semibold text-slate-800">데이터 필터</h2>
      <p class="mt-1 text-sm text-slate-500">
        실시간 데이터 분석 범위와 기기를 선택합니다.
      </p>
    </div>

    <!-- 오른쪽: 셀렉트 2개 -->
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <!-- 기간 선택 -->
      <div class="flex items-center gap-2">
        <label class="text-sm text-slate-600" for="range-select"> 기간 </label>
        <div class="relative">
          <select
            id="range-select"
            v-model="selectedRange"
            class="h-9 rounded-lg border border-slate-300 bg-slate-50 px-3 pr-8 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none"
          >
            <option
              v-for="option in rangeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <span
            class="pointer-events-none absolute inset-y-0 right-2 flex items-center"
          >
            <ChevronDownIcon class="w-4 h-4 text-slate-400" />
          </span>
        </div>
      </div>

      <!-- 디바이스 선택 -->
      <div class="flex items-center gap-2">
        <label class="text-sm text-slate-600" for="device-select"> 기기 </label>
        <div class="relative">
          <select
            id="device-select"
            v-model="selectedDevice"
            class="h-9 rounded-lg border border-slate-300 bg-slate-50 px-3 pr-8 text-sm text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none"
          >
            <option
              v-for="option in deviceOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <span
            class="pointer-events-none absolute inset-y-0 right-2 flex items-center"
          >
            <ChevronDownIcon class="w-4 h-4 text-slate-400" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { ref, watch } from "vue";

/* 기간 옵션 타입 */
interface RangeOption {
  value: "last_7_days" | "last_30_days" | "last_90_days";
  label: string;
}

/* 기기 옵션 타입 */
interface DeviceOption {
  value: "all" | "mobile" | "desktop" | "tablet";
  label: string;
}

/* 상위에서 필터 변경을 받고 싶을 때를 위한 emit 정의 */
const emit = defineEmits<{
  (
    event: "change",
    payload: { range: RangeOption["value"]; device: DeviceOption["value"] }
  ): void;
}>();

/* 셀렉트 박스 옵션 목록 */
const rangeOptions: RangeOption[] = [
  { value: "last_7_days", label: "최근 7일" },
  { value: "last_30_days", label: "최근 30일" }, // 시안 기본값
  { value: "last_90_days", label: "최근 90일" },
];

const deviceOptions: DeviceOption[] = [
  { value: "all", label: "모든 기기" }, // 시안 기본값
  { value: "mobile", label: "모바일" },
  { value: "desktop", label: "데스크탑" },
  { value: "tablet", label: "태블릿" },
];

/* 현재 선택 상태 */
const selectedRange = ref<RangeOption["value"]>("last_30_days");
const selectedDevice = ref<DeviceOption["value"]>("all");

/* 선택 값이 바뀔 때마다 상위로 알려주기 */
watch(
  [selectedRange, selectedDevice],
  ([range, device]) => {
    emit("change", { range, device });
  },
  { immediate: true }
);
</script>
