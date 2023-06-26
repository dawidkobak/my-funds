<template>
  <Line id="abcd" :data="chartData" :options="charOptions" />
</template>

<script setup>
import { ref } from 'vue'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const charOptions = ref({
  responsive: true
})
const chartData = ref({
  labels: labels,
  datasets: [
    {
      label: 'Bitcoin',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
})
</script>
