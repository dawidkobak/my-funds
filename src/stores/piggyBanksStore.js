import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePiggyBanksStore = defineStore('piggy_banks', () => {

  const piggyBanks = ref(JSON.parse(localStorage.getItem('piggy_banks')) ?? []);
  const lastOpened = ref(JSON.parse(localStorage.getItem('piggy_banks_last_opened')) ?? {})


  function setLocalStorage() {
    localStorage.setItem('piggy_banks', JSON.stringify(piggyBanks.value))
  }

  function getPiggyBank(id) {
    return piggyBanks.value.find((pb) => pb.id === id)
  }

  function createPiggyBank(id, name, amount, date) {
    piggyBanks.value.push({
      id,
      name,
      amount,
      date
    })
    setLocalStorage()
  }

  function getLastOpened(type) {
    return walletLastOpened.value[type]
  }

  function setLastOpened(type, walletName) {
    walletLastOpened.value[type] = walletName
    localStorage.setItem('piggy_banks_last_opened', JSON.stringify(lastOpened.value))
  }

  return {
    piggyBanks,
    createPiggyBank
  }
})
