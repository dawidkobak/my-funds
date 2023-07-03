<template>
  <div>
    <div class="grid grid-cols-2 text-6xl">
      <div class="">Twój majątek wynosi:</div>
      <div class="text-right">{{ props.total.toFixed(2) }} zł</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: false,
    default: 0.0
  }
})
</script>
