import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>G&eacute;rer les donn&eacute;es des audits</h1>
                <p>
                    Les audits ne servent pas &agrave; grand-chose si l'entreprise ne s'engage pas effectivement &agrave; 
                    en utiliser les donn&eacute;es pour am&eacute;liorer les conditions de travail au fil du temps. Les 
                    donn&eacute;es des audits devraient &ecirc;tre saisies dans un syst&egrave;me de base de donn&eacute;es 
                    permettant une analyse approfondie de chaque audit, ainsi qu'une analyse des donn&eacute;es 
                    regroup&eacute;es sur la dur&eacute;e au sujet de chaque fournisseur et chaque site du travail, chaque 
                    gamme de produits, chaque type de violation, au sujet de la conformit&eacute; dans les diff&eacute;rentes 
                    r&eacute;gions, et d&rsquo;autres sch&eacute;mas.
                </p>

                <p>
                    La tenue d'une base de donn&eacute;es efficace des audits pr&eacute;sente plusieurs difficult&eacute;s.
                </p>
                <Accordion id="data-processing-acc">
                    <Accordion.Section id="data-processing-description">
                        <Accordion.Title>
                            Traitement des donn&eacute;es
                        </Accordion.Title>
                        <Accordion.Panel>
                            <p>
                                Tout d'abord, le syst&egrave;me doit pouvoir assurer le traitement efficace des donn&eacute;es 
                                &eacute;manant de diff&eacute;rents auditeurs individuels, ext&eacute;rieurs et internes, et/ou 
                                des donn&eacute;es des audits venant d'audits d'un groupe sectoriel ou multisectoriel. Si vos 
                                outils d'audit sont sur papier, vos auditeurs ou autres employ&eacute;s doivent apprendre &agrave; 
                                entrer les donn&eacute;es de fa&ccedil;on uniforme dans le syst&egrave;me. (Certaines entreprises 
                                embauchent des sous-traitants pour &eacute;purer les donn&eacute;es des audits.) Si une entreprise 
                                re&ccedil;oit aussi des donn&eacute;es de v&eacute;rificateurs ind&eacute;pendants, il conviendrait 
                                d&rsquo;inclure &eacute;galement ces donn&eacute;es.
                            </p>

                            <p>
                                La formation est particuli&egrave;rement importante si vous autorisez ceux qui font l'objet de 
                                l'audit &agrave; saisir leurs propres informations aux fins d'auto-&eacute;valuation. Certains de 
                                ces candidats poss&egrave;dent des connaissances limit&eacute;es des ordinateurs et des bases de 
                                donn&eacute;es et il est important de leur apprendre &agrave; saisir correctement les informations 
                                pour assurer l'int&eacute;grit&eacute; des donn&eacute;es.
                            </p>

                            <p>
                                Avant de r&eacute;fl&eacute;chir &agrave; la formation des auditeurs et des auto-&eacute;valuateurs, 
                                vous devez vous concentrer sur la conception d'une base de donn&eacute;es. Une base de donn&eacute;es 
                                bien con&ccedil;ue peut assurer l'int&eacute;grit&eacute; des donn&eacute;es en facilitant la saisie 
                                des donn&eacute;es dans le bon format par les utilisateurs. Une base de donn&eacute;es sur mesure 
                                con&ccedil;ue logiquement signifie qu'une entreprise n'obtiendra que les informations qui lui sont 
                                n&eacute;cessaires et qu'elles seront utiles et analysables. Toutes les entreprises, quelle que soit 
                                leur taille, peuvent minimiser les donn&eacute;es erron&eacute;es en partant d'une bonne base de 
                                donn&eacute;es. De plus, les v&eacute;rifications de l'int&eacute;grit&eacute; des donn&eacute;es 
                                peuvent &ecirc;tre automatis&eacute;es &agrave; l'aide de diff&eacute;rents logiciels disponibles.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                {/* </Accordion>
                <Accordion id="systems-integration-acc"> */}
                    <Accordion.Section id="systems-integration-description">
                        <Accordion.Title>
                        Int&eacute;gration dans d&apos;autres syst&egrave;mes d&apos;information

                        </Accordion.Title>
                            <Accordion.Panel>
                                <p>
                                    Le deuxi&egrave;me d&eacute;fi est l'int&eacute;gration. La base de donn&eacute;es doit 
                                    &ecirc;tre int&eacute;gr&eacute;e dans des syst&egrave;mes d'information qui suivent les 
                                    donn&eacute;es d'autres programmes de conformit&eacute; sociale, par exemple des listes 
                                    de fournisseurs, des donn&eacute;es sur la formation et le renforcement des capacit&eacute;s 
                                    de fournisseurs, les r&eacute;parations et des informations tir&eacute;es de contr&ocirc;les 
                                    ind&eacute;pendants. Elle doit ensuite &ecirc;tre int&eacute;gr&eacute;e dans d'autres 
                                    fonctions de l'entreprise, en particulier l'approvisionnement, pour que les donn&eacute;es 
                                    sur la conformit&eacute; sociale soient utilis&eacute;es de fa&ccedil;on efficace par 
                                    d'autres services de l'entreprise. L'int&eacute;gration devrait alors permettre au service 
                                    des approvisionnements de passer des commandes aupr&egrave;s des fournisseurs qui auront eu 
                                    de bons r&eacute;sultats dans les audits sociaux.
                                </p>
                            </Accordion.Panel>
                    </Accordion.Section>
                {/* </Accordion>

                <Accordion id="using-data-acc"> */}
                    <Accordion.Section id="using-data-description">
                        <Accordion.Title>
                            Utiliser les donn&eacute;es
                        </Accordion.Title>
                            <Accordion.Panel>
                                <p>
                                    La troisi&egrave;me difficult&eacute; sera de mettre en place des processus clairs relatifs 
                                    &agrave; l'utilisation des donn&eacute;es. Les auditeurs devraient v&eacute;rifier la base 
                                    de donn&eacute;es en se pr&eacute;parant &agrave; un audit, pour consulter les audits 
                                    ant&eacute;rieurs d'un site du travail particulier ainsi que les types de violations courantes 
                                    dans la r&eacute;gion et/ou le type de produit en question. L'&eacute;quipe de la 
                                    conformit&eacute; sociale devrait poss&eacute;der des processus clairs d'analyse des 
                                    donn&eacute;es fournies par des audits pr&eacute;cis, et de suivi des sch&eacute;mas sur 
                                    l'ensemble des audits.
                                </p>

                                <p>
                                    Si des violations sont rep&eacute;r&eacute;es sur un site du travail, il devrait y avoir des 
                                    processus en place pour faire le suivi des r&eacute;parations r&eacute;alis&eacute;es par le 
                                    fournisseur. L'&eacute;quipe devrait chercher des sch&eacute;mas de violations dans des gammes 
                                    de produits sp&eacute;cifiques, des r&eacute;gions particuli&egrave;res, des violations ayant 
                                    trait &agrave; la propri&eacute;t&eacute;/direction du fournisseur et d&rsquo;autres 
                                    probl&egrave;mes. Si des sch&eacute;mas sont rep&eacute;r&eacute;s, les audits programm&eacute;s 
                                    devraient s'orienter vers les types de sites du travail qui semblent poser les plus grands 
                                    risques. L'&eacute;quipe devrait &eacute;galement avoir des v&eacute;rifications en place pour 
                                    identifier les &laquo; aberrations &raquo; et contr&ocirc;ler l'exactitude des donn&eacute;es.
                                </p>

                                <p>
                                    Il arrive que les donn&eacute;es d'audit r&eacute;v&egrave;lent de graves violations et il arrive 
                                    aussi qu'un fournisseur donn&eacute; continue d'enfreindre le code en d&eacute;pit d'audits et 
                                    d'efforts de r&eacute;paration r&eacute;it&eacute;r&eacute;s. Les entreprises devront poss&eacute;der 
                                    des politiques pour d&eacute;terminer quand poursuivre les r&eacute;parations et quand mettre fin 
                                    &agrave; leurs relations commerciales avec un fournisseur donn&eacute;. Certaines entreprises ont des 
                                    politiques de &laquo; tol&eacute;rance z&eacute;ro &raquo; quant &agrave; certaines violations, 
                                    souvent dans le domaine du travail des enfants ou du travail forc&eacute;, pour lesquelles elles 
                                    cessent ou interrompent imm&eacute;diatement leurs relations commerciales avec un fournisseur. D'autres 
                                    entreprises poursuivent les r&eacute;parations pendant une p&eacute;riode donn&eacute;e ou jusqu'&agrave; 
                                    la r&eacute;alisation d&rsquo;objectifs pr&eacute;cis, mais si le fournisseur ne pr&eacute;sente pas 
                                    d'am&eacute;liorations suffisantes, l'entreprise met fin &agrave; ses relations commerciales. En mettant 
                                    fin &agrave; une relation commerciale avec un fournisseur, l'entreprise devrait toujours garder &agrave; 
                                    l'esprit l'impact de cette r&eacute;siliation sur les travailleurs.
                                </p>                              
                        </Accordion.Panel>
                    </Accordion.Section>
                </Accordion>
                <p>
                    <em>
                        *Remarque : Les r&eacute;f&eacute;rences &agrave; des soci&eacute;t&eacute;s et entit&eacute;s non 
                        gouvernementales sp&eacute;cifiques dans ce guide sont &agrave; des fins d&rsquo;information 
                        uniquement afin de d&eacute;montrer les bonnes pratiques reconnues &agrave; l&rsquo;&eacute;chelle 
                        internationale, &agrave; la date de lancement de l&rsquo;appli. Toute r&eacute;f&eacute;rence &agrave; 
                        ces entit&eacute;s ne saurait &ecirc;tre interpr&eacute;t&eacute; comme constituant une approbation 
                        officielle de ces derni&egrave;res, de leurs produits ou de leurs services par le d&eacute;partement 
                        du Travail des &Eacute;tats-Unis, et leur inclusion dans cette appli ne saurait &ecirc;tre 
                        interpr&eacute;t&eacute;e comme un examen exhaustif des pratiques de ces entit&eacute;s dans tous 
                        les domaines.
                    </em>
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
