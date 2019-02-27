import React from "react";
import { Link } from "react-router-dom";
import BorderSeparator from "../../../../common/BorderSeparator";
import Icons from "../../../../common/Icons";
import { EiaList } from "./shared";

const fr = () => {
    return (
        <div>
            <h2>Autres applis de ce type&nbsp;:</h2>
            <p>D&eacute;partement du Travail des &Eacute;tats-Unis</p>
            <p>
                <em>
                    Sweat &amp; Toil: Child Labor, Forced Labor, and Human
                    Trafficking Around the World [en anglais]
                </em>
            </p>
            {/* TODO replace with links to sweat and toil apps */}
            <br />
            <BorderSeparator />
            <h2>
                <strong>Principaux outils&nbsp;:</strong>
            </h2>
            <p>
                Haut-Commissariat des Nations Unies aux droits de l&apos;homme
            </p>
            <p>
                <em>
                    Principes directeurs relatifs aux entreprises et aux droits
                    de l&apos;homme des Nations Unies
                </em>
            </p>
            <p>
                <a
                    href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                    title="Principes directeurs relatifs aux entreprises et aux droits de l'homme des Nations Unies"
                >
                    http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_fr.pdf
                </a>
            </p>
            <BorderSeparator />
            <p>
                Organisation de coop&eacute;ration et de d&eacute;veloppement
                &eacute;conomiques
            </p>
            <p>
                <em>
                    Principes directeurs pour les entreprises multinationales
                </em>
            </p>
            <p>
                <a
                    href="http://www.oecd.org/corporate/mne/"
                    title="Principes directeurs pour les entreprises multinationales"
                >
                    http://www.oecd.org/fr/gouvernementdentreprise/mne/
                </a>
            </p>
            <BorderSeparator />
            <p>Organisation internationale du travail</p>
            <p>
                <em>
                    Service d&apos;assistance (Helpdesk) de l&rsquo;OIT aux
                    entreprises sur les normes internationales du travail
                </em>
            </p>
            <p>
                <a
                    href="http://www.ilo.org/empent/areas/business-helpdesk/lang--en/index.htm"
                    title="Helpdesk de l&rsquo;OIT: assistance aux entreprises sur les normes internationales du travail"
                >
                    http://www.ilo.org/empent/areas/business-helpdesk/lang--fr/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>Organisation internationale du travail</p>
            <p>
                <em>
                    Combating Forced Labor: A Handbook for Employers and
                    Business [en anglais]
                </em>
            </p>
            <p>
                <a
                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm"
                    title="&gt;Combating Forced Labor: A Handbook for Employers and Business"
                >
                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>Organisation internationale du travail</p>
            <p>
                <em>
                    Checkpoints for Companies &ndash; Eliminating and Preventing
                    Forced Labour [en anglais]
                </em>
            </p>
            <p>
                <a
                    href="http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm"
                    title="Checkpoints for Companies &ndash; Eliminating and Preventing Forced Labour"
                >
                    http://www.ilo.org/global/publications/WCMS_456961/lang--fr/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>Organisation internationale du travail</p>
            <p>
                <em>ILO-IOE Child Labour Guidance Tool for Business</em>
            </p>
            <p>
                <a
                    href="http://www.ilo.org/ipec/Informationresources/WCMS_IPEC_PUB_27555/lang--en/index.htm"
                    title="ILO-IOE Child Labour Guidance Tool for Business"
                >
                    http://www.ilo.org/ipec/Informationresources/WCMS_IPEC_PUB_27555/lang--fr/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>Consumer Goods Forum</p>
            <p>
                <em>
                    Business Actions Against Forced Labour &ndash; Success
                    Stories [en anglais]
                </em>
            </p>
            <p>
                <a
                    href="http://www.theconsumergoodsforum.com/strategic-focus/social-sustainability/forced-labour-case-studies"
                    title="Business Actions Against Forced Labour &ndash; Success Stories [en anglais]"
                >
                    http://www.theconsumergoodsforum.com/strategic-focus/social-sustainability/forced-labour-case-studies
                </a>
            </p>
            <BorderSeparator />
            <p>Verit&eacute;</p>
            <p>
                <em>Responsible Sourcing Tool [en anglais]</em>
            </p>
            <p>
                <a
                    href="http://www.responsiblesourcingtool.org/"
                    title="Responsible Sourcing Tool"
                >
                    http://www.responsiblesourcingtool.org/
                </a>
            </p>
            <BorderSeparator />
            <p>Verit&eacute;</p>
            <p>
                <em>
                    Anti-Human Trafficking Business Authentication Criteria [en
                    anglais]
                </em>
            </p>
            <p>
                <a
                    href="http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf"
                    title="Anti-Human Trafficking Business Authentication Criteria"
                >
                    http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf
                </a>
            </p>
            <BorderSeparator />
            <h2>
                <strong>Exemples d&apos;action&nbsp;:</strong>
            </h2>
            <EiaList>
                <li>
                    <Link to="/basics">
                        Programme Better Work dans l&apos;industrie de la
                        confection
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/basics">
                        Code de conduite de la Coalition pour la
                        citoyennet&eacute; de l&apos;industrie
                        &eacute;lectronique&nbsp;(EICC)&nbsp;&ndash;
                        Syst&egrave;mes de gestion
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/1/topic/3#engagement_gov_brazil"
                        id="engagement_gov_brazil"
                    >
                        Dialogue participatif avec les pouvoirs publics&nbsp;:
                        «&nbsp;liste sale&nbsp;» du Br&eacute;sil et Institut du
                        pacte national pour l&rsquo;&eacute;radication du
                        travail en servitude
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/4#rsn" id="rsn">
                        R&eacute;seau de l&rsquo;approvisionnement responsable
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/1/topic/4#res_min_trade"
                        id="res_min_trade"
                    >
                        Alliance public-priv&eacute; pour le commerce
                        responsable de minerais
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/4#sug_phil" id="sug_phil">
                        Efforts tripartites pour abolir le travail des enfants
                        dans les champs de canne &agrave; sucre aux Philippines
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/5#eclt" id="eclt">
                        Fondation Eliminating Child Labor in Tobacco-Growing
                        (ECLT)
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/5#clt" id="clt">
                        Plateforme sur le travail des enfants
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/5#gbn" id="gbn">
                        R&eacute;seau mondial d&apos;entreprises de l&rsquo;OIT
                        sur le travail forc&eacute; et la traite des &ecirc;tres
                        humains
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/6#goodweave" id="goodweave">
                        GoodWeave
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/5#med_rep" id="med_rep">
                        L&rsquo;importance du r&ocirc;le de la couverture
                        m&eacute;diatique
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/5#fish" id="fish">
                        P&ecirc;che et produits de la mer
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/6#leber" id="leber">
                        Leber, bijoutier&nbsp;: The Jewelers&rsquo; Burma Relief
                        Project
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/6#Isidro" id="Isidro">
                        Isidro Le&oacute;n-York
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/6#lco" id="lco">
                        League Collegiate Outfitters: cr&eacute;ation
                        d&apos;opportunit&eacute;s pour les jeunes
                        d&eacute;favoris&eacute;s au El Salvador
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/6#gap" id="gap">
                        Programme P.A.C.E. de Gap Inc.
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/2/topic/7#Conflict_Free"
                        id="Conflict_Free"
                    >
                        Initiative pour un approvisionnement sans conflits
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/2/topic/7#mica" id="mica">
                        L&rsquo;Or&eacute;al et l&rsquo;approvisionnement
                        responsable en mica
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/3/topic/3#rst1" id="rst1">
                        Outil d&rsquo;approvisionnement responsable&nbsp;1,
                        Exemple de dispositions de code de conduite
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/3/topic/4#patagonia" id="patagonia">
                        Normes relatives aux travailleurs migrants de Patagonia
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/3/topic/4#leadership" id="leadership">
                        Groupe de leadership pour le recrutement responsable
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/3/topic/5#fair_labor" id="fair_labor">
                        Processus de r&eacute;vision du code de la Fair Labor
                        Association
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/4/topic/4#cocoa" id="cocoa">
                        Secteur international du chocolat et du
                        cacao&nbsp;&ndash; CocoaAction de la World Cocoa
                        Foundation
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/5/topic/2#better_work_assessment"
                        id="better_work_assessment"
                    >
                        &Eacute;quipes d&apos;&eacute;valuation Better Work
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/3#rst1a" id="rst1a">
                        Outil d&rsquo;approvisionnement responsable&nbsp;1A,
                        Exemples de r&eacute;f&eacute;rences de bonnes pratiques
                        en mati&egrave;re de recrutement et d&rsquo;emploi
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/4#prereg" id="prereg">
                        Processus de pr&eacute;enregistrement
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/8#cambodia" id="cambodia">
                        Surveillance communautaire du travail des enfants au
                        Cambodge
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/6/topic/1#turkey" id="turkey">
                        Travail de collaboration visant &agrave; traiter le
                        travail saisonnier des enfants migrants dans le cadre de
                        la r&eacute;colte des noisettes en Turquie
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/6/topic/2#better_work" id="better_work">
                        Processus de r&eacute;paration Better Work&nbsp;:
                        Comit&eacute; consultatif d&apos;am&eacute;lioration des
                        performances (PICC)
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/1#fla" id="fla">
                        Programme d&apos;accr&eacute;ditation de
                        v&eacute;rificateurs ext&eacute;rieurs
                        ind&eacute;pendants par la Fair Labor Association (FLA)
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/1#bonsucro" id="bonsucro">
                        Mod&egrave;le d&apos;accr&eacute;ditation de Bonsucro
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/1#sai_model" id="sai_model">
                        Mod&egrave;le de Social Accountability International
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/3#bwi_eval" id="bwi_eval">
                        &Eacute;valuation des incidences de Better Work
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/8/topic/3#nike" id="nike">
                        Nike&nbsp;: rapports sur les r&eacute;parations
                        <Icons.ChevronRight />
                    </Link>
                </li>
            </EiaList>
        </div>
    );
};

export default fr;
