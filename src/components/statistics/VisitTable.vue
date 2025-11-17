<template>
  <section
    class="bg-white rounded-xl border border-slate-200 shadow-sm px-6 py-6 flex flex-col gap-4"
  >
    <!-- 제목 -->
    <div>
      <h2 class="text-lg font-semibold text-slate-800">최근 방문 기록</h2>
      <p class="text-sm text-slate-500 mt-1">최근 20개 방문 로그</p>
    </div>

    <!-- 로딩 -->
    <div v-if="loading" class="flex flex-col gap-3">
      <div
        v-for="i in 5"
        :key="i"
        class="w-full h-10 bg-slate-100 animate-pulse rounded-md"
      />
    </div>

    <!-- 테이블 -->
    <table v-else class="w-full text-sm">
      <thead>
        <tr class="text-slate-500 border-b">
          <th class="py-2 text-left">시간</th>
          <th class="py-2 text-left">사용자</th>
          <th class="py-2 text-left">디바이스</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="log in logs" :key="log.id" class="border-b last:border-none">
          <td class="py-2 text-slate-800">{{ log.time }}</td>
          <td class="py-2">{{ log.user }}</td>
          <td class="py-2">
            <span
              class="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700"
            >
              {{ log.device }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import type { VisitLog } from "@/components/composables/useStatistics";

const props = defineProps<{
  logs: readonly VisitLog[];
  loading: boolean;
}>();
</script>
