import { Home, Steps, Step, Topic } from "../../routes";

const Routes = {
    Home: {
        path: "/",
        component: Home,
        exact: true
    },
    Steps: {
        path: "/steps",
        component: Steps,
        exact: true
    },
    Step: {
        path: "/steps/:step",
        component: Step,
        exact: true
    },
    Topic: {
        path: "/steps/:step/topic/:topic",
        component: Topic,
        exact: true
    }
};

export default Routes;
