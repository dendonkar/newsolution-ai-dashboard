<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <KPIItem
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :value="item.value"
      :trend="item.trend"
    />
  </section>
</template>

<script setup lang="ts">
import KPIItem from "./KPIItem.vue";

const items = [
  { label: "오늘 방문자", value: "1,250", trend: 12 },
  { label: "전일 대비", value: "+320", trend: 8 },
  { label: "페이지뷰", value: "5,482", trend: 4 },
  { label: "평균 체류시간", value: "3m 42s", trend: -2 },
];
</script>
