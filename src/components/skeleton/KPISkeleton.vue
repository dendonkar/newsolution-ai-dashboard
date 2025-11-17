<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-for="i in 4"
      :key="i"
      class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm animate-pulse"
    >
      <div class="h-4 w-24 bg-slate-200 rounded mb-4"></div>
      <div class="h-8 w-20 bg-slate-300 rounded mb-3"></div>
      <div class="h-4 w-16 bg-slate-200 rounded"></div>
    </div>
  </section>
</template>
