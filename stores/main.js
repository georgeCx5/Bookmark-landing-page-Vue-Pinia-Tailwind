import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    test: 'Hola',
    rgxEmail: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    emailValue: '',
    emailError: null,
    isNavActive: false,
    featuresArr: [true, false, false],
    featureValue: 0,
    questionsArr: [false, false, false, false],
    questionValue: null,
  }),
  getters: {
    getTest(state) {
      return state.test;
    },
    getError(state) {
      let border;
      let gap;
      if (state.emailError) {
        border = 'border-2 border-neo-soft-red';
        gap = 'gap-[38px]';
      } else {
        border = '';
        gap = 'gap-[16px]';
      }
      return { border, gap }
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
    setActiveQuestion(index) {
      this.questionsArr.fill(false);
      if (index != this.questionValue) {
        this.questionsArr[index] = true;
        this.questionValue = index;
      } else {
        this.questionsArr[index] = false;
        this.questionValue = null;
      }
    },
    setCheckEmail() {
      if (this.rgxEmail.test(this.emailValue)) {
        this.emailError = false;
        this.emailValue = '';
      } else {
        this.emailError = true;
      }
    }
  }
})
