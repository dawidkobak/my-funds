<template>
  <main class="flex w-full items-center">
    <div class="sm:w-full xl:w-lg mx-auto">
      <div class="mt-5">
        <MyFundsLogo />
      </div>

      <div class="my-5">
        <AssetsSummary :funds-data="fundsData" :total="total" />
      </div>

      <div class="mt-10">
        <Wallet
          wallet-name="Inwestycje długoterminowe"
          :initial-data="longTermFund"
          @asset-caption-changed="(e) => changeAssetCaption(longTermFund, e)"
          @asset-amount-changed="(e) => changeAssetAmount(longTermFund, e)"
          @asset-color-changed="(e) => changeAssetColor(longTermFund, e)"
          @asset-text-updated="(assetId, text) => changeAssetText(longTermFund, assetId, text)"
        />
      </div>

      <div class="mt-10">
        <Wallet
          wallet-name="Poduszka finansowa"
          :initial-data="emergencyFund"
          @asset-caption-changed="(e) => changeAssetCaption(emergencyFund, e)"
          @asset-amount-changed="(e) => changeAssetAmount(emergencyFund, e)"
          @asset-color-changed="(e) => changeAssetColor(emergencyFund, e)"
        />
      </div>

      <div class="mt-10">
        <Wallet
          wallet-name="PPK"
          :initial-data="ppkFund"
          @asset-caption-changed="(e) => changeAssetCaption(ppkFund, e)"
          @asset-amount-changed="(e) => changeAssetAmount(ppkFund, e)"
          @asset-color-changed="(e) => changeAssetColor(ppkFund, e)"
        />
      </div>

      <div class="mt-10">
        <WalletMonthlyOutcomSummary :initial-data="outcomsMay_2023" />
      </div>

      <div class="mt-10">
        <StockChart />
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

import MyFundsLogo from '../components/branding/MyFundsLogo.vue'
import Wallet from '../components/wallet/Wallet.vue'
import AssetsSummary from '../components/functionalities/AssetsSummary.vue'
import StockChart from '../components/charts/StockChart.vue'
import WalletMonthlyOutcomSummary from '../components/wallet/WalletMonthlyOutcomSummary.vue'
import { useWalletsStore } from '../stores/walletsStore'

const walletsStore = useWalletsStore()

const longTermFund = ref(walletsStore.getWallet('Inwestycje długoterminowe').data)

const emergencyFund = ref(walletsStore.getWallet('Poduszka finansowa').data)

const ppkFund = ref(walletsStore.getWallet('PPK').data)

const outcomsMay_2023 = ref([
  {
    id: '82d89791-1235-11ee-be56-0242ac1211666',
    text: 'mieszkanie',
    color: '#00cdef',
    subAmounts: [
      {
        text: 'internet',
        value: 69.99
      }
    ]
  }
])

const fundsData = ref([...longTermFund.value, ...emergencyFund.value, ...ppkFund.value])

const total = computed(() => fundsData.value.map((fund) => fund.amount).reduce((x, y) => x + y, 0))

const changeAssetCaption = (funds, event) => {
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.caption = event.caption
  }
}

const changeAssetAmount = (funds, event) => {
  console.log(event)
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
  console.log(`assetId: ${assetId} text: ${text}`)
  const fund = funds.find((fund) => fund.id === assetId)
  if (fund) {
    fund.text = text
  }
}
</script>
