import {
    About,
    Bookmarks,
    Home,
    KeyResources,
    Search,
    Step,
    Topic,
    WhatAre,
    Findings,
    Goods,
    IndenturedProductList
} from "../../routes";

const Routes = {
    Home: {
        path: "/",
        component: Home,
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
    Bookmarks: {
        path: "/bookmarks",
        component: Bookmarks,
        exact: true
    },
    Search: {
        path: "/search",
        component: Search,
        exact: true
    },
    Findings: {
        path: "/findings",
        component: Findings,
        exact: true
    },
    Goods: {
        path: "/goods",
        component: Goods,
        exact: true
    },
    IndenturedProductList: {
            path: "/indenturedProductList",
            component: IndenturedProductList,
            exact: true
        }
};

export default Routes;
