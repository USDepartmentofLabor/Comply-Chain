import { Home, Steps, Step, Topic } from "../../routes";

const Routes = {
    Home: {
        path: "/",
        component: Home,
        exact: true,
        getPath: () => {
            return "/";
        }
    },
    Steps: {
        path: "/steps",
        component: Steps,
        exact: true,
        getPath: () => {
            return "/steps";
        }
    },
    Step: {
        path: "/steps/:step",
        component: Step,
        exact: true,
        getPath: params => {
            return `/steps/${params.step}`;
        }
    },
    Topic: {
        path: "/steps/:step/topic/:topic",
        component: Topic,
        exact: true,
        getPath: params => {
            return `/steps/${params.step}/topic/${params.topic}`;
        }
    }
};

export default Routes;
