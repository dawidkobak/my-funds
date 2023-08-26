<template>
  <MainNav />
  <main class="flex w-3/4 items-center">
    <div class="w-full mx-auto">
      <div class="mt-5"></div>
      <div class="mt-10">
        <StockChart />
      </div>
    </div>
  </main>
</template>

<script setup>
import MainNav from '../components/navigation/MainNav.vue'
import StockChart from '../components/charts/StockChart.vue'
</script>
