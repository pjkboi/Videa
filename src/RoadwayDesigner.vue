<template>
  <div id="roadwayDesigner">
    <modal name="hello-world" width="700px" height=auto :scrollable="true">
      <Info :infoType="infoType"></Info>
    </modal>
    <div id="elementPicker">
      <slider id="slider" v-if="slideHide" :totalWidth="this.totalWidth" :name="this.name" v-on:onClick="updateTotal($event, color, name)" v-on:backbtn="back($event)" :style="{height: (window.height*0.3)+'px'}"></slider>
      <div id="elementBtn" v-if="!slideHide">
        <b>
          <p>Select Road Element:</p>
        </b>
        <v-btn fab dark small color="grey" @click="show('sidewalkInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Sidewalk Elements:
        <br>
        <b-button @click="smartButtons('Commercial Use Extension'); slideHide = !slideHide; clearUndo();" id="Sidewalk" class="buttonStyle" :variant="commercialExtensionVarient" :disabled="disabled.CommercialExtension">Commercial Use Extension</b-button>
        <b-button @click="smartButtons('Residential'); slideHide = !slideHide; clearUndo();" id="Sidewalk" class="buttonStyle" :variant="residentialVarient" :disabled="disabled.Residential">Residential</b-button>
        <b-button @click="smartButtons('Commercial'); slideHide = !slideHide; clearUndo();" id="Sidewalk" class="buttonStyle" :variant="commercialVarient" :disabled="disabled.Commercial">Commercial</b-button>
        <b-button @click="smartButtons('Street Furniture Zone'); slideHide = !slideHide; clearUndo();" id="Sidewalk" class="buttonStyle" :variant="furnitureVarient" :disabled="disabled.StreetFurniture">Street Furniture Zone</b-button>
        <!-- <b-button @click="naming('Line'), smartButtons()" class="buttonStyle" :variant="'outline-secondary'"  >Line</b-button> -->
        <br>
        <v-btn fab dark small color="green" @click="show('bufferInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Buffer Zone:
        <br>
        <b-button @click="smartButtons('Utilities'); slideHide = !slideHide; clearUndo();" id="Landscaping (Trees)" class="buttonStyle" :variant="bufferVarient" :disabled="disabled.Utilities">Utilities</b-button>
        <b-button @click="smartButtons('No Vegetation'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="bufferVarient" :disabled="disabled.NoVegetation">No Vegetation</b-button>
        <b-button @click="smartButtons('Vegetation'); slideHide = !slideHide; clearUndo();" id="Landscaping (Trees)" class="buttonStyle" :variant="bufferVarient" :disabled="disabled.Vegetation">Vegetation</b-button>
        <br>
        <v-btn fab dark small color="blue" @click="show('cycleInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Cycling Elements:
        <br>
        <b-button @click="smartButtons('Cycle Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.CycleLane">Cycle Lane</b-button>
        <b-button @click="smartButtons('Cycle Track'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.CycleTrack">Cycle Track</b-button>
        <b-button @click="smartButtons('Cycle Street'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.CycleStreet">Cycle Street</b-button>
        <b-button @click="smartButtons('Protected Cycle Track'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.ProtectedCycleTrack">Protected Cycle Track</b-button>
        <b-button @click="smartButtons('Bidirectional Cycle Track'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.BidirectionalCycleTrack">Bidirectional Cycle Track</b-button>
        <b-button @click="smartButtons('Raised Cycle Track'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.RaisedCycleTrack">Raised Cycle Track</b-button>
        <b-button @click="smartButtons('Curbside Buffered Cycle Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.CurbsideBufferedCycleLane">Curbside Buffered Cycle Lane</b-button>
        <b-button @click="smartButtons('Contraflow Cycle Street'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="cycleVarient" :disabled="disabled.ContraflowCycleStreet">Contraflow Cycle Street</b-button>
        <br>
        <v-btn fab dark small color="orange" @click="show('transitInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Transit Elements:
        <br>
        <b-button @click="smartButtons('Shared Transit Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="transitVarient" :disabled="disabled.SharedTransitLane">Shared Transit Lane</b-button>
        <b-button @click="smartButtons('Transit Stop'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="transitVarient" :disabled="disabled.TransitStop">Transit Stop</b-button>
        <b-button @click="smartButtons('Side Running Dedicated Transit Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="transitVarient" :disabled="disabled.SideRunningDedicatedTransitLane">Side Running Dedicated Transit Lane</b-button>
        <b-button @click="smartButtons('Centre Running Transit Lane - Centre Boarding'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="centertransitVarient" :disabled="disabled.CenterRunningTransitLaneCenterBoarding">Centre Running Transit Lane - Centre Board</b-button>
        <b-button @click="smartButtons('Centre Running Transit Lane – Side Boarding'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="centertransitVarient" :disabled="disabled.CenterRunningTransitLaneSideBoarding">Centre Running Transit Lane – Side Board</b-button>
        <br>
        <v-btn fab dark small color="black" @click="show('roadInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Vehicle Lanes:
        <br>
        <b-button @click="smartButtons('Curb Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="curbLaneVarient" :disabled="disabled.CurbLane">Curb Lane</b-button>
        <b-button @click="smartButtons('Passing Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="passingLaneVarient" :disabled="disabled.PassingLane" >Passing Lane</b-button>
        <b-button @click="smartButtons('Large Vehicle Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="largeVehicleLaneVarient" :disabled="disabled.LargeVehicleLane" >Large Vehicle Lane</b-button>
        <b-button @click="smartButtons('Bidirectional Travel Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="bidirectionalTravelLaneVarient" :disabled="disabled.BidirectionalTravelLane" >Bidirectional Travel Lane</b-button>
        <b-button @click="smartButtons('Turning Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="turningLaneVarient" :disabled="disabled.TurningLane" >Turning Lane</b-button>
        <b-button @click="smartButtons('Freight Travel Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="freightTravelLaneVarient" :disabled="disabled.FreightTravelLane" >Freight Travel Lane</b-button>
        <b-button @click="smartButtons('Parking Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="parkingLaneVarient" :disabled="disabled.ParkingLane" >Parking Lane</b-button>
        
        <br>
        <v-btn fab dark small color="teal" @click="show('medianInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Median:
        <br>
        <b-button @click="smartButtons('Two-way left-turn Lane'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="medianVarient" :disabled="disabled.TwoWayLeftTurn">Two-way left-turn Lane</b-button>
        <b-button @click="smartButtons('Pedestrian Refuge Island'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="medianVarient" :disabled="disabled.PedestrianRefugeIsland">Pedestrian Refuge Island</b-button>
        <b-button @click="smartButtons('Boulevard (Vegetation)'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="medianVarient" :disabled="disabled.Boulevard">Boulevard (Vegetation)</b-button>
        <b-button @click="smartButtons('Centre Line'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="medianVarient" :disabled="disabled.CenterLine">Center Line</b-button>
        <b-button @click="smartButtons('Infrastructure'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="medianVarient" :disabled="disabled.Infrastructure">Infrastructure</b-button>
        <br>
        <v-btn fab dark small color="green" @click="show('greenInfo')">
         <v-icon >i</v-icon>
        </v-btn>
        Green Infrastructure
        <br>
        <b-button @click="smartButtons('Swale'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="greenVarient" :disabled="disabled.Swale">Swale</b-button>
        <b-button @click="smartButtons('Rain Garden'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="greenVarient" :disabled="disabled.RainGarden">Rain Garden</b-button>
        <b-button @click="smartButtons('Permeable Paving'); slideHide = !slideHide; clearUndo();" class="buttonStyle" :variant="greenVarient" :disabled="disabled.PermeablePaving">Permeable Paving</b-button>
        <br>
        <br>
      </div>
      <div id="controls" v-if="!slideHide">
        <b-button variant="danger" @click="rowReset" id="btnReset">Reset</b-button>
        <b-button variant="danger" @click="svgDelete" id="btnDelete">Delete</b-button>
        <b-button variant="danger" @click="undo" id="btnUndo">Undo</b-button>
        <b-button variant @click="Populate" hidden id="RDPrepopulation">Test</b-button>
        <b-button variant="success" hidden @click="startInterval(), animationOn=!animationOn" id="solveRoutesBtn" ref="streetViewer">Anime</b-button>
      </div>
    </div>
    <div id="crossSection">
      <br>
      <span style="text-align: center;">
        Remaining Width
        <span style="background-color: #694393; color: white; padding:5px;">{{totalWidth}}m</span>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1500 400" preserveAspectRatio="none">
        <!-- <leftBuilding :y="90" :x="0" :width="window.width*this.ratioSvg" :height="window.height*ratioSvg*5.71" ></leftBuilding>
        <RightBuilding :width="window.width*this.ratioSvg" :y="90" :x="1425" :height="window.height*ratioSvg*5.71"></RightBuilding>-->
        <rect fill="#6b6c6d" :x="0" :y="385" :width="1500" :height="100"></rect>
        <rect fill="black" :x="0" :y="385" :width="1500" :height="2"></rect>
        <!-- <rect class="svg" fill="grey" x="0" y="90%" width="100" height="25"></rect>
        <rect class="svg" fill="grey" x="1400" y="90%" width="100" height="25"></rect>-->
        <svg v-for="(offset, index) in offsetList" :key="index">
          <Sidewalk
            :title="offset.fill"
            :x="offset.x"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></Sidewalk>
          <SidewalkBack
            :title="offset.fill"
            :x="1500-offset.x-offset.width"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></SidewalkBack>
          <BikeLane
            :title="offset.fill"
            :x="offset.x"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></BikeLane>
          <BikeLaneBack
            :title="offset.fill"
            :x="1500-offset.x-offset.width"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></BikeLaneBack>
          <BusLane
            :title="offset.title"
            :x="offset.x"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></BusLane>
          <BusLaneBack
            :title="offset.title"
            :x="1500-offset.x-offset.width"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></BusLaneBack>
          <CarLane
            :title="offset.title"
            :x="offset.x"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></CarLane>
          <CarLaneBack
            :title="offset.title"
            :x="1500-offset.x-offset.width"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></CarLaneBack>
          <Landscaping
            :title="offset.title"
            :x="offset.x"
            :y="160"
            :width="offset.width"
            :height="200"
            preserveAspectRatio="xMidYMax meet"
          ></Landscaping>
          <LandscapingBack
            :title="offset.title"
            :x="1500-offset.x-offset.width"
            :y="160"
            :width="offset.width"
            :height="200"
            preserveAspectRatio="xMidYMax meet"
          ></LandscapingBack>
          <PavedMedian
            :title="offset.title"
            :x="offset.x-50"
            :y="260"
            :width="offset.width+100"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></PavedMedian>
          <SharrowLane
            :title="offset.title"
            :x="offset.x"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></SharrowLane>
          <SharrowLaneBack
            :title="offset.title"
            :x="1500-offset.x-offset.width"
            :y="260"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></SharrowLaneBack>
          <TurnLane
            :title="offset.title"
            :x="offset.x"
            :y="260"
            :width="offset.width*2"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></TurnLane>
          <rect
            @click="sizeLines(index)"
            class="svg"
            :fill="offset.fill"
            :x="offset.x"
            y="90%"
            :width="offset.width"
            height="25"
            :key="key"
          ></rect>
          <rect
            class="svg"
            :fill="offset.fill"
            :x="1500-offset.x-offset.width"
            y="90%"
            :width="offset.width"
            height="25"
          ></rect>
         <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3.5"
            markerHeight="3.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z"></path>
          </marker>
          <marker id = "cross" viewBox = "0 0 10 10" refX = "5" refY = "5" markerUnits = "strokeWidth" markerWidth = "3" markerHeight = "3" stroke = "black" stroke-width = "2" fill = "black" orient = "auto">
            <path d = "M 0 0 L 10 10 M 0 10 L 10 0"/>
        </marker>
        </defs>

        <text
        v-if="index==selectedElementId && selectedElement "
          @click="changeSize('Deduct', selectedElementId)"
          :x="offset.x+10"
          :y="140-7"
        >-</text>
        <text
        v-if="index==selectedElementId && selectedElement"  
          @click="changeSize('Add', selectedElementId)"
          :x="offset.x+offset.width-20"
          :y="140-7"
        >+</text>
        <text
        v-if="selectedElementId != index && !selectedElement" 
          :x="offset.x+offset.width/2-15"
          :y="140-7"
        >{{((offset.width).toFixed(2)*100/((width).toFixed(2)*100)).toFixed(1)}}m</text>
        <line
         v-if="selectedElementId != index && !selectedElement" 
          :x1="offset.x+3"
          :y1="140"
          :x2="offset.x+offset.width-3"
          :y2="140"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.8;"
          marker-end="url(#arrow)"
          marker-start="url(#arrow)"
        ></line>
        <line
          v-if="selectedElementId != index && !selectedElement" 
          :x1="offset.x"
          y1="90%"
          :x2="offset.x"
          :y2="140"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.5"
        ></line>
        <line
         v-if="selectedElementId != index && !selectedElement" 
          :x1="offset.x+offset.width"
          y1="90%"
          :x2="offset.x+offset.width"
          :y2="140"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.5"
        ></line>
        <!-- sum demension lines -->
         <line
         v-if="selectedElementId != index && !selectedElement && index>1" 
          :x1="offsetList[0].x+1"
          y1="90%"
          :x2="offsetList[0].x+1"
          :y2="60"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.9"
        ></line>
        <line
         v-if="selectedElementId != index && !selectedElement && index>1 && index==offsetList.length-1" 
          :x1="offsetList[index].x+offsetList[index].width"
          y1="90%"
          :x2="offsetList[index].x+offsetList[index].width"
          :y2="60"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.9"
        ></line>
        <text
        v-if="selectedElementId != index && !selectedElement && index>1 && index==offsetList.length-1" 
          :x="(offsetList[0].x+offsetList[index].x+offsetList[index].width)/2-15"
          :y="60-7"
        >{{(startWidth-totalWidth).toFixed(1)}}m
        </text>
        <line
         v-if="selectedElementId != index && !selectedElement && index>1 && index==offsetList.length-1" 
          :x1="offsetList[0].x+2"
          :y1="60"
          :x2="offsetList[index].x+offsetList[index].width-1"
          :y2="60"
          style="stroke:rgb(255,250,250);stroke-width:2; opacity: 0.8;"
          marker-end="url(#cross)"
          marker-start="url(#cross)"
        ></line>
        <!-- red lines for selected elements -->
        <line
        v-if="index==selectedElementId && selectedElement "  
          :x1="offset.x+3"
          :y1="140"
          :x2="offset.x+offset.width-3"
          :y2="140"
          style="stroke:rgb(247, 28, 0);stroke-width:2; opacity: 0.8;"
          marker-end="url(#arrow)"
          marker-start="url(#arrow)"
        ></line>
       
        <line
        v-if="index==selectedElementId && selectedElement"  
          :x1="offset.x"
          y1="90%"
          :x2="offset.x"
          :y2="140"
          style="stroke:rgb(247, 28, 0);stroke-width:2; opacity: 0.8"
        ></line>
        <line
        v-if="index==selectedElementId && selectedElement"   
          :x1="offset.x+offset.width"
          y1="90%"
          :x2="offset.x+offset.width"
          :y2="140"
          style="stroke:rgb(247, 28, 0);stroke-width:4; opacity: 0.8"
        ></line>
        <text
        v-if="index==selectedElementId && selectedElement"  
          :x="offset.x+offset.width/2-15"
          :y="140-7"
        >{{((offset.width).toFixed(2)/((width).toFixed(2))).toFixed(1)}}m
        </text>
        </svg>
        
      </svg>
       <!-- <div class="slidecontainer">
          <input type="range" min="1" max="10" v-model="sliderValue" @input="changeWidth" class="slider" id="myRange">
      </div> -->
    </div>
    <div id="planView">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" preserveAspectRatio="none">
        <svg v-for="(offset, key) in offsetList" :key="key">
          <defs>
            <pattern id="roadTexture" patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlink:href="./svg/roadTexture.jpg" x="0" y="0" width="100" height="100"></image>
            </pattern>
            <pattern id="bikeTexture" patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlink:href="./svg/bikeTexture.jpg" x="0" y="0" width="100" height="100"></image>
            </pattern>
            <pattern id="sidewalkTexture" patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlink:href="./svg/sidewalkTexture.jpg" x="0" y="0" width="100" height="100"></image>
            </pattern>
            <pattern id="grassTexture" patternUnits="userSpaceOnUse" width="100" height="100">
              <image xlink:href="./svg/grassTexture.jpg" x="0" y="0" width="100" height="100"></image>
            </pattern>
          </defs>
          <!-- Line section// animation section -->
          <CarLineTop
            v-if="offset.title === 'Curb Lane'"
            :title="offset.title"
            :x="offset.x-95"
            :y="move*5+Math.floor((Math.random() * 3) + 1)"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineTop>
          <CarLineTop
            v-if="offset.title === 'Passing Lane'"
            :title="offset.title"
            :x="offset.x-95"
            :y="move*9+Math.floor((Math.random() * 3) + 1)-1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineTop>
          <CarLineBottom
            v-if="offset.title === 'Curb Lane'"
            :title="offset.title"
            :x="1410-offset.x-offset.width"
            :y="-move*3+Math.floor((Math.random() * 3) + 1)+1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineBottom>
          <CarLineBottom
            v-if="offset.title === 'Passing Lane'"
            :title="offset.title"
            :x="1410-offset.x-offset.width"
            :y="-move*7+Math.floor((Math.random() * 3) + 1)+1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineBottom>
          <rect
            @click="sizeLines(index)"
            :x="offset.x"
            :y="5"
            :width="offset.width"
            :height="1500"
            :fill="offset.fill"
          ></rect>
          <line
            v-if="offset.title=='Passing Lane'"
            :x1="offset.x"
            :x2="offset.x"
            y1="2"
            y2="100%"
            stroke="yellow"
            stroke-width="10"
            stroke-linecap="butt"
            stroke-dasharray="100 100"
          ></line>
          <line
            v-if="offset.title=='Curb Lane'"
            :x1="offset.x+10"
            :x2="offset.x+10"
            y1="2"
            y2="100%"
            stroke="white"
            stroke-width="10"
            stroke-linecap="butt"
          ></line>
          <line
            v-if="offset.title=='Painted'||offset.title=='Raised'"
            :x1="offset.x+65"
            :x2="offset.x+65"
            y1="2"
            y2="100%"
            stroke="white"
            stroke-width="10"
            stroke-linecap="butt"
          ></line>
          <line
            class="line1"
            v-if="offset.title=='Landscaping (Trees)'"
            :x1="offset.x+offset.width/2"
            :x2="offset.x+offset.width/2"
            y1="2"
            y2="100%"
          ></line>
          <Sidewalk
            :title="offset.title"
            :x="offset.x"
            :y="move"
            :width="offset.width"
            :height="100"
            preserveAspectRatio="xMidYMax meet"
          ></Sidewalk>
          <line
            v-if="offset.title=='Two-way left-turn Lane'"
            :x1="offset.x"
            :x2="offset.x"
            y1="2"
            y2="100%"
            stroke="yellow"
            stroke-width="10"
            stroke-linecap="butt"
            stroke-dasharray="100 100"
          ></line>
          <CarLineTop
            v-if="offset.title === 'Curb Lane'"
            :title="offset.title"
            :x="offset.x-95"
            :y="move*5+Math.floor((Math.random() * 3) + 1)"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineTop>
          <CarLineTop
            v-if="offset.title === 'Passing Lane'"
            :title="offset.title"
            :x="offset.x-95"
            :y="move*9+Math.floor((Math.random() * 3) + 1)-1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineTop>
          <rect
            :x="1500-offset.x-offset.width"
            :y="5"
            :width="offset.width"
            :height="1500"
            :fill="offset.fill"
          ></rect>
          <CarLineBottom
            v-if="offset.title === 'Curb Lane'"
            :title="offset.title"
            :x="1410-offset.x-offset.width"
            :y="-move*3+Math.floor((Math.random() * 3) + 1)+1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineBottom>
          <CarLineBottom
            v-if="offset.title === 'Passing Lane'"
            :title="offset.title"
            :x="1410-offset.x-offset.width"
            :y="-move*7+Math.floor((Math.random() * 3) + 1)+1000"
            preserveAspectRatio="xMidYMax meet"
          ></CarLineBottom>
          <line
            v-if="offset.title=='Two-way left-turn Lane'"
            :x1="1500-offset.x"
            :x2="offset.x"
            y1="2"
            y2="100%"
            stroke="yellow"
            stroke-width="10"
            stroke-linecap="butt"
            stroke-dasharray="100 100"
          ></line>
          <line
            v-if="offset.title=='Passing Lane'"
            :x1="1500-offset.x"
            :x2="1500-offset.x"
            y1="2"
            y2="100%"
            stroke="yellow"
            stroke-width="10"
            stroke-linecap="butt"
            stroke-dasharray="100 100"
          ></line>
          <line
            v-if="offset.title=='Curb Lane'"
            :x1="1500-offset.x-10"
            :x2="1500-offset.x-10"
            y1="2"
            y2="100%"
            stroke="white"
            stroke-width="10"
            stroke-linecap="butt"
          ></line>
          <line
            v-if="centerLineBool"
            :x1="750"
            :x2="750"
            y1="2"
            y2="100%"
            stroke="white"
            stroke-width="10"
            stroke-linecap="butt"
          ></line>
          <line
            v-if="offset.title=='Painted'||offset.title=='Raised'"
            :x1="1500-offset.x-65"
            :x2="1500-offset.x-65"
            y1="2"
            y2="100%"
            stroke="white"
            stroke-width="10"
            stroke-linecap="butt"
          ></line>
          <line
            class="line1"
            v-if="offset.title=='Landscaping (Trees)'"
            :x1="1500-offset.x-offset.width/2"
            :x2="1500-offset.x-offset.width/2"
            y1="2"
            y2="100%"
          ></line>
        </svg>
      </svg>
    </div>
  </div>
