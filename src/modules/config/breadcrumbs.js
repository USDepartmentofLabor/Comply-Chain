import React from "react";
import Routes from "./routes";

const StepBreadcrumb = ({ match }) => {
    return <span>Step {match.params.step}</span>;
};

const TopicBreadcrumb = ({ match }) => {
    return <span>Topic {match.params.topic}</span>;
};

export const breadcrumbs = [
    {
        path: Routes.Step.path,
        breadcrumb: StepBreadcrumb
    },
    {
        path: Routes.Topic.path,
        breadcrumb: TopicBreadcrumb
    },
    {
        path: `${Routes.Step.path}/topic`,
        breadcrumb: null
    }
];
