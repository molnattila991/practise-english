<script setup>
import { useCounterStore } from '../store/counter';
import { useDataStore } from '../stores/dataStore';
const counter = useCounterStore()
const dataStore = useDataStore()

</script>

<template>
  <v-row class="ma-0" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1;">
    <v-col cols="6">
      <v-btn  @click="counter.increment()" block color="primary">Reveal</v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn @click="dataStore.pickRandomSentence" block color="secondary">Next</v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>