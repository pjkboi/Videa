<template>
  <svg
    v-if="title === 'Painted'||title === 'Raised'||title === 'Curb Serparated'||title === 'url(#bikeTexture)'"
    :x="x"
    :y="y"
    :width="width"
    :height="100"
    class="bike-img"
    data-name="bike-img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.83 57.57"
    preserveAspectRatio="none"
  >
    <title>BikeLane</title>
    <g>
      <polygon points="17.02 36.96 14.9 36.96 14.9 33.44 17.49 33.44 17.02 36.96" fill="#ecbfa9"></polygon>
      <polygon
        points="17.21 36.63 14.96 36.63 14.96 39.45 14.35 44.8 15.78 45.36 17.49 43.3 17.49 39.73 17.02 37.76 17.21 36.63"
        fill="#58595b"
      ></polygon>
      <polygon points="6.13 36.96 5.85 43.3 7.54 43.3 8.88 37.62 6.13 36.96" fill="#ecbfa9"></polygon>
      <path
        d="M12,23l2.91,5.54s-.09,2,0,3.67a10.24,10.24,0,0,1,0,2.16s2.54,1.26,2.87-.51c.25-1.32.61-3.49.61-3.49l.28-3.24L19,24s-2.07-5-3.53-5.82-7.16-.73-8,.34-1.65,5.22-1.65,6.15.37,1.68.47,2.9a13.17,13.17,0,0,1,.09,3.29,51.72,51.72,0,0,0-.56,6.57c0,1.13,3,.66,3,.66S9,34,9,32.87s1.22-3.28,1.31-4.13A22.29,22.29,0,0,1,12,23Z"
        fill="#818fa3"
      ></path>
      <rect x="11.53" y="32.83" width="2.11" height="24.75" rx="1.06" ry="1.06" fill="#181315"></rect>
      <polyline
        points="10.03 45.88 10.59 31.14 12.59 30.38 14.58 31.23 14.58 45.88"
        fill="none"
        stroke="#463a42"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.99"
      ></polyline>
      <rect x="11.75" y="24.47" width="1.89" height="6.23" fill="#463a42"></rect>
      <polyline
        points="0.49 22.64 12.59 24.47 25.34 24.04"
        fill="none"
        stroke="#463a42"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="0.99"
      ></polyline>
      <polygon
        points="4.72 10.94 3.31 14.09 1.71 21.32 1.53 23.55 4.06 24.47 4.34 22.45 2.79 21.37 6.55 11.22 4.72 10.94"
        fill="#f0bfa7"
      ></polygon>
      <polygon
        points="18.34 12.54 20.17 16.11 22.24 22.17 21.16 23.25 21.58 24.94 23.5 24.94 24.82 23.55 23.88 21.74 22.42 15.07 19.75 10.94 18.34 12.54"
        fill="#e9c1a8"
      ></polygon>
      <path
        d="M6.69,6.48l5.64-1,5.44,1,2.63,5.17-2.18,1.54-.82-1.92s-1.69,4.6-1.22,6.48l.47,1.88a17.12,17.12,0,0,0-4.42-.75c-1.59.09-5.54.75-5.54.75a4.24,4.24,0,0,0,1.22-2.35c0-1.13-.47-7-.47-7L6.69,12l-2.35-.94Z"
        fill="#25a9e0"
      ></path>
      <polygon
        points="7.91 43.02 5.61 43.02 5.38 45.41 4.86 48.23 5.85 49.22 7.91 49.22 7.68 44.28 7.91 43.02"
        fill="#58595b"
      ></polygon>
      <path d="M14.08,4.7l.19,1.17S12.82,10,12,9.77,9.84,6.9,9.84,6.23V4.75Z" fill="#dba78f"></path>
      <path
        d="M9.27,4.27A6.08,6.08,0,0,0,10,7.33a1.75,1.75,0,0,0,1.78.7A5.29,5.29,0,0,0,14,6.63c.57-.85.86-4.33.86-4.33H9.27Z"
        fill="#ecbfa9"
      ></path>
      <path
        d="M9.27,1.41S10.94,0,12.06,0s3.23,1.41,3.23,1.41l.23,2.82-4.09.37L8.57,4.27Z"
        fill="#d32e2e"
      ></path>
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

