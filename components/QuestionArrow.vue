<script>
export default {
   data() {
      return {

      }
   },
   computed: {
      getActive() {
         let fillColor;
         let rotate;
         if (this.isActive) {
            fillColor = '#FA5959';
            rotate = 'rotate-180';
         } else {
            fillColor = '#5267DF';
            rotate = 'rotate-0';
         }
         return { fillColor, rotate }
      }
   },
   props: {
      isActive: {
         Boolean,
         default: false,
      }
   }
}
</script>
<template>
   <svg :class="getActive.rotate" xmlns="http://www.w3.org/2000/svg" width="18" height="12">
      <path fill="none" :stroke="getActive.fillColor" stroke-width="3" d="M1 1l8 8 8-8" />
   </svg>
</template>