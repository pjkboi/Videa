<template>
    <div id="navbar">
        <b-navbar toggleable="md" type="dark" id="navbar">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#"> VIDEA</b-navbar-brand>   
            <!-- <img src="./icons/menu.png"> -->
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <router-link :to="{name: 'ProjectPicker'}" class="nav-link"> <img src="./icons/map.png"> Map</router-link>
                    <router-link :to="{name: 'RoadwayDesigner'}" class="nav-link"> <img src="./icons/roadway.png"> Roadway Designer </router-link>
                    <router-link :to="{name: 'Dashboard'}" class="nav-link"> <img src="./icons/dashboard.png"> Dashboard</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.nav-link:link
{
   color: white;
   text-decoration: none;
}
.nav-link:visited
{
   color: #fb3f00;
   text-decoration: none;
}
.nav-link:hover
{
   color: #fb3f00;
   text-decoration: none;
}
.nav-link:active
{
   color: #fb3f00;
   text-decoration: none;
}
</style>

