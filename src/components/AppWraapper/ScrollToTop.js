import PropTypes from "prop-types";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { storage } from "../../modules/storage";
import { getHash } from "../../modules/utils";
import { isBrowser } from "../../modules/utils/platform";
import { withLanguageContext } from "../Language";

class ScrollToTop extends Component {
    state = { loadingLastPage: false };

    componentDidMount() {
        if (!isBrowser()) {
            const lastPageUrl = localStorage.getItem("page");

            // saves scroll position every 5 seconds.
            // reason being there are no good ways to determine when the mobile app closes or is suspended
            // on both Android and iOS. Since we want to save and restore the users position
            // a compromise of saving every X amount of seconds was made
            setInterval(this.saveScrollPosition, 5000);

            window.addEventListener("statusTap", () => {
                this.scrollTo(0, 0);
            });

            if (lastPageUrl) {
                const { history } = this.props;
                this.setState({ loadingLastPage: true });
                history.push(lastPageUrl);
            }
        }
        this.props.history.listen((location, action) => {
            storage.accordion.removeAccordionId();
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            if (this.state.loadingLastPage) {
                if (!isBrowser()) {
                    const scrollY = localStorage.getItem("scrolly") || 0;
                    this.scrollTo(0, scrollY);
                    this.setState({ loadingLastPage: false });
                    return;
                }
            }
            const id = getHash();

            if (!id) {
                this.scrollTo(0, 0);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }

            if (!isBrowser()) {
                localStorage.setItem("page", this.props.location.pathname);
                this.saveScrollPosition();
            }
        } else if (
            prevProps.localizor.language !== this.props.localizor.language
        ) {
            const scrollY = localStorage.getItem("scrolly") || 0;
            this.scrollTo(0, scrollY);
        }
    }

    scrollTo = (x, y) => {
        const main = document.getElementById("main");
        if (main) {
            main.scrollTo(x, y);
        } else {
            window.scrollTo(x, y);
        }
    };

    saveScrollPosition = () => {
        const main = document.getElementById("main");
        localStorage.setItem("scrolly", main.scrollTop || window.scrollY);
    };

    render() {
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    localizor: PropTypes.object.isRequired
};
export default withRouter(withLanguageContext(ScrollToTop));
