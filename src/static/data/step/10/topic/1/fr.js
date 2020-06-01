import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Formes de comptes-rendus publics</h1>
                <p>
                    Les comptes-rendus publics d&rsquo;une entreprise au sujet
                    de son programme de conformit&eacute; sociale, y compris les
                    processus d&apos;audit et de contr&ocirc;le et autres
                    &eacute;l&eacute;ments du programme discut&eacute;s dans les
                    sections pr&eacute;c&eacute;dentes, peuvent se
                    pr&eacute;senter sous forme d&apos;un rapport autonome ou
                    faire partie d&apos;un rapport plus vaste sur la
                    durabilit&eacute; ou la responsabilit&eacute; sociale de
                    l&apos;entreprise (RSE). Il peut &ecirc;tre publi&eacute;
                    sous forme imprim&eacute;e et/ou sur le site Web d&rsquo;une
                    entreprise; certaines entreprises publient un rapport
                    annuel ou un autre rapport r&eacute;gulier sous forme
                    imprim&eacute;e et font des mises &agrave; jour en ligne.
                </p>
                <p>
                    Les rapports devraient &eacute;galement inclure une
                    communication p&eacute;riodique avec les parties prenantes
                    sur des questions importantes qui surviennent
                    inopin&eacute;ment ; ce type de rapport devrait &ecirc;tre
                    r&eacute;alis&eacute; en fonction des besoins et des
                    circonstances. Quel que soit le format choisi, les rapports
                    devraient &ecirc;tre r&eacute;guliers et publi&eacute;s en
                    temps opportun, et vous devriez vous assurer que les
                    informations essentielles sont &agrave; la disposition de
                    toute une gamme de publics, y compris des publics qui
                    n&apos;ont peut-&ecirc;tre pas acc&egrave;s &agrave;
                    internet.
                </p>
                <OwnWords>
                        <h2>
                            <OwnWords.Icon alt="Feedback"/>{" "}
                            <strong>Dans leurs propres mots</strong>&nbsp;{": "}
                        </h2>
                        <p>
                            PLACEHOLDER FOR TEXT
                        </p>
                    </OwnWords>
            </div>
        </StaticData>
    );
};

export default fr;
