import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Quels sujets la formation et le renforcement des
                    capacit&eacute;s devraient-ils couvrir?
                </h1>
                {/* <p>
                    Voici les sujets essentiels de la formation pour chaque
                    public y assistant.
                </p> */}

                <h2>Tous publics</h2>
                <ul>
                    <li>
                        Les normes incluses dans votre code de conduite{" "}
                        <em>
                            (N. B. : Cette partie de la formation devrait &ecirc;tre approfondie et exhaustive. Chaque norme 
                            devrait &ecirc;tre expliqu&eacute;e en d&eacute;tail. Une explication compl&egrave;te du travail 
                            des enfants, par exemple, devrait &ecirc;tre fournie accompagn&eacute;e d'exemples de ce qui est 
                            consid&eacute;r&eacute;, ou pas, comme du travail des enfants);
                        </em>
                    </li>
                    <li>
                        Une vue d'ensemble exhaustive de votre syst&egrave;me de conformit&eacute; sociale, pr&eacute;sentant 
                        tous ses &eacute;l&eacute;ments et leur int&eacute;gration, pour que tous comprennent leur fonction dans 
                        le syst&egrave;me;
                    </li>
                    <li>
                        Vos attentes concernant chaque &eacute;l&eacute;ment du syst&egrave;me, qui est responsable de quels 
                        &eacute;l&eacute;ments et comment vous les en tiendrez responsables;
                    </li>
                    <li>
                        Ce que vous attendez d'un audit et comment les donn&eacute;es d'audit sont ind&eacute;pendamment 
                        contr&ocirc;l&eacute;es;
                    </li>
                    <li>
                        Les politiques et proc&eacute;dures de r&eacute;paration de l'entreprise;
                    </li>
                    <li>
                        Les valeurs du lieu de travail, y compris le respect mutuel et l'honn&ecirc;tet&eacute;;
                    </li>
                    <li>Les rapports publics de l'entreprise; et</li>
                    <li>
                        Les opportunit&eacute;s de donner des avis, y compris les m&eacute;canismes de r&eacute;clamation.
                    </li>
                </ul>
                <h2>Internes</h2>
                <Accordion id="what-topic-cover">
                <Accordion.Section id="soc-comp-team">
                    <Accordion.Title>
                        <strong>
                        &Eacute;quipe de conformit&eacute; sociale
                        </strong>
                    </Accordion.Title>
                <Accordion.Panel>    
                    <p>
                        Formation intensive relative &agrave; tous les aspects du syst&egrave;me. Une formation continue pour 
                        cette &eacute;quipe pourrait inclure l'utilisation d'un syst&egrave;me d'information sur la 
                        conformit&eacute; sociale et un r&eacute;f&eacute;rentiel par rapport &agrave; d'autres entreprises et 
                        d'autres initiatives.
                    </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="other-emp">
                    <Accordion.Title>
                        <strong>
                            D&eacute;partements d&eacute;veloppement/approvisionnement des produits

                        </strong>
                    </Accordion.Title>
                    <Accordion.Panel> 
                <p>
                    Formation relative aux types de donn&eacute;es que l'&eacute;quipe de conformit&eacute; sociale recueille, 
                    et comment se servir de ces donn&eacute;es dans la prise de d&eacute;cisions sur le d&eacute;veloppement de 
                    produits et l'approvisionnement, ainsi que des informations courantes concernant les r&eacute;sultats de 
                    conformit&eacute; sociale des fournisseurs. Il est essentiel de discuter avec les concepteurs de produits et 
                    les acheteurs d&rsquo;une entreprise des incidences qu'ont leurs pratiques et leurs d&eacute;cisions sur la 
                    conformit&eacute; sociale. Dans l'id&eacute;al, les &eacute;valuations de performance et les structures 
                    d'incitation de ces &eacute;quipes devraient tenir compte de la mesure dans laquelle elles se servent des 
                    donn&eacute;es relatives &agrave; la conformit&eacute; sociale. L'implication et la participation des plus 
                    hauts niveaux de l'entreprise pourraient &ecirc;tre n&eacute;cessaires pour ces discussions.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="vendor-agent">
                    <Accordion.Title>
                        <strong>
                        Autres employ&eacute;s
                        </strong>
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Communication par le biais de bulletins d'information, de courriels, de rapports et de r&eacute;unions 
                        annuels, et d'autres moyens pour s'assurer que tous les employ&eacute;s sont conscients de l'engagement 
                        pris par l'entreprise en faveur de la conformit&eacute; sociale. Un syst&egrave;me de prix ou 
                        d'incitations qui r&eacute;compense les employ&eacute;s les plus performants dans le domaine de la 
                        conformit&eacute; sociale est une autre d&eacute;marche qui a &eacute;t&eacute; adopt&eacute;e.
                    </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="vendor-agent">
                    <Accordion.Title>
                        <strong>
                        Fournisseurs/agents (le cas &eacute;ch&eacute;ant)
                        </strong>
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Exigences contractuelles auxquelles le fournisseur ou l'agent est tenu. D'ordinaire, un fournisseur/agent 
                        devrait &ecirc;tre tenu de signer un engagement de conformit&eacute; avec le code de conduite, engagement 
                        qui sera inclus dans le contrat. Le contrat devrait &eacute;galement pr&eacute;ciser toutes les 
                        activit&eacute;s que le fournisseur/agent devra entreprendre dans le cadre du syst&egrave;me, par exemple 
                        garantir aux auditeurs et aux organisations de v&eacute;rification un acc&egrave;s libre aux 
                        &eacute;tablissements de production. Si une entreprise entretient des relations relativement stables avec 
                        les fournisseurs/agents, vous pourriez adopter un mod&egrave;le de conformit&eacute; sociale o&ugrave; une 
                        grande partie de la responsabilit&eacute; de la conformit&eacute; sociale du fournisseur/producteur est 
                        d&eacute;l&eacute;gu&eacute;e au fournisseur/agent. Dans cette configuration, votre contrat pourrait 
                        &eacute;galement exiger que le fournisseur/agent 
                    </p>
                    <ul>
                        <li>
                            S'assure de la conformit&eacute; des fournisseurs de premier niveau avec le code de conduite;
                        </li>
                        <li>
                            Offre une formation aux fournisseurs de premier niveau;
                        </li>
                        <li>
                            R&eacute;alise un &laquo; auto-audit &raquo; des fournisseurs de premier niveau;
                        </li>
                        <li>
                            R&eacute;dige un projet, mette en &#339;uvre et/ou assure le suivi de plans d'action correctifs;
                        </li>
                        <li>
                            Suive et rende compte des r&eacute;sultats des fournisseurs en mati&egrave;re de conformit&eacute; 
                            sociale; et
                        </li>
                        <li>
                            Limite le nombre de sous-traitants et/ou indique les sous-traitants &agrave; diff&eacute;rents niveaux 
                            sp&eacute;cifiques des cha&icirc;nes d'approvisionnement; et
                        </li>
                        <li>
                            Offre des incitations au fournisseur/&agrave; l&rsquo;agent pour de bons r&eacute;sultats en mati&egrave;re 
                            de conformit&eacute; sociale.
                        </li>
                    </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>

                <h2>Fournisseurs</h2>
                <Accordion id="what-topic-cover-1">
                <Accordion.Section id="mgmt">
                    <Accordion.Title>
                                <strong>
                                Gestion
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <p>
                    Exigences contractuelles auxquelles sont tenus les fournisseurs, si une entreprise passe des contrats directement 
                    avec les fournisseurs. Le fournisseur devrait &ecirc;tre tenu de signer un engagement de conformit&eacute; avec 
                    le code de conduite, engagement qui sera inclus dans le contrat. Le contrat devrait &eacute;galement pr&eacute;ciser 
                    toutes les activit&eacute;s que le fournisseur devra entreprendre dans le cadre du syst&egrave;me, par exemple 
                    garantir aux auditeurs et aux organisations de v&eacute;rification un acc&egrave;s libre aux &eacute;tablissements 
                    de production. Si votre entreprise entretient des relations relativement stables avec les fournisseurs, vous pourriez 
                    adopter un mod&egrave;le de conformit&eacute; sociale o&ugrave; une grande partie de la responsabilit&eacute; en 
                    mati&egrave;re de conformit&eacute; sociale sera d&eacute;l&eacute;gu&eacute;e au fournisseur. Dans cette configuration, 
                    votre contrat pourrait &eacute;galement exiger que le fournisseur:
                </p>
                <ul>
                    <li>
                        Forme &agrave; la conformit&eacute; sociale les contrema&icirc;tres, les travailleurs et d'autres groupes;
                    </li>
                    <li>R&eacute;alise certains &laquo; auto-audits &raquo;;</li>
                    <li>
                        R&eacute;dige un projet, mette en &#339;uvre et/ou assure le suivi de plans d'action correctifs;
                    </li>
                    <li>
                        Suive et rende compte de la performance en mati&egrave;re de conformit&eacute; sociale;
                    </li>
                    <li>
                        Limite le nombre de sous-traitants et/ou indique les sous-traitants des diff&eacute;rents niveaux 
                        sp&eacute;cifiques des cha&icirc;nes d'approvisionnement; et
                    </li>
                    <li>
                        S'assure de la conformit&eacute; sociale de ses sous-traitants et aux niveaux sp&eacute;cifi&eacute;s de 
                        la cha&icirc;ne d'approvisionnement.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="supervisor">
                    <Accordion.Title>
                                <strong>
                                Contrema&icirc;tres
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <ul>
                    <li>Usage appropri&eacute; des pouvoirs;</li>
                    <li>
                        Comp&eacute;tences de communication pour motiver les travailleurs et communiquer les r&eacute;ussites, les 
                        besoins, les comp&eacute;tences et les talents des travailleurs &agrave; la direction;
                    </li>
                    <li>
                        Comp&eacute;tences de promotion du travail d'&eacute;quipe; et
                    </li>
                    <li>
                        &laquo; Signaux d'alarme &raquo; pour identifier le travail des enfants, le travail forc&eacute; et la 
                        traite des personnes.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="hr-staff">
                    <Accordion.Title>
                        <strong>
                            Personnel des ressources humaines
                        </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <ul>
                    <li>
                        Calcul des salaires, y compris du travail &agrave; la pi&egrave;ce, des heures suppl&eacute;mentaires, des 
                        primes et des d&eacute;ductions permises et l&eacute;gales;
                    </li>
                    <li>
                        Politiques garantissant le paiement correct et en temps opportun des salaires;
                    </li>
                    <li>
                        Documentation appropri&eacute;e de la v&eacute;rification de l'&acirc;ge;
                    </li>
                    <li>
                        Politiques sur le traitement appropri&eacute; des enfants identifi&eacute;s sur les lieux de travail;
                    </li>
                    <li>
                        Politiques et proc&eacute;dures de recrutement et d'embauche des travailleurs;
                    </li>
                    <li>
                        Proc&eacute;dures pour s'assurer que tous les travailleurs disposent d'un contrat pr&eacute;cisant 
                        clairement les modalit&eacute;s de leur emploi, &eacute;crit d&rsquo;une fa&ccedil;on qu&rsquo;ils 
                        comprennent, et que toute modification apport&eacute;e au contrat sera r&eacute;alis&eacute;e avec 
                        le consentement &eacute;clair&eacute;, par &eacute;crit, des travailleurs;
                    </li>
                    <li>
                        M&eacute;canismes par lesquels les travailleurs peuvent pr&eacute;senter leurs r&eacute;clamations, 
                        y compris celles ayant trait au harc&egrave;lement, aux menaces ou &agrave; l'intimidation;
                    </li>
                    <li>
                        Comp&eacute;tences appropri&eacute;es de tenue des registres;
                    </li>
                    <li>
                        Politiques et proc&eacute;dures sp&eacute;cifiques aux travailleurs migrants, y compris des m&eacute;canismes 
                        garantissant que les courtiers/agents ne leur r&eacute;clament pas des commissions, qu'ils ne sont pas 
                        contraints de d&eacute;poser des arrhes, qu'ils re&ccedil;oivent des modalit&eacute;s et des conditions 
                        d'emploi &eacute;gales &agrave; celles des non-migrants, et qu'ils ont libre acc&egrave;s &agrave; leurs 
                        pi&egrave;ces d'identit&eacute; et un lieu s&ucirc;r pour les y conserver; et
                    </li>
                    <li>
                        Utilisation du syst&egrave;me d&rsquo;information sur la conformit&eacute; sociale, le cas &eacute;ch&eacute;ant.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <h2>Fournisseurs au-del&agrave; du premier niveau</h2>

                <p>
                    Dans toute la mesure du possible, vos programmes de formation et de renforcement des capacit&eacute;s devraient 
                    inclure les fournisseurs au-del&agrave; du premier niveau. Lorsque votre &eacute;valuation des risques a 
                    identifi&eacute; les domaines de vos cha&icirc;nes d'approvisionnement courant le plus grand risque de travail 
                    des enfants, de travail forc&eacute; ou d'autres abus des droits du travail, vous aurez alors une id&eacute;e 
                    des fournisseurs, &agrave; tous les &eacute;chelons, ayant le plus besoin de formation. Les documents de formation 
                    &eacute;labor&eacute;s par vos soins pour les fournisseurs de premier niveau peuvent &ecirc;tre adapt&eacute;s 
                    pour les autres niveaux de la cha&icirc;ne d'approvisionnement. Comme indiqu&eacute;, vous pouvez &eacute;galement 
                    exiger que les fournisseurs/agents ou les fournisseurs/producteurs offrent cette formation. Signalons que certaines 
                    entreprises r&eacute;alisent des gains d&rsquo;efficacit&eacute; en r&eacute;unissant plusieurs fournisseurs, par 
                    exemple tous les fournisseurs op&eacute;rant dans un m&ecirc;me pays ou dans une m&ecirc;me r&eacute;gion, pour 
                    une formation collective.
                </p>

                <h2>Travailleurs et syndicats</h2>
                <ul>
                    <li>Responsabilit&eacute;s sur le lieu de travail;</li>
                    <li>
                        Droits suppl&eacute;mentaires sur le lieu de travail, non abord&eacute;s dans le contenu de la formation principale, 
                        par exemple les droits en vertu des lois locales concernant la libert&eacute; d'emploi, les d&eacute;ductions 
                        salariales, etc.;
                    </li>
                    <li>
                        Proc&eacute;dures appropri&eacute;es pour enregistrer les heures ouvr&eacute;es;
                    </li>
                    <li>
                        Comprendre les fiches de paye, calculer les salaires et les d&eacute;ductions;
                    </li>
                    <li>
                        &laquo; Signaux d'alarme &raquo; pour identifier le travail des enfants, le travail forc&eacute; et 
                        la traite des personnes;
                    </li>
                    <li>
                        Calcul des salaires, y compris du travail &agrave; la pi&egrave;ce, des heures suppl&eacute;mentaires, des primes 
                        et des d&eacute;ductions permises et l&eacute;gales;
                    </li>
                    <li>
                        Politiques garantissant le paiement correct et en temps opportun des salaires;
                    </li>
                    <li>
                        Documentation appropri&eacute;e de la v&eacute;rification de l'&acirc;ge;
                    </li>
                    <li>
                        Politiques sur le traitement appropri&eacute; des enfants identifi&eacute;s sur les lieux de travail;
                    </li>
                    <li>
                        Politiques et proc&eacute;dures de recrutement et d'embauche des travailleurs;
                    </li>
                    <li>
                        Proc&eacute;dures pour s'assurer que tous les travailleurs disposent d'un contrat pr&eacute;cisant clairement 
                        les modalit&eacute;s de leur emploi, &eacute;crit d&rsquo;une fa&ccedil;on qu&rsquo;ils comprennent, et que 
                        toute modification apport&eacute;e au contrat sera r&eacute;alis&eacute;e avec le consentement 
                        &eacute;clair&eacute;, par &eacute;crit, des travailleurs;
                    </li>
                    <li>
                        M&eacute;canismes par lesquels les travailleurs peuvent pr&eacute;senter leurs r&eacute;clamations, y compris 
                        celles ayant trait au harc&egrave;lement, aux menaces ou &agrave; l'intimidation; et
                    </li>
                    <li>
                        Politiques et proc&eacute;dures sp&eacute;cifiques aux travailleurs migrants, y compris des m&eacute;canismes 
                        garantissant que les courtiers/agents ne leur r&eacute;clament pas des commissions, qu'ils ne sont pas contraints 
                        de d&eacute;poser des arrhes, qu'ils re&ccedil;oivent des modalit&eacute;s et des conditions d'emploi &eacute;gales 
                        &agrave; celles des non-migrants, et qu'ils ont libre acc&egrave;s &agrave; leurs pi&egrave;ces d'identit&eacute; 
                        et un lieu s&ucirc;r pour les y conserver.
                    </li>
                </ul>
                <p>
                    Il est important de noter que dans certaines industries, particuli&egrave;rement l'agriculture, certains travailleurs 
                    sont analphab&egrave;tes. Le code de conduite de Starbucks* pour le caf&eacute;, appel&eacute;{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.scsglobalservices.com/starbucks-cafe-practices"
                    >
                        Pratiques C.A.F.&Eacute;.
                    </a>
                    , 
                    inclut l'exigence que tous les travailleurs analphab&egrave;tes soient inform&eacute;s oralement de leurs droits en 
                    vertu du code.
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
