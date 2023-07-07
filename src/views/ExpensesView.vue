<template>
  <WalletsContainer
    label="Wydatek"
    type="Expenses"
    v-model="currentWallet"
    newWalletCaption="Stwórz nową listę wydatków"
  >
    <div class="mt-10">
      <WalletMonthlyOutcomSummary :initial-data="currentWallet" />
    </div>
  </WalletsContainer>
</template>

<script setup>
import { ref } from 'vue'

import WalletsContainer from './WalletsContainer.vue'
import WalletMonthlyOutcomSummary from '../components/wallet/WalletMonthlyOutcomSummary.vue'
import { useWalletsStore } from '../stores/walletsStore'

const walletsStore = useWalletsStore()
const expensessWallets = ref(walletsStore.getExpensesWallets)

const currentWallet = ref(
  expensessWallets.value[0] ?? { id: 'Wydatki demo', type: 'Expenses', data: [] }
)
</script>
