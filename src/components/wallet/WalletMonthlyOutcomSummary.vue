<template>
  <Wallet
    :wallet-name="props.initialData.id"
    with-sub-amounts
    :initial-data="props.initialData.data"
    @asset-caption-changed="(e) => changeAssetCaption(currentOutcoms, e)"
    @asset-color-changed="(e) => changeAssetColor(currentOutcoms, e)"
    @assetSubAmountsUpdated="changeAssetSubAmounts"
  />
</template>

<script setup>
import { ref, toValue } from 'vue'
import Wallet from './Wallet.vue'
import { useWalletsStore } from '../../stores/walletsStore'

const walletsStore = useWalletsStore()

const props = defineProps({
  initialData: {
    type: Object,
    required: false,
    defulat: new Object()
  }
})

const currentOutcoms = ref({
  id: props.walletName,
  data: toValue(props.initialData)
})

const changeAssetSubAmounts = (outcoms) => {
  emit('outcomsChanged', outcoms)
  walletsStore.setLocalStorage()
}

const emit = defineEmits('outcomsChanged')
</script>
