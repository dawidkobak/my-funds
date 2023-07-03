import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWalletsStore = defineStore('wallets', () => {
  const wallets = ref(JSON.parse(localStorage.getItem('wallets')) ?? [])

  function updateWallet(wallet) {
    wallets.value.push({ [wallet.id]: wallet })
    localStorage.setItem('wallets', JSON.stringify(wallets.value))
  }

  function getWallet(id) {
    return wallets.value.find((w) => w.id === id)
  }

  //const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { wallets, updateWallet, getWallet }
})
