import PropTypes from "prop-types";
import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import { withRouter } from "react-router-dom";
import Bookmarkable from "../../components/Bookmarkable";

class IndenturedProductList extends Component {
    render() {
        const { localizor, location } = this.props;
        const IndenturedProductListInfo = localizor.strings.info.indenturedProductList.content;
        return (
            <Bookmarkable
                titleString="info.indenturedProductList.title"
                url={location.pathname}
            >
                <IndenturedProductListInfo />
            </Bookmarkable>
        );
    }
}

IndenturedProductList.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(withLanguageContext(IndenturedProductList));
