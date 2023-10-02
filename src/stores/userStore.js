import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Authentication } from '../auth/authentication'
import { config } from '../env'

export const useUserStore = defineStore('user', () => {
  const authentication = new Authentication(
    config.userPoolId,
    config.identityId,
    config.webClientId,
    config.region
  )

  const locale = ref('pl-PL')
  const currency = ref('PLN')
  const formatter = new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: currency.value
  })

  return {
    authentication,
    formatter
  }
})
