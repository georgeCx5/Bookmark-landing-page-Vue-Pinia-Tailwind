import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    test: 'Hola',
    isNavActive: false,
  }),
  getters: {
    getTest(state) {
      return state.test;
    }
  },
  actions: {
    setTest(first) {
      this.test += first;
    }
  }
})
