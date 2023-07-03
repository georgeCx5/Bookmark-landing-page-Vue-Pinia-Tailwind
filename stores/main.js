import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    test: 'Hola',
    isNavActive: false,
    featuresArr: [true, false, false],
    featureValue: 0,
  }),
  getters: {
    getTest(state) {
      return state.test;
    }
  },
  actions: {
    setTest(first) {
      this.test += first;
    },
    setActiveFeature(index) {
      this.featuresArr.fill(false);
      this.featuresArr[index] = true;
      this.featureValue = index;
    },
  }
})
