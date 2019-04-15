import React from "react";
import Accordion from "../../../../components/Accordion";
import BorderSeparator from "../../../../components/BorderSeparator";

const fr = ({ pdf }) => {
    return (
        <div>
            <h1>
                Pourquoi &eacute;laborer un syst&egrave;me de conformit&eacute;
                sociale&nbsp;?
            </h1>
            <p>
                L&apos;abolition du travail des enfants et du travail
                forc&eacute; et l&apos;&eacute;ducation des enfants constituent
                des responsabilit&eacute;s fondamentales de l&apos;&Eacute;tat.
                Les programmes de conformit&eacute; sociale des entreprises
                permettent de combler des lacunes critiques lorsque les
                gouvernements n&apos;ont pas encore acquis des capacit&eacute;s
                int&eacute;grales et, comme expliqu&eacute; ci-dessous, ces
                programmes remplissent d&apos;autres responsabilit&eacute;s et
                objectifs essentiels. Parall&egrave;lement, ils ne sauraient
                remplacer une action &eacute;nergique des pouvoirs publics pour
                la protection des enfants et des travailleurs, et ne devraient
                pas &ecirc;tre consid&eacute;r&eacute;s comme pouvant se
                substituer de fa&ccedil;on suffisante aux responsabilit&eacute;s
                des gouvernements.
            </p>
            <p>
                Les entreprises ont diverses motivations pour la mise en
                &oelig;uvre de syst&egrave;mes de conformit&eacute; sociale,
                notamment les suivantes&nbsp;:
            </p>
            <h2>Lois et r&eacute;glementations</h2>
            <p>
                Les syst&egrave;mes de conformit&eacute; sociale,
                consid&eacute;r&eacute;s traditionnellement comme une initiative
                purement volontaire, deviennent progressivement des moyens
                importants de remplir des imp&eacute;ratifs juridiques. Des lois
                ont &eacute;t&eacute; adopt&eacute;es aux &Eacute;tats-Unis,
                notamment la loi Dodd-Frank sur la r&eacute;forme de Wall Street
                et la protection du consommateur (Dodd-Frank Wall Street Reform
                and Consumer Protection Act&nbsp;&ndash; 2010) et la loi de
                Californie sur la transparence des cha&icirc;nes
                d&rsquo;approvisionnement (California Transparency in Supply
                Chains Act&nbsp;&ndash; 2010) et promulgu&eacute;es au
                d&eacute;but des ann&eacute;es&nbsp;2010 pour r&eacute;pondre
                aux pr&eacute;occupations concernant les droits de la personne.
                Elles imposent &agrave; certaines entreprises l&rsquo;obligation
                de communiquer des informations relatives &agrave; leurs
                cha&icirc;nes d&apos;approvisionnement.&nbsp;D&rsquo;autres lois
                et r&eacute;glementations ont &eacute;t&eacute; adopt&eacute;es
                et promulgu&eacute;es depuis, tant aux &Eacute;tats-Unis que
                dans d&rsquo;autres pays, pour renforcer les protections contre
                le travail des enfants et le travail forc&eacute; dans les
                cha&icirc;nes d&rsquo;approvisionnement.&nbsp;
            </p>
            <ul id="law-list">
                <li id="no-expand">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.gpo.gov/fdsys/pkg/FR-1999-06-16/pdf/99-15491.pdf"
                    >
                        D&eacute;cret ex&eacute;cutif&nbsp;13126, Interdiction
                        de l&apos;acquisition de produits issus du travail
                        forc&eacute; ou pour dette des enfants
                    </a>{" "}
                    (Executive Order 13126, Prohibition of Acquisition of
                    Products Produced by Forced or Indentured Child Labor), et
                    ses r&eacute;glementations de mise en &oelig;uvre.
                </li>
                <br />
                <Accordion pdf={pdf} id="why-develop-acc">
                    <Accordion.Section id="exec-order">
                        <Accordion.Title>
                            <strong>
                                D&eacute;cret ex&eacute;cutif&nbsp;13627,
                                Renforcement des protections contre la traite
                                des personnes dans les contrats
                                f&eacute;d&eacute;raux et mise en &oelig;uvre
                                des r&eacute;glementations
                                f&eacute;d&eacute;rales en mati&egrave;re
                                d&rsquo;acquisitions (Executive Order 13627,
                                Strengthening Protections against Trafficking in
                                Persons in Federal Contracts, and Implementing
                                Federal Acquisition Regulations)
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La r&eacute;glementation f&eacute;d&eacute;rale
                                en mati&egrave;re d&rsquo;acquisitions
                                concernant la lutte contre la traite des
                                personnes (Federal Acquisition Regulation
                                Combating Trafficking in Persons), en vigueur
                                depuis le 2&nbsp;mars&nbsp;2015, met en
                                &oelig;uvre les garanties de lutte contre la
                                traite figurant dans le{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.federalregister.gov/documents/2015/01/29/2015-01524/federal-acquisition-regulation-ending-trafficking-in-persons"
                                >
                                    D&eacute;cret ex&eacute;cutif&nbsp;13627,
                                    Renforcement des protections contre la
                                    traite des personnes dans les contrats
                                    f&eacute;d&eacute;raux
                                </a>{" "}
                                (Executive Order 13627 Strengthening Protections
                                Against Trafficking in Persons in Federal
                                Contracts) et dans l&rsquo;Article&nbsp;XVII de
                                la Loi d&rsquo;autorisation de d&eacute;fense
                                nationale pour l&rsquo;ann&eacute;e
                                budg&eacute;taire 2013, Mettre fin &agrave; la
                                traite dans la sous-traitance publique (National
                                Defense Authorization Act for Fiscal Year 2013,
                                Ending Trafficking in Government Contracting).
                                Cette r&eacute;glementation renforce
                                l&rsquo;interdiction en place relative &agrave;
                                la traite dans le cadre des contrats publics en
                                interdisant express&eacute;ment aux contractuels
                                de l&rsquo;&Eacute;tat f&eacute;d&eacute;ral et
                                &agrave; leurs employ&eacute;s et aux
                                sous-traitants de l&rsquo;&Eacute;tat
                                f&eacute;d&eacute;ral et &agrave; leurs
                                employ&eacute;s de participer &agrave; certaines
                                activit&eacute;s sp&eacute;cifiques li&eacute;es
                                &agrave; la traite. Ces activit&eacute;s
                                comprennent notamment la destruction ou la
                                confiscation de pi&egrave;ces
                                d&rsquo;identit&eacute;, l&rsquo;usage de
                                pratiques de recrutement trompeuses, le refus de
                                paiement des frais de transport de retour au
                                terme du contrat de travail dans la plupart des
                                situations, la non-fourniture d&rsquo;un contrat
                                de travail &eacute;crit, la fourniture
                                d&rsquo;un h&eacute;bergement en dessous des
                                normes, et la facturation de commissions de
                                recrutement aux employ&eacute;s. Les
                                contractuels ont l&rsquo;obligation de prendre
                                les mesures qui s&rsquo;imposent contre les
                                employ&eacute;s, les agents et les
                                sous-traitants qui enfreignent ces interdictions
                                et d&rsquo;informer leurs employ&eacute;s des
                                activit&eacute;s interdites et des
                                cons&eacute;quences en cas de non-respect de
                                celles-ci. Par ailleurs, pour les contrats de
                                plus de 500&nbsp;000&nbsp;dollars &Eacute;.-U.
                                en dehors des &Eacute;tats-Unis, les
                                contractuels doivent &eacute;laborer un plan de
                                conformit&eacute; associ&eacute; &agrave; un
                                programme de sensibilisation des
                                employ&eacute;s, une proc&eacute;dure de
                                signalement des violations par les
                                employ&eacute;s, un plan
                                d&rsquo;h&eacute;bergement et un plan relatif
                                aux salaires et aux horaires. Ils doivent
                                &eacute;galement fournir une attestation
                                annuelle certifiant la mise en &oelig;uvre de
                                leurs plans, et que ni eux, ni leurs
                                sous-traitants ne se sont livr&eacute;s aux
                                pratiques prohib&eacute;es, ou qu&rsquo;en cas
                                d&rsquo;identification de violations dans leur
                                cha&icirc;ne d&rsquo;approvisionnement, les
                                mesures de r&eacute;paration et de
                                recommandation qui conviennent ont
                                &eacute;t&eacute; prises.
                            </p>
                            <p>
                                L&rsquo;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://responsiblesourcingtool.org/"
                                >
                                    Outil d&rsquo;approvisionnement responsable
                                </a>
                                , lanc&eacute; en&nbsp;2016 par Verit&eacute; et
                                le d&eacute;partement d&apos;&Eacute;tat des
                                &Eacute;tats-Unis, comprend un{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://responsiblesourcingtool.org/download/footer/Tool_09.pdf"
                                >
                                    Mod&egrave;le de plan de conformit&eacute;
                                </a>{" "}
                                con&ccedil;u pour les entreprises qui doivent
                                d&eacute;montrer leur conformit&eacute; aux
                                exigences en mati&egrave;re de lutte contre la
                                traite des personnes de la r&eacute;glementation
                                f&eacute;d&eacute;rale relative aux
                                acquisitions.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    <BorderSeparator />
                    <Accordion.Section id="trade-act">
                        <Accordion.Title>
                            <strong>
                                Loi sur la facilitation et l&rsquo;application
                                des &eacute;changes commerciaux
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.finance.senate.gov/imo/media/doc/BILLS-114hr644enr.pdf"
                                >
                                    Loi sur la facilitation et
                                    l&rsquo;application des &eacute;changes
                                    commerciaux de&nbsp;2015
                                </a>{" "}
                                (Trade Facilitation and Trade Enforcement Act),
                                entr&eacute;e en vigueur en mars&nbsp;2016, a
                                renforc&eacute; une interdiction
                                d&eacute;j&agrave; en place sur
                                l&rsquo;importation des marchandises produites
                                par le travail forc&eacute; en &eacute;liminant
                                une &eacute;chappatoire existant de longue date.
                                Ainsi, tous les biens «&nbsp;extraits, produits
                                ou fabriqu&eacute;s en tout ou partie&nbsp;» par
                                le biais du travail forc&eacute;, du travail
                                pour dette ou de la servitude &eacute;tait
                                interdit &agrave; l&rsquo;importation sur le
                                territoire des &Eacute;tats-Unis en vertu de la{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.gpo.gov/fdsys/granule/USCODE-2010-title19/USCODE-2010-title19-chap4"
                                >
                                    Loi sur les tarifs douaniers de 1930
                                </a>
                                , sauf quand l&rsquo;offre de produits
                                fabriqu&eacute;s aux &Eacute;tats-Unis
                                n&rsquo;&eacute;tait pas suffisante pour
                                r&eacute;pondre &agrave; la demande de ces
                                produits dans le pays&nbsp;&ndash; exception
                                dite «&nbsp;de demande de consommation&nbsp;»
                                qui figure au paragraphe&nbsp;910. Cette
                                exception a &eacute;t&eacute; abrog&eacute;e, ce
                                qui permet d&eacute;sormais au service des
                                douanes et de la protection des
                                fronti&egrave;res (CBP) d&rsquo;interdire
                                l&rsquo;importation de produits issus du travail
                                forc&eacute; sur le sol am&eacute;ricain, quelle
                                que soit la demande dans le pays. Toute personne
                                peut ainsi signaler au CBP des informations
                                indiquant que des marchandises produites par le
                                travail forc&eacute; font ou pourraient faire
                                l&rsquo;objet d&rsquo;une importation aux
                                &Eacute;tats-Unis. Si ces informations indiquent
                                de mani&egrave;re raisonnable mais non
                                concluante que les marchandises en question ont
                                &eacute;t&eacute; produites, en tout ou partie,
                                par le travail forc&eacute;, le CBP
                                d&eacute;livre un report de d&eacute;douanement
                                afin d&rsquo;en interdire l&rsquo;entr&eacute;e
                                sur le territoire des &Eacute;tats-Unis. Le
                                fabricant a alors la possibilit&eacute; de
                                r&eacute;-exporter les biens retenus ou de
                                fournir des informations probantes au CBP
                                indiquant qu&rsquo;ils ne sont pas le fruit du
                                travail forc&eacute;. En cas de
                                d&eacute;termination par le CBP de
                                l&rsquo;existence de preuves concluantes de
                                travail forc&eacute;, un constat formel est
                                publi&eacute; au registre f&eacute;d&eacute;ral
                                et au bulletin douanier et les marchandises sont
                                saisies.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    <BorderSeparator />
                    <Accordion.Section id="uk-slave-act">
                        <Accordion.Title>
                            <strong>
                                Loi du Royaume-Uni sur l&rsquo;esclavage moderne
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.legislation.gov.uk/ukpga/2015/30/pdfs/ukpga_20150030_en.pdf"
                                >
                                    Loi du Royaume-Uni sur l&rsquo;esclavage
                                    moderne
                                </a>{" "}
                                (UK Modern Slavery Act), en vigueur depuis le
                                29&nbsp;octobre&nbsp;2015, comprend des
                                dispositions en mati&egrave;re de transparence
                                dans les cha&icirc;nes d&rsquo;approvisionnement
                                exigeant de l&rsquo;ensemble des entreprises qui
                                ont un chiffre d&rsquo;affaires d&rsquo;au moins
                                36&nbsp;millions &pound; op&eacute;rant au
                                Royaume-Uni qu&rsquo;elles publient les mesures
                                qu&rsquo;elles prennent pour lutter contre
                                l&rsquo;esclavage et la traite des personnes. La
                                loi ne pr&eacute;cise par les types de mesures
                                que les entreprises doivent communiquer ni
                                n&rsquo;indique le niveau de d&eacute;tail qui
                                doit &ecirc;tre fourni. Une simple
                                d&eacute;claration indiquant qu&rsquo;elle
                                n&rsquo;a pris aucune mesure pour lutte contre
                                l&rsquo;esclavage et la traite des personnes
                                permet &agrave; une entreprise
                                d&rsquo;&ecirc;tre conforme. Elle doit
                                &ecirc;tre publi&eacute;e de mani&egrave;re bien
                                visible sur le site Web de l&rsquo;entreprise.
                                Aucune sanction n&rsquo;est pr&eacute;vue en cas
                                de non-conformit&eacute;. La loi pr&eacute;voit
                                &eacute;galement des peines minimales pour les
                                d&eacute;lits d&rsquo;esclavage, cr&eacute;e un
                                syst&egrave;me de d&eacute;fense pour les
                                victimes de l&rsquo;esclavage et de la traite et
                                conf&egrave;re au secr&eacute;taire
                                d&rsquo;&Eacute;tat et aux forces de
                                l&rsquo;ordre de nouveaux pouvoirs en
                                mati&egrave;re de lutte contre
                                l&rsquo;esclavage, entre autres mesures de
                                r&eacute;pression.&nbsp;
                            </p>
                            <p>
                                Voir &eacute;galement{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.modernslaveryregistry.org/"
                                >
                                    <em>Modern Slavery Registry</em>
                                </a>
                                , site Web op&eacute;r&eacute; et
                                g&eacute;r&eacute; par le Business &amp; Human
                                Rights Resource Centre, qui recueille et publie
                                les d&eacute;clarations des entreprises
                                concernant l&rsquo;esclavage moderne en vertu de
                                cette loi. Au comit&eacute; de gouvernance du
                                site si&egrave;gent Freedom Fund,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://humanityunited.org/"
                                >
                                    Humanity United
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://freedomfund.org/"
                                >
                                    Freedom United
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.antislavery.org/"
                                >
                                    Anti-Slavery International
                                </a>
                                , l&rsquo;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ethicaltrade.org/"
                                >
                                    Initiative pour le commerce &eacute;thique
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://corporate-responsibility.org/"
                                >
                                    CORE Coalition
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.unicef.org.uk/"
                                >
                                    UNICEF UK
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.labourexploitation.org/"
                                >
                                    Focus on Labour Exploitation
                                </a>{" "}
                                et{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.oxfam.org.uk/"
                                >
                                    Oxfam GB
                                </a>
                                .
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    <BorderSeparator />
                    <Accordion.Section id="france-dov-law">
                        <Accordion.Title>
                            <strong>
                                Loi fran&ccedil;aise sur le devoir de vigilance
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://business-humanrights.org/sites/default/files/documents/Texte%20PPL_EN-US.docx"
                                >
                                    Loi fran&ccedil;aise sur le devoir de
                                    vigilance des entreprises
                                </a>
                                , amend&eacute;e le 28&nbsp;mars 2017, exige des
                                grandes entreprises employant 5&nbsp;000
                                personnes ou plus domicili&eacute;es en France
                                et des entreprises &eacute;trang&egrave;res
                                employant 10&nbsp;000 personnes ou plus et qui
                                op&egrave;rent dans le pays qu&rsquo;elles
                                &eacute;laborent et mettent en &oelig;uvre un
                                plan de vigilance. Le plan doit identifier les
                                risques et pr&eacute;venir les violations des
                                droits de la personne, comme le travail des
                                enfants, le travail forc&eacute; et la traite,
                                issues des activit&eacute;s des
                                soci&eacute;t&eacute;s m&egrave;res et de leurs
                                filiales et de tous leurs sous-traitants. Le
                                plan doit inclure 1) des proc&eacute;dures
                                d&rsquo;identification des risques&nbsp;; 2) des
                                m&eacute;thodes de surveillance
                                r&eacute;guli&egrave;re des filiales et des
                                sous-traitants&nbsp;; 3) des approches
                                appropri&eacute;es d&rsquo;att&eacute;nuation
                                des risques et de pr&eacute;vention des
                                pr&eacute;judices graves&nbsp;; 4) une
                                m&eacute;thode de signalement des risques&nbsp;;
                                et 5) une m&eacute;thode de surveillance de
                                l&rsquo;efficacit&eacute; des mesures
                                pr&eacute;ventives. Les victimes et les autres
                                parties affect&eacute;es peuvent informer les
                                instances judiciaires de l&rsquo;absence de plan
                                ou de mise en &oelig;uvre de plan dans une
                                entreprise, et celle-ci peut se voir
                                somm&eacute;e de s&rsquo;ex&eacute;cuter et de
                                compenser les victimes de sa
                                non-conformit&eacute; pour manquement &agrave;
                                l&rsquo;obligation de diligence.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    <BorderSeparator />
                    <Accordion.Section id="wall-street-prot-act">
                        <Accordion.Title>
                            <strong>
                                Loi Dodd-Frank sur la r&eacute;forme de Wall
                                Street et la protection du consommateur
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La loi{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.sec.gov/about/laws/wallstreetreform-cpa.pdf"
                                >
                                    Dodd-Frank sur la r&eacute;forme de Wall
                                    Street et la protection du consommateur
                                </a>{" "}
                                (Dodd-Frank Wall Street Reform and Consumer
                                Protection Act, ou loi Dodd-Frank),
                                adopt&eacute;e en 2010, a enjoint &agrave; la
                                Securities and Exchange Commission (SEC) des
                                &Eacute;tats-Unis de promulguer des
                                r&eacute;glementations prescrivant aux
                                entreprises de fabrication de produits de rendre
                                compte de la pr&eacute;sence de «&nbsp;minerais
                                de conflit&nbsp;» dans leurs cha&icirc;nes
                                d&apos;approvisionnement, au titre de la
                                section&nbsp;1502. Le Congr&egrave;s des
                                &Eacute;tats-Unis a promulgu&eacute; la
                                section&nbsp;1502 de cette loi en raison des
                                pr&eacute;occupations selon lesquelles
                                l&apos;exploitation et le commerce des minerais
                                provenant d&apos;une zone de conflit par des
                                groupes arm&eacute;s servent &agrave; financer
                                le conflit dans la r&eacute;gion de la
                                R&eacute;publique d&eacute;mocratique du Congo
                                (RDC) et contribuent &agrave; une situation
                                d&apos;urgence et de crise humanitaire. La loi
                                exige des entreprises dont les
                                d&eacute;clarations sont d&eacute;pos&eacute;es
                                aupr&egrave;s de la SEC de faire savoir, tous
                                les ans, si des produits qu&rsquo;elles
                                fabriquent contiennent de l&apos;&eacute;tain,
                                du tantale, du tungst&egrave;ne ou de l&apos;or
                                (tous consid&eacute;r&eacute;s comme « minerais
                                provenant d&apos;une zone de conflit » au titre
                                de la disposition) venant de la RDC ou d&apos;un
                                pays limitrophe, et, si c&rsquo;est le cas, si
                                ces minerais financent des groupes arm&eacute;s
                                de la r&eacute;gion de la RDC ou leur
                                profitent.&nbsp;
                            </p>
                            <p>
                                Les entreprises concern&eacute;es doivent
                                d&eacute;terminer si elles utilisent ces
                                minerais et s&rsquo;ils sont n&eacute;cessaires
                                au fonctionnement ou &agrave; la production de
                                l&rsquo;un des produits qu&rsquo;ils ont
                                fabriqu&eacute;s ou fait fabriquer. Si
                                c&rsquo;est le cas, elles doivent mener une
                                enqu&ecirc;te de bonne foi dans le pays
                                d&rsquo;origine des minerais et communiquer
                                certaines informations. Elles sont
                                &eacute;galement tenues de publier sur leurs
                                sites Internet les informations qu&rsquo;elles
                                ont communiqu&eacute;es &agrave; la SEC.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    <BorderSeparator />
                    <Accordion.Section id="cali-supply-chain-act">
                        <Accordion.Title>
                            <strong>
                                Loi de la Californie sur la transparence dans
                                les cha&icirc;nes d&rsquo;approvisionnement
                            </strong>
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                La{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.leginfo.ca.gov/pub/09-10/bill/sen/sb_0651-0700/sb_657_bill_20100930_chaptered.pdf"
                                >
                                    loi de la Californie sur la transparence
                                    dans les cha&icirc;nes
                                    d&rsquo;approvisionnement
                                </a>{" "}
                                (California Transparency in Supply Chains Act),
                                sign&eacute;e en octobre 2010 et entr&eacute;e
                                en vigueur en janvier 2012, exige que certaines
                                entreprises rendent compte des mesures
                                sp&eacute;cifiques qu&apos;elles auront prises
                                pour &eacute;liminer l&apos;esclavage et la
                                traite des personnes dans leurs cha&icirc;nes
                                d&apos;approvisionnement. La loi vise les
                                grandes et moyennes entreprises de fabrication
                                et de d&eacute;tail dont les recettes mondiales
                                sont de 100&nbsp;millions de dollars minimum par
                                an, son objectif principal &eacute;tant de
                                s&rsquo;assurer que les entreprises en question
                                fournissent aux consommateurs des informations
                                leur permettant de savoir celles qui
                                proc&egrave;dent &agrave; une gestion
                                responsable de leurs cha&icirc;nes
                                d&rsquo;approvisionnement. Selon les
                                estimations, cette obligation de
                                d&eacute;claration touchera quelque
                                3&nbsp;200&nbsp;entreprises dont le si&egrave;ge
                                social est en Californie ou qui y
                                op&egrave;rent.
                            </p>
                            <p>
                                Plus pr&eacute;cis&eacute;ment, la loi exige
                                qu&apos;une entreprise communique sur son site
                                Web ses initiatives visant &agrave;
                                &eacute;liminer l&apos;esclavage et la traite
                                des personnes de sa cha&icirc;ne
                                d&apos;approvisionnement directe concernant les
                                articles propos&eacute;s &agrave; la vente. Une
                                entreprise doit communiquer dans quelle
                                mesure&nbsp;: 1) elle effectue le contr&ocirc;le
                                des cha&icirc;nes d&apos;approvisionnement de
                                produits pour &eacute;valuer et &eacute;liminer
                                les risques de traite des personnes et
                                d&apos;esclavage ; 2) elle r&eacute;alise des
                                audits de ses fournisseurs ; 3) elle exige de
                                ses fournisseurs directs qu&rsquo;ils certifient
                                la conformit&eacute; des mati&egrave;res
                                englob&eacute;es dans le produit par rapport aux
                                lois relatives &agrave; l&apos;esclavage et
                                &agrave; la traite des personnes des pays
                                o&ugrave; ils exercent des activit&eacute;s ; 4)
                                elle poss&egrave;de des normes et des
                                proc&eacute;dures de responsabilisation
                                applicables aux employ&eacute;s ou aux
                                contractuels qui ne respectent pas les normes de
                                l&apos;entreprise concernant l&apos;esclavage et
                                la traite des personnes ; et 5) elle fournit aux
                                employ&eacute;s et aux cadres de direction une
                                formation relative &agrave; l&apos;esclavage et
                                &agrave; la traite des personnes.&nbsp;
                            </p>
                            <p>
                                Voir &eacute;galement{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://ktcdevlab.wpengine.com/wp-content/uploads/2015/10/KnowTheChain_InsightsBrief_093015.pdf"
                                >
                                    Five Years of the California Transparency in
                                    Supply Chains Act,
                                </a>{" "}
                                dossier [en anglais] r&eacute;dig&eacute; par{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://knowthechain.org/"
                                >
                                    KnowTheChain
                                </a>
                                , initiative men&eacute;e par{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://humanityunited.org/"
                                >
                                    Humanity United
                                </a>{" "}
                                en partenariat avec le{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.business-humanrights.org/"
                                >
                                    Business &amp; Human Rights Resource Centre
                                </a>
                                ,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.sustainalytics.com/"
                                >
                                    Sustainalytics
                                </a>{" "}
                                et{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.verite.org/"
                                >
                                    Verit&eacute;
                                </a>
                                .
                            </p>
                            <p>
                                Voir &eacute;galement{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.verite.org/the-california-transparency-in-supply-chains-act-a-resource-guide/"
                                >
                                    <em>
                                        The California Transparency in Supply
                                        Chains Act: A Resource Guide
                                    </em>
                                </a>
                                <em>, </em>pr&eacute;par&eacute; [en anglais]
                                par le d&eacute;partement de la Justice de
                                Californie, qui contient des recommandations
                                concernant la conformit&eacute; et des
                                mod&egrave;les de pratiques de communication.
                            </p>
                            <p>
                                Enfin, voir{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.verite.org/wp-content/uploads/2016/11/VTE_WhitePaper_California_Bill657FINAL5.pdf"
                                >
                                    <em>
                                        Compliance is Not Enough: Best Practices
                                        in Responding to The California
                                        Transparency in Supply Chains Act
                                    </em>
                                </a>
                                , livre blanc [en anglais] sur la loi de la
                                Californie sur la transparence dans les
                                cha&icirc;nes d&rsquo;approvisionnement
                                pr&eacute;par&eacute; par l&apos;organisation
                                non gouvernementale{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.verite.org/?lang=en"
                                >
                                    Verit&eacute;
                                </a>
                                .
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                </Accordion>
                <BorderSeparator />
            </ul>
            <h2>
                &Eacute;volution des normes volontaires et faisant
                autorit&eacute;
            </h2>
            <p>
                Ces derni&egrave;res ann&eacute;es, le grand public
                s&apos;attend de plus en plus &agrave; ce que les entreprises
                ma&icirc;trisent, dans leurs cha&icirc;nes
                d&apos;approvisionnement, les normes relatives au travail et aux
                droits de la personne. Des d&eacute;cennies durant, des normes
                volontaires, telles que les{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.oecd.org/daf/inv/mne/"
                >
                    Principes directeurs pour les entreprises multinationales de
                    l&apos;Organisation de Coop&eacute;ration et de
                    D&eacute;veloppement &Eacute;conomiques (OECD)
                </a>{" "}
                ont constitu&eacute; les normes de base pour les entreprises
                quant aux domaines du travail et de l&apos;emploi. Une
                r&eacute;vision en 2011 des principes directeurs de l&apos;OCDE,
                parall&egrave;lement &agrave; l&apos;adoption par le Conseil des
                droits de l&apos;homme des Nations Unies, en juin 2011, des{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://business-humanrights.org/en/un-guiding-principles"
                >
                    Principes directeurs des Nations Unies relatifs aux
                    entreprises et aux droits de l&apos;homme
                </a>
                , ont jou&eacute; un r&ocirc;le important dans cette
                &eacute;volution des attentes du public. En vertu des Principes
                directeurs des Nations Unies relatifs aux entreprises et aux
                droits de l&apos;homme, les &Eacute;tats ont, sur leur
                territoire et/ou dans leur juridiction, un devoir de protection
                contre les violations des droits de l&rsquo;homme
                perp&eacute;tr&eacute;es par des parties tierces, y compris les
                entreprises. Ils ont &eacute;galement le devoir de prendre les
                mesures qui s&rsquo;imposent pour s&rsquo;assurer qu&rsquo;en
                cas de telles violations, les victimes ont acc&egrave;s &agrave;
                de v&eacute;ritables r&eacute;parations. Pour leur part, les
                entreprises ont la responsabilit&eacute; de respecter les droits
                de la personne, notamment en &eacute;vitant de provoquer des
                effets n&eacute;gatifs sur les droits de la personne au travers
                de leurs propres activit&eacute;s, ou d&rsquo;y contribuer, et
                en cherchant &agrave; pr&eacute;venir ou &agrave;
                att&eacute;nuer de tels effets directement li&eacute;s &agrave;
                leurs op&eacute;rations, &agrave; leurs produits ou &agrave;
                leurs services par leurs relations commerciales. Les principes
                directeurs des Nations Unies s&rsquo;appliquent &agrave; tous
                les &Eacute;tats et &agrave; toutes les entreprises, notamment
                internationales, quels que soient leur secteur, leur taille,
                leur emplacement, leur propri&eacute;taire et leur structure.
            </p>
            <h2>R&eacute;putation de l&apos;entreprise</h2>
            <p>
                De plus en plus de consommateurs sont sensibles aux questions
                d&apos;exploitation par le travail, particuli&egrave;rement dans
                les secteurs de la confection, de la chaussure et de
                l&apos;&eacute;lectronique. De plus, avec l&apos;explosion des
                m&eacute;dias sociaux, les reportages exposant des cas de
                travail des enfants, de travail forc&eacute; ou d&apos;autres
                conditions de travail d&eacute;gradantes dans une cha&icirc;ne
                d&rsquo;alimentation pourront plus facilement toucher les
                consommateurs et nuire &agrave; la r&eacute;putation d&apos;une
                marque et avoir un effet n&eacute;gatif sur ses ventes ou sa
                cote en Bourse.
            </p>
            <h2>Marketing et comp&eacute;titivit&eacute;</h2>
            <p>
                Dans certaines industries, la pr&eacute;sence d&apos;un
                syst&egrave;me de conformit&eacute; sociale est devenue la
                norme. Les entreprises peuvent se d&eacute;marquer en
                poss&eacute;dant un syst&egrave;me particuli&egrave;rement
                solide en place, ou en excellant dans certains domaines de la
                conformit&eacute; sociale ou environnementale, pour faire le
                marketing de ces points forts aupr&egrave;s de leurs clients
                acheteurs, de groupes d&eacute;mographiques idoines ou
                d&apos;autres parties prenantes. De plus, les donn&eacute;es
                concernant les r&eacute;sultats sociaux et environnementaux des
                entreprises sont de plus en plus mises &agrave; la disposition
                du public par le biais de sources de donn&eacute;es comme la{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.bloomberg.com/sustainability/"
                >
                    Cha&icirc;ne Durabilit&eacute; sur Bloomberg.com
                </a>
                .
            </p>
            <h2>
                Pression de la soci&eacute;t&eacute; civile et des actionnaires
            </h2>
            <p>
                Les organisations non gouvernementales (ONG), les syndicats, les
                organes d&apos;investissement durable et responsable et
                d&apos;autres groupes de la soci&eacute;t&eacute; civile
                m&egrave;nent des enqu&ecirc;tes, font conna&icirc;tre les
                probl&egrave;mes et intensifient la prise de conscience relative
                &agrave; la conduite de l&apos;entreprise. Certains cherchent
                &agrave; &eacute;duquer les consommateurs sur les questions
                relatives aux droits du travail ou &agrave; lancer des
                campagnes, notamment de boycott, pour mettre fin aux violations
                flagrantes. D&rsquo;autres s&rsquo;adressent directement aux
                entreprises pour discuter de leurs pr&eacute;occupations
                relatives aux droits du travail et tenter de les r&eacute;gler,
                sans communiquer leurs conclusions au public, &agrave; moins que
                les entreprises concern&eacute;es d&eacute;cident de ne pas
                prendre de mesures s&eacute;rieuses.
            </p>
            <h2>Conditionnalit&eacute; des pr&ecirc;ts</h2>
            <p>
                Les entreprises qui re&ccedil;oivent des pr&ecirc;ts de l&apos;
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.opic.gov/sites/default/files/files/final%20revised%20ESPS%2001132017(1).pdf"
                >
                    Overseas Private Investment Corporation (OPIC)
                </a>{" "}
                du gouvernement des &Eacute;tats-Unis ou de la{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ifc.org/wps/wcm/connect/Topics_Ext_Content/IFC_External_Corporate_Site/Sustainability-At-IFC/Policies-Standards/Performance-Standards"
                >
                    Soci&eacute;t&eacute; financi&egrave;re internationale (SFI)
                </a>
                , qui fait partie du groupe de la Banque mondiale, doivent
                souscrire &agrave; des normes du travail et &agrave; des normes
                environnementales pr&eacute;cises dans leurs op&eacute;rations
                et leurs cha&icirc;nes d&apos;approvisionnement, y compris les
                normes relatives au travail des enfants et au travail
                forc&eacute;. Ces normes exigent une diligence raisonnable pour
                identifier les probl&egrave;mes et des efforts cibl&eacute;s
                pour y rem&eacute;dier, ce qui est peut &ecirc;tre accompli par
                le biais d&apos;un syst&egrave;me robuste de conformit&eacute;
                sociale.
            </p>
            <h2>
                Gestion am&eacute;lior&eacute;e de la cha&icirc;ne
                d&apos;approvisionnement
            </h2>
            <p>
                De bons syst&egrave;mes de conformit&eacute; sociale reposent
                sur des syst&egrave;mes robustes de gestion d&apos;ensemble. Ils
                exigent une planification, une documentation, des
                contr&ocirc;les internes, une formation et une communication
                avec les employ&eacute;s de l&apos;entreprise, une analyse
                pouss&eacute;e des donn&eacute;es et d&apos;autres politiques et
                proc&eacute;dures clairement d&eacute;finies. La mise en
                &oelig;uvre d&apos;un syst&egrave;me de conformit&eacute;
                sociale exige qu&apos;une entreprise prenne le contr&ocirc;le de
                cha&icirc;nes d&apos;approvisionnement globales complexes, ce
                qui peut apporter d&apos;autres avantages et efficiences
                &agrave; ses op&eacute;rations.
            </p>
            <h2>Recrutement et fid&eacute;lisation du personnel</h2>
            <p>
                Selon un nombre croissant d&apos;&eacute;tudes, les
                employ&eacute;s, surtout les plus jeunes,
                pr&eacute;f&egrave;rent de plus en plus travailler pour des
                entreprises soucieuses de leur responsabilit&eacute; sociale et
                environnementale, ce dont ils tiennent compte dans leur choix
                futur de postes.
            </p>
            <h2>Faire le bien</h2>
            <p>
                Pour certaines entreprises, disposer d&rsquo;un syst&egrave;me
                de conformit&eacute; sociale est intrins&egrave;quement
                «&nbsp;la bonne chose &agrave; faire&nbsp;». Ces entreprises ont
                plus de chances de consacrer des ressources et un soutien
                importants &agrave; leurs syst&egrave;mes de conformit&eacute;
                sociale.
            </p>
            <h2>
                <strong>Autres ressources</strong>
            </h2>
            <ol>
                <li>
                    OIT.{" "}
                    <em>
                        Progress and potential: How Better Work is Improving
                        Garment Workers&rsquo; Lives and Boosting Factory
                        Competitiveness: A Summary of an Independent Assessment
                        of the Better Work Programme&nbsp;;
                    </em>{" "}
                    2016 ; disponible [en anglais] sur{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://betterwork.org/dev/wp-content/uploads/2016/09/BW-Progress-and-Potential_Web-final.pdf"
                    >
                        https://betterwork.org/dev/wp-content/uploads/2016/09/BW-Progress-and-Potential_Web-final.pdf
                    </a>
                    .
                </li>
            </ol>
        </div>
    );
};

export default fr;
