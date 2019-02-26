import React from "react";
import { Link } from "react-router-dom";

const fr = () => {
    return (
        <div>
            <h1>
                &Eacute;valuer les incidences et les facteurs de risques
                externes
            </h1>
            <p>
                Les risques et les incidences «&nbsp;ext&eacute;rieurs&nbsp;»
                englobent ceux qui sont li&eacute;s aux op&eacute;rations
                d&rsquo;une entreprise, &agrave; ses produits ou ses services
                li&eacute;s par des relations commerciales, sur lesquelles vous
                pouvez et devez exercer votre influence, et les risques que vous
                ma&icirc;trisez moins, par exemple ceux qui sont li&eacute;s aux
                lois nationales ou aux &eacute;v&eacute;nements dans les
                environnements op&eacute;rationnels plus larges.&nbsp;
            </p>
            <p>
                Si une entreprise &eacute;tudie la possibilit&eacute; de
                s&apos;approvisionner dans un nouveau pays ou une nouvelle
                r&eacute;gion g&eacute;ographique, elle aura sans doute
                d&eacute;j&agrave; effectu&eacute; d&apos;autres formes
                d&apos;&eacute;valuation des risques. L&apos;&eacute;valuation
                des risques concernant les droits de l&apos;homme et la
                conformit&eacute; sociale devrait faire partie int&eacute;grante
                de ces processus. Cette question est abord&eacute;e plus
                pleinement au chapitre suivant,{" "}
                <em>
                    <u>
                        Collecte d&apos;informations sur les risques et les
                        incidences
                    </u>
                </em>
                . L&apos;&eacute;valuation devrait comporter
                l&apos;identification des personnes ou des groupes qui
                pourraient &ecirc;tre touch&eacute;s par les activit&eacute;s de
                votre entreprise et une pr&eacute;vision des incidences
                n&eacute;gatives qui pourraient se produire.
                L&apos;&eacute;valuation devrait, au minimum, comporter des
                recherches documentaires, des recherches sur le terrain dans le
                pays ou la communaut&eacute; vis&eacute;, puis un cycle
                d&apos;audits de r&eacute;f&eacute;rence pr&eacute;alables
                &agrave; l&apos;approvisionnement pour &eacute;valuer les
                niveaux actuels de conformit&eacute;. D&apos;autres informations
                sur la r&eacute;alisation de ce type d&apos;audits se trouvent
                &agrave;{" "}
                <Link to="/step/5">
                    la 5<sup>e</sup>&nbsp;&eacute;tape : surveiller la
                    conformit&eacute;.
                </Link>
            </p>
            <p>
                Si une entreprise dispose d&eacute;j&agrave; de cha&icirc;nes
                d&rsquo;approvisionnement bien en place au sein desquelles elle
                dispose de relations d&rsquo;affaires relativement stables, vous
                devriez &eacute;valuer les incidences des acteurs de ces
                cha&icirc;nes et les risques qui leur sont associ&eacute;s. Il
                conviendrait pour ce faire de commencer par un exercice de
                cartographie des cha&icirc;nes d&apos;approvisionnement, ainsi
                qu&rsquo;une collecte d&rsquo;informations sur les fournisseurs
                ayant le plus besoin de contr&ocirc;le, des recherches
                documentaires, des recherches sur le terrain dans les zones
                cibl&eacute;es et un cycle d&rsquo;audits de
                r&eacute;f&eacute;rence de ces fournisseurs pour &eacute;valuer
                leur niveau actuel de conformit&eacute;. Ces donn&eacute;es de
                r&eacute;f&eacute;rence vous permettront d&apos;identifier les
                domaines potentiels d&apos;am&eacute;lioration des fournisseurs.
                D&apos;autres informations sur la r&eacute;alisation de ce type
                d&apos;audits se trouvent &agrave;{" "}
                <Link to="/step/5">
                    la 5<sup>e</sup>&nbsp;&eacute;tape : surveiller la
                    conformit&eacute;.
                </Link>
            </p>
        </div>
    );
};

export default fr;
