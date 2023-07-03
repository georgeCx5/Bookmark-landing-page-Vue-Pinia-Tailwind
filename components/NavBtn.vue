<script>
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
      isMain: {
         Boolean,
         default: false,
      },
   },
   computed: {
      getMain() {
         if (this.isMain == true) {
            return 'w-full h-12 hover:bg-white font-medium border-2 border-white rounded-[5px]';
         } else {
            return '';
         }
      }
   }
}
</script>
<template>
   <button
      :class="` ${getMain} text-white hover:text-neo-soft-red text-[20px] leading-[17px] tracking-[2.35px] uppercase`">
      {{ btnText }}
   </button>
</template>