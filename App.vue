<script>
import { useMainStore } from '@/stores/main';
import { mapStores } from 'pinia';

import LogoStyle from './components/LogoStyle.vue';
import BtnStyle from './components/BtnStyle.vue';
import SocialNetwork from './components/SocialNetwork.vue';
import NavBtn from './components/NavBtn.vue';
import NavLine from './components/NavLine.vue';
import FeaturesChoice from './components/FeaturesChoice.vue';
import FeaturesLine from './components/FeaturesLine.vue';
import FeaturesActive from './components/FeaturesActive.vue';

import iconOpen from '@/assets/images/icon-hamburger.svg?url';
import iconClose from '@/assets/images/icon-close.svg?url';
import headerImg from '@/assets/images/illustration-hero.svg?url'

export default {
  data() {
    return {
      iconOpen,
      iconClose,
      headerImg,
    }
  },
  components: {
    LogoStyle,
    BtnStyle,
    SocialNetwork,
    NavBtn,
    NavLine,
    FeaturesChoice,
    FeaturesLine,
    FeaturesActive,
  },
  computed: {
    ...mapStores(useMainStore),
  }
}
</script>
<template>
  <body class=" flex flex-col items-center bg-white text-neo-very-dark-blue font-rubik">
    <header class=" relative flex flex-col w-full max-w-[425px] pt-10 pb-2 overflow-hidden">
      <nav class="  flex justify-between px-8">
        <LogoStyle class=" z-20" />
        <div @click="mainStore.isNavActive = !mainStore.isNavActive" class=" cursor-pointer select-none z-20">
          <img v-show="mainStore.isNavActive == false" :src="iconOpen" alt="iconOpen">
          <img v-show="mainStore.isNavActive == true" :src="iconClose" alt="iconClose">
        </div>
        <!-- NavBar Mobile -->
        <div v-show="mainStore.isNavActive == true"
          class=" absolute left-0 top-0 flex flex-col gap-[219px] w-full pt-[105px] pb-12 bg-neo-very-dark-blue bg-opacity-95 px-8 z-10">
          <div class=" flex flex-col items-center gap-6">
            <NavLine />
            <NavBtn btn-text="Features" />
            <NavLine />
            <NavBtn btn-text="Pricing" />
            <NavLine />
            <NavBtn btn-text="Contact" />
            <NavLine />
            <NavBtn btn-text="Login" :is-main="true" />
          </div>
          <div class=" flex justify-center items-center gap-10">
            <SocialNetwork :network-index="0" />
            <SocialNetwork :network-index="1" />
          </div>
        </div>
      </nav>
      <div :class="` relative self-center`">
        <img class=" relative w-[353px] z-10" :src="headerImg" alt="headerImg">
        <div class=" absolute right-[-285px] top-[56px] w-[577px] h-[203px] bg-neo-soft-blue rounded-[316px]"></div>
      </div>
      <div class=" px-8">
        <h1 class=" text-[30px] leading-[40px] tracking-[-.09px] font-medium">
          A Simple Bookmark Manager
        </h1>
        <p class=" text-[15px] leading-[25px] opacity-50">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load
          instantly. Try it for free.
        </p>
        <div class=" flex items-center gap-[14px]">
          <BtnStyle btn-text="Get it on Chrome" />
          <BtnStyle btn-text="Get it on Firefox" type-color="blue" />
        </div>
      </div>
    </header>
    <main class=" w-full max-w-[425px]">
      <h2 class=" text-[24px] leading-[52px] tracking-[-.08px] font-medium">
        Features
      </h2>
      <p class=" text-[15px] leading-[25px] opacity-50">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your
        devices so you can access them on the go.
      </p>
      <div class=" flex flex-col items-center">
        <FeaturesLine />
        <FeaturesChoice btn-text="Simple Bookmarking" :btn-index="0" />
        <FeaturesLine />
        <FeaturesChoice btn-text="Speedy Searching" :btn-index="1" />
        <FeaturesLine />
        <FeaturesChoice btn-text="Easy Sharing" :btn-index="2" />
        <FeaturesLine />
      </div>
      <FeaturesActive :data-index="mainStore.featureValue" />
    </main>
  </body>
</template>