<template>
  <Line id="abcd" :data="chartData" :options="charOptions" />
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { useStocksStore } from '../../stores/stocksStore'
//import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)
const stockStore = useStocksStore()

const props = defineProps(['period'])
const labels = ref(stockStore.bitcoin.labels)
const amounts = ref(stockStore.bitcoin.amounts)

const currentLabels = ref(filterDataByPeriod(labels.value, props.period))
const currentAmounts = ref(filterDataByPeriod(amounts.value, props.period))

function filterDataByPeriod(data, period) {
  console.log(data)
  if (period === '7D') return data.slice(-7)
  if (period === '1M') return data.slice(-30)
  if (period === '3M') return data.slice(-90)
  if (period === '6M') return data.slice(-180)
  if (period === 'YTD') return data.slice(-300)
  if (period === '1R') return data.slice(-365)
  if (period === '5R') return data.slice(-365 * 5)

  return data
}

watch(
  () => props.period,
  () => {
    currentLabels.value = filterDataByPeriod(labels.value, props.period)
    currentAmounts.value = filterDataByPeriod(amounts.value, props.period)
  }
)

const charOptions = ref({
  responsive: true
})
const chartData = computed(() => ({
  labels: currentLabels.value,
  datasets: [
    {
      label: 'Bitcoin',
      data: currentAmounts.value,
      fill: true,
      borderColor: 'rgb(56, 44, 132)',
      tension: 0.1
    }
  ]
}))
</script>
