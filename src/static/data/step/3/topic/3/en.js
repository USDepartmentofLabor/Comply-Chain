import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
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
                <h3>Hazardous Work for Children</h3>
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
                <OwnWords>
                    <h3>
                        <OwnWords.Icon /> <strong>In Their Own Words</strong>
                        {": "}
                    </h3>
                    <p>
                        <strong>Transitioning to Direct Employment</strong>
                    </p>
                    <p>
                        &ldquo;Based on independent research and audit results,
                        foreign migrant workers who are employed through
                        outsourced employment relationships are often found to
                        be more vulnerable to exploitation than those employed
                        directly by suppliers. While many suppliers undertake
                        extensive monitoring of the recruitment agents employing
                        and managing their workers, many violations remain
                        difficult to detect and address. Until there are
                        significant structural reforms to the recruitment agent
                        systems in both sending and receiving countries we
                        believe that direct employment by suppliers is necessary
                        to offer greater protections to foreign migrant workers.
                    </p>
                    <p>
                        This means that with respect to HP suppliers, all
                        foreign migrant workers must be employed and paid
                        directly by the supplier, not by agents, sub-agents, or
                        third parties. Recognizing that many suppliers rely on
                        recruitment agents, at least in part, to handle on-site
                        management of foreign migrant workers, there will be a
                        need for a transition period to move all new and
                        existing foreign migrant workers to direct
                        employment.&rdquo;
                    </p>
                    <p>
                        Hewlett Packard Enterprise*,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www8.hp.com/h20195/v2/GetPDF.aspx/c05116077.pdf"
                            title="Hewlett Packard Company Supply Chain Foreign Migrant Worker Standard Guidance Document"
                        >
                            <em>
                                Hewlett Packard Company Supply Chain Foreign
                                Migrant Worker Standard Guidance Document,
                            </em>
                        </a>{" "}
                        April 27, 2016
                    </p>
                </OwnWords>
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
                    </a>{" "}
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
                        Sample Code of Conduct Provisions
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
                        Criteria for Screening and Evaluating Labor Recruitment
                        Candidates
                    </a>
                    , which assists companies in conducting due diligence in the
                    screening and selection of labor recruiters to minimize the
                    risk of human trafficking as a result of fraudulent or
                    misleading recruitment practices.
                </p>
                <ExampleInAction id="rst1">
                    <h3>
                        <ExampleInAction.Icon />
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
                        A supply chain Code of Conduct establishes basic
                        performance expectations for subcontractors, suppliers
                        and agents. It is important that a company&rsquo;s
                        sourcing policy or Code of Conduct explicitly prohibits
                        human trafficking and sets out protections for workers.
                        The sample provisions below can be used by any company,
                        including federal contractors and their subcontractors,
                        as they consider how best to create, strengthen or
                        revise their own supply chain policies.
                    </p>
                    <p>
                        The sample Code provision addresses factors that are
                        &ldquo;enablers&rdquo; or contributors to situations or
                        risks of human trafficking but is not intended to ensure
                        compliance with specific legal requirements, such as
                        Federal Acquisition Regulation (FAR). Specific
                        compliance requirements should be detailed in the terms
                        and conditions of contracts with subcontractors,
                        suppliers and agents.
                    </p>
                    <p>
                        <strong>HUMAN TRAFFICKING</strong>: The Company strictly
                        prohibits human trafficking in all of our operations and
                        in those of all subcontractors, suppliers and agents in
                        our global supply chain. Workers shall not be subject to
                        any form of forced, compulsory, bonded, or indentured
                        labor. All work must be voluntary and workers shall have
                        the freedom to terminate their employment at any time
                        without penalty, upon giving reasonable notice.&nbsp;
                    </p>
                    <p>
                        <strong>
                            RECRUITMENT FEES AND TRANSPORTATION EXPENSES
                        </strong>
                        : Workers shall not be charged any fees or costs for
                        recruitment, directly or indirectly, in whole or in
                        part, including costs associated with travel to the
                        receiving country, and processing official job-related
                        documents and work visas in both home and host
                        countries. Workers shall be provided with return
                        transportation to their country of origin, or
                        compensation for the cost of return transportation, upon
                        completion of their employment contract.
                    </p>
                    <p>
                        <strong>CONTRACTS OF EMPLOYMENT</strong>: Written
                        contracts of employment shall be provided to migrant
                        workers in their native language, clearly indicating
                        their rights and responsibilities and conditions of
                        employment, including wages, benefits, working hours,
                        locations of the work, living conditions, housing and
                        associated costs, work-related hazards, and other
                        working and employment conditions.
                    </p>
                    <p>
                        Migrant workers shall be provided with a copy of their
                        employment contract at least five days prior to
                        deployment in their native language. Workers with
                        difficulty understanding the written contract shall be
                        given a verbal explanation of the contract&rsquo;s terms
                        and conditions.
                    </p>
                    <p>
                        The use of supplemental agreements and the practice of
                        contract substitution or use of supplemental agreements
                        by the employer to replace an original contract or any
                        of its provisions with a new contract or terms that are
                        less favorable to the worker is strictly prohibited. The
                        required notice period for workers to terminate their
                        contracts early shall not exceed one month, and once
                        they have begun working, migrant workers shall not be
                        penalized for early termination of their employment
                        contract upon giving the required notice.
                    </p>
                    <p>
                        The notice period shall be waived in situations where
                        the worker has suffered harassment or abuse, or is a
                        victim of trafficking in persons. In such cases the
                        employer shall also be responsible for paying the cost
                        of return transportation for the affected worker.
                    </p>
                    <p>
                        <strong>RETENTION OF PERSONAL DOCUMENTS</strong>:
                        Confiscating, destroying, withholding or otherwise
                        denying workers&rsquo; access to their identity or
                        immigration documents, including work permits and travel
                        documentation (e.g. passports), is strictly prohibited.
                    </p>
                    <p>
                        Workers must be provided with individual secure and
                        lockable storage facilities for their identification
                        documents and other valuables that are accessible to
                        them at all times.
                    </p>
                    <p>
                        <strong>DEPOSITS</strong>: Migrant workers shall not be
                        required to lodge monetary deposits or security
                        payments, or have a portion of their pay withheld at any
                        time as a condition of obtaining or retaining
                        employment.
                    </p>
                    <p>
                        <strong>HUMANE TREATMENT</strong>: The workplace shall
                        be free of any form of harsh or inhumane treatment.
                        Disciplinary policies and procedures shall be clearly
                        defined and communicated to all workers, and shall not
                        include any inhumane disciplinary measures, including
                        any corporal punishment, mental or physical coercion, or
                        verbal abuse of workers. The use or threat of physical
                        or sexual violence, harassment and intimidation against
                        a worker, his or her family, or close associates, is
                        strictly prohibited. Disciplinary procedures shall not
                        include sanctions that result in wage deductions,
                        reductions in benefits, or compulsory labor.
                    </p>
                    <p>
                        <strong>WORKPLACE EQUALITY</strong>: All workers,
                        irrespective of their nationality or legal status, shall
                        be treated fairly and equally. Migrant workers shall
                        benefit from conditions of work no less favorable than
                        those available to country nationals (including but not
                        limited to wages, benefits, and accommodations). Migrant
                        workers (or their family members) shall not be
                        threatened with denunciation to authorities to coerce
                        them into taking up or maintaining employment.
                    </p>
                    <p>
                        <strong>WAGES AND BENEFITS</strong>: All workers shall
                        be paid at least the minimum wage required by applicable
                        laws, and shall be provided all legally mandated
                        benefits. Wage payments shall be made at regular
                        intervals and directly to workers, in accordance with
                        applicable law, if any, and shall not be delayed,
                        deferred, or withheld.
                    </p>
                    <p>
                        Only deductions, advances, and loans authorized by
                        national law are permitted and, if made or provided,
                        shall only be taken with the full consent and
                        understanding of workers. Information shall be provided
                        to workers at the time of their hire about hours worked,
                        rates of pay, and the calculation of legal deductions.
                    </p>
                    <p>
                        All workers must retain full and complete control over
                        their earnings. Wage deductions must not be used to keep
                        workers tied to the employer or to their jobs. Workers
                        shall not be held in debt bondage or forced to work in
                        order to pay off a debt. Deception in wage commitments,
                        payment, advances, and loans is prohibited.
                    </p>
                    <p>
                        <strong>WORKING HOURS</strong>: Workers shall not be
                        required to work in excess of the number of hours
                        permitted by national law. Where the law is silent,
                        normal working hours shall not exceed eight hours per
                        day and 48 per week, and total working hours including
                        overtime shall not exceed 60 hours.
                    </p>
                    <p>
                        All overtime shall be purely voluntary, unless part of a
                        legally recognized collective bargaining agreement. No
                        worker shall be made to work overtime under the threat
                        of penalty, dismissal, or denunciation to authorities.
                        No worker shall be made to work overtime as a
                        disciplinary measure, or for failure to meet production
                        quotas.
                    </p>
                    <p>
                        <strong>
                            FREEDOM OF MOVEMENT AND PERSONAL FREEDOM
                        </strong>
                        : Workers shall have unrestricted access to basic
                        necessities such as clean drinking water and toilets
                        during both work and non-work hours at the work site or
                        in employer provided or arranged housing.
                    </p>
                    <p>
                        Workers&rsquo; freedom of movement shall not be
                        unreasonably restricted. Workers shall not be physically
                        confined to the workplace or related premises, such as
                        employer- or recruiter-operated residences; nor shall
                        any other coercive means be used to restrict
                        workers&rsquo; freedom of movement or personal freedom.
                    </p>
                    <p>
                        Mandatory residence in employer-provided or arranged
                        facilities shall not be made a condition of employment
                        unless required by law.
                    </p>
                    <p>
                        <strong>GRIEVANCE PROCEDURES</strong>: An effective,
                        confidential grievance process shall be established to
                        ensure that any worker, acting individually or with
                        other workers, can submit a grievance without suffering
                        any prejudice or retaliation of any kind. The grievance
                        procedure shall include an appeals process for workers
                        who disagree with how a grievance is resolved.
                    </p>
                    <p>
                        Grievance mechanisms shall be available in the
                        worker&rsquo;s native language and include the ability
                        to report grievances anonymously.
                    </p>
                    <p>
                        <strong>
                            PRIVATE EMPLOYMENT AGENCIES AND LABOR RECRUITERS
                        </strong>
                        : Companies should hire workers directly whenever
                        possible. When the subcontracting of recruitment and
                        hiring is necessary, companies shall ensure that the
                        labor agencies they engage operate legally, are
                        certified or licensed by the competent authority in
                        their country of operation, do not charge recruitment
                        fees, use only trained employees, and do not engage in
                        fraudulent recruitment practices that place workers at
                        risk for human trafficking and sexual exploitation.
                    </p>
                    <p>
                        <strong>EMPLOYEE AWARENESS AND TRAINING</strong>:
                        Workers must be made aware of their rights and
                        responsibilities at the time of hire, including the
                        terms and conditions of their employment contract, the
                        provisions of this Code and all applicable laws and
                        regulations of their home country, the country where the
                        work is performed, and of any country and jurisdiction
                        contracting the work.
                    </p>
                    <p>
                        Workers must be trained upon arrival in the receiving
                        country on the company&rsquo;s workplace rules and
                        procedures, the grievance process, the housing
                        arrangements (if provided or arranged by the company),
                        and the conditions of work, including any health and
                        safety hazards and the precautions needed to ensure
                        personal safety. Workers should be informed that the
                        company prohibits the procurement of commercial sex.
                    </p>
                    <p>
                        <strong>Source: Responsible Sourcing </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/codeofconduct"
                            title="Tool 1, Sample Code of Conduct Provisions"
                        >
                            <strong>
                                Tool 1, Sample Code of Conduct Provisions
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
            </div>
        </StaticData>
    );
};

export default en;
