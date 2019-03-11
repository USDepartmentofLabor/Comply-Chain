import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

export const PocketButton = ({ lang }) => (
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
            data-pocket-count="none"
            className="pocket-btn"
            data-lang={lang}
        />
    </div>
);

PocketButton.propTypes = {
    lang: PropTypes.string.isRequired
};
