<template>
    <svg v-if="title === 'Transit'||title==='Shared Transit Lane'||title==='Transit Stop'||title==='Side Running Dedicated Transit Lane'" :x="x" :y="y" :width="width" :height="100" data-name="bus-img-b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.13 85.73" preserveAspectRatio="none">
      <title>BusLane_Back</title>
      <g>
        <rect x="8.58" y="73.8" width="8.85" height="11.93" rx="2.68" ry="2.68" fill="#141414" />
        <rect x="62.77" y="73.8" width="8.85" height="11.93" rx="2.68" ry="2.68" fill="#141414" />
        <g>
          <polyline points="2.92 19.99 2.92 17.8 7.85 17.8" fill="none" stroke="#111718" stroke-linejoin="round" stroke-width="2.19"
          />
          <rect y="19.44" width="5.57" height="13.42" rx="1.83" ry="1.83" fill="#111718" />
        </g>
        <g>
          <polyline points="77.21 19.99 77.21 17.8 72.28 17.8" fill="none" stroke="#111718" stroke-linejoin="round" stroke-width="2.19"
          />
          <rect x="74.57" y="19.44" width="5.57" height="13.42" rx="1.83" ry="1.83" transform="translate(154.7 52.3) rotate(-180)"
            fill="#111718" />
        </g>
        <path d="M16.61.73H63.16a9.49,9.49,0,0,1,9.49,9.49V77a0,0,0,0,1,0,0H7.12a0,0,0,0,1,0,0V10.22A9.49,9.49,0,0,1,16.61.73Z" fill="#dadbd9"
          stroke="#dadbd9" stroke-miterlimit="10" stroke-width="1.46" />
        <rect x="11.96" y="23.55" width="56.46" height="18.89" fill="#232d30" />
        <line x1="7.12" y1="77.03" x2="72.65" y2="77.03" fill="none" stroke="#a6a8ab" stroke-miterlimit="10" stroke-width="0.73"
        />
        <path d="M18.06,12H62.32a6.1,6.1,0,0,1,6.1,6.1v5.4a0,0,0,0,1,0,0H12a0,0,0,0,1,0,0v-5.4A6.1,6.1,0,0,1,18.06,12Z" fill="#232d30"
        />
        <line x1="11.32" y1="58.32" x2="68.42" y2="58.32" fill="none" stroke="#b0b0ae" stroke-miterlimit="10" stroke-width="0.73"
        />
        <polyline points="11.32 63.16 19.35 66.44 60.97 66.44 68.42 63.16" fill="none" stroke="#b0b0ae" stroke-miterlimit="10" stroke-width="0.73"
        />
        <g>
          <path d="M11.59,63.86H6.48a.38.38,0,0,1-.37-.37V48.77a.38.38,0,0,1,.37-.37H8.17c1.09,0,3.79,1.71,3.79,5.08v10A.38.38,0,0,1,11.59,63.86Z"
            fill="#951b1e" />
          <rect x="6.11" y="53.57" width="3.88" height="2.1" fill="#ae5558" />
          <rect x="6.11" y="57.36" width="3.88" height="1.92" fill="#a93d24" />
          <rect x="6.11" y="60.24" width="3.88" height="2.1" fill="#dadbd9" />
          <path d="M68.18,63.86h5.11a.37.37,0,0,0,.36-.37V48.77a.37.37,0,0,0-.36-.37H71.6c-1.1,0-3.79,1.71-3.79,5.08v10A.37.37,0,0,0,68.18,63.86Z"
            fill="#951b1e" />
          <rect x="69.77" y="53.57" width="3.88" height="2.1" transform="translate(143.43 109.25) rotate(-180)" fill="#ae5558" />
          <rect x="69.77" y="57.36" width="3.88" height="1.92" transform="translate(143.43 116.64) rotate(-180)" fill="#a93d24" />
          <rect x="69.77" y="60.24" width="3.88" height="2.1" transform="translate(143.43 122.57) rotate(-180)" fill="#dadbd9" />
        </g>
        <rect x="30.94" y="67.81" width="17.89" height="1.73" fill="#b0b0ae" />
        <path d="M34.59,4.29H16.15a3.37,3.37,0,0,0-3.37,3.38h19.8Z" fill="#111718" />
        <path d="M63.25,4.29H45l1.92,3.38H66.62A3.37,3.37,0,0,0,63.25,4.29Z" fill="#111718" />
        <path d="M22.27,1.73H57.5a2.56,2.56,0,0,1,2.56,2.56V6a0,0,0,0,1,0,0H19.71a0,0,0,0,1,0,0V4.29A2.56,2.56,0,0,1,22.27,1.73Z"
          fill="#111718" />
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
