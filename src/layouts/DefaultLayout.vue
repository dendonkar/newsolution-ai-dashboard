<template>
  <div class="app-container">
    <!-- Left Sidebar -->
    <Sidebar />

    <!-- Right Content Area -->
    <div class="app-content">
      <!-- Topbar -->
      <Topbar />

      <!-- Main Content -->
      <main class="page-wrapper">
        <!-- Router Outlet -->
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";
</script>

<style scoped>
/* 시안 느낌과 동일하게 배경/레이아웃 고정 */
</style>
