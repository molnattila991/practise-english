<template>
    <div style="height: 100%; overflow: auto;">
        <sub-tree-menu :items="dataStore.topics"></sub-tree-menu>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useDataStore } from '../stores/dataStore'
import SubTreeMenu from './SubTreeMenu.vue';

const dataStore = useDataStore()
const selectedItems = ref([])

</script>

<style scoped>
.v-treeview-node {
    font-size: 14px;
}

.v-treeview-node__root {
    padding: 2px 4px;
    margin: 0;
}

.v-treeview-node__content {
    min-height: 28px;
    padding: 2px 4px;
}

.v-treeview-node__children {
    padding-left: 16px;
}

.v-treeview-node__toggle {
    display: none;
}
</style>