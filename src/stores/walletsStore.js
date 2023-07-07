import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useWalletsStore = defineStore('wallets', () => {
  const wallets = ref(JSON.parse(localStorage.getItem('wallets')) ?? [])

  function setLocalStorage() {
    localStorage.setItem('wallets', JSON.stringify(wallets.value))
  }

  function getWallet(id) {
    return wallets.value.find((w) => w.id === id)
  }

  const getExpensesWallets = computed(() => {
    return wallets.value.filter((wallet) => wallet.type == 'Expenses')
  })

  return {
    wallets,
    setLocalStorage,
    getWallet,
    getExpensesWallets
  }
})
