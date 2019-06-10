<template>
     <div id="app">
    <h1>vue-xlsx-table</h1>
    <vue-xlsx-table @on-select-file="handleSelectedFile"></vue-xlsx-table>
  </div> 
</template>
<script>
export default {
      name: 'app',
  methods: {
    handleSelectedFile (convertedData) {
            console.log(convertedData);
      console.log(convertedData.body[0].BikeLane_area);
    }
  }
}
</script>
<style>

</style>
