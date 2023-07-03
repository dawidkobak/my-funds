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
              :caption="asset.caption"
              :amount="asset.amount"
              :color="asset.color"
              :text="asset.text"
              :subAmounts="asset.subAmounts"
              :total="total"
              :with-sub-amounts="props.withSubAmounts"
              @caption-updated="(e) => changeAssetCaption(asset.id, e)"
              @amount-updated="(e) => changeAssetAmount(asset.id, e)"
              @color-updated="(e) => changeAssetColor(asset.id, e)"
              @text-updated="(e) => textUpdated(asset.id, e)"
              @sub-amount-updated="(e) => subAmoumtUpdated(asset.id, e)"
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
import { computed, ref, toValue, watch } from 'vue'
import WalletChart from './WalletChart.vue'
import WalletAsset from '../wallet/WalletAsset.vue'
import PlusIcon from '../icons/PlusIcon.vue'
import { useWalletsStore } from '../../stores/walletsStore'

const currentAssets = ref(toValue(props.initialData))

const walletStore = useWalletsStore()

watch(currentAssets, () => {
  walletStore.updateWallet(currentAssets.value)
})

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
  }
}

const changeAssetAmount = (assetId, amount) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.amount = parseFloat(amount)
    emit('assetValueChanged', { assetId, amount })
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
      amount: 0.0,
      color: '#000000'.replace(/0/g, () => {
        return (~~(Math.random() * 16)).toString(16)
      })
    }
  ]
}

const textUpdated = (assetId, newText) => {
  const asset = currentAssets.value.find((a) => a.id === assetId)
  if (asset) {
    asset.text = newText
    emit('assetTextUpdated', assetId, newText)
  }
}

const subAmoumtUpdated = (assetId, subAmounts) => {
  emit('assetSubAmountsUpdated', assetId, subAmounts)
}

const emit = defineEmits([
  'assetCaptionChanged',
  'assetValueChanged',
  'assetColorChanged',
  'assetTextUpdated',
  'assetSubAmountsUpdated'
])
</script>
