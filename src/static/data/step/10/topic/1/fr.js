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
                    Les comptes-rendus publics d&rsquo;une entreprise au sujet de son programme de conformit&eacute; s
                    ociale, y compris les processus d'audit et de contr&ocirc;le et autres &eacute;l&eacute;ments du 
                    programme discut&eacute;s dans les sections pr&eacute;c&eacute;dentes, peuvent se pr&eacute;senter 
                    sous forme d'un rapport autonome ou faire partie d'un rapport plus vaste sur la durabilit&eacute; 
                    ou la responsabilit&eacute; sociale de l'entreprise (RSE). Il peut &ecirc;tre publi&eacute; sous 
                    forme imprim&eacute;e et/ou sur le site Web d&rsquo;une entreprise ; certaines entreprises 
                    publient un rapport annuel ou un autre rapport r&eacute;gulier sous forme imprim&eacute;e et 
                    font des mises &agrave; jour en ligne.
                </p>
                <p>
                    Les rapports devraient &eacute;galement inclure une communication p&eacute;riodique avec les parties prenantes 
                    sur des questions importantes qui surviennent inopin&eacute;ment ; ce type de rapport devrait &ecirc;tre 
                    r&eacute;alis&eacute; en fonction des besoins et des circonstances. Quel que soit le format choisi, les rapports 
                    devraient &ecirc;tre r&eacute;guliers et publi&eacute;s en temps opportun, et vous devriez vous assurer que les 
                    informations essentielles sont &agrave; la disposition de toute une gamme de publics, y compris des publics qui 
                    n'ont peut-&ecirc;tre pas acc&egrave;s &agrave; internet.
                </p>
                <OwnWords>
                        <h2>
                            <OwnWords.Icon alt="Feedback"/>{" "}
                            <strong>
                                Dans leurs propres mots: &Eacute;tudes pays sur le sucre de The Coca-Cola Company* en 
                                mati&egrave;re de travail des enfants, de travail forc&eacute; et de droits fonciers
                            </strong>
                        </h2>
                        <p>
                            &laquo; L&rsquo;&eacute;tude pays est un exercice permettant &agrave; The Coca-Cola Company 
                            de mieux comprendre sa cha&icirc;ne d'approvisionnement en sucre et de donner une 
                            visibilit&eacute; &agrave; la mani&egrave;re dont les soci&eacute;t&eacute;s 
                            d&rsquo;approvisionnement en sucre de Coca-Cola et leurs partenaires de mise en bouteille 
                            g&egrave;rent les risques fondamentaux. Ces &eacute;tudes ne constituent pas un audit mais 
                            des travaux de recherche et se concentrent sur trois &eacute;l&eacute;ments cl&eacute;s : 
                            le travail des enfants, le travail forc&eacute; et les droits fonciers, qui sont 
                            consid&eacute;r&eacute;s comme &eacute;tant des facteurs &agrave; haut risque au sein de la 
                            cha&icirc;ne d'approvisionnement agricole de Coca-Cola. &raquo;
                        </p>

                        <p>
                            Pour en savoir plus :{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.coca-colacompany.com/content/dam/journey/us/en/policies/pdf/human-workplace-rights/addressing-global-issues/sugar-study-methodology-overview.pdf"
                            title="m&eacute;thodologie"
                        >
                            m&eacute;thodologie 
                        </a>{" "}
                            des &eacute;tudes pays de Coca-Cola et{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.coca-colacompany.com/policies-and-practices/country-sugar-studies"
                            title="&eacute;tudes pays sur le sucre"
                        >
                            &eacute;tudes pays sur le sucre
                        </a>{" "}
                            publi&eacute;es &agrave; ce jour [en anglais].
                        </p>
                    </OwnWords>
            </div>
        </StaticData>
    );
};

export default fr;
