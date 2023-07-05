<script>
import { useMainStore } from '@/stores/main';
import { mapStores } from 'pinia';

import QuestionArrow from './QuestionArrow.vue';

export default {
   data() {
      return {
         data: [
            {
               header: 'What is Bookmark?',
               main: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
            },
            {
               header: 'How can I request a new browser?',
               main: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
            },
            {
               header: 'Is there a mobile app?',
               main: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
            },
            {
               header: 'What about other Chromium browsers?',
               main: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
            },
         ],
      }
   },
   components: {
      QuestionArrow,
   },
   computed: {
      ...mapStores(useMainStore),
      getMargin() {
         if (this.mainStore.questionsArr[this.dataIndex]) {
            return 'mt-[28px]'
         } else {
            return 'mt-[12px]'
         }
      }
   },
   props: {
      dataIndex: {
         Number,
         default: 0
      }
   }
}
</script>
<template>
   <div class=" flex flex-col">
      <button @click="mainStore.setActiveQuestion(dataIndex)" class=" flex justify-between items-center">
         <h4 class=" text-[15px] leading-[32px] select-none">
            {{ data[dataIndex].header }}
         </h4>
         <QuestionArrow :is-active="mainStore.questionsArr[dataIndex]" />
      </button>
      <p v-show="mainStore.questionsArr[dataIndex]"
         class=" text-[15px] leading-[30px] tracking-[.14px] opacity-[.75] mt-[26px]">
         {{ data[dataIndex].main }}
      </p>
      <div :class="` w-full h-[1px] ${getMargin} bg-neo-very-dark-blue bg-opacity-[.15]`"></div>
   </div>
</template>