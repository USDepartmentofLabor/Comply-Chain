import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

export const PocketButton = ({ lang, count }) => (
    <div>
        <Helmet>
            <script
                src="https://widgets.getpocket.com/v1/j/btn.js?v=1"
                async={true}
            />
        </Helmet>
        {/* eslint-disable-next-line  */}
        <a
            data-pocket-label="pocket"
            data-pocket-count={count}
            className="pocket-btn"
            data-lang={lang}
        />
    </div>
);

PocketButton.propTypes = {
    lang: PropTypes.string.isRequired,
    count: PropTypes.oneOf(["none", "horizontal", "vertical"]).isRequired
};
