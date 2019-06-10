<template>
  <svg
    v-if="title === 'Painted'||title === 'Raised'||title === 'Curb Serparated'||title === 'url(#bikeTexture)'"
    :x="x"
    :y="y"
    :width="width"
    :height="100"
    class="bike-img-b"
    data-name="bike-img-b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.83 57.57"
    preserveAspectRatio="none"
  >
    <title>BikeLane_Back</title>
    <g>
      <rect x="11.53" y="34.74" width="2.11" height="24.75" rx="1.06" ry="1.06" fill="#181315"></rect>
      <polyline
        points="10.03 47.79 10.59 33.05 12.59 32.3 14.58 33.14 14.58 47.79"
        fill="none"
        stroke="#463a42"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.99"
      ></polyline>
      <rect x="11.75" y="26.38" width="1.89" height="6.23" fill="#463a42"></rect>
      <polyline
        points="0.49 24.55 12.59 26.38 25.34 25.96"
        fill="none"
        stroke="#463a42"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="0.99"
      ></polyline>
      <polygon points="17.02 38.87 14.9 38.87 14.9 35.35 17.49 35.35 17.02 38.87" fill="#ecbfa9"></polygon>
      <polygon
        points="17.21 38.54 14.96 38.54 14.96 41.36 14.35 46.71 15.78 47.28 17.49 45.21 17.49 41.64 17.02 39.67 17.21 38.54"
        fill="#58595b"
      ></polygon>
      <polygon points="6.13 38.87 5.85 45.21 7.54 45.21 8.88 39.53 6.13 38.87" fill="#ecbfa9"></polygon>
      <path
        d="M11.75,27.38l3.11,3.08s-.09,2,0,3.67a10.24,10.24,0,0,1,0,2.16s2.54,1.27,2.87-.51c.25-1.32.61-3.48.61-3.48l.28-3.24L19,26s-2.07-5-3.53-5.83-7.16-.73-8,.34-1.65,5.22-1.65,6.15.37,1.68.47,2.91a13.09,13.09,0,0,1,.09,3.28,51.91,51.91,0,0,0-.56,6.58c0,1.12,3,.65,3,.65S9,35.91,9,34.78s1.22-3.28,1.31-4.13S10.58,30.23,11.75,27.38Z"
        fill="#818fa3"
      ></path>
      <polygon
        points="4.72 12.85 3.31 16 1.71 23.23 1.53 25.46 4.06 26.38 4.34 24.36 2.79 23.28 6.55 13.14 4.72 12.85"
        fill="#f0bfa7"
      ></polygon>
      <polygon
        points="18.34 14.45 20.17 18.02 22.24 24.08 21.16 25.16 21.58 26.85 23.5 26.85 24.82 25.46 23.88 23.66 22.42 16.99 19.75 12.85 18.34 14.45"
        fill="#e9c1a8"
      ></polygon>
      <path
        d="M6.69,8.39l5.64-1,5.44,1,2.63,5.17L18.22,15.1l-.82-1.92s-1.69,4.6-1.22,6.48l.47,1.88a10,10,0,0,1-4.06,1.67c-4.2.62-5.8-1.13-5.8-1.13l.81-2.5c.35-1.08-.16-7.43-.16-7.43l-.75,1.78L4.34,13Z"
        fill="#25a9e0"
      ></path>
      <polygon
        points="7.91 44.93 5.61 44.93 5.38 47.32 4.86 50.14 5.85 51.13 7.91 51.13 7.68 46.2 7.91 44.93"
        fill="#58595b"
      ></polygon>
      <path
        d="M13.64,6.56l.17.94a2.54,2.54,0,0,1-1.76.75c-.88,0-1.73-.34-1.74-.58a4.91,4.91,0,0,1,.21-1.42Z"
        fill="#f0bfa7"
      ></path>
      <path
        d="M9.27,1.61S10.94,0,12.06,0s3.23,1.61,3.23,1.61l.23,3.22s-1.27,2.54-3.47,2.42A4.84,4.84,0,0,1,8.57,4.89Z"
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

