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
                <h1>L&apos;&eacute;quipe charg&eacute;e des rapports</h1>
                    <p>
                        Dresser des plans pour la production de rapports d&eacute;pend dans une certaine mesure de la fr&eacute;quence de 
                        vos rapports et de la forme sous laquelle ils se pr&eacute;sentent. Un rapport annuel officiel exige des 
                        comp&eacute;tences diff&eacute;rentes de celles n&eacute;cessaires &agrave; une mise &agrave; jour p&eacute;riodique 
                        de donn&eacute;es sur le Web, mais tous deux exigent un important investissement de temps et de ressources.
                    </p>
                    <p>
                        L'&eacute;quipe de conformit&eacute; sociale devrait d&eacute;signer une personne qui dirigera le processus de compte 
                        rendu, et les autres membres de l'&eacute;quipe seront charg&eacute;s de lui pr&ecirc;ter main forte. Cette personne 
                        assurera la coordination avec l'&eacute;quipe et avec d'autres services de l'entreprise. Il devrait y avoir des points 
                        de contact dans toute l'entreprise pour fournir un retour d&rsquo;information et pour r&eacute;viser le rapport de 
                        sorte qu'il refl&egrave;te l'int&eacute;gration de la conformit&eacute; sociale dans toute l'entreprise, notamment les 
                        d&eacute;partements g&eacute;n&eacute;ralement pas associ&eacute;s &agrave; la conformit&eacute; sociale comme le 
                        marketing et la finance.
                    </p>
                    <p>
                        D'autres entreprises passent un contrat avec un prestataire de service ext&eacute;rieur charg&eacute; d'&eacute;laborer 
                        le rapport. Les informations sont fournies &agrave; ce prestataire de service par les unit&eacute;s pertinentes au sein 
                        de l'entreprise. Le risque de cette approche : produira-t-elle la m&ecirc;me qualit&eacute; et profondeur de 
                        collaboration pendant la r&eacute;daction du rapport?
                    </p>
                    <p>
                        Certaines entreprises ont des parties prenantes ext&eacute;rieures qui remplissent les fonctions de conseillers 
                        aupr&egrave;s de l'&eacute;quipe ou qui en font elles-m&ecirc;mes partie. Dans ce cas, il faudrait que ce soient 
                        des personnes poss&eacute;dant une exp&eacute;rience et des connaissances de la conformit&eacute; sociale, mais 
                        qui viendront de diff&eacute;rents contextes ou points de vue, autres que ceux des autres membres de l'&eacute;quipe. 
                        De plus, il pourrait &ecirc;tre utile d'avoir des lecteurs ext&eacute;rieurs qui fourniront des commentaires et 
                        des informations en retour au fur et &agrave; mesure de la r&eacute;daction du rapport. Dans un esprit d'ouverture 
                        et de transparence, certaines entreprises ont invit&eacute; des repr&eacute;sentants de syndicats, d'ONG et d'autres 
                        parties prenantes &agrave; voir certaines de leurs observations incluses dans le rapport publi&eacute;, m&ecirc;me 
                        lorsque celles-ci se montraient critiques vis-&agrave;-vis de certains &eacute;l&eacute;ments du programme de 
                        l'entreprise.
                    </p>
                <ExampleInAction id="smallBusiness">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d&apos;action: &Eacute;laboration de rapports dans une petite entreprise
                        </strong>
                    </h2>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.uncommoncacao.com/company"
                                title="Uncommon Cacao"
                            >
                                Uncommon Cacao
                            </a>
                            * est une petite &laquo;{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bcorporation.net/"
                                title="B Corporation"
                            >
                                B Corporation
                            </a>{" "}
                             &raquo; californienne qui se concentre sur la cha&icirc;ne d'approvisionnement du cacao ; elle a publi&eacute; 
                             son septi&egrave;me{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://indd.adobe.com/view/4afb053a-306c-4f52-8612-f77b23c7d466"
                                title="Rapport annuel de transparence en 2018"
                            >
                                Rapport annuel de transparence en 2018
                            </a>.
                             Uncommon Cacao travaille avec pr&egrave;s de 4 000 exploitants agricoles par le biais de collectifs dans sept 
                             pays cacaotiers diff&eacute;rents, qui fournissent plus de 200 chocolatiers artisanaux dans le monde. La 
                             coh&eacute;rence des rapports publics de la soci&eacute;t&eacute; en termes d&rsquo;informations relatives aux 
                             achats et &agrave; l&rsquo;approvisionnement apportent un niveau de transparence &agrave; un secteur qui manque 
                             parfois de d&eacute;tails et de coh&eacute;rence. Ces rapports cr&eacute;ent une reddition de comptes pour 
                             l&rsquo;ensemble des parties prenantes, permettent aux consommateurs comme aux producteurs d&rsquo;avoir 
                             acc&egrave;s &agrave; des donn&eacute;es r&eacute;elles et de fixer des r&eacute;f&eacute;rences en termes de 
                             prix tout au long de la cha&icirc;ne d'approvisionnement mondiale du cacao.
                        </p>

                        <p>
                            Source [en anglais] :{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.uncommoncacao.com/company"
                                title="https://www.uncommoncacao.com/company"
                            >
                                <em>
                                    https://www.uncommoncacao.com/company
                                </em>
                            </a>.
                        </p>
                </ExampleInAction>

                
            </div>
        </StaticData>
    );
};

export default fr;
