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
                      string={"Back"}
                      extra={"Back"}
                  />
              )
            : undefined
    }
];
