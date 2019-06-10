<template>
    <svg  class="product__star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" enable-background="new 0 0 210.476 225.987" width="11%" height="11%" viewBox="0 0 25 26"  xml:space="preserve"  overflow="visible" >
            <path  d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" fill="white"/>   
              <clipPath id="MyClipBike">
                 <path  fill="#black" d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
               </clipPath>
        <g clip-path="url(#MyClipBike)"><rect :style="cssObject"  width="100%" height="100%"></rect></g>
    </svg>
</template>
<script>
export default {
  props: {
    value: Number,
    maxCapacity: Number
  },
  data() {
    return {
      percent: 100
    };
  },
  computed: {
    cssObject: function() {
      var styleObject = {
        transform: "translateY(" + (100 - (this.value / this.maxCapacity) * 100) + "%) ",
        fill: "green",
        transition: "fill 0.3s ease-in-out"
      };
      if (this.value > this.maxCapacity) {
        styleObject.transform = "translateY(0%)";
      }
      return styleObject;
    }
  }
};
</script>
<style <style lang="scss">
:root {
  --value: "50%";
}
.product__star path {
  stroke: #818181;
  fill: transparent;
  transition: fill 0.3s ease-in-out;

}
</style>
