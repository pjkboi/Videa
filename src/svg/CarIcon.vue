<template>
    <svg  class="product__star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" enable-background="new 0 0 210.476 225.987" width="12%" height="12%" viewBox="0 0 25 26"  xml:space="preserve"  overflow="visible" >
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" fill="white"/><circle cx="7.5" cy="14.5" r="1.5" fill="#black"/><circle cx="16.5" cy="14.5" r="1.5" fill="#black"/>
        <clipPath id="MyClipCar">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" fill="white"/><circle cx="7.5" cy="14.5" r="1.5" fill="#black"/><circle cx="16.5" cy="14.5" r="1.5" fill="#black"/>
        </clipPath>
        <g clip-path="url(#MyClipCar)"><rect :style="cssObject"  width="100%" height="100%"></rect></g>
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
