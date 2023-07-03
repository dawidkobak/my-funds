<template>
  <Line id="abcd" :data="chartData" :options="charOptions" />
</template>

<script setup>
import { ref } from 'vue'
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
import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb'

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

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

const client = new DynamoDBClient({ region: 'eu-central-1' })

const input = {
  ExpressionAttributeValues: {
    ':v1': {
      S: 'No One You Know'
    }
  },
  KeyConditionExpression: 'Artist = :v1',
  ProjectionExpression: 'SongTitle',
  TableName: 'stock-quotes'
}
</script>
