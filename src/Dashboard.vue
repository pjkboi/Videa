<template>
  <div id="dashboard">
    <div id="dashboardRainbow">
      <div class="rainbow" style="background-color: #EFBBFF;">
          <img src="./icons/human_capacity.svg" height="70%" >
      </div>
      <div class="rainbow" style="background-color: #D896FF;">
        <img src="./icons/bicycle.svg" height="70%">
        </div>
      <div class="rainbow" style="background-color: #BE29EC;">
        <img src="./icons/car.svg" height="70%">
      </div>
      <div class="rainbow" style="background-color: #800080;">
        <img src="./icons/bus.svg" height="70%">
      </div>
      <div class="rainbow" style="background-color: #660066;">
        <img src="./icons/accesebility.svg" height="70%">
      </div>
    </div>
    <div id="dashboardMain" class="dash">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="graph" viewBox="0 0 550 550" preserveAspectRatio="xMinYMid meet" >
      <g class="grid x-grid" id="xGrid">
        <line x1="90" x2="90" y1="0" y2="371"></line>
      </g>
      <g class="grid y-grid" id="yGrid">
        <line x1="90" x2="1000" y1="370" y2="370"></line>
      </g>
      <g class="labels x-labels">
        <!-- <text x="100" y="400">Sidewalk</text>
        <text x="445" y="400">BikeLane</text>
        <text x="680" y="400">BusLane</text>
        <text x="915" y="400">TrafficLane</text> -->
        <!-- <text x="400" y="440" class="label-title">Year</text> -->
      </g>
      <g class="labels y-labels">
        <text x="80" y="15">50000</text>
        <text x="80" y="85">40000</text>
        <text x="80" y="158">30000</text>
        <text x="80" y="229">20000</text>
        <text x="80" y="301">10000</text>
        <text x="80" y="373">0</text> 
        <!-- <text x="50" y="200" class="label-title">Price</text> -->
      </g>
      <!-- <g class="data" data-setname="Our first data set">
        <circle cx="90" cy="192" data-value="7.2" r="4"></circle>
        <circle cx="240" cy="141" data-value="8.1" r="4"></circle>
        <circle cx="388" cy="179" data-value="7.7" r="4"></circle>
        <circle cx="531" cy="200" data-value="6.8" r="4"></circle>
        <circle cx="677" cy="104" data-value="6.7" r="4"></circle>
      </g> -->
      </svg>

        <div id="sidewalkCapacity">
          
          <person id="qwerty" :value="this.sidewalkCapacityValue" :maxCapacity="10000"></person>
          <person v-if="this.sidewalkCapacityValue>10000" :value="this.sidewalkCapacityValue-10000" :maxCapacity="10000"></person>
          <person v-if="this.sidewalkCapacityValue>20000" :value="this.sidewalkCapacityValue-20000" :maxCapacity="10000"></person>
          <person v-if="this.sidewalkCapacityValue>30000" :value="this.sidewalkCapacityValue-30000" :maxCapacity="10000"></person>
          
        </div>
        
        <div id="bikeCapacity">
          <bike :value="this.bikeCapacityValue" :maxCapacity="10000"></bike>
          <bike v-if="this.bikeCapacityValue>10000" :value="this.bikeCapacityValue-10000" :maxCapacity="10000"></bike>
          <bike v-if="this.bikeCapacityValue>20000" :value="this.bikeCapacityValue-20000" :maxCapacity="10000"></bike>
          <bike v-if="this.bikeCapacityValue>30000" :value="this.bikeCapacityValue-30000" :maxCapacity="10000"></bike>

        </div>

        <div id="busCapacity">
          <bus :value="this.busCapacityValue" :maxCapacity="10000"></bus>
          <bus v-if="this.busCapacityValue>10000" :value="this.busCapacityValue-10000" :maxCapacity="10000"></bus>
          <bus v-if="this.busCapacityValue>20000"  :value="this.busCapacityValue-20000" :maxCapacity="10000"></bus>
          <bus v-if="this.busCapacityValue>30000"  :value="this.busCapacityValue-30000" :maxCapacity="10000"></bus>
          
        </div>

        <div id="carCapacity">
          <car :value="this.carCapacityValue" :maxCapacity="10000"></car>
          <car v-if="this.carCapacityValue>10000" :value="this.carCapacityValue-10000" :maxCapacity="10000"></car>
          <car v-if="this.carCapacityValue>20000" :value="this.carCapacityValue-20000" :maxCapacity="10000"></car>
          <car v-if="this.carCapacityValue>30000" :value="this.carCapacityValue-30000" :maxCapacity="10000"></car>
          
        </div>
    </div>


  <div id="dashboardSide" class="dash">
    <div id="dashTotal">
     <div id="dashTotalInsides">
        <h3>Total Capacity</h3>
      <div class="progressBar">
        <h5>Current</h5>
        <v-progress-linear
          slot="progress"
          value="50"
          color="red"
          height="20"
        ></v-progress-linear>
      </div> 
      <div class="progressBar">
        <h5>Proposed</h5>
        <v-progress-linear
          slot="progress"
          value="75"
          color="orange"
          height="20"
        ></v-progress-linear>
      </div>
      </div>
    </div>
    <!-- <div id="dashMap">
      <streetViewer></streetViewer>
    </div> -->
  </div>
      <!-- <Indicators></Indicators> -->
      <!-- <button @click="getNewPosition">s</button>
      <button onclick="">Click me</button> -->
  </div>
