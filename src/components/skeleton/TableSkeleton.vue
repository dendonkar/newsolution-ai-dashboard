<template>
  <div
    class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 animate-pulse"
  >
    <div class="h-4 w-40 bg-slate-200 rounded mb-4"></div>

    <div v-for="i in 3" :key="i" class="h-4 bg-slate-200 rounded my-3"></div>
  </div>
</template>
