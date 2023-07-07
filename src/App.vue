<script setup>
import { RouterView } from 'vue-router'
import MainNav from './components/navigation/MainNav.vue'
</script>

<template>
  <div id="app">
    <div class="w-full">
      <div class="w-full flex">
        <MainNav />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  background-image: url('./assets/money.jpg');
}
</style>
