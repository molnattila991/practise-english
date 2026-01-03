<script setup>
import { ref } from 'vue'
import { useDataStore } from '../stores/dataStore'
const dataStore = useDataStore()
defineProps({
  msg: String,
})

function speak(textToSpeak) {
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}

</script>

<template>
  <div v-if="dataStore.currentRandomSentence">
    <v-card class="pa-4 mt-4" v-if="dataStore.shownLanguage === 'hun'">
      <v-card-text style="white-space: pre-wrap; word-break: break-word; cursor: pointer;" @click="speak(dataStore.currentRandomSentence.hun)">{{ dataStore.currentRandomSentence.hun
        }}</v-card-text>
    </v-card>

    <v-card class="pa-4 mt-4" v-if="dataStore.shownLanguage === 'eng'">
      <v-card-text style="white-space: pre-wrap; word-break: break-word; cursor: pointer;" @click="speak(dataStore.currentRandomSentence.eng)">{{ dataStore.currentRandomSentence.eng
        }}</v-card-text>
    </v-card>

    <v-card class="pa-4 mt-4" v-if="dataStore.isRevealed && dataStore.shownLanguage === 'hun'">
      <v-card-text style="white-space: pre-wrap; word-break: break-word; cursor: pointer;" @click="speak(dataStore.currentRandomSentence.eng)">{{ dataStore.currentRandomSentence.eng
        }}</v-card-text>
    </v-card>

    <v-card class="pa-4 mt-4" v-if="dataStore.isRevealed && dataStore.shownLanguage === 'eng'">
      <v-card-text style="white-space: pre-wrap; word-break: break-word; cursor: pointer;" @click="speak(dataStore.currentRandomSentence.hun)">{{ dataStore.currentRandomSentence.hun
        }}</v-card-text>
    </v-card>

    <v-card class="pa-4 mt-4">
      <v-card-text style="white-space: pre-wrap; word-break: break-word;">
        <div>
          {{ dataStore.currentRandomSentence.title }}
        </div>
        <div>
          {{ dataStore.currentRandomSentence.details }}
        </div>
      </v-card-text>
    </v-card>
  </div>
  <div v-else>
    <v-card class="pa-4 mt-4">
      <v-card-title>Select topics from menu and push "Next" button.</v-card-title>
    </v-card>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
