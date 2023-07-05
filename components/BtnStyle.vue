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
      wSize: {
         String,
         default: 'w-[151px]',
      },
      typeColor: String,
   },
   computed: {
      getTypeColor() {
         switch (this.typeColor) {
            case 'blue':
               return 'bg-neo-soft-blue hover:bg-white text-white hover:text-neo-soft-blue hover:border-2 hover:border-neo-soft-blue';
            case 'red':
               return 'bg-neo-soft-red hover:bg-white text-white hover:text-neo-soft-red hover:border-2 hover:border-neo-soft-red';
            default:
               return 'bg-neo-extra-one hover:bg-white text-neo-very-dark-blue text-opacity-75 hover:border-2 hover:border-neo-very-dark-blue hover:border-opacity-75';
         }
      }
   }
}
</script>
<template>
   <button
      :class="` ${wSize} h-[48px] ${getTypeColor} text-[14px] leading-[28px] tracking-[.25px] font-medium rounded-[5px] drop-shadow-lg select-none`">
      {{ btnText }}
   </button>
</template>