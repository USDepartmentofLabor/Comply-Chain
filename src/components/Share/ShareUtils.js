export const getPageTitle = (location, match, localizor) => {
    let title = undefined;
    if (match.params.step) {
        title = localizor.strings.steps[match.params.step].title;
        if (match.params.topic) {
            title =
                localizor.strings.steps[match.params.step].topics[
                    match.params.topic
                ].title;
        }
    } else {
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
