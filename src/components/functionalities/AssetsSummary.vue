<template>
  <div>
    <div class="w-full flex text-6xl">
      <div class="w-3/4">Suma wszystkich inwestycji wynosi:</div>
      <div class="w-1/4 text-right">{{ props.total.toFixed(2) }} zł</div>
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
