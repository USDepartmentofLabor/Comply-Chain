import { Component } from "react";
import { withRouter } from "react-router-dom";
import { getHash } from "../../modules/utils";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            const id = getHash();

            if (!id) {
                window.scrollTo(0, 0);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
