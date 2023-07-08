<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="#342b84" class="text-white" v-bind="props">
          Stwórz {{ createWalletCaption }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5"> {{ cardTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  :label="label"
                  :hint="hint"
                  persistent-hint
                  required
                  v-model="walletName"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Zamknij </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="createWallet"> Stwórz </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWalletsStore } from '../../stores/walletsStore'

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

const createWalletCaption = computed(() => {
  if (props.type === 'Expenses') {
    return 'nową listę wydatków'
  }
  return 'nowy portfel'
})

const cardTitle = computed(() => {
  if (props.type === 'Expenses') {
    return 'Nowa lista wydatków'
  }
  return 'Nowy portfel'
})

const label = computed(() => {
  if (props.type === 'Expenses') {
    return 'Nazwa listy wydatków'
  }
  return 'Nazwa portfela'
})

const hint = computed(() => {
  if (props.type === 'Expenses') {
    return 'np. Wakacje 2023, Czerwiec 2023'
  }
  return 'np. Inwestycje długoterminowe, broker XTB'
})

const walletsStore = useWalletsStore()

const dialog = ref(false)
const walletName = ref()

const createWallet = () => {
  dialog.value = false

  walletsStore.createWallet(walletName.value, props.type)
  emit('walletCreated')

  walletName.value = ''
}

const emit = defineEmits(['walletCreated'])
</script>
