<script>
import { useMainStore } from '@/stores/main';
import { mapStores } from 'pinia';

import LogoStyle from './components/LogoStyle.vue';
import LogoStyleDT from './components/LogoStyleDT.vue';
import BtnStyle from './components/BtnStyle.vue';
import SocialNetwork from './components/SocialNetwork.vue';
import NavBtn from './components/NavBtn.vue';
import NavBtnDT from './components/NavBtnDT.vue';
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
    LogoStyleDT,
    BtnStyle,
    SocialNetwork,
    NavBtn,
    NavBtnDT,
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
    <header
      class=" relative flex flex-col w-full max-w-[425px] DT:max-w-[1920px] pt-10 DT:pt-12 mb-[120px] DT:mb-[120px]">
      <nav class="flex justify-between items-center px-8 DT:px-[171px] mb-20 DT:mb-[104px]">
        <LogoStyle class=" DT:hidden z-30" />
        <LogoStyleDT class=" hidden DT:block" />
        <div @click="mainStore.isNavActive = !mainStore.isNavActive" class=" DT:hidden cursor-pointer select-none z-30">
          <img v-show="mainStore.isNavActive == false" :src="iconOpen" alt="iconOpen">
          <img v-show="mainStore.isNavActive == true" :src="iconClose" alt="iconClose">
        </div>
        <!-- NavBar Mobile -->
        <div v-show="mainStore.isNavActive == true"
          class=" absolute left-0 top-0 flex DT:hidden flex-col gap-[219px] w-full pt-[105px] pb-12 bg-neo-very-dark-blue bg-opacity-95 px-8 z-20">
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
        <!-- NavBar Desktop -->
        <div class=" hidden DT:flex items-center gap-12">
          <NavBtnDT btn-text="Features" />
          <NavBtnDT btn-text="Pricing" />
          <NavBtnDT btn-text="Contact" />
          <button
            class=" w-[111px] h-10 bg-neo-soft-red hover:bg-white text-white hover:text-neo-soft-red text-[13px] leading-[17px] tracking-[1.5px] font-medium uppercase hover:border-2 hover:border-neo-soft-red rounded-[5px] drop-shadow-lg select-none">
            Login
          </button>
        </div>
      </nav>
      <div class=" flex flex-col DT:flex-row-reverse DT:self-center DT:justify-between DT:items-center DT:w-[82.25%]">
        <div :class="` relative self-center mb-16 DT:mb-0`">
          <img class=" relative w-[353px] DT:w-[652px] z-10" :src="headerImg" alt="headerImg" draggable="false">
          <div
            class=" absolute right-[-285px] DT:right-[-545px] top-[56px] DT:top-[145px] w-[577px] DT:w-[1000px] h-[203px] DT:h-[352px] bg-neo-soft-blue rounded-[316px]">
          </div>
        </div>
        <div class=" flex flex-col items-center DT:items-start DT:w-[45.6%] px-8 DT:px-0 text-center DT:text-left">
          <h1
            class=" mb-4 DT:mb-6 text-[30px] DT:text-[48px] leading-[40px] DT:leading-[52px] tracking-[-.09px] DT:tracking-[-.15px] font-medium">
            A Simple Bookmark Manager
          </h1>
          <p class=" mb-8 text-[15px] DT:text-[18px] leading-[25px] DT:leading-[28px] opacity-50">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
            load
            instantly. Try it for free.
          </p>
          <div class=" flex items-center gap-[14px]">
            <BtnStyle btn-text="Get it on Chrome" type-color="blue" />
            <BtnStyle btn-text="Get it on Firefox" />
          </div>
        </div>
      </div>
    </header>
    <main class=" flex flex-col w-full max-w-[425px] DT:max-w-[1920px]">
      <section class=" DT:flex DT:flex-col DT:items-center px-8 DT:px-0 mb-[77px] DT:mb-[235px]">
        <div class=" DT:flex DT:flex-col DT:gap-4 DT:w-[37.5%] mb-10 DT:mb-9 text-center">
          <h2 class=" text-[24px] DT:text-[32px] leading-[52px] tracking-[-.08px] DT:tracking-[-.1px] font-medium">
            Features
          </h2>
          <p class=" text-[15px] DT:text-[18px] leading-[25px] DT:leading-[28px] opacity-50">
            Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
            your
            devices so you can access them on the go.
          </p>
        </div>
        <div
          class=" flex flex-col DT:flex-row DT:justify-between items-center DT:w-[51%] mb-[72px] DT:border-b-[1px] DT:border-neo-soft-blue DT:border-opacity-20">
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
      <section class=" flex flex-col DT:items-center gap-10 DT:gap-12 mb-[120px] DT:mb-[149px] px-8 DT:px-0">
        <div class=" DT:flex DT:flex-col DT:gap-4 DT:w-[37.5%] text-center">
          <h2 class=" text-[24px] DT:text-[32px] leading-[52px] tracking-[-.08px] DT:tracking-[-.1px] font-medium">
            Download the extension</h2>
          <p class=" text-[15px] DT:text-[18px] leading-[25px] DT:leading-[28px] opacity-50">
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
            prioritize.
          </p>
        </div>
        <div class=" flex flex-col DT:flex-row DT:justify-between gap-10 DT:gap-0 DT:w-[63.2%] DT:h-[451px] px-4">
          <ExtensionDownload class=" DT:self-start" :data-index="0" />
          <ExtensionDownload class=" DT:self-center" :data-index="1" />
          <ExtensionDownload class=" DT:self-end" :data-index="2" />
        </div>
      </section>
      <section class=" flex flex-col DT:self-center DT:w-[37.6%] px-[30px] DT:px-0 mb-[120px] DT:mb-[149px]">
        <div class=" flex flex-col gap-4 mb-16 DT:mb-[56px] text-center">
          <h2
            class=" text-[24px] DT:text-[32px] leading-[30px] DT:leading-[52px] tracking-[-.08px] DT:tracking-[-.1px] font-medium">
            Frequently Asked Questions</h2>
          <p class=" text-[15px] DT:text-[18px] leading-[25px] DT:leading-[28px] opacity-50">
            Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
          </p>
        </div>
        <div class=" flex flex-col gap-5 DT:gap-[19px] mb-12 DT:mb-[54px]">
          <QuestionActive :data-index="0" />
          <QuestionActive :data-index="1" />
          <QuestionActive :data-index="2" />
          <QuestionActive :data-index="3" />
        </div>
        <BtnStyle class=" self-center" btn-text="More info" type-color="blue" w-size="w-[114px]" />
      </section>
      <section
        class=" flex flex-col items-center gap-8 DT:gap-9 px-8 pt-[60px] DT:pt-[58px] pb-[38px] DT:pb-[74px] bg-neo-soft-blue text-white">
        <div class=" DT:flex DT:flex-col DT:gap-6 DT:w-[30.3%] text-center">
          <h5
            class=" text-[12px] DT:text-[13px] leading-[40px] tracking-[4.62px] DT:tracking-[5px] font-medium uppercase">
            35,000+ already joined</h5>
          <h3
            class=" text-[24px] DT:text-[32px] leading-[28px] DT:leading-[40px] tracking-[-.08px] DT:tracking-[-.1px] font-medium">
            Stay up-to-date with what we’re doing</h3>
        </div>
        <div :class="` flex flex-col DT:flex-row ${mainStore.getError.gap} DT:gap-4 w-full DT:w-auto`">
          <div class=" relative DT:w-[300px]">
            <input @keydown="mainStore.emailError = false" @keyup.enter="mainStore.setCheckEmail"
              :class="` relative w-full h-12 px-5 text-neo-very-dark-blue text-[14px] tracking-[.25px] ${mainStore.getError.border} focus:outline-none rounded-[5px] z-10`"
              type="email" placeholder="Enter your email address" :maxlength="32" v-model="mainStore.emailValue">
            <img v-show="mainStore.emailError" class=" absolute top-1/2 -translate-y-1/2 right-3 z-10 select-none"
              :src="iconError" alt="iconError" draggable="false">
            <p v-show="mainStore.emailError"
              class=" absolute top-0 flex items-end w-full h-[70px] px-3 pb-[6px] bg-neo-soft-red text-[10px] leading-[12px] tracking-[.25px] font-medium italic rounded-[5px] select-none">
              Whoops, make sure it's an email
            </p>
          </div>
          <button @click="mainStore.setCheckEmail()"
            class=" w-full DT:w-[126px] h-12 bg-neo-soft-red hover:bg-white hover:text-neo-soft-red text-[14px] leading-[28px] tracking-[.25px] font-medium hover:border-2 hover:border-neo-soft-red rounded-[5px] drop-shadow-lg select-none">
            Contact Us
          </button>
        </div>
      </section>
    </main>
    <footer
      class=" flex flex-col DT:flex-row DT:justify-between items-center w-full max-w-[425px] DT:max-w-[1920px] py-10 DT:px-[165px] bg-neo-very-dark-blue text-white">
      <div class=" flex flex-col items-center DT:flex-row DT:gap-16">
        <FooterLogo class=" mb-[39px] DT:mb-0" />
        <div class=" flex flex-col DT:flex-row gap-8 DT:gap-12 mb-[48px] DT:mb-0">
          <FooterBtn btn-text="Features" />
          <FooterBtn btn-text="Pricing" />
          <FooterBtn btn-text="Contact" />
        </div>
      </div>
      <div class=" flex items-center gap-10">
        <SocialNetwork :network-index="0" />
        <SocialNetwork :network-index="1" />
      </div>
    </footer>
  </body>
</template>