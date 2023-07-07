<template>
  <main class="flex w-3/4 items-center">
    <div class="w-full mx-auto">
      <div class="mt-5"></div>
      <div class="mt-10">
        <WalletMonthlyOutcomSummary :initial-data="outcomsMay_2023" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import WalletMonthlyOutcomSummary from '../components/wallet/WalletMonthlyOutcomSummary.vue'
import { useWalletsStore } from '../stores/walletsStore'

const walletsStore = useWalletsStore()
const outcomsMay_2023 = ref(walletsStore.getWallet('Wydatki maj 2023'))
</script>
