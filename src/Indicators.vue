<template>
  <div id="indicator">
    <b>Hourly Capacity of a Multimodal Street</b>
    <br/>
      <span class="underline">
        <sidewalk :title="'Sidewalk'" :height="50"></sidewalk>
      </span>
      - {{sidewalk}}/h
    <b-progress height="20px" :max="max">
      <b-progress-bar
        variant="secondary"
        :value="calculatePeople"
        :label="calculatePeople+' people/h'"
      ></b-progress-bar>
    </b-progress>
      <bikeLane :title="'Bike Lane'" :height="50"></bikeLane>
      - {{bike}}/h
    <b-progress height="20px" :max="max">
      <b-progress-bar
        variant="primary"
        :value="calculateBikeLane"
        :label="calculateBikeLane+' people/h'"
      ></b-progress-bar>
    </b-progress>
    
    <p>
      <busLane :title="'Transit Priority'" :height="50"></busLane>
      - {{transit}}/h
    </p>
    <b-progress height="20px" :max="max">
      <b-progress-bar
        variant="warning"
        :value="calculateTransit"
        :label="calculateTransit+' people/h'"
      ></b-progress-bar>
    </b-progress>
    <br>
    <p>
      <car :title="'Curb Lane'" :height="40"></car>
      - {{car}}/h
    </p>
    <b-progress height="20px" :max="max">
      <b-progress-bar variant="dark" :value="calculateCar" :label="calculateCar+' people/h'"></b-progress-bar>
    </b-progress>
    <!-- <person :value="calculatePeople+calculateBikeLane+calculateTransit+calculateCar"></person>
    <person2 :value="calculatePeople+calculateBikeLane+calculateTransit+calculateCar"></person2>
    <person3 :value="calculatePeople+calculateBikeLane+calculateTransit+calculateCar"></person3>
    <person4 :value="calculatePeople+calculateBikeLane+calculateTransit+calculateCar"></person4> -->
    <p>Total capacity: {{calculatePeople+calculateBikeLane+calculateTransit+calculateCar}} people/h</p>
    <!-- Sidewalk: {{calculatePeople}}/h
    <br/>
        Bike Lane: {{calculateBikeLane}}/h
    <br />
        Transit Lane: {{calculateTransit}}/h
    <br />
    Vehicle Lane: {{calculateCar}}/h-->
  </div>
</template>

<script>
import person from "./svg/Person";
import person2 from "./svg/Person2";
import person3 from "./svg/Person3";
import person4 from "./svg/Person4";
import sidewalk from "./svg/Sidewalk";
import bikeLane from "./svg/BikeLane";
import busLane from "./svg/BusLane";
import car from "./svg/CarLane";
export default {
  props: { offsetArray: Array },
  components: {
    person,
    person2,
    person3,
    person4,
    sidewalk,
    bikeLane,
    busLane,
    car
  },
  name: "indicator",
  data() {
    return {
      sidewalk: 4500,
      bike: 7000,
      transit: 6000,
      car: 1100,
      max: 30000
    };
  },
  methods: {
    test() {
      console.log(this.sidewalk);
      return this.sidewalk;
    }
  },
  computed: {
    calculatePeople: function() {
      // var counter = 0;
      // if (this.offsetArray.length == 0) {
      //   return 0;
      // } else {
      //   for (var i = 0; i < this.offsetArray.length; i++) {
      //     if (this.offsetArray[i].fill == "grey") {
      //       counter++;
      //     }
      //   }
      //   var total = this.sidewalk * counter * 2;
      //   //total = (total / this.max) * 100;
      //   return total;
      // }
    },
    calculateBikeLane: function() {
      var counter = 0;
      // if (this.offsetArray.length == 0) {
      //   return 0;
      // } else {
      //   this.counter = 0;
      //   for (var i = 0; i < this.offsetArray.length; i++) {
      //     if (this.offsetArray[i].fill == "blue") {
      //       counter++;
      //     }
      //   }
      //   var total = this.bike * counter * 2;
      //   return total;
      // }
    },
    calculateTransit: function() {
      var counter = 0;
      if (this.offsetArray.length == 0) {
        return 0;
      } else {
        this.counter = 0;
        for (var i = 0; i < this.offsetArray.length; i++) {
          if (this.offsetArray[i].fill == "orange") {
            counter++;
          }
        }
        var total = this.transit * counter * 2;
        return total;
      }
    },
    calculateCar: function() {
      var counter = 0;
      if (this.offsetArray.length == 0) {
        return 0;
      } else {
        this.counter = 0;
        for (var i = 0; i < this.offsetArray.length; i++) {
          if (this.offsetArray[i].fill == "black") {
            counter++;
          }
        }
        var total = this.car * counter * 2;
        return total;
      }
    }
  }
};
</script>
<style>
.underline {
  border-bottom: 1px solid black;
}
p {
  margin: 0;
}
</style>
