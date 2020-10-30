import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    &Eacute;valuer les incidences et les facteurs de risques
                    externes
                </h1>
                <p>
                    Les risques et les incidences
                    «&nbsp;ext&eacute;rieurs&nbsp;» englobent ceux qui sont
                    li&eacute;s aux op&eacute;rations d&rsquo;une entreprise,
                    &agrave; ses produits ou ses services li&eacute;s par des
                    relations commerciales, sur lesquelles vous pouvez et devez
                    exercer votre influence, et les risques que vous
                    ma&icirc;trisez moins, par exemple ceux qui sont li&eacute;s
                    aux lois nationales ou aux &eacute;v&eacute;nements dans les
                    environnements op&eacute;rationnels plus larges.&nbsp;
                </p>
                <p>
                    Si une entreprise &eacute;tudie la possibilit&eacute; de
                    s&apos;approvisionner dans un nouveau pays ou une nouvelle
                    r&eacute;gion g&eacute;ographique, elle aura sans doute
                    d&eacute;j&agrave; effectu&eacute; d&apos;autres formes
                    d&apos;&eacute;valuation des risques.
                    L&apos;&eacute;valuation des risques concernant les droits
                    de l&apos;homme et la conformit&eacute; sociale devrait
                    faire partie int&eacute;grante de ces processus. Cette
                    question est abord&eacute;e plus pleinement au chapitre
                    suivant,{" "}
                    <em>
                            Collecte d&apos;informations sur les risques et les
                            incidences

                    </em>
                    . L&apos;&eacute;valuation devrait comporter
                    l&apos;identification des personnes ou des groupes qui
                    pourraient &ecirc;tre touch&eacute;s par les
                    activit&eacute;s de votre entreprise et une pr&eacute;vision
                    des incidences n&eacute;gatives qui pourraient se produire.
                    Cette évaluation devrait également prendre en compte les groupes
                    ou personnes qui peuvent être extrêmement vulnérables à l’exploitation,
                    soit en raison de circonstances personnelles (p. ex. pauvreté ou éducation
                    limitée), soit à cause de la discrimination sociale et légale. Elle
                    devrait également prendre en compte les personnes qui peuvent être
                    dissimulées au public et par conséquent incapables de défendre leur droits,
                    telles que les victimes de viol et de violences sexuelles, les personnes
                    vivant avec le VIH-sida et les travailleurs sans papiers.
                    L&apos;&eacute;valuation devrait, au minimum, comporter des
                    recherches documentaires, des recherches sur le terrain dans
                    le pays ou la communaut&eacute; vis&eacute;, puis un cycle
                    d&apos;audits de r&eacute;f&eacute;rence pr&eacute;alables
                    &agrave; l&apos;approvisionnement pour &eacute;valuer les
                    niveaux actuels de conformit&eacute;. D&apos;autres
                    informations sur la r&eacute;alisation de ce type
                    d&apos;audits se trouvent &agrave;{" "}
                    <Link to="/steps/5">
                        cinquième étape, Surveiller la conformité
                    </Link>
                </p>
                <p>
                    Si une entreprise dispose déjà de chaînes d’approvisionnement bien en place au sein
                    desquelles elle dispose de relations d’affaires relativement stables, vous devriez évaluer
                    les incidences des acteurs de ces chaînes et les risques qui leur sont associés. Il conviendrait
                    pour ce faire de commencer par un exercice de cartographie des chaînes d&apos;approvisionnement,
                    ainsi qu’une collecte d’informations sur les fournisseurs ayant le plus besoin de contrôle, des
                    recherches documentaires, des recherches sur le terrain dans les zones ciblées et un cycle d’audits
                    de référence de ces fournisseurs pour évaluer leur niveau actuel de conformité. Ces données de
                    référence vous permettront d&apos;identifier les domaines potentiels d&apos;amélioration des fournisseurs.
                    D&apos;autres informations sur la réalisation de ce type d&apos;audits se trouvent à la{" "}
                    <Link to="/steps/5">
                        cinquième étape, Surveiller la conformité
                    </Link>
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
