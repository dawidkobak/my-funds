<template>
  <div>
    <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ColorPicker } from 'vue3-colorpicker'

const pureColor = ref(null)
const gradientColor = ref('linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)')
</script>

<style scoped>
@import 'vue3-colorpicker/style.css';
</style>
