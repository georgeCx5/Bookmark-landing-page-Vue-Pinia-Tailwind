<script>
import BtnStyle from './BtnStyle.vue'

import logoChrome from '@/assets/images/logo-chrome.svg?url'
import logoFirefox from '@/assets/images/logo-firefox.svg?url'
import logoOpera from '@/assets/images/logo-opera.svg?url'
import bgDots from '@/assets/images/bg-dots.svg?url'

export default {
   data() {
      return {
         logoChrome,
         logoFirefox,
         logoOpera,

         bgDots,
         data: [
            {
               img: logoChrome,
               browser: 'Chrome',
               browserText: 'Minimum version 62',
            },
            {
               img: logoFirefox,
               browser: 'Firefox',
               browserText: 'Minimum version 55',
            },
            {
               img: logoOpera,
               browser: 'Opera',
               browserText: 'Minimum version 46',
            },
         ]
      }
   },
   components: {
      BtnStyle,
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   }
}
</script>
<template>
   <div class=" flex flex-col items-center gap-8 pt-[60px] pb-6 rounded-[15px] shadow-lg">
      <img :src="data[dataIndex].img" alt="logoChrome" draggable="false">
      <div class=" flex flex-col gap-[6px]">
         <h3 class=" text-[20px] leading-[24px] tracking-[.25px] font-medium">
            Add to {{ data[dataIndex].browser }}
         </h3>
         <p class=" text-[15px] leading-[28px] opacity-50">
            {{ data[dataIndex].browserText }}
         </p>
      </div>
      <div class=" flex flex-col items-center gap-6 w-full">
         <img :src="bgDots" alt="bgDots" draggable="false">
         <BtnStyle btn-text="Add & Install Extension" type-color="blue" w-size="w-[83%]" />
      </div>
   </div>
</template>