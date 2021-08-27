import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import styled from "styled-components";
import { theme } from "../../../../../../modules/config/theme";
import Accordion from "../../../../../../components/Accordion"; 
import { Link } from "react-router-dom";


const Table = styled.table`
    border-collapse: collapse;
    border: 2px solid ${theme.colors.charcoal};
    margin-bottom: 16px;

    & th,
    td {
        border: 1px solid ${theme.colors.charcoal};
    }
`;

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Emp&ecirc;cher la r&eacute;cidive</h1>
                <p>
                    Outre le r&egrave;glement des situations des victimes individuelles, il est important d'analyser la raison pour 
                    laquelle une violation s'est produite. Cette analyse est diff&eacute;rente d'une simple attribution du travail 
                    des enfants et du travail forc&eacute; &agrave; la pauvret&eacute;, &agrave; l'inefficacit&eacute; des 
                    institutions du gouvernement et &agrave; d'autres motifs, qui sont abord&eacute;s dans S&rsquo;attaquer aux 
                    causes profondes.
                </p>

                <p>
                    Dans ces cas, et comme indiqu&eacute; ci-dessus, les propres actions de votre entreprise (par exemple la 
                    pression exerc&eacute;e pour ex&eacute;cuter les commandes &agrave; une date donn&eacute;e ou des modifications 
                    subites de leur volume ou des mod&egrave;les) pourraient entra&icirc;ner des situations o&ugrave; les fournisseurs 
                    sont pouss&eacute;s &agrave; exiger des heures suppl&eacute;mentaires, &agrave; une embauche suppl&eacute;mentaire 
                    par le biais de courtiers ou de recruteurs qui ne sont peut-&ecirc;tre pas pleinement conformes, et/ou &agrave; 
                    sous-traiter avec des sous-traitants non agr&eacute;&eacute;s pour que le travail soit r&eacute;alis&eacute;. 
                    Dans de nombreux autres cas, les manquements de la direction et la d&eacute;faillance des politiques, des processus 
                    et/ou de la formation sur le lieu de travail sont les principales causes des violations, et ces probl&egrave;mes 
                    peuvent, et devraient, &ecirc;tre r&eacute;par&eacute;s.
                </p>

                <p>
                    Les mesures de r&eacute;paration devraient toujours &ecirc;tre con&ccedil;ues pour r&eacute;gler le probl&egrave;me, 
                    fournir des r&eacute;parations aux personnes touch&eacute;es, et l'emp&ecirc;cher de se reproduire. Dans un monde 
                    parfait, il est possible d&rsquo;atteindre ces &eacute;tapes ; cependant, il est impossible de pleinement r&eacute;parer 
                    certaines violations, comme les infractions sexuelles, en raison des probl&egrave;mes &eacute;motionnels et sociaux qui y 
                    sont associ&eacute;s. Dans les cas de violations relatives au travail des enfants et au travail forc&eacute;, cela 
                    signifie qu&rsquo;il faut am&eacute;liorer la situation des victimes individuelles du travail des enfants et du travail 
                    forc&eacute; et emp&ecirc;cher d'autres cas de travail des enfants ou de travail forc&eacute; de se produire sur le lieu 
                    de travail.
                </p>
                <h2>Travail des enfants</h2>
                <p>
                    Dans les cas de <strong>Travail des enfants</strong>, les
                    causes peuvent inclure:
                </p>
                <div className="indent-margin">
                    <p>
                        Non-v&eacute;rification de documents attestant l'&acirc;ge au moment de l'embauche, ou non-contr&ocirc;le, 
                        non-v&eacute;rification ou non-suivi de ces m&ecirc;mes documents;
                    </p>
                    <p>
                        De la part de la direction, manque de compr&eacute;hension des activit&eacute;s appropri&eacute;es, des dangers 
                        de l'emploi, et/ou des heures de travail appropri&eacute;es pour les enfants; et
                    </p>
                    <p>
                        Relations de travail informelles permettant aux enfants de &laquo; passer inaper&ccedil;us &raquo;.
                    </p>
                </div>
                <p>
                    Les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://impacttlimited.com/wp-content/uploads/2017/01/Impactt_CLOPIndustrialcontexts_REVISION_26112008.pdf"
                        title="proc&eacute;dures op&eacute;rationnelles pour la r&eacute;paration des cas de travail des enfants dans les contextes industriels"
                    >
                        proc&eacute;dures op&eacute;rationnelles pour la r&eacute;paration des cas de travail des enfants dans les contextes industriels
                    </a>{" "}
                    de Impact Limited [en anglais] fournissent des orientations d&eacute;taill&eacute;es sur comment am&eacute;liorer la situation 
                    des victimes et emp&ecirc;cher la r&eacute;cidive lorsque ces cas de travail des enfants sont d&eacute;couverts dans le secteur 
                    de la manufacture.
                </p>
                <h2>Travail forc&eacute;</h2>
                <p>
                    Dans les cas de <strong>travail forc&eacute;</strong>, les
                    causes peuvent inclure:
                </p>
                <div className="indent-margin">
                    <p>
                        Calcul inexact des salaires et des retenues, et/ou paiement retard&eacute; des salaires;
                    </p>
                    <p>
                        Absence de politiques et proc&eacute;dures claires concernant le recrutement et l'embauche des travailleurs;
                    </p>
                    <p>
                        Absence de proc&eacute;dures claires pour s'assurer que tous les travailleurs disposent d'un contrat pr&eacute;cisant 
                        clairement les modalit&eacute;s de leur emploi, dans une langue qu'ils comprennent, et que toute modification 
                        apport&eacute;e au contrat sera r&eacute;alis&eacute;e avec le consentement &eacute;clair&eacute; et &eacute;crit 
                        des travailleurs;
                    </p>
                    <p>
                        Absence de m&eacute;canismes par lesquels les travailleurs peuvent pr&eacute;senter des r&eacute;clamations;
                    </p>
                    <p>Mauvaise tenue de registres;</p>
                    <p>
                        Absence de politiques et proc&eacute;dures sp&eacute;cifiques aux travailleurs migrants, y compris des 
                        m&eacute;canismes garantissant que les courtiers/agents ne leur r&eacute;clament pas des redevances, qu'ils ne 
                        sont pas contraints de d&eacute;poser des arrhes, qu'ils re&ccedil;oivent des modalit&eacute;s et des conditions 
                        d'emploi &eacute;gales &agrave; celles des non-migrants; et
                    </p>
                    <p>
                        Politiques qui permettent aux employeurs de &laquo; garder &raquo; les documents d'identit&eacute; des 
                        employ&eacute;s de fa&ccedil;on que ceux-ci ne soient pas &agrave; la disposition des travailleurs &agrave; 
                        leur gr&eacute;.
                    </p>
                </div>
                <h2>Pratiques de r&eacute;parations concernant le travail forc&eacute;</h2>
                <p>
                    Bien entendu, les causes des violations peuvent aller au-del&agrave; des simples manquements d'un syst&egrave;me 
                    et peuvent &ecirc;tre le r&eacute;sultat d'une man&#339;uvre d&eacute;lib&eacute;r&eacute;e du fournisseur, de 
                    la direction, de certains employ&eacute;s et/ou de recruteurs. Qu'elles soient accidentelles ou 
                    d&eacute;lib&eacute;r&eacute;es, les violations devraient &ecirc;tre r&eacute;par&eacute;es par le biais d'un 
                    plan d'action corrective qui oblige le fournisseur &agrave; rendre des comptes.
                </p>
                <ExampleInAction id="plch">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d'action : Code de conduite et commissions de recrutement des fournisseurs d&rsquo;Apple*
                        </strong>
                    </h2>
                    <p>
                        En 2018, Apple a re&ccedil;u le{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://uk.reuters.com/article/slavery-conference-award/apple-wins-global-award-for-efforts-to-eradicate-slave-labour-idUKL8N1WY5IG"
                        title="Prix Stop &agrave; l&rsquo;esclavage de la Fondation Thomson Reuters"
                    >
                        Prix Stop &agrave; l&rsquo;esclavage de la Fondation Thomson Reuters
                    </a>{" "}
                        pour avoir publi&eacute; des d&eacute;tails sur ses cha&icirc;nes d'approvisionnement dans le but 
                        d&rsquo;accro&icirc;tre la transparence et de mettre un terme &agrave; l&rsquo;esclavage moderne.
                    </p>

                    <p>
                        Cependant, &agrave; partir de 2015, la soci&eacute;t&eacute; technologique multinationale am&eacute;ricaine 
                        indiquait dans son{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple-Supplier-Code-of-Conduct-January.pdf"
                        title="Code de conduite des fournisseurs"
                    >
                        Code de conduite des fournisseurs
                    </a>{" "}
                        que les fournisseurs ne pouvaient facturer des commissions &agrave; leurs employ&eacute;s dans le cadre du 
                        processus de recrutement, m&ecirc;me si la l&eacute;gislation nationale en place permettaient cette pratique. 
                        Si Apple d&eacute;couvre des cas d&rsquo;infraction &agrave; cette d&eacute;cision, le fournisseur doit 
                        rembourser les commissions de recrutement. Les fournisseurs qui ne mettent pas en &#339;uvre ces pratiques 
                        risquent de perdre leurs contrats avec Apple.
                    </p>

                    <p>
                        Entre 2008 et 2018, Apple a fait rembourser les commissions de recrutement vers&eacute;es par 36 137 
                        employ&eacute;s pour une somme totale de 30,9 millions de dollars &Eacute;.-U., dont 616 000 dollars pour 
                        287 employ&eacute;s rien qu&rsquo;en 2018.
                    </p>

                    <p>
                        Source [en anglais] :{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                        title="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                    >
                        https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf
                    </a>
                        .
                    </p>            
                </ExampleInAction>
                <p>
                    Les quatre sections ci-dessous reprennent certaines des mesures de r&eacute;paration qui peuvent &ecirc;tre prises en 
                    cas de constatation d&rsquo;indicateurs de travail forc&eacute;. Dans tous les cas, les probl&egrave;mes devraient 
                    &ecirc;tre document&eacute;s et suivis et les syst&egrave;mes de gestion devraient &ecirc;tre mis &agrave; jour pour 
                    emp&ecirc;cher les r&eacute;cidives.
                </p>
                <Accordion id="prevent-recurrence">
                        <Accordion.Section id="practice-issue">
                            <Accordion.Title>
                                <strong>
                                R&eacute;paration des probl&egrave;mes
                        concernant les pratiques de recrutement

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Tableau: R&eacute;paration des probl&egrave;mes
                        concernant les pratiques de recrutement
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" >
                                <p>
                                    <strong>Situations</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" >
                                <p>
                                    <strong>
                                        Actions de r&eacute;paration
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs enlev&eacute;s, retenus pendant le processus de recrutement, ou vendus.</th>
                            <td >
                                <p>
                                    Signaler les d&eacute;lits aux autorit&eacute;s de police. Travailler avec les forces de l'ordre et les 
                                    groupes locaux pour donner aux victimes un lieu d'h&eacute;bergement s&ucirc;r et les mettre en relation 
                                    avec les services n&eacute;cessaires.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs recrut&eacute;s par un pr&ecirc;t ou une avance sur salaire et qui travaillent pour le rembourser.</th>
                            <td >
                                <p>
                                    Si le fournisseur a vers&eacute; le pr&ecirc;t ou l'avance sur salaire, d&eacute;terminer si les modalit&eacute;s 
                                    en &eacute;taient raisonnables. Dans le cas contraire, n&eacute;gocier des modalit&eacute;s raisonnables entre le 
                                    fournisseur et le travailleur. Si le pr&ecirc;t ou l'avance sur salaire a &eacute;t&eacute; vers&eacute; par un 
                                    recruteur de main d&rsquo;&#339;uvre, d&eacute;terminer si le fournisseur &eacute;tait conscient de cet arrangement. 
                                    Dans ce cas, n&eacute;gocier des modalit&eacute;s raisonnables entre le fournisseur, le recruteur et le travailleur. 
                                    Dans le cas contraire, exiger que le fournisseur mette fin &agrave; sa relation avec le recruteur. Signaler les 
                                    recruteurs peu scrupuleux aux autorit&eacute;s.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Recrutement trompeur : il a &eacute;t&eacute; promis aux travailleurs des types de travail, des conditions
                        de travail, des modalit&eacute;s de contrat, des conditions de logement ou d'existence, des lieux de travail, des employeurs 
                        ou des salaires/revenus qui ne se sont pas r&eacute;alis&eacute;s.</th>
                            <td >
                                <p>
                                    Si le fournisseur a fait de fausses promesses, il devrait remettre l'int&eacute;gralit&eacute; des salaires 
                                    dus &agrave; tous les employ&eacute;s qui souhaitent partir et leur fournir des moyens de transport pour rentrer 
                                    chez eux . Si de fausses promesses ont &eacute;t&eacute; faites par un recruteur, d&eacute;terminer si le 
                                    fournisseur &eacute;tait conscient de cet arrangement. Dans ce cas, le fournisseur reste responsable des 
                                    &eacute;l&eacute;ments ci-dessus. Dans le cas contraire, exiger que le fournisseur mette fin &agrave; sa 
                                    relation avec le recruteur. Signaler les recruteurs peu scrupuleux aux autorit&eacute;s.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                            </Accordion.Section>
                    <Accordion.Section id="living-cond">
                            <Accordion.Title>
                                <strong>
                                R&eacute;paration des probl&egrave;mes
                        concernant les conditions de travail et
                        d&rsquo;existence
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Tableau: R&eacute;paration des probl&egrave;mes
                        concernant les conditions de travail et
                        d&rsquo;existence
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" >
                                <p>
                                    <strong>Situations</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" >
                                <p>
                                    <strong>
                                        Actions de r&eacute;paration
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" >Heures suppl&eacute;mentaires des travailleurs excessives d&eacute;passant les limites l&eacute;gales.</th>
                            <td >
                                <p>
                                    S'assurer que le fournisseur r&egrave;gle aux travailleurs les arri&eacute;r&eacute;s de salaires de toutes 
                                    les heures suppl&eacute;mentaires effectu&eacute;es. Collaborer avec le fournisseur pour &eacute;valuer 
                                    les pratiques de dotation en personnel et de r&eacute;mun&eacute;ration, par exemple pour le travail 
                                    pay&eacute; &agrave; la pi&egrave;ce, qui contribuent aux heures suppl&eacute;mentaires. Examiner vos 
                                    propres pratiques d'approvisionnement, y compris les d&eacute;lais, les modifications des commandes, la 
                                    fixation des prix et d&rsquo;autres pressions, qui pourraient entra&icirc;ner des mesures extraordinaires 
                                    de compression des d&eacute;penses de la part du fournisseur, y compris des heures suppl&eacute;mentaires 
                                    excessives. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs droits en 
                                    vertu de la loi et du syst&egrave;me de conformit&eacute; sociale.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs devant effectuer des astreintes.</th>
                            <td >
                                <p>
                                    Collaborer avec le fournisseur pour concevoir un plan de dotation en personnel plus structur&eacute; r&eacute;pondant 
                                    aux exigences de votre code. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs 
                                    droits en vertu de la loi et de votre syst&egrave;me de conformit&eacute; sociale.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur qui limite la libert&eacute; de circulation ou de communication des travailleurs.</th>
                            <td >
                                <p>
                                    D&eacute;terminer qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) prend part &agrave; la 
                                    limitation de la libert&eacute; de circulation ou de communication des travailleurs et enqu&ecirc;ter sur 
                                    les actions de ces personnes. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait comprendre 
                                    une formation, une mise &agrave; pied ou un licenciement. Si ces limitations viennent de la direction, 
                                    mettre fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour qu&rsquo;il 
                                    cesse ces pratiques.
                                </p>
                                <p>
                                    Poursuivre l'enqu&ecirc;te sur les conditions et les circonstances sur le lieu de travail que la direction 
                                    ou les contrema&icirc;tres tenteraient de dissimuler, y compris par des entretiens en dehors du lieu de 
                                    travail avec des travailleurs et d'autres membres de la communaut&eacute; bien inform&eacute;s. S'assurer 
                                    que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs droits en vertu des lois et de 
                                    votre code de conduite, y compris les voies de r&eacute;clamation. S'assurer que les travailleurs qui 
                                    souhaitent quitter leur emploi peuvent le faire et qu'ils re&ccedil;oivent l'int&eacute;gralit&eacute; des 
                                    salaires qui leur sont dus.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Conditions d&rsquo;existence d&eacute;gradantes.</th>
                            <td >
                                <p>
                                    S'assurer que le fournisseur comprend pleinement vos normes minimales concernant le logement des employ&eacute;s. 
                                    Accorder au fournisseur de brefs d&eacute;lais pour am&eacute;liorer l&rsquo;ensemble des conditions d&rsquo;existence. 
                                    S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs droits en vertu des lois et de 
                                    votre code de conduite, y compris les normes de logement. S'assurer que les travailleurs qui souhaitent quitter leur 
                                    emploi peuvent le faire et qu'ils re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus.
                                </p>
                                <p>
                                    Faire suivre d'une enqu&ecirc;te inopin&eacute;e, qui comprend des entretiens ext&eacute;rieurs avec les travailleurs 
                                    et d'autres membres de la communaut&eacute; bien inform&eacute;s. Si les conditions d&rsquo;existence ne se sont pas 
                                    am&eacute;lior&eacute;es, mettre fin &agrave; la relation avec le fournisseur, tout en att&eacute;nuant l'impact de 
                                    cette rupture sur les travailleurs.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs contraints d'ex&eacute;cuter des activit&eacute;s illicites, de travailler pour le domicile
                        priv&eacute;/la famille ou de prendre des drogues toxicomanog&egrave;nes.</th>
                            <td >
                                <p>
                                    D&eacute;terminer qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) prend part &agrave; la 
                                    limitation de la libert&eacute; de circulation ou de communication des travailleurs et enqu&ecirc;ter sur 
                                    les actions de ces personnes. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait comprendre 
                                    une formation, une mise &agrave; pied ou un licenciement. Si ces limitations viennent de la direction, 
                                    mettre fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour qu&rsquo;il 
                                    cesse ces pratiques.
                                </p>
                                <p>
                                    Poursuivre l'enqu&ecirc;te sur les conditions et les circonstances sur le lieu de travail que la direction 
                                    ou les contrema&icirc;tres tenteraient de dissimuler, y compris par des entretiens en dehors du lieu de 
                                    travail avec des travailleurs et d'autres membres de la communaut&eacute; bien inform&eacute;s. S'assurer 
                                    que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs droits en vertu des lois et de 
                                    votre code de conduite, y compris les voies de r&eacute;clamation. S'assurer que les travailleurs qui 
                                    souhaitent quitter leur emploi peuvent le faire et qu'ils re&ccedil;oivent l'int&eacute;gralit&eacute; des 
                                    salaires qui leur sont dus.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Fournisseur qui accro&icirc;t artificiellement la dette des travailleurs.</th>
                            <td >
                            <p>
                                D&eacute;terminer la source de la dette initiale des travailleurs. Si la dette initiale a &eacute;t&eacute; 
                                contract&eacute;e aupr&egrave;s du fournisseur, exiger du fournisseur qu'il annule cette dette. Si la dette 
                                initiale a &eacute;t&eacute; contract&eacute;e aupr&egrave;s d'un recruteur, enqu&ecirc;ter pour savoir si le 
                                fournisseur &eacute;tait conscient de cet arrangement de dette. Dans ce cas, exiger du fournisseur qu'il annule 
                                la dette. Dans le cas contraire, exiger que le fournisseur mette fin &agrave; sa relation avec le recruteur. 
                                Signaler le recruteur aux autorit&eacute;s.
                            </p>

                            <p>
                                En ce qui concerne l'accroissement artificiel de la dette, exiger que l'employeur cesse imm&eacute;diatement 
                                d'imputer des int&eacute;r&ecirc;ts quels qu'ils soient sur la dette. Si la dette est accrue par des achats 
                                aupr&egrave;s de l'employeur, par exemple &agrave; la cantine, d&eacute;terminer si les travailleurs ont 
                                d'autres options. Si les achats dans des magasins d&eacute;tenus par l'employeur sont la seule option viable 
                                pour les travailleurs, collaborer avec le fournisseur pour garantir que les prix et les modalit&eacute;s sont 
                                raisonnables.
                            </p>

                            <p>
                                S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils re&ccedil;oivent 
                                l'int&eacute;gralit&eacute; des salaires qui leur sont dus.
                            </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs tributaires de l'employeur pour leur logement, leur nourriture ou d&rsquo;autres n&eacute;cessit&eacute;s.</th>
                            <td >
                            <p>
                                Dans certains cas, particuli&egrave;rement en ce qui concerne les travailleurs migrants, la fourniture par 
                                l'employeur d&rsquo;un logement, de nourriture et d'autres n&eacute;cessit&eacute;s peut &ecirc;tre la 
                                meilleure option pour toutes les parties concern&eacute;es. Toutefois, la qualit&eacute; des logements et 
                                des aliments doit &ecirc;tre examin&eacute;e et si elle ne correspond pas aux normes minimales, collaborer 
                                avec le fournisseur pour l&rsquo;am&eacute;liorer.
                            </p>

                            <p>
                                Faire suivre d'une enqu&ecirc;te inopin&eacute;e, qui comprend des entretiens ext&eacute;rieurs avec les 
                                travailleurs et d'autres membres de la communaut&eacute; bien inform&eacute;s. Si les conditions 
                                d'existence/d'alimentation ne s'am&eacute;liorent pas, mettre fin &agrave; la relation avec le 
                                fournisseur.
                            </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs personnellement d&eacute;pendants de l'employeur.</th>
                            <td >
                                <p>
                                    S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de leurs droits sur le lieu 
                                    de travail en vertu des lois et de votre code de conduite, quelles que soient leurs relations personnelles.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="impossible-leaving">
                            <Accordion.Title>
                                <strong>
                                R&eacute;paration des probl&egrave;mes
                        concernant l&apos;«&nbsp;impossibilit&eacute; de
                        partir&nbsp;»
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Tableau: R&eacute;paration des probl&egrave;mes
                        concernant l&apos;«&nbsp;impossibilit&eacute; de
                        partir&nbsp;»
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" >
                                <p>
                                    <strong>Situations</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" >
                                <p>
                                    <strong>
                                        Actions de r&eacute;paration
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs qui estiment qu'ils ne sont pas libres de d&eacute;missionner en raison des avantages
                        qu'ils ont re&ccedil;us ou des restrictions impos&eacute;es par l'employeur.</th>
                            <td >
                                <p>
                                    Si un contrema&icirc;tre ou toute autre personne am&egrave;ne les travailleurs &agrave; croire qu'ils ne 
                                    peuvent partir parce que le fournisseur a fourni une formation ou d'autres avantages, ou parce qu'il existe 
                                    un exigence contractuelle ill&eacute;gale, exiger du fournisseur qu'il prenne des mesures correctives 
                                    appropri&eacute;es &agrave; l'encontre de cette personne, mesures allant de la formation au licenciement. 
                                    Si les travailleurs ne comprennent simplement pas leurs droits, fournir une formation pour s'assurer qu'ils 
                                    savent &agrave; quel moment ils peuvent d&eacute;missionner. S'assurer que les travailleurs qui souhaitent 
                                    quitter leur emploi peuvent le faire et qu'ils re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires 
                                    qui leur sont dus.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Travailleurs qui se sentent contraints de rester en raison de salaires qui leur sont dus.</th>
                            <td >
                                <p>
                                    S'assurer que les salaires sont calcul&eacute;s avec exactitude et que tous les employ&eacute;s prenant 
                                    part &agrave; la comptabilit&eacute; salariale sont suffisamment form&eacute;s au calcul des salaires. 
                                    Exiger du fournisseur qu'il r&egrave;gle tous les salaires dus en vertu de la loi locale (par ex., si la 
                                    loi locale exige un paiement toutes les deux semaines, exiger que tous les salaires soient 
                                    r&eacute;gl&eacute;s au minimum jusqu'&agrave; la quinzaine pr&eacute;c&eacute;dente). S'assurer que les 
                                    calendriers de la paie sont r&eacute;gularis&eacute;s, dans les limites l&eacute;gales et celles de votre 
                                    code. Faire suivre par un audit inopin&eacute;. S'assurer que les travailleurs qui souhaitent quitter leur 
                                    emploi peuvent le faire et qu'ils re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employ&eacute;s qui travaillent pendant des dur&eacute;es excessives ou ind&eacute;finies pour
                        rembourser une dette ou une avance qu&rsquo;ils doivent &agrave; l'employeur ou au recruteur.</th>
                            <td >
                                <p>
                                    Si le fournisseur a vers&eacute; le pr&ecirc;t ou l'avance sur salaire, d&eacute;terminer si les 
                                    modalit&eacute;s en &eacute;taient raisonnables. Dans le cas contraire, n&eacute;gocier des 
                                    modalit&eacute;s raisonnables entre le fournisseur et le travailleur. Si le pr&ecirc;t ou l'avance 
                                    sur salaire a &eacute;t&eacute; vers&eacute; par un recruteur de main d&rsquo;&#339;uvre, 
                                    d&eacute;terminer si le fournisseur &eacute;tait conscient de cet arrangement. Dans ce cas, n&eacute;gocier 
                                    des modalit&eacute;s raisonnables entre le fournisseur, le recruteur et le travailleur. Dans le cas 
                                    contraire, exiger que le fournisseur mette fin &agrave; sa relation avec le recruteur. Signaler les 
                                    recruteurs peu scrupuleux aux autorit&eacute;s.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section id="penalty-issue">
                <Accordion.Title>
                    <strong>
                    R&eacute;paration des probl&egrave;mes concernant les sanctions ou les menaces
                    </strong>
                </Accordion.Title>
                <Accordion.Panel>
                <Table width="100%">
                    <caption>
                        Tableau: R&eacute;paration des probl&egrave;mes concernant les sanctions ou les menaces
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" >
                                <p>
                                    <strong>Situations</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" >
                                <p>
                                    <strong>
                                        Actions de r&eacute;paration
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" >Fournisseur ou recruteur qui a en sa possession les pi&egrave;ces d'identit&eacute; ou les
                        titres de voyage des travailleurs.</th>
                            <td >
                                {/* <p id="P1"> */}
                                <p>
                                    Les fournisseurs ne devraient jamais confisquer ni prendre possession des pi&egrave;ces 
                                    d'identit&eacute;, ni des titres de voyage des travailleurs, sauf pour les mettre en lieu 
                                    s&ucirc;r, et uniquement si les travailleurs sont en mesure de r&eacute;cup&eacute;rer 
                                    leurs documents &agrave; leur demande. Exiger que le fournisseur rende toutes les 
                                    pi&egrave;ces d'identit&eacute; des travailleurs. Si les travailleurs pr&eacute;f&egrave;rent 
                                    que le fournisseur les garde en lieu s&ucirc;r, s'assurer qu'il existe une politique pour la 
                                    r&eacute;cup&eacute;ration des documents et que tous les travailleurs la connaissent. Effectuer 
                                    un contr&ocirc;le ult&eacute;rieur sur cette question par l&rsquo;interm&eacute;diaire d'un 
                                    audit inopin&eacute;.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur qui restreint les communications des travailleurs.</th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P1">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                Les fournisseurs ne devraient jamais confisquer ni prendre possession des pi&egrave;ces 
                                d'identit&eacute;, ni des titres de voyage des travailleurs, sauf pour les mettre en lieu 
                                s&ucirc;r, et uniquement si les travailleurs sont en mesure de r&eacute;cup&eacute;rer 
                                leurs documents &agrave; leur demande. Exiger que le fournisseur rende toutes les 
                                pi&egrave;ces d'identit&eacute; des travailleurs. Si les travailleurs pr&eacute;f&egrave;rent 
                                que le fournisseur les garde en lieu s&ucirc;r, s'assurer qu'il existe une politique pour la 
                                r&eacute;cup&eacute;ration des documents et que tous les travailleurs la connaissent. Effectuer 
                                un contr&ocirc;le ult&eacute;rieur sur cette question par l&rsquo;interm&eacute;diaire d'un 
                                audit inopin&eacute;.
                                ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur qui menace de remettre les travailleurs aux autorit&eacute;s d'immigration.</th>
                            <td >
                                {/* <p id="P2"> */}
                                <p>
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                </p>
                                <p>
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur qui commet ou menace de commettre des violences physiques ou sexuelles.</th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P2">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                    ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur ou recruteur qui menace de retirer des privil&egrave;ges comme une possibilit&eacute; de
                        promotion, de d&eacute;grader encore les conditions de travail ou de licencier des travailleurs.</th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P2">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                    ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur ou recruteur qui exploite les convictions religieuses ou culturelles des travailleurs.</th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P2">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                    ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur ou recruteur qui retient le salaire des travailleurs ou leurs biens, ou les menace de sanctions financi&egrave;res.</th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P2">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                    ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" >Employeur qui menace de donner du travail suppl&eacute;mentaire aux travailleurs non coop&eacute;ratifs.<br />
                        Employeur qui a recours au chantage pour contraindre des travailleurs.
                        </th>
                            <td >
                                <p>
                                    {/* <Link to="/steps/8/topic/3/#P2">
                                    Voir ci-dessus.
                                    </Link> */}
                                    <abbr title="" aria-label="
                                    Dans toute situation de violence, de sanction, d'intimidation ou de menace, d&eacute;terminer 
                                    qui (direction, contrema&icirc;tres, chefs d'&eacute;quipe, etc.) est impliqu&eacute; dans ces 
                                    violations. Si des personnes agissent de leur propre chef sans que la direction en soit 
                                    consciente, prendre les mesures appropri&eacute;es &agrave; leur &eacute;gard, ce qui pourrait 
                                    comprendre une formation, une mise &agrave; pied ou un licenciement.
                                    Si ces sanctions, menaces, etc. viennent de la direction ou si la direction est complice, mettre 
                                    fin &agrave; la relation avec le fournisseur ou lui accorder de brefs d&eacute;lais pour cesser 
                                    ces pratiques. S'assurer que tous les travailleurs re&ccedil;oivent une formation au sujet de 
                                    leurs droits en vertu des lois et de votre code de conduite, y compris les voies de r&eacute;clamation. 
                                    S'assurer que les travailleurs qui souhaitent quitter leur emploi peuvent le faire et qu'ils 
                                    re&ccedil;oivent l'int&eacute;gralit&eacute; des salaires qui leur sont dus. Faire suivre d'audits 
                                    inopin&eacute;s, qui comprennent des entretiens ext&eacute;rieurs avec les travailleurs et d'autres 
                                    membres de la communaut&eacute; bien inform&eacute;s.
                                    ">
                                    Voir ci-dessus.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
            </Accordion.Section>
            </Accordion>
                <br />
                <ExampleInAction id="better_work">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d&apos;action: Processus de
                            r&eacute;paration{" "}
                        </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://betterwork.org/"
                            title="Better Work"
                        >
                            <strong>Better Work</strong>
                        </a>
                        <strong />
                    </h2>
                    <p>
                        Better Work pr&ocirc;ne l'&eacute;laboration de structures et de processus d&eacute;mocratiques de 
                        relations de travail par l'inclusion de repr&eacute;sentants des organisations du patronat et des 
                        syndicats dans la conception et la mise en &#339;uvre de ses programmes. &Agrave; l'&eacute;chelon 
                        de l'usine, les probl&egrave;mes de conformit&eacute; identifi&eacute;s par les &eacute;valuations 
                        sont examin&eacute;s par un comit&eacute; consultatif d'am&eacute;lioration des performances (PICC), 
                        groupe de 8 &agrave; 10 personnes compos&eacute; &agrave; &eacute;galit&eacute; de repr&eacute;sentants 
                        de la direction et de repr&eacute;sentants des travailleurs. Dans la mesure du possible, la 
                        cr&eacute;ation et le d&eacute;veloppement des capacit&eacute;s du PICC s'appuient sur les structures 
                        patronales-syndicales efficaces existant dans une usine. Chaque PICC se r&eacute;unit au moins tous les 
                        mois. Soutenus par les conseillers Better Work, il formule et supervise la mise en &#339;uvre d'un plan 
                        de r&eacute;paration, en s'assurant que la direction et les travailleurs partagent la responsabilit&eacute; 
                        et la reddition de comptes &agrave; son &eacute;gard tout au long du processus. Les conseillers Better Work 
                        sont disponibles pour fournir une assistance technique et r&eacute;aliser des visites de suivi afin 
                        d'&eacute;valuer les progr&egrave;s du plan de r&eacute;paration.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default fr;
