<template>
  <MainNav />
  <div class="ml-120">
    <main class="flex w-full items-center">
      <div class="w-full mx-auto">
        <div class="mt-5">
          <v-combobox
            label="Aktywo"
            :items="assets"
            v-model="currentAsset"
            class="mt-5"
          ></v-combobox>
        </div>
        <div>
          <v-card>
            <v-tabs bg-color="#7e75e0" color="#eeeeee" align-tabs="center" v-model="currentTab">
              <v-tab v-for="(period, index) in periods" :key="index" :class="setTabStyles(index)">{{
                period
              }}</v-tab>
            </v-tabs>
          </v-card>
        </div>
        <div class="mt-10">
          <StockChart :period="periods[currentTab]" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import MainNav from '../components/navigation/MainNav.vue'
import StockChart from '../components/charts/StockChart.vue'
import { ref } from 'vue'
import { useStocksStore } from '../stores/stocksStore'

const stocksStore = useStocksStore()
const assets = stocksStore.stocksNames
const currentAsset = ref('Bitcoin')
const currentTab = ref(5)
const periods = ['7D', '1M', '3M', '6M', 'YTD', '1R', '5L', 'Maks']

const setTabStyles = (index) => {
  if (currentTab.value == index) {
    return 'bg-purple-darken-4'
  }
  return ''
}
</script>
