<template>
    <div id="slide">
        <p>How big do you want the {{name}} in meters?</p>
        <vue-slide-bar  id="slider" v-model="slider.value"
        :data="standards(name)"
        :range="standards(name)">
        <!-- <template slot="tooltip" slot-scope="tooltip">
        <img src="static/vue-slide-bar/rectangle-slider.svg">
        </template> -->
        </vue-slide-bar>
        <div class="errorMessage" v-if="this.slider.value > this.totalWidth">
          The element is too big!!!
        </div>
        <b-button @click="onClick">Add {{name}}</b-button>
        <b-button @click="backbtn">Back</b-button>
    </div>
</template>
<script>
import VueSlideBar from "vue-slide-bar";
export default {
  components: {
    VueSlideBar
  },
  props: {
    name: String,
    totalWidth: Number
  },
  data() {
    return {
      back: false,
      slider: {
        value: 1
      },
      standardsArray: [
        {
          title: "Commercial Use Extension",
          roadStandard: [1,2,3,4]
        },
        {
          title: "Residential",
          roadStandard: [1.8,1.9,2,2.1,2.2,2.3,2.4]
        },
        {
          title: "Commercial",
          roadStandard: [2.4,2.5,2.6,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4,4.1,4.2,4.3,4.4,4.5]
        },
        {
          title: "Street Furniture Zone",
          roadStandard: [0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5]
        },
        {
          title: "Utilities",
          roadStandard: [0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5]
        },
        {
          title: "No Vegetation",
          roadStandard: [1.5, 1.6, 1.7, 1.8, 1.9, 2]
        },
        {
          title: "Vegetation",
          roadStandard: [1.5, 1.6, 1.7, 1.8, 1.9, 2]
        },
        {
          title: "Pedestrian Refuge Island",
          roadStandard: [1.8,1.9,2,2.1,2.2,2.3,2.4]
        },
        {
          title: "Cycle Lane",
          roadStandard: [1.8,1.9,2]
        },
        {
          title: "Cycle Track",
          roadStandard: [1.8,1.9,2]
        },
        {
          title: "Cycle Street",
          roadStandard: [2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3]
        },
        {
          title: "Protected Cycle Track",
          roadStandard: [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2]
        },
        {
          title: "Bidirectional Cycle Track",
          roadStandard: [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2]
        },
        {
          title: "Raised Cycle Track",
          roadStandard: [1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2]
        },
        {
          title: "Curbside Buffered Cycle Lane",
          roadStandard: [1,1.2,1.2]
        },
        {
          title: "Contraflow Cycle Street",
          roadStandard: [3.5,4,4.5,5,5.5,6]
        },
        {
          title: "Transit Stop",
          roadStandard: [2,2.1,2.2,2.3,2.4,2.5]
        },
        {
          title: "Side Running Dedicated Transit Lane",
          roadStandard: [3,3.1,3.2,3.3]
        },
        {
          title: "Centre Running Transit Lane - Centre Boarding",
          roadStandard: [3.3,3.4,3.5]
        },
        {
          title: "Centre Running Transit Lane – Side Boarding",
          roadStandard: [10,10.5,11,11.5,12,12.5]
        },
        {
          title: "Shared Transit Lane",
          roadStandard: [5.5,5.6,5.7,5.8,5.9,6]
        },
        {
          title: "Curb Lane",
          roadStandard: [3.4,3.5,3.6,3.7]
        },
        {
          title: "Passing Lane",
          roadStandard: [3,3.1,3.2,3.3,3.4]
        },
        {
          title: "Large Vehicle Lane",
          roadStandard: [3,3.1,3.2,3.3,3.4,3.5]
        },
        {
          title: "Bidirectional Travel Lane",
          roadStandard: [4.8,4.9,5,5.1,5.2,5.3,5.4,5.5]
        },
        {
          title: "Turning Lane",
          roadStandard: [3,3.1,3.2,3.3,3.4,3.5]
        },
        {
          title: "Freight Travel Lane",
          roadStandard: [3.3]
        },
        {
          title: "Parking Lane",
          roadStandard: [1.8,1.9,2,2.1,2.2,2.3,2.4,2.5]
        },
        {
          title: "Two-way left-turn Lane",
          roadStandard: [1.8,1.9,2,2.1,2.2,2.3,2.4,2.5]
        },
        {
          title: "Refuge",
          roadStandard: [1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3]
        },
        {
          title: "Boulevard (Vegetation)",
          roadStandard: [3,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4]
        },
        {
          title: "Centre Line",
          roadStandard: [0.05,0.1]
        },
        {
          title: "Infrastructure",
          roadStandard: [1,1.1,1.2,1.3,1.4,1.5,1.6]
        },
        {
          title: "Swale",
          roadStandard: [0.5,1,1.5]
        },
        {
          title: "Rain Garden",
          roadStandard: [1,1.1,1.2,1.3,1.4,1.5]
        },
        {
          title: "Permeable Paving",
          roadStandard: [0.6,0.7,0.8,0.9,1]
        }
      ]
    };
  },
  methods: {
    backbtn(){
      this.$emit("backbtn", this.back);
    },
    onClick() {
      console.log("this is from the slider vue " + this.name);
      this.$emit("onClick", this.slider.value);
    },
    standards(name) {
      for (var i = 0; i < this.standardsArray.length; i++) {
        if (this.name === this.standardsArray[i].title) {
          return this.standardsArray[i].roadStandard;
        }
      }
      return this.standardsArray[5].roadStandard;
    }
  }
};
</script>
<style>
.errorMessage {
  margin-bottom: 10px;
  color: red;
}
</style>
