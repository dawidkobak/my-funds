<template>
  <MainNav />
  <div>Transakcje</div>
  <v-date-picker elevation="24"></v-date-picker>
</template>

<script setup>
import MainNav from '../components/navigation/MainNav.vue'
import { useDate } from 'vuetify/labs/date'
const date = useDate()
</script>
