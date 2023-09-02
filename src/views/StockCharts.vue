<template>
  <MainNav />
  <div class="ml-120">
    <main class="flex w-full items-center">
      <div class="w-full mx-auto">
        <div class="mt-5"></div>
        <div class="mt-10">
          <StockChart />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import MainNav from '../components/navigation/MainNav.vue'
import StockChart from '../components/charts/StockChart.vue'
</script>
