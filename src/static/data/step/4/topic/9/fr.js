import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Key Information Related to Risk and Impact
                </h1>
                <p>
                    &Agrave; la suite de ces recherches initiales, la
                    soci&eacute;t&eacute; devrait obtenir la participation des
                    parties prenantes pertinentes pour glaner des informations
                    suppl&eacute;mentaires sur les risques. Elle devrait tenter
                    d&rsquo;obtenir les contributions de toute une s&eacute;rie
                    de groupes et mettre en place des processus qui permettent
                    de surmonter les barri&egrave;res de la communication,
                    notamment les barri&egrave;res inguistiques.
                </p>
                <p>
                    Dans certaines situations, la consultation avec certains
                    groupes de parties prenantes peut se r&eacute;v&eacute;ler
                    impossible ou ne pas produire toutes les informations
                    n&eacute;cessaires. Dans ces cas sp&eacute;cifiques, des
                    sp&eacute;cialistes issus d&rsquo;institutions
                    universitaires, de cabinets-conseil en mati&egrave;re de
                    responsabilit&eacute; sociale des entreprises et d&rsquo;ONG
                    peuvent vous aider &agrave; mener votre &eacute;valuation
                    des risques et des incidences.
                </p>
                <p>Quelles informations recherchez-vous?</p>
                 <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Nature et pr&eacute;valence
                                     </Accordion.Title>
                                     <Accordion.Panel>
                                        <p className="indent-margin">
                                        La pr&eacute;sence du travail des enfants, du travail
                                        forc&eacute; et d&apos;autres violations des droits du
                                        travail est-elle attest&eacute;e ou pr&eacute;sum&eacute;e
                                        dans vos zones g&eacute;ographiques (&eacute;ventuellement
                                        potentielles) d&apos;approvisionnement? Quel type de
                                        travail est ex&eacute;cut&eacute;? Quelles sont les
                                        violations les plus couramment relev&eacute;es?
                                    </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                 <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Causes profondes
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                         Si le travail des enfants, le travail forc&eacute; et
                                         d&apos;autres violations des droits du travail sont
                                         pr&eacute;sents, quelles en sont les causes profondes?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>

                    <Accordion id="cocoa-chains-acc">
                                  <Accordion.Section id="cocoa-description">
                                     <Accordion.Title>
                                     Structure de l&apos;industrie
                                        </Accordion.Title>
                                        <Accordion.Panel>

                                        <p className="indent-margin">
                                            Comment cette industrie op&egrave;re-t-elle dans le
                                            pays? Les lieux de travail sont-ils formels ou
                                            informels Les relations de travail sont-elles
                                            formelles? Des &eacute;l&eacute;ments de la production
                                            sont-ils sous-trait&eacute;s? Dans ce cas, une partie
                                            de la production est-elle externalis&eacute;e &agrave;
                                            domicile?
                                        </p>
                                    </Accordion.Panel>
                                </Accordion.Section>
                                </Accordion>

                 <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Population active
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                         Quelles sont les caract&eacute;ristiques de la population
                                         active dans cette industrie dans cette r&eacute;gion
                                         g&eacute;ographique? A-t-on souvent recours &agrave;
                                         des travailleurs sous-traitants, temporaires, sans
                                         qualifications et/ou migrants? Si c&apos;est le cas,
                                         ces travailleurs parlent-ils d&apos;ordinaire la langue
                                         locale? Les travailleurs sont-ils surtout des hommes,
                                         ou des femmes? Un groupe d&apos;&acirc;ge particulier
                                         est-il couramment engag&eacute;?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                     <Accordion id="cocoa-chains-acc">
                                   <Accordion.Section id="cocoa-description">
                                      <Accordion.Title>
                                      Relations industrielles
                                         </Accordion.Title>
                                         <Accordion.Panel>

                                         <p className="indent-margin">
                                             Existe-t-il un cadre juridique et institutionnel national en
                                             place pour permettre des relations industrielles et des
                                             n&eacute;gociations collectives v&eacute;ritables?
                                             Existe-t-il de v&eacute;ritables syndicats? Si ce
                                             n&apos;est pas le cas, existe-t-il d&apos;autres
                                             m&eacute;canismes en place pour que les travailleurs
                                             puissent s&apos;exprimer sur le lieu de travail?
                                         </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>
                                 </Accordion>
                     <Accordion id="cocoa-chains-acc">
                                   <Accordion.Section id="cocoa-description">
                                      <Accordion.Title>
                                      Protection sociale
                                         </Accordion.Title>
                                         <Accordion.Panel>

                                         <p className="indent-margin">
                                             Existe-t-il un filet de s&eacute;curit&eacute; sociale dans
                                             le pays qui prot&egrave;ge les plus vuln&eacute;rables,
                                             donnant notamment acc&egrave;s aux soins de sant&eacute;,
                                             une s&eacute;curit&eacute; de revenus pour les personnes
                                             &acirc;g&eacute;es et les personnes handicap&eacute;es, des
                                             prestations sociales pour les enfants et une
                                             s&eacute;curit&eacute; des revenus pour les ch&ocirc;meurs
                                             et les travailleurs pauvres? Y a-t-il suffisamment
                                             d&apos;&eacute;tablissements &eacute;ducatifs pour instruire
                                             les enfants jusqu&apos;&agrave; l&apos;&acirc;ge
                                             l&eacute;gal d&rsquo;admission &agrave;
                                             l&rsquo;emploi?
                                         </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>
                                 </Accordion>

                 <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Environnement juridique et r&eacute;glementaire
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                         Quelles sont les principales lois et r&eacute;glementations
                                         concernant le travail des enfants, le travail forc&eacute;
                                         et les autres droits du travail dans ce pays/cette
                                         juridiction? Ces lois et ces r&eacute;glementations
                                         s&apos;appliquent-elles aux travailleurs migrants?
                                         Quelles lois existe-t-il concernant la complicit&eacute; des
                                         entreprises dans les violations des droits de
                                         l&apos;homme? Dans quelle mesure les lois sont-elles
                                         appliqu&eacute;es et y a-t-il des &eacute;l&eacute;ments de
                                         preuve de corruption li&eacute;e &agrave; l&apos;absence de
                                         r&eacute;pression?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                   <Accordion id="cocoa-chains-acc">
                                   <Accordion.Section id="cocoa-description">
                                      <Accordion.Title>
                                     Initiatives existantes
                                         </Accordion.Title>
                                         <Accordion.Panel>

                                         <p>
                                         Quels sont les efforts entrepris, et par qui, pour lutter
                                         contre les violations des droits du travail, telles que le
                                         travail des enfants et le travail forc&eacute;, dans cette
                                         industrie ou dans cette r&eacute;gion?
                                     </p>

                                     <p>
                                         Pour avoir une id&eacute;e de l&rsquo;application de cette
                                         approche g&eacute;n&eacute;rale &agrave; un secteur
                                         particulier, l&rsquo;
                                         <a
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             href="http://www.responsiblesourcingtool.org/download/seafood/SF_Tool_04.pdf"
                                             title="Outil d&rsquo;approvisionnement responsable&nbsp;des produits de la mer&nbsp;4: Collecte d&rsquo;information et &eacute;valuation des risques dans les cha&icirc;nes d&rsquo;approvisionnement des produits de la mer"
                                         >
                                             Outil d&rsquo;approvisionnement responsable des produits
                                             de la mer&nbsp;4: Collecte d&rsquo;information et
                                             &eacute;valuation des risques dans les cha&icirc;nes
                                             d&rsquo;approvisionnement des produits de la mer
                                         </a>{" "}
                                         [en anglais] adopte une approche &eacute;tape par
                                         &eacute;tape de l&rsquo;examen des risques bas&eacute;s sur
                                         les pays, les cha&icirc;nes d&rsquo;approvisionnement et les
                                         fournisseurs.&nbsp;
                                     </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>
                                 </Accordion>
                        <br />
                <ExampleInAction id="fish">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d&apos;action: P&ecirc;che et produits
                            de la mer
                        </strong>
                    </h2>
                    <p>
                        Le travail des enfants et le travail forc&eacute;
                        participent &agrave; la p&ecirc;che et &agrave; la
                        transformation des poissons et des produits de la mer
                        dans toute une s&eacute;rie d&rsquo;environnements
                        aquatiques dans le monde entier. La nature isol&eacute;e
                        du travail sur l&rsquo;eau pr&eacute;sente un certain
                        nombre de d&eacute;fis pour les services de
                        r&eacute;pression du travail des enfants et du travail
                        forc&eacute; dans les domaines de la p&ecirc;che et des
                        produits de la mer. La{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                            title="Convention des Nations Unies sur le droit de la mer"
                        >
                            Convention des Nations Unies sur le droit de la mer
                        </a>{" "}
                        constitue le principal instrument international sur la
                        question du droit maritime en mer. La Convention fait la
                        distinction entre diff&eacute;rentes zones maritimes
                        (mer territoriale, zones &eacute;conomiques exclusives
                        et haute mer) et la capacit&eacute; des pays &agrave;
                        r&eacute;glementer les activit&eacute;s qui se
                        d&eacute;roulent dans chacune d&rsquo;elles. Ces
                        fronti&egrave;res maritimes ajoutent un autre niveau de
                        complexit&eacute; &agrave; l&rsquo;application du droit
                        du travail sur les navires de p&ecirc;che. Il incombe en
                        g&eacute;n&eacute;ral au pays dont le pavillon flotte
                        sur le navire de p&ecirc;che d&rsquo;y
                        r&eacute;glementer les conditions de travail. Cependant,
                        lorsque les &Eacute;tats sont incapables
                        d&rsquo;appliquer le droit du travail sur ces navires ou
                        se montrent r&eacute;ticents &agrave; le faire, les
                        travailleurs peuvent &ecirc;tre de plus en plus
                        vuln&eacute;rables &agrave; l&rsquo;exploitation.
                        S&apos;il est interdit aux navires de changer de
                        pavillon au cours de leur exp&eacute;dition, ils
                        utilisent parfois ce que l&rsquo;on appelle des
                        pavillons de complaisance&nbsp;(le pavillon d&rsquo;un
                        &Eacute;tat qui n&rsquo;est pas celui du
                        propri&eacute;taire du navire) afin
                        d&rsquo;&eacute;viter des redevances financi&egrave;res
                        ou r&eacute;glementaires dans l&rsquo;&Eacute;tat en
                        question, et pour profiter d&rsquo;un r&eacute;gime du
                        travail dont ils estiment qu&rsquo;il leur est
                        b&eacute;n&eacute;fique. Les efforts d&rsquo;application
                        de la loi, de poursuite et de r&eacute;paration sont
                        encore plus complexes lorsque les navires op&egrave;rent
                        dans la juridiction territoriale d&rsquo;un autre
                        &Eacute;tat.&nbsp;
                    </p>
                    <p>
                        La p&ecirc;che illicite, non d&eacute;clar&eacute;e et
                        non r&eacute;glement&eacute;e (INN) est devenue un
                        probl&egrave;me qui ne cesse de se d&eacute;velopper.
                        Elle &eacute;puise les stocks mondiaux de produits de la
                        mer et cr&eacute;e une concurrence d&eacute;loyale au
                        sein de ce secteur, notamment en assujettissant les
                        travailleurs &agrave; l&rsquo;exploitation. Les
                        gouvernements ont intensifi&eacute; leurs efforts pour
                        combattre la p&ecirc;che INN. Par exemple, dans le cadre
                        de sa r&eacute;glementation sur ce sujet, l&rsquo;Union
                        europ&eacute;enne a attribu&eacute; des
                        pr&eacute;recensements, plus connus sous le nom de
                        «&nbsp;cartons jaunes&nbsp;», aux pays qui, &agrave; ses
                        yeux, ne luttent pas suffisamment contre la p&ecirc;che
                        INN. L&rsquo;attribution d&rsquo;un carton jaune lance
                        un dialogue officiel avec le gouvernement en question
                        concernant des mesures correctives. Le gouvernement des
                        &Eacute;tats-Unis prend &eacute;galement des mesures
                        pour s&apos;attaquer au probl&egrave;me: un groupe
                        de travail pr&eacute;sidentiel sur la lutte contre la
                        p&ecirc;che INN a publi&eacute; un{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                            title="Plan d&rsquo;action pour la mise en &oelig;uvre des recommandations du groupe de travail"
                        >
                            Plan d&rsquo;action pour la mise en &oelig;uvre des
                            recommandations du groupe de travail
                        </a>{" "}
                        [en anglais], en vertu duquel les &Eacute;tats-Unis
                        mettent en place un programme de
                        tra&ccedil;abilit&eacute; des produits de la mer.
                    </p>
                </ExampleInAction>
                <br />
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>Dans leurs propres mots</strong>&nbsp;{": "}
                    </h2>
                    <p>
                        <strong>
                            Principaux facteurs de risques de violations des
                            droits du travail
                        </strong>
                    </p>
                    <p>
                        La Soci&eacute;t&eacute; de promotion des
                        investissements &agrave; l&rsquo;&eacute;tranger du
                        gouvernement des &Eacute;tats-Unis (OPIC) a mis en place
                        des processus visant &agrave; s&rsquo;assurer que les
                        projets qui re&ccedil;oivent son soutien sont durables
                        sur les plans environnemental et social. Certains
                        projets financ&eacute;s par l&rsquo;OPIC font
                        l&rsquo;objet d&rsquo;une «&nbsp;attention
                        particuli&egrave;re&nbsp;» en fonction de
                        l&rsquo;&eacute;valuation de facteurs li&eacute;s
                        &agrave; la main d&apos;&oelig;uvre.
                    </p>
                    <p>
                        &nbsp;«&nbsp;Un projet faisant l&rsquo;objet d&rsquo;une
                        attention particuli&egrave;re est
                        consid&eacute;r&eacute; comme pr&eacute;sentant un
                        potentiel &eacute;lev&eacute; de risques sociaux
                        n&eacute;gatifs li&eacute;s au projet associ&eacute;s
                        &agrave; la participation de personnes affect&eacute;es
                        par le projet, notamment de travailleurs, ou &agrave;
                        son incidence sur elles. Un projet pourra faire
                        l&rsquo;objet d&rsquo;une attention particuli&egrave;re
                        en raison d&rsquo;une &eacute;valuation de la
                        gravit&eacute; des risques sociaux &eacute;ventuels et
                        de leur pertinence vis-&agrave;-vis du projet.&nbsp;
                    </p>
                    <p>
                        Les principaux facteurs de risque pris en compte
                        pourront &ecirc;tre notamment les suivants:
                    </p>
                    <ul>
                        <li>
                            Industrie ou secteur: industries ou secteurs
                            &agrave; forte intensit&eacute; de
                            main-d&apos;&oelig;uvre qui ont statistiquement plus
                            de chances d&rsquo;enfreindre les droits du travail.
                        </li>
                        <li>
                            Vuln&eacute;rabilit&eacute;s
                            r&eacute;gionales: projets dans les pays (i)
                            pr&eacute;sentant un historique document&eacute; de
                            probl&egrave;mes relatifs aux droits du travail,
                            (ii) ayant r&eacute;cemment connu un conflit
                            associ&eacute; &agrave; des personnes
                            affect&eacute;es par le projet, ou (iii) disposant
                            de syst&egrave;mes r&eacute;glementaires laxistes ou
                            compromis.
                        </li>
                        <li>
                            Pr&eacute;sence de groupes vuln&eacute;rables:
                            (i) usage ou d&eacute;pendance en grande partie de
                            grands groupes de travailleurs non qualifi&eacute;s,
                            temporaires et/ou migrants en sous-traitance,
                            notamment au sein de la cha&icirc;ne
                            d&rsquo;approvisionnement; (ii) risques ou
                            incidences du projet touchant de mani&egrave;re
                            disproportionn&eacute;e les personnes
                            affect&eacute;es par le projet qui, en raison de
                            leur situation particuli&egrave;re, peuvent
                            &ecirc;tre d&eacute;favoris&eacute;es ou
                            vuln&eacute;rables, ou (iii) secteurs
                            pr&eacute;sentant un risque &eacute;lev&eacute;
                            d&rsquo;usage de travail forc&eacute; ou de travail
                            des enfants.
                        </li>
                        <li>
                            Effets n&eacute;gatifs importants: (i) projets
                            qui devraient avoir des effets n&eacute;gatifs sur
                            un nombre important de travailleurs, ou (ii) projets
                            qui, de par leur nature ou en raison de leur
                            empreinte, pourraient ou devraient entra&icirc;ner
                            des effets n&eacute;gatifs importants sur les droits
                            de l&rsquo;homme (ou en &ecirc;tre
                            complices).&nbsp;»
                        </li>
                    </ul>
                    <p>
                        Source: Soci&eacute;t&eacute; de promotion des
                        investissements &agrave; l&rsquo;&eacute;tranger du
                        gouvernement des &Eacute;tats-Unis,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.opic.gov/sites/default/files/files/final%20revised%20ESPS%2001132017(1).pdf"
                            title="D&eacute;claration de politique environnementale et sociale"
                        >
                            D&eacute;claration de politique environnementale et
                            sociale
                        </a>{" "}
                        [en anglais], 2017
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default fr;
