<template>
  <span id="buttons">
    <span id="elementButtons">
      <b-button class="buttonStyle" :disabled="disabled" :variant="variant" @click="hiding" style="margin: 5px">{{name}}</b-button>
    </span>
  </span>
</template>

<script>
const regional = "regional";
import VueSlideBar from "vue-slide-bar";

export default {
  components: {
    VueSlideBar
  },
  name: "buttons",
  props: {
    name: String,
    size: Number,
    disabled: Boolean,
    variant: String,
    standard: String
  },
  data() {
    return {
      isHidden: true,
      slider: {
        value: 1
      },
      standardsArray: [
        {
          title: "Sidewalk",
          roadStandard: [1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1]
        },
        {
          title: "Bike Lane",
          roadStandard: [2, 2.1, 2.2]
        },
        {
          title: "Landscaping (Trees)",
          roadStandard: [2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3]
        },
        {
          title: "Landscaping (No trees)",
          roadStandard: [1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1]
        },
        {
          title: "Paved",
          roadStandard: [0.5, 0.6, 0.7, 0.8]
        },
        {
          title: "Painted",
          roadStandard: [1.5, 1.6, 1.7, 1.8]
        },
        {
          title: "Raised",
          roadStandard: [1.5, 1.6, 1.7, 1.8, 1.9, 2]
        },
        {
          title: "Curb Separated",
          roadStandard: [2, 2.1, 2.2]
        },
        {
          title: "Sharrow",
          roadStandard: [
            3,
            3.1,
            3.2,
            3.3,
            3.4,
            3.5,
            3.6,
            3.7,
            3.8,
            3.9,
            4,
            4.1,
            4.2,
            4.3,
            4.4,
            4.5
          ]
        },
        {
          title: "Transit Priority",
          roadStandard: [3.7, 3.8, 3.9, 4]
        },
        {
          title: "Curb Lane",
          roadStandard: [3.4, 3.5, 3.6, 3.7]
        },
        {
          title: "Passing Lane",
          roadStandard: [3.2, 3.3, 3.4]
        },
        {
          title: "Two-way left-turn Lane",
          roadStandard: [1, 2, 3]
        },
        {
          title: "Centre Line",
          roadStandard: [0.05, 0.1]
        },
        {
          title: "Boulevard (Vegetation)",
          roadStandard: [1, 2, 3]
        },
        {
          title: "Infrastructure",
          roadStandard: [1, 2, 3]
        }
      ]
    };
  },
  methods: {
    onClick() {
      this.isHidden = !this.isHidden;
      this.$emit("onClick", this.slider.value);
      // $modal.hide("standards-slider");
    },
    standards(name) {
      for (var i = 0; i < this.standardsArray.length; i++) {
        if (this.name === this.standardsArray[i].title) {
          return this.standardsArray[i].roadStandard;
        }
      }
      return this.standardsArray[5].roadStandard;
    },
    hiding() {
      this.isHidden = !this.isHidden;
      if (this.standard == regional) {
      }
    }
  }
};
</script>

<style lang="scss">
#slide {
  position: relative;
  background-color: aliceblue;
  padding: 10%;
  z-index: 10;
}
#elementButtons {
  position: relative;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>