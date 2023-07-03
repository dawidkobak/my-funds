<template>
  <div class="flex w-full">
    <div class="w-4/12">
      <InputComp type="text" width-full :value="text" @updated-input="setText" />
    </div>

    <div class="w-2/12">
      <InputComp
        type="number"
        width-full
        :value="amount"
        :disabled="props.withSubAmounts"
        @updated-input="setAmount"
      />
    </div>

    <div class="w-2/12 ml-3">
      <MyColorPicker :pure-color="currentColor" @colorUpdated="setColor" />
    </div>

    <div class="w-3/12 grid grid-cols-2">
      <div v-if="props.withSubAmounts">
        <PlusIcon class="w-6 h-6 cursor-pointer" @click="addSubAmount" />
      </div>
    </div>
  </div>
  <div v-if="props.withSubAmounts">
    <div class="flex w-full" v-for="(subAmount, index) in subAmounts" :key="index">
      <div class="w-4/12">
        <div class="ml-6">
          <InputComp
            type="text"
            width-full
            :value="subAmount.text"
            @updated-input="(text) => setSubAmountText(text, index)"
          />
        </div>
      </div>
      <div class="w-2/12">
        <div class="mx-2">
          <InputComp
            type="number"
            width-full
            :value="subAmount.value"
            @updated-input="(value) => setSubAmount(value, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toValue, watch } from 'vue'
import InputComp from '../shared/InputComp.vue'
import MyColorPicker from '../shared/MyColorPicker.vue'
import PlusIcon from '../icons/PlusIcon.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  amount: {
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
  },
  withSubAmounts: {
    type: Boolean,
    required: false,
    default: false
  },
  subAmounts: {
    type: Array,
    required: false,
    default: new Array()
  }
})

const amount = ref(toValue(props.amount))
const subAmounts = ref(toValue(props.subAmounts))
const color = ref(toValue(props.color))
const currentColor = ref(toValue(color.value))
const text = ref(toValue(props.text))

watch(currentColor, () => {
  emit('colorUpdated', currentColor.value)
})

watch(text, () => {
  emit('textUpdated', text.value)
})

const setAmount = (e) => {
  amount.value = parseFloat(e)
  emit('amountUpdated', e)
}

const setColor = (e) => {
  color.value = e
  emit('colorUpdated', e)
}

const setText = (e) => {
  text.value = e
  emit('textUpdated', e)
}

const addSubAmount = () => {
  subAmounts.value.push({ id: crypto.randomUUID(), text: '', value: 0.0 })
}

const setSubAmount = (value, index) => {
  subAmounts.value[index].value = parseFloat(value)
  emit('subAmountsUpdated', subAmounts.value)
  updateAmount()
}

const setSubAmountText = (text, index) => {
  subAmounts.value[index].text = text
  emit('subAmountsUpdated', subAmounts.value)
}

const updateAmount = () => {
  let sum = 0.0
  subAmounts.value.forEach((subAmount) => {
    sum = sum + subAmount.value
  })
  amount.value = sum
  emit('amountUpdated', sum)
}

const emit = defineEmits([
  'captionUpdated',
  'amountUpdated',
  'colorUpdated',
  'textUpdated',
  'subAmountsUpdated'
])
</script>
