import React from "react";
import LocalizedBreadcrumb from "./LocalizedBreadcrumb";
import Routes from "./routes";

export const breadcrumbs = [
    {
        path: Routes.Home.path,
        breadcrumb: () => <LocalizedBreadcrumb string={"general.home"} />
    }
];
