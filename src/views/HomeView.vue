<template>
  <main class="flex w-full items-center">
    <div class="sm:w-full xl:w-lg mx-auto">
      <MyColorPicker />
      <div class="mt-5">
        <MyFundsLogo />
      </div>

      <div class="my-5">
        <WalletSummary :funds-data="fundsData" :total="total" />
      </div>

      <WalletInstance
        wallet-name="Inwestycje długoterminowe"
        :initial-data="longTermFund"
        @asset-caption-changed="(e) => changeAssetCaption(longTermFund, e)"
        @asset-number-changed="(e) => changeAssetNumber(longTermFund, e)"
        @asset-color-changed="(e) => changeAssetColor(longTermFund, e)"
      />

      <WalletInstance
        wallet-name="Poduszka finansowa"
        :initial-data="emergencyFund"
        @asset-caption-changed="(e) => changeAssetCaption(emergencyFund, e)"
        @asset-number-changed="(e) => changeAssetNumber(emergencyFund, e)"
        @asset-color-changed="(e) => changeAssetColor(emergencyFund, e)"
      />
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

import MyFundsLogo from '../components/branding/MyFundsLogo.vue'
import WalletInstance from '../components/wallet/WalletInstance.vue'
import WalletSummary from '../components/wallet/WalletSummary.vue'
import MyColorPicker from '../components/shared/MyColorPicker.vue'

const longTermFund = ref([
  {
    id: '82d88c4a-1235-11ee-be56-0242ac120002',
    caption: 'EMIM',
    number: 6456.9,
    color: '#1cfc76'
  },
  {
    id: '82d88ede-1235-11ee-be56-0242ac120002',
    caption: 'SGLN',
    number: 4343.76,
    color: '#fcf11c'
  },
  {
    id: '82d89028-1235-11ee-be56-0242ac120002',
    caption: 'XFVT',
    number: 9157.19,
    color: '#d41c1c'
  },
  {
    id: '82d8914a-1235-11ee-be56-0242ac120002',
    caption: 'SWIG 80',
    number: 4234.0,
    color: '#e4090a'
  },
  {
    id: '82d8951e-1235-11ee-be56-0242ac120002',
    caption: 'Bitcoin',
    number: 15298.68,
    color: '#f89414'
  },
  {
    id: '82d8965e-1235-11ee-be56-0242ac120002',
    caption: 'Intel',
    number: 4113.33,
    color: '#187cc4'
  }
])

const emergencyFund = ref([
  {
    id: '82d89780-1235-11ee-be56-0242ac120002',
    caption: 'Obligacje',
    number: 17381.78,
    color: '#202474'
  },
  {
    id: '82d89a80-1235-11ee-b446-0242ac120002',
    caption: 'Gotówka',
    number: 8381.78,
    color: '#ff24f0'
  }
])

const fundsData = ref([...longTermFund.value, ...emergencyFund.value])

const total = computed(() => fundsData.value.map((fund) => fund.number).reduce((x, y) => x + y, 0))

const changeAssetCaption = (funds, event) => {
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.caption = event.caption
  }
}

const changeAssetNumber = (funds, event) => {
  console.log(event)
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.number = parseFloat(event.number)
  }
}

const changeAssetColor = (funds, event) => {
  const fund = funds.find((fund) => fund.id === event.assetId)
  if (fund) {
    fund.color = event.color
  }
}
</script>
