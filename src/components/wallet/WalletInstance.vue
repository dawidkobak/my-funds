<template>
  <div class="sm:w-150 lg:w-lg min-h-screen">
    <div class="grid grid-cols-2">
      <div class="w-full">
        <div class="my-4">
          <div class="grid grid-cols-1">
            <div class="w-full">
              <div class="text-4xl text-center">{{ props.walletName }}</div>
            </div>
          </div>
        </div>

        <div v-for="asset in currentAssets" :key="asset.caption" class="mt-3">
          <WalletAsset
            :id="asset.id"
            :caption="asset.caption"
            :number="asset.number"
            :color="asset.color"
            :total="total"
            @caption-updated="(e) => changeAssetCaption(asset.id, e)"
            @number-updated="(e) => changeAssetNumber(asset.id, e)"
            @color-updated="(e) => changeAssetColor(asset.id, e)"
          />
        </div>

        <div class="mt-4 ml-1 hover:cursor-pointer max-w-min" @click="addAsset">
          <PlusIcon class="stroke-my-funds w-8 h-8" />
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-2 text-3xl">
            <div class="text-left">Suma portfela wynosi:</div>
            <div class="text-right">{{ total.toFixed(2) }}</div>
          </div>
        </div>
      </div>

      <div>
        <Doughnut :data="computedData" :options="options" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toRef } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import WalletAsset from '../wallet/WalletAsset.vue'
import PlusIcon from '../icons/PlusIcon.vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const assetsRef = toRef(props.initialData)
const currentAssets = ref(assetsRef.value)

const total = computed(() =>
  currentAssets.value.map((asset) => parseFloat(asset.number)).reduce((x, y) => x + y, 0.0)
)

const props = defineProps({
  walletName: {
    type: String,
    required: false,
    default: ''
  },
  initialData: {
    type: Array,
    required: false,
    default: new Array()
  }
})

const computedData = computed(() => {
  return {
    labels: currentAssets.value.map((asset) => asset.caption),
    datasets: [
      {
        backgroundColor: currentAssets.value.map((asset) => asset.color),
        data: currentAssets.value.map((asset) => asset.number)
      }
    ]
  }
})

const changeAssetCaption = (assetId, caption) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.caption = caption
    emit('assetCaptionChanged', { assetId, caption })
  }
}

const changeAssetNumber = (assetId, number) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.number = parseFloat(number)
    emit('assetValueChanged', { assetId, number })
  }
}

const changeAssetColor = (assetId, color) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.color = color
    emit('assetColorChanged', { assetId, color })
  }
}

const addAsset = () => {
  currentAssets.value = [
    ...currentAssets.value,
    {
      id: crypto.randomUUID(),
      caption: '',
      number: 0.0,
      color: '#000000'.replace(/0/g, () => {
        return (~~(Math.random() * 16)).toString(16)
      })
    }
  ]
}

const emit = defineEmits(['assetCaptionChanged', 'assetValueChanged', 'assetColorChanged'])
</script>
