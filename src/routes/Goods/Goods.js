import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import Bookmarkable from "../../components/Bookmarkable";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Goods extends Component {
    render() {
        const { localizor, pdf, location } = this.props;
        const GoodsInfo = localizor.strings.info.goods.content;
        return (
            <Bookmarkable
                titleString="info.goods.title"
                url={location.pathname}
                pdf={pdf}
            >
                <GoodsInfo />
            </Bookmarkable>
        );
    }
}

Goods.propTypes = {
    localizor: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pdf: PropTypes.bool
};
export default withRouter(withLanguageContext(Goods));
