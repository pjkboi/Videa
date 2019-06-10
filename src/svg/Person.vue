<template>
    <svg  class="product__star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"  width="12.5%" height="12.5%" viewBox="0 0 25 26"  xml:space="preserve"  overflow="visible" >
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7" fill="white"/>
        <clipPath id="clip-path">
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7" fill="white"/>
        </clipPath>
        <g clip-path="url(#clip-path)"><rect :style="cssObject"  width="100%" height="100%"></rect></g>
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
        transform: "translateY(" + (100 - (this.value / this.maxCapacity) * 100) + "%)",
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

// .product__star rect {
//   transform: translateY(50%);
//     fill: green;
// }
</style>
