import { withRouter } from "react-router-dom";
import { strings } from "../../../modules/config/strings";
import AbstractLanguageSwitcherContainer from "./AbstractLanguageSwitcherContainer";

class LanguageSwitcherContainer extends AbstractLanguageSwitcherContainer {
    onLanguageChange = (e, data) => {
        const { history } = this.props;
        const lang = data.value;
        strings.setLanguage(lang);
        history.push(`${history.location.pathname}?lang=${lang}`);
    };
}

export default withRouter(LanguageSwitcherContainer);
