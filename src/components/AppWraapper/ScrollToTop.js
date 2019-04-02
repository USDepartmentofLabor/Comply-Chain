import { Component } from "react";
import { withRouter } from "react-router-dom";
import { getHash } from "../../modules/utils";
import PropTypes from "prop-types";
import { isBrowser } from "../../modules/utils/platform";

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

            if (lastPageUrl) {
                const { history } = this.props;
                this.setState({ loadingLastPage: true });
                history.push(lastPageUrl);
            }
        }
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
    location: PropTypes.object.isRequired
};
export default withRouter(ScrollToTop);
