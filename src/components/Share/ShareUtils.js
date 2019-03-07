import { matchPath } from "react-router";
import Routes from "../../modules/config/routes";

export const getPageTitle = (location, localizor) => {
    let title = undefined;
    const match =
        matchPath(location.pathname, {
            path: Routes.Topic.path,
            strict: false
        }) ||
        matchPath(location.pathname, {
            path: Routes.Step.path,
            strict: false
        }); // check topic and step paths

    if (match) {
        const step = match.params.step && match.params.step - 1;
        const topic = match.params.topic && match.params.topic - 1;
        if (step >= 0) {
            title = localizor.strings.steps[step].title;
            if (topic >= 0) {
                title = localizor.strings.steps[step].topics[topic].title;
            }
        }
    } else {
        // if not a topic or step page then must be an info page

        // grab the route and convert it to an object key in order to grab the title from the localized data
        const route = location.pathname
            .split("/")[1]
            .toLowerCase()
            .split("-")
            .map((split, i) => {
                if (i > 0) {
                    return split.charAt(0).toUpperCase() + split.slice(1);
                }
                return split;
            })
            .join("");

        title =
            (localizor.strings.info[route] &&
                localizor.strings.info[route].title) ||
            undefined;
    }

    return title;
};
