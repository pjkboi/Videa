import Vue from "vue";
import Router from "vue-router";
import App from "../App.vue";
import RoadwayDesigner from "../RoadwayDesigner.vue";
import ProjectPicker from "../projectPicker.vue";
import Dashboard from "../Dashboard.vue";
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/roadway-designer",
            name: "RoadwayDesigner",
            component: RoadwayDesigner
        },
        {
            path:"/Dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path:"/",
            name:"ProjectPicker",
            component: ProjectPicker
        },
    ]
});