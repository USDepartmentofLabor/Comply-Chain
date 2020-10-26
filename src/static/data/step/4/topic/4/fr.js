import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains_fr.png";
import genericImport from "../../../../../images/generic_import_fr.png";
import electronics from "../../../../../images/electronics.jpg";
import minerals from "../../../../../images/minerals.jpg";
import seafood from "../../../../../images/seafood.jpg";



const fr = () => {
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
                    Les marchandises produites à partir de produits agricoles ou miniers
                    peuvent être particulièrement difficiles à pister, car les matières
                    premières peuvent être récoltées ou extraites de mines dans des régions
                    très dispersées, puis être regroupées ou mélangées très tôt dans la chaîne
                    d&apos;approvisionnement. Certaines coalitions d&apos;entreprises ou de
                    l&apos;industrie ont tenté des programmes de « traçabilité » pour pister
                    certaines marchandises, en remontant la chaîne d&apos;approvisionnement
                    de son produit fini jusqu&apos;au point d&apos;origine.
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
                    , «&nbsp;lorsque les entreprises comptent un grand nombre d&apos;entités dans leurs chaînes de valeur,
                    il peut être difficile d&apos;exercer la diligence raisonnable pour les incidences défavorables sur les
                    droits de l&apos;homme de toutes ces entités. Si tel est le cas, les entreprises doivent recenser les
                    domaines généraux où le risque d&apos;incidences négatives sur les droits de l&apos;homme est le plus
                    important, que cela soit dû au cadre d&apos;exploitation de certains fournisseurs ou clients, aux activités,
                    produits ou services particuliers en jeu ou à d&apos;autres considérations et leur conférer un ordre de
                    priorité pour l&apos;exercice de la diligence raisonnable en matière de droits de l&apos;homme. 
                    » Ce processus d&apos;établissement des priorités est abordé ci-dessous.
                </p>
                <p>Voici trois exemples de cartes de chaînes d&apos;approvisionnement :</p>
                <br />
                <div id="cocoa_chains">
                    <Accordion id="cocoa-chains-acc">
                        <Accordion.Section id="cocoa-description">
                            <Accordion.Title>
                               Cha&icirc;nes d&apos;approvisionnement du cacao (C&ocirc;ted&apos;Ivoire et Ghana)
                              </Accordion.Title>
                            <Accordion.Panel>
                                <br />
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
                                Ce graphique illustre les différents acteurs de la chaîne d&apos;approvisionnement
                                du cacao : les agriculteurs, les receveurs/transporteurs, les transformateurs,
                                les exportateurs, le marché mondial, les fabricants (qui peuvent également fabriquer
                                d’autres fèves), les clients (qui comprennent les magasins, les restaurants et les
                                petites entreprises qui achètent des produits pour les vendre) et les consommateurs
                                finaux. Ce graphique répertorie également des exemples d’entités et d’activités réparties
                                entre ces catégories de la chaîne d’approvisionnement dans deux pays : la Côte d’Ivoire
                                et le Ghana. En Côte d’Ivoire, les agriculteurs sont par exemple les petites exploitations
                                agricoles familiales (il en existe plus de 750 000), les opérations indépendantes et
                                quelques coopératives (où le cacao représente moins de 20 % des cultures). Les receveurs
                                et transporteurs comprennent les opérateurs financés par des entreprises privées, les pisteurs
                                (intermédiaires qui achètent directement auprès des exploitations agricoles) et les traitants
                                (qui achètent du cacao auprès des pisteurs). Les transformateurs et les exportateurs comprennent
                                différents participants, notamment les sociétés internationales. Cette catégorie comprend les
                                producteurs de produits semi-finis. Au Ghana, les agriculteurs sont par exemple les petites
                                exploitations agricoles familiales (dont le nombre dépasse les 600 000), les opérations
                                indépendantes et quelques coopératives (où le cacao représente moins de 10 % des cultures).
                                L’achat initial des fèves de cacao est effectué par des acheteurs agréés (LBC). L’Office du
                                cacao du Ghana* (COCOBOD) et ses organisations affiliées s’assurent que la vente est assortie
                                d’exigences de qualité. Au Ghana, les transformateurs et les exportateurs sont notamment le
                                COCOBOD et des entreprises internationales. Cette catégorie comprend les producteurs de
                                produits semi-finis. Le graphique indique également des étapes finales similaires dans le
                                processus des deux pays. Les fèves et les produits issus des petites exploitations agricoles
                                familiales passent sur le marché mondial aux fabricants, qui transforment le produit brut en produit
                                final pour les consommateurs (p. ex. les fèves de cacao en barres chocolatées). Les magasins,
                                restaurants et petites entreprises servent de clients de points de vente et de service initiaux.
                                Les consommateurs secondaires sont les clients finaux, tels qu’une personne qui achète une barre
                                chocolatée dans une épicerie (point de vente) ou un morceau de gâteau au chocolat dans un
                                restaurant (point de service).
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
                <Accordion id="electronic-supply-chain">
                     <Accordion.Section id="electronic-supply-chain-description">
                                            <Accordion.Title>
                                            Chaînes d&apos;approvisionnement des produits électroniques
                                        </Accordion.Title>
                                        <Accordion.Panel>
                                        <img
                                              src={electronics}
                                              alt="Electronics Supply Chains"
                                              longdesc="#electronics_chains"
                                              />
                                        <img
                                              src={minerals}
                                              alt="DRC Minerals Supply Chains"
                                              longdesc="#minerals_chains"
                                              />
                                        <p className="small-text">
                                        Le schéma ci-dessus illustre les étapes d’ensemble de la chaîne d&apos;approvisionnement
                                        pour le secteur des produits électroniques, qui doit se procurer de nombreux métaux de
                                        terre rares en République démocratique du Congo (RDC), en Afrique centrale. Bien que
                                        la conception et le développement des produits électroniques de grande consommation
                                        se produisent souvent à proximité des utilisateurs finaux, comme aux États-Unis,
                                        l’approvisionnement en matériaux commence souvent à l’autre bout du monde, en Afrique centrale.
                                        Une fois extraits, ces matériaux sont acheminés par voie terrestre vers des ports situés sur la
                                        côte est-africaine, d’où ils partent par voie maritime jusqu’à l’Asie orientale et du Sud-Est,
                                        où des fonderies les raffinent pour les transformer en composants qu’utilisent les fabriques
                                        de la région, d’Europe et d’Amérique du Nord.

                                          </p>
                                        </Accordion.Panel>
                                    </Accordion.Section>
                                    </Accordion>
                <div>
                    <Accordion id="generic-import-acc">
                        <Accordion.Section id="generic-import-description">
                            <Accordion.Title>
                                Chaînes d&apos;approvisionnement de produits de la mer
                            </Accordion.Title>
                            <Accordion.Panel>
                            <img
                                  src={seafood}
                                  alt="Seafood Supply Chains"
                                  longdesc="#seafood_chains"
                                  />

                                <p>
                                    Chaque chaîne d&apos;approvisionnement dans le secteur des produits de la mer
                                    emprunte plus ou moins la même voie du pêcheur jusqu’à l’acheteur final, bien qu’il
                                    y ait certaines différences en chemin. De plus, l’utilisateur final de cette chaîne
                                    varie énormément, avec des points de service (p. ex. restaurants, hôtels, hôpitaux et
                                    écoles) et des points de vente (p. ex. magasins, etc.). Concernant les produits de la
                                    mer sauvages, des flottes d’embarcations peuvent coordonner leurs efforts avec un « 
                                    vaisseau-mère » afin de rassembler les prises quotidiennes. Une fois débarqués, les
                                    produits de la mer sont livrés soit à un transformateur primaire, soit au marché ouvert.
                                    Le transformateur primaire reçoit les produits et les transforme pour les vendre aux détaillants
                                    ou aux distributeurs de la restauration, qui les acheminent ensuite vers les consommateurs finaux.
                                    Les produits de la mer vendus sur ces marchés plus officiels passent par de nombreuses étapes
                                    aux mains de toute une gamme d’acteurs intermédiaires, depuis les transformateurs primaires aux
                                    transformateurs secondaires, en passant par les négociants, les transporteurs, etc., qui
                                    jouent tous un rôle dans l’acheminement du produit pour se rapprocher du point de vente final.

                                </p>
                                <p className="small-text">
                                        Source:{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.resolve.ngo/site-eiscm/default.htm?RD=1"
                                        >
                                           https://www.resolve.ngo/site-eiscm/default.htm?RD=1
                                        </a>.
                                    </p>
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
            </div>
        </StaticData>
    );
};

export default fr;
