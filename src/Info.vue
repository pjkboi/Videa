<template>
    <div id="info" >
        <div id="sidewalkInfo" v-if="infoType == 'sidewalkInfo'">
            <img src="src\icons\sidewalk.PNG">
        </div>
        <div id="bufferInfo" v-if="infoType == 'bufferInfo'">
            <img src="src\icons\bufferInfo.PNG">
        </div>
        <div id="cycleInfo" v-if="infoType == 'cycleInfo'">
          <img src="src\icons\cycleInfo.PNG">
        </div>
        <div id="roadInfo" v-if="infoType == 'roadInfo'">
           <img src="src\icons\roadInfo.PNG">
        </div>
        <div id="transitInfo" v-if="infoType == 'transitInfo'">
            <img src="src\icons\transitInfo.PNG">
        </div>
        <div id="medianInfo" v-if="infoType == 'medianInfo'">
            transitInfo
        </div>
        <div id="greenInfo" v-if="infoType == 'greenInfo'">
            <img src="src\icons\greenInfo.PNG">
        </div>
    </div>
</template>
<script>

export default {
  props: {
    infoType: String,
  },
  data() {
    return {

    };
  },
  methods: {
      

  }
};
</script>
<style>
#info{
  width: 100%;
  height: 50%;
}

</style>

