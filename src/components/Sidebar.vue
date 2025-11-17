<template>
  <!-- Desktop Sidebar -->
  <aside
    class="hidden md:flex flex-col w-60 h-screen bg-white border-r border-slate-200 p-6 sticky top-0"
  >
    <!-- Logo -->
    <div class="mb-10">
      <div class="flex items-center gap-3">
        <CubeTransparentIcon class="w-8 h-8 text-primary" />
        <div class="flex flex-col leading-tight">
          <span class="text-xl font-bold text-slate-800">AnalyticsPro</span>
          <span class="text-sm text-slate-500">AI Analytics</span>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col gap-3">
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
        :class="{
          'bg-primary text-white hover:bg-primary shadow-sm': isActive(
            item.path
          ),
        }"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span class="font-medium">{{ item.label }}</span>
      </RouterLink>
    </nav>
  </aside>

  <!-- Mobile Toggle Button -->
  <button
    class="md:hidden fixed top-4 left-4 z-50 bg-white border border-slate-200 rounded-lg p-2 shadow-sm"
    @click="toggleMobileSidebar"
  >
    <Bars3Icon class="w-6 h-6 text-slate-700" />
  </button>

  <!-- Overlay -->
  <transition name="fade">
    <div
      v-if="mobileOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click="toggleMobileSidebar"
    ></div>
  </transition>

  <!-- Mobile Sidebar Drawer -->
  <transition name="slide">
    <aside
      v-if="mobileOpen"
      class="fixed top-0 left-0 w-60 h-full bg-white border-r border-slate-200 p-6 z-50 md:hidden"
    >
      <div class="mb-10 flex justify-between items-center">
        <div class="flex items-center gap-3">
          <CubeTransparentIcon class="w-7 h-7 text-primary" />
          <span class="text-xl font-bold text-primary">AnalyticsPro</span>
        </div>

        <button @click="toggleMobileSidebar">
          <XMarkIcon class="w-6 h-6 text-slate-700" />
        </button>
      </div>

      <nav class="flex flex-col gap-3">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
          :class="{
            'bg-primary text-white hover:bg-primary shadow-sm': isActive(
              item.path
            ),
          }"
          @click="toggleMobileSidebar"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span class="font-medium">{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

/* Heroicons */
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
} from "@heroicons/vue/24/outline";

/* Active Checker */
const route = useRoute();
const isActive = (path: string) => route.path === path;

/* Navigation Items */
const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { label: "Statistics", path: "/statistics", icon: ChartBarIcon },
  { label: "Settings", path: "/settings", icon: Cog6ToothIcon },
];

/* Mobile Sidebar Logic */
const mobileOpen = ref(false);
const toggleMobileSidebar = () => (mobileOpen.value = !mobileOpen.value);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.25s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
