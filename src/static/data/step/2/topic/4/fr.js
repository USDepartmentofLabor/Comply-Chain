import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains_fr.png";
import genericImport from "../../../../../images/generic_import_fr.png";

const fr = ({ pdf }) => {
    return (
        <StaticData>
            <div>
                <h1>
                    Cartographie de la cha&icirc;ne d&apos;approvisionnement
                </h1>
                <p>
                    Les entreprises savent qui sont leurs fournisseurs directs
                    et o&ugrave; ils se trouvent. Toutefois, dans de nombreux
                    cas, les entreprises s&apos;approvisionnent aupr&egrave;s de
                    vendeurs ou d&apos;agents qui ne divulguent pas les usines
                    ou les autres &eacute;tablissements de production
                    aupr&egrave;s desquels <em>ils</em> s&apos;approvisionnent
                    eux. Les entreprises sont souvent inform&eacute;es des
                    usines et des &eacute;tablissements de production du premier
                    niveau de leurs cha&icirc;nes d&apos;approvisionnement, mais
                    connaissent mal ou pas du tout les pratiques des
                    fournisseurs de deuxi&egrave;me ou de troisi&egrave;me
                    niveau de la cha&icirc;ne. Les entreprises devraient
                    disposer d&rsquo;autant d&rsquo;informations que possible
                    sur leurs fournisseurs &agrave; tous les niveaux de la
                    cha&icirc;ne d&apos;approvisionnement, y compris les
                    producteurs de mati&egrave;res premi&egrave;res. Plus une
                    entreprise est en mesure de cartographier avec exactitude
                    ses cha&icirc;nes d&apos;approvisionnement, plus elles saura
                    identifier avec pr&eacute;cision les lieux dans la
                    cha&icirc;ne o&ugrave; se situent les risques les plus
                    s&eacute;rieux de violations des droits du travail. Il est
                    donc important de communiquer avec les &eacute;quipes de
                    gestion de l&apos;approvisionnement et/ou de la cha&icirc;ne
                    d&apos;approvisionnement pour obtenir des donn&eacute;es sur
                    leurs propres cha&icirc;nes d&apos;approvisionnement, et
                    s&apos;il est n&eacute;cessaire d&apos;obtenir davantage
                    d&apos;informations, de collaborer avec elles pour
                    compl&eacute;ter ces donn&eacute;es.
                </p>
                <p>
                    Si votre entreprise n&apos;a pas &agrave; l&apos;heure
                    actuelle acc&egrave;s aux informations sur les fournisseurs
                    en dehors de ceux aupr&egrave;s desquels elle
                    s&rsquo;approvisionne directement, pensez &agrave; la
                    possibilit&eacute; de vous adresser au service juridique
                    et/ou aux autres services appropri&eacute;s au sein de votre
                    entreprise pour &eacute;tablir des exigences contractuelles
                    de communication d&apos;informations exhaustives sur tous
                    les fournisseurs.
                </p>
                <p>
                    Cette cartographie inclut non seulement le fait de savoir
                    qui sont vos fournisseurs (dans toute la cha&icirc;ne
                    d&apos;approvisionnement), mais &eacute;galement o&ugrave;
                    ils se trouvent. Ces informations sont essentielles pour
                    l&apos;&eacute;valuation notamment des risques et des
                    incidences li&eacute;s aux environnements juridiques et
                    r&eacute;glementaires. Cet exercice peut &eacute;galement
                    inclure des cartes indiquant le caract&egrave;re saisonnier
                    de la production ou des cycles de production au cours de
                    l&apos;ann&eacute;e, ceux-ci pouvant &ecirc;tre li&eacute;s
                    aux p&eacute;riodes de risques accrus de violations des
                    droits du travail.&nbsp;
                </p>
                <p>
                    Voici trois exemples de cartes de cha&icirc;nes
                    d&apos;approvisionnement:
                </p>
                <p>
                    Exemple 1: Cha&icirc;nes d&apos;approvisionnement du
                    cacao (C&ocirc;te d&apos;Ivoire et Ghana) <br />{" "}
                    Exemple&nbsp;2: Cha&icirc;nes d&apos;approvisionnement
                    de l&apos;&eacute;lectronique&nbsp;&ndash;{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.resolv.org/site-eiscm/files/2011/02/Tracing-a-Path-Forward-A-Study-of-the-Challenges-of-the-Supply-Chain-for-Target-Metals-Used-in-Electronics_FINAL-Updated.pdf"
                        title="Cobalt"
                    >
                        Cobalt
                    </a>{" "}
                    (voir page&nbsp;44 du PDF),{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.resolv.org/site-eiscm/files/2011/02/Tracing-a-Path-Forward-A-Study-of-the-Challenges-of-the-Supply-Chain-for-Target-Metals-Used-in-Electronics_FINAL-Updated.pdf"
                        title="Tantale"
                    >
                        Tantale
                    </a>{" "}
                    (voir page&nbsp;43 du PDF),{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.resolv.org/site-eiscm/files/2011/02/Tracing-a-Path-Forward-A-Study-of-the-Challenges-of-the-Supply-Chain-for-Target-Metals-Used-in-Electronics_FINAL-Updated.pdf"
                        title="&Eacute;tain"
                    >
                        &Eacute;tain
                    </a>{" "}
                    (voir page&nbsp;42 du PDF) <br /> Exemple 3:
                    Cha&icirc;ne d&rsquo;alimentation d&rsquo;importation
                    g&eacute;n&eacute;rique&nbsp;&ndash; mod&egrave;le de
                    d&eacute;tail
                </p>
                <p>
                    Les marchandises produites &agrave; partir de produits
                    agricoles ou miniers peuvent &ecirc;tre
                    particuli&egrave;rement difficiles &agrave; pister, car les
                    mati&egrave;res premi&egrave;res peuvent &ecirc;tre
                    r&eacute;colt&eacute;es ou extraites de mines dans des
                    r&eacute;gions tr&egrave;s dispers&eacute;es, puis
                    &ecirc;tre regroup&eacute;es ou m&eacute;lang&eacute;es
                    tr&egrave;s t&ocirc;t dans la cha&icirc;ne
                    d&apos;approvisionnement. Certaines coalitions
                    d&apos;entreprises ou de l&apos;industrie ont tent&eacute;
                    des programmes de «&nbsp;tra&ccedil;abilit&eacute;&nbsp;»
                    pour pister certaines marchandises, en remontant la
                    cha&icirc;ne d&apos;approvisionnement de son produit fini
                    jusqu&apos;au point d&apos;origine.
                </p>
                <p>
                    Pour &ecirc;tre clair, la cartographie des cha&icirc;nes
                    d&apos;approvisionnement ne signifie pas
                    n&eacute;cessairement qu&rsquo;une entreprise est
                    responsable de toutes les incidences et de tous les risques
                    associ&eacute;s &agrave; toutes les entit&eacute;s de la
                    cha&icirc;ne. Comme l&apos;indiquent les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                        title="Principes directeurs des Nations Unies relatifs aux entreprises et aux droits de l'homme"
                    >
                        Principes directeurs des Nations Unies relatifs aux
                        entreprises et aux droits de l&apos;homme
                    </a>
                    , «&nbsp;lorsque les entreprises comptent un grand nombre
                    d&apos;entit&eacute;s dans leurs cha&icirc;nes de valeur, il
                    peut &ecirc;tre difficile d&apos;exercer la diligence
                    raisonnable pour les incidences d&eacute;favorables sur les
                    droits de l&apos;homme de toutes ces entit&eacute;s. Si tel
                    est le cas, les entreprises doivent recenser les domaines
                    g&eacute;n&eacute;raux o&ugrave; le risque d&apos;incidences
                    n&eacute;gatives sur les droits de l&apos;homme est le plus
                    important, que cela soit d&ucirc; au cadre
                    d&apos;exploitation de certains fournisseurs ou clients, aux
                    activit&eacute;s, produits ou services particuliers en jeu
                    ou &agrave; d&apos;autres consid&eacute;rations et leur
                    conf&eacute;rer un ordre de priorit&eacute; pour
                    l&apos;exercice de la diligence raisonnable en
                    mati&egrave;re de droits de l&apos;homme&nbsp;». Ce
                    processus d&apos;&eacute;tablissement des priorit&eacute;s
                    est abord&eacute; ci-dessous.
                </p>
                <br />
                <h2>
                    Cha&icirc;nes d&apos;approvisionnement du cacao (C&ocirc;te
                    d&apos;Ivoire et Ghana)
                </h2>
                <br />{" "}
                <img
                    src={cocoaSupplyChains}
                    alt="Cha&icirc;nes d'approvisionnement du cacao"
                    longdesc="#cocoa_chains"
                />
                <p className="small-text">
                    Source:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.crea.org/"
                    >
                        Centre pour la r&eacute;flexion,
                        l&rsquo;&eacute;ducation et l&rsquo;action (CREA).
                    </a>
                </p>
                <div id="cocoa_chains">
                    <Accordion pdf={pdf} id="cocoa-chains-acc">
                        <Accordion.Section id="cocoa-description">
                            <Accordion.Title>
                                Description du graphique
                            </Accordion.Title>
                            <Accordion.Panel>
                                Ce graphique illustre les diff&eacute;rents
                                acteurs de la cha&icirc;ne
                                d&apos;approvisionnement du cacao: les
                                agriculteurs, les receveurs/transporteurs, les
                                transformateurs, les exportateurs, le
                                march&eacute; mondial, les fabricants (qui
                                peuvent &eacute;galement fabriquer
                                d&rsquo;autres f&egrave;ves), les clients et les
                                consommateurs. Ce graphique r&eacute;pertorie
                                &eacute;galement des exemples
                                d&rsquo;entit&eacute;s et
                                d&rsquo;activit&eacute;s r&eacute;parties entre
                                ces cat&eacute;gories de la cha&icirc;ne
                                d&rsquo;approvisionnement dans deux pays: la
                                C&ocirc;te d&rsquo;Ivoire et le Ghana. En
                                C&ocirc;te d&rsquo;Ivoire, les agriculteurs sont
                                par exemple les petites exploitations agricoles
                                familiales (il en existe plus de 750&nbsp;000),
                                les op&eacute;rations ind&eacute;pendantes et
                                quelques coop&eacute;ratives (o&ugrave; le cacao
                                repr&eacute;sente moins de 20&nbsp;% des
                                cultures). Les receveurs et transporteurs
                                comprennent les op&eacute;rateurs
                                financ&eacute;s par des entreprises
                                priv&eacute;es, les pisteurs et les traitants,
                                qui disposent de moins de liens de
                                qualit&eacute;. Les transformateurs et les
                                exportateurs comprennent diff&eacute;rents
                                participants, notamment les
                                soci&eacute;t&eacute;s internationales. Cette
                                cat&eacute;gorie comprend les producteurs de
                                produits semi-finis. Au Ghana, les agriculteurs
                                sont par exemple les petites exploitations
                                agricoles familiales (dont le nombre
                                d&eacute;passe les 600&nbsp;000), les
                                op&eacute;rations ind&eacute;pendantes et
                                quelques coop&eacute;ratives (o&ugrave; le cacao
                                repr&eacute;sente moins de 10&nbsp;% des
                                cultures). L&rsquo;achat initial des
                                f&egrave;ves de cacao est effectu&eacute; par
                                des acheteurs agr&eacute;&eacute;s (LBC).
                                L&rsquo;Office du cacao du Ghana (COCOBOD) et
                                ses organisations affili&eacute;es
                                s&rsquo;assurent que la vente est assortie
                                d&rsquo;exigences de qualit&eacute;. Au Ghana,
                                les transformateurs et les exportateurs sont
                                notamment le COCOBOD et des entreprises
                                internationales. Cette cat&eacute;gorie comprend
                                les producteurs de produits semi-finis. Le
                                graphique indique &eacute;galement des
                                &eacute;tapes finales similaires dans le
                                processus des deux pays. Les f&egrave;ves et les
                                produits issus des petites exploitations
                                agricoles familiales passent au march&eacute;
                                mondial. Les fabricants poursuivent la
                                fabrication des produits. Les magasins,
                                restaurants et petites entreprises correspondent
                                aux clients. Et les consommateurs sont les
                                clients finaux.&nbsp;
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
                <br />
                <h2>
                    Cha&icirc;ne d&rsquo;approvisionnement d&rsquo;importation
                    g&eacute;n&eacute;rique&nbsp;&ndash; mod&egrave;le de
                    d&eacute;tail
                </h2>
                <br />{" "}
                <img
                    src={genericImport}
                    alt="Cha&icirc;ne d&rsquo;approvisionnement d&rsquo;importation g&eacute;n&eacute;rique&nbsp;- mod&egrave;le de d&eacute;tail"
                    longdesc="#generic_import"
                />
                <p className="small-text">
                    Source:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://corporate.target.com/"
                    >
                        Target Corporation.
                    </a>
                </p>
                <div>
                    <Accordion pdf={pdf} id="generic-import-acc">
                        <Accordion.Section id="generic-import-description">
                            <Accordion.Title>
                                Description du graphique
                            </Accordion.Title>
                            <Accordion.Panel>
                                <p>
                                    Ce graphique illustre les &eacute;tapes
                                    d&rsquo;une cha&icirc;ne
                                    d&rsquo;approvisionnement
                                    d&rsquo;importation g&eacute;n&eacute;rique.
                                    La description d&rsquo;une cha&icirc;ne
                                    d&rsquo;approvisionnement mod&egrave;le de
                                    d&eacute;tail typique commence ainsi:
                                </p>
                                <ul>
                                    <li>
                                        Premi&egrave;re &eacute;tape:
                                        d&eacute;veloppement du produit.
                                        &Agrave; ce stade, le concept du produit
                                        et un fournisseur sont choisis, et le
                                        produit re&ccedil;oit sa conception
                                        finale. C&apos;est &eacute;galement
                                        l&agrave; que le financement est
                                        d&eacute;cid&eacute; et intervient cinq
                                        &agrave; neuf mois avant la date de mise
                                        en magasin.
                                    </li>
                                    <li>
                                        Deuxi&egrave;me &eacute;tape: commande
                                        et production. Au cours de cette
                                        &eacute;tape se produisent le placement
                                        et la classification du produit&nbsp;;
                                        un acheteur envoie un bon de commande
                                        &eacute;lectronique au fournisseur, au
                                        commissionnaire en douane, au
                                        transitaire et &agrave; la banque.
                                        Viennent ensuite le choix de
                                        l&rsquo;usine et les tests de
                                        pr&eacute;production, suivis de la
                                        production de la marchandise par
                                        l&rsquo;usine pour v&eacute;rifier
                                        l&apos;assurance qualit&eacute; et la
                                        conformit&eacute; sociale. Cette
                                        &eacute;tape intervient deux &agrave;
                                        cinq&nbsp;mois avant la date de mise en
                                        magasin.
                                    </li>
                                    <li>
                                        Troisi&egrave;me &eacute;tape:
                                        r&eacute;servation du transporteur. Le
                                        vendeur proc&egrave;de &agrave; une
                                        r&eacute;servation de fret aupr&egrave;s
                                        d&rsquo;un transitaire et le livre
                                        &agrave; un terminal ou une station de
                                        fret de conteneur (CFS). Cette
                                        &eacute;tape se produit deux &agrave;
                                        quatre&nbsp;mois avant la date de mise
                                        en magasin.
                                    </li>
                                    <li>
                                        Quatri&egrave;me &eacute;tape:
                                        traitement des documents et
                                        exp&eacute;dition. Le fournisseur remet
                                        les documents d&apos;entr&eacute;e au
                                        commissionnaire de transport et
                                        r&egrave;gle les charges locales. Le
                                        transitaire envoie &eacute;galement les
                                        documents au courtier, par voie
                                        &eacute;lectronique. Un
                                        r&eacute;c&eacute;piss&eacute; de
                                        transitaire est remis au fournisseur
                                        (dont il a besoin pour &ecirc;tre
                                        pay&eacute;). &Agrave; ce stade, le
                                        manifeste &agrave; 24&nbsp;heures et les
                                        informations relatives au classement de
                                        s&eacute;curit&eacute; de
                                        l&rsquo;importateur (ISF) sont
                                        &eacute;galement &agrave; remettre
                                        &agrave; la douane am&eacute;ricaine.
                                        Apr&egrave;s le d&eacute;part du moyen
                                        de transport, le transitaire envoie les
                                        informations d&rsquo;exp&eacute;dition
                                        par voie &eacute;lectronique au
                                        commissionnaire en douane et &agrave;
                                        l&rsquo;acheteur. Cette &eacute;tape se
                                        d&eacute;roule un &agrave;
                                        deux&nbsp;mois avant la date de mise en
                                        magasin.
                                    </li>
                                    <li>
                                        Cinqui&egrave;me &eacute;tape:
                                        d&eacute;douanement. Le courtier
                                        re&ccedil;oit les documents
                                        d&apos;entr&eacute;e
                                        &eacute;lectroniques, il les passe en
                                        revue et en assure la
                                        v&eacute;rification. Il d&eacute;pose
                                        alors une demande d&apos;entr&eacute;e
                                        aupr&egrave;s des douanes
                                        am&eacute;ricaines et autres organismes
                                        publics. &Agrave; cette &eacute;tape,
                                        l&apos;acheteur envoie &eacute;galement
                                        des instructions d&apos;affectation au
                                        d&eacute;groupement. Puis le moyen de
                                        transport arrive et le conteneur est
                                        d&eacute;douan&eacute; pour
                                        distribution. Tout cela se
                                        d&eacute;roule un mois avant la date de
                                        mise en magasin.
                                    </li>
                                    <li>
                                        Sixi&egrave;me &eacute;tape:
                                        d&eacute;groupement/exp&eacute;dition
                                        &agrave; la destination finale. Elle se
                                        d&eacute;roule deux semaines avant la
                                        date de mise en magasin. La livraison
                                        est organis&eacute;e au centre de
                                        d&eacute;groupement (ou &agrave; la
                                        destination finale). Les services de
                                        d&eacute;consolidation distribuent
                                        ensuite le produit conform&eacute;ment
                                        aux instructions d&rsquo;affectation de
                                        l&rsquo;acheteur. Le produit est
                                        livr&eacute; au centre de distribution,
                                        &agrave; l&rsquo;entrep&ocirc;t ou au
                                        magasin. Une section Modalit&eacute;s et
                                        informations suppl&eacute;mentaires sur
                                        le graphique d&eacute;finit les
                                        acronymes utilis&eacute;s dans
                                        l&rsquo;illustration et mentionne
                                        &eacute;galement que tous les
                                        importateurs ne proc&egrave;dent pas
                                        &agrave; une classification des produits
                                        au d&eacute;but de la cha&icirc;ne
                                        d&rsquo;approvisionnement.
                                    </li>
                                </ul>
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
            </div>
        </StaticData>
    );
};

export default fr;
