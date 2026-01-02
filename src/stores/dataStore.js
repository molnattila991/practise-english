import { defineStore } from 'pinia'
import data from '../data/hun-eng.json'

export const useDataStore = defineStore('data', {
  state: () => ({
    topics: data.topics,
    selectedTitles: []
  }),
  getters: {
    // Add getters if needed for computed data
  },
  actions: {
    toggleSelection(item, selected) {
      const titles = this.getAllTitles(item)
      if (selected) {
        titles.forEach(title => {
          if (!this.selectedTitles.includes(title)) {
            this.selectedTitles.push(title)
          }
        })
      } else {
        this.selectedTitles = this.selectedTitles.filter(title => !titles.includes(title))
      }
    },
    getAllTitles(item) {
      let titles = [item.title]
      if (item.items && item.items.length > 0) {
        item.items.forEach(child => {
          titles.push(...this.getAllTitles(child))
        })
      }
      return titles
    }
  }
})