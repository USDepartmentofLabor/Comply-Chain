import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import usFlag from "../../../../../images/us_flag.png";
import verite from "../../../../../images/verite.png";
import { UsFlag, Verite, VeriteFlagWrapper } from "./shared";
import Accordion from "../../../../../../components/Accordion"; 

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Normes relatives au travail des enfants et au travail
                    forc&eacute;
                </h1>
                <p>
                    Le code et les outils d&rsquo;audit de chaque entreprise
                    devraient comprendre les normes suivantes d&eacute;finies
                    dans les conventions de l&rsquo;OIT:
                </p>
                <h2>Travail des enfants</h2>
                <ul>
                    <li>
                        L&rsquo;&acirc;ge minimum d&rsquo;admission &agrave;
                        l&rsquo;emploi devrait &ecirc;tre 15&nbsp;ans, ou 14
                        pour les pays qui ont ratifi&eacute; la
                        Convention&nbsp;138 et pr&eacute;sent&eacute; &agrave;
                        l&rsquo;OIT au moment de la ratification un motif pour
                        un &acirc;ge minimum inf&eacute;rieur.
                    </li>
                    <li>
                        Le travail des jeunes et des enfants n&apos;ayant pas
                        l&apos;&acirc;ge minimum pour travailler est permis{" "}
                        <em>dans les &eacute;coles</em> aux fins de formation
                        g&eacute;n&eacute;rale, professionnelle ou technique.
                    </li>
                    <li>
                        Les enfants &acirc;g&eacute;s de 14 ans et plus peuvent
                        &ecirc;tre autoris&eacute;s &agrave; ex&eacute;cuter des
                        travaux en dehors de leur scolarit&eacute; s&apos;ils
                        font partie d&apos;un programme de formation
                        professionnelle ou technique et si certaines garanties
                        sont en place.
                    </li>
                    <li>
                        Les enfants &acirc;g&eacute;s de 13 &agrave; 15&nbsp;ans
                        (12 &agrave; 14&nbsp;ans dans les pays o&ugrave;
                        l&apos;&acirc;ge minimum est de 14&nbsp;ans) sont
                        autoris&eacute;s &agrave; ex&eacute;cuter des
                        «&nbsp;travaux l&eacute;gers&nbsp;», pour autant que
                        ceux-ci ne portent pas pr&eacute;judice &agrave; leur
                        sant&eacute; ou &agrave; leur d&eacute;veloppement, ni
                        &agrave; leur assiduit&eacute; scolaire, tant que le
                        pays pr&eacute;cise les travaux sp&eacute;cifiques
                        qu&rsquo;ils sont autoris&eacute;s &agrave;
                        ex&eacute;cuter, le nombre d&rsquo;heures et les
                        conditions des activit&eacute;s en question.
                    </li>
                </ul>
                <p>
                    Les activit&eacute;s suivantes constituent les pires formes
                    de travail des enfants et devraient &ecirc;tre interdites
                    &agrave; tout enfant de moins de 18&nbsp;ans:
                </p>
                <ol type="a">
                    <li>
                        Toutes les formes d&apos;esclavage ou pratiques
                        analogues, telles que la vente et la traite des enfants,
                        la servitude pour dettes et le servage ainsi que le
                        travail forc&eacute; ou obligatoire, y compris le
                        recrutement forc&eacute; ou obligatoire des enfants en
                        vue de leur utilisation dans des conflits arm&eacute;s ;
                    </li>
                    <li>
                        L&apos;utilisation, le recrutement ou l&apos;offre
                        d&apos;un enfant &agrave; des fins de prostitution, de
                        production de mat&eacute;riel pornographique ou de
                        spectacles pornographiques ;
                    </li>
                    <li>
                        L&apos;utilisation, le recrutement ou l&apos;offre
                        d&apos;un enfant aux fins d&apos;activit&eacute;s
                        illicites, notamment pour la production et le trafic de
                        stup&eacute;fiants, tels que les d&eacute;finissent les
                        trait&eacute;s internationaux pertinents ; et
                    </li>
                    <li>
                        Des travaux qui, par leur nature ou les conditions dans
                        lesquelles ils s&apos;exercent, sont susceptibles de
                        nuire &agrave; la sant&eacute;, &agrave; la
                        s&eacute;curit&eacute; ou &agrave; la moralit&eacute; de
                        l&apos;enfant.
                    </li>
                </ol>
                <p>
                    Source: Article 3 de la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                        title="Convention 182 de l&rsquo;OIT"
                    >
                        convention 182 de l&rsquo;OIT
                    </a>
                    .
                </p>
                <h2>Travaux dangereux pour les enfants</h2>
                <p>
                    Selon l&rsquo;Article&nbsp;3(d) de la la convention n
                    <sup>o</sup>&nbsp;182 de l&apos;OIT, les travaux dangereux
                    «&nbsp;doivent &ecirc;tre d&eacute;termin&eacute;s par la
                    l&eacute;gislation nationale ou l&apos;autorit&eacute;
                    comp&eacute;tente, apr&egrave;s consultation des
                    organisations d&apos;employeurs et de travailleurs
                    int&eacute;ress&eacute;es, en prenant en
                    consid&eacute;ration les normes internationales
                    pertinentes&hellip;&nbsp;» [convention&nbsp;182 de
                    l&rsquo;OIT, Article&nbsp;4]. Comme l&apos;indique ce texte,
                    les formes de travail identifi&eacute;es comme &eacute;tant
                    «&nbsp;dangereuses » pour les enfants [article 3 (d)]
                    peuvent diff&eacute;rer selon les pays.&nbsp;Les pays
                    &eacute;laborent leurs propres listes de travaux dangereux
                    interdits &agrave; l&rsquo;ensemble des enfants de moins de
                    18&nbsp;ans. La recommandation n<sup>o</sup>
                    &nbsp;190 de l&apos;OIT en annexe de la convention n
                    <sup>o</sup>
                    &nbsp;182 de l&apos;OIT offre des recommandations
                    suppl&eacute;mentaires ayant trait aux «&nbsp;travaux
                    dangereux&nbsp;». La recommandation n<sup>o</sup>&nbsp;190
                    de l&apos;OIT pr&eacute;cise &agrave; la section II,
                    paragraphe 3: «&nbsp;En d&eacute;terminant les types
                    de travail vis&eacute;s &agrave; l&apos;article 3 (d) de la
                    convention [n
                    <sup>o</sup>&nbsp;182 de l&apos;OIT] et leur localisation,
                    il faudrait, entre autres, prendre en
                    consid&eacute;ration:
                </p>
                <ol type="a">
                    <li>
                        les travaux qui exposent les enfants &agrave; des
                        s&eacute;vices physiques, psychologiques ou sexuels ;
                    </li>
                    <li>
                        les travaux qui s&apos;effectuent sous terre, sous
                        l&apos;eau, &agrave; des hauteurs dangereuses ou dans
                        des espaces confin&eacute;s ;
                    </li>
                    <li>
                        les travaux qui s&apos;effectuent avec des machines, du
                        mat&eacute;riel ou des outils dangereux, ou qui
                        impliquent de manipuler ou de porter de lourdes charges
                        ;
                    </li>
                    <li>
                        les travaux qui s&apos;effectuent dans un milieu malsain
                        pouvant, par exemple, exposer des enfants &agrave; des
                        substances, des agents ou des proc&eacute;d&eacute;s
                        dangereux, ou &agrave; des conditions de
                        temp&eacute;rature, de bruit ou de vibrations
                        pr&eacute;judiciables &agrave; leur sant&eacute; ;
                    </li>
                    <li>
                        les travaux qui s&apos;effectuent dans des conditions
                        particuli&egrave;rement difficiles, par exemple pendant
                        de longues heures, ou la nuit, ou pour lesquels
                        l&apos;enfant est retenu de mani&egrave;re
                        injustifi&eacute;e dans les locaux de l&apos;employeur.
                        »
                    </li>
                </ol>
                <h2>Travail forc&eacute;/traite des personnes</h2>
                <p>
                    Tous les codes de conduite devraient comprendre des
                    dispositions interdisant le travail forc&eacute; et la
                    traite des personnes. Ces deux ph&eacute;nom&egrave;nes sont
                    &eacute;troitement li&eacute;s et, dans certains cas, se
                    produisent simultan&eacute;ment, d&rsquo;o&ugrave; le fait
                    qu&rsquo;ils soient souvent r&eacute;unis en une seule et
                    m&ecirc;me cat&eacute;gorie d&rsquo;un code de conduite.
                </p>
                <p>
                    Dans{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ilo.org/global/topics/forced-labour/publications/WCMS_099625/lang--en/index.htm"
                        title="Combattre le travail forc&eacute;: Manuel pour les employeurs et le secteur priv&eacute;&nbsp;&ndash; Brochure 3"
                    >
                        <em>
                            Combattre le travail forc&eacute;: Manuel pour
                            les employeurs et le secteur priv&eacute; - Brochure
                            3
                        </em>
                    </a>
                    <em>, </em> l&apos;OIT pr&eacute;sente des principes
                    directeurs sur les normes relatives au travail forc&eacute;
                    que les entreprises devraient envisager d&rsquo;inclure dans
                    leurs codes. Les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://business-humanrights.org/en/pdf-athens-ethical-principles"
                        title="Principes &eacute;thiques d&rsquo;Ath&egrave;nes"
                    >
                        Principes &eacute;thiques d&rsquo;Ath&egrave;nes
                    </a>
                    , ensemble de sept principes de lutte contre la traite
                    vis-&agrave;-vis desquels les soci&eacute;t&eacute;s peuvent
                    volontairement s&rsquo;engager et ses{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://fpbb.pl/user_upload/static/file/Luxor_Implementation_Guidelines_Ethical_Principles.pdf"
                        title="Directives d&rsquo;application de Louxor"
                    >
                        directives d&rsquo;application de Louxor
                    </a>{" "}
                    en annexe, qui peuvent aider les entreprises &agrave;
                    incorporer des dispositions en mati&egrave;re de lutte
                    contre la traite dans leurs codes, les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/sites/default/files/resources_attachments/2013ICCR_HTPrinciplesFINAL112013.pdf"
                        title="D&eacute;clarations de principes et pratiques recommand&eacute;es en mati&egrave;re de lutte contre la traite des personnes et l&rsquo;esclavage moderne"
                    >
                        d&eacute;clarations de principes et pratiques
                        recommand&eacute;es en mati&egrave;re de lutte contre la
                        traite des personnes et l&rsquo;esclavage moderne
                    </a>{" "}
                    [en anglais] de l&rsquo;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/"
                        title="Interfaith Center on Corporate Responsibility (ICCR)"
                    >
                        Interfaith Center on Corporate Responsibility (ICCR)
                    </a>{" "}
                    et les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.americanbar.org/content/dam/aba/administrative/business_law/aba_model_policies.authcheckdam.pdf"
                        title="Politiques mod&egrave;les pour les entreprises et les fournisseurs relatives &agrave; la traite &agrave; des fins d&rsquo;exploitation dans le travail et au travail des enfants"
                    >
                        politiques mod&egrave;les pour les entreprises et les
                        fournisseurs relatives &agrave; la traite &agrave; des
                        fins d&rsquo;exploitation dans le travail et au travail
                        des enfants
                    </a>{" "}
                    du barreau am&eacute;ricain (ABA) [en anglais
                    &eacute;galement] sont autant d&rsquo;autres ressources
                    utiles sur les politiques et normes &agrave; ce sujet.
                </p>
                <p>
                    Ces derni&egrave;res ann&eacute;es, les entreprises
                    comprenant mieux la nature du travail forc&eacute; et des
                    formes qu&rsquo;il rev&ecirc;t au sein des cha&icirc;nes
                    d&rsquo;approvisionnement, elles ont commenc&eacute;
                    &agrave; int&eacute;grer de nouvelles dispositions dans
                    leurs codes de conduite, avec par exemple des interdictions
                    relatives au paiement de commissions de recrutement par les
                    travailleurs concern&eacute;s, et l&rsquo;obligation pour
                    les fournisseurs d&rsquo;embaucher ou d&rsquo;employer
                    directement les travailleurs. Un document de politique
                    publi&eacute; en&nbsp;2016 par Hewlett Packard Enterprise*
                    explique les raisons, bas&eacute;es sur des risques, pour
                    lesquelles la soci&eacute;t&eacute; a d&eacute;cid&eacute;
                    de passer &agrave; une politique d&rsquo;«&nbsp;emploi
                    direct&nbsp;».
                </p>
                
                <h2>Ressources</h2>
                <p>
                    L&rsquo;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/"
                        title="Outil d&rsquo;approvisionnement responsable"
                    >
                        Outil d&rsquo;approvisionnement responsable
                    </a>{" "}
                    (RST) constitue une ressource essentielle pour
                    l&rsquo;&eacute;laboration de dispositions
                    sp&eacute;cifiques d&rsquo;un code de conduite visant
                    &agrave; pr&eacute;venir le travail forc&eacute; dans les
                    cha&icirc;nes d&rsquo;approvisionnement au niveau
                    international. Lanc&eacute; en&nbsp;2016 par{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.verite.org/"
                        title="Verit&eacute;"
                    >
                        Verit&eacute;
                    </a>{" "}
                    et le d&eacute;partement d&apos;&Eacute;tat des
                    &Eacute;tats-Unis, il fournit un ensemble de ressources pour
                    la conformit&eacute; et d&rsquo;outils de gestion des
                    risques aux soci&eacute;t&eacute;s, contractuels
                    f&eacute;d&eacute;raux, professionnels de
                    l&rsquo;approvisionnement et de la passation de
                    march&eacute;s, d&eacute;fenseurs, investisseurs,
                    consommateurs et autres parties prenantes qui souhaitent
                    identifier, pr&eacute;venir et traiter les cas de travail
                    forc&eacute; au sein des cha&icirc;nes
                    d&rsquo;approvisionnement. L&rsquo;outil&nbsp;1,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/codeofconduct"
                        title="Exemples de dispositions de code de conduite"
                    >
                        Exemple de code de conduite
                    </a>
                    , comprend des dispositions relatives au travail
                    forc&eacute; qui peuvent &ecirc;tre incorpor&eacute;es dans
                    le code de conduite d&rsquo;une entreprise ou d&rsquo;un
                    secteur. Le RST contient &eacute;galement d&rsquo;autres
                    outils concernant le recrutement responsable de la main
                    d&apos;&oelig;uvre, notamment l&rsquo;outil&nbsp;3,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/laborrecruitments"
                        title="Crit&egrave;res de s&eacute;lection et d&rsquo;&eacute;valuation de candidats au recrutement de la main d'&oelig;uvre"
                    >
                        Évaluation des recrutements de main d'œuvre
                    </a>
                    , qui aide les entreprises &agrave; faire preuve de
                    diligence raisonnable dans le cadre du processus de
                    s&eacute;lection des recruteurs de main d&apos;&oelig;uvre
                    afin de minimiser le risque de traite des personnes d&ucirc;
                    &agrave; des pratiques de recrutement frauduleuses ou
                    trompeuses.
                </p>
                <ExampleInAction id="rst1">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d&apos;action:{" "}
                            <span>
                                Outil d&rsquo;approvisionnement
                                responsable&nbsp;1
                            </span>
                        </strong>
                    </h3>
                    <VeriteFlagWrapper>
                        <UsFlag src={usFlag} alt="US Flag" />
                        <Verite src={verite} alt="Verite sign" />
                    </VeriteFlagWrapper>
                    <p style={{ color: "black" }}>
                        <strong>
                            PROTECTIONS CONTRE LA TRAITE DES PERSONNES
                        </strong>
                    </p>
                    <p style={{ color: "black" }}>
                        <strong>
                            Exemples de dispositions de code de conduite
                        </strong>
                    </p>
                    <p>
                        <strong>Source: </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/codeofconduct"
                            title="Outil&nbsp;1, Exemples de dispositions de code de conduite"
                        >
                            <strong>
                                Outil d’approvisionnement responsable 1, Exemple de code de conduite
                            </strong>
                        </a>
                        <strong> [en anglais].</strong>
                    </p>
                    <p>
                        <strong>
                            Voir &eacute;galement Outil
                            d&rsquo;approvisionnement responsable&nbsp;1A,{" "}
                        </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/recruitmentandemployment"
                            title="Exemples de r&eacute;f&eacute;rences de bonnes pratiques en mati&egrave;re de recrutement et d&rsquo;emploi"
                        >
                            <strong>
                                Exemples de r&eacute;f&eacute;rences de bonnes
                                pratiques en mati&egrave;re de recrutement et
                                d&rsquo;emploi
                            </strong>
                        </a>{" "}
                        [en anglais].
                    </p>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://responsiblesourcingtool.org/"
                            title="ResponsibleSourcingTool.org"
                        >
                            ResponsibleSourcingTool.org
                        </a>{" "}
                        est le fruit d&rsquo;un travail de collaboration entre
                        le D&eacute;partement d&apos;&Eacute;tat des
                        &Eacute;tats-Unis,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.verite.org/"
                            title="Verit&eacute;"
                        >
                            Verit&eacute;
                        </a>
                        ,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://madeinafreeworld.com/"
                            title="Made in a Free World"
                        >
                            Made in a Free World
                        </a>{" "}
                        et l&rsquo;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.aspeninstitute.org/"
                            title="Aspen Institute"
                        >
                            Aspen Institute
                        </a>
                        . Le contenu de RST a &eacute;t&eacute; fourni par
                        Verit&eacute;, organisation de d&eacute;fense des droits
                        des travailleurs disposant d&rsquo;une expertise en
                        mati&egrave;re de conformit&eacute; de la cha&icirc;ne
                        d&apos;approvisionnement, avec un financement de
                        l&rsquo;Office charg&eacute; de la surveillance et de la
                        lutte contre la traite des personnes du
                        d&eacute;partement d&apos;&Eacute;tat des
                        &Eacute;tats-Unis en vertu de l&rsquo;accord de
                        coop&eacute;ration S-SJTIP-13-CA-1029
                        <strong>.</strong> L&rsquo;&eacute;laboration de RST a
                        &eacute;t&eacute; inform&eacute;e par des experts issus
                        de diff&eacute;rents organismes publics des
                        &Eacute;tats-Unis, notamment les D&eacute;partements
                        d&apos;&Eacute;tat et du Travail des &Eacute;tats-Unis,
                        ainsi que d&rsquo;autres parties prenantes de premier
                        plan, notamment des survivants de la traite, des
                        dirigeants d&rsquo;entreprises et d&rsquo;ONG et des
                        responsables des acquisitions et des passations de
                        march&eacute; au niveau f&eacute;d&eacute;ral.
                    </p>
                </ExampleInAction>
                <br />
                <ExampleInAction id="rst2">
                                    <h3>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>
                                            Ejemplo en acci&oacute;n:{" "}
                                            <span>
                                                Code de conduite de Primark* de 2019
                                            </span>
                                        </strong>
                                    </h3>
                                    <p>
                                    Exemples de dispositions de code de conduite sur le travail forcé et le travail des enfants, issus du&nbsp;
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.primark.com/en/our-ethics/code-of-conduct"
                                    >
                                    Code de conduite de Primark
                                    </a>.
                                    </p>
                                    <p>
                                    <strong>L’emploi est choisi librement</strong>
                                    <ol>
                                    <li>Il ne doit exister aucune forme quelle qu’elle soit de travail forcé ou obligatoire, notamment en servitude, pour dette, sujet à la traite ou en prison, et les heures supplémentaires doivent être volontaires.</li>
                                    <li>Tous les frais associés à l’emploi de travailleurs doivent être payés par l’employeur.</li>
                                    <li>Les travailleurs ne doivent pas être tenus de déposer des cautions financières ou leurs papiers d’identité auprès de leur employeur.</li>
                                    <li>Les travailleurs doivent être libres de quitter l’employeur après un préavis raisonnable.</li>
                                    </ol>
                                    </p>
                                    <p>
                                    <strong>Le travail des enfants ne doit pas être utilisé</strong>
                                    <ol>
                                    <li>Il ne doit pas exister de recrutement ou d&apos;emploi du travail des enfants.</li>
                                    <li>Quel que soit le pays, l’âge minimum d’accès à l’emploi, ainsi que les règles concernant l’emploi d’un jeune travailleur,
                                    sera défini par les conventions de l’OIT ou la loi nationale/régionale, selon ce qui accorde la plus grande protection à la personne concernée.
                                    À des fins de précision, le terme « jeune travailleur » désigne dans ce contexte une personne ayant atteint l’âge légal d&pos;admission à l’emploi mais de moins de 18 ans.</li>
                                    <li>Les sociétés doivent avoir des politiques et des programmes qui évitent le recrutement et l’emploi du travail des enfants.</li>
                                    </ol>
                                    </p>
                                </ExampleInAction>

            </div>
        </StaticData>
    );
};

export default fr;
