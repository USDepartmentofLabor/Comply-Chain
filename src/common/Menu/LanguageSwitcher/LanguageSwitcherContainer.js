import AbstractLanguageSwitcherContainer from "./AbstractLanguageSwitcherContainer";
import { strings } from "../../../modules/config/strings";
import { withRouter } from "react-router-dom";
import { matchPath } from "react-router";

class LanguageSwitcherContainer extends AbstractLanguageSwitcherContainer {
    onLanguageChange = (e, data) => {
        const { history } = this.props;
        const lang = data.value;
        strings.setLanguage(lang);

        const match = matchPath(history.location.pathname, {
            path: "/:lang/*"
        });
        let url = match && match.params && match.params[0];
        url = "/" + lang + "/" + url;

        history.push(url);
    };
}

export default withRouter(LanguageSwitcherContainer);
