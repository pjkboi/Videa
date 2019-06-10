<template>
  <div id="gio">
    <!-- spans that transef data to RoadwayDesigner  -->
    <span id="Result"></span>
    <span id="SResult"></span>
    <!-- arc map  -->
    <div ref="map" class="map">
    </div>
  </div>
</template>
<script>
import { loadModules } from "esri-loader";
var editToolbar;
export default {
  name: "gio",
  props: {
    selected: Object,
  },
  data() {
    return {
    };
  },
  mounted: function() {
    loadModules([
      //loading easri modules
      "esri/urlUtils",
      "esri/map",
      "esri/graphic",
      "esri/layers/GraphicsLayer",
      "esri/tasks/RouteParameters",
      "esri/tasks/query",
      "esri/tasks/QueryTask",
      "esri/geometry/Point",
      "esri/layers/FeatureLayer",
      "esri/tasks/FeatureSet",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/PictureMarkerSymbol",

      "dojo/on",
      "dojo/dom",
      "dojo/dom-style",
      "esri/Color",
      "dojo/_base/array",
      "dojo/domReady!"
    ])
      .then(
        ([
          //declaring easri modules
          urlUtils,
          Map,
          Graphic,
          GraphicsLayer,
          RouteParameters,
          Query,
          QueryTask,
          Point,
          FeatureLayer,
          FeatureSet,
          SimpleMarkerSymbol,
          SimpleLineSymbol,
          PictureMarkerSymbol,
          on,
          dom,
          domStyle,
          Color,
          array
        ]) => {
          var map;
          var homeCoordinates = this.selected.location; //[-80.543497,43.468278];
          var objectID = this.selected.num;
          var geoID = this.selected.geoID;
          var marker = new PictureMarkerSymbol();
          const ROAD_WIDTH = 20;
          const SIDEWALK_WIDTH = 10;
          urlUtils.addProxyRule({
            urlPrefix: "route.arcgis.com",
            proxyUrl: "/sproxy/"
          });
          //zoom levels
          var extent_zooms = [
            {
              level: 18,
              resolution: 0.5971642835598172,
              scale: 2256.994353
            }
          ];
          // create map with the given options
          var map = new Map(this.$refs.map, {
            center: homeCoordinates,
            lods: extent_zooms,
            basemap: "satellite",
            slider: false
          });

          map.on("load", createToolbar);

          var fields = [ "OBJECTID","NumberofLanes", "FullStreetName"];
          var pointSymbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0,255,0, 0.3]), 10), new Color([0,255,0,1]));
          var queryTask = new QueryTask("https://services9.arcgis.com/d5KFSuNvN5O2fJpC/arcgis/rest/services/roads/FeatureServer/0?token=WpHTKjdjB6a1BWYL6bIPk2pBD8w6St3DCLdM2R3GPE9p5Aa1Z_XWbiUzDdvDa-2PnnGLrvmSujV2VS9-aUfeOP_hmu8ezuo503ZPLEl8TecBlnjEw-NU_gr3Tc0NHadqcOlqRjNoMQjuLKDWH-eOkIoENZI0UH961xfAV9VjhVCquYb9ALY4HXYxLZY4VtGmLhN5LqFCaiuVaBZkSPhbZpdjiD0PobV5eiOjSwiq-hRbaIsbId9wAGMNoSbscloj");
          var query = new Query();
          var centerLine = new FeatureLayer("https://services9.arcgis.com/d5KFSuNvN5O2fJpC/arcgis/rest/services/roads/FeatureServer/0?token=WpHTKjdjB6a1BWYL6bIPk2pBD8w6St3DCLdM2R3GPE9p5Aa1Z_XWbiUzDdvDa-2PnnGLrvmSujV2VS9-aUfeOP_hmu8ezuo503ZPLEl8TecBlnjEw-NU_gr3Tc0NHadqcOlqRjNoMQjuLKDWH-eOkIoENZI0UH961xfAV9VjhVCquYb9ALY4HXYxLZY4VtGmLhN5LqFCaiuVaBZkSPhbZpdjiD0PobV5eiOjSwiq-hRbaIsbId9wAGMNoSbscloj");
          var sidewalkLayer = new FeatureLayer("https://services9.arcgis.com/d5KFSuNvN5O2fJpC/arcgis/rest/services/Sidewalks/FeatureServer/0?token=uIgpFqrAjmCa_vpr9NS7PHQie0tJw5nOmrK5uvYJhlGEth5aY_Iuk3Om9ovdu2pUVJMsxqLdR1MdyvnWVK52vbMWB2YSMOdarTObUe10I9qPId3f2Qp3R_akKekzwUPM99muzSSX-T96RiQ61e5NByQFXcnVGHmsjSTlA8-Q2AZAikKQE3aRTy7Auc4lRA48a-u4HaeMS2mnkSlFKkw-vRM5nBnrZWOfoC66nNTJgEic54cyiJShWJKY-gAyCL-Y");
          var sidewalkQueryTask = new QueryTask("https://services9.arcgis.com/d5KFSuNvN5O2fJpC/arcgis/rest/services/Sidewalks/FeatureServer/0?token=uIgpFqrAjmCa_vpr9NS7PHQie0tJw5nOmrK5uvYJhlGEth5aY_Iuk3Om9ovdu2pUVJMsxqLdR1MdyvnWVK52vbMWB2YSMOdarTObUe10I9qPId3f2Qp3R_akKekzwUPM99muzSSX-T96RiQ61e5NByQFXcnVGHmsjSTlA8-Q2AZAikKQE3aRTy7Auc4lRA48a-u4HaeMS2mnkSlFKkw-vRM5nBnrZWOfoC66nNTJgEic54cyiJShWJKY-gAyCL-Y");
          var sidewalkQuery = new Query();
          var resultItems = [];
          var attributeName = [];
          var attributeValue = [];
          var objectOfObjects = {};

          // getting roads
          function addRoad(){
            map.addLayer(centerLine);
            query.returnGeometry = false;
            query.outFields = [ "GeoID","NumberofLa", "RoadWidth"];
            query.where = "GeoID = '" + geoID + "'";
            queryTask.execute(query, showResults);
          }
          // getting sidewalks
          function addSidewalk(){ // nani
            map.addLayer(sidewalkLayer);
            sidewalkQuery.returnGeometry = false;
            sidewalkQuery.outFields = ["ROADSEGMEN", "ROADSEGM_1", "Shape__Area","Shape__Length"];
            sidewalkQuery.where = "ROADSEGMEN = '" + geoID + "'";
            sidewalkQueryTask.execute(sidewalkQuery, showResults);
            
          }
          //passing retrived values 
          function showResults (results) {
            var resultCount = results.features.length;
            for (var i = 0; i < resultCount; i++) {
              var featureAttributes = results.features[i].attributes;
              for (var attr in featureAttributes) {
                resultItems.push(" "+attr + " " + featureAttributes[attr]+" "); 
                objectOfObjects[attr] = featureAttributes[attr];
                attributeName.push(attr);
                attributeValue.push(featureAttributes[attr]);
              }
            }
            dom.byId("Result").innerHTML = attributeName;
            dom.byId("SResult").innerHTML = attributeValue;
            return(resultItems)
          }

          //default map - will be deleted
          function createToolbar() {
            addRoad();
            addSidewalk();
            var iconPath =
              "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z ";
            var initColor = "#ce641d";
            var pictureMarkerSymbol = new PictureMarkerSymbol(
              "https://cdn3.iconfinder.com/data/icons/bunch-of-stuff/126/slice87-512.png",
              60,
              70
            );
            var graphic = new Graphic(
              new Point(homeCoordinates),
              pictureMarkerSymbol
            );
            map.graphics.add(graphic);
          }
         
          // initialize the locate button
        }
      )
      .catch(err => {
        // handle any script or module loading errors
        console.error(err);
      });
  }
};
</script>

<style>
@import url("https://js.arcgis.com/3.26/dijit/themes/nihilo/nihilo.css");
@import url("https://js.arcgis.com/3.26/esri/css/esri.css");
html,
body,
#mainWindow {
  font-family: sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
}
#mainWindow {
  visibility: hidden;
}
.map {
  margin-left: 20%;
  height: 100%;
  width: 60%;
}

#hiddenButton {
  display: none;
}

p {
  font-size: 15px;
}

/* This class is for the picture classes*/

</style>
