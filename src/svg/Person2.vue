<template>
    <svg v-if="value >10000" class="product__star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="50" height="100" viewBox="0 0 210.476 225.987" overflow="visible" enable-background="new 0 0 210.476 225.987" xml:space="preserve">
        <path fill="#black" d="M180.166,97.434l2.76-10.808l9.926,38.151l16.983-0.143l-16.913-66.419l-0.104,0.002  c-0.445-7.165-10.167-13.088-23.027-14.526v-3.988c8.125-2.567,14.016-10.161,14.016-19.135c0-11.083-8.984-20.068-20.068-20.068  c-11.082,0-20.068,8.985-20.068,20.068c0,8.974,5.893,16.567,14.016,19.135v3.989c-12.86,1.438-22.582,7.36-23.027,14.525  l-0.103-0.002l-16.913,66.419l16.983,0.143l9.896-38.029l2.859,10.686h-0.258l-22.564,127.85h23.155l16.423-87.395l15.837,87.395  h22.946l-22.564-127.85H180.166z"/>
        <clipPath id="clip-path">
            <path fill="#black" d="M180.166,97.434l2.76-10.808l9.926,38.151l16.983-0.143l-16.913-66.419l-0.104,0.002  c-0.445-7.165-10.167-13.088-23.027-14.526v-3.988c8.125-2.567,14.016-10.161,14.016-19.135c0-11.083-8.984-20.068-20.068-20.068  c-11.082,0-20.068,8.985-20.068,20.068c0,8.974,5.893,16.567,14.016,19.135v3.989c-12.86,1.438-22.582,7.36-23.027,14.525  l-0.103-0.002l-16.913,66.419l16.983,0.143l9.896-38.029l2.859,10.686h-0.258l-22.564,127.85h23.155l16.423-87.395l15.837,87.395  h22.946l-22.564-127.85H180.166z"/>
        </clipPath>
        <g clip-path="url(#clip-path)"><rect :style="cssObject"  width="100%" height="100%"></rect></g>
    </svg>
</template>
<script>
export default {
  props: {
    value: Number
  },
  data() {
    return {
      max: 20000,
      percent: 100
    };
  },
  computed: {
    cssObject: function() {
      var styleObject = {
        transform: "translateY(" + (this.value / this.max) * 100 + "%)",
        fill: "green",
        transition: "fill 0.3s ease-in-out"
      };
      if (this.value > this.max) {
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
