import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";
import apsca from "../../../../../../static/images/apsca.jpg";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>L&apos;&eacute;quipe d&rsquo;audit</h1>
                <h2>Le personnel</h2>
                <p>
                    Votre &eacute;quipe de conformit&eacute; sociale se compose de votre personnel charg&eacute; de la 
                    conformit&eacute; sociale au si&egrave;ge, ainsi que du personnel de terrain charg&eacute; de la 
                    coordination et/ou de l'ex&eacute;cution des audits. Pour les entreprises qui poss&egrave;dent un 
                    programme d'audit interne, les membres de l'&eacute;quipe d&rsquo;audit sont des employ&eacute;s de 
                    l'entreprise ; pour les entreprises qui ont recours &agrave; des auditeurs ext&eacute;rieurs, 
                    l'&eacute;quipe se compose d'auditeurs engag&eacute;s aupr&egrave;s d'organismes ext&eacute;rieurs 
                    (des cabinets &agrave; but lucratif ou non lucratif). Certaines entreprises ont recours &agrave; des 
                    auditeurs ext&eacute;rieurs et internes, selon le secteur ou l'emplacement de l'&eacute;tablissement.
                </p>
                <p>
                    Les trois approches d'audit ci-dessous peuvent &ecirc;tre fiables et cr&eacute;dibles, &agrave; condition 
                    d'&ecirc;tre bien g&eacute;r&eacute;es par votre &eacute;quipe de conformit&eacute; sociale et d'op&eacute;rer 
                    dans le cadre d'un programme complet de conformit&eacute; sociale. Mais chaque d&eacute;marche comporte des 
                    avantages et des inconv&eacute;nients. 
                </p>
                <Accordion id="int-auditors-acc">
                    <Accordion.Section id="int-auditors-description">
                        <Accordion.Title>
                        Auditeurs internes
                            </Accordion.Title>
                            <Accordion.Panel>
                            <p>
                                Les auditeurs internes sont des employ&eacute;s de l'entreprise qui sont form&eacute;s et poss&egrave;dent 
                                des qualifications et des comp&eacute;tences d'audit social. Un avantage du recours &agrave; des auditeurs 
                                internes : il est probablement plus facile de communiquer avec eux ; par exemple, s'il y a des modifications 
                                de la politique, il est plus facile d'assurer une uniformit&eacute; au sein des employ&eacute;s de 
                                l'entreprise qu'avec des auditeurs ext&eacute;rieurs engag&eacute;s. Les auditeurs internes comprennent 
                                peut-&ecirc;tre mieux &eacute;galement le programme int&eacute;gral de conformit&eacute; sociale de 
                                l'entreprise et seront peut-&ecirc;tre plus &agrave; m&ecirc;me d'y contribuer au-del&agrave; des audits. 
                                En revanche, puisque les auditeurs internes sont des employ&eacute;s de l'entreprise, la 
                                cr&eacute;dibilit&eacute; de leurs conclusions pourrait &ecirc;tre remise en question par certaines 
                                parties prenantes.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>
                <Accordion id="ext-auditors-acc"> */}
                    <Accordion.Section id="ext-auditors-description">
                        <Accordion.Title>
                            Auditeurs ext&eacute;rieurs
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Les auditeurs ext&eacute;rieurs sont des professionnels des audits, poss&eacute;dant des qualifications et 
                            des comp&eacute;tences d&eacute;finies. Ils sont employ&eacute;s par des cabinets d'audits sociaux 
                            ext&eacute;rieurs &agrave; une entreprise. Ce sont des effectifs souples et ils peuvent &ecirc;tre disponibles 
                            dans des r&eacute;gions o&ugrave; il ne serait pas rentable pour une entreprise d'avoir ses propres auditeurs 
                            internes. Puisque les auditeurs ext&eacute;rieurs sont pay&eacute;s par l'entreprise pour r&eacute;aliser des 
                            audits, certaines parties prenantes peuvent douter de la cr&eacute;dibilit&eacute; des r&eacute;sultats de 
                            leurs audits. De plus, certains groupes d'auditeurs ext&eacute;rieurs ont peut-&ecirc;tre des syst&egrave;mes 
                            en place qui leur sont propres, mais qui ne sont peut-&ecirc;tre pas totalement adapt&eacute;s aux protocoles 
                            ou aux param&egrave;tres de l&rsquo;entreprise. Une entreprise qui compte sur une partie tierce ou 
                            ind&eacute;pendante pour effectuer ou v&eacute;rifier un audit lanc&eacute; de son propre chef doit 
                            &eacute;galement &eacute;valuer et examiner l&rsquo;entit&eacute; qui r&eacute;alise le travail. En effet, le 
                            simple fait d&rsquo;&ecirc;tre un auditeur ind&eacute;pendant ou tiers ne garantit pas l&rsquo;absence de risque.
                        </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>

                    <Accordion id="independent-auditors-acc"> */}
                    <Accordion.Section id="independent-auditors-description">
                        <Accordion.Title>
                            Auditeurs/v&eacute;rificateurs ind&eacute;pendants
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Les auditeurs/v&eacute;rificateurs ind&eacute;pendants sont des professionnels des audits, 
                            accr&eacute;dit&eacute;s par des institutions ou des organismes tel que les organisations 
                            professionnelles ou commerciales ; leur r&ocirc;le est de s'assurer que les audits se 
                            d&eacute;roulent sans aucune transaction financi&egrave;re directe entre l'entreprise et 
                            l'auditeur. D'ordinaire, une entreprise paie une institution distincte ind&eacute;pendante 
                            qui effectue les audits et/ou une redevance pour appartenir &agrave; cette institution. 
                            L'institution accr&eacute;dite les auditeurs en vertu de ses normes et elle est charg&eacute;e 
                            de programmer tous les audits et de les surveiller. M&ecirc;me si cela est con&ccedil;u pour 
                            accro&icirc;tre la cr&eacute;dibilit&eacute; de l'audit, dans certaines r&eacute;gions ou sites, 
                            ce type de dispositions peut ne pas &ecirc;tre disponible. De plus, m&ecirc;me en l'absence 
                            d'une transaction financi&egrave;re directe, certaines parties prenantes peuvent encore 
                            s'inqui&eacute;ter du degr&eacute; d'ind&eacute;pendance d'un auditeur par rapport &agrave; 
                            l'entit&eacute; faisant l'objet de l'audit. Il existe diff&eacute;rents degr&eacute;s 
                            d'ind&eacute;pendance, et elle doit au fond &ecirc;tre jug&eacute;e au cas par cas.
                        </p>
                        <p>
                            Si une entreprise d&eacute;cide d'avoir recours &agrave; des auditeurs internes ou ext&eacute;rieurs, 
                            il pourrait &ecirc;tre n&eacute;cessaire d'engager des entit&eacute;s ind&eacute;pendantes pour 
                            remplir certains r&ocirc;les dans le syst&egrave;me de conformit&eacute; sociale si elle veut 
                            s&rsquo;assurer une efficacit&eacute; et une cr&eacute;dibilit&eacute; maximales. Voir la{" "}
                            <Link to="/steps/9">
                                septi&egrave;me &eacute;tape, Examen ind&eacute;pendant
                            </Link>, 
                            pour un examen plus approfondi de la surveillance et du contr&ocirc;le ind&eacute;pendants.
                        </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                </Accordion>

                <h2>Comp&eacute;tences des auditeurs</h2>
                <p>
                    Qu'ils soient internes, ext&eacute;rieurs ou ind&eacute;pendants, tous les auditeurs doivent poss&eacute;der 
                    des comp&eacute;tences et des connaissances sp&eacute;cifiques pour r&eacute;aliser efficacement leurs audits. 
                    Depuis quelques ann&eacute;es, plusieurs organisations se sont efforc&eacute;es d'officialiser et de documenter 
                    les connaissances et les comp&eacute;tences standard que devrait poss&eacute;der un auditeur. Ainsi, l&rsquo;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.theapsca.org/"
                        title="Association des auditeurs professionnels de la conformit&eacute; sociale (APSCA)"
                    >
                        Association des auditeurs professionnels de la conformit&eacute; sociale (APSCA)
                    </a>{" "}
                    est un organisme &agrave; adh&eacute;sion dirig&eacute; par les praticiens qui travaille actuellement &agrave; 
                    la mise en place d&rsquo;un processus de certification pour les auditeurs de la conformit&eacute; sociale. Les 
                    connaissances n&eacute;cessaires incluent une compr&eacute;hension d&eacute;taill&eacute;e des normes 
                    internationales du travail, des environnements et des processus de la production industrielle, et des cultures 
                    et des langues locales.
                </p>
                <p>
                    Il est important que les auditeurs soient &eacute;galement form&eacute;s &agrave; des protocoles 
                    sp&eacute;cifiques pour traiter de situations d&eacute;licates incluant des enfants et/ou des adultes 
                    victimes d'exploitation flagrante. Les auditeurs devraient &ecirc;tre pr&eacute;par&eacute;s &agrave; 
                    s&rsquo;adresser &agrave; des enfants et &agrave; prendre des mesures appropri&eacute;es pour les 
                    enfants, en fonction de leur &acirc;ge. Par ailleurs, un cabinet d&rsquo;audit doit avoir des 
                    proc&eacute;dures en place pour veiller &agrave; ce que les victimes du travail des enfants ou du 
                    travail forc&eacute; se voient imm&eacute;diatement dispenser des soins et services de la part 
                    d&rsquo;organisations et de personnes qualifi&eacute;es.
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Exemple d'action : Association des auditeurs professionnels de la conformit&eacute; sociale (APSCA)*
                    </h3>
                    <p>
                        Le titre d&rsquo;Auditeur certifi&eacute; de la conformit&eacute; sociale (CSCA) de l&rsquo;

                        {""}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.theapsca.com/"
                            title="APSCA"
                        >
                            APSCA
                        </a>{" "}
                            signifie qu&rsquo;une personne peut d&eacute;montrer son exp&eacute;rience, ses connaissances et ses 
                            comp&eacute;tences sp&eacute;cifiques dans le domaine de l&rsquo;audit de conformit&eacute; sociale. 
                            Le candidat &agrave; ce titre doit, au travers d&rsquo;un processus de certification rigoureux (avec 
                            retour sur l&rsquo;exp&eacute;rience et le niveau d&rsquo;&eacute;ducation et comprenant un examen et 
                            une &eacute;valuation), d&eacute;montrer des comp&eacute;tences fondamentales pertinentes pour cette 
                            profession. Voici le cadre de comp&eacute;tence de l&rsquo;APSCA dans les domaines des 
                            comp&eacute;tences de base et des connaissances fonctionnelles.
                    </p>
                        <br />
                        <img
                        src={apsca} 
                        />
                        <br />     
                        <p>
                        Source: APSCA, Competency Framework:
                        <br />
                        {""}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                                title="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                            >
                                https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf
                            </a>{" "}
                            [en anglais].
                    </p>
                </ExampleInAction>
                <h2>Composition de l&apos;&eacute;quipe</h2>
                <p>
                    La taille et la composition d'une &eacute;quipe d'audit d&eacute;pendent de la taille et du type 
                    d'&eacute;tablissement devant &ecirc;tre audit&eacute;, du nombre de ses travailleurs et de la 
                    nature de la main-d'&#339;uvre, y compris ses langues et sa composition culturelle. Si 
                    l'&eacute;tablissement est de grande taille et que diff&eacute;rentes langues y sont pratiqu&eacute;es, 
                    des auditeurs parlant toutes les langues doivent &ecirc;tre disponibles. Le genre des travailleurs 
                    est &eacute;galement une consid&eacute;ration importante ; par exemple, d'ordinaire, il est 
                    pr&eacute;f&eacute;rable que les femmes s'entretiennent avec une femme pour faciliter l'aisance de 
                    certaines conversations sur des sujets tels que le harc&egrave;lement sexuel.
                </p>
                <p>
                    De nombreuses soci&eacute;t&eacute;s pr&eacute;f&egrave;rent que les auditeurs soient des ressortissants 
                    du pays o&ugrave; se tient l&rsquo;audit, parce qu&rsquo;ils connaissent la culture, la langue et les 
                    coutumes du pays en question, et parce que l&rsquo;embauche d&rsquo;auditeurs locaux contribue 
                    &eacute;galement &agrave; un d&eacute;veloppement durable des capacit&eacute;s au niveau local.
                </p>
                <p>
                    Le chef d'&eacute;quipe devrait s'assurer du fonctionnement interactif de l'&eacute;quipe. Les violations 
                    pouvant souvent &ecirc;tre subtiles, ou dissimul&eacute;es &agrave; dessein aux auditeurs, l'&eacute;quipe 
                    ne devrait pas simplement diviser les responsabilit&eacute;s des travaux ; dans de nombreux cas, plusieurs 
                    auditeurs devraient &eacute;tudier les m&ecirc;mes questions et l'&eacute;quipe devrait se r&eacute;unir 
                    pour &eacute;valuer les conclusions et s'assurer que les relations et les sch&eacute;mas sont 
                    identifi&eacute;s. L'&eacute;quipe devrait convenir collectivement des r&eacute;sultats de l'audit final.
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Exemple d&apos;action: &Eacute;quipes
                        d&apos;&eacute;valuation Better Work
                    </h3>
                    <p>
                        Better Work poss&egrave;de plusieurs r&eacute;glementations pour les &eacute;quipes d'&eacute;valuation 
                        et exige, pour chaque &eacute;valuation inopin&eacute;e, la pr&eacute;sence de deux &laquo; conseillers 
                        d'entreprise &raquo; [auditeurs]. Les{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://betterwork.org/our-work/factory-services"
                            title="Conseillers Better Work"
                        >
                            conseillers Better Work
                        </a>{" "}
                        sont engag&eacute;s localement et re&ccedil;oivent une formation exhaustive. Un nouveau conseiller fait 
                        toujours &eacute;quipe avec un coll&egrave;gue plus exp&eacute;riment&eacute;, et deux conseillers ne font 
                        jamais &eacute;quipe deux fois de suite dans une usine donn&eacute;e. Les conseillers en charge d&rsquo;une 
                        &eacute;valuation pour une usine donn&eacute;e ne sont jamais &eacute;galement responsables des services de 
                        r&eacute;paration et consultatifs pour cette usine.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default fr;
