import React from "react";
import { isIOS } from "../utils/platform";
import LocalizedBreadcrumb from "./LocalizedBreadcrumb";
import Routes from "./routes";

var currentLang = document.documentElement.lang;

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
                      extra={currentLang==="es"?"Atras":currentLang==="fr"?"Retour":currentLang==="ms"?"Utama":"Back"}
                  />
              )
            : undefined
    }
];
