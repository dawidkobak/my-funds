<template>
  <WalletsContainer
    label="Inwestycje"
    type="Investing"
    v-model="currentWallet"
    newWalletCaption="Stwórz nowy portfel"
  >
    <div class="my-5">
      <AssetsSummary :funds-data="fundsData" :total="total" />
    </div>

    <div class="mt-10">
      <Wallet
        :wallet-name="currentWallet.id"
        :initial-data="currentWallet.data"
        @asset-caption-changed="(e) => changeAssetCaption(currentWallet.data, e)"
        @asset-amount-changed="(e) => changeAssetAmount(currentWallet.data, e)"
        @asset-color-changed="(e) => changeAssetColor(currentWallet.data, e)"
        @asset-text-updated="(assetId, text) => changeAssetText(currentWallet.data, assetId, text)"
      />
    </div>
  </WalletsContainer>
</template>

<script setup>
import { computed, ref } from 'vue'

import Wallet from '../components/wallet/Wallet.vue'
import AssetsSummary from '../components/functionalities/AssetsSummary.vue'
import WalletsContainer from './WalletsContainer.vue'
import { useWalletsStore } from '../stores/walletsStore'

const walletsStore = useWalletsStore()
const investsmentsWallets = ref(walletsStore.getInvestsmentsWallets)

const currentWallet = ref(
  investsmentsWallets.value[0] ?? { id: 'Portfel demo', type: 'Investing', data: [] }
)

const fundsData = ref(investsmentsWallets.value.flatMap((wallet) => wallet.data))

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
