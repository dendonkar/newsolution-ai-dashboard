<template>
  <header
    class="w-full h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6"
  >
    <!-- 왼쪽: 페이지 제목 (동적) -->
    <div>
      <h1 class="text-xl font-semibold text-slate-800">
        {{ pageTitle }}
      </h1>
    </div>

    <!-- 가운데: 검색창 -->
    <div class="flex-1 flex justify-center px-6">
      <div class="w-full max-w-md relative">
        <input
          type="text"
          placeholder="Search..."
          class="w-full bg-slate-100 text-slate-700 rounded-lg h-10 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
        <!-- 검색 아이콘 -->
        <svg
          class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61-10.61 7.5 7.5 0 0010.61 10.61z"
          />
        </svg>
      </div>
    </div>

    <!-- 오른쪽: 알림 + 프로필 -->
    <div class="flex items-center gap-4">
      <!-- 알림 버튼 -->
      <button
        class="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
      >
        <img
          src="/icon/notifications.svg"
          alt="Notifications"
          class="w-6 h-6"
        />
      </button>

      <!-- 프로필 -->
      <div class="flex items-center gap-3 cursor-pointer">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full border border-slate-300"
        />

        <span class="text-slate-700 font-medium hidden sm:block"> User </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/* 페이지 제목을 라우트 경로로 자동 매칭 */
const pageTitle = computed(() => {
  const map: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/statistics": "Statistics",
    "/settings": "Settings",
  };

  return map[route.path] ?? "Dashboard";
});
</script>
