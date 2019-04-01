import React from "react";
import Accordion from "../../../../components/Accordion";
import ExampleInAction from "../../../../components/ExampleInAction";
import OwnWords from "../../../../components/OwnWords";
import graph from "../../../images/graph_fr.jpg";
import betterwork from "../../../images/betterwork.jpg";
import { Link } from "react-router-dom";

const fr = ({ pdf }) => {
    return (
        <div>
            <h1>
                <strong>
                    Notions fondamentales d&rsquo;un syst&egrave;me de
                    conformit&eacute; sociale
                </strong>
            </h1>
            <Accordion pdf={pdf}>
                <Accordion.Section>
                    <Accordion.Title>
                        Objectifs d&apos;apprentissage
                    </Accordion.Title>
                    <Accordion.Panel>
                        <ul>
                            <li>
                                Comprendre les &eacute;l&eacute;ments essentiels
                                d&apos;un syst&egrave;me de conformit&eacute;
                                sociale et la mani&egrave;re dont ils
                                s&apos;imbriquent.
                            </li>
                            <li>
                                Se familiariser avec les programmes sectoriels
                                ou intersectoriels de conformit&eacute; sociale
                                qui seraient &agrave; votre disposition.
                            </li>
                            <li>
                                Commencer &agrave; d&eacute;finir la
                                port&eacute;e de votre syst&egrave;me de
                                conformit&eacute; sociale.
                            </li>
                            <li>
                                Comprendre les imp&eacute;ratifs en personnel
                                d&apos;une solide &eacute;quipe de
                                conformit&eacute; sociale.
                            </li>
                            <li>
                                Reconna&icirc;tre les syst&egrave;mes de gestion
                                qui permettront la r&eacute;ussite de votre
                                syst&egrave;me de conformit&eacute; sociale.
                            </li>
                        </ul>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>Termes cl&eacute;s</Accordion.Title>
                    <Accordion.Panel>
                        {" "}
                        <p>
                            <strong>
                                Responsabilit&eacute; sociale des entreprises
                                (RSE)
                            </strong>{" "}
                            &mdash;&nbsp;Concept large destin&eacute; &agrave;
                            recouvrir la fa&ccedil;on dont les entreprises
                            int&egrave;grent les pr&eacute;occupations sociales
                            et environnementales dans leurs op&eacute;rations et
                            leurs interactions avec les parties prenantes hormis
                            leurs obligations juridiques. De nombreux autres
                            termes sont utilis&eacute;s pour ces actions, y
                            compris «&nbsp;le triple bilan&nbsp;», la
                            «&nbsp;durabilit&eacute;&nbsp;», la
                            «&nbsp;citoyennet&eacute; des entreprises&nbsp;»,
                            les questions «&nbsp;environnementales, sociales et
                            de la gouvernance&nbsp;», et bien d&apos;autres. La
                            «&nbsp;responsabilit&eacute;
                            d&apos;entreprise&nbsp;» est un terme servant
                            souvent pour d&eacute;signer les actions des
                            entreprises qui sont plus &eacute;troitement
                            li&eacute;es aux obligations impos&eacute;es par la
                            loi.
                        </p>
                        <p>
                            <strong>
                                Syst&egrave;me de conformit&eacute; sociale
                            </strong>
                            &nbsp;&mdash; &Eacute;l&eacute;ment de la RSE
                            d&apos;ensemble d&apos;une entreprise, de son
                            programme de durabilit&eacute; ou de
                            responsabilit&eacute; d&apos;entreprise. Un
                            syst&egrave;me de conformit&eacute; sociale est un
                            ensemble int&eacute;gr&eacute; de politiques et de
                            pratiques gr&acirc;ce auxquelles une entreprise
                            s&apos;assure du respect maximum des
                            &eacute;l&eacute;ments de son code de conduite qui
                            couvrent les questions sociales et relatives aux
                            droits des travailleurs.
                        </p>
                        <p>
                            <strong>
                                Cha&icirc;ne d&apos;approvisionnement
                            </strong>
                            &nbsp;&mdash;&nbsp;Cha&icirc;ne qui se compose de
                            toutes les organisations et des personnes physiques
                            impliqu&eacute;es dans la production, la
                            transformation, le n&eacute;goce, le transport et/ou
                            la distribution d&apos;un produit ou d&apos;une
                            marchandise, de son point d&apos;origine
                            jusqu&apos;&agrave; l&apos;entreprise et/ou au
                            d&eacute;taillant final.
                        </p>
                        <p>
                            Le sch&eacute;ma ci-dessous illustre la cha&icirc;ne
                            d&rsquo;approvisionnement du coton.
                        </p>
                        <img
                            src={graph}
                            alt="Le sch&eacute;ma illustre la cha&icirc;ne d&rsquo;approvisionnement du coton."
                        />
                        <div className="small-text">
                            <p>Sources</p>
                            <ol>
                                <li>
                                    Marche mondiale contre le travail des
                                    enfants.{" "}
                                    <em>
                                        Dirty Cotton: A Research on Child
                                        Labour, Slavery, Trafficking and
                                        Exploitation in Cotton and Cotton Seed
                                        Farming in India.
                                    </em>{" "}
                                    New Delhi, 2012&nbsp;; disponible [en
                                    anglais] sur{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://globalmarch.org/wp-content/uploads/2017/09/Dirty-Cotton-Report.pdf"
                                        title="Dirty Cotton: A Research on Child Labour, Slavery, Trafficking and Exploitation in Cotton and Cotton Seed Farming in India."
                                    >
                                        http://globalmarch.org/wp-content/uploads/2017/09/Dirty-Cotton-Report.pdf
                                    </a>
                                    .
                                </li>
                                <li>
                                    Josephine Moulds. «&nbsp;Child Labour in the
                                    Fashion Supply Chain: Where, Why, And What
                                    Can Be Done&nbsp;». theguardian.com [en
                                    ligne] [cit&eacute; en&nbsp;2015]&nbsp;;
                                    disponible [en anglais] sur{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://labs.theguardian.com/unicef-child-labour/"
                                        title="«&nbsp;Child Labour in the Fashion Supply Chain: Where, Why, And What Can Be Done."
                                    >
                                        https://labs.theguardian.com/unicef-child-labour/
                                    </a>
                                    .
                                </li>
                                <li>
                                    D&eacute;partement d&apos;&Eacute;tat des
                                    &Eacute;tats-Unis.
                                    «&nbsp;Tadjikistan&nbsp;». Dans{" "}
                                    <em>
                                        Rapport&nbsp;2016 sur la traite des
                                        personnes
                                    </em>
                                    . Washington, D.C.,
                                    27&nbsp;juillet&nbsp;2016&nbsp;; disponible
                                    sur{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.state.gov/j/tip/rls/tiprpt/countries/2016/258874.htm"
                                        title="Rapport&nbsp;2016 sur la traite des personnes."
                                    >
                                        https://www.state.gov/j/tip/rls/tiprpt/countries/2016/258874.htm
                                    </a>
                                    .
                                </li>
                                <li>
                                    Uzbek-German Forum for Human Rights.{" "}
                                    <em>
                                        Forced Labor in Uzbekistan&apos;s Cotton
                                        Sector: Preliminary Findings from the
                                        2016 Harvest.
                                    </em>{" "}
                                    D&eacute;cembre&nbsp;2016.
                                </li>
                            </ol>
                        </div>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>Sujets</Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Avant d&apos;utiliser cette appli, il est important
                            de se familiariser avec les notions fondamentales
                            d&apos;un syst&egrave;me de conformit&eacute;
                            sociale. Les liens ci-dessous peuvent &ecirc;tre
                            utiles.
                        </p>
                        <h3>
                            Mod&egrave;le de syst&egrave;me de conformit&eacute;
                            sociale
                        </h3>
                        <div>
                            <p>
                                Si les syst&egrave;mes diff&egrave;rent selon
                                les industries, un syst&egrave;me de
                                conformit&eacute; sociale de qualit&eacute;,
                                quelle que soit l&apos;industrie, se compose de
                                huit &eacute;l&eacute;ments d&apos;articulation
                                int&eacute;gr&eacute;e.
                            </p>
                            <p>
                                Bien que les &eacute;tapes ci-dessous soient
                                num&eacute;rot&eacute;es pour en faciliter la
                                compr&eacute;hension, la conformit&eacute;
                                sociale est processus r&eacute;p&eacute;titif et
                                continu. Les entreprises peuvent d&eacute;cider
                                de passer par ces &eacute;tapes dans un ordre
                                diff&eacute;rent et ne devraient pas
                                d&apos;ordinaire pr&eacute;voir d&apos;achever
                                une &eacute;tape avant d&apos;en entreprendre la
                                suivante. Toutefois, un syst&egrave;me
                                d&eacute;nu&eacute; de toutes les
                                composantes&nbsp;&ndash; par exemple, un
                                syst&egrave;me d&apos;audit qui op&egrave;re
                                isol&eacute; de la communication et de la
                                formation, de la r&eacute;paration et
                                d&apos;autres mesures&nbsp;&ndash; ne suffira
                                sans doute pas pour r&eacute;gler les questions
                                difficiles relatives aux droits des travailleurs
                                susceptibles de se poser dans les cha&icirc;nes
                                d&apos;approvisionnement mondiales.
                            </p>
                            <ol>
                                <li>
                                    <em>
                                        <strong>Faire participer</strong>
                                    </em>
                                    <em>
                                        {" "}
                                        les parties prenantes et les partenaires
                                    </em>
                                </li>
                                <li>
                                    <strong>
                                        <em>&Eacute;valuer</em>
                                    </strong>
                                    <em> les risques et les incidences</em>
                                </li>
                                <li>
                                    <strong>
                                        <em>&Eacute;laborer</em>
                                    </strong>
                                    <em> un code de conduite</em>
                                </li>
                                <li>
                                    <strong>
                                        <em>Communiquer et former</em>
                                    </strong>
                                    <em>
                                        {" "}
                                        dans l&apos;ensemble de votre
                                        cha&icirc;ne d&apos;approvisionnement
                                    </em>
                                </li>
                                <li>
                                    <strong>
                                        <em>Surveiller</em>
                                    </strong>
                                    <em> la conformit&eacute;</em>
                                </li>
                                <li>
                                    <strong>
                                        <em>R&eacute;parer</em>
                                    </strong>
                                    <em> les infractions</em>
                                </li>
                                <li>
                                    <strong>
                                        <em>Examen</em>
                                    </strong>
                                    <em> ind&eacute;pendant</em>
                                </li>
                                <li>
                                    <strong>
                                        <em>Rendre compte</em>
                                    </strong>
                                    <em> des r&eacute;sultats</em>
                                </li>
                            </ol>
                            <p>
                                Il est important de noter que la plupart des
                                syst&egrave;mes robustes de conformit&eacute;
                                sociale sont con&ccedil;us pour r&eacute;pondre
                                aux normes fondamentales du travail
                                identifi&eacute;es par l&apos;Organisation
                                internationale du travail (OIT)&nbsp;&ndash;
                                &agrave; savoir la libert&eacute;
                                d&apos;association, le droit de
                                n&eacute;gociation collective,
                                l&apos;&eacute;limination de la discrimination
                                en mati&egrave;re d&apos;emploi,
                                l&apos;abolition du travail des enfants et du
                                travail forc&eacute;, ainsi que d&apos;autres
                                normes du travail telles que la sant&eacute; et
                                la s&eacute;curit&eacute; au travail, les
                                salaires et les heures ouvr&eacute;es (voir{" "}
                                <Link to="/steps/3">
                                    3<sup>e</sup> &eacute;tape&nbsp;:
                                    &eacute;laborer un code de conduite
                                </Link>{" "}
                                pour un compl&eacute;ment d&apos;information sur
                                ces normes de l&apos;OIT).
                            </p>
                            <p>
                                Notre appli pr&eacute;sente des recommandations
                                pour des syst&egrave;mes exhaustifs, mais elle
                                est centr&eacute;e particuli&egrave;rement sur
                                le travail des enfants et le travail
                                forc&eacute;, dans le droit fil du mandat
                                octroy&eacute; &agrave; l&apos;ILAB au titre de
                                la loi de r&eacute;autorisation de la protection
                                des protection des victimes de la traite (TVPRA)
                                de 2005.
                            </p>
                        </div>
                        <h3>
                            Rejoindre un programme de conformit&eacute; sociale
                            existant
                        </h3>
                        <div>
                            <p>
                                Dans certaines industries, des groupes
                                d&apos;entreprises se sont r&eacute;unis pour
                                &eacute;laborer des syst&egrave;mes de
                                conformit&eacute; sociale
                                collectifs&nbsp;&ndash; ou dans certains cas des
                                volets de syst&egrave;mes&nbsp;&ndash; que des
                                entreprises individuelles peuvent adopter.
                                L&apos;appartenance &agrave; ce type de
                                r&eacute;seau exige d&apos;ordinaire un
                                engagement en mati&egrave;re de temps et de
                                ressources pour une collaboration avec
                                d&apos;autres entreprises, ce qui permet au bout
                                du compte d&rsquo;&eacute;conomiser des efforts
                                et des ressources en s&apos;appuyant sur les
                                conclusions et l&apos;exp&eacute;rience
                                d&apos;autres entreprises. Il est important de
                                vous informer sur les initiatives qui existent
                                dans votre industrie avant de d&eacute;cider de
                                vous joindre &agrave; un programme existant ou
                                alors d&apos;&eacute;laborer le v&ocirc;tre.
                            </p>
                            <ExampleInAction id="better-work-garment">
                                <h4>
                                    <ExampleInAction.Icon />
                                    <strong>Exemple d&apos;action</strong> Le
                                    programme{" "}
                                    <em>
                                        <strong>Better Work </strong>
                                    </em>{" "}
                                    dans l&apos;industrie de la confection
                                </h4>
                                <p>
                                    Le programme{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://betterwork.org/"
                                        title="Better Work"
                                    >
                                        Better Work
                                    </a>
                                    , initiative conjointe de
                                    l&apos;Organisation internationale du
                                    travail (OIT) et de la Soci&eacute;t&eacute;
                                    financi&egrave;re internationale (SFI), est
                                    destin&eacute; &agrave; am&eacute;liorer les
                                    pratiques du travail et la
                                    productivit&eacute; dans l&apos;industrie de
                                    la confection. <em>Better Work</em> est un
                                    programme transparent de suivi des ateliers
                                    dirig&eacute; par un organisme
                                    cr&eacute;dible (l&apos;OIT) dans les pays
                                    participants. Des conseillers
                                    d&apos;entreprise, recrut&eacute;s sur place
                                    par l&apos;OIT, se rendent dans les ateliers
                                    pour &eacute;valuer la conformit&eacute; aux
                                    normes fondamentales du travail&nbsp;&ndash;
                                    la libert&eacute; d&apos;association, les
                                    conventions collectives,
                                    l&apos;&eacute;limination de la
                                    discrimination dans l&apos;emploi, du
                                    travail des enfants et du travail
                                    forc&eacute; &ndash; ainsi qu&apos;aux lois
                                    nationales sur la
                                    r&eacute;mun&eacute;ration, les relations
                                    avec les contractuels et sur le lieu de
                                    travail, la s&eacute;curit&eacute; et la
                                    sant&eacute; au travail et les heures
                                    ouvr&eacute;es. <em>Better Work</em> rend
                                    publiques ces &eacute;valuations par le
                                    biais de son{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://portal.betterwork.org/transparency"
                                        title="Portail transparence"
                                    >
                                        portail transparence
                                    </a>
                                    , ce qui permet aux acheteurs
                                    &eacute;trangers d&apos;orienter leurs
                                    commandes vers les ateliers qui apportent
                                    des am&eacute;liorations &agrave; leur
                                    conformit&eacute;. Le programme fournit
                                    &eacute;galement des conseils et une
                                    assistance aux mesures de r&eacute;paration,
                                    et aide les entreprises &agrave;
                                    am&eacute;liorer leur conformit&eacute;.{" "}
                                    <em>Better Work</em> est structur&eacute; de
                                    fa&ccedil;on &agrave; mieux aligner les
                                    incitations pour les propri&eacute;taires
                                    des ateliers, les acheteurs, les pouvoirs
                                    publics et les travailleurs afin de
                                    prot&eacute;ger les droits et
                                    d&apos;am&eacute;liorer les moyens de
                                    subsistance. Le d&eacute;partement du
                                    Travail des &Eacute;tats-Unis est un
                                    bailleur de fonds important des programmes{" "}
                                    <em>Better Work</em> dans plusieurs pays,
                                    aux c&ocirc;t&eacute;s de nombreux autres
                                    gouvernements et institutions donateurs.
                                </p>
                                <img
                                    src={betterwork}
                                    alt="Travail effectu&eacute; dans une usine propre et bien &eacute;clair&eacute;e"
                                />{" "}
                                <br />
                                <div className="small-text">
                                    <p>
                                        &copy; Better Work Jordanie/Photo
                                        d&rsquo;Ala&rsquo;a al Sukhni
                                    </p>
                                </div>
                            </ExampleInAction>
                            <p>
                                La plupart des associations de l&apos;industrie
                                poss&egrave;dent des crit&egrave;res de base
                                pour les entreprises qui souhaitent en devenir
                                membres. Par exemple, les membres de la{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.eiccoalition.org/"
                                    title="Coalition pour la citoyennet&eacute; de l'industrie &eacute;lectronique&nbsp;(EICC)"
                                >
                                    Coalition pour la citoyennet&eacute; de
                                    l&apos;industrie
                                    &eacute;lectronique&nbsp;(EICC)
                                </a>{" "}
                                s&rsquo;engagent vis-&agrave;-vis d&rsquo;un{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.eiccoalition.org/standards/"
                                    title="Code de conduite"
                                >
                                    code de conduite
                                </a>{" "}
                                commun pour assurer des am&eacute;liorations
                                continues de la responsabilit&eacute; sociale,
                                environnementale et &eacute;thique de leurs
                                cha&icirc;nes d&rsquo;approvisionnement. Ils
                                d&eacute;montrent la conformit&eacute; &agrave;
                                ce code commun &agrave; travers une s&eacute;rie
                                d&rsquo;&eacute;valuations obligatoires,
                                notamment le{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.eiccoalition.org/standards/vap/"
                                    title="Processus valid&eacute; d&rsquo;&eacute;valuation"
                                >
                                    processus valid&eacute;
                                    d&rsquo;&eacute;valuation
                                </a>
                                , qui fournit des normes pour une
                                v&eacute;rification de conformit&eacute; sur
                                site et des &eacute;valuations efficaces et
                                partageables.
                            </p>
                            <p>
                                Qu&apos;il existe ou pas un groupe dans votre
                                industrie, il serait &eacute;galement
                                souhaitable d&apos;&eacute;tudier les
                                syst&egrave;mes de conformit&eacute; sociale qui
                                recouvrent plusieurs secteurs, comme l&rsquo;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org"
                                    title="Initiative pour le commerce &eacute;thique (ETI)"
                                >
                                    Initiative pour le commerce &eacute;thique
                                    (ETI)
                                </a>
                                . Gr&acirc;ce &agrave; des consultations avec
                                des syndicats, des organisations non
                                gouvernementales (ONG) et ses membres
                                corporatifs, l&apos;ETI a mis au point son{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org/eti-base-code"
                                    title="Code de base de l&rsquo;ETI"
                                >
                                    code de base
                                </a>
                                . Les entreprises qui s&apos;associent &agrave;
                                l&apos;ETI doivent adopter ce code et accepter
                                les{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org/resources/principles-implementation"
                                    title="Principes de mise en &oelig;uvre de l'ETI"
                                >
                                    principes de mise en &oelig;uvre de
                                    l&apos;ETI
                                </a>
                                . Elles re&ccedil;oivent alors des outils et une
                                formation, et ont acc&egrave;s au r&eacute;seau
                                mondial de l&apos;ETI qui les aide &agrave;
                                trouver des solutions aux probl&egrave;mes de
                                conformit&eacute; dans la pratique. Pour obtenir
                                de plus amples informations, voir la{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org/node/1192?lang=en"
                                    title="Bo&icirc;te &agrave; outils de l&rsquo;ETI"
                                >
                                    bo&icirc;te &agrave; outils de l&rsquo;ETI
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org/node/1650"
                                    title="Ressources pour le commerce &eacute;thique"
                                >
                                    {" "}
                                    de ressources pour le commerce
                                    &eacute;thique
                                </a>
                                .
                            </p>
                            <p>
                                <Link to="/steps/1">
                                    La 1<sup>&egrave;re</sup>{" "}
                                    &eacute;tape&nbsp;: faire participer les
                                    parties prenantes et les partenaires
                                </Link>
                                offre de nombreux autres exemples de programmes
                                et d&apos;initiatives collaboratives que vous
                                pouvez choisir de rejoindre.
                            </p>
                        </div>
                        <h3>
                            D&eacute;finir la port&eacute;e de votre
                            syst&egrave;me de conformit&eacute; sociale
                        </h3>
                        <div>
                            <p>
                                Il existe dans le monde &agrave; l&apos;heure
                                actuelle quelque 80 000 entreprises
                                transnationales et dix fois plus de filiales. La
                                plupart des entreprises am&eacute;ricaines qui
                                ont des activit&eacute;s commerciales dans le
                                monde passent des contrats avec des
                                fournisseurs, des agents et/ou des producteurs
                                &agrave; l&apos;&eacute;tranger, au lieu
                                d&apos;y acqu&eacute;rir des
                                &eacute;tablissements de production. De plus,
                                peu d&apos;entreprises commercialisent ou
                                vendent une seule ligne de produits et
                                nombreuses sont celles qui font n&eacute;goce de
                                centaines, sinon de milliers de produits. Leurs
                                cha&icirc;nes d&apos;approvisionnement sont
                                longues et complexes, avec un grand nombre de
                                liens entre leurs fournisseurs imm&eacute;diats
                                et les exploitations agricoles ou les mines
                                d&apos;o&ugrave; viennent les mati&egrave;res
                                premi&egrave;res.
                            </p>
                            <p>
                                Pour la plupart des entreprises, il peut
                                &ecirc;tre difficile de se doter d&rsquo;un
                                syst&egrave;me de conformit&eacute; sociale qui
                                permette de superviser et de contr&ocirc;ler
                                tous les acteurs de toutes les cha&icirc;nes
                                d&apos;approvisionnement. Parall&egrave;lement,
                                il est fonci&egrave;rement important que votre
                                entreprise non seulement &eacute;vite par ses
                                activit&eacute;s d&apos;entra&icirc;ner le
                                travail des enfants et le travail forc&eacute;
                                ou d&apos;y contribuer, mais aussi qu&rsquo;elle
                                s&apos;efforce de pr&eacute;venir ou
                                d&apos;att&eacute;nuer les incidences
                                n&eacute;gatives sur les droits des travailleurs
                                li&eacute;es &agrave; ses op&eacute;rations
                                commerciales par l&apos;interm&eacute;diaire de
                                ses relations commerciales. La{" "}
                                <Link to="/steps/2">
                                    2<sup>e</sup>&nbsp;&eacute;tape,
                                    &eacute;valuer les risques et les incidences
                                </Link>
                                , d&eacute;crit les processus de diligence
                                raisonnable qu&apos;il conviendrait de mettre en
                                place pour identifier de tels abus et
                                incidences.
                            </p>
                            <p>
                                Dans l&apos;absolu, le syst&egrave;me de
                                conformit&eacute; sociale d&rsquo;une
                                soci&eacute;t&eacute; devrait &ecirc;tre
                                con&ccedil;u pour classer par ordre de
                                priorit&eacute; les domaines dans la
                                cha&icirc;ne d&apos;approvisionnement o&ugrave;
                                se situent les risques les plus flagrants
                                d&apos;exploitation dans le travail, que ce soit
                                en raison du contexte des op&eacute;rations, des
                                produits ou des services concern&eacute;s, ou
                                d&apos;autres consid&eacute;rations pertinentes.
                                Il vous faudra peut-&ecirc;tre aussi, par la
                                force des choses, classer par ordre de
                                priorit&eacute; les domaines dans la
                                cha&icirc;ne d&apos;approvisionnement o&ugrave;
                                l&rsquo;entreprise poss&egrave;de la plus forte
                                influence pour op&eacute;rer un changement
                                utile. La{" "}
                                <Link to="/steps/2">
                                    2<sup>e</sup>&nbsp;&eacute;tape,
                                    &eacute;valuer les risques et les incidences
                                </Link>
                                , vous permettra &eacute;galement
                                d&apos;identifier les points les plus importants
                                de risques et d&apos;influence.
                            </p>
                            <p>
                                Comme indiqu&eacute; ci-dessous, les
                                recommandations r&eacute;centes des institutions
                                internationales ont directement trait &agrave;
                                la question de responsabilit&eacute; de la
                                cha&icirc;ne
                                d&apos;approvisionnement&nbsp;&ndash;
                                pr&eacute;cisant que les entreprises doivent
                                prendre la responsabilit&eacute; des violations
                                des droits de l&apos;homme et du travail dans
                                leurs cha&icirc;nes d&apos;approvisionnement.
                                Les responsabilit&eacute;s pr&eacute;cises
                                varient selon la gravit&eacute; des
                                probl&egrave;mes dans la cha&icirc;ne
                                d&apos;approvisionnement, la mesure dans
                                laquelle l&rsquo;entreprise est la cause directe
                                d&apos;un probl&egrave;me ou qu&apos;elle y
                                contribue, l&apos;influence qu&apos;elle peut
                                exercer sur le comportement d&apos;un
                                fournisseur, la nature de la relation entre
                                l&rsquo;entreprise et le fournisseur en
                                question, et la taille de l&apos;entreprise et
                                du fournisseur, entre autres facteurs.
                            </p>
                            <OwnWords>
                                <h4>
                                    <OwnWords.Icon />
                                    <strong>
                                        Dans leurs propres mots
                                    </strong>{" "}
                                    <strong>
                                        Recommandation d&apos;une institution
                                        internationale sur la
                                        responsabilit&eacute; de la cha&icirc;ne
                                        d&apos;approvisionnement
                                    </strong>
                                </h4>
                                <p>
                                    <em>
                                        «&nbsp;Lorsque les entreprises comptent
                                        un grand nombre d&apos;entit&eacute;s
                                        dans leurs cha&icirc;nes de valeur, il
                                        peut &ecirc;tre par trop difficile
                                        d&apos;exercer la diligence raisonnable
                                        pour mesurer les incidences
                                        d&eacute;favorables sur les droits de
                                        l&apos;homme de toutes ces
                                        entit&eacute;s. Si tel est le cas, les
                                        entreprises doivent recenser les
                                        domaines g&eacute;n&eacute;raux
                                        o&ugrave; le risque d&apos;incidences
                                        n&eacute;gatives sur les droits de
                                        l&apos;homme est le plus important, que
                                        cela soit d&ucirc; au cadre
                                        d&apos;exploitation de certains
                                        fournisseurs ou clients, aux
                                        activit&eacute;s, produits ou services
                                        particuliers en jeu ou &agrave;
                                        d&apos;autres consid&eacute;rations et
                                        leur conf&eacute;rer un ordre de
                                        priorit&eacute; pour l&apos;exercice de
                                        la diligence raisonnable en
                                        mati&egrave;re de droits de
                                        l&apos;homme&nbsp;».
                                    </em>
                                </p>
                                <p>
                                    <em>
                                        «&nbsp;Les moyens par lesquels une
                                        entreprise s&apos;acquitte de sa
                                        responsabilit&eacute; de respecter les
                                        droits de l&apos;homme seront
                                        proportionnels &agrave; sa taille, entre
                                        autres facteurs. Les petites et moyennes
                                        entreprises peuvent avoir moins de
                                        capacit&eacute;s et des
                                        proc&eacute;dures et des structures de
                                        gestion plus informelles que les plus
                                        grandes entreprises, de sorte que leurs
                                        politiques et proc&eacute;dures
                                        respectives prendront diff&eacute;rentes
                                        formes. Mais certaines petites et
                                        moyennes entreprises peuvent avoir de
                                        graves incidences sur les droits de
                                        l&apos;homme qui exigent des mesures en
                                        rapport quelle que soit leur taille. La
                                        gravit&eacute; des incidences sera
                                        &eacute;tablie en fonction de leur
                                        ampleur, de leur port&eacute;e et du
                                        fait de savoir si elles sont
                                        irr&eacute;m&eacute;diables ou
                                        pas.&nbsp;»
                                    </em>
                                </p>
                                <p>
                                    Source&nbsp;:{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_FR.pdf"
                                        title="Principes directeurs relatifs aux entreprises et aux droits de l'homme des Nations Unies"
                                    >
                                        Principes directeurs relatifs aux
                                        entreprises et aux droits de
                                        l&apos;homme des Nations Unies
                                    </a>
                                    , 2011.
                                </p>
                                <p>
                                    <em>
                                        «&nbsp;&hellip; [dans] des situations
                                        plus complexes dans lesquelles une
                                        entreprise n&rsquo;a pas
                                        contribu&eacute; &agrave; une incidence
                                        n&eacute;gative sur les droits de
                                        l&rsquo;homme, mais o&ugrave; cette
                                        incidence est n&eacute;anmoins
                                        directement li&eacute;e &agrave; ses
                                        activit&eacute;s, biens ou services du
                                        fait de sa relation d&rsquo;affaires
                                        avec une autre entit&eacute;, &hellip;
                                        une entreprise, agissant seule ou en
                                        coop&eacute;ration avec d&rsquo;autres
                                        entit&eacute;s, le cas
                                        &eacute;ch&eacute;ant, [devrait] exercer
                                        son pouvoir pour convaincre
                                        l&rsquo;entit&eacute; qui a une
                                        incidence n&eacute;gative sur les droits
                                        de l&rsquo;homme d&rsquo;emp&ecirc;cher
                                        ou d&rsquo;att&eacute;nuer cette
                                        incidence. Les «&nbsp;relations
                                        d&rsquo;affaires&nbsp;» d&rsquo;une
                                        entreprise englobent les relations avec
                                        ses partenaires commerciaux, les agents
                                        de sa cha&icirc;ne
                                        d&rsquo;approvisionnement,
                                        d&rsquo;autres acteurs non publics et
                                        des agents de l&rsquo;&Eacute;tat
                                        directement li&eacute;s &agrave; ses
                                        activit&eacute;s commerciales, biens ou
                                        services.&nbsp;»
                                    </em>
                                </p>
                                <p>
                                    Source&nbsp;:{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="www.oecd.org/fr/gouvernementdentreprise/mne"
                                        title="Principes directeurs de l'OCDE pour les entreprises multinationales&nbsp;2011."
                                    >
                                        Principes directeurs de l&apos;OCDE pour
                                        les entreprises multinationales
                                    </a>
                                    , 2011.
                                </p>
                                <p>
                                    <em>
                                        «&nbsp;La Soci&eacute;t&eacute;
                                        financi&egrave;re internationale (SFI)
                                        exige que les entreprises qui
                                        re&ccedil;oivent des pr&ecirc;ts de la
                                        SFI remplissent huit Normes de
                                        performance environnementale et sociale.
                                        La deuxi&egrave;me norme de performance
                                        pr&eacute;sente les
                                        responsabilit&eacute;s de
                                        l&apos;entreprise quant aux questions du
                                        travail et de l&apos;emploi. En ce qui
                                        concerne leurs propres employ&eacute;s,
                                        les entreprises ont la
                                        responsabilit&eacute; d&apos;identifier
                                        et de rem&eacute;dier aux
                                        probl&egrave;mes ayant trait &agrave;
                                        toutes les normes fondamentales du
                                        travail. En ce qui concerne les
                                        employ&eacute;s contractuels, la
                                        responsabilit&eacute; de
                                        l&apos;entreprise est plus
                                        limit&eacute;e, et en ce qui concerne
                                        les travailleurs relevant de ses
                                        cha&icirc;nes d&apos;approvisionnement,
                                        l&apos;entreprise est uniquement
                                        charg&eacute;e d&apos;identifier le
                                        travail des enfants, le travail
                                        forc&eacute; ainsi que les
                                        probl&egrave;mes importants de
                                        s&eacute;curit&eacute;, et d&apos;y
                                        rem&eacute;dier. La SFI d&eacute;finit
                                        les «&nbsp;travailleurs de la
                                        cha&icirc;ne
                                        d&apos;approvisionnement&nbsp;» comme
                                        &eacute;tant «&nbsp;des travailleurs
                                        engag&eacute;s par les principaux
                                        fournisseurs [de
                                        l&apos;entreprise]&hellip; les
                                        principaux fournisseurs &eacute;tant
                                        ceux qui fournissent en permanence des
                                        marchandises ou des mat&eacute;riaux
                                        n&eacute;cessaires aux &hellip;
                                        proc&eacute;d&eacute;s
                                        d&apos;activit&eacute;
                                        essentiels&hellip;&nbsp;»
                                    </em>
                                </p>
                                <p>
                                    Source&nbsp;:{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ifc.org/wps/wcm/connect/topics_ext_content/ifc_external_corporate_site/sustainability-at-ifc/policies-standards/performance-standards/ps2"
                                        title="IFC Performance Standard 2"
                                    >
                                        IFC Performance Standard 2
                                    </a>
                                    <em>,</em> 2012.
                                </p>
                            </OwnWords>
                        </div>
                        <h3>Syst&egrave;mes de gestion</h3>
                        <div>
                            <p>
                                &Agrave; l&apos;instar de tout
                                d&eacute;partement d&apos;une entreprise
                                op&eacute;rant avec succ&egrave;s,
                                l&apos;&eacute;quipe de gestion de la
                                conformit&eacute; sociale devrait
                                poss&eacute;der des syst&egrave;mes de gestion
                                int&eacute;gr&eacute;s &agrave; l&apos;ensemble
                                des syst&egrave;mes de l&apos;entreprise, au
                                lieu de travailler en silo d&eacute;tach&eacute;
                                des autres op&eacute;rations commerciales. De
                                nombreux &eacute;l&eacute;ments d&apos;un
                                syst&egrave;me de gestion&nbsp;&ndash; par
                                exemple l&apos;&eacute;valuation des risques,
                                les plans de communication, les syst&egrave;mes
                                d&apos;information, les m&eacute;canismes de
                                r&eacute;clamation et de plainte, et le
                                contr&ocirc;le ind&eacute;pendant&nbsp;&ndash;
                                sont le th&egrave;me de cette appli et sont
                                trait&eacute;s de fa&ccedil;on plus exhaustive
                                dans diff&eacute;rents chapitres.
                            </p>
                            <p>
                                La gestion de tout syst&egrave;me ou programme
                                devrait commencer par une d&eacute;finition des
                                buts, des objectifs et des cibles de
                                performance. De nombreux programmes de
                                conformit&eacute; sociale &eacute;tablissent des
                                mesures, ou indicateurs-cl&eacute;s de
                                performance, pour jauger les progr&egrave;s. Ces
                                indicateurs-cl&eacute;s peuvent &ecirc;tre mis
                                au point en interne, ou dans le cadre d&apos;un
                                exercice d&apos;analyse comparative des
                                programmes de diff&eacute;rentes entreprises.
                                L&apos;&eacute;quipe, une fois &eacute;tablie,
                                devrait comparer p&eacute;riodiquement les
                                progr&egrave;s par rapport &agrave; ces buts ou
                                indicateurs, et rectifier les domaines o&ugrave;
                                ils n&apos;auront pas &eacute;t&eacute;
                                atteints. L&apos;&eacute;quipe devrait
                                &eacute;galement passer en revue ses propres
                                processus et politiques &agrave; intervalles
                                r&eacute;guliers, pour les actualiser si
                                n&eacute;cessaire. Les entreprises dot&eacute;es
                                de solides syst&egrave;mes de conformit&eacute;
                                sociale sont toujours en mode
                                «&nbsp;d&apos;am&eacute;lioration
                                continue&nbsp;».&nbsp;
                            </p>
                            <p>
                                L&rsquo;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://responsiblesourcingtool.org/"
                                    title="Outil d&rsquo;approvisionnement responsable"
                                >
                                    Outil d&rsquo;approvisionnement responsable
                                </a>
                                , lanc&eacute; en&nbsp;2016 par Verit&eacute; et
                                le d&eacute;partement d&apos;&Eacute;tat des
                                &Eacute;tats-Unis, comprend un{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://responsiblesourcingtool.org/riskmanagementprocess"
                                    title="Exemple de flux de processus de gestion des risques de la cha&icirc;ne d&rsquo;approvisionnement"
                                >
                                    Exemple de flux de processus de gestion des
                                    risques de la cha&icirc;ne
                                    d&rsquo;approvisionnement
                                </a>{" "}
                                qui montre comment fonctionne un syst&egrave;me
                                de gestion d&rsquo;am&eacute;lioration continue
                                efficace pour d&eacute;tecter, att&eacute;nuer
                                et pr&eacute;venir la traite des personnes au
                                sein d&rsquo;une cha&icirc;ne
                                d&rsquo;approvisionnement. En outre, son{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://responsiblesourcingtool.org/supplychainassurance"
                                    title="Exemple de programme d&rsquo;assurance de la cha&icirc;ne d&rsquo;approvisionnement"
                                >
                                    Exemple de programme d&rsquo;assurance de la
                                    cha&icirc;ne d&rsquo;approvisionnement
                                </a>{" "}
                                fournit un aper&ccedil;u des processus
                                qu&rsquo;une entreprise peut mettre en
                                &oelig;uvre pour identifier les situations
                                potentielles de risque de traite des personnes
                                dans ses cha&icirc;nes
                                d&rsquo;approvisionnement, traiter les
                                probl&egrave;mes identifi&eacute;s, mettre en
                                &oelig;uvre des solutions durables et surveiller
                                les r&eacute;sultats des fournisseurs au fil du
                                temps. Une autre ressource pr&eacute;cisant les
                                mesures que les entreprises peuvent prendre pour
                                mettre en place et g&eacute;rer une cha&icirc;ne
                                d&rsquo;approvisionnement durable{" "}
                                <em>est le document </em>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://supply-chain.unglobalcompact.org/site/article/183"
                                    title="Durabilit&eacute; des cha&icirc;nes d&rsquo;approvisionnement&nbsp;: Guide pratique pour l&rsquo;am&eacute;lioration continue"
                                >
                                    <em>
                                        Durabilit&eacute; des cha&icirc;nes
                                        d&rsquo;approvisionnement&nbsp;: Guide
                                        pratique pour
                                        l&rsquo;am&eacute;lioration continue
                                    </em>
                                </a>
                                <em>,</em> publi&eacute; [en anglais] par le
                                Pacte mondial des Nations Unies et BSR.
                            </p>
                            <p>
                                Au niveau pratique, l&rsquo;&eacute;quipe de
                                direction devrait s&rsquo;assurer d&rsquo;avoir
                                document&eacute; toutes les fonctions du
                                syst&egrave;me de conformit&eacute; sociale. La
                                documentation en question devrait inclure des
                                politiques et proc&eacute;dures &eacute;crites
                                pour l&rsquo;ensemble des composantes du
                                syst&egrave;me, ainsi que des protocoles de
                                communication. Elle devrait &eacute;galement
                                inclure des documents &agrave; distribuer
                                &agrave; d&apos;autres d&eacute;partements de
                                l&apos;entreprise, par exemple un
                                r&eacute;sum&eacute; des dispositions des
                                contrats de fournisseurs concernant leurs
                                obligations de conformit&eacute; sociale, ce qui
                                sera sans doute utile pour le d&eacute;partement
                                charg&eacute; des achats. Les politiques et
                                proc&eacute;dures document&eacute;es de
                                l&apos;&eacute;quipe devraient avoir l&apos;aval
                                et le soutien de la direction sup&eacute;rieure.
                            </p>
                            <p>
                                Les entreprises et les associations sectorielles
                                peuvent choisir d&rsquo;inclure des dispositions
                                relatives aux syst&egrave;mes de gestion dans
                                leurs codes de conduite et d&rsquo;exiger que
                                les membres de l&rsquo;association et/ou les
                                fournisseurs s&rsquo;y conforment. Ce concept
                                est d&eacute;montr&eacute; dans l&rsquo;exemple
                                ci-dessous.
                            </p>
                            <ExampleInAction>
                                <h4>
                                    <ExampleInAction.Icon />
                                    <strong>Exemple d&rsquo;action</strong>{" "}
                                    <strong>
                                        Code de conduite de la Coalition pour la
                                        citoyennet&eacute; de l&apos;industrie
                                        &eacute;lectronique&nbsp;(EICC)&nbsp;&ndash;
                                        Syst&egrave;mes de gestion
                                    </strong>
                                </h4>
                                <p>
                                    <em>Extrait du </em>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.eiccoalition.org/standards/code-of-conduct/"
                                        title="Code de conduite de l&rsquo;EICC v. 5.1 (2016)"
                                    >
                                        <em>
                                            Code de conduite de l&rsquo;EICC v.
                                            5.1 (2016)
                                        </em>
                                    </a>
                                </p>
                                <p>
                                    «&nbsp;Les Participants doivent adopter ou
                                    mettre en place un syst&egrave;me de gestion
                                    dont le p&eacute;rim&egrave;tre est
                                    li&eacute; au contenu de ce Code. Le
                                    syst&egrave;me de gestion doit &ecirc;tre
                                    con&ccedil;u pour veiller &agrave; : (a) la
                                    conformit&eacute; aux lois et
                                    r&eacute;glementations applicables et aux
                                    exigences des clients li&eacute;es &agrave;
                                    l&apos;exploitation et aux produits des
                                    participants ; (b) la conformit&eacute; avec
                                    ce Code et (c) l&rsquo;identification et
                                    l&rsquo;att&eacute;nuation des risques
                                    op&eacute;rationnels li&eacute;s &agrave; ce
                                    Code. Il doit &eacute;galement faciliter une
                                    am&eacute;lioration continue.
                                </p>
                                <p>
                                    Le syst&egrave;me de gestion doit inclure
                                    les &eacute;l&eacute;ments suivants :
                                </p>
                                <ol>
                                    <li>
                                        <h4>Engagement de l&apos;entreprise</h4>
                                        <p>
                                            Des d&eacute;clarations de politique
                                            en mati&egrave;re de
                                            responsabilit&eacute; sociale et
                                            environnementale de
                                            l&apos;entreprise qui affirment
                                            l&apos;engagement du Participant
                                            &agrave; la conformit&eacute; et
                                            &agrave; une am&eacute;lioration
                                            continue, soutenues par la direction
                                            g&eacute;n&eacute;rale et
                                            affich&eacute;es sur le lieu de
                                            travail en langue locale.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Obligation de rendre des comptes et
                                            responsabilit&eacute; de la
                                            direction
                                        </h4>
                                        <p>
                                            Les Participants identifient
                                            clairement le(s) haut(s)
                                            dirigeant(s) et
                                            repr&eacute;sentant(s) de la
                                            soci&eacute;t&eacute; responsable(s)
                                            d&apos;assurer la mise en
                                            &oelig;uvre des syst&egrave;mes de
                                            gestion et des programmes
                                            associ&eacute;s. Les hauts
                                            dirigeants r&eacute;examinent
                                            r&eacute;guli&egrave;rement le
                                            syst&egrave;me de gestion.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Exigences l&eacute;gales et
                                            exigences des clients
                                        </h4>
                                        <p>
                                            Un processus destin&eacute; &agrave;
                                            identifier, suivre et comprendre les
                                            lois et les r&eacute;glementations
                                            applicables ainsi que les exigences
                                            des clients, y compris les exigences
                                            de ce Code.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            &Eacute;valuation et gestion des
                                            risques
                                        </h4>
                                        <p>
                                            Un processus pour identifier la
                                            conformit&eacute; juridique, les
                                            pratiques en mati&egrave;re
                                            d&apos;environnement, de
                                            sant&eacute;, de
                                            s&eacute;curit&eacute; et de
                                            main-d&apos;&oelig;uvre et les
                                            risques en mati&egrave;re
                                            d&apos;&eacute;thique
                                            associ&eacute;s aux activit&eacute;s
                                            du Participant.
                                        </p>
                                        <p>
                                            D&eacute;termination de
                                            l&apos;importance relative de chaque
                                            risque et mise en place de
                                            proc&eacute;dures de contr&ocirc;les
                                            proc&eacute;duraux et physiques
                                            ad&eacute;quats pour contr&ocirc;ler
                                            les risques identifi&eacute;s et
                                            veiller &agrave; la
                                            conformit&eacute; aux
                                            r&eacute;glementations.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Objectifs d&apos;am&eacute;lioration
                                        </h4>
                                        <p>
                                            Des objectifs, des cibles de
                                            performance et des plans de mise en
                                            &oelig;uvre &eacute;crits afin
                                            d&apos;am&eacute;liorer la
                                            performance sociale et
                                            environnementale du Participant, y
                                            compris une &eacute;valuation
                                            p&eacute;riodique de la performance
                                            du Participant au regard de ces
                                            objectifs.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Formation</h4>
                                        <p>
                                            Des programmes pour former les
                                            directeurs et les employ&eacute;s
                                            &agrave; la mise en &oelig;uvre des
                                            r&egrave;glements, des
                                            proc&eacute;dures et des objectifs
                                            d&apos;am&eacute;lioration du
                                            Participant, ainsi qu&apos;au
                                            respect des exigences l&eacute;gales
                                            et r&eacute;glementaires
                                            applicables.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Communication</h4>
                                        <p>
                                            Un processus pour communiquer des
                                            informations claires et
                                            pr&eacute;cises sur les politiques,
                                            les pratiques, les attentes et la
                                            performance du Participant aux
                                            employ&eacute;s, aux fournisseurs et
                                            aux clients.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Commentaires et participation des
                                            employ&eacute;s
                                        </h4>
                                        <p>
                                            Des processus continus pour
                                            &eacute;valuer la
                                            compr&eacute;hension des
                                            employ&eacute;s et obtenir leurs
                                            commentaires sur les pratiques et
                                            conditions trait&eacute;es dans ce
                                            Code, et pour favoriser
                                            l&rsquo;am&eacute;lioration
                                            continue.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Audits et &eacute;valuations</h4>
                                        <p>
                                            Des auto-&eacute;valuations
                                            p&eacute;riodiques pour assurer la
                                            conformit&eacute; aux exigences
                                            l&eacute;gales et
                                            r&eacute;glementaires, au contenu de
                                            ce Code et aux exigences
                                            contractuelles du client
                                            li&eacute;es &agrave; la
                                            responsabilit&eacute; sociale et
                                            environnementale.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Processus d&apos;actions correctives
                                        </h4>
                                        <p>
                                            Un processus pour une correction
                                            rapide des lacunes
                                            identifi&eacute;es par les
                                            &eacute;valuations, inspections,
                                            enqu&ecirc;tes et examens internes
                                            ou externes.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Documentation et archivage</h4>
                                        <p>
                                            La cr&eacute;ation et la
                                            conservation de documents et de
                                            registres pour assurer la
                                            conformit&eacute;
                                            r&eacute;glementaire et envers les
                                            exigences de la
                                            soci&eacute;t&eacute; avec la
                                            confidentialit&eacute; qui
                                            s&apos;impose pour prot&eacute;ger
                                            la vie priv&eacute;e.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Responsabilit&eacute; du fournisseur
                                        </h4>
                                        <p>
                                            Un processus pour communiquer les
                                            exigences du Code aux fournisseurs
                                            et pour suivre la conformit&eacute;
                                            du fournisseur vis-&agrave;-vis du
                                            Code.&nbsp;»
                                        </p>
                                    </li>
                                </ol>
                            </ExampleInAction>
                        </div>
                        <h3>
                            L&apos;&eacute;quipe de conformit&eacute; sociale
                        </h3>
                        <p>
                            Dans les multinationales, l&apos;&eacute;quipe de
                            conformit&eacute; sociale se compose
                            d&apos;ordinaire d&apos;une &eacute;quipe de
                            gestion, sise au si&egrave;ge, et d&apos;une
                            &eacute;quipe de terrain, bas&eacute;e dans les pays
                            d&apos;o&ugrave; viennent les produits&nbsp;; les
                            PME, elles, ont g&eacute;n&eacute;ralement des
                            &eacute;quipes de conformit&eacute; sociale plus
                            r&eacute;duites.
                        </p>
                        <p>
                            Les structures d&apos;entreprise sont
                            vari&eacute;es, mais une &eacute;quipe de
                            conformit&eacute; sociale est souvent
                            int&eacute;gr&eacute;e dans un d&eacute;partement
                            plus vaste de responsabilit&eacute; sociale
                            d&apos;entreprise (RSE) ou de durabilit&eacute; au
                            sein de l&apos;entreprise. Les &eacute;quipes de
                            conformit&eacute; sociale/RSE qui r&eacute;ussissent
                            le mieux se d&eacute;marquent par leur ligne de
                            communication directe avec les d&eacute;cideurs au
                            plus haut niveau, y compris le PDG et le conseil
                            d&apos;administration. De plus, la fonction
                            conformit&eacute; sociale/RSE doit &ecirc;tre
                            pleinement int&eacute;gr&eacute;e dans les autres
                            volets de l&apos;entreprise, surtout notamment dans
                            la gestion de la cha&icirc;ne
                            d&apos;approvisionnement, le d&eacute;veloppement et
                            l&apos;approvisionnement des produits. Pour donner
                            un exemple, le d&eacute;partement de
                            conformit&eacute; sociale de l&apos;entreprise Nike
                            est localis&eacute; avec «&nbsp;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://about.nike.com/pages/sustainable-innovation"
                                title="&eacute;quipe d&rsquo;innovation durable"
                            >
                                l&apos;&eacute;quipe d&rsquo;innovation durable
                            </a>
                            &nbsp;», charg&eacute;e non seulement de la
                            conformit&eacute; environnementale et sociale, mais
                            aussi du d&eacute;veloppement des produits.
                        </p>
                        <p>
                            L&apos;&eacute;quipe de gestion de la
                            conformit&eacute; sociale supervise tout le
                            syst&egrave;me de conformit&eacute; sociale. Elle
                            planifie les activit&eacute;s, surveille la mise en
                            &oelig;uvre, et re&ccedil;oit et analyse les
                            rapports du terrain. Dans l&apos;id&eacute;al,
                            l&apos;&eacute;quipe est &eacute;galement
                            habilit&eacute;e &agrave; prendre des
                            d&eacute;cisions relatives &agrave; des situations
                            individuelles et au syst&egrave;me dans son
                            int&eacute;gralit&eacute;. En dehors des
                            comp&eacute;tences fondamentales de gestion telles
                            que la budg&eacute;tisation et l&apos;analyse des
                            donn&eacute;es, l&apos;&eacute;quipe de gestion
                            devrait inclure des membres qui poss&egrave;dent la
                            souplesse n&eacute;cessaire pour faire face &agrave;
                            des situations inattendues, qui peuvent motiver et
                            &eacute;pauler l&apos;&eacute;quipe de terrain et
                            plaider pour le syst&egrave;me aupr&egrave;s de la
                            direction sup&eacute;rieure. Les membres de
                            l&apos;&eacute;quipe de gestion devraient
                            &eacute;galement poss&eacute;der une certaine
                            exp&eacute;rience du terrain. Ils devraient observer
                            les audits, s&apos;entretenir avec les travailleurs
                            et les syndicats qui les repr&eacute;sentent, sur le
                            lieu de travail et &agrave; l&apos;ext&eacute;rieur,
                            et vivre eux-m&ecirc;mes la r&eacute;alit&eacute;
                            des lieux de travail d&apos;o&ugrave; viennent les
                            produits.&nbsp;
                        </p>
                        <p>
                            L&apos;&eacute;quipe de gestion de la
                            conformit&eacute; sociale devrait &ecirc;tre
                            positionn&eacute;e dans une optique de
                            continuit&eacute; sur le long terme. Dans les
                            entreprises o&ugrave; la conformit&eacute; sociale
                            est s&eacute;par&eacute;e des autres fonctions
                            commerciales, le d&eacute;part d&apos;un ou de deux
                            membres essentiels de l&apos;&eacute;quipe peut
                            nuire &agrave; tout le programme de
                            conformit&eacute; sociale. Il est donc important que
                            l&apos;&eacute;quipe renforce les capacit&eacute;s
                            d&apos;un &eacute;ventail de membres du personnel,
                            afin que les op&eacute;rations puissent survivre
                            &agrave; tout changement du personnel.
                        </p>
                        <p>
                            Enfin, l&apos;&eacute;quipe de gestion doit disposer
                            des ressources ad&eacute;quates pour
                            s&apos;acquitter de ses fonctions. Mais surtout,
                            l&apos;affectation des ressources par la direction
                            sup&eacute;rieure, ainsi que les structures
                            d&apos;incitation au rendement qui
                            r&eacute;compensent les employ&eacute;s pour
                            l&apos;innovation, l&apos;initiative et les
                            incidences de la conformit&eacute; sociale,
                            refl&egrave;tent l&rsquo;importance qu&rsquo;accorde
                            l&rsquo;entreprise &agrave; la conformit&eacute;
                            sociale.
                        </p>
                        <p>
                            Les &eacute;quipes de conformit&eacute; sociale sur
                            le terrain se composent de v&eacute;rificateurs
                            sociaux qui se chargent d&apos;audits sociaux dans
                            les &eacute;tablissements de production et
                            collaborent avec la direction des usines pour
                            identifier les strat&eacute;gies de
                            r&eacute;paration appropri&eacute;es. La composition
                            des &eacute;quipes de terrain, les
                            comp&eacute;tences n&eacute;cessaires et les autres
                            questions connexes sont d&eacute;velopp&eacute;es
                            dans la{" "}
                            <Link to="/steps/5">
                                5<sup>e</sup>&nbsp;&eacute;tape : surveiller la
                                conformit&eacute;.
                            </Link>
                        </p>
                        <p>
                            <em>
                                *Remarque&nbsp;: Les r&eacute;f&eacute;rences
                                &agrave; des soci&eacute;t&eacute;s et
                                entit&eacute;s non gouvernementales
                                sp&eacute;cifiques dans ce guide sont &agrave;
                                des fins d&rsquo;information uniquement afin de
                                d&eacute;montrer les bonnes pratiques reconnues
                                &agrave; l&rsquo;&eacute;chelle internationale,
                                &agrave; la date de lancement de l&rsquo;appli.
                                Toute r&eacute;f&eacute;rence &agrave; ces
                                entit&eacute;s ne saurait constituer une
                                approbation officielle de ces derni&egrave;res,
                                de leurs produits ou de leurs services par le
                                d&eacute;partement du Travail des
                                &Eacute;tats-Unis,{" "}
                            </em>
                            <em>
                                et leur inclusion dans cette appli ne saurait
                                &ecirc;tre interpr&eacute;t&eacute;e comme un
                                examen exhaustif des pratiques de ces
                                entit&eacute;s dans tous les domaines
                            </em>
                            <em>.</em>
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>Autres ressources</Accordion.Title>
                    <Accordion.Panel>
                        <ol>
                            <li>
                                Dickson, Marsha, Suzanne Loker, Molly Eckman,
                                «&nbsp;Stakeholder Theory and Social
                                Responsibility&nbsp;». Social Responsibility in
                                the Global Apparel Industry ; Fairchild Books,
                                2009 : 112-215. [en anglais]&nbsp;
                            </li>
                            <li>
                                L&apos;Organisation internationale de
                                normalisation (ISO) a &eacute;tabli
                                diff&eacute;rentes normes pour les
                                syst&egrave;mes de gestion : ISO 17021, Guide
                                ISO 65, ISO&nbsp;9001 et ISO 19011. Ces normes
                                incluent notamment l&apos;impartialit&eacute; et
                                la confidentialit&eacute;, la
                                v&eacute;rification de la documentation et des
                                registres, les &eacute;valuations
                                r&eacute;alis&eacute;es par la direction, les
                                crit&egrave;res de qualification du personnel,
                                les proc&eacute;dures d&apos;audit, les
                                r&eacute;clamations et plaintes ; disponibles
                                sur{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.iso.org/fr/home.html"
                                    title="Organisation internationale de normalisation"
                                >
                                    http://www.iso.org/fr/home.html
                                </a>
                                .
                            </li>
                            <li>
                                La norme 1 de performance de la SFI
                                d&eacute;taille les &eacute;l&eacute;ments de
                                syst&egrave;mes efficaces de gestion
                                environnementale et sociale (ESMS) ; disponible
                                [en anglais] sur{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ifc.org/wps/wcm/connect/b29a4600498009cfa7fcf7336b93d75f/Updated_GN1-2012.pdf?MOD=AJPERES"
                                    title="&eacute;l&eacute;ments de syst&egrave;mes efficaces de gestion environnementale et sociale (ESMS)"
                                >
                                    http://www.ifc.org/wps/wcm/connect/b29a4600498009cfa7fcf7336b93d75f/Updated_GN1-2012.pdf?MOD=AJPERES
                                </a>
                            </li>
                            <li>
                                Locke, Richard M., Thomas Kochan, Monica Romis,
                                et Fei Qin. «&nbsp;Beyond corporate codes of
                                conduct: Work organization and labour standards
                                at Nike&rsquo;s suppliers&nbsp;»,{" "}
                                <em>International Labour Review</em> 146, no 1/2
                                (2007): 21-37. [en anglais]
                            </li>
                            <li>
                                Mamic, Ivanka, «&nbsp;Managing Global Supply
                                Chain: The Sports Footwear, Apparel and Retail
                                Sectors&nbsp;»,{" "}
                                <em>Journal of Business Ethics,</em> (2005) 59:
                                81-100. [en anglais]
                            </li>
                            <li>
                                Social Accountability International et
                                Soci&eacute;t&eacute; financi&egrave;re
                                internationale<em>. </em>Measure and Improve
                                Your Labor Standards Performance. 2010 ;
                                disponible [en anglais] sur{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ifc.org/wps/wcm/connect/a4aab30048865910b81afa6a6515bb18/SAI_IFC_LaborHandbook_Ch1-Intro.pdf?MOD=AJPERES"
                                    title="Measure and Improve Your Labor Standards Performance."
                                >
                                    http://www1.ifc.org/wps/wcm/connect/a4aab30048865910b81afa6a6515bb18/SAI_IFC_LaborHandbook_Ch1-Intro.pdf?MOD=AJPERES&amp;CACHEID=a4aab30048865910b81afa6a6515bb18
                                </a>
                                .
                            </li>
                            <li>
                                Social Accountability International (SAI)
                                propose un programme intitul&eacute;
                                «&nbsp;Social Fingerprint&nbsp;» centr&eacute;
                                sur l&apos;&eacute;laboration de syst&egrave;mes
                                de gestion. En participant au programme
                                «&nbsp;Social Fingerprint Supply Chain
                                Management&nbsp;», les entreprises peuvent
                                jauger leurs progr&egrave;s dans
                                diff&eacute;rents domaines essentiels de la
                                conformit&eacute; sociale et acc&eacute;der
                                &agrave; une formation en ligne pour
                                perfectionner leurs comp&eacute;tences ;
                                disponible [en anglais seulement] sur{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://sa-intl.org/index.cfm?fuseaction=Page.viewPage"
                                    title="Social Fingerprint"
                                >
                                    http://socialfingerprint.org/
                                </a>
                                . N.B. : il s&apos;agit d&apos;un service
                                tarif&eacute;.
                            </li>

                            <li>
                                Conseil des droits de l&apos;homme des Nations
                                Unies.{" "}
                                <em>
                                    Principes directeurs relatifs aux
                                    entreprises et aux droits de l&apos;homme:
                                    mise en &oelig;uvre du cadre de
                                    r&eacute;f&eacute;rence
                                    «&nbsp;prot&eacute;ger, respecter et
                                    r&eacute;parer&nbsp;» des Nations Unies
                                </em>
                                . New York&nbsp;: 21&nbsp;mars&nbsp;2011&nbsp;;
                                disponible sur{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_FR.pdf"
                                    title="Principes directeurs relatifs aux entreprises et aux droits de l'homme: mise en &oelig;uvre du cadre de r&eacute;f&eacute;rence «&nbsp;prot&eacute;ger, respecter et r&eacute;parer&nbsp;» des Nations Unies"
                                >
                                    http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_FR.pdf
                                </a>
                                .
                            </li>
                        </ol>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
            <border-separator> </border-separator>
        </div>
    );
};

export default fr;
