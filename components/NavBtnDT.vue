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
      }
   }
}
</script>
<template>
   <button
      class=" text-neo-very-dark-blue hover:text-neo-soft-red text-[13px] leading-[17px] tracking-[1.5px] uppercase select-none">
      {{ btnText }}
   </button>
</template>