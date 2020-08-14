import React from "react";
import { isIOS } from "../utils/platform";
import LocalizedBreadcrumb from "./LocalizedBreadcrumb";
import Routes from "./routes";

export const breadcrumbs = [
    {
        path: Routes.Home.path,
        breadcrumb: () => <LocalizedBreadcrumb string={"general.home"} />
    },
    {
        path: Routes.Step.path,
        breadcrumb: isIOS()
            ? ({ match }) => (
                  <LocalizedBreadcrumb
                      string={"general.step"}
                      extra={match.params.step}
                  />
              )
            : undefined
    },
    {
            path: Routes.Topic.path,
            breadcrumb: () => <LocalizedBreadcrumb string={"Back"} />
        }
];
