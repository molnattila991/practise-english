<script setup>
import { useCounterStore } from '../store/counter';
const counter = useCounterStore()

</script>

<template>
  <v-row class="ma-0" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1;">
    <v-col cols="6">
      <v-btn  @click="counter.increment()" block color="primary">Button 1</v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn @click="counter.increment()" block color="secondary">Button 2</v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
</style>