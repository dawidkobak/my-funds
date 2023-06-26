<template>
  <div class="flex w-full">
    <div class="w-4/12">
      <InputComp type="text" width-full :value="text" @updated-input="setText" />
    </div>

    <div class="w-2/12">
      <InputComp type="number" width-full :value="number" @updated-input="setNumber" />
    </div>

    <div class="w-2/12 ml-3">
      <MyColorPicker :pure-color="currentColor" @colorUpdated="setColor" />
    </div>

    <div class="w-3/12 text-right">{{ pieceOfWallet.toFixed(2) }} %</div>
  </div>
</template>

<script setup>
import { computed, ref, toValue, watch } from 'vue'
import InputComp from '../shared/InputComp.vue'
import MyColorPicker from '../shared/MyColorPicker.vue'

const props = defineProps({
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
  text: {
    type: String,
    required: false,
    default: ''
  },
  total: {
    type: Number,
    required: false,
    default: 0.0
  }
})

const number = ref(toValue(props.number))
const color = ref(toValue(props.color))
const currentColor = ref(toValue(color.value))
const text = ref(toValue(props.text))

watch(currentColor, () => {
  emit('colorUpdated', currentColor.value)
})

watch(text, () => {
  emit('textUpdated', text.value)
})

const pieceOfWallet = computed(() => {
  return (number.value / (props.total + 0.0000000000001)) * 100.0
})

const setNumber = (e) => {
  number.value = parseFloat(e)
  emit('numberUpdated', e)
}

const setColor = (e) => {
  color.value = e
  emit('colorUpdated', e)
}

const setText = (e) => {
  text.value = e
  emit('textUpdated', e)
}

const emit = defineEmits(['captionUpdated', 'numberUpdated', 'colorUpdated', 'textUpdated'])
</script>
