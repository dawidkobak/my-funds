<template>
  <main class="flex w-3/4 items-center">
    <div class="w-full mx-auto">
      <div class="mt-5"></div>

      <div class="my-5">
        <AssetsSummary :funds-data="fundsData" :total="total" />
      </div>

      <div class="mt-10">
        <Wallet
          :wallet-name="longTermFund.id"
          :initial-data="longTermFund.data"
          @asset-caption-changed="(e) => changeAssetCaption(longTermFund.data, e)"
          @asset-amount-changed="(e) => changeAssetAmount(longTermFund.data, e)"
          @asset-color-changed="(e) => changeAssetColor(longTermFund.data, e)"
          @asset-text-updated="(assetId, text) => changeAssetText(longTermFund.data, assetId, text)"
        />
      </div>

      <div class="mt-10">
        <Wallet
          :wallet-name="emergencyFund.id"
          :initial-data="emergencyFund.data"
          @asset-text-updated="
            (assetId, text) => changeAssetText(emergencyFund.data, assetId, text)
          "
          @asset-amount-changed="(e) => changeAssetAmount(emergencyFund.data, e)"
          @asset-color-changed="(e) => changeAssetColor(emergencyFund.data, e)"
        />
      </div>

      <div class="mt-10">
        <Wallet
          :wallet-name="ppkFund.id"
          :initial-data="ppkFund.data"
          @asset-text-updated="(assetId, text) => changeAssetText(ppkFund.data, assetId, text)"
          @asset-amount-changed="(e) => changeAssetAmount(ppkFund.data, e)"
          @asset-color-changed="(e) => changeAssetColor(ppkFund.data, e)"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

import Wallet from '../components/wallet/Wallet.vue'
import AssetsSummary from '../components/functionalities/AssetsSummary.vue'
import { useWalletsStore } from '../stores/walletsStore'

const walletsStore = useWalletsStore()

const longTermFund = ref(walletsStore.getWallet('Inwestycje długoterminowe'))
const emergencyFund = ref(walletsStore.getWallet('Poduszka finansowa'))
const ppkFund = ref(walletsStore.getWallet('PPK'))

const fundsData = ref([
  ...longTermFund.value.data,
  ...emergencyFund.value.data,
  ...ppkFund.value.data
])

const total = computed(() => fundsData.value.map((fund) => fund.amount).reduce((x, y) => x + y, 0))

const changeAssetAmount = (funds, event) => {
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.amount = parseFloat(event.amount)
  }
}

const changeAssetColor = (funds, event) => {
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.color = event.color
  }
}

const changeAssetText = (funds, assetId, text) => {
  const fund = funds.find((fund) => fund.id === assetId)
  if (fund) {
    fund.text = text
  }
}
</script>