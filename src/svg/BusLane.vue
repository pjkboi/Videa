<template>
    <svg v-if="title === 'Transit'||title==='Shared Transit Lane'||title==='Transit Stop'||title==='Side Running Dedicated Transit Lane'" :x="x" :y="y" :width="width" :height="100" class="bus-img" data-name="bus-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.85 90.77" preserveAspectRatio="none">
      <title>BusLane</title>
      <g>
        <rect x="9.08" y="78.15" width="9.37" height="12.63" rx="2.84" ry="2.84" fill="#141414" />
        <rect x="66.46" y="78.15" width="9.37" height="12.63" rx="2.84" ry="2.84" fill="#141414" />
        <g>
          <polyline points="3.09 21.16 3.09 18.84 8.31 18.84" fill="none" stroke="#111718" stroke-linejoin="round" stroke-width="2.32"
          />
          <rect y="20.58" width="5.89" height="14.21" rx="1.94" ry="1.94" fill="#111718" />
        </g>
        <g>
          <polyline points="81.75 21.16 81.75 18.84 76.53 18.84" fill="none" stroke="#111718" stroke-linejoin="round" stroke-width="2.32"
          />
          <rect x="78.95" y="20.58" width="5.89" height="14.21" rx="1.94" ry="1.94" transform="translate(163.8 55.37) rotate(-180)"
            fill="#111718" />
        </g>
        <path d="M17.59.77H66.87A10.05,10.05,0,0,1,76.92,10.82V81.56a0,0,0,0,1,0,0H7.54a0,0,0,0,1,0,0V10.82A10.05,10.05,0,0,1,17.59.77Z"
          fill="#dadbd9" stroke="#dadbd9" stroke-miterlimit="10" stroke-width="1.55" />
        <rect x="7.54" y="24.93" width="69.38" height="33.89" fill="#232d30" />
        <path d="M66.87,67.26h9.47a0,0,0,0,1,0,0v0A6.76,6.76,0,0,1,69.58,74H60.11a0,0,0,0,1,0,0v0A6.76,6.76,0,0,1,66.87,67.26Z" fill="#b9b8b9"
        />
        <path d="M8.31,67.26h9.47A6.76,6.76,0,0,1,24.55,74v0a0,0,0,0,1,0,0H15.08a6.76,6.76,0,0,1-6.76-6.76v0A0,0,0,0,1,8.31,67.26Z"
          transform="translate(32.86 141.28) rotate(180)" fill="#b9b8b9" />
        <circle cx="17.14" cy="71.25" r="2.77" fill="#d0d2d3" />
        <circle cx="12.68" cy="71.7" r="1.69" fill="#d8b03f" />
        <circle cx="20.73" cy="72.86" r="1.16" fill="#e6e7e8" />
        <path d="M66.87,67.1h9.47a0,0,0,0,1,0,0v0a6.76,6.76,0,0,1-6.76,6.76H60.11a0,0,0,0,1,0,0v0A6.76,6.76,0,0,1,66.87,67.1Z" fill="#b9b8b9"
        />
        <circle cx="67.52" cy="71.09" r="2.77" fill="#d0d2d3" />
        <circle cx="71.98" cy="71.54" r="1.69" fill="#d8b03f" />
        <circle cx="63.92" cy="72.7" r="1.16" fill="#e6e7e8" />
        <rect x="26.19" y="68.9" width="32.08" height="5.8" fill="#161616" />
        <line x1="30.92" y1="76.73" x2="53.44" y2="76.83" fill="none" stroke="#929497" stroke-miterlimit="10" stroke-width="0.77"
        />
        <circle cx="20.17" cy="77.48" r="1.72" fill="#929497" />
        <circle cx="64.75" cy="77.48" r="1.72" fill="#929497" />
        <line x1="7.54" y1="81.56" x2="76.92" y2="81.56" fill="none" stroke="#a6a8ab" stroke-miterlimit="10" stroke-width="0.77"
        />
        <rect x="7.54" y="58.82" width="69.38" height="3.61" fill="#0a0b0b" />
        <line x1="34.34" y1="55.34" x2="59.59" y2="55.21" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="1.55"
        />
        <line x1="66.46" y1="59.82" x2="47.25" y2="55.27" fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.77"
        />
        <path d="M14.5,12.76H70a7,7,0,0,1,7,7v5.22a0,0,0,0,1,0,0H7.54a0,0,0,0,1,0,0V19.71A7,7,0,0,1,14.5,12.76Z" fill="#111718" />
        <path d="M19.62,3.19h7.63a0,0,0,0,1,0,0V9.37a0,0,0,0,1,0,0H13.43a0,0,0,0,1,0,0v0A6.18,6.18,0,0,1,19.62,3.19Z" fill="#111718"
        />
        <rect x="27.25" y="3.19" width="23.39" height="3.87" fill="#111718" />
        <rect x="56.24" y="3.19" width="10.24" height="3.87" fill="#111718" />
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

