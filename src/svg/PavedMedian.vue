<template>
     <svg v-if="title === 'Infrastructure'" :x="x" :y="y" :width="width" :height="100" class="median-img" data-name="median-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.07 145.74" preserveAspectRatio="none">
      <title>PavedMedian</title>
      <g>
        <line x1="38.53" y1="120.32" x2="38.53" y2="6.36" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="2.19"
        />
        <line x1="38.53" y1="138.63" x2="38.53" y2="120.32" fill="none" stroke="#929497" stroke-linecap="round" stroke-miterlimit="10"
          stroke-width="3.83" />
        <line x1="38.53" y1="145.74" x2="38.53" y2="134.12" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="3.83"
        />
        <g>
          <path d="M15,2.08c15.76-.82,23.5,6.1,23.5,7.92" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="1.09" />
          <path d="M17.58,2c3.55,1,8.75,2.16,12.85,5.35s7.74,6.47,8.1,10" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="0.55"
          />
          <rect x="15.03" y="0.99" width="3.84" height="2" fill="#929497" />
          <path d="M0,3.72A3.82,3.82,0,0,1,2,1C3.83,0,6.47-.11,8.84.08L15,.53V4.27h-14L.79,3.7Z" fill="#929497" />
        </g>
        <g>
          <path d="M62,2.08C46.28,1.26,38.53,8.18,38.53,10" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="1.09"
          />
          <path d="M59.49,2c-3.56,1-8.75,2.16-12.85,5.35s-7.74,6.47-8.11,10" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="0.55"
          />
          <rect x="58.2" y="0.99" width="3.84" height="2" transform="translate(120.24 3.98) rotate(-180)" fill="#929497" />
          <path d="M77.07,3.72a3.86,3.86,0,0,0-2-2.73C73.24,0,70.6-.11,68.23.08L62,.53V4.27H76l.27-.57Z" fill="#929497" />
        </g>
      </g>
    </svg>
</template>
<script>
export default {
  props: {
    title: String,
    width: Number,
    x: Number,
    y: Number
  }
};
</script>
<style>
</style>
