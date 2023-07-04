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
import ExtensionDownload from './components/ExtensionDownload.vue';
import QuestionActive from './components/QuestionActive.vue';
import FooterLogo from './components/FooterLogo.vue';
import FooterBtn from './components/FooterBtn.vue';

import iconOpen from '@/assets/images/icon-hamburger.svg?url';
import iconClose from '@/assets/images/icon-close.svg?url';
import headerImg from '@/assets/images/illustration-hero.svg?url'
import iconError from '@/assets/images/icon-error.svg?url'

export default {
  data() {
    return {
      iconOpen,
      iconClose,
      headerImg,
      iconError,
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
    ExtensionDownload,
    QuestionActive,
    FooterLogo,
    FooterBtn,
  },
  computed: {
    ...mapStores(useMainStore),
  }
}
</script>
<template>
  <body class=" flex flex-col items-center bg-white text-neo-very-dark-blue font-rubik overflow-hidden">
    <header class=" relative flex flex-col w-full max-w-[425px] pt-10 mb-[120px]">
      <nav class="  flex justify-between px-8 mb-20">
        <LogoStyle class=" z-30" />
        <div @click="mainStore.isNavActive = !mainStore.isNavActive" class=" cursor-pointer select-none z-30">
          <img v-show="mainStore.isNavActive == false" :src="iconOpen" alt="iconOpen">
          <img v-show="mainStore.isNavActive == true" :src="iconClose" alt="iconClose">
        </div>
        <!-- NavBar Mobile -->
        <div v-show="mainStore.isNavActive == true"
          class=" absolute left-0 top-0 flex flex-col gap-[219px] w-full pt-[105px] pb-12 bg-neo-very-dark-blue bg-opacity-95 px-8 z-20">
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
      <div :class="` relative self-center mb-16`">
        <img class=" relative w-[353px] z-10" :src="headerImg" alt="headerImg">
        <div class=" absolute right-[-285px] top-[56px] w-[577px] h-[203px] bg-neo-soft-blue rounded-[316px]"></div>
      </div>
      <div class=" flex flex-col items-center text-center px-8">
        <h1 class=" mb-4 text-[30px] leading-[40px] tracking-[-.09px] font-medium">
          A Simple Bookmark Manager
        </h1>
        <p class=" mb-8 text-[15px] leading-[25px] opacity-50">
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
      <section class=" px-8 mb-[77px]">
        <div class=" mb-10 text-center">
          <h2 class=" text-[24px] leading-[52px] tracking-[-.08px] font-medium">
            Features
          </h2>
          <p class=" text-[15px] leading-[25px] opacity-50">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
            your
            devices so you can access them on the go.
          </p>
        </div>
        <div class=" flex flex-col items-center mb-[72px]">
          <FeaturesLine />
          <FeaturesChoice btn-text="Simple Bookmarking" :btn-index="0" />
          <FeaturesLine />
          <FeaturesChoice btn-text="Speedy Searching" :btn-index="1" />
          <FeaturesLine />
          <FeaturesChoice btn-text="Easy Sharing" :btn-index="2" />
          <FeaturesLine />
        </div>
        <FeaturesActive :data-index="mainStore.featureValue" />
      </section>
      <section class=" flex flex-col gap-10 mb-[120px] px-8">
        <div class=" text-center">
          <h2 class=" text-[24px] leading-[52px] tracking-[-.08px] font-medium">Download the extension</h2>
          <p class=" text-[15px] leading-[25px] opacity-50">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
            prioritize.
          </p>
        </div>
        <div class=" flex flex-col gap-10 px-4">
          <ExtensionDownload :data-index="0" />
          <ExtensionDownload :data-index="1" />
          <ExtensionDownload :data-index="2" />
        </div>
      </section>
      <section class=" flex flex-col px-[30px] mb-[120px]">
        <div class=" flex flex-col gap-4 mb-16 text-center">
          <h2 class=" text-[24px] leading-[30px] tracking-[-.08px]">
            Frequently Asked Questions</h2>
          <p class=" text-[15px] leading-[25px] opacity-50">
            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
          </p>
        </div>
        <div class=" flex flex-col gap-5 mb-12">
          <QuestionActive :data-index="0" />
          <QuestionActive :data-index="1" />
          <QuestionActive :data-index="2" />
          <QuestionActive :data-index="3" />
        </div>
        <BtnStyle class=" self-center" btn-text="More info" type-color="blue" w-size="w-[114px]" />
      </section>
      <section class=" flex flex-col items-center gap-8 px-8 pt-[60px] pb-[38px] bg-neo-soft-blue text-white">
        <div class=" text-center">
          <h5 class=" text-[12px] leading-[40px] tracking-[4.62px] font-medium uppercase">
            35,000+ already joined</h5>
          <h3 class=" text-[24px] leading-[28px] tracking-[-.08px] font-medium">
            Stay up-to-date with what we’re doing</h3>
        </div>
        <div class=" flex flex-col gap-[38px] w-full">
          <div class=" relative">
            <!-- Computar el gap, y alinear otros pequeños detalles -->
            <input class=" relative w-full h-12 px-5 text-neo-very-dark-blue rounded-[5px] z-10" type="email"
              placeholder="Enter your email address" v-model="mainStore.emailValue">
            <img v-show="mainStore.emailError" class=" absolute top-4 right-3 z-10" :src="iconError" alt="iconError">
            <p v-show="mainStore.emailError"
              class=" absolute top-0 w-full h-[70px] px-3 pt-[52px] bg-neo-soft-red text-[10px] leading-[12px] tracking-[.25px] font-medium italic rounded-[5px]">
              Whoops, make sure it's an email
            </p>
          </div>
          <button @click="mainStore.setCheckEmail()"
            class=" w-full h-12 bg-neo-soft-red text-[14px] leading-[28px] tracking-[.25px] font-medium rounded-[5px] shadow-lg">
            Contact Us
          </button>
        </div>
      </section>
    </main>
    <footer class=" flex flex-col items-center w-full max-w-[425px] py-10 bg-neo-very-dark-blue text-white">
      <FooterLogo class=" mb-[39px]" />
      <div class=" flex flex-col gap-8 mb-[48px]">
        <FooterBtn btn-text="Features" />
        <FooterBtn btn-text="Pricing" />
        <FooterBtn btn-text="Contact" />
      </div>
      <div class=" flex items-center gap-10">
        <SocialNetwork :network-index="0" />
        <SocialNetwork :network-index="1" />
      </div>
    </footer>
  </body>
</template>