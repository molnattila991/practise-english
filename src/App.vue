<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import HelloWorld from './components/HelloWorld.vue'
import Buttons from './components/Buttons.vue'
import TreeMenu from './components/TreeMenu.vue'
import { useDataStore } from './stores/dataStore'

const theme = useTheme()
const drawer = ref(false)


const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary style="top: 64px; height: calc(100vh - 64px);">
      <!-- Drawer content here -->
      <div style="height: 100%; width: 100%; overflow: auto; text-align: left;">
        <TreeMenu></TreeMenu>
      </div>
    </v-navigation-drawer>
    <v-app-bar>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-app-bar-title>English Practise</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <HelloWorld msg="Welcome to Vuetify 3" />
      </v-container>
    </v-main>
    <Buttons />
  </v-app>
</template>

<style scoped>
</style>
