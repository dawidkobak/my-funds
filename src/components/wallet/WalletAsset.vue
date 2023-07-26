<template>
  <div class="flex w-full">
    <div class="w-3/12">
      <v-text-field
        v-model="text"
        label="Nazwa aktywa"
        class="bg-white"
        @update:modelValue="setText"
      />
    </div>

    <div class="w-3/12">
      <v-text-field
        v-model="amount"
        label="Wartość"
        prefix="PLN"
        :rules="[rules.required, rules.money]"
        class="bg-white"
      />
    </div>

    <div class="w-2/12 ml-3">
      <MyColorPicker :pure-color="currentColor" @colorUpdated="setColor" />
    </div>

    <div class="w-3/12">
      <div v-if="props.withSubAmounts">
        <v-btn color="#342b84" class="text-white"> Podziel wydatek </v-btn>
      </div>
    </div>
  </div>
  <div v-if="props.withSubAmounts">
    <div class="flex w-full" v-for="(subAmount, index) in subAmounts" :key="index">
      <div class="w-4/12">
        <div class="ml-6">
          <v-text-field
            v-model="subAmount.text"
            label="Nazwa podwydatku"
            class="bg-white"
            @update:modelValue="(text) => setSubAmountText(text, index)"
          />
        </div>
      </div>
      <div class="w-3/12">
        <div class="mx-2">
          <v-text-field
            v-model="subAmount.value"
            label="Wartość"
            prefix="PLN"
            :rules="[rules.required, rules.money]"
            class="bg-white"
            @update:modelValue="(value) => setSubAmount(value, index)"
          />
        </div>
      </div>
    </div>
    <div class="ml-6">
      <v-btn color="#342b84" class="text-white" @click="addSubAmount">
        Dodaj kolejną pozycję
      </v-btn>
    </div>
  </div>
  <div></div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MyColorPicker from '../shared/MyColorPicker.vue'

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

const amount = ref(props.amount)
const subAmounts = ref(props.subAmounts)
const color = ref(props.color)
const currentColor = ref(color.value)
const text = ref(props.text)

// watch(props, () => {
//   text.value = props.text
//   color.value = props.color
//   amount.value = props.amount
// })

watch(amount, () => {
  emit('amountUpdated', amount.value)
})

const setColor = (e) => {
  //color.value = e
  emit('colorUpdated', e)
}

const setText = (e) => {
  //text.value = e
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
  //amount.value = parseFloat(sum.toFixed(2))
  emit('amountUpdated', sum)
}

const emit = defineEmits([
  'captionUpdated',
  'amountUpdated',
  'colorUpdated',
  'textUpdated',
  'subAmountsUpdated'
])

const rules = {
  required: (value) => !!value || 'Kwota jest wymagana.',
  money: (value) => {
    const str = value.toString()
    const pattern = /^-?(\d*([.,]\d{1,2})?$)/
    return pattern.test(str.replace(',', '.').toString()) || 'Nieprawidłowa kwota'
  }
}
</script>
