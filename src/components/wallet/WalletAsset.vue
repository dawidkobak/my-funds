<template>
  <div class="flex w-full">
    <div class="w-5/12">
      <InputComp type="text" width-full :value="caption" @updated-input="setCaption" />
    </div>

    <div class="w-2/12">
      <InputComp type="number" width-full :value="number" @updated-input="setNumber" />
    </div>

    <div class="w-2/12">
      <InputComp type="text" width-full :value="color" @updated-input="setColor" />
    </div>

    <div class="w-3/12 text-right">{{ pieceOfWallet.toFixed(2) }} %</div>
  </div>
</template>

<script setup>
import { computed, ref, toValue } from 'vue'
import InputComp from '../shared/InputComp.vue'

const props = defineProps({
  caption: {
    type: String,
    required: false,
    default: ''
  },
  number: {
    type: Number,
    required: false,
    default: 0.0
  },
  color: {
    type: String,
    required: false,
    default: '#FFFFFF'
  },
  total: {
    type: Number,
    required: false,
    default: 0.0
  }
})

const caption = ref(toValue(props.caption))
const number = ref(toValue(props.number))
const color = ref(toValue(props.color))

const pieceOfWallet = computed(() => {
  return (number.value / (props.total + 0.0000000000001)) * 100.0
})

const setCaption = (e) => {
  caption.value = e
  emit('captionUpdated', e)
}

const setNumber = (e) => {
  number.value = parseFloat(e)
  emit('numberUpdated', e)
}

const setColor = (e) => {
  color.value = e
  emit('colorUpdated', e)
}

const emit = defineEmits(['captionUpdated', 'numberUpdated', 'colorUpdated'])
</script>
