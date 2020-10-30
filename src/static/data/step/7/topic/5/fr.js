import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>&Eacute;tapes d&apos;un audit</h1>
                <p>
                    Un audit se compose d&apos;ordinaire de plusieurs
                    &eacute;tapes, indiqu&eacute;es ci-dessous.&nbsp;
                </p>
                <Accordion id="cocoa-chains-acc">
                   <Accordion.Section id="cocoa-description">
                      <Accordion.Title>
                      Arriv&eacute;e sur le lieu de travail
                         </Accordion.Title>
                         <Accordion.Panel>
                          <p>
                            Les entreprises proc&egrave;dent diff&eacute;remment pour ce qui est d&rsquo;avertir ou pas les lieux 
                            de travail qu&rsquo;il va y avoir un audit (un &laquo; audit annonc&eacute; &raquo;). Toutefois, la 
                            meilleure pratique dans ce domaine est d'ordinaire les audits{" "} <strong>inopin&eacute;s</strong>. Dans ce site pr&eacute;cis, personne ne devrait &ecirc;tre averti &agrave; l'avance de la visite de l'&eacute;quipe d&rsquo;audit &agrave; une date donn&eacute;e.
                          </p>
                     </Accordion.Panel>
                 </Accordion.Section>
                 {/* </Accordion>

                    <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                        R&eacute;union d&apos;ouverture avec la direction
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Le but de la r&eacute;union d'ouverture est d'expliquer le processus de l'audit aux cadres du 
                            site du travail, y compris les parties auxquelles la direction est tenue, ou pas, de participer. 
                            C'est &eacute;galement le moment o&ugrave; l'&eacute;quipe demandera la documentation n&eacute;cessaire 
                            &agrave; l'audit ; la direction pourrait avoir besoin d&rsquo;un certain temps pour rassembler ces 
                            documents apr&egrave;s la r&eacute;union.
                        </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>

                    <Accordion id="cocoa-chains-acc"> */}
                    <Accordion.Section id="cocoa-description">
                        <Accordion.Title>
                            Visite des lieux de travail
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Le but de la visite est d'observer les conditions dans l'usine et tout site connexe, tel que la 
                            cantine et les dortoirs. Ce qui permet &agrave; l'&eacute;quipe d&rsquo;audit de d&eacute;tecter 
                            d'&eacute;ventuels probl&egrave;mes visibles de conformit&eacute; sociale ; les auditeurs peuvent, 
                            par exemple, remarquer des travailleurs qui semblent tr&egrave;s jeunes, &eacute;ventuellement en 
                            dessous de l'&acirc;ge minimum. L'&eacute;quipe devrait observer le d&eacute;roulement du travail 
                            dans l'usine, sans le perturber. Les auditeurs peuvent d&eacute;cider de converser bri&egrave;vement 
                            avec les travailleurs, sans toutefois interrompre leur travail ni les mettre en danger. Cette visite 
                            est &eacute;galement le moment id&eacute;al d'examiner les &eacute;quipements de s&eacute;curit&eacute;, 
                            les sorties de secours et les syst&egrave;mes de pointage.
                        </p>
                        <OwnWords>
                            <h3>
                                <OwnWords.Icon alt="Feedback"/>{" "}
                                <strong>
                                    Dans leurs propres mots: Les d&eacute;fis de
                                    la v&eacute;rification de l&apos;&acirc;ge
                                </strong>
                            </h3>
                            <p>
                                «&nbsp;Pour v&eacute;rifier l&apos;&acirc;ge des
                                travailleurs, «&nbsp;l&apos;employeur devra tenir et
                                conserver &agrave; disposition [des] registres ou
                                documents [qui] devront indiquer le nom et
                                l&apos;&acirc;ge ou la date de naissance, d&ucirc;ment
                                attest&eacute;s dans la mesure du possible, non
                                seulement des enfants et des adolescents occup&eacute;s
                                par eux, mais aussi de ceux auxquels une orientation ou
                                une formation professionnelles sont dispens&eacute;es
                                dans leur entreprise.&nbsp;»
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_152880/lang--fr/index.htm#F4"
                                    title="Convention n<sup>o</sup>&nbsp;138 (1973)"
                                >
                                    [1]
                                </a>
                            </p>
                            <p>
                                En l&rsquo;absence d&rsquo;actes de naissance permettant
                                de v&eacute;rifier l&rsquo;&acirc;ge ou dans les cas
                                o&ugrave; il est facile d&rsquo;obtenir des documents
                                falsifi&eacute;s, les suggestions suivantes peuvent
                                s&rsquo;av&eacute;rer utiles:
                            </p>
                            <ul>
                                <li>
                                    Un examen m&eacute;dical pr&eacute;alable &agrave; l'entr&eacute;e en service peut aider &agrave; 
                                    indiquer l'&acirc;ge v&eacute;ritable de la personne tout en v&eacute;rifiant l'aptitude physique au 
                                    travail. Il importe de toujours respecter le droit &agrave; l'intimit&eacute; de la personne.
                                </li>
                                <li>
                                    Le recoupement de plusieurs documents et
                                    attestations &eacute;crites peuvent permettre de
                                    d&eacute;tecter les faux documents.
                                </li>
                                <li>
                                    Les employeurs peuvent conduire des entretiens avec
                                    les travailleurs et les candidats qui semblent ne
                                    pas avoir l&apos;&acirc;ge minimum requis pour
                                    travailler afin d&apos;obtenir des renseignements.
                                </li>
                                <li>
                                    Les certificats de scolarit&eacute; peuvent
                                    &ecirc;tre une bonne source d&apos;information.
                                    <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_152880/lang--fr/index.htmhtm#F5"
                                    title="L&rsquo;abolition du travail des enfants. Guide &agrave; l&rsquo;intention des employeurs"
                                >
                                    [2]
                                </a>
                                </li>
                            </ul>
                            <p>
                                Les indicateurs locaux peuvent s'av&eacute;rer utiles dans les pays o&ugrave; il y a des risques que le 
                                travailleur ne connaisse pas l'ann&eacute;e pr&eacute;cise de sa naissance. Ainsi dans certains pays 
                                asiatiques, les enfants ne connaissent pas l'ann&eacute;e exacte de leur naissance mais ils connaissent 
                                l'animal qui correspond &agrave; cette ann&eacute;e (l'ann&eacute;e du singe, etc.). Une personne peut 
                                aussi savoir que sa naissance co&iuml;ncide avec un &eacute;v&eacute;nement historique majeur, comme 
                                l'ind&eacute;pendance ou le d&eacute;but ou la fin d'une guerre, ou un anniversaire important. Vous pouvez 
                                v&eacute;rifier quels ont &eacute;t&eacute; certains &eacute;v&eacute;nements majeurs ou qui ont laiss&eacute; 
                                une trace dans le pays dans lequel s'exercent les activit&eacute;s en question et vous pouvez faire appel 
                                &agrave; ces donn&eacute;es dans les entretiens avec les travailleurs lorsque vous avez des doutes sur 
                                leur &acirc;ge.
                            </p>
                            <p>
                                [1] Voir l&apos;Article 9(3) de la&nbsp;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:312283,fr:NO"
                                    title="Convention n<sup>o</sup>&nbsp;138 (1973)"
                                >
                                    Convention n<sup>o</sup>&nbsp;138 (1973)
                                </a>
                                &nbsp;sur l&rsquo;obligation d&rsquo;un employeur de
                                maintenir des registres sur les travailleurs de moins de
                                18&nbsp;ans. <br /> [2] Voir&nbsp;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/jakarta/whatwedo/publications/WCMS_151355/lang--en/index.htm"
                                    title="L&rsquo;abolition du travail des enfants. Guide &agrave; l&rsquo;intention des employeurs"
                                >
                                    L&rsquo;abolition du travail des enfants. Guide
                                    &agrave; l&rsquo;intention des employeurs
                                </a>
                                , OIT, Gen&egrave;ve, 2007.
                            </p>
                            <p>
                                Source: Extrait du Helpdesk du BIT:
                                Assistance aux entreprises sur les normes
                                internationales du travail,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_152880/lang--fr/index.htm"
                                    title="Questions/R&eacute;ponses sur les entreprises et le travail des enfants"
                                >
                                    <em>
                                        Questions/R&eacute;ponses sur les entreprises et
                                        le travail des enfants
                                    </em>
                                </a>
                                <em>, consult&eacute; le 11&nbsp;mai 2017.</em>
                            </p>
                        </OwnWords>
                 </Accordion.Panel>
                 </Accordion.Section>
                 {/* </Accordion>
                <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                        Entretiens avec les travailleurs
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        L'&eacute;quipe devrait choisir un &eacute;chantillon repr&eacute;sentatif des travailleurs pour 
                        r&eacute;aliser des entretiens. Les travailleurs choisis devraient repr&eacute;senter les 
                        diff&eacute;rentes cat&eacute;gories de personnel et inclure (le cas &eacute;ch&eacute;ant) des hommes 
                        et des femmes, des travailleurs migrants et des travailleurs locaux, des travailleurs des 
                        diff&eacute;rentes &eacute;quipes de travail, des travailleurs faisant des t&acirc;ches diff&eacute;rentes, 
                        des membres de diff&eacute;rentes &eacute;quipes de production, etc. S&rsquo;il y a des jeunes dans 
                        l&rsquo;&eacute;tablissement, un groupe repr&eacute;sentatif d&rsquo;entre eux devrait passer des 
                        entretiens qui mettent en &#339;uvre des techniques d&rsquo;entretien adapt&eacute;es &agrave; 
                        l&rsquo;&acirc;ge.
                    </p>
                    <p>
                        Les entretiens peuvent se tenir individuellement ou collectivement, et se tiennent d&rsquo;ordinaire 
                        &agrave; l'int&eacute;rieur et &agrave; l'ext&eacute;rieur de l'&eacute;tablissement. Les auditeurs 
                        devront peut-&ecirc;tre prendre le temps de converser avec les travailleurs en dehors des heures de 
                        travail et &agrave; l'ext&eacute;rieur du lieu de travail, particuli&egrave;rement s'il existe des 
                        indices de violations patentes dont les employ&eacute;s h&eacute;siteraient &agrave; parler au travail. 
                        Les auditeurs devraient avoir recours &agrave; leurs outils d'audit pour s'assurer de poser aux 
                        travailleurs un ensemble exhaustif de questions. Ils devraient &eacute;galement recueillir des copies 
                        des fiches de paie des travailleurs pour les comparer aux registres de paiement tenus par la direction.
                    </p>
                    <p>
                        Les entretiens donneront aux travailleurs la possibilit&eacute; d'exprimer leurs &eacute;ventuelles 
                        pr&eacute;occupations. Les travailleurs devraient &ecirc;tre assur&eacute;s que toutes leurs r&eacute;ponses 
                        resteront confidentielles et ne seront jamais communiqu&eacute;es &agrave; la direction. Le contrat avec vos 
                        fournisseurs devrait inclure une clause de non-r&eacute;torsion contre les travailleurs pour avoir pris part 
                        &agrave; un audit ; cette participation devrait b&eacute;n&eacute;ficier des m&ecirc;mes protections, pour 
                        les travailleurs, que tout autre m&eacute;canisme de r&eacute;clamation.
                    </p>
                    <p>
                        S&rsquo;il existe un syndicat dans l&rsquo;&eacute;tablissement, il conviendrait de faire passer un entretien 
                        &agrave; un repr&eacute;sentant syndical. En l&rsquo;absence d&rsquo;un syndicat ou d&rsquo;un autre type 
                        d&rsquo;organisation de repr&eacute;sentation des travailleurs, les auditeurs devraient s&rsquo;efforcer 
                        d&rsquo;entrer en contact avec des groupes locaux de d&eacute;fense des droits des travailleurs. Les 
                        organisations de la soci&eacute;t&eacute; civile locale, surtout celles qui s&rsquo;impliquent dans ces efforts 
                        de d&eacute;fense des droits des travailleurs, peuvent &eacute;galement confirmer des informations et fournir 
                        des renseignements contextuels concernant la situation des droits du travail dans une r&eacute;gion donn&eacute;e.
                    </p>
                    <p>
                        L&rsquo;Outil d&rsquo;approvisionnement responsable comprend un outil,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/workerinterviews"
                            title="Mener des entretiens avec les travailleurs migrants"
                        >
                            Entretiens avec les travailleurs migrants
                        </a>{" "}
                        [en anglais], qui fournit un ensemble d&rsquo;exemples de questions &agrave; utiliser pendant les entretiens avec 
                        les travailleurs migrants et les contractuels &eacute;trangers. Il permet aux entreprises de fa&ccedil;onner leurs 
                        propres questionnaires d&rsquo;entretien des travailleurs dans le but d&rsquo;am&eacute;liorer la capacit&eacute; 
                        des auditeurs &agrave; identifier les cas &eacute;ventuels de violations ou de traite des personnes caus&eacute;s 
                        par les recruteurs dans les locaux d&rsquo;une soci&eacute;t&eacute;, d&rsquo;un fournisseur ou d&rsquo;un sous-traitant.
                    </p>
                    <OwnWords>
                        <h3>
                            <OwnWords.Icon alt="Feedback"/>{" "}
                            <strong>
                                Dans leurs propres mots: Mener un entretien avec un enfant
                            </strong>
                        </h3>
                            <p>
                            <em>
                                &laquo; Dans le cadre du recrutement de jeunes, il est n&eacute;cessaire de s'entretenir avec des 
                                enfants pour : a) &eacute;valuer leur &acirc;ge, b) &eacute;valuer leur maturit&eacute; et savoir 
                                de quel travail la personne est en mesure de s'acquitter, c) d&eacute;terminer l'exp&eacute;rience 
                                professionnelle possible et/ou d) s'il se r&eacute;v&egrave;le que l'un des travailleurs n'a pas 
                                l'&acirc;ge pour le type d'emploi/de processus que l'enfant ou le jeune ex&eacute;cute.
                            </em>
                                
                            </p>
                            <p>
                            <em>
                                En vous entretenant avec un enfant que vous soup&ccedil;onnez de ne pas avoir l'&acirc;ge minimum 
                                exig&eacute; pour le type d'emploi particulier ou si l'enfant fait un travail dangereux, il est 
                                important d'&eacute;tablir une atmosph&egrave;re de confiance d&eacute;tendue. Il est &eacute;galement 
                                important que la conversation se tienne dans un environnement sans perturbation, mais ni trop loin, 
                                ni hors de vue. Bref, l'enfant doit se sentir autant en s&eacute;curit&eacute; que possible.
                            </em>
                            </p>
                            <h2>
                                <em>Que faut-il observer?</em>
                            </h2>
                            <ul>
                                <li>
                                    L'enfant, gar&ccedil;on ou fille, doit &ecirc;tre trait&eacute; avec respect et &ecirc;tre 
                                    consid&eacute;r&eacute; comme une personne &agrave; part enti&egrave;re.
                                </li>
                                <li>
                                    Deux adultes doivent toujours &ecirc;tre pr&eacute;sents pendant tout l'entretien. Un 
                                    adulte ne doit pas passer trop de temps seul avec des enfants, &agrave; l'&eacute;cart 
                                    des autres, pour ne pas entra&icirc;ner trop d'inqui&eacute;tude concernant l'enfant et 
                                    des soup&ccedil;ons de comportement inappropri&eacute; ou mena&ccedil;ant, ou de 
                                    s&eacute;vices.
                                </li>
                                <li>
                                    S'il s'agit d'un entretien avec une fille, une femme doit toujours &ecirc;tre pr&eacute;sente.
                                </li>
                                <li>
                                    Il est conseill&eacute; de convier &agrave; l'entretien les parents ou les tuteurs de l'enfant.
                                </li>
                                <li>
                                    Si l'enfant est orphelin et qu'aucun parent ou tuteur ne peut &ecirc;tre identifi&eacute;, 
                                    un repr&eacute;sentant d'une ONG de d&eacute;fense des droits des enfants pourra 
                                    &ecirc;tre invit&eacute;.
                                </li>
                            </ul>
                            
                            <h2>
                                <em>Au cours d&apos;un entretien avec un enfant</em>
                            </h2>
                            <ul>
                                <li>
                                    L'objectif principal de l'entretien est toujours d'&eacute;couter l'enfant et de tenter 
                                    d'&eacute;tablir une &eacute;valuation d'ensemble de la famille et de la situation de 
                                    travail de l'enfant :
                                </li>
                                <li>
                                    Motifs pour lesquels l'enfant travaille
                                </li>
                                <li>
                                    Comment l'enfant contribue-t-il aux revenus de la famille et quelle est la situation de sa 
                                    famille (p. ex., ch&ocirc;mage, maladie, etc.) ?
                                </li>
                                <li>
                                    Comment l'enfant comprend-il et consid&egrave;re-t-il son propre travail ? &raquo;
                                </li>
                            </ul>
                            <p>
                                Source: Save the Children Denmark,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.cottonafrica.com/textileeastafrica/workshop for industry/Child labour toolki.pdf"
                                    title="Child Labour Toolkit, Responsible Approaches to Child Labour in the Textile and Garment Industry"
                                >
                                    Bo&icirc;te &agrave; outils sur le travail des enfants, approches responsables du travail des 
                                    enfants dans le secteur du textile et de l&rsquo;habillement
                                </a>{" "}
                                [en anglais], 2006.
                            </p>
                        </OwnWords>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                    <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                    Entretiens avec la direction
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Les entretiens avec la direction donnent la possibilit&eacute; de corroborer ou de trouver 
                            des contradictions par rapport aux informations recueillies lors des entretiens avec les 
                            travailleurs. L'&eacute;quipe devrait s'entretenir avec un &eacute;chantillon 
                            repr&eacute;sentatif des cadres, y compris du personnel des ressources humaines, des 
                            contrema&icirc;tres de la production et autres. Les auditeurs devraient avoir recours &agrave; 
                            leurs outils d'audit pour s'assurer de poser aux cadres un ensemble exhaustif de questions.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>

                    <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                    Entretiens avec les courtiers et les recruteurs de main d&apos;&oelig;uvre

                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            Pour les entreprises qui emploient un grand nombre de travailleurs migrants ou contractuels dans leurs 
                            cha&icirc;nes d'approvisionnement, les audits tendent de plus en plus &agrave; inclure des entretiens 
                            avec les recruteurs et les courtiers de main d&rsquo;&#339;uvre. Il peut &ecirc;tre difficile d'avoir 
                            acc&egrave;s aux courtiers et aux recruteurs pour s'entretenir avec eux, et il faudra sans doute pour 
                            cela obtenir la coordination et la coop&eacute;ration du fournisseur. La{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://helpwanted.verite.org/helpwanted/toolkit"
                                title="Bo&icirc;te &agrave; outils de l&rsquo;embauche &eacute;quitable"
                            >
                                bo&icirc;te &agrave; outils de l&rsquo;embauche
                                &eacute;quitable
                            </a>{" "}
                            de Verit&eacute;* [en anglais] comprend des{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://helpwanted.verite.org/helpwanted/toolkit/suppliers/managing-labor-recruiters"
                                title="exemples de questions d&rsquo;entretien avec des recruteurs de main d'&#339;uvre"
                            >
                                exemples de questions d&rsquo;entretien avec des recruteurs de main d'&#339;uvre
                            </a>{" "} 
                            exemples de questions d&rsquo;entretien avec des recruteurs de main d'&#339;uvre 
                            con&ccedil;us pour servir aux auditeurs sociaux d&rsquo;une entreprise.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>

                     <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                        Examen de la documentation
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Le but d'un examen de la documentation sera de fournir la preuve tangible de la conformit&eacute; et de 
                        corroborer ou de trouver des contradictions quant aux informations recueillies lors des entretiens avec 
                        les travailleurs et la direction. Voici notamment les types de documents &agrave; examiner:

                    </p>
                    <ul>
                        <li>
                            Proc&eacute;dures et documents de contr&ocirc;le de l'&acirc;ge
                        </li>
                        <li>
                            Liste de contr&ocirc;le des travailleurs juv&eacute;niles
                        </li>
                        <li>
                            Proc&eacute;dures de s&eacute;lection et de recrutement
                        </li>
                        <li>
                            Contrats avec les courtiers de main d&rsquo;&#339;uvre
                        </li>
                        <li>
                            Contrats de travail et lettre d'embauche des travailleurs
                        </li>
                        <li>
                            Documents personnels des travailleurs que l'employeur aurait conserv&eacute;s
                        </li>
                        <li>
                            Programme et documents de pr&eacute;sentation
                        </li>
                        <li>Dossiers du personnel</li>
                        <li>
                            Plan de communication et de formation des employ&eacute;s &ndash; attestations, notamment sans 
                            s&rsquo;y limiter cours de qualification, pr&eacute;paration des travailleurs, programmes de 
                            dipl&ocirc;mes d'&Eacute;tat, orientations relatives aux syst&egrave;mes et aux politiques
                        </li>
                        <li>
                            Conventions collectives, y compris l'accr&eacute;ditation des syndicats, le r&ocirc;le du 
                            syndicat et les proc&egrave;s-verbaux des r&eacute;unions
                        </li>
                        <li>
                            Contrats avec les agences de s&eacute;curit&eacute; et d&eacute;finition de leurs responsabilit&eacute;s
                        </li>
                        <li>
                            Registres de paie et registres des heures travaill&eacute;es
                        </li>
                        <li>
                            Rapports sur les capacit&eacute;s de production
                        </li>
                        <li>
                            Politiques et proc&eacute;dures &eacute;crites concernant les ressources humaines
                        </li>
                        <li>
                            Plans et registres relatifs &agrave; la sant&eacute; et &agrave; la s&eacute;curit&eacute; sur les 
                            lieux de travail, y compris les permis officiels, les registres de maintenance et de surveillance, 
                            les rapports sur les blessures et accidents du travail, les proc&eacute;dures d'enqu&ecirc;te, les 
                            stocks de produits chimiques, ceux des &eacute;quipements de protection individuelle, les attestations 
                            de formation et les plans d'&eacute;vacuation
                        </li>
                        <li>Avis de sanctions disciplinaires</li>
                        <li>Relev&eacute;s des r&eacute;clamations</li>
                        <li>&Eacute;valuations de la performance</li>
                        <li>
                            Augmentations de salaire pour promotion et/ou au m&eacute;rite
                        </li>
                        <li>
                            Registres des licenciements ou des mises &agrave; pied
                        </li>
                        <li>
                            Registres des employ&eacute;s ayant d&eacute;missionn&eacute;
                        </li>
                        <li>Fiches de paie des travailleurs</li>
                    </ul>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                                            <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                    Gestion de la R&eacute;union de conclusion
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            La r&eacute;union de conclusion permet de signaler &agrave; la direction les violations 
                            du code relev&eacute;es dans l'&eacute;tablissement. Pour certaines entreprises, la 
                            r&eacute;union de conclusion permet de demander &agrave; la direction ses propositions de 
                            r&eacute;paration des probl&egrave;mes ou de collaborer avec elle &agrave; un plan d'actions 
                            correctives (PAC). Pour d'autres entreprises, la r&eacute;union de conclusion permet de 
                            discuter de certaines questions avec la direction, mais l&rsquo;&eacute;laboration du PAC 
                            officiel ne se fait qu&rsquo;&agrave; l'issue de l'audit et lorsque toute l'&eacute;quipe 
                            aura pass&eacute; en revue le rapport d'audit.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>

                    <Accordion id="cocoa-chains-acc"> */}
                <Accordion.Section id="cocoa-description">
                    <Accordion.Title>
                    Pr&eacute;paration du rapport
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                        L'&eacute;quipe d&rsquo;audit pr&eacute;pare un rapport complet de l'audit.
                        </p>
                        <p>
                            La dur&eacute;e d'un audit d&eacute;pend de la taille du lieu de travail. La plupart des 
                            audits durent un ou deux jours, mais ils peuvent prendre plus longtemps (et les entreprises 
                            devraient investir dans des audits de plus longue dur&eacute;e) si le lieu de travail et les 
                            effectifs sont de taille et/ou si des violations importantes sont rep&eacute;r&eacute;es et 
                            si l'enqu&ecirc;te &agrave; leur sujet va prendre du temps. Les enqu&ecirc;tes portant sur 
                            des audits provoqu&eacute;s par une r&eacute;clamation ou la plainte d&rsquo;un lanceur 
                            d&rsquo;alerte peuvent prendre plus de temps, notamment si elles exigent l'intervention des 
                            autorit&eacute;s de police.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                </Accordion>

            </div>
        </StaticData>
    );
};

export default fr;
