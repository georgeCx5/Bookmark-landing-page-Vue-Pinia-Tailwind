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
   <button class=" hover:text-neo-soft-red text-[15px] leading-[17px] tracking-[1.73px] uppercase select-none">
      {{ btnText }}
   </button>
</template>