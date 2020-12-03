import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import Accordion from "../../../../../../components/Accordion";  
import StaticData from "../../../../../../components/StaticData";
import usFlag from "../../../../../images/us_flag.png";
import verite from "../../../../../images/verite.png";
import { UsFlag, Verite, VeriteFlagWrapper } from "./shared";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Standards on Child Labor and Forced Labor</h1>
                <p>
                    Every company&rsquo;s code and audit tools should include
                    the following standards set forth in ILO Conventions:
                </p>
                <h2>Child Labor</h2>
                <ul>
                    <li>
                        The minimum age for work should be 15 years old, or 14
                        if countries have ratified Convention 138 and submitted
                        a justification for a lower minimum age to the ILO upon
                        ratification.
                    </li>
                    <li>
                        It is permissible for children and young persons below
                        the minimum age for work to perform work{" "}
                        <em>in schools </em>for general, vocational or technical
                        education.
                    </li>
                    <li>
                        It is also permissible for children aged 14 and above to
                        perform work outside of school that is part of a
                        vocational or occupational training program with certain
                        safeguards.
                    </li>
                    <li>
                        Children ages 13 to 15 (12 to 14 in countries with a
                        minimum age of 14) are permitted to perform &ldquo;light
                        work&rdquo; that is not harmful to their health or
                        development and does not interfere with school so long
                        as the country sets forth the specified activities
                        children can do, the number of hours, and the conditions
                        of activities.
                    </li>
                </ul>
                <p>
                    The following consist of the Worst Forms of Child Labor and
                    should be prohibited to all children under age 18:
                </p>
                <ol type="a">
                    <li>
                        All forms of slavery or practices similar to slavery,
                        such as the sale and trafficking of children, debt
                        bondage and serfdom and forced or compulsory labor,
                        including forced or compulsory recruitment of children
                        for use in armed conflict;
                    </li>
                    <li>
                        the use, procuring or offering of a child for
                        prostitution, for the production of pornography or for
                        pornographic performances;
                    </li>
                    <li>
                        the use, procuring or offering of a child for illicit
                        activities, in particular for the production and
                        trafficking of drugs as defined in the relevant
                        international treaties; or
                    </li>
                    <li>
                        work which, by its nature or the circumstances in which
                        it is carried out, is likely to harm the health, safety
                        or morals of children.
                    </li>
                </ol>
                <p>
                    Source: Article 3 of{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                        title="ILO Convention 182"
                    >
                        ILO Convention 182
                    </a>
                    .
                </p>
                <h2>Hazardous Work for Children</h2>
                <p>
                    The hazardous work referred to in ILO Convention 182 Article
                    3(d) &ldquo;shall be determined by national laws or
                    regulations or by the competent authority, after
                    consultation with the organizations of employers and workers
                    concerned, taking into consideration relevant international
                    standards&hellip;&rdquo; [ILO Convention 182, Article 4]. As
                    this suggests, forms of work identified as
                    &ldquo;hazardous&rdquo; for children [Article 3(d)] may vary
                    from country to country.&nbsp;Countries develop their own
                    lists of hazardous work prohibited to all children under age
                    18. ILO Recommendation No. 190, which accompanies ILO
                    Convention 182, gives additional guidance on identifying
                    &ldquo;hazardous work.&rdquo; ILO Recommendation No. 190
                    states in Section II, Paragraph 3 that &ldquo;[i]n
                    determining the types of work referred to under Article 3(d)
                    of the Convention [ILO Convention 182], and in identifying
                    where they exist, consideration should be given, inter alia
                    to:
                </p>
                <ol type="a">
                    <li>
                        work which exposes children to physical, psychological
                        or sexual abuse;
                    </li>
                    <li>
                        work underground, under water, at dangerous heights or
                        in confined spaces;
                    </li>
                    <li>
                        work with dangerous machinery, equipment and tools, or
                        which involves the manual handling or transport of heavy
                        loads;
                    </li>
                    <li>
                        work in an unhealthy environment which may, for example,
                        expose children to hazardous substances, agents or
                        processes, or to temperatures, noise levels, or
                        vibrations damaging to their health;
                    </li>
                    <li>
                        work under particularly difficult conditions such as
                        work for long hours or during the night or work where
                        the child is unreasonably confined to the premises of
                        the employer.&rdquo;
                    </li>
                </ol>
                <h2>Forced Labor / Trafficking in Persons</h2>
                <p>
                    All codes of conduct should include provisions prohibiting
                    forced labor and trafficking in persons. Forced labor and
                    trafficking are closely related and in some instances
                    overlapping phenomena, and these issues are often combined
                    into one category in a code of conduct.
                </p>
                <p>
                    In{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ilo.org/global/topics/forced-labour/publications/WCMS_099625/lang--en/index.htm"
                        title="Combating Forced Labor: A Handbook for Employers and Business, Booklet 3"
                    >
                        <em>
                            Combating Forced Labor: A Handbook for Employers and
                            Business, Booklet 3
                        </em>
                    </a>
                    <em>, </em>the ILO provides guidance on forced labor
                    standards that companies should consider including in their
                    codes. Other useful resources on policies and standards
                    include the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://business-humanrights.org/en/pdf-athens-ethical-principles"
                        title="Athens Ethical Principles"
                    >
                        Athens Ethical Principles,
                    </a>{" "}
                    a set of seven anti-trafficking principles to which
                    companies can voluntarily commit, and its accompanying{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://fpbb.pl/user_upload/static/file/Luxor_Implementation_Guidelines_Ethical_Principles.pdf"
                        title="Luxor Implementation Guidelines"
                    >
                        Luxor Implementation Guidelines
                    </a>
                    , which can assist companies to incorporate anti-trafficking
                    provisions into their codes; the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/"
                        title="Interfaith Center on Corporate Responsibility&rsquo;s (ICCR)"
                    >
                        Interfaith Center on Corporate Responsibility&rsquo;s
                        (ICCR)
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/sites/default/files/resources_attachments/2013ICCR_HTPrinciplesFINAL112013.pdf"
                        title="Statement of Principles &amp; Recommended Practices for Confronting Human Trafficking &amp; Modern Slavery"
                    >
                        Statement of Principles &amp; Recommended Practices for
                        Confronting Human Trafficking &amp; Modern Slavery
                    </a>
                    ; and the American Bar Association&rsquo;s (ABA){" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.americanbar.org/content/dam/aba/administrative/business_law/aba_model_policies.authcheckdam.pdf"
                        title="Model Business and Supplier Policies on Labor Trafficking and Child Labor"
                    >
                        Model Business and Supplier Policies on Labor
                        Trafficking and Child Labor
                    </a>
                    .
                </p>
                <p>
                    In recent years, as companies have learned more about the
                    nature of forced labor and the forms it takes in supply
                    chains, they have begun integrating new provisions into
                    codes of conduct. Examples include prohibitions on worker
                    payment of recruitment fees, and requirements for suppliers
                    to do &ldquo;direct hiring&rdquo; or &ldquo;direct
                    employment&rdquo; of workers. A 2016 Hewlett Packard
                    Enterprise* policy document explains the risk-based reasons
                    why the company chose to move to a &ldquo;direct
                    employment&rdquo; policy.
                </p>
                
                <h2>Resources</h2>
                <p>
                    A key resource for developing specific code of conduct
                    provisions to prevent forced labor in global supply chains
                    is the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/"
                        title="Responsible Sourcing Tool"
                    >
                        Responsible Sourcing Tool
                    </a>{" "}
                    (RST). Launched in 2016 by{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.verite.org/"
                        title="Verit&eacute;"
                    >
                        Verit&eacute;
                    </a>*{" "}
                    and the U.S. Department of State, the RST provides a set of
                    compliance-oriented resources and risk-management tools for
                    companies, federal contractors, procurement and contracting
                    professionals, advocates, investors, consumers, and other
                    stakeholders that wish to identify, prevent, and address
                    forced labor in supply chains. Tool 1,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/codeofconduct"
                        title="Sample Code of Conduct Provisions"
                    >
                        Sample Code of Conduct
                    </a>
                    , contains forced labor-related provisions that can be
                    incorporated into a company or industry code of conduct. The
                    RST also contains additional tools related to responsible
                    labor recruitment, including Tool 3,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/laborrecruitments"
                        title="Criteria for Screening and Evaluating Labor Recruitment Candidates"
                    >
                        Evaluating Labor Recruitment
                    </a>
                    , which assists companies in conducting due diligence in the
                    screening and selection of labor recruiters to minimize the
                    risk of human trafficking as a result of fraudulent or
                    misleading recruitment practices.
                </p>
                <ExampleInAction id="rst1">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action:{" "}
                            <span>Responsible Sourcing Tool 1</span>
                        </strong>
                    </h3>
                    <VeriteFlagWrapper>
                        <UsFlag src={usFlag} alt="US Flag" />
                        <Verite src={verite} alt="Verite sign" />
                    </VeriteFlagWrapper>
                    <p style={{ color: "black" }}>
                        <strong>
                            PROTECTIONS AGAINST TRAFFICKING IN PERSONS{" "}
                        </strong>
                    </p>
                    <p style={{ color: "black" }}>
                        <strong>Sample Code of Conduct Provisions </strong>
                    </p>
                    
                    <p>
                        <strong>Source: Responsible Sourcing </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/codeofconduct"
                            title="Tool 1, Sample Code of Conduct"
                        >
                            <strong>
                                Tool 1, Sample Code of Conduct
                            </strong>
                        </a>
                        <strong>.</strong>
                    </p>
                    <p>
                        <strong>See also Responsible Sourcing Tool 1A, </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/recruitmentandemployment"
                            title="Sample Benchmarks of Good Practice in Recruitment and Employment"
                        >
                            <strong>
                                Sample Benchmarks of Good Practice in
                                Recruitment and Employment
                            </strong>
                        </a>
                        .
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
                        was created through a collaboration between the U.S.
                        Department of State,{" "}
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
                        </a>
                        , and the{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.aspeninstitute.org/"
                            title="Aspen Institute"
                        >
                            Aspen Institute
                        </a>
                        . The content of RST was provided by Verit&eacute;, a
                        labor rights organization with expertise in supply chain
                        compliance, with funds from the U.S. Department of
                        State&rsquo;s Office to Monitor and Combat Trafficking
                        in Persons under Cooperative Agreement
                        S-SJTIP-13-CA-1029
                        <strong>.</strong> The development of RST was informed
                        by experts from several U.S. government agencies,
                        including the U.S. Departments of State and Labor, and
                        other primary stakeholders including trafficking
                        survivors, corporate and NGO leaders, and acquisitions
                        personnel and federal contracting officers.
                    </p>
                </ExampleInAction>
                <br />
                <ExampleInAction id="eicc">
                                <h4>
                                    <ExampleInAction.Icon alt="Lightbulb"/>
                                    <strong>
                                        Example in Action: Primark’s* Code of Conduct of 2019
                                    </strong>
                                </h4>
                                        <p>
                                            Sample Code of Conduct provisions on forced labor and child labor, taken from the&nbsp;
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://madeinafreeworld.com/"
                                                title="https://www.primark.com/en/our-ethics/code-of-conduct"
                                            >
                                            Primark Code of Conduct
                                            </a>
                                            .
                                        </p>
                                        <p>
                                           <strong>Employment is freely chosen</strong>
                                           <ol>
                                           <li>
                                            There must be no forced or compulsory labor in any form, including bonded, indentured, trafficked, or prison labor and overtime must be voluntary.
                                           </li>
                                           <li>
                                            Any fees associated with the employment of Workers must be paid by the Employer.
                                           </li>
                                           <li>
                                            Workers must not be required to lodge any monetary deposits or their identity papers with their Employer.
                                           </li>
                                           <li>
                                            Workers must be free to leave their Employer after reasonable notice.
                                           </li>
                                           </ol>
                                        </p>
                                        <p>
                                          <strong>Child Labor must not be used</strong>
                                         <ol>
                                         <li>
                                          There must be no recruitment or employment of child labor.
                                         </li>
                                         <li>
                                          In any given country the minimum working age, as well as rules regarding the employment of a Young Worker will be defined by the conventions of the ILO or national/regional law, whichever affords greater protection to the individual.  For clarity, Young Worker in this context refers to an individual above the legal working age but before their 18th birthday.

                                         </li>
                                         <li>
                                          Companies must have policies and programs which prevent the recruitment and employment of child labor.
                                         </li>
                                         </ol>
                                        </p>
                  </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