</template>
<script>
import projectPicker from "./projectPicker";
import locateButton from "./LocateButton";
import rowElement from "./Buttons";
import svgElement from "./svg/svg.vue";
import indicator from "./Indicators.vue";
import streetViewer from "./streetViewer.vue";
import BikeLane from "./svg/BikeLane";
import BikeLaneBack from "./svg/BikeLaneBack";
import BusLane from "./svg/BusLane";
import BusLaneBack from "./svg/BusLaneBack";
import CarLane from "./svg/CarLane";
import CarLaneBack from "./svg/CarLaneBack";
import Landscaping from "./svg/LandscapeWTrees";
import LandscapingBack from "./svg/LandscapeWTreeBack";
import leftBuilding from "./svg/leftBuilding";
import PavedMedian from "./svg/PavedMedian";
import RightBuilding from "./svg/RightBuilding";
import SharrowLane from "./svg/SharrowLane";
import SharrowLaneBack from "./svg/SharrowLaneBack";
import Sidewalk from "./svg/Sidewalk";
import SidewalkBack from "./svg/SidewalkBack";
import TurnLane from "./svg/TurnLane";
import Slider from "./Slider";
import CarLineTop from "./svg/CarLineTop";
import CarLineBottom from "./svg/CarLineBottom";
import Info from "./Info"
const disabled = true;
export default {
  name: "gio",
  props:{
    getData: Object,
    convertedDataStorage: Object
  },
  components: {
    projectPicker,
    Slider,
    rowElement,
    svgElement,
    indicator,
    locateButton,
    streetViewer,
    BikeLane,
    BikeLaneBack,
    BusLane,
    BusLaneBack,
    CarLane,
    CarLaneBack,
    Landscaping,
    LandscapingBack,
    leftBuilding,
    PavedMedian,
    RightBuilding,
    SharrowLane,
    SharrowLaneBack,
    Sidewalk,
    SidewalkBack,
    TurnLane,
    CarLineTop,
    CarLineBottom,
    Info
  },
  data() {
    return {
      tempSlider: 0,
      sliderValue:0,
      undoDelete: [],
      undoReset:[],
      undoCounter:0,
      commercialExtensionVarient: "secondary",
      residentialVarient: "secondary",
      commercialVarient: "secondary",
      furnitureVarient: "outline-secondary",
      bufferVarient: "outline-success",
      cycleVarient: "outline-primary",
      transitVarient: "outline-warning",
      centertransitVarient: "outline-warning",
      curbLaneVarient: "outline-secondary",
      passingLaneVarient: "outline-secondary",
      largeVehicleLaneVarient: "outline-secondary",
      bidirectionalTravelLaneVarient: "outline-secondary",
      turningLaneVarient: "outline-secondary",
      freightTravelLaneVarient: "outline-secondary",
      parkingLaneVarient: "outline-secondary",
      medianVarient: "outline-info",
      greenVarient: "outline-success",
      backgroundLoading: "#22c16b",
      startWidth: 15,
      key: "",
      disabled:{
        CommercialExtension: false,
        Residential: false,
        Commercial: false,
        StreetFurniture: true,
        Utilities: true,
        NoVegetation: true,
        Vegetation: true,
        PedestrianRefugeIsland: true,
        CycleLane: true,
        CycleTrack: true,
        CycleStreet: true,
        ProtectedCycleTrack: true,
        BidirectionalCycleTrack: true,
        RaisedCycleTrack: true,
        CurbsideBufferedCycleLane: true,
        ContraflowCycleStreet: true,
        SharedTransitLane: true,
        TransitStop: true,
        SideRunningDedicatedTransitLane: true,
        CenterRunningTransitLaneCenterBoarding: true,
        CenterRunningTransitLaneSideBoarding: true,
        CurbLane: true,
        PassingLane: true,
        LargeVehicleLane: true,
        BidirectionalTravelLane: true,
        TurningLane: true,
        FreightTravelLane: true,
        ParkingLane: true,
        TwoWayLeftTurn: true,
        Refuge: true,
        Boulevard: true,
        CenterLine: true,
        Infrastructure: true,
        Swale: true,
        RainGarden: true,
        PermeablePaving: true
      },
      totalWidth: 15,
      name: "",
      color: "",
      slideHide: false,
      streetElementData: [],
      svgSwitch: true,
      indicatorDisplay: true,
      geoSketch: true,
      window: {
        width: 0,
        height: 0
      },
      totalWidthChecker: true,
      offsetList: [],
      defaultPopulate: [],
      populateValues: {},
      width: 50,
      counter: 0,
      tempWidth: [],
      ratio2D: 12.5,
      slide: 0,
      sliding: null,
      ratioSvg: 0,
      move: -100,
      date: Date.now(),
      time: 0,
      scaleRatio: 0,
      selectedParam: "",
      animationOn: false,
      interval: null,
      centerLineBool: false,
      northfield: "-80.532821,43.501982",
      HTMLcontent: null,
      selectedElement: false,
      selectedElementId: null,
      adjustmentX: 0,
      tested: "",
      sidewalkWidth: 0,
      infoType: null
    };
  },
  created() {
    //this.selectedParam = this.$route.params.selected;
        setTimeout(() => {
      this.$vs.loading.close();
    }, 2000);
  },
  watch: {
    time: function() {
      //console.log(this.time)
      //console.log(this.move)
      this.move == 1480 ? (this.move = -100) : (this.move += 1);
    }
  },
  methods: {
    changeWidth(){
      if(this.sliderValue==0){
        this.tempSlider = 0;
      }
      var width = this.offsetList[this.offsetList.length-1].width/this.width;
      var tempWidth = width;
      if(this.sliderValue>this.tempSlider){
      var add = (tempWidth+(this.sliderValue/10))*this.width;
      this.offsetList[this.offsetList.length-1].width = add;
      this.totalWidth = parseFloat((((this.totalWidth*10)/10) - (((this.sliderValue/10)*10)/10)).toFixed(1));
      this.tempSlider = this.sliderValue;
      console.log((tempWidth+(this.sliderValue/10)));
      }
      else if(this.sliderValue<=this.tempSlider){
      var sub = (tempWidth-(this.sliderValue/10))*this.width;
      this.offsetList[this.offsetList.length-1].width = sub;
      this.totalWidth = parseFloat((((this.totalWidth*10)/10) + (((this.sliderValue/10)*10)/10)).toFixed(1));
      this.tempSlider = this.sliderValue;
      console.log(sub);
      }
    },
    wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
    },
    clearUndo(){
      this.undoReset.splice(0, this.undoReset.length);
      this.undoDelete.splice(0, this.undoDelete.length);
    },
    undo(){
      console.log(this.undoDelete);
      if(this.undoDelete.length == 0 && this.undoReset == 0){
        //alert("Theres nothing to undo");
        this.svgDelete();
      }
      else if(this.undoReset != 0){
        //this.dementionReset();
        for(var i = 0;i<this.undoReset.length;i++){
          var lastOffset = this.undoReset[i];
          console.log(lastOffset.width);
          this.offsetList.push(this.undoReset[i]);
          this.totalWidth = parseFloat(((this.totalWidth*10 - (lastOffset.width*10/(this.width*10))*10)/10).toFixed(1));
          this.streetElementData.push(this.undoReset[i].title);
          this.smartButtons(this.streetElementData[i]);
        }
        this.undoReset.splice(0, this.undoReset.length);
        //this.updateTotal(num, this.color, this.streetElementData[this.streetElementData.length-1]);
      }
      else if(this.undoDelete.length != 0){
        //this.dementionReset();
        var lastOffset = this.undoDelete[this.undoDelete.length - 1];
        this.offsetList.push(lastOffset);
        //let num = (lastOffset.width/this.width)*10/10;
        //this.totalWidth = (((this.totalWidth*10)/10) + (((lastOffset.width/this.width)*10)/10));
        this.totalWidth = parseFloat(((this.totalWidth*10 - (lastOffset.width*10/(this.width*10))*10)/10).toFixed(1));
        this.streetElementData.push(this.undoDelete[this.undoDelete.length - 1].title);
        this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
        this.undoDelete.pop();
      }
      
    },
    show (infoType) {
      this.$modal.show('hello-world');
      this.infoType = infoType;
      console.log("heey");
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    sliderName(name){
      this.name=name;
      console.log(this.name);
    },
    Populate(){
      this.startWidth = (this.getData.row)*10/10;
      this.totalWidth = ((this.getData.row)*10)/10;
      this.width = (750/this.totalWidth)*10/10;
      for(var x in this.getData){
        this.getData[x] = (parseFloat((this.getData[x])*10/10).toFixed(1));
        if(this.getData[x]!=0){
          if(x!="id"&&x!="row"&&x!="name"){
            this.totalWidth = (parseFloat(this.totalWidth).toFixed(1))*10/10;
            //this.totalWidth = math.format(this.totalWidth, {precision: 14});
            console.log(x);
            this.svgPopulate(x);
            console.log(this.streetElementData);
            this.updateTotal((this.getData[x]*10/10),this.color,this.streetElementData[this.streetElementData.length-1]);
          }
        }
      }
      this.selectedElement = false;
      this.selectedElementId = null;
    },
    dementionReset()
    {
     this.selectedElement = false;
     this.selectedElementId = null;
    },
    RDPrepopulation(){
      this.width = 750;
      var objectLength = Object.keys(this.getData).length;

      if(this.getData.Shape__Area==null){
        this.sidewalkWidth = 0;
        this.slideHide = !this.slideHide;
      }
      else{
        this.sidewalkWidth = parseFloat((this.getData.Shape__Area/this.getData.Shape__Length).toFixed(1));
        
      }
      this.totalWidth = parseFloat((((this.getData.RoadWidth/2)+this.sidewalkWidth)+0.1).toFixed(1));
      this.width = this.width/this.totalWidth;
      if (this.totalWidth!=0) {
        console.log(this.defaultPopulate);
        console.log(this.populateValues);
        switch(this.getData.ROADSEGM_1){
        case "LEFT":
          this.populateValues.fill = "url(#sidewalkTexture)";
          this.populateValues.width = this.sidewalkWidth;
          this.populateValues.title = "Sidewalk"
          this.defaultPopulate.push(this.populateValues);
          this.streetElementData.push(this.populateValues.title);
          this.updateTotal(
                this.defaultPopulate[0].width,
                this.defaultPopulate[0].fill,
                this.defaultPopulate[0].title
          );
          this.slideHide = !this.slideHide;
          //this.naming(this.defaultPopulate[0].title);
          break;
        case "RIGHT":
          this.populateValues.fill = "url(#sidewalkTexture)";
          this.populateValues.width = this.sidewalkWidth;
          this.populateValues.title = "Sidewalk"
          this.defaultPopulate.push(this.populateValues);
          this.streetElementData.push(this.populateValues.title); 
          this.updateTotal(
                this.defaultPopulate[0].width,
                this.defaultPopulate[0].fill,
                this.defaultPopulate[0].title
          );
         this.slideHide = !this.slideHide;
          //this.naming(this.defaultPopulate[0].title);
          break;
        default: 
          //clear the object of the sidewalk
          this.defaultPopulate.pop();
          break;
      }
      var roadWidth = this.getData.RoadWidth/this.getData.NumberofLa;
      var numberofLanes = this.getData.NumberofLa/2
      for(var i = 0;i<numberofLanes;i++){
        if(i==0){
          this.populateValues.fill = "url(#roadTexture)";
          this.populateValues.width = roadWidth;
          this.populateValues.title = "Curb Lane";
        }
        else{
          this.populateValues.fill = "url(#roadTexture)";
          this.populateValues.width = roadWidth;
          this.populateValues.title = "Passing Lane";
        }
        this.defaultPopulate.push(this.populateValues);
        this.streetElementData.push(this.populateValues.title);
        
        this.updateTotal(
            this.defaultPopulate[i].width,
            this.defaultPopulate[i].fill,
            this.defaultPopulate[i].title
          );
      }
      this.populateValues.fill = "white";
      this.populateValues.width = 0.1;
      this.populateValues.title = "Centre Line";
      this.defaultPopulate.push(this.populateValues);
      this.updateTotal(
        this.defaultPopulate[i].width,
        this.defaultPopulate[i].fill,
        this.defaultPopulate[i].title
        );
      this.slideHide= false;
      // this.smartButtons();
      // this.populateValues.fill = "white";
      // this.populateValues.width = "";
      // this.populateValues.title = "Centre Line";
        // this.info();
        // for (var i = 0; i < objectLength; i++) {
        //           this.updateTotal(
        //     this.defaultPopulate[i].width,
        //     this.defaultPopulate[i].fill,
        //     this.defaultPopulate[i].title
        //   );
        //   this.naming(this.defaultPopulate[i].title);
        //   this.smartButtons();
        // }
      }
      else {
        console.log("we in the else " + this.totalWidth);
        this.rowReset();
      }
    },
    back(passed) {
      this.streetElementData.pop();
      this.smartButtons(this.streetElementData[this.streetElementData.length - 1]); 
      this.slideHide = passed;
      console.log(this.streetElementData[this.streetElementData.length - 1]);
    },
    changeSize(type, id) {
      if (type == "Add"&& this.totalWidth != 0) {
       const lastOffset = this.offsetList[id];

       lastOffset.width = lastOffset.width + this.width/10;

       this.totalWidth = ((this.totalWidth*10) - 1) / 10;

       if((this.offsetList.length - 1) != id)
         {
           var i;
           for (i = id+1; i < this.offsetList.length; i++)
           {
             const modifiedOffset = this.offsetList[i];
             modifiedOffset.x = modifiedOffset.x + this.width/10;
           }
         }

     } else if (type == "Deduct") {
       const lastOffset = this.offsetList[id];
       lastOffset.width = lastOffset.width - this.width/10;
       this.totalWidth = ((this.totalWidth*10) + 1) / 10;
       if((this.offsetList.length - 1) != id)
         {
           var i;
           for (i = id+1; i < this.offsetList.length; i++)
           {
             const modifiedOffset = this.offsetList[i];
             modifiedOffset.x = modifiedOffset.x - this.width/10;
           }
         }
     }
    },
    sizeLines(id) {
      if (id == this.selectedElementId) {
        this.selectedElement = false;
        this.selectedElementId = null;
      } else if (this.selectedElementId == null) {
        this.selectedElement = true;
        this.selectedElementId = id;
      } else {
        this.selectedElementId = id;
      }
    },
    info() {
      console.log(this.offsetList);
      for (var i = 0; i < this.defaultPopulate.length; i++) {
        this.updateTotal(
          this.defaultPopulate[i].width,
          this.defaultPopulate[i].fill,
          this.defaultPopulate[i].title
        );
        this.svgPopulate(this.defaultPopulate[i].title);
        this.smartButtons();
      }
    },
    startInterval: function() {
      if (this.animationOn) {
        this.interval = setInterval(() => {
          var cd = new Date();
          this.time = cd.getMilliseconds();
        }, 8);
      } else {
        clearInterval(this.interval);
        this.move = -100;
      }
    },
    svgPopulate(nameString) {
      console.log(nameString);
      switch (nameString) {
        case "Commercial Use Extension":
        case "Residential":
        case "Commercial":
        case "Street Furniture Zone":
        case "Pedestrian Refuge Island":
          this.color = "url(#sidewalkTexture)";
          break;
        case "Utilities":
        case "No Vegetation":
        case "Vegetation":
        case "Boulevard (Vegetation)":
        case "Swale":
        case "Rain Garden":
          this.color = "url(#grassTexture)";
          break;
        case "Cycle Lane":
        case "Cycle Track":
        case "Cycle Street":
        case "Protected Cycle Track":
        case "Bidirectional Cycle Track":
        case "Raised Cycle Track":
        case "Curbside Buffered Cycle Lane":
        case "Contraflow Cycle Street":
          this.color = "url(#bikeTexture)";
          break;
        case "Shared Transit Lane":
        case "Transit Stop":
        case "Side Running Dedicated Transit Lane":
        case "Centre Running Transit Lane - Centre Boarding":
        case "Centre Running Transit Lane – Side Boarding":
        case "Curb Lane":
        case "Passing Lane":
        case "Large Vehicle Lane":
        case "Bidirectional Travel Lane":
        case "Turning Lane":
        case "Freight Travel Lane":
        case "Parking Lane":
        case "Two-way left-turn Lane":
        case "Infrastructure":
        case "Permeable Paving":
          this.color = "url(#roadTexture)";
          break;
        case "Line":
        case "Centre Line":
          this.color = "white";
          break;
        case "comm_ext": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Commercial Use Extension');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_path_res": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Residential');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_path_comm": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Commercial');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_str_frntr": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Street Furniture Zone');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_landbuff_util": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Utilities');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_landbuff": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('No Vegetation');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "sdwlk_landbuff_veg": //0
          this.color = "url(#grassTexture)";
          this.streetElementData.push('Vegetation');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "ped_isl": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Pedestrian Refuge Island');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "cycl_lane": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Cycle Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "cycl_trac": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Cycle Track');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "cycl_str": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Cycle Street');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "prot_cycl_trac": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Protected Cycle Track');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "bi_cycl_trac": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Bidirectional Cycle Track');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "raise_cycl_trac": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Raised Cycle Track');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "curbuff_cycl_lane": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Curbside Buffered Cycle Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "contra_cycle_str": //0
          this.color = "url(#bikeTexture)";
          this.streetElementData.push('Contraflow Cycle Street');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "tran_stp": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Transit Stop');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "side_ded_transln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Side Running Dedicated Transit Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "cent_transln_cntbrd": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Centre Running Transit Lane - Centre Boarding');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "cent_transln_pssgr": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Centre Running Transit Lane – Side Boarding');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "shr_transln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Shared Transit Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "curb_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Curb Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "pass_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Passing Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "lrg_veh_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Large Vehicle Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "bi_trav_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Bidirectional Travel Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "turn_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Turning Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "frt_trav_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Freight Travel Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "park_ln": //0
          this.color = "url(#roadTexture)";
          this.streetElementData.push('Parking Lane');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "swale": //0
          this.color = "url(#grassTexture)";
          this.streetElementData.push('Swale');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "rain_gdn": //0
          this.color = "url(#grassTexture)";
          this.streetElementData.push('Rain Garden');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
        case "perm_pav": //0
          this.color = "url(#sidewalkTexture)";
          this.streetElementData.push('Permeable Paving');
          this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
          break;
      }
      console.log(this.color);
      //this.slideHide = !this.slideHide;
    },
    streetViewerCall() {
      // if (this.totalWidth != 0) {
      //   alert("There is still space remaining. Resize existing elements.");
      // } else {
      document.getElementById("solveRoutesBtn").click();
      
      // }
      //this.$modal.hide("hello-row");
    },
    clearButton() {
      document.getElementById("clearBtn").click();
    },
    disableAll() {
      // for (var i in this.disabled) {
      //   this.disabled.i = true;
      // }
      this.disabled.CommercialExtension = true;
      this.disabled.Residential = true;
      this.disabled.Commercial = true;
      this.disabled.StreetFurniture = true;
      this.disabled.Utilities = true;
      this.disabled.NoVegetation = true;
      this.disabled.Vegetation = true;
      this.disabled.PedestrianRefugeIsland = true;
      this.disabled.CycleLane = true;
      this.disabled.CycleTrack = true;
      this.disabled.CycleStreet = true;
      this.disabled.ProtectedCycleTrack = true;
      this.disabled.BidirectionalCycleTrack = true;
      this.disabled.RaisedCycleTrack = true;
      this.disabled.CurbsideBufferedCycleLane = true;
      this.disabled.ContraflowCycleStreet = true;
      this.disabled.SharedTransitLane = true;
      this.disabled.TransitStop = true;
      this.disabled.SideRunningDedicatedTransitLane = true;
      this.disabled.CenterRunningTransitLaneCenterBoarding = true;
      this.disabled.CenterRunningTransitLaneSideBoarding = true;
      this.disabled.CurbLane = true;
      this.disabled.PassingLane = true;
      this.disabled.LargeVehicleLane = true;
      this.disabled.BidirectionalTravelLane = true;
      this.disabled.TurningLane = true;
      this.disabled.FreightTravelLane = true;
      this.disabled.ParkingLane = true;
      this.disabled.TwoWayLeftTurn = true;
      this.disabled.Refuge = true;
      this.disabled.Boulevard = true;
      this.disabled.CenterLine = true;
      this.disabled.Infrastructure = true;
      this.disabled.Swale = true;
      this.disabled.RainGarden = true;
      this.disabled.PermeablePaving = true;
      console.log(this.disabled);
    },
    processLastElements() {
      var remainingSpace = false;
      if (this.totalWidth >= 32) {
        this.disabled[10] = false;
        remainingSpace = true;
      }
    },
    smartButtons(elementCategory) {
      this.name=elementCategory;
      if(elementCategory==null){
        this.disableAll();
        this.commercialExtensionVarient = "secondary"
        this.residentialVarient = "secondary";
        this.commercialVarient = "secondary";
        this.furnitureVarient = "outline-secondary";
        this.bufferVarient = "outline-success";
        this.cycleVarient = "outline-primary";
        this.transitVarient = "outline-warning";
        this.centertransitVarient = "outline-warning";
        this.curbLaneVarient = "outline-secondary";
        this.passingLaneVarient = "outline-secondary";
        this.largeVehicleLaneVarient = "outline-secondary";
        this.bidirectionalTravelLaneVarient = "outline-secondary";
        this.turningLaneVarient = "outline-secondary";
        this.freightTravelLaneVarient = "outline-secondary";
        this.parkingLaneVarient = "outline-secondary";
        this.medianVarient = "outline-info";
        this.greenVarient = "outline-success";
        this.disabled.CommercialExtension=false;
        this.disabled.Commercial = false;
        this.disabled.Residential=false;
        this.disabled.Swale=false;
        this.streetElementData.push(elementCategory);
        this.svgPopulate(elementCategory);
      }
      else{
        if(this.streetElementData[this.streetElementData.length - 1]==elementCategory){
          this.streetElementData.pop();
          this.streetElementData.push(elementCategory);
        }
        else{
          this.streetElementData.push(elementCategory);
          this.svgPopulate(elementCategory);
        }
        
      }
      switch (elementCategory) {
        case "Commercial Use Extension":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary"
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "outline-success";
          this.cycleVarient = "outline-primary";
          this.transitVarient = "outline-warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "outline-secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "outline-secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "outline-secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "outline-success";
          this.disabled.Commercial = false;
          break
        case "Residential":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary"
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "success";
          this.cycleVarient = "primary";
          this.transitVarient = "warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "outline-secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "success";
          
          this.disabled.Utilities = false;
          this.disabled.NoVegetation = false;
          this.disabled.Vegetation = false;
          this.disabled.CycleLane = false;
          this.disabled.CycleTrack = false;
          this.disabled.CycleStreet = false;
          this.disabled.ProtectedCycleTrack = false;
          this.disabled.BidirectionalCycleTrack = false;
          this.disabled.RaisedCycleTrack = false;
          this.disabled.CurbsideBufferedCycleLane = false;
          this.disabled.ContraflowCycleStreet = false;
          this.disabled.SharedTransitLane = false;
          this.disabled.TransitStop = false;
          this.disabled.SideRunningDedicatedTransitLane = false;
          this.disabled.CurbLane = false;
          this.disabled.ParkingLane = false;
          this.disabled.Swale = false;
          this.disabled.RainGarden = false;
          this.disabled.PermeablePaving = false;

          break;
        case "Commercial":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary"
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "secondary";
          this.bufferVarient = "success";
          this.cycleVarient = "primary";
          this.transitVarient = "warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "success";
          this.disabled.StreetFurniture = false;
          this.disabled.Utilities = false;
          this.disabled.NoVegetation = false;
          this.disabled.Vegetation = false;
          this.disabled.CycleLane = false;
          this.disabled.CycleTrack = false;
          this.disabled.CycleStreet = false;
          this.disabled.ProtectedCycleTrack = false;
          this.disabled.BidirectionalCycleTrack = false;
          this.disabled.TurningLane = false;
          this.disabled.RaisedCycleTrack = false;
          this.disabled.CurbsideBufferedCycleLane = false;
          this.disabled.ContraflowCycleStreet = false;
          this.disabled.SharedTransitLane = false;
          this.disabled.TransitStop = false;
          this.disabled.SideRunningDedicatedTransitLane = false;
          this.disabled.CurbLane = false;
          this.disabled.ParkingLane = false;
          this.disabled.Swale = false;
          this.disabled.RainGarden = false;
          this.disabled.PermeablePaving = false;
          break;
        case "Street Furniture Zone":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary"
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "success";
          this.cycleVarient = "primary";
          this.transitVarient = "warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "success";
          this.disabled.Utilities = false;
          this.disabled.NoVegetation = false;
          this.disabled.Vegetation = false;
          this.disabled.CycleLane = false;
          this.disabled.CycleTrack = false;
          this.disabled.CycleStreet = false;
          this.disabled.ProtectedCycleTrack = false;
          this.disabled.BidirectionalCycleTrack = false;
          this.disabled.TurningLane = false;
          this.disabled.RaisedCycleTrack = false;
          this.disabled.CurbsideBufferedCycleLane = false;
          this.disabled.ContraflowCycleStreet = false;
          this.disabled.SharedTransitLane = false;
          this.disabled.TransitStop = false;
          this.disabled.SideRunningDedicatedTransitLane = false;
          this.disabled.CurbLane = false;
          this.disabled.ParkingLane = false;
          this.disabled.Swale = false;
          this.disabled.RainGarden = false;
          this.disabled.PermeablePaving = false;
          break;
        case "Utilities":
        case "No Vegetation":
        case "Vegetation":
          this.disableAll();
          if(this.streetElementData[this.streetElementData.length-1]=="Cycle Lane"){
            this.commercialExtensionVarient = "outline-secondary"
            this.residentialVarient = "outline-secondary";
            this.commercialVarient = "outline-secondary";
            this.furnitureVarient = "outline-secondary";
            this.bufferVarient = "outline-success";
            this.cycleVarient = "outline-primary";
            this.transitVarient = "warning";
            this.centertransitVarient = "outline-warning";
            this.curbLaneVarient = "secondary";
            this.passingLaneVarient = "outline-secondary";
            this.largeVehicleLaneVarient = "outline-secondary";
            this.bidirectionalTravelLaneVarient = "outline-secondary";
            this.turningLaneVarient = "secondary";
            this.freightTravelLaneVarient = "outline-secondary";
            this.parkingLaneVarient = "secondary";
            this.medianVarient = "outline-info";
            this.greenVarient = "outline-success";
            this.disabled.TurningLane = false;
            this.disabled.SharedTransitLane = false;
            this.disabled.TransitStop = false;
            this.disabled.SideRunningDedicatedTransitLane = false;
            this.disabled.CurbLane = false;
            this.disabled.ParkingLane = false;
          }
          else{
            this.commercialExtensionVarient = "outline-secondary"
            this.residentialVarient = "outline-secondary";
            this.commercialVarient = "outline-secondary";
            this.furnitureVarient = "outline-secondary";
            this.bufferVarient = "outline-success";
            this.cycleVarient = "primary";
            this.transitVarient = "warning";
            this.centertransitVarient = "outline-warning";
            this.curbLaneVarient = "secondary";
            this.passingLaneVarient = "outline-secondary";
            this.largeVehicleLaneVarient = "outline-secondary";
            this.bidirectionalTravelLaneVarient = "outline-secondary";
            this.turningLaneVarient = "secondary";
            this.freightTravelLaneVarient = "outline-secondary";
            this.parkingLaneVarient = "secondary";
            this.medianVarient = "outline-info";
            this.greenVarient = "outline-success";
            this.disabled.CycleLane = false;
            this.disabled.CycleTrack = false;
            this.disabled.CycleStreet = false;
            this.disabled.ProtectedCycleTrack = false;
            this.disabled.BidirectionalCycleTrack = false;
            this.disabled.TurningLane = false;
            this.disabled.RaisedCycleTrack = false;
            this.disabled.CurbsideBufferedCycleLane = false;
            this.disabled.ContraflowCycleStreet = false;
            this.disabled.SharedTransitLane = false;
            this.disabled.TransitStop = false;
            this.disabled.SideRunningDedicatedTransitLane = false;
            this.disabled.CurbLane = false;
            this.disabled.ParkingLane = false;
          }
          
          break;
        case "Cycle Lane":
        case "Cycle Track":
        case "Cycle Street":
        case "Protected Cycle Track":
        case "Bidirectional Cycle Track":
        case "Raised Cycle Track":
        case "Curbside Buffered Cycle Lane":
        case "Contraflow Cycle Street":
          this.disableAll();
          if(this.streetElementData[this.streetElementData.length-1]=="Utilities"){
            this.commercialExtensionVarient = "outline-secondary";
            this.residentialVarient = "outline-secondary";
            this.commercialVarient = "outline-secondary";
            this.furnitureVarient = "outline-secondary";
            this.bufferVarient = "outline-success";
            this.cycleVarient = "outline-primary";
            this.transitVarient = "warning";
            this.centertransitVarient = "outline-warning";
            this.curbLaneVarient = "secondary";
            this.passingLaneVarient = "outline-secondary";
            this.largeVehicleLaneVarient = "outline-secondary";
            this.bidirectionalTravelLaneVarient = "outline-secondary";
            this.turningLaneVarient = "outline-secondary";
            this.freightTravelLaneVarient = "outline-secondary";
            this.parkingLaneVarient = "secondary";
            this.medianVarient = "outline-info";
            this.greenVarient = "outline-success";
            this.disabled.SharedTransitLane = false;
            this.disabled.TransitStop = false;
            this.disabled.SideRunningDedicatedTransitLane = false;
            this.disabled.CurbLane = false;
            this.disabled.ParkingLane = false;
          }
          else{
            this.commercialExtensionVarient = "outline-secondary"
            this.residentialVarient = "outline-secondary";
            this.commercialVarient = "outline-secondary";
            this.furnitureVarient = "outline-secondary";
            this.bufferVarient = "success";
            this.cycleVarient = "outline-primary";
            this.transitVarient = "warning";
            this.centertransitVarient = "outline-warning";
            this.curbLaneVarient = "secondary";
            this.passingLaneVarient = "outline-secondary";
            this.largeVehicleLaneVarient = "outline-secondary";
            this.bidirectionalTravelLaneVarient = "outline-secondary";
            this.turningLaneVarient = "secondary";
            this.freightTravelLaneVarient = "outline-secondary";
            this.parkingLaneVarient = "secondary";
            this.medianVarient = "outline-info";
            this.greenVarient = "success";
            this.disabled.Utilities = false;
            this.disabled.NoVegetation = false;
            this.disabled.Vegetation = false;
            this.disabled.TurningLane = false;
            this.disabled.SharedTransitLane = false;
            this.disabled.TransitStop = false;
            this.disabled.SideRunningDedicatedTransitLane = false;
            this.disabled.CurbLane = false;
            this.disabled.ParkingLane = false;
            this.disabled.Swale = false;
            this.disabled.RainGarden = false;
            this.disabled.PermeablePaving = false;
          }
          break;
        case "Shared Transit Lane":
        case "Transit Stop":
        case "Side Running Dedicated Transit Lane":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary";
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "outline-success";
          this.cycleVarient = "outline-primary";
          this.transitVarient = "outline-warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "outline-secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "outline-success";
          this.disabled.CurbLane = false;
          this.disabled.ParkingLane = false;

          break;
        case "Curb Lane":
        case "Passing Lane":
        case "Parking Lane":
        case "Freight Travel Lane":
        case "Large Vehicle Lane":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary";
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "outline-success";
          this.cycleVarient = "outline-primary";
          this.transitVarient = "outline-warning";
          this.centertransitVarient = "warning";
          this.curbLaneVarient = "outline-secondary";
          this.passingLaneVarient = "secondary";
          this.largeVehicleLaneVarient = "secondary";
          this.bidirectionalTravelLaneVarient = "secondary";
          this.turningLaneVarient = "outline-secondary";
          this.freightTravelLaneVarient = "secondary";
          this.parkingLaneVarient = "outline-secondary";
          this.medianVarient = "info";
          this.greenVarient = "success";
          this.disabled.PassingLane = false;
          this.disabled.LargeVehicleLane = false;
          this.disabled.BidirectionalTravelLane = false;
          this.disabled.FreightTravelLane = false;
          this.disabled.TwoWayLeftTurn = false;
          this.disabled.PedestrianRefugeIsland = false;
          this.disabled.Boulevard = false;
          this.disabled.CenterLine = false;
          this.disabled.CenterRunningTransitLaneCenterBoarding = false;
          this.disabled.CenterRunningTransitLaneSideBoarding = false;
          this.disabled.Infrastructure = false;
          this.disabled.RainGarden = false;
          this.disabled.Swale = false;
          this.disabled.PermeablePaving = false;
          if(this.totalWidth ==0){
            this.centerLineBool = true;
          }
          break;
        case "Two-way left-turn Lane":
        case "Centre Running Transit Lane - Centre Boarding":
        case "Centre Running Transit Lane – Side Boarding":
        case "Pedestrian Refuge Island":
        case "Boulevard (Vegetation)":
        case "Centre Line":
        case "Infrastructure":
        case "Swale":
        case "Rain Garden":
        case "Permeable Paving":
          this.disableAll();
          this.commercialExtensionVarient = "outline-secondary";
          this.residentialVarient = "outline-secondary";
          this.commercialVarient = "outline-secondary";
          this.furnitureVarient = "outline-secondary";
          this.bufferVarient = "outline-success";
          this.cycleVarient = "outline-primary";
          this.transitVarient = "outline-warning";
          this.centertransitVarient = "outline-warning";
          this.curbLaneVarient = "outline-secondary";
          this.passingLaneVarient = "outline-secondary";
          this.largeVehicleLaneVarient = "outline-secondary";
          this.bidirectionalTravelLaneVarient = "outline-secondary";
          this.turningLaneVarient = "outline-secondary";
          this.freightTravelLaneVarient = "outline-secondary";
          this.parkingLaneVarient = "outline-secondary";
          this.medianVarient = "outline-info";
          this.greenVarient = "outline-success";
          break;
      }

    },
    updateTotal(num, colour, title) {
      num = num*10/10;
      console.log(title);
      this.slideHide = !this.slideHide;
      let height = num * this.ratio2D;
      if (num > this.totalWidth) {
        alert("no more room");
      } else {
        //this.width = num * this.width;
        let width = (this.width * num)*10/10;
        this.tempWidth.push(num);
        //this.totalWidth = Math.round((this.totalWidth - num) * 10) / 10;
        this.totalWidth = ((this.totalWidth*10) - (num*10))/10;
        //console.log("tempwidth is " + this.tempWidth[this.counter]);
        //this.counter++;
        
        if (this.offsetList.length == 0) {
          console.log("Offsetlist = 0");
          this.offsetList.push({
            title: title,
            x: 0,
            fill: colour,
            width: width // this.window.width * this.ratioSvg  width of the building
          });
          console.log(this.offsetList.color);
        } else {
          console.log("Offsetlist != 0");
          const lastOffset = this.offsetList[this.offsetList.length - 1];
          this.offsetList.push({
            x: lastOffset.x + lastOffset.width,
            title: title,
            fill: colour,
            width: width
          });
        }
      }
      
    },
    svgDelete() {
      // this.undoDelete.splice(0, this.undoDelete.length);
      //this.undoDelete = this.offsetList;
      this.centerLineBool = false;
      if (this.offsetList.length == 0){
        alert("Youre at the beginning"); 
      } 
      else if (this.offsetList.length == 1) this.rowReset();
      else {

        this.undoDelete.push(this.offsetList[this.offsetList.length - 1]);

        this.undoCounter = this.offsetList.length;
        this.dementionReset();
        const lastOffset = this.offsetList[this.offsetList.length - 1];
        this.offsetList.pop(lastOffset);
        this.counter--;
        //this.totalWidth = (((this.totalWidth*10)/10) + (((lastOffset.width/this.width)*10)/10));
        this.totalWidth = parseFloat((((this.totalWidth*10) + ((lastOffset.width*10)/(this.width*10))*10)/10).toFixed(1));
        this.tempWidth.pop();
        this.streetElementData.pop();
        this.smartButtons(this.streetElementData[this.streetElementData.length-1]);
        //this.totalWidth += tempWidth;
      }
    },
    rowReset() {
      for(var i=0;i<this.offsetList.length;i++){
        this.undoReset.push(this.offsetList[i]);
      }
      this.dementionReset();
      
      if(this.getData.row==null||this.getData.row==0){
        this.totalWidth = 15;
        this.width = 50;
      }  
      else{
        console.log(this.getData.row);
        this.totalWidth=this.getData.row;
      }
      //this.totalWidth = parseFloat((((this.getData.RoadWidth/2)+this.sidewalkWidth)+0.1).toFixed(1));
      //var removeIndex = apps.map(function(item) { return item.id; }).indexOf(37);
      

      //delete this.populateValues;
      // for (var attr in this.populateValues) {
      //   delete this.populateValues[attr];
      //   console.log("PPPPPPPPPPP " + this.populateValues);
      // }
      // console.log("PPPPPPPPPPP " + this.populateValues.fill);
      this.offsetList.splice(0, this.offsetList.length);
      this.streetElementData.splice(0, this.streetElementData.length);
      this.smartButtons();
      // this.offsetList2D.splice(0, this.offsetList2D.length);
      // for (var i = 0; i < this.buttonArray.length; i++) {
      //   this.buttonArray[i].disabled = true;
      // }
      // this.buttonArray[0].disabled = false;
    }
  }
};
</script>
<style>
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ 
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}
#modal{
  height: auto;
  overflow-x: auto;
}
.test{
  background-color: black;
}
#buttons{
  padding-right: 3em;
}
#controls{
  position: fixed;
  left: 90%;
  top:7%;
}
.buttonStyle {
  margin-top: 0.15em;
  margin-bottom: 0.15em;
  min-width: 12em;
  width: 80%; 
  /* was 30% */
}
#commercialExtensionON {
  margin-top: 0.15em;
  margin-bottom: 0.15em;
  min-width: 12em;
  width: 100%; 
  /* was 30% */
}
.line1 {
  stroke: green;
  stroke-width: 100;
  stroke-linecap: round;
  stroke-dasharray: 1, 250;
  stroke-dashoffset: 3;
}
.svgOverlay {
  height: 30%;
  width: 100%;
  overflow-x: hidden;
}

