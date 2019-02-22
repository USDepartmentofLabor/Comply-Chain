import React from "react";
import Routes from "./routes";

const StepBreadcrumb = ({ match }) => {
    return <span>Step {match.params.step}</span>;
};

export const breadcrumbs = [
    {
        path: Routes.Step.path,
        breadcrumb: StepBreadcrumb
    }
];
