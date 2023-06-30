<script>
import { useMainStore } from '@/stores/main';
import { mapStores } from 'pinia';

import LogoStyle from './components/LogoStyle.vue';
import BtnStyle from './components/BtnStyle.vue';

import iconOpen from '@/assets/images/icon-hamburger.svg?url';
import iconClose from '@/assets/images/icon-close.svg?url';

export default {
  data() {
    return {
      iconOpen,
      iconClose,
    }
  },
  components: {
    LogoStyle,
    BtnStyle,
  },
  computed: {
    ...mapStores(useMainStore),
  }
}
</script>
<template>
  <body class=" flex flex-col bg-gray-300 text-neo-very-dark-blue font-rubik">
    <header class=" w-full max-w-[425px] px-8 pt-10">
      <nav class=" flex justify-between">
        <LogoStyle />
        <div @click="mainStore.isNavActive = !mainStore.isNavActive" class=" cursor-pointer select-none">
          <img v-show="mainStore.isNavActive == false" :src="iconOpen" alt="iconOpen">
          <img v-show="mainStore.isNavActive == true" :src="iconClose" alt="iconClose">
        </div>
      </nav>
      <h1 class=" text-[30px] leading-[40px] tracking-[-.09px] font-medium">
        A Simple Bookmark Manager
      </h1>
      <p class=" text-[15px] leading-[25px]">
        A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load
        instantly. Try it for free.
      </p>
      <div class=" flex items-center gap-[14px]">
        <BtnStyle btn-text="Get it on Chrome" />
        <BtnStyle btn-text="Get it on Firefox" type-color="blue" />
      </div>
    </header>
  </body>
</template>