import React from "react";
import Routes from "./routes";

const StepBreadcrumb = ({ match }) => {
    return <span>Step {match.params.step}</span>;
};

export const breadcrumbs = [
    {
        path: `/:lang${Routes.Step.path}`,
        breadcrumb: StepBreadcrumb
    },
    {
        path: "/:lang/",
        breadcrumb: null
    }
];
