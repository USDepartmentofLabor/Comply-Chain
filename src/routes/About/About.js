import PropTypes from "prop-types";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";
import { withLanguageContext } from "../../components/Language";

class About extends Component {
    componentWillUpdate(){
        document.getElementById("brand-strip-container").setAttribute("tabindex","-1")
        document.getElementById("navbar-left-items")[0].getElementsByTag("a")[0].setAttribute("tabindex","-1")
        document.getElementById("menu-btn").setAttribute("tabindex","-1")
        document.getElementById("main").setAttribute("tabindex","0")
    }
    render() {
        const { localizor, location } = this.props;
        const AboutInfo = localizor.strings.info.about.content;
        return (
            <Bookmarkable
                titleString="info.about.title"
                url={location.pathname}
            >
                <AboutInfo />
            </Bookmarkable>
        );
    }
}

About.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(About));
