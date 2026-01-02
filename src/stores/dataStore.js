import { defineStore } from 'pinia'
import data from '../data/hun-eng.json'

function flattenSentences(items) {
    if (!items || !Array.isArray(items)) return []
    let sentences = []
    items.forEach(item => {
        if (item && item.sentences && Array.isArray(item.sentences)) {
            item.sentences.forEach(sentence => {
                if (sentence) {
                    sentences.push({ ...sentence, title: item.title || '' })
                }
            })
        }
        if (item && item.items) {
            sentences.push(...flattenSentences(item.items))
        }
    })
    return sentences
}

export const useDataStore = defineStore('data', {
    state: () => ({
        topics: data.topics,
        selectedTitles: [],
        currentRandomSentence: null
    }),
    getters: {
        flatSentences: (state) => {
            return flattenSentences(state.topics)
        },
        selectedSentences: (state) => {
            const flat = flattenSentences(state.topics)
            return flat.filter(sentence => state.selectedTitles.includes(sentence.title))
        }
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
            this.saveToLocalStorage()
        },
        getAllTitles(item) {
            let titles = [item.title]
            if (item.items && item.items.length > 0) {
                item.items.forEach(child => {
                    titles.push(...this.getAllTitles(child))
                })
            }
            return titles
        },
        saveToLocalStorage() {
            localStorage.setItem('dataStore', JSON.stringify(this.$state))
        },
        loadFromLocalStorage() {
            const saved = localStorage.getItem('dataStore')
            this.$patch(JSON.parse(saved))

        },
        pickRandomSentence() {
            const sentences = this.selectedSentences
            if (sentences.length > 0) {
                this.currentRandomSentence = sentences[Math.floor(Math.random() * sentences.length)]
            } else {
                this.currentRandomSentence = null
            }
        }
    }
})