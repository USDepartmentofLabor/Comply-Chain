import {
    Home,
    Steps,
    Step,
    Topic,
    About,
    Basics,
    KeyResources,
    WhatAre,
    WhyDevelop
} from "../../routes";

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
    },
    About: {
        path: "/about",
        component: About,
        exact: true
    },
    Basics: {
        path: "/basics",
        component: Basics,
        exact: true
    },
    KeyResources: {
        path: "/key-resources",
        component: KeyResources,
        exact: true
    },
    WhatAre: {
        path: "/what-are",
        component: WhatAre,
        exact: true
    },
    WhyDevelop: {
        path: "/why-develop",
        component: WhyDevelop,
        exact: true
    }
};

export default Routes;
