import React from "react";
import OwnWords from "../../../../../../components/OwnWords";

import StaticData from "../../../../../../components/StaticData";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Recrutement et fidélisation du personnel</strong>
                </h1>
                <p>
                    Selon un nombre croissant d&apos;
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                        >
                    &eacute;tudes,
                    </a>
                    les
                    employ&eacute;s, surtout les plus jeunes,
                    pr&eacute;f&egrave;rent de plus en plus travailler pour des
                    entreprises soucieuses de leur responsabilit&eacute; sociale
                    et environnementale, ce dont ils tiennent compte dans leur
                    choix futur de postes.
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

export default fr;
