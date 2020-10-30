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
                <h1>Pourquoi produire des rapports publics?</h1>
                <p>
                    Auparavant, les rapports publics sur la conformit&eacute; sociale &eacute;taient principalement volontaires, 
                    bien que certains groupes sectoriels et multipartites aient exig&eacute; la communication publique des 
                    r&eacute;sultats d'audit et d&rsquo;autres &eacute;l&eacute;ments de programme comme condition d&rsquo;adh&eacute;sion. 
                    Cependant, aux &Eacute;tats-Unis, plusieurs lois promulgu&eacute;es aux niveaux f&eacute;d&eacute;ral et des &Eacute;tats 
                    am&eacute;ricains, notamment la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf"
                        title="Loi de la Californie sur la transparence de la cha&icirc;ne d&rsquo;approvisionnement"
                    >
                        loi de la Californie sur la transparence de la
                        cha&icirc;ne d&rsquo;approvisionnement
                    </a>
                    , ainsi que dans le reste du monde, comme la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.legislation.gov.uk/ukpga/2015/30/contents/enacted"
                        title="Loi du Royaume-Uni sur l&rsquo;esclavage moderne"
                    >
                        loi du Royaume-Uni sur l&rsquo;esclavage moderne
                    </a>{" "}
                    et la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.business-humanrights.org/en/frances-law-on-the-corporate-duty-of-vigilance-a-practical-and-multidimensional-analysis-in-english"
                        title="Loi fran&ccedil;aise sur le devoir de vigilance"
                    >
                        loi fran&ccedil;aise sur le devoir de vigilance
                    </a>
                    , ont mandat&eacute; la communication de certaines informations pour les entreprises concern&eacute;es par ces 
                    l&eacute;gislations (voir Lois et r&eacute;glementations pour de plus amples renseignements sur les l&eacute;gislations 
                    en mati&egrave;re de communication publique). Si la plupart des comptes-rendus restent volontaires, un nombre croissant 
                    de groupes de consommateurs, d'actionnaires et d'ONG attendent d&eacute;sormais que les entreprises communiquent au 
                    public leurs informations au sujet de la conformit&eacute; sociale, et de plus en plus d'entreprises communiquent ces 
                    informations pour faire preuve de leur engagement et de leur leadership dans leurs politiques et leurs programmes.
                </p>

                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>
                            Dans leurs propres mots : Principes directeurs relatifs aux entreprises et aux droits de l'homme 
                            des Nations Unies
                        </strong>
                    </h2>
                    <p>
                        La responsabilit&eacute; qui leur incombe de respecter les droits de l'homme exige des entreprises qu'elles 
                        aient en place des politiques et des proc&eacute;dures par lesquelles elles peuvent &agrave; la fois conna&icirc;tre 
                        les droits de l'homme et montrer qu'elles les respectent dans la pratique. Qui dit montrer dit communiquer, en 
                        assurant un certain degr&eacute; de transparence et de responsabilit&eacute; aux individus ou aux groupes 
                        susceptibles d'&ecirc;tre touch&eacute;s et aux autres acteurs pertinents, y compris les investisseurs.
                    </p>
                    <p>
                        La communication peut se faire de diverses fa&ccedil;ons, entretiens personnels, dialogues en ligne, 
                        consultations avec les acteurs concern&eacute;s, et rapports publics officiels.
                    </p>
                    <p>
                        <em>
                            Source:{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_fr.pdf"
                                title="Principes directeurs des Nations Unies relatifs aux entreprises et aux droits de l'homme"
                            >
                                Principes directeurs des Nations Unies relatifs aux entreprises et aux droits de l'homme
                            </a>
                            , 2011.
                        </em>
                    </p>
                </OwnWords>
                <p>
                    Les rapports publics pr&eacute;sentent divers avantages,
                    tant internes qu&apos;externes:&nbsp;
                </p>


                <div style={{ marginLeft: "2%" }}>
                    <h2>&Eacute;ducation et ralliement des employ&eacute;s</h2>
                    <p>
                        Les rapports sur la conformit&eacute; sociale sont aussi un moyen d&rsquo;&eacute;duquer tous ceux 
                        qui sont dans l'entreprise sur le programme, ce qui peut alors promouvoir un meilleur engagement de 
                        l'entreprise pour appuyer la conformit&eacute; sociale et renforcer la loyaut&eacute; des 
                        employ&eacute;s pour lesquels les questions des droits des travailleurs sont importantes.
                    </p>

                    <h2>Auto-&eacute;valuation</h2>
                    <p>
                        La pr&eacute;paration d'un rapport exige que l'&eacute;quipe de conformit&eacute; sociale mette en place 
                        et/ou r&eacute;examine ses indicateurs cl&eacute;s de performance (KPI) et &eacute;value les progr&egrave;s 
                        r&eacute;alis&eacute;s par comparaison, ainsi que les progr&egrave;s de r&eacute;f&eacute;rence par rapport 
                        aux entreprises homologues. L'&eacute;quipe devrait examiner les probl&egrave;mes apparus en cours 
                        d'ann&eacute;e, les approches adopt&eacute;es pour les r&eacute;gler et si ces approches ont &eacute;t&eacute; 
                        couronn&eacute;es de succ&egrave;s. L'&eacute;quipe devrait &eacute;galement &eacute;tudier les 
                        &eacute;ventuelles cons&eacute;quences inattendues du programme d'ensemble et le cas &eacute;ch&eacute;ant, 
                        les &eacute;valuer.
                    </p>

                    <h2>Avis ext&eacute;rieurs</h2>
                    <p>
                        Les rapports devraient pr&eacute;senter des processus clairs gr&acirc;ce auxquels les parties prenantes importantes, 
                        y compris les travailleurs et les membres des communaut&eacute;s locales, peuvent fournir un retour 
                        d&rsquo;information. Les r&eacute;ponses au rapport peuvent &eacute;galement inclure les reportages des m&eacute;dias 
                        et l'utilisation des &eacute;l&eacute;ments du rapport dans les campagnes des ONG. Quelles que soient leurs formes, 
                        les r&eacute;ponses ext&eacute;rieures aident les entreprises &agrave; &eacute;valuer le syst&egrave;me et &agrave; 
                        l'am&eacute;liorer constamment, y compris la structure et le processus de publication de rapports &agrave; l'avenir.
                    </p>

                    <h2>Reddition de comptes</h2>
                    <p>
                        Les rapports publics devraient pr&eacute;ciser clairement les buts du programme de conformit&eacute; sociale, 
                        la fa&ccedil;on dont l'entreprise cherche &agrave; les accomplir, comment elle mesure ses progr&egrave;s par 
                        rapport aux buts fix&eacute;s et les progr&egrave;s r&eacute;alis&eacute;s &agrave; ce jour. Cela encourage 
                        un plus grand respect de l&rsquo;obligation de rendre compte au sein de l'entreprise elle-m&ecirc;me et 
                        aupr&egrave;s des parties prenantes ext&eacute;rieures importantes.
                    </p>
                </div>
                    <ExampleInAction id="nike">
                        <h2>
                            <ExampleInAction.Icon alt="Lightbulb"/>
                            <strong>
                                Exemple d&apos;action: Le rapport sur les droits de l&rsquo;homme d&rsquo;une soci&eacute;t&eacute; japonaise prend son envol
                            </strong>
                        </h2>
                        <p>
                            En 2018,{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_fr.pdf"
                                title="ANA Group*"
                            >
                                ANA Group*
                            </a>,
                            groupe de la compagnie a&eacute;rienne japonaise, est devenue la premi&egrave;re entreprise japonaise &agrave; publier un{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.ana.co.jp/group/en/csr/effort/pdf/Human_Rights_Report_2018_e.pdf"
                                title="rapport sur les droits de l&rsquo;homme"
                            >
                                rapport sur les droits de l&rsquo;homme
                            </a>.
                            Depuis le d&eacute;but des discussions sur la publication d&rsquo;un rapport en 2015, ANA Group a continu&eacute; 
                            d&rsquo;&eacute;largir sa compr&eacute;hension des droits commerciaux et des droits de l&rsquo;homme, notamment en raison 
                            des exigences d&rsquo;une communaut&eacute; internationale de plus en plus pr&eacute;occup&eacute;e et attentive. &Agrave; 
                            la suite notamment de conversations avec des experts des droits de l&rsquo;homme &agrave; partir de 2015, ANA Group a 
                            &eacute;labor&eacute; une{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.ana.co.jp/group/en/csr/effort/pdf/humanrights_e.pdf"
                                title="politique sur les droits de l&rsquo;homme"
                            >
                                politique sur les droits de l&rsquo;homme
                            </a> 
                            {" "}
                            comme premi&egrave;re &eacute;tape de la d&eacute;finition des progr&egrave;s de la soci&eacute;t&eacute;. Cependant, 
                            au cours de ce processus, des voix se sont fait entendre au sein de la direction qui se pr&eacute;occupait des risques 
                            qu&rsquo;impliquerait la publication d&rsquo;un rapport sur les droits de l&rsquo;homme. Cependant, alors qu&rsquo;ANA 
                            d&eacute;veloppait les discussions avec des experts tant au Japon qu&rsquo;&agrave; l&rsquo;&eacute;tranger ainsi 
                            qu&rsquo;avec la communaut&eacute; internationale des investisseurs, la soci&eacute;t&eacute; a compris que la 
                            publication d&rsquo;un tel rapport &eacute;tait, en elle-m&ecirc;me, une mesure de gestion des risques.
                        </p>

                        <p>Source [en anglais] :{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.ana.co.jp/group/en/about-us/"
                                title="https://www.ana.co.jp/group/en/about-us/"
                            >
                                <em>
                                    https://www.ana.co.jp/group/en/about-us/
                                </em>
                            </a> 
                            .
                            </p>
                    </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default fr;
