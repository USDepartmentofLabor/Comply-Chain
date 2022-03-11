import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Company reputation </h1>
                <p>
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                        >
                    Research
                    </a>
                    &nbsp;finds that consumers are increasingly attuned to issues of labor abuse,
                    particularly in industries such as apparel, electronics, footwear, and agriculture,
                    especially chocolate and coffee products. In addition, with the explosion of social
                    media, expos&eacute;s revealing child labor, forced labor or
                    other degrading working conditions in a supply chain can
                    more easily reach consumers and damage a brand&rsquo;s
                    reputation and adversely impact sales or stock prices.
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
