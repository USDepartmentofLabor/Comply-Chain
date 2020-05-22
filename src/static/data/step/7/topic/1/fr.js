import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Audits: guide de d&eacute;marrage</h1>
                <p>
                    Les audits sont au c&oelig;ur de la mise en &oelig;uvre
                    d&apos;un syst&egrave;me efficace de conformit&eacute;
                    sociale et devraient &ecirc;tre suivis par leurs
                    r&eacute;sultats, l&apos;&eacute;valuation des
                    donn&eacute;es d&apos;audit, une planification et des
                    activit&eacute;s &agrave; partir de cette &eacute;valuation.
                </p>
                <p>
                    Comme mentionn&eacute; dans{" "}
                    <Link to="/steps/3">
                        la 1<sup>&egrave;re</sup> &eacute;tape: faire
                        participer les parties prenantes et les partenaires
                    </Link>
                    , si vous faites partie d&apos;un groupe sectoriel ou
                    plurisectoriel, ce groupe aura peut-&ecirc;tre
                    d&eacute;j&agrave; des auditeurs form&eacute;s et/ou des
                    documents de formation d&apos;auditeurs. Il pourrait avoir
                    tous les outils d&apos;audit qui correspondent au code de
                    votre groupe. Nombre de ces groupes coordonnent la conduite
                    d&rsquo;audits conjoints de fournisseurs communs ou le
                    partage des rapports d&rsquo;audit.
                </p>
                <p>
                    Apr&egrave;s avoir cibl&eacute; certains domaines de votre
                    cha&icirc;ne d&apos;approvisionnement qui comporteraient des
                    risques plus &eacute;lev&eacute;s et apr&egrave;s avoir
                    communiqu&eacute; aux personnes et aux organisations
                    pertinentes leurs r&ocirc;les et leurs
                    responsabilit&eacute;s dans le cadre de votre syst&egrave;me
                    de conformit&eacute; sociale, vous pouvez mettre en place
                    des audits. Pour garantir leur utilit&eacute;, vous devez
                    vous assurer que vous avez les effectifs idoines en place et
                    qu&apos;ils poss&egrave;dent les outils dont ils ont besoin.
                </p>
                <h2>R&ocirc;le essentiel des travailleurs et des syndicats</h2>
                <p>
                    L&apos;une des fa&ccedil;ons les plus efficaces de
                    surveiller les cha&icirc;nes d&apos;approvisionnement passe
                    par les travailleurs eux-m&ecirc;mes et les syndicats qui
                    les repr&eacute;sentent. Les travailleurs et les syndicats
                    peuvent porter certains probl&egrave;mes &agrave;
                    l&apos;attention d&rsquo;une entreprise avant qu&apos;un
                    audit ne soit r&eacute;alis&eacute;. S&apos;il existe un
                    syndicat sur un lieu de travail faisant l&apos;objet
                    d&apos;un audit, il conviendrait de le consulter
                    d&apos;embl&eacute;e ; dans le cas contraire, les entretiens
                    avec les travailleurs et leurs avis devraient faire partie
                    int&eacute;grante de l&apos;audit.
                </p>
                <p>
                    Quel que soit l&apos;audit, au cas o&ugrave; des violations
                    seraient rep&eacute;r&eacute;es, il vous faudra les
                    r&eacute;parer. Ce point est abord&eacute; en d&eacute;tail
                    &agrave;{" "}
                    <Link to="/steps/8">
                        la 6e &eacute;tape: r&eacute;parer les infractions
                    </Link>
                    .
                </p>
                 <ExampleInAction id="better_work_assessment">
                                <h3>
                                    <ExampleInAction.Icon alt="Lightbulb"/>
                                    Exemple d&apos;action: Worker Voice in the Audit Process
                                </h3>
                                <p>
                                   <b>PLACEHOLDER FOR TEXT</b>
                                </p>
                            </ExampleInAction>

            </div>
        </StaticData>
    );
};

export default fr;
