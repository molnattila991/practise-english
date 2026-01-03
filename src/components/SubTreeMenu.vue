<template>
    <div style="height: 100%; overflow: auto;">
        <div style="margin-left: 10px;">
            <div v-for="value in items">
                <hr>
                <div>
                    <span @click="dataStore.toggleExpanded(value.title)" style="cursor: pointer; margin-right: 5px;">{{ dataStore.expandedTitles.includes(value.title) ? '▼' : '▶' }}</span>
                    <input type="checkbox" :id="value.title" :checked="dataStore.selectedTitles.includes(value.title)" @change="dataStore.toggleSelection(value, $event.target.checked)" />
                    <label style="margin-left: 5px;" :for="value.title">{{ value.title }}</label>
                </div>
                <sub-tree-menu v-if="dataStore.expandedTitles.includes(value.title)" :items="value.items"></sub-tree-menu>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useDataStore } from '../stores/dataStore'

defineProps({
    items: Array
})

const dataStore = useDataStore()

onMounted(() => {
  dataStore.loadFromLocalStorage()
})

const selectedItems = ref([])

</script>
