import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Employee recruitment and retention</strong>
                </h1>
                <p>
                    A growing body of&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                    >
                    research
                    </a>
                    &nbsp;shows that employees,
                    particularly younger ones, increasingly prefer to work for
                    companies that are socially and environmentally responsible,
                    and factor this into future employment decisions.
                </p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                        {": "}
                    </h2>
                    <p>
                        Placeholder
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default en;
