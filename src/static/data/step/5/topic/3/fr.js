import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import usFlag from "../../../../../images/us_flag.png";
import verite from "../../../../../images/verite.png";
import { UsFlag, Verite, VeriteFlagWrapper } from "./shared";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Les outils d&rsquo;audit</h1>
                <p>
                    Les formats des outils d&rsquo;audit varient ; certains sont
                    sur papier (pour &ecirc;tre transcrits par la suite dans un
                    syst&egrave;me &eacute;lectronique), alors que d&apos;autres
                    sont programm&eacute;s dans des ordinateurs de poche. Les
                    outils &eacute;lectroniques ne sont pas forc&eacute;ment
                    sup&eacute;rieurs aux outils sur support papier, mais ils
                    permettent de rendre compte plus efficacement et rapidement
                    aux membres de l&apos;&eacute;quipe qui ne sont pas sur le
                    terrain.
                </p>
                <p>
                    Les outils d&rsquo;audit sont en fait des s&eacute;ries de
                    questions qui d&eacute;coulent directement du code de
                    conduite ; dans un certain sens, ils « traduisent » les
                    grandes d&eacute;clarations du code en des points de
                    donn&eacute;es sp&eacute;cifiques qui doivent &ecirc;tre
                    recueillis pour &eacute;valuer la conformit&eacute; avec le
                    code.
                </p>
                <p>
                    Par exemple, en ce qui concerne le travail des enfants, un
                    code de conduite pourrait &eacute;noncer:
                </p>
                <ul>
                    <li>
                        Les fournisseurs n&apos;emploieront pas d&apos;enfants
                        de moins de 15 ans ou d&apos;un &acirc;ge
                        inf&eacute;rieur &agrave; l&apos;&acirc;ge minimum
                        d&rsquo;admission &agrave; l&rsquo;emploi d&eacute;fini
                        par les lois locales, le plus &eacute;lev&eacute;
                        &eacute;tant retenu.
                    </li>
                </ul>
                <p>
                    En se fondant sur cette disposition du code, l&apos;outil
                    d&apos;audit m&egrave;nera alors l&apos;auditeur &agrave;
                    examiner les questions suivantes:
                </p>
                <ul>
                    <li>
                        Quelle preuve de documentation de l&apos;&acirc;ge est
                        exig&eacute;e au moment de l&apos;embauche?
                        Comment cette documentation est-elle
                        v&eacute;rifi&eacute;e? O&ugrave; est
                        conserv&eacute;e la documentation de preuve de
                        l&apos;&acirc;ge?
                    </li>
                    <li>
                        Si des enfants de moins de 15 ans se trouvent dans
                        l&apos;&eacute;tablissement, travaillent-ils dans le
                        cadre d&apos;un programme l&eacute;gal
                        d&apos;apprentissage ou de formation? Quelle
                        documentation l&apos;&eacute;tablissement conserve-t-il
                        pour v&eacute;rifier qu&apos;il s&apos;agit d&apos;un
                        programme l&eacute;gitime d&apos;apprentissage ou de
                        formation?
                    </li>
                    <li>
                        Les enfants font-ils des «&nbsp;travaux
                        l&eacute;gers&nbsp;» tels que d&eacute;finis par les
                        lois locales ou par les normes internationales?
                        Comment l&apos;&eacute;tablissement d&eacute;finit-il et
                        documente-t-il les « travaux l&eacute;gers »?
                    </li>
                    <li>
                        Quelles sont les conditions de travail de tous les
                        mineurs de moins de 18&nbsp;ans? Quelles
                        t&acirc;ches sp&eacute;cifiques accomplissent-ils?
                        De quels &eacute;quipements se servent-ils? Ces
                        t&acirc;ches ou ces &eacute;quipements peuvent-ils
                        &ecirc;tre dangereux?
                    </li>
                    <li>
                        Quelle distinction l&apos;&eacute;tablissement fait-il
                        entre les travaux dangereux ou pas, et comment
                        s&apos;assure-t-il que les mineurs de moins de 18 ans
                        n&apos;accomplissent pas de travaux dangereux, en
                        contravention avec le droit international?
                    </li>
                </ul>
                <p>
                    Le travail forc&eacute; est une violation extr&ecirc;mement
                    complexe des droits du travail et il peut prendre de
                    nombreuses formes. Le document{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_099626/lang--en/index.htm"
                        title="Combattre le travail forc&eacute;: Manuel pour les employeurs et le secteur priv&eacute;&nbsp;&ndash; Brochure 4"
                    >
                        <em>
                            Combattre le travail forc&eacute;: Manuel pour
                            les employeurs et le secteur
                            priv&eacute;&nbsp;&ndash; Brochure&nbsp;4
                        </em>
                    </a>{" "}
                    de l&rsquo;OIT [en anglais], comprend une liste de
                    contr&ocirc;le et des directives utiles aux auditeurs et au
                    personnel en charge de la conformit&eacute; pour identifier
                    les cas de travail forc&eacute; au niveau de
                    l&rsquo;entreprise et dans les cha&icirc;nes
                    d&rsquo;approvisionnement internationales. En 2016,
                    l&rsquo;OIT a &eacute;galement lanc&eacute; une application
                    mobile,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm"
                        title="Points de contr&ocirc;le &agrave; l&rsquo;intention des entreprises: &eacute;liminer et pr&eacute;venir le travail forc&eacute;"
                    >
                        Points de contr&ocirc;le &agrave; l&rsquo;intention des
                        entreprises: &eacute;liminer et pr&eacute;venir le
                        travail forc&eacute;
                    </a>
                    , disponible en anglais uniquement, pour permettre aux
                    entreprises, aux auditeurs et au personnel en charge de la
                    conformit&eacute; de cr&eacute;er des listes de
                    contr&ocirc;le interactives afin d&rsquo;aider &agrave;
                    &eacute;liminer et &agrave; pr&eacute;venir le travail
                    forc&eacute; dans les op&eacute;rations commerciales. Les
                    questions suivantes, issues d&rsquo;une publication de
                    l&rsquo;OIT, peuvent aider un auditeur &agrave; identifier
                    des formes particuli&egrave;res de travail
                    forc&eacute;.&nbsp;
                </p>
                <h2>
                    Tableau&nbsp;1: Indicateurs de travail forc&eacute;
                    obtenu par des pratiques de recrutement
                </h2>
                <ol>
                    <li>
                        Y a-t-il des travailleurs n&eacute;s ou descendants
                        d&apos;un statut d&rsquo;«&nbsp;esclave&nbsp;» ou de
                        servitude?
                    </li>
                    <li>
                        Y a-t-il des travailleurs enlev&eacute;s, retenus
                        pendant le processus de recrutement ou vendus pour ce
                        travail?
                    </li>
                    <li>
                        Y a-t-il des travailleurs recrut&eacute;s sous une forme
                        d&apos;arrangement pour dettes, par exemple une avance
                        ou un pr&ecirc;t, qu&apos;ils travaillent &agrave;
                        rembourser?
                    </li>
                    <li>
                        Au moment du recrutement, y a-t-il des travailleurs
                        auxquels on a dit qu&apos;ils feraient un travail
                        d&apos;une nature diff&eacute;rente de celui qu&apos;ils
                        accomplissent?
                    </li>
                    <li>
                        Au moment du recrutement, a-t-on promis &agrave; des
                        travailleurs certaines conditions de travail, des
                        modalit&eacute;s contractuelles d&apos;emploi, des
                        conditions d&rsquo;existence, des lieux de travail, des
                        employeurs ou des salaires/des revenus diff&eacute;rents
                        de ceux qu&apos;ils ont &agrave; l&apos;heure
                        actuelle?
                    </li>
                    <li>
                        Au moment du recrutement, a-t-on offert un mariage
                        &agrave; certains travailleurs &agrave; titre
                        d&apos;incitation?
                    </li>
                </ol>
                <h2>
                    Tableau&nbsp;2: Indicateurs de travail forc&eacute;
                    obtenu par un travail et des conditions d&rsquo;existence
                    sous la contrainte
                </h2>
                <ol>
                    <li>
                        Y a-t-il des travailleurs qui font des heures
                        suppl&eacute;mentaires excessives, au-del&agrave; des
                        limites pr&eacute;vues par la loi?
                    </li>
                    <li>
                        Y a-t-il des travailleurs contraints d&rsquo;effectuer
                        des astreintes (jour ou nuit)?
                    </li>
                    <li>
                        L&apos;employeur restreint-il la libert&eacute; de
                        d&eacute;placement ou de communication des travailleurs
                        avec des tiers, &agrave; l&apos;int&eacute;rieur ou
                        &agrave; l&apos;ext&eacute;rieur du lieu de
                        travail?
                    </li>
                    <li>
                        Si l&apos;employeur fournit un logement aux
                        travailleurs, les conditions d&rsquo;existence
                        sont-elles d&eacute;gradantes?
                    </li>
                    <li>
                        L&apos;employeur contraint-il les travailleurs &agrave;
                        ex&eacute;cuter des activit&eacute;s illicites, &agrave;
                        travailler pour son domicile priv&eacute; ou sa famille
                        ou &agrave; prendre des drogues
                        toxicomanog&egrave;nes?
                    </li>
                    <li>
                        L&apos;employeur impose-t-il aux travailleurs des dettes
                        ou les amplifie-t-il, par exemple en falsifiant des
                        registres, en gonflant les prix d&apos;articles que les
                        travailleurs sont contraints d&apos;acheter, en
                        r&eacute;duisant la valeur des articles ou des services
                        produits par les travailleurs, en facturant des
                        int&eacute;r&ecirc;ts excessifs sur les pr&ecirc;ts ou
                        les avances accord&eacute;s aux travailleurs,
                        etc.?
                    </li>
                    <li>
                        Y a-t-il des travailleurs tributaires de
                        l&apos;employeur quant au logement, &agrave; la
                        nourriture et aux autres produits de premi&egrave;re
                        n&eacute;cessit&eacute;?
                    </li>
                    <li>
                        Y a-t-il des travailleurs en relation de
                        d&eacute;pendance avec l&apos;employeur au-del&agrave;
                        de leur emploi, par ex. rapports personnels,
                        d&eacute;pendance vis-&agrave;-vis de l&apos;employeur
                        quant &agrave; l&apos;emploi de membres de leur famille,
                        etc.?
                    </li>
                </ol>
                <h2>
                    Tableau&nbsp;3: Indicateurs de travail forc&eacute;
                    obtenu par l&apos;impossibilit&eacute; de partir
                </h2>
                <ol>
                    <li>
                        Y a-t-il des travailleurs qui estiment qu&apos;ils ne
                        sont pas libres de d&eacute;missionner en raison de la
                        formation, ou d&apos;autres avantages re&ccedil;us de
                        l&apos;employeur?
                    </li>
                    <li>
                        Les travailleurs peuvent-ils mettre fin &agrave; leur
                        emploi &agrave; tout moment, sans p&eacute;nalit&eacute;
                        (sauf celles pr&eacute;vues par la loi)?
                    </li>
                    <li>
                        Y a-t-il des travailleurs qui estiment devoir rester
                        dans leur emploi car ils attendent qu&apos;on leur verse
                        les salaires qui leur sont dus?
                    </li>
                    <li>
                        Y a-t-il des travailleurs qui travaillent pendant des
                        p&eacute;riodes de dur&eacute;e excessive ou
                        ind&eacute;finie pour rembourser une dette ou une avance
                        re&ccedil;ue de l&apos;employeur ou d&apos;un
                        recruteur?
                    </li>
                </ol>
                <h2>
                    Tableau&nbsp;4: Indicateurs de sanctions ou de menaces
                </h2>
                <p>
                    Si l&apos;un des indicateurs ci-dessus est relev&eacute;
                    (noter que l&apos;un quelconque d&apos;entre eux suffit et
                    qu&rsquo;il n&apos;est pas n&eacute;cessaire qu&apos;il y
                    ait un indicateur par tableau), l&apos;auditeur devrait
                    examiner si des sanctions ou des menaces servent &agrave;
                    extorquer du travail. Si c&apos;est le cas, la situation
                    peut constituer du travail forc&eacute;:
                </p>
                <ol>
                    <li>
                        L&apos;employeur (ou le recruteur) menace-t-il de
                        remettre les travailleurs aux autorit&eacute;s publiques
                        (p. ex. les autorit&eacute;s de
                        l&apos;immigration)?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) a-t-il pris
                        possession des papiers d&apos;identit&eacute; ou des
                        titres de voyage des travailleurs?
                    </li>
                    <li>
                        L&apos;employeur restreint-il la communication des
                        travailleurs, par exemple en confisquant les
                        t&eacute;l&eacute;phones portables, en isolant des
                        travailleurs des autres travailleurs, en enfermant les
                        travailleurs dans leur lieu de travail ou dans leur
                        logement, ou en les pla&ccedil;ant sous surveillance
                        constante?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) exerce-t-il des
                        violences physiques ou sexuelles sur les travailleurs,
                        ou les en menace-t-il, y compris des ch&acirc;timents
                        violents sur un travailleur devant les autres?
                    </li>
                    <li>
                        L&apos;employeur punit-il ou menace-t-il de punir les
                        travailleurs par d&apos;autres moyens, par exemple la
                        privation de nourriture, d&apos;eau ou de sommeil, ou en
                        mena&ccedil;ant les membres de leur famille?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) menace-t-il de
                        retirer des avantages, par exemple une promotion
                        potentielle?
                    </li>
                    <li>
                        L&apos;employeur menace-t-il d&apos;une aggravation des
                        conditions de travail?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) exploite-t-il les
                        convictions religieuses ou culturelles des travailleurs
                        pour les menacer?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) retient-il des biens
                        des travailleurs, par exemple des effets personnels, de
                        l&apos;argent liquide, etc.?
                    </li>
                    <li>
                        L&apos;employeur retient-il les salaires des
                        travailleurs?
                    </li>
                    <li>
                        L&apos;employeur menace-t-il de renvoyer/licencier des
                        travailleurs?
                    </li>
                    <li>
                        L&apos;employeur menace-t-il de travail
                        suppl&eacute;mentaire les travailleurs qui ne
                        coop&egrave;rent pas?
                    </li>
                    <li>
                        L&apos;employeur menace-t-il de sanctions
                        financi&egrave;res?
                    </li>
                    <li>
                        L&apos;employeur (ou le recruteur) menace-t-il de
                        retenir des opportunit&eacute;s d&apos;emploi futures,
                        d&apos;imposer des sanctions financi&egrave;res,
                        d&apos;exclure des travailleurs d&apos;activit&eacute;s
                        sociales ou communautaires, ou a-t-il recours &agrave;
                        du chantage pour exercer des contraintes sur les
                        travailleurs?
                    </li>
                </ol>
                <p>
                    De nombreuses entreprises ont l&rsquo;exclusivit&eacute; de
                    leurs outils d&apos;audit et il peut donc &ecirc;tre
                    difficile de trouver des exemples pour orienter
                    l&rsquo;&eacute;laboration de votre outil d&apos;audit.
                    L&rsquo;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/"
                        title="l&rsquo;Outil d&rsquo;approvisionnement responsable,"
                    >
                        Outil d&rsquo;approvisionnement responsable
                    </a>{" "}
                    (RST) comprend des Exemples de r&eacute;f&eacute;rences de
                    bonnes pratiques en mati&egrave;re de recrutement et
                    d&rsquo;emploi pour traduire en points de donn&eacute;es
                    mesurables et exploitables les exigences et bonnes pratiques
                    pr&eacute;cis&eacute;es dans ses Exemples de dispositions de
                    code de conduite, qui sont r&eacute;f&eacute;renc&eacute;es
                    &agrave; la{" "}
                    <Link to="/steps/3">
                        3<sup>e</sup>&nbsp;&eacute;tape: &eacute;laborer
                        un code de conduite
                    </Link>
                    . Ces r&eacute;f&eacute;rences, qui couvrent toute une
                    s&eacute;rie de domaines li&eacute;s au travail forc&eacute;
                    et &agrave; la traite des personnes notamment les
                    commissions de recrutement, les contrats de travail, la
                    r&eacute;tention de documents et la libert&eacute; de
                    circulation, peuvent constituer la base de
                    l&rsquo;&eacute;laboration des instruments d&rsquo;audit et
                    de la mise en place et de la surveillance
                    d&rsquo;indicateurs de performance cl&eacute;s pour
                    &eacute;valuer les r&eacute;sultats des fournisseurs et des
                    agents de main d&apos;&oelig;uvre.
                </p>
                <ExampleInAction id="rst1a">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Exemple d&apos;action: Outil
                        d&rsquo;approvisionnement responsable&nbsp;1A
                    </h2>
                    <VeriteFlagWrapper>
                        <UsFlag
                            src={usFlag}
                            alt="Drapeau des &Eacute;tats-Unis d&rsquo;Am&eacute;rique"
                        />
                        <Verite src={verite} alt="Logo Verit&eacute;" />
                    </VeriteFlagWrapper>
                    <p>
                        <strong>
                            PROTECTIONS CONTRE LA TRAITE DES PERSONNES
                        </strong>
                    </p>
                    <p>
                        <strong>
                            Exemples de r&eacute;f&eacute;rences de bonnes
                            pratiques en mati&egrave;re de recrutement et
                            d&rsquo;emploi
                        </strong>
                    </p>
                    <p>
                        <strong>TRAITE DES PERSONNES</strong>
                    </p>
                    <p>
                        Les politiques et pratiques de l&rsquo;entreprise
                        interdisent explicitement le travail forc&eacute;,
                        obligatoire, en servitude ou pour dette
                        s&rsquo;appliquant &agrave; l&rsquo;ensemble des
                        entit&eacute;s de sa cha&icirc;ne
                        d&rsquo;approvisionnement, y compris celles qui
                        participent au recrutement, &agrave; la s&eacute;lection
                        et &agrave; l&rsquo;embauche des travailleurs. Les
                        politiques et pratiques de l&rsquo;entreprise
                        interdisent aussi explicitement la traite &agrave; des
                        fins sexuelles et tout recrutement &agrave; des fins
                        d&apos;actes sexuels tarif&eacute;s.
                    </p>
                    <ul>
                        <li>
                            Des pratiques claires et transparentes en
                            mati&egrave;re de ressources humaines dans les
                            domaines du recrutement, des contrats, des salaires
                            et des heures de travail sont adopt&eacute;es par
                            l&rsquo;entreprise et ses sous-traitants afin de
                            minimiser le risque de traite des personnes.
                        </li>
                        <li>
                            L&rsquo;entreprise et les fournisseurs,
                            sous-traitants ou agents qui agissent en son nom
                            sont en conformit&eacute; avec toutes les lois et
                            r&eacute;glementations locales, notamment celles qui
                            ont trait &agrave; l&rsquo;interdiction du travail
                            forc&eacute; et de la traite des personnes dans
                            chaque juridiction o&ugrave; ils d&eacute;tiennent
                            des op&eacute;rations.
                        </li>
                        <li>
                            Le lieu de travail n&rsquo;est pas sujet &agrave;
                            quelque forme que ce soit de travail forc&eacute;,
                            obligatoire, en servitude ou pour dette ou de
                            travail carc&eacute;ral involontaire.
                        </li>
                        <li>
                            Les travailleurs contractent un emploi librement et
                            les modalit&eacute;s et conditions d&rsquo;emploi
                            sont consenties volontairement, sans tromperie ou
                            menace de sanction.
                        </li>
                        <li>Tout travail est volontaire.</li>
                        <li>
                            Les travailleurs sont libres de mettre un terme
                            &agrave; leur emploi &agrave; tout moment sans
                            p&eacute;nalit&eacute; et avec un pr&eacute;avis
                            raisonnable (ne d&eacute;passant pas 30&nbsp;jours).
                        </li>
                    </ul>
                    <p>
                        <strong>FRAIS DE RECRUTEMENT ET DE TRANSPORT</strong>
                    </p>
                    <p>
                        L&rsquo;entreprise a mis en place une politique
                        &eacute;crite indiquant que les travailleurs ne seront
                        pas redevables d&rsquo;un montant quel qu&rsquo;il soit
                        afin de se voir garantir un emploi dans
                        l&rsquo;entreprise ou chez un fournisseur ou
                        sous-traitant.
                    </p>
                    <ul>
                        <li>
                            Les publicit&eacute;s &eacute;manant de
                            l&rsquo;entreprise ou de ses sous-traitants et
                            fournisseurs indiquent qu&rsquo;aucunes commissions
                            ne seront factur&eacute;es &agrave; aucun moment du
                            processus de recrutement et d&rsquo;embauche.
                        </li>
                        <li>
                            L&rsquo;employeur couvre l&rsquo;ensemble des
                            commissions, co&ucirc;ts et d&eacute;penses de
                            recrutement et de traitement, y compris ceux
                            associ&eacute;s &agrave; l&rsquo;obtention de cartes
                            d&rsquo;identit&eacute;, d&rsquo;examens et de
                            certificats m&eacute;dicaux, de tests
                            d&rsquo;aptitudes et de d&eacute;placement du
                            domicile du travailleur jusqu&rsquo;au lieu de
                            travail.
                        </li>
                        <li>
                            Au terme du contrat de travail, l&rsquo;employeur
                            couvre int&eacute;gralement le co&ucirc;t du
                            transport de retour jusqu&rsquo;au pays
                            d&rsquo;origine du travailleur.
                        </li>
                        <li>
                            L&rsquo;entreprise a mis en place des
                            m&eacute;canismes visant &agrave; v&eacute;rifier et
                            s&rsquo;assurer de mani&egrave;re constante que les
                            travailleurs ne se voient pas facturer un montant
                            quel qu&rsquo;il soit pour se voir garantir un
                            emploi.
                        </li>
                        <li>
                            L&rsquo;entreprise n&rsquo;engage que des
                            recruteurs, agents et sous-agents qui ne facturent
                            aucune commission aux demandeurs d&rsquo;emploi.
                        </li>
                        <li>
                            L&rsquo;entreprise ou les sous-traitants qui
                            agissent en son nom sont en mesure d&rsquo;informer
                            les demandeurs d&rsquo;emploi au moment du
                            recrutement que les travailleurs ne paient aucun
                            co&ucirc;t ou commission pour les services
                            directement li&eacute;s &agrave; l&rsquo;obtention
                            d&rsquo;un emploi.
                        </li>
                        <li>
                            L&rsquo;entreprise ou le recruteur dans le pays de
                            destination a mis en place un processus de
                            v&eacute;rification pour s&rsquo;assurer que les
                            travailleurs ne se voient facturer aucune
                            commission.
                        </li>
                        <li>
                            Les travailleurs qui se sont vus facturer des
                            commissions sont rembours&eacute;s et les contrats
                            &eacute;tablis avec les recruteurs qui les leur ont
                            factur&eacute;es sont r&eacute;sili&eacute;s.
                        </li>
                    </ul>
                    <p>
                        <strong>CONTRATS DE TRAVAIL</strong>
                    </p>
                    <ul>
                        <li>
                            Tous les candidats sont clairement inform&eacute;s
                            des modalit&eacute;s et conditions d&rsquo;emploi et
                            les candidats qui sont retenus re&ccedil;oivent un
                            exemplaire du contrat au moins cinq jours avant le
                            d&eacute;but de leur emploi.
                        </li>
                        <li>
                            L&rsquo;entreprise explique les modalit&eacute;s et
                            conditions du contrat dans la langue maternelle des
                            travailleurs et est en mesure de v&eacute;rifier que
                            les modalit&eacute;s sont bien comprises et
                            pleinement consenties par les travailleurs.
                        </li>
                        <li>
                            Les contrats de travail pr&eacute;cisent clairement
                            les droits et responsabilit&eacute;s des
                            travailleurs en ce qui concerne les salaires, les
                            avantages sociaux, les heures de travail, notamment
                            les heures normales et les conditions d&rsquo;heures
                            suppl&eacute;mentaires, les jours de repos et les
                            cong&eacute;s annuels, le lieu de travail, les
                            conditions d&rsquo;existence et
                            d&rsquo;h&eacute;bergement, les dangers
                            professionnels et les proc&eacute;dures notamment
                            disciplinaires qui peuvent conduire au licenciement,
                            ainsi que les proc&eacute;dures d&rsquo;appels et
                            les m&eacute;canismes de r&egrave;glement des
                            r&eacute;clamations en vertu de la
                            l&eacute;gislation applicable.
                        </li>
                        <li>
                            Le d&eacute;tail des conditions de travail
                            d&eacute;crites au moment du recrutement
                            correspondent aux d&eacute;tails inclus dans le
                            contrat de travail au moment de l&rsquo;embauche et
                            aux conditions et responsabilit&eacute;s de travail
                            effectives.
                        </li>
                        <li>
                            La politique de l&rsquo;entreprise interdit le
                            remplacement des dispositions originales du contrat
                            par d&rsquo;autres moins favorables pour le
                            travailleur. Toute modification visant &agrave;
                            am&eacute;liorer les conditions est
                            r&eacute;alis&eacute;e en toute connaissance de
                            cause et avec le consentement &eacute;clair&eacute;
                            et &eacute;crit du travailleur.
                        </li>
                        <li>
                            Les modifications des conditions de travail sont
                            r&eacute;alis&eacute;es en toute connaissance de
                            cause et avec le consentement du travailleur. Le
                            consentement est obtenu volontairement et sans
                            menace de p&eacute;nalit&eacute;. Aucune
                            modification n&rsquo;est r&eacute;alis&eacute;e pour
                            r&eacute;duire les salaires, avantages sociaux ou
                            autres conditions de travail du travailleur
                            anticip&eacute;s &agrave; l&rsquo;origine, ou pour
                            placer le travailleur en position de risque ou de
                            danger physique ou psychologique ou d&rsquo;un autre
                            type de pr&eacute;judice ou de
                            vuln&eacute;rabilit&eacute;.
                        </li>
                        <li>
                            Les contrats de travail sp&eacute;cifient clairement
                            les droits et responsabilit&eacute;s de chaque
                            partie concernant la r&eacute;siliation de
                            l&rsquo;emploi.
                        </li>
                        <li>
                            Les contrats de travail pr&eacute;cisent clairement
                            les circonstances permettant &agrave; un travailleur
                            de r&eacute;silier son contrat sans
                            p&eacute;nalit&eacute;, avec un pr&eacute;avis
                            raisonnable et conform&eacute;ment &agrave; la
                            l&eacute;gislation nationale. La dur&eacute;e du
                            pr&eacute;avis requise des travailleurs pour la
                            r&eacute;siliation de leurs contrats ne
                            d&eacute;passera pas un mois ou la dur&eacute;e
                            pr&eacute;cis&eacute;e par la l&eacute;gislation
                            locale, la plus courte &eacute;tant retenue.
                        </li>
                        <li>
                            Le pr&eacute;avis n&rsquo;aura pas lieu de
                            s&rsquo;appliquer si le travailleur a
                            &eacute;t&eacute; victime de harc&egrave;lement, de
                            violations ou de la traite des personnes. Dans de
                            telles situations, l&rsquo;employeur sera
                            &eacute;galement responsable des frais de transport
                            de retour de la victime.
                        </li>
                    </ul>
                    <p>
                        <strong>R&Eacute;TENTION DE DOCUMENTS</strong>
                    </p>
                    <ul>
                        <li>
                            Les pi&egrave;ces d&rsquo;identit&eacute; ou les
                            documents d&rsquo;immigration des candidats ou des
                            travailleurs, notamment les passeports, les permis
                            de r&eacute;sidence ou de travail et d&rsquo;autres
                            documents personnels comme les livrets de banque et
                            les cartes de guichet automatique, ne sont pas
                            d&eacute;truits, dissimul&eacute;s,
                            confisqu&eacute;s ou interdits d&rsquo;acc&egrave;s
                            de toute autre mani&egrave;re que ce soit par
                            l&rsquo;employeur, quelle que soit la raison.
                        </li>
                        <li>
                            Si ces documents personnels sont retenus par
                            l&rsquo;employeur ou le sous-traitant en raison
                            d&rsquo;exigences juridiques, ils sont
                            imm&eacute;diatement rendus au travailleur sur sa
                            demande et sans conditions pr&eacute;alables. Dans
                            ce cas, l&rsquo;employeur ou le sous-traitant:
                            <ul>
                                <li>
                                    Fournit aux travailleurs une copie conforme
                                    de ses documents personnels lorsqu&rsquo;ils
                                    ne sont pas en leur possession;
                                </li>
                                <li>
                                    Met en place des politiques et des
                                    proc&eacute;dures &eacute;crites pour
                                    &eacute;viter toute violation;
                                </li>
                                <li>
                                    Nomme une personne responsable pour garantir
                                    l&rsquo;acc&egrave;s libre des travailleurs
                                    &agrave; leur document sur leur
                                    demande; et
                                </li>
                                <li>
                                    Avise les travailleurs de ces
                                    proc&eacute;dures.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Les conditions pr&eacute;alables trop longues ou
                            trop lourdes pour l&rsquo;acc&egrave;s &agrave; son
                            passeport ou &agrave; ses autres documents
                            personnels, comme les demandes faites par
                            &eacute;crit, le versement d&rsquo;arrhes ou les
                            longues p&eacute;riodes d&rsquo;attente, sont
                            formellement interdites.
                        </li>
                        <li>
                            Les travailleurs se voient mettre &agrave; leur
                            disposition des installations individuelles
                            s&ucirc;res et verrouillables pour y ranger leurs
                            documents personnels et d&rsquo;autres objets de
                            valeur dans le logement fourni par leur employeur et
                            sur le lieu de travail.
                        </li>
                    </ul>
                    <p>
                        <strong>CAUTIONS</strong>
                    </p>
                    <ul>
                        <li>
                            Les travailleurs ne se voient pas oblig&eacute;s de
                            verser une caution au moment du recrutement ou
                            &agrave; tout autre moment que ce soit au cours de
                            la relation de travail.
                        </li>
                        <li>
                            Les politiques de l&rsquo;entreprise interdisent
                            formellement le d&eacute;p&ocirc;t d&rsquo;arrhes ou
                            de cautions de garantie.
                        </li>
                        <li>
                            L&rsquo;entreprise, ou le sous-traitant qui agit en
                            son nom, ne retient une partie du salaire des
                            travailleurs que si cela est requis par la loi.
                        </li>
                        <li>
                            Dans les cas o&ugrave; les travailleurs migrants ont
                            choisi de participer aux plans
                            d&rsquo;&eacute;pargne volontaires mis en place par
                            leur employeur, ils ont libre acc&egrave;s &agrave;
                            l&rsquo;ensemble de leurs &eacute;pargnes et des
                            sommes qui leur sont dues et en conservent le
                            contr&ocirc;le plein et entier.
                        </li>
                    </ul>
                    <p>
                        <strong>TRAITEMENT INHUMAIN</strong>
                    </p>
                    <ul>
                        <li>
                            Les politiques et proc&eacute;dures de
                            l&rsquo;entreprise interdisent les sanctions qui
                            imposent des travaux ou des d&eacute;ductions de
                            salaires, ou des r&eacute;ductions des avantages
                            sociaux comme proc&eacute;dure disciplinaire.
                        </li>
                        <li>
                            Aucune forme de travail obligatoire n&rsquo;est
                            impos&eacute;e &agrave; un travailleur.
                        </li>
                        <li>
                            La politique de l&rsquo;entreprise, ou du
                            sous-traitant qui agit en son nom, interdit
                            formellement l&rsquo;usage ou la menace de violences
                            physiques ou sexuelles, de harc&egrave;lement et
                            d&rsquo;intimidation et la direction
                            sup&eacute;rieure a pris un engagement clair
                            vis-&agrave;-vis de cette politique.
                        </li>
                        <li>
                            Des mesures efficaces sont en place afin de mettre
                            en &oelig;uvre, surveiller et assurer une
                            conformit&eacute; &agrave; cette politique dans
                            l&rsquo;ensemble de l&rsquo;entreprise.
                        </li>
                        <li>
                            Il n&rsquo;existe pas de preuve de plaintes,
                            r&eacute;clamations ou mesures prises &agrave;
                            l&rsquo;encontre de l&rsquo;entreprise, de ses
                            directeurs ou contrema&icirc;tres, ou de ses
                            sous-traitants, fournisseurs et agents concernant
                            des cas de violence, d&rsquo;intimidation ou de
                            harc&egrave;lement sur le lieu de travail. Dans les
                            cas o&ugrave; une plainte ou une r&eacute;clamation
                            a &eacute;t&eacute; d&eacute;pos&eacute;e, des
                            &eacute;l&eacute;ments de preuve devraient montrer
                            que des mesures rapides et transparentes ont
                            &eacute;t&eacute; prises pour y rem&eacute;dier.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            &Eacute;GALIT&Eacute; SUR LE LIEU DE TRAVAIL
                        </strong>
                    </p>
                    <ul>
                        <li>
                            Tous les travailleurs, quels que soient leur origine
                            nationale, leur groupe ethnique, leur race ou leur
                            statut juridique, sont trait&eacute;s de
                            mani&egrave;re &eacute;quitable sur le lieu de
                            travail.
                        </li>
                        <li>
                            Les travailleurs migrants sont trait&eacute;s de
                            fa&ccedil;on non moins favorable que les
                            ressortissants du pays en mati&egrave;re:
                            <ul>
                                <li>
                                    de r&eacute;mun&eacute;ration, heures de
                                    travail, heures suppl&eacute;mentaires et
                                    cong&eacute;s pay&eacute;s;
                                </li>
                                <li>
                                    d&rsquo;acc&egrave;s &agrave; la
                                    formation;
                                </li>
                                <li>
                                    d&rsquo;admissibilit&eacute; &agrave; des
                                    promotions et des augmentations de
                                    salaire;
                                </li>
                                <li>
                                    d&rsquo;adh&eacute;sion &agrave; des
                                    syndicats et d&rsquo;autres associations de
                                    travailleurs;
                                </li>
                                <li>d&rsquo;h&eacute;bergement; et</li>
                                <li>
                                    d&rsquo;avantages sociaux et
                                    d&rsquo;assurance sociale, notamment de
                                    s&eacute;curit&eacute; sociale, de
                                    cong&eacute;s maternit&eacute; et maladie,
                                    et d&rsquo;assurance invalidit&eacute; et
                                    accidents du travail.
                                </li>
                            </ul>
                        </li>
                        <li>
                            L&rsquo;entreprise ou les sous-traitants qui
                            agissent en son nom interdisent explicitement les
                            abus de vuln&eacute;rabilit&eacute; des travailleurs
                            migrants, notamment la menace de d&eacute;nonciation
                            aux autorit&eacute;s publiques comme moyen de
                            coercition.
                        </li>
                    </ul>
                    <p>
                        <strong>SALAIRES ET AVANTAGES</strong>
                    </p>
                    <ul>
                        <li>
                            La libert&eacute; des travailleurs de disposer de
                            leurs salaires selon leur bon vouloir n&rsquo;est
                            restreinte d&rsquo;aucune mani&egrave;re.
                        </li>
                        <li>
                            Les salaires indiqu&eacute;s dans les contrats de
                            travail respectent le salaire minimum impos&eacute;
                            par la loi. En l&rsquo;absence de salaire minimum
                            l&eacute;gal, les salaires correspondent au moins au
                            salaire en vigueur dans le secteur pour un travail
                            similaire dans la zone imm&eacute;diate du pays
                            o&ugrave; le travailleur est employ&eacute;, et les
                            salaires sont calcul&eacute;s de mani&egrave;re
                            &eacute;quitable et objective.
                        </li>
                        <li>
                            Les versements de salaires ne sont pas
                            retard&eacute;s, report&eacute;s ou retenus comme
                            moyen de lier les travailleurs &agrave; leur emploi.
                        </li>
                        <li>
                            Il n&rsquo;est pas fait usage de paiements «&nbsp;en
                            nature&nbsp;» ou autres qu&rsquo;en esp&egrave;ces.
                        </li>
                        <li>
                            Les taux et paiements de salaires sont
                            calcul&eacute;s en toute transparence.
                        </li>
                        <li>
                            Le calcul et le paiement des salaires, notamment les
                            d&eacute;ductions l&eacute;gales, sont clairement
                            expliqu&eacute;s &agrave; tous les travailleurs et
                            bien compris par ces derniers.
                        </li>
                        <li>
                            Aucune d&eacute;duction ill&eacute;gale ou non
                            autoris&eacute;e n&apos;est faite sur les salaires
                            des travailleurs. Toutes les d&eacute;ductions de
                            salaires sont clairement d&eacute;crites dans le
                            contrat de travail et effectu&eacute;es avec le
                            consentement &eacute;crit du travailleur.
                        </li>
                        <li>
                            Les d&eacute;ductions de salaire
                            pr&eacute;lev&eacute;es en cas d&rsquo;absence ou de
                            manque de ponctualit&eacute; ne sont pas excessives
                            et ne d&eacute;passent pas le temps de travail
                            manqu&eacute; (p. ex. 10 minutes de paie pour
                            10&nbsp;minutes de retard).{" "}
                        </li>
                        <li>
                            Les avances sur les salaires ou les pr&ecirc;ts
                            accord&eacute;s aux travailleurs, tout comme les
                            taux d&rsquo;int&eacute;r&ecirc;t connexes, sont au
                            minimum en conformit&eacute; avec la loi. Par
                            ailleurs:
                            <ul>
                                <li>
                                    Les taux d&rsquo;int&eacute;r&ecirc;t et les
                                    modalit&eacute;s de remboursement sont
                                    &eacute;quitables. Les paiements ne
                                    d&eacute;passent pas 10&nbsp;% du salaire
                                    mensuel d&rsquo;un travailleur, de sorte que
                                    le remboursement d&rsquo;un pr&ecirc;t
                                    s&rsquo;effectue sur une p&eacute;riode
                                    raisonnable ne d&eacute;passant pas six
                                    mois;
                                </li>
                                <li>
                                    Le calcul des taux
                                    d&rsquo;int&eacute;r&ecirc;t pour les
                                    pr&ecirc;ts et les avances et les
                                    d&eacute;ductions de salaire pr&eacute;vues
                                    pour leur remboursement s&rsquo;effectuent
                                    en toute transparence pour le
                                    travailleur;
                                </li>
                                <li>
                                    Les taux d&rsquo;int&eacute;r&ecirc;t ne
                                    d&eacute;passent pas les taux bancaires du
                                    march&eacute; local en vigueur;
                                </li>
                                <li>
                                    Les modalit&eacute;s des avances sur les
                                    salaires et leur remboursement sont convenus
                                    par les deux parties au pr&eacute;alable et
                                    par &eacute;crit.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Les demandeurs d&rsquo;emploi, les candidats
                            &agrave; un poste et les travailleurs ne sont pas
                            oblig&eacute;s de participer &agrave; une forme
                            d&rsquo;&eacute;pargne forc&eacute;e ou obligatoire
                            quelle qu&rsquo;elle soit afin de recouvrer les
                            frais associ&eacute;s &agrave; certains services,
                            notamment de recrutement.
                        </li>
                        <li>
                            Si les travailleurs migrants paient
                            l&rsquo;h&eacute;bergement ou les repas fournis ou
                            pr&eacute;par&eacute;s par l&rsquo;employeur, les
                            frais correspondants:
                            <ul>
                                <li>
                                    ne d&eacute;passent pas les taux du
                                    march&eacute; ou le taux pay&eacute; par les
                                    travailleurs locaux;
                                </li>
                                <li>
                                    n&rsquo;aident pas les entreprises ou les
                                    sous-traitants &agrave;
                                    g&eacute;n&eacute;rer un
                                    b&eacute;n&eacute;fice aux d&eacute;pends
                                    des travailleurs; et
                                </li>
                                <li>
                                    ne font pas partie de mesures visant
                                    &agrave; recouvrer des droits de placement
                                    ou d&rsquo;autres commissions de recrutement
                                    des travailleurs pay&eacute;es par les
                                    employeurs.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        <strong>HEURES DE TRAVAIL</strong>
                    </p>
                    <ul>
                        <li>
                            Les travailleurs ne sont pas forc&eacute;s &agrave;
                            travailler plus que le nombre d&rsquo;heures permis
                            par la l&eacute;gislation nationale, ou, lorsque la
                            loi est muette, les heures de travail ne
                            d&eacute;passent pas huit heures par jour et
                            48&nbsp;heures par semaine et le nombre
                            d&rsquo;heures total avec les heures
                            suppl&eacute;mentaires ne d&eacute;passe pas
                            60&nbsp;heures par semaine.
                        </li>
                        <li>
                            Des mesures efficaces sur le lieu de travail et dans
                            l&rsquo;ensemble de l&rsquo;entreprise ont
                            &eacute;t&eacute; adopt&eacute;es pour garantir la
                            mise en &oelig;uvre int&eacute;grale et la
                            conformit&eacute; compl&egrave;te avec cette
                            politique, notamment le contr&ocirc;le continu des
                            heures ouvr&eacute;es afin d&rsquo;identifier les
                            travailleurs qui courent le risque de
                            d&eacute;passer la limite impos&eacute;e, la
                            coordination de la production et la planification
                            des effectifs, etc.
                        </li>
                        <li>
                            Toute heure suppl&eacute;mentaire est exclusivement
                            volontaire, sauf cas contraire explicitement
                            indiqu&eacute; dans le cadre d&rsquo;une convention
                            collective reconnue par la loi.
                        </li>
                        <li>
                            Les travailleurs suivent leurs propres heures de
                            travail &agrave; l&rsquo;aide d&rsquo;un
                            syst&egrave;me de pointage &eacute;lectronique ou
                            autre qui est objectif et v&eacute;rifiable.
                        </li>
                        <li>
                            Les travailleurs sont libres de refuser les heures
                            suppl&eacute;mentaires sans menace ou crainte de
                            sanction ou de repr&eacute;sailles.
                        </li>
                        <li>
                            S&rsquo;ils acceptent les heures
                            suppl&eacute;mentaires, un syst&egrave;me est en
                            place pour obtenir leur consentement &eacute;crit au
                            moment de la demande.
                        </li>
                        <li>
                            Dans les cas o&ugrave; la r&eacute;mun&eacute;ration
                            se base sur des cibles de productivit&eacute;, par
                            exemple r&eacute;mun&eacute;ration &agrave; la
                            pi&egrave;ce, les travailleurs ne sont pas
                            forc&eacute;s &agrave; travailler au-del&agrave; des
                            heures suppl&eacute;mentaires permises par la
                            l&eacute;gislation nationale afin d&rsquo;atteindre
                            leur quota de production.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            LIBERT&Eacute; DE CIRCULATION ET LIBERT&Eacute;
                            INDIVIDUELLE
                        </strong>
                    </p>
                    <ul>
                        <li>
                            Les travailleurs jouissent d&rsquo;une
                            libert&eacute; de circulation raisonnable au sein de
                            leurs environnements de travail et
                            d&rsquo;existence. Toute limitation l&eacute;gitime
                            de la circulation en dehors du lieu de travail (par
                            exemple pour des raisons valides de
                            s&eacute;curit&eacute; ou de s&ucirc;ret&eacute;
                            personnelle) est pr&eacute;cis&eacute;e avant la
                            signature du contrat de travail.
                        </li>
                        <li>
                            Les travailleurs ont un acc&egrave;s non restreint
                            aux n&eacute;cessit&eacute;s de base (eau potable,
                            toilettes) pendant les heures tant ouvr&eacute;es
                            que non ouvr&eacute;es.
                        </li>
                        <li>
                            La pr&eacute;sence d&rsquo;un personnel de
                            s&eacute;curit&eacute; ou d&rsquo;autres mesures de
                            s&eacute;curit&eacute; sur le lieu de travail ou
                            dans les r&eacute;sidences fournies ou
                            pr&eacute;par&eacute;es par l&rsquo;employeur ou le
                            recruteur ne sert pas de moyen de restriction de la
                            libert&eacute; de circulation des travailleurs.
                        </li>
                        <li>
                            Aucun autre moyen de coercition n&apos;est
                            utilis&eacute; pour limiter la libert&eacute; de
                            circulation des travailleurs migrants ou la
                            libert&eacute; individuelle, notamment confiscation
                            de documents personnels, lev&eacute;e de sanctions
                            financi&egrave;res ou cautions de garantie ou usage
                            de tromperie en mati&egrave;re de versement ou de
                            d&eacute;duction de salaire.
                        </li>
                        <li>
                            Les travailleurs ne sont pas forc&eacute;s de vivre
                            dans des r&eacute;sidences op&eacute;r&eacute;es par
                            l&rsquo;employeur ou le recruteur comme condition
                            d&rsquo;emploi, &agrave; moins que cela ne soit
                            exig&eacute; par la l&eacute;gislation en vigueur.
                        </li>
                        <li>
                            Les travailleurs migrants sont libres de rentrer
                            dans leur pays d&rsquo;origine pendant leurs
                            cong&eacute;s pay&eacute;s sans sanction ou menace
                            de licenciement.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            PROC&Eacute;DURES DE R&Egrave;GLEMENT DES
                            R&Eacute;CLAMATIONS
                        </strong>
                    </p>
                    <ul>
                        <li>
                            La politique et la pratique des fournisseurs et des
                            recruteurs montre une proc&eacute;dure de
                            r&egrave;glement des r&eacute;clamations efficace et
                            qui fonctionne, &agrave; la disposition des
                            travailleurs dans leur langue maternelle.
                        </li>
                        <li>
                            Des mesures efficaces sont en place pour assurer que
                            les travailleurs migrants savent comment
                            l&rsquo;utiliser et, s&rsquo;ils y ont recours, ils
                            se sentent en s&eacute;curit&eacute; et &agrave;
                            l&rsquo;abri de toutes repr&eacute;sailles
                            potentielles.
                        </li>
                        <li>
                            En cas de d&eacute;p&ocirc;t d&rsquo;une
                            r&eacute;clamation, des proc&eacute;dures efficaces
                            et ad&eacute;quates sont en place pour assurer un
                            r&egrave;glement rapide et mutuellement convenu.
                        </li>
                        <li>
                            Il est r&eacute;guli&egrave;rement fait rapport
                            &agrave; l&rsquo;ensemble des travailleurs du
                            r&egrave;glement des r&eacute;clamations sur le lieu
                            de travail.
                        </li>
                        <li>
                            Les r&eacute;sultats des sondages et des entretiens
                            men&eacute;s aupr&egrave;s des travailleurs
                            confirment qu&rsquo;ils comprennent les moyens
                            &agrave; leur disposition pour d&eacute;poser des
                            r&eacute;clamations et qu&rsquo;ils font confiance
                            &agrave; la proc&eacute;dure en place pour traiter
                            justement leurs griefs.
                        </li>
                        <li>
                            Un processus d&rsquo;appel efficace est en place
                            pour &eacute;valuer tout r&egrave;glement de
                            r&eacute;clamation contest&eacute; en toute
                            impartialit&eacute;.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            AGENCES D&rsquo;EMPLOI PRIV&Eacute;ES ET RECRUTEURS
                            DE MAIN D&rsquo;&OElig;UVRE
                        </strong>
                    </p>
                    <ul>
                        <li>
                            Dans la mesure du possible, l&rsquo;entreprise et
                            ses fournisseurs embauchent les travailleurs
                            directement.
                        </li>
                        <li>
                            Lorsque le recrutement, la s&eacute;lection et
                            l&rsquo;embauche des travailleurs sont
                            effectu&eacute;s par une agence d&rsquo;emploi
                            priv&eacute;e ou une partie tierce, les fournisseurs
                            auront la possibilit&eacute; de s&rsquo;assurer que
                            l&rsquo;agence en question fonctionne en toute
                            l&eacute;galit&eacute;, qu&rsquo;elle est
                            certifi&eacute;e ou agr&eacute;&eacute;e par
                            l&rsquo;autorit&eacute; comp&eacute;tente,
                            n&rsquo;utilise que des employ&eacute;s
                            form&eacute;s au code et aux exigences juridiques
                            applicables et ne facture pas de commissions de
                            recrutement ou ne se rend pas coupable de
                            comportement frauduleux qui mette les travailleurs
                            dans des situations de risque d&rsquo;exploitation
                            dans le travail.
                        </li>
                        <li>
                            L&rsquo;entreprise signe un contrat officiel avec
                            l&rsquo;agence en sous-traitance et exerce
                            r&eacute;guli&egrave;rement une diligence
                            raisonnable vis-&agrave;-vis de l&rsquo;agence et de
                            ses partenaires participant &agrave;
                            l&rsquo;embauche et au placement des travailleurs.
                        </li>
                        <li>
                            Des mesures efficaces sont &eacute;tablies par
                            l&rsquo;entreprise pour assurer la conformit&eacute;
                            juridique des sous-traitants dans chaque juridiction
                            dans laquelle ils op&egrave;rent.
                        </li>
                        <li>
                            L&rsquo;agence en sous-traitance dispose d&rsquo;un
                            permis ou d&rsquo;une licence &agrave; jour pour
                            tous les pays o&ugrave; elle op&egrave;re, de
                            m&ecirc;me que tous les partenaires ou agents qui
                            travaillent en son nom.
                        </li>
                        <li>
                            L&apos;agence en sous-traitance n&rsquo;a pas
                            &eacute;t&eacute; cit&eacute;e, suspendue ou
                            autrement sanctionn&eacute;e pour
                            non-conformit&eacute; avec la l&eacute;gislation
                            d&rsquo;un pays o&ugrave; elle op&egrave;re,
                            o&ugrave;, en cas de citation pour
                            non-conformit&eacute;, l&rsquo;agence peut
                            d&eacute;montrer qu&rsquo;elle y a
                            rem&eacute;di&eacute;.
                        </li>
                        <li>
                            L&rsquo;entreprise dispose de m&eacute;canismes pour
                            surveiller les r&eacute;sultats des agents et des
                            recruteurs pour s&rsquo;assurer qu&rsquo;aucune
                            tromperie, fraude et/ou mesure de coercition ne se
                            produit au cours du recrutement, du placement, du
                            transport ou de la direction des travailleurs
                            migrants.
                        </li>
                        <li>
                            L&rsquo;entreprise ou les sous-traitants qui
                            agissent en son nom fournissent aux demandeurs
                            d&rsquo;emploi des d&eacute;tails exacts sur les
                            conditions de travail au moment du recrutement,
                            notamment concernant la nature du travail, les
                            salaires, les avantages sociaux et la dur&eacute;e
                            du contrat.
                        </li>
                        <li>
                            Des d&eacute;tails sur les conditions de travail et
                            d&rsquo;emploi sont communiqu&eacute;s aux
                            demandeurs d&rsquo;emploi dans une langue
                            qu&rsquo;ils comprennent.
                        </li>
                        <li>
                            Aucune fausse promesse n&rsquo;est faite aux
                            candidats ou aux travailleurs concernant les
                            conditions d&rsquo;emploi, le lieu de travail, la
                            dur&eacute;e de l&rsquo;emploi ou du contrat et les
                            revenus anticip&eacute;s.
                        </li>
                        <li>
                            L&rsquo;agence en sous-traitance dispose d&rsquo;une
                            structure de mise en &oelig;uvre, d&rsquo;un
                            responsable et de proc&eacute;dures claires pour
                            s&rsquo;assurer que l&rsquo;ensemble des politiques
                            sont conformes &agrave; la l&eacute;gislation et aux
                            r&eacute;glementations pertinentes. Cela comprend un
                            registre actualis&eacute; des l&eacute;gislations
                            pour l&rsquo;ensemble des pays o&ugrave; elle
                            op&egrave;re, ainsi qu&rsquo;un m&eacute;canisme
                            visant &agrave; s&rsquo;assurer que
                            l&rsquo;entreprise est r&eacute;guli&egrave;rement
                            inform&eacute;e de toute nouvelle l&eacute;gislation
                            ou r&eacute;glementation ou modification de
                            celles-ci.
                        </li>
                        <li>
                            L&rsquo;agence en sous-traitance dispose d&rsquo;un
                            code de conduite interdisant la traite et
                            pr&eacute;voit des mesures de protection pour les
                            travailleurs. Le code couvre les principes
                            d&eacute;taill&eacute;s dans les conventions
                            pertinentes de l&rsquo;OIT et le code de conduite de
                            la Conf&eacute;d&eacute;ration internationale des
                            agences d&apos;emploi priv&eacute;es (CIETT) et
                            s&rsquo;applique &agrave; toutes les parties de la
                            cha&icirc;ne de recrutement. Le code est soutenu par
                            une structure d&rsquo;entreprise qui garantit sa
                            mise en &oelig;uvre effective.
                        </li>
                        <li>
                            L&rsquo;agence en sous-traitance a &eacute;tabli un
                            m&eacute;canisme pour signaler de mani&egrave;re
                            confidentielle toute non-conformit&eacute;, un
                            m&eacute;canisme de r&egrave;glement des
                            r&eacute;clamations et des proc&eacute;dures de
                            signalement et d&rsquo;enqu&ecirc;te des
                            r&eacute;clamations et de protection des lanceurs
                            d&rsquo;alerte.
                        </li>
                        <li>
                            L&rsquo;agence en sous-traitance a mis en place des
                            proc&eacute;dures de r&eacute;paration efficaces en
                            cas de signalements v&eacute;rifi&eacute;s de
                            non-conformit&eacute;, notamment des
                            m&eacute;canismes visant &agrave; assurer le
                            remboursement des travailleurs pour le versement de
                            toute commission de recrutement.
                        </li>
                        <li>
                            L&rsquo;entreprise ou les sous-traitants agissant en
                            son nom n&rsquo;utilise aucun moyen de limitation de
                            la libert&eacute; des travailleurs migrants de
                            mettre un terme &agrave; leur emploi, par exemple en
                            imposant des commissions de recrutement excessives,
                            en exigeant des cautions ou en conservant des
                            documents personnels.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            SENSIBILISATION ET FORMATION DES EMPLOY&Eacute;S
                        </strong>
                    </p>
                    <ul>
                        <li>
                            Toutes les informations &eacute;crites et
                            s&eacute;ances de formation sont propos&eacute;es
                            dans la langue maternelle des travailleurs.
                        </li>
                        <li>
                            Au moment de leur embauche, les travailleurs sont
                            inform&eacute;s de leurs droits et
                            responsabilit&eacute;s, &agrave; l&rsquo;oral et par
                            &eacute;crit, notamment les dispositions du
                            pr&eacute;sent code et toutes les lois et
                            r&eacute;glementations de leur pays d&rsquo;origine,
                            du pays o&ugrave; le travail s&rsquo;effectue et de
                            tout autre pays et juridiction contractuels au
                            travail.
                        </li>
                        <li>
                            Avant le d&eacute;part, une orientation est
                            effectu&eacute;e pour passer en revue les
                            obligations contractuelles, les modalit&eacute;s et
                            conditions de travail et d&rsquo;autres questions,
                            notamment sans s&rsquo;y limiter les conditions
                            d&rsquo;existence, les politiques institutionnelles
                            et les m&eacute;canismes de r&egrave;glement des
                            r&eacute;clamations &agrave; la disposition des
                            travailleurs.
                        </li>
                        <li>
                            &Agrave; l&rsquo;arriv&eacute;e dans le pays de
                            destination, les travailleurs sont form&eacute;s sur
                            les r&egrave;gles et proc&eacute;dures de la
                            soci&eacute;t&eacute; sur le lieu de travail, sa
                            proc&eacute;dure de r&egrave;glement des
                            r&eacute;clamations, les conditions
                            d&rsquo;h&eacute;bergement (fourni ou
                            pr&eacute;par&eacute; par la soci&eacute;t&eacute;)
                            et de travail, notamment tout danger en
                            mati&egrave;re de sant&eacute; et de
                            s&eacute;curit&eacute; et les pr&eacute;cautions
                            n&eacute;cessaires pour garantir la
                            s&eacute;curit&eacute; individuelle.
                        </li>
                        <li>
                            L&rsquo;entreprise &eacute;value
                            l&rsquo;efficacit&eacute; de ses efforts de
                            formation et de sensibilisation en mesurant les
                            connaissances des employ&eacute;s &agrave; la fin de
                            la formation et r&eacute;guli&egrave;rement par la
                            suite au moyen de sondages, entretiens, etc.
                        </li>
                    </ul>
                    <p>
                        <strong>
                            Source: Outil d&rsquo;approvisionnement
                            responsable&nbsp;1A,{" "}
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
                        le d&eacute;partement d&apos;&Eacute;tat des
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
                        &Eacute;tats-Unis, notamment les d&eacute;partements
                        d&apos;&Eacute;tat et du Travail des &Eacute;tats-Unis,
                        ainsi que d&rsquo;autres parties prenantes de premier
                        plan, notamment des survivants de la traite, des
                        dirigeants d&rsquo;entreprises et d&rsquo;ONG et des
                        responsables des acquisitions et des passations de
                        march&eacute; au niveau f&eacute;d&eacute;ral.
                    </p>
                </ExampleInAction>
                <p>
                    Les outils d&apos;audit de qualit&eacute; vont
                    au-del&agrave; de simples «&nbsp;listes de
                    contr&ocirc;le&nbsp;». De bons outils permettent
                    d&apos;enregistrer les informations non verbales obtenues
                    par les auditeurs en observant les conditions sur le site et
                    l&rsquo;atmosph&egrave;re dans le lieu de travail,
                    l&apos;expression corporelle des personnes
                    interrog&eacute;es et d&rsquo;autres indices. Les auditeurs
                    devraient examiner &agrave; l&apos;avance les
                    vuln&eacute;rabilit&eacute;s &eacute;ventuelles de la
                    main-d&apos;&oelig;uvre de l&apos;&eacute;tablissement et
                    faire preuve de vigilance pour rep&eacute;rer des indices
                    subtils indiquant que les travailleurs font l&apos;objet de
                    pressions ou de coercition. Les outils d&apos;audit
                    devraient permettre d&apos;enregistrer des informations qui
                    ne sont pas directement li&eacute;es aux questions se
                    trouvant dans l&apos;outil, mais qui selon l&apos;auditeur
                    sont importantes et pertinentes.
                </p>
                <p>
                    Les entreprises exigent de plus en plus de leurs
                    sous-traitants et de leurs fournisseurs qu&rsquo;ils
                    effectuent des auto-&eacute;valuations afin de souligner les
                    risques potentiels de travail forc&eacute; et de traite des
                    personnes dans la cha&icirc;ne d&rsquo;approvisionnement.
                    L&rsquo;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/supplierselfassessment"
                        title="Exemple d&rsquo;outil d&rsquo;auto-&eacute;valuation des fournisseurs/sous-traitants"
                    >
                        Exemple d&rsquo;outil d&rsquo;auto-&eacute;valuation des
                        fournisseurs/sous-traitants
                    </a>{" "}
                    de l&rsquo;Outil d&rsquo;approvisionnement responsable [en
                    anglais] est con&ccedil;u pour aider les fournisseurs et les
                    sous-traitants &agrave; d&eacute;terminer si leurs
                    activit&eacute;s sont conformes aux codes de conduite de la
                    soci&eacute;t&eacute; ou du secteur et &agrave; souligner
                    les risques potentiels de traite des personnes dans leurs
                    processus de recrutement, de s&eacute;lection et
                    d&rsquo;embauche des travailleurs, dans leur collaboration
                    avec des courtiers de main d&apos;&oelig;uvre et dans leur
                    supervision des travailleurs migrants. Cet outil peut servir
                    de diff&eacute;rentes mani&egrave;res comme outil de
                    s&eacute;lection de fournisseurs, pour &eacute;laborer des
                    plans d&rsquo;action corrective ou pour mettre en place des
                    indicateurs de performance cl&eacute;s afin de suivre les
                    r&eacute;sultats en cours en mati&egrave;re de
                    responsabilit&eacute; sociale.
                </p>
                <p>
                    Les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf"
                        title="Crit&egrave;res d&rsquo;authentification institutionnelle de lutte contre la traite des personnes"
                    >
                        Crit&egrave;res d&rsquo;authentification
                        institutionnelle de lutte contre la traite des personnes
                    </a>{" "}
                    [en anglais] de Verit&eacute; constituent un autre outil
                    important qui peut servir &agrave; toute organisation ou
                    partie tierce ind&eacute;pendante &agrave; authentifier
                    l&rsquo;ampleur et l&rsquo;efficacit&eacute; des efforts de
                    lutte contre la traite des personnes d&rsquo;une
                    organisation. Cet outil fournit aux &eacute;valuateurs des
                    crit&egrave;res d&rsquo;authentification de la
                    conformit&eacute; d&rsquo;une soci&eacute;t&eacute; &agrave;
                    ses efforts de lutte contre la traite des personnes,
                    notamment ses engagements politiques, la
                    responsabilit&eacute; de son conseil d&rsquo;administration
                    et de ses cadres, sa structure organisationnelle,
                    l&rsquo;&eacute;valuation et le contr&ocirc;le des risques
                    et les attentes en mati&egrave;re de r&eacute;sultats. Il
                    propose les pratiques exemplaires pour chaque crit&egrave;re
                    ainsi que les &eacute;l&eacute;ments de preuve
                    n&eacute;cessaires pour la v&eacute;rification. Il fournit
                    &eacute;galement aux &eacute;valuateurs des orientations
                    pour authentifier la conformit&eacute; au niveau du site
                    &agrave; ces efforts, notamment en pr&eacute;cisant des
                    crit&egrave;res minimaux.
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