.svgOverlayAnime-enter-active {
  transition: all 0.3s ease;
}

.svgOverlayAnime-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}

.svgOverlayAnime-enter,
    .indicatorAnime-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
    
 {
  transform: translateY(600px);
  opacity: 0;
}

#map {
  background-color: white;
  margin: 0;
  padding: 1%;
  height: 30%;
  width: 100%;
}

#elementPicker {
  position: absolute;
  left: 72%;
  box-shadow: 5px 10px 10px #888888;
  background-color: white;
  border: 1px solid black;
  width: 25%;
  height: 88%;
  margin: 1%;
  margin-top: 0%;
  padding: 3%;
  overflow-x: hidden;
}

#navbar {
  background-color: #694393;
}

#crossSection {
  margin: 1%;
  box-shadow: 5px 0px 10px #888888;
  width: 70%;
  background-color: rgb(199, 223, 232);
  text-align: center;
}
#planView {
  border: 1px solid black;
  position: absolute;
  box-shadow: 5px 10px 10px #888888;
  height: 45%;
  width: 70%;
  margin-top: 0%;
  margin-left: 1%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.indicatorAnime-enter-active {
  transition: all 0.3s ease;
}

.indicatorAnime-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}

.indicatorAnime-enter,
    .indicatorAnime-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
    
 {
  transform: translateX(200px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
    
 {
  transform: translateY(200px);
  opacity: 0;
}
.street-fade-enter-active {
  transition: all 0.3s ease;
}
.street-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.street-fade-enter, .street-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
