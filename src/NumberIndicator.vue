<template>
    <div id="numberIndicator">
        <h2>{{title}}</h2>
        <h3>{{number}}</h3>
        <h2>{{unit}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        title: String, 
        number: Number,
        unit: String
    },
    methods:{
        
    }
}
</script>
<style>

</style>
