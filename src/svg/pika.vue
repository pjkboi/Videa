<template>

 <svg v-if="title === 'Bike Lane'"  :width="100" :height="100" class="landscape-tree-img" data-name="landscape-tree-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.35 120.04"
      preserveAspectRatio="none">
      <title>LandscapeWtrees</title>
      <g>
        <path d="M42.48,54.56A15.16,15.16,0,0,0,52.94,59c10,0,18-10.73,18-24s-8.06-24-18-24a15.12,15.12,0,0,0-10.45,4.45" fill="#0b8040"
        />
        <path d="M42.49,15.54C37.91,19.88,34.93,27,34.93,35.05s3,15.16,7.55,19.51" fill="#0d9548" />
        <polyline points="37.95 0.26 33.85 120.04 37.95 120.04" fill="#754c28" />
        <polyline points="37.95 120.04 42.25 120.04 37.95 0.26" fill="#603813" />
        <path d="M17.21,57.49c3.37,5.95,10.3,15.11,19.14,14.31" fill="none" stroke="#754c28" stroke-miterlimit="10" stroke-width="2.57"
        />
        <path d="M51.78,61.35c.8,4,2.57,17-11.1,20.9" fill="none" stroke="#603813" stroke-miterlimit="10" stroke-width="2.57" />
        <path d="M62.71,67.3c-.64,3.53-4.75,9.21-11.78,6.62" fill="none" stroke="#603813" stroke-miterlimit="10" stroke-width="1.29"
        />
        <ellipse cx="55.65" cy="38.92" rx="9.15" ry="6.67" fill="#7da53f" />
        <ellipse cx="52.26" cy="50.41" rx="11.26" ry="15.76" fill="#5d9a42" />
        <ellipse cx="65.45" cy="59.1" rx="11.9" ry="12.7" fill="#0f5a33" />
        <ellipse cx="20.02" cy="23.88" rx="10.37" ry="19.94" fill="#6cae44" />
        <ellipse cx="14.07" cy="41.89" rx="14.07" ry="21.71" fill="#0b9348" />
        <path d="M38,64.25c11.79-2,20.9-15.58,20.9-32S49.74,2.28,38,.26" fill="#0e5934" />
        <path d="M38,.26A18.44,18.44,0,0,0,34.89,0c-13.23,0-24,14.44-24,32.25s10.73,32.26,24,32.26A18.23,18.23,0,0,0,38,64.25" fill="#0f693a"
        />
      </g>
    </svg>
</template>
<script>
export default {
  props: { title: String }
};
</script>
<style>
</style>
