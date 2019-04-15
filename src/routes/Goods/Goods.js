import React, { Component } from "react";
import { withLanguageContext } from "../../components/Language";
import PropTypes from "prop-types";

class Goods extends Component {
    render() {
        const { localizor } = this.props;
        const GoodsInfo = localizor.strings.info.goods.content;
        return <GoodsInfo />;
    }
}

Goods.propTypes = {
    localizor: PropTypes.object.isRequired
};

export default withLanguageContext(Goods);
