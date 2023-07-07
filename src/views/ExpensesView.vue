<template>
  <main class="flex w-3/4 items-center">
    <div class="w-full mx-auto">
      <div class="mt-5">
        <v-combobox
          label="Wytatek"
          :items="expensesWallets"
          v-model="currentWalletName"
        ></v-combobox>
      </div>
      <div></div>
      <div class="mt-10">
        <WalletMonthlyOutcomSummary :initial-data="currentWallet" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import WalletMonthlyOutcomSummary from '../components/wallet/WalletMonthlyOutcomSummary.vue'
import { useWalletsStore } from '../stores/walletsStore'
import { watch } from 'vue'
const walletsStore = useWalletsStore()

const currentWalletName = ref('2023 Maj')
const expensesWallets = ref(walletsStore.getExpensesWallets.map((wallet) => wallet.id))

watch(currentWalletName, () => {
  currentWallet.value = walletsStore.getWallet(currentWalletName.value)
})

const currentWallet = ref(walletsStore.getWallet(currentWalletName.value))
</script>
