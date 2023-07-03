<template>
  <Wallet
    wallet-name="Wydatki maj 2023"
    with-sub-amounts
    :initial-data="currentOutcoms"
    @asset-caption-changed="(e) => changeAssetCaption(currentOutcoms, e)"
    @asset-color-changed="(e) => changeAssetColor(currentOutcoms, e)"
    @assetSubAmountsUpdated="changeAssetSubAmounts"
  />
</template>

<script setup>
import { ref, toValue } from 'vue'
import Wallet from './Wallet.vue'

const props = defineProps({
  initialData: {
    type: Object,
    required: false,
    defulat: new Object()
  }
})

const currentOutcoms = ref(toValue(props.initialData))

const changeAssetSubAmounts = (outcoms) => {
  emit('outcomsChanged', outcoms)
}

const emit = defineEmits('outcomsChanged')
</script>
