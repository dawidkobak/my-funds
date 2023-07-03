<template>
  <div class="sm:w-150 lg:w-lg min-h-min">
    <div class="grid grid-cols-2">
      <div class="w-full my-auto">
        <div class="">
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
              :amount="asset.amount"
              :color="asset.color"
              :text="asset.text"
              :total="total"
              :with-sub-amounts="props.withSubAmounts"
              :subAmounts="asset.subAmounts"
              @caption-updated="(e) => changeAssetCaption(asset.id, e)"
              @amount-updated="(e) => changeAssetAmount(asset.id, e)"
              @color-updated="(e) => changeAssetColor(asset.id, e)"
              @text-updated="(e) => textUpdated(asset.id, e)"
              @subAmountsUpdated="(subAmounts) => subAmoumtUpdated(asset.id, subAmounts)"
            />
          </div>

          <div class="mt-4 ml-1 hover:cursor-pointer max-w-min" @click="addAsset">
            <PlusIcon class="stroke-my-funds w-8 h-8" />
          </div>

          <div class="mt-10">
            <div class="grid grid-cols-2 text-3xl">
              <div class="text-left">Suma portfela wynosi:</div>
              <div class="text-right mr-5">{{ total.toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <WalletChart :chart-data="chartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, toValue } from 'vue'
import WalletChart from './WalletChart.vue'
import WalletAsset from '../wallet/WalletAsset.vue'
import PlusIcon from '../icons/PlusIcon.vue'
import { useWalletsStore } from '../../stores/walletsStore'

const walletStore = useWalletsStore()

const currentAssets = ref(toValue(props.initialData))

const total = computed(() =>
  currentAssets.value.map((asset) => parseFloat(asset.amount)).reduce((x, y) => x + y, 0.0)
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
  },
  withSubAmounts: {
    type: Boolean,
    required: false,
    default: false
  }
})

const chartData = computed(() => {
  return {
    labels: currentAssets.value.map((asset) => asset.text),
    datasets: [
      {
        backgroundColor: currentAssets.value.map((asset) => asset.color),
        data: currentAssets.value.map((asset) => asset.amount)
      }
    ]
  }
})

const changeAssetCaption = (assetId, caption) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.caption = caption
    emit('assetCaptionChanged', { assetId, caption })
    walletStore.setLocalStorage()
  }
}

const changeAssetAmount = (assetId, amount) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.amount = parseFloat(amount)
    emit('assetValueChanged', { assetId, amount })
    walletStore.setLocalStorage()
  }
}

const changeAssetColor = (assetId, color) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.color = color
    emit('assetColorChanged', { assetId, color })
    walletStore.setLocalStorage()
  }
}

const addAsset = () => {
  currentAssets.value.push({
    id: crypto.randomUUID(),
    caption: '',
    amount: 0.0,
    subAmounts: [],
    color: '#000000'.replace(/0/g, () => {
      return (~~(Math.random() * 16)).toString(16)
    })
  })
}

const textUpdated = (assetId, newText) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.text = newText
    emit('assetTextUpdated', assetId, newText)
    walletStore.setLocalStorage()
  }
}

const subAmoumtUpdated = (assetId, subAmounts) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.subAmounts = subAmounts
    emit('assetSubAmountsUpdated', assetId, subAmounts)
    walletStore.setLocalStorage()
  }
}

const emit = defineEmits([
  'assetCaptionChanged',
  'assetValueChanged',
  'assetColorChanged',
  'assetTextUpdated',
  'assetSubAmountsUpdated'
])
</script>
