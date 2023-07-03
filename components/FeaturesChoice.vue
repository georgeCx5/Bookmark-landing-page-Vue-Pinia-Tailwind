<script>
import { useMainStore } from '@/stores/main';
import { mapStores } from 'pinia';

export default {
   data() {
      return {
      }
   },
   props: {
      btnText: {
         String,
         default: 'Empty',
      },
      btnIndex: {
         Number,
         required: true,
      }
   },
   computed: {
      ...mapStores(useMainStore),
      getActiveState() {
         let opacity;
         let barState;
         let justify;
         if (this.mainStore.featuresArr[this.btnIndex] == true) {
            opacity = 'opacity-[1]';
            barState = true;
            justify = 'justify-end';
         } else {
            opacity = 'opacity-[.75]';
            barState = false;
            justify = 'justify-center';
         }
         return { opacity, barState, justify };
      }
   }
}
</script>
<template>
   <div :class="` relative flex flex-col ${getActiveState.justify} gap-[15px] h-14 select-none`">
      <button @click="mainStore.setActiveFeature(btnIndex)"
         :class="` text-[16px] leading-[17px] tracking-[.53px] ${getActiveState.opacity} hover:opacity-100 hover:text-neo-soft-red `">
         {{ btnText }}
      </button>
      <div v-show="getActiveState.barState" class=" self-center w-[88%] h-[4px] bg-neo-soft-red"></div>
   </div>
</template>