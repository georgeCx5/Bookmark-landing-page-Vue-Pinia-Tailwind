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
               return 'bg-neo-soft-blue text-white';
            case 'red':
               return 'bg-neo-soft-red text-white';
            default:
               return 'bg-neo-extra-one text-neo-very-dark-blue text-opacity-75';
         }
      }
   }
}
</script>
<template>
   <button
      :class="` ${wSize} h-[48px] ${getTypeColor} text-[14px] leading-[28px] tracking-[.25px] font-medium rounded-[5px] drop-shadow-btn select-none`">
      {{ btnText }}
   </button>
</template>