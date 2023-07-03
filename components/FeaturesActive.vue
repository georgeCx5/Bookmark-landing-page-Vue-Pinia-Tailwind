<script>
import BtnStyle from './BtnStyle.vue';

import featuresOne from '@/assets/images/illustration-features-tab-1.svg?url';
import featuresTwo from '@/assets/images/illustration-features-tab-2.svg?url';
import featuresThree from '@/assets/images/illustration-features-tab-3.svg?url';

export default {
   data() {
      return {
         // dataImg: [featuresOne, featuresTwo, featuresThree],
         data: [
            {
               img: featuresOne,
               header: 'Bookmark in one click',
               main: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            },
            {
               img: featuresTwo,
               header: 'Intelligent search',
               main: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            },
            {
               img: featuresThree,
               header: 'Share your bookmarks',
               main: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            },
         ]
      }
   },
   props: {
      dataIndex: {
         Number,
         default: 0,
      }
   },
   components: {
      BtnStyle,
   }
}
</script>
<template>
   <div>
      <img :src="data[dataIndex].img" :alt="`Image ${dataIndex + 1}`">
      <div class=" relative right-[-285px] w-[577px] h-[203px] bg-neo-soft-blue rounded-[316px]"></div>
   </div>
   <h2 class=" text-[24px] leading-[52px] tracking-[-.08px] font-medium">
      {{ data[dataIndex].header }}
   </h2>
   <p class=" text-[15px] leading-[25px] opacity-50">
      {{ data[dataIndex].main }}
   </p>
   <BtnStyle btn-text="More Info" type-color="blue" w-size="w-[114px]" />
</template>