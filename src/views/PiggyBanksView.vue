<template>
    <MainNav />
    <div class="ml-120">
        <div>
          
        </div>
        <div class="mt-10">
          <v-btn @click="dialog = true">Dodaj nową skarbonkę</v-btn>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Nowa skarbonka</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Nazwa skarbonki" v-model="newPiggyBank.name"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Kwota/Cel" v-model="newPiggyBank.amount" type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field v-model="newPiggyBank.date" label="Data (opcjonalnie)" v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Anuluj</v-btn>
                <v-btn color="blue darken-1" text @click="createPiggyBank">Dodaj</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePiggyBanksStore } from '../stores/piggyBanksStore'

import MainNav from '../components/navigation/MainNav.vue';

const dialog = ref(false);
const newPiggyBank = ref({ id: '', name: '', amount: '', date: '' });
const menu = ref(false);

const piggyBanksStore = usePiggyBanksStore();

const createPiggyBank = () => {
  piggyBanksStore.createPiggyBank(crypto.randomUUID(), newPiggyBank.value.name, newPiggyBank.value.amount, newPiggyBank.value.date)
  dialog.value = false;
};

</script>