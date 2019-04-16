import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Communiquer le code</h1>
                <p>
                    Une communication efficace est un aspect important de tout
                    programme de conformit&eacute; sociale. De nombreuses
                    entreprises ont appris que de simples audits des lieux de
                    travail et r&eacute;parations des violations ne
                    r&egrave;glent pas un grand nombre des probl&egrave;mes du
                    travail sur les sites de r&eacute;colte, d&apos;exploitation
                    mini&egrave;re et de production, dans les installations de
                    transformation et sur les autres lieux de travail. Une
                    formation et une communication permanentes, le renforcement
                    des capacit&eacute;s et l&apos;accent mis sur le
                    perfectionnement constant se sont
                    r&eacute;v&eacute;l&eacute;s &ecirc;tre la voie la plus
                    efficace vers des progr&egrave;s durables dans le sens
                    d&apos;une meilleure conformit&eacute;.
                </p>
                <p>
                    <Link to="/steps/4">
                        La 4<sup>e</sup>&nbsp;&eacute;tape&nbsp;: communiquer et
                        former l&rsquo;ensemble de votre cha&icirc;ne
                        d&rsquo;approvisionnement
                    </Link>{" "}
                    d&eacute;taillera les tenants et les aboutissants de la
                    communication de votre code et de votre syst&egrave;me de
                    conformit&eacute; &agrave; l&rsquo;intention de
                    diff&eacute;rents publics : vos propres employ&eacute;s, vos
                    actionnaires, vos fournisseurs, les cadres et les
                    contrema&icirc;tres de vos fournisseurs, les travailleurs
                    dans les &eacute;tablissements de l&apos;ensemble de votre
                    cha&icirc;ne d&apos;approvisionnement, les pouvoirs publics,
                    les organisations de travailleurs, les groupes
                    communautaires et autres. Il y sera &eacute;galement
                    pr&eacute;cis&eacute; comment rendre votre code plus
                    accessible pour les parties prenantes en &eacute;vitant le
                    jargon technique inutile et en fournissant une traduction
                    dans diff&eacute;rentes langues.
                </p>
                <p>
                    <em>
                        *Remarque&nbsp;: Les r&eacute;f&eacute;rences &agrave;
                        des soci&eacute;t&eacute;s et entit&eacute;s non
                        gouvernementales sp&eacute;cifiques dans ce guide sont
                        &agrave; des fins d&rsquo;information uniquement afin de
                        d&eacute;montrer les bonnes pratiques reconnues &agrave;
                        l&rsquo;&eacute;chelle internationale, &agrave; la date
                        de lancement de l&rsquo;appli. Toute
                        r&eacute;f&eacute;rence &agrave; ces entit&eacute;s ne
                        saurait constituer une approbation officielle de ces
                        derni&egrave;res, de leurs produits ou de leurs services
                        par le d&eacute;partement du Travail des
                        &Eacute;tats-Unis,{" "}
                    </em>
                    <em>
                        et leur inclusion dans cette appli ne saurait &ecirc;tre
                        interpr&eacute;t&eacute;e comme un examen exhaustif des
                        pratiques de ces entit&eacute;s dans tous les domaines
                    </em>
                    <em>.</em>
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
