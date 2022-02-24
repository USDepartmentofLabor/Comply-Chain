import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";
import betterwork from "../../../../../../static/images/betterwork.jpg";
import { Link } from "react-router-dom";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Rejoindre à un programme de conformité sociale existant</h1>
                                <p>
                                    Dans certaines industries, des groupes
                                    d&apos;entreprises se sont r&eacute;unis
                                    pour &eacute;laborer des syst&egrave;mes de
                                    conformit&eacute; sociale
                                    collectifs&nbsp;&ndash; ou dans certains cas
                                    des volets de syst&egrave;mes&nbsp;&ndash;
                                    que des entreprises individuelles peuvent
                                    adopter. L&apos;appartenance &agrave; ce
                                    type de r&eacute;seau exige d&apos;ordinaire
                                    un engagement en mati&egrave;re de temps et
                                    de ressources pour une collaboration avec
                                    d&apos;autres entreprises, ce qui permet au
                                    bout du compte d&rsquo;&eacute;conomiser des
                                    efforts et des ressources en s&apos;appuyant
                                    sur les conclusions et
                                    l&apos;exp&eacute;rience d&apos;autres
                                    entreprises. Il est important de vous
                                    informer sur les initiatives qui existent
                                    dans votre industrie avant de d&eacute;cider
                                    de vous joindre &agrave; un programme
                                    existant ou alors d&apos;&eacute;laborer le
                                    v&ocirc;tre.
                                </p>
                                <ExampleInAction id="better-work-garment">
                                    <h4>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>Exemple d&apos;action</strong>
                                        &nbsp;{": "}
                                        Le programme{" "}
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
                                        travail (OIT) et de la
                                        Soci&eacute;t&eacute; financi&egrave;re
                                        internationale (SFI), est destin&eacute;
                                        &agrave; am&eacute;liorer les pratiques
                                        du travail et la productivit&eacute;
                                        dans l&apos;industrie de la confection.{" "}
                                        <em>Better Work</em> est un programme
                                        transparent de suivi des ateliers
                                        dirig&eacute; par un organisme
                                        cr&eacute;dible (l&apos;OIT) dans les
                                        pays participants. Des conseillers
                                        d&apos;entreprise, recrut&eacute;s sur
                                        place par l&apos;OIT, se rendent dans
                                        les ateliers pour &eacute;valuer la
                                        conformit&eacute; aux normes
                                        fondamentales du travail&nbsp;&ndash; la
                                        libert&eacute; d&apos;association, les
                                        conventions collectives,
                                        l&apos;&eacute;limination de la
                                        discrimination dans l&apos;emploi, du
                                        travail des enfants et du travail
                                        forc&eacute; &ndash; ainsi qu&apos;aux
                                        lois nationales sur la
                                        r&eacute;mun&eacute;ration, les
                                        relations avec les contractuels et sur
                                        le lieu de travail, la
                                        s&eacute;curit&eacute; et la
                                        sant&eacute; au travail et les heures
                                        ouvr&eacute;es. <em>Better Work</em>{" "}
                                        rend publiques ces &eacute;valuations
                                        par le biais de son{" "}
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
                                        commandes vers les ateliers qui
                                        apportent des am&eacute;liorations
                                        &agrave; leur conformit&eacute;. Le
                                        programme fournit &eacute;galement des
                                        conseils et une assistance aux mesures
                                        de r&eacute;paration, et aide les
                                        entreprises &agrave; am&eacute;liorer
                                        leur conformit&eacute;.{" "}
                                        <em>Better Work</em> est
                                        structur&eacute; de fa&ccedil;on
                                        &agrave; mieux aligner les incitations
                                        pour les propri&eacute;taires des
                                        ateliers, les acheteurs, les pouvoirs
                                        publics et les travailleurs afin de
                                        prot&eacute;ger les droits et
                                        d&apos;am&eacute;liorer les moyens de
                                        subsistance. Le d&eacute;partement du
                                        Travail des &Eacute;tats-Unis est un
                                        bailleur de fonds important des
                                        programmes <em>Better Work</em> dans
                                        plusieurs pays, aux c&ocirc;t&eacute;s
                                        de nombreux autres gouvernements et
                                        institutions donateurs.
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
                                    La plupart des associations de
                                    l&apos;industrie poss&egrave;dent des
                                    crit&egrave;res de base pour les entreprises
                                    qui souhaitent en devenir membres. Par
                                    exemple, les membres de la{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.responsiblebusiness.org/"
                                        title="Responsible Business Alliance (RBA)"
                                    >
                                        Responsible Business Alliance
                                    </a>
                                    , (anciennement Coalition pour la citoyenneté de l&apos;industrie électronique)
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
                                    continues de la responsabilit&eacute;
                                    sociale, environnementale et &eacute;thique
                                    de leurs cha&icirc;nes
                                    d&rsquo;approvisionnement. Ils
                                    d&eacute;montrent la conformit&eacute;
                                    &agrave; ce code commun &agrave; travers une
                                    s&eacute;rie d&rsquo;&eacute;valuations
                                    obligatoires, notamment le{" "}
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
                                    Qu&apos;il existe ou pas un groupe dans
                                    votre industrie, il serait &eacute;galement
                                    souhaitable d&apos;&eacute;tudier les
                                    syst&egrave;mes de conformit&eacute; sociale
                                    qui recouvrent plusieurs secteurs, comme
                                    l&rsquo;
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org"
                                        title="Initiative pour le commerce &eacute;thique (ETI)"
                                    >
                                        Initiative pour le commerce
                                        &eacute;thique (ETI)
                                    </a>
                                    . Gr&acirc;ce &agrave; des consultations
                                    avec des syndicats, des organisations non
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
                                    . Les entreprises qui s&apos;associent
                                    &agrave; l&apos;ETI doivent adopter ce code
                                    et accepter les{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/resources/principles-implementation"
                                        title="Principes de mise en &oelig;uvre de l'ETI"
                                    >
                                        principes de mise en &oelig;uvre de
                                        l&apos;ETI
                                    </a>
                                    . Elles re&ccedil;oivent alors des outils et
                                    une formation, et ont acc&egrave;s au
                                    r&eacute;seau mondial de l&apos;ETI qui les
                                    aide &agrave; trouver des solutions aux
                                    probl&egrave;mes de conformit&eacute; dans
                                    la pratique. Pour obtenir de plus amples
                                    informations, voir la{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/node/1192?lang=en"
                                        title="Bo&icirc;te &agrave; outils de l&rsquo;ETI"
                                    >
                                        bo&icirc;te &agrave; outils de
                                        l&rsquo;ETI
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
                                    La&nbsp;
                                    <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.dol.gov/ilab/complychain/steps/1"
                                        >
                                    première étape, Faire participer les parties prenantes et les partenaires
                                    </a>,
                                     offre de nombreux autres exemples de programmes et
                                     d&apos;initiatives collaboratives que vous pouvez choisir de rejoindre.</p>

            </div>
        </StaticData>
    );
};

export default fr;