</template> 

<script>
import streetViewer from "./streetViewer.vue";
// import Indicators from "./Indicators.vue";
import person from "./svg/Person";
import bike from "./svg/BikeIcon";
import bus from "./svg/BusIcon";
import car from "./svg/CarIcon";
import dashboardBack from "./svg/DashboardBackground";

export default {
  components: {
    streetViewer,
    // Indicators,
    person,
    bike,
    bus,
    car,
    dashboardBack
  },
  name: "buttons",
  props: {
    name: String
  },
  data() {
    return {
      sidewalkCapacityValue: 25000,
      bikeCapacityValue: 12345,
      busCapacityValue: 5000,
      carCapacityValue: 0,
      offset: null,
      offsetx:0,
      offsety:0
    };
  },
  methods: {
    getNewPosition(){
      this.offset = document.getElementById('sidewalkCapacity').getBoundingClientRect();
      this.offsetx = this.offset.left;
      alert(this.offsetx)
    }
  },
  watch:{
        time: function() 
    {
      //console.log(this.time)
      //console.log(this.move)
      this.move == 580 ? this.move = -100 : this.move += 1;   
    }
  },
  mounted() {
    
  }
};
</script>

<style>

#dashboard {
    background-color: white;
    width: 100%;
    padding: 10px;
    height: 50%;
    position: absolute;
    text-align: center;
    z-index: 0;
}

#dashboardRainbow {
    width: 20%;
    float: left;
    height: 100%;
    
}

#dashboardMain {
  width: 57%;
  float: left;
  margin-bottom: 20px;
  margin-left: 10px;
  opacity: 0.5; 
  box-shadow: 7px 7px 7px #888888;
  height: 100%;
  
}
#svg {
 width: 92%;
 left: 80px;
 height: 70%;
 top: 20px;
 position: absolute;
 background-color: rgb(199, 223, 232);
 text-align: center;
 z-index: 0;
}
#botPanel {
 position: absolute;
 top: 0%;
 width: 100%;
 height: 50%;
 padding: 30px;
 padding-bottom: 0px;
}
#dashboardSide {
    width: 20%;
    /* background-color: brown; */
    float: left;
    padding: 0;
    
}

#dashTotal {
    background-color: rgba(230, 218, 235, 0.5);
    height: 48%;
    width: 100%;
    opacity: 0.5;
    padding: 5%;   
    box-shadow: 7px 7px 7px #888888;
}


#dashMap {
    background-color: grey;
    height: 48%;
    width: 100%;
    margin-top: 5%;
    box-shadow: 7px 7px 7px #888888;
}

#sidewalkCapacity {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 15%;
  height: 100%;
  zoom: 2;
  margin-left: 6%;
}

#bikeCapacity {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 14%;
  height: 160%;
  zoom: 3;
  margin-left: 13%;
}

#busCapacity {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 13%;
  height: 165%;
  zoom: 2.5;
  margin-left: 21.5%;
}

#carCapacity {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 13%;
  height: 155%;
  zoom: 2.5;
  margin-left: 30%;
}



.rainbow {
  display: flex;
  align-items: center;
  height: 20%;
  text-align: left;
  padding-left: 3%;
  box-shadow: 7px 7px 7px #888888;

}
h5 {
  text-align: left;
  
}

person{
  margin: 10%;
}
body {
  font-family: 'Open Sans', sans-serif;
}

.graph .labels.x-labels {
  text-anchor: middle;
  float: right;
  background-color: red;
}

.graph .labels.y-labels {
  text-anchor: end;
}


.graph {
  height: 100%;
  width: 40%;
  position: absolute;
  bottom: -17%;
  left: 21%;
  margin: auto;
  
}

.graph .grid {
  stroke: #ccc;
  stroke-dasharray: 0;
  stroke-width: 2;

}

.labels {
  font-size: 13px;
}

.label-title {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  fill: black;
}

.data {
  fill: red;
  stroke-width: 1; 
}

</style>