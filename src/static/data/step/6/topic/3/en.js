import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";  

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    What Topics Should Training and Capacity-Building Cover?
                </h1>
                <p>
                    The following are key training topics for each training
                    audience.
                </p>

                <h2>All Audiences</h2>
                <ul>
                    <li>
                        The standards included in your code of conduct{" "}
                        <em>
                            (Note: this portion of the training should be
                            thorough and comprehensive. Each standard should be
                            explained in detail. For example, a full explanation
                            of child labor should be provided, with examples of
                            what is and is not considered child labor);
                        </em>
                    </li>
                    <li>
                        A comprehensive overview of your social compliance
                        system, showing all of its components and how they fit
                        together, to help everyone understand their part in the
                        system;
                    </li>
                    <li>
                        Your expectations for each component of the system, who
                        is responsible for which components and how you hold
                        them accountable;
                    </li>
                    <li>
                        What to expect from an audit, and how audit data are
                        independently verified;
                    </li>
                    <li>
                        The company&rsquo;s remediation policies and procedures;
                    </li>
                    <li>
                        Workplace values, including mutual respect and honesty;
                    </li>
                    <li>The company&rsquo;s public reporting; and</li>
                    <li>
                        Opportunities for input, including grievance mechanisms.
                    </li>
                </ul>

                <h2>Internal</h2>
                <Accordion id="what-topic-cover">
                <Accordion.Section id="soc-comp-team">
                    <Accordion.Title>
                                <strong>
                                Social Compliance Team
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <p>
                    Intensive training in all aspects of the system. Ongoing
                    training for this team could include use of the social
                    compliance information system and benchmarking against other
                    companies and initiatives.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="product-dept">
                            <Accordion.Title>
                                <strong>
                                Product Development/ Sourcing Departments

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <p>
                    Training in the types of data the social compliance team
                    gathers, and how to use that data in making product
                    development and sourcing decisions, as well as ongoing
                    information regarding the social compliance performance of
                    suppliers. It is critical to discuss with a company&rsquo;s
                    product developers and buyers the impact of their practices
                    and decisions on social compliance. Ideally, the performance
                    evaluations and incentive structures of these teams should
                    be informed by the degree to which they make use of social
                    compliance data. Buy-in and participation from the highest
                    levels of the company may be necessary in these discussions.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="other-emp">
                            <Accordion.Title>
                                <strong>
                                Other Employees

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <p>
                    Communication via newsletters, e-mails, annual reports,
                    annual meetings or other means to ensure that all employees
                    are aware of the company&rsquo;s commitment to social
                    compliance. Another approach that has been used is an
                    incentive or award system that rewards top performers in
                    social responsibility.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="vendor-agent">
                            <Accordion.Title>
                                <strong>
                                Vendors/Agents (If Applicable)

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <p>
                    Contractual requirements to which the vendor or agent is
                    held. Typically a vendor/agent should be required to sign a
                    commitment to comply with the code of conduct, which should
                    be incorporated into the contract. The contract should also
                    specify all activities that the vendor/agent must undertake
                    as part of the system, such as guaranteeing auditors and
                    verification organizations unrestricted access into
                    production facilities. If a company has fairly stable
                    relationships with vendors/agents, you may adopt a social
                    compliance system model that delegates significant
                    responsibility for supplier/producer social compliance to
                    the vendor/agent. In this case, your contract may also
                    require the vendor/agent to:
                </p>
                <ul>
                    <li>
                        Ensure compliance of first-tier suppliers with the code
                        of conduct;
                    </li>
                    <li>Provide training to first-tier suppliers;</li>
                    <li>
                        Conduct &ldquo;self-auditing&rdquo; of first-tier
                        suppliers;
                    </li>
                    <li>
                        Draft, implement and/or follow up on Corrective Action
                        Plans;
                    </li>
                    <li>
                        Track and report on supplier social compliance
                        performance;
                    </li>
                    <li>
                        Limit the number of subcontractors and/or disclose
                        subcontractors at specified tier(s) of supply chains;
                        and
                    </li>
                    <li>
                        Offer incentives to the vendor/agent for good social
                        compliance performance.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <h2>Suppliers</h2>
                <Accordion id="what-topic-cover-1">
                <Accordion.Section id="mgmt">
                    <Accordion.Title>
                                <strong>
                                Management
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <p>
                    The contractual requirements to which suppliers are held, if
                    a company contracts directly with suppliers. The supplier
                    should be required to sign a commitment to comply with the
                    code of conduct, which should be incorporated into the
                    contract. The contract should also specify all activities
                    that the supplier must undertake as part of the system, such
                    as allowing auditors and verification organizations
                    unrestricted access to production facilities. If a company
                    has fairly stable relationships with suppliers, you may
                    adopt a social compliance system model that delegates
                    significant responsibility for social compliance to the
                    supplier. In this case, your contract may also require the
                    supplier to:
                </p>
                <ul>
                    <li>
                        Train supervisors, workers and other groups in social
                        compliance;
                    </li>
                    <li>Conduct some &ldquo;self-auditing&rdquo;;</li>
                    <li>
                        Draft, implement and/or follow up on Corrective Action
                        Plans;
                    </li>
                    <li>Track and report on social compliance performance;</li>
                    <li>
                        Limit number of subcontractors and/or disclose
                        subcontractors at specified tier(s) of supply chains;
                        and
                    </li>
                    <li>
                        Ensure social compliance of its subcontractors and at
                        specified tiers of the supply chain.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="supervisor">
                    <Accordion.Title>
                                <strong>
                                Supervisors
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <ul>
                    <li>Proper use of authority;</li>
                    <li>
                        Communication skills to motivate workers and communicate
                        accomplishments, needs, skills and talents of workers to
                        management;
                    </li>
                    <li>Team building skills; and</li>
                    <li>
                        &ldquo;Red flags&rdquo; to identify child labor, forced
                        labor and trafficking.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="hr-staff">
                    <Accordion.Title>
                                <strong>
                                Human Resources Staff
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                <ul>
                    <li>
                        Computation of wages, including piece rates, overtime,
                        bonuses and legal, permitted deductions;
                    </li>
                    <li>
                        Policies to ensure timely, accurate payment of wages;
                    </li>
                    <li>Appropriate age-verification documentation;</li>
                    <li>
                        Policies on appropriate treatment of children identified
                        at worksites;
                    </li>
                    <li>
                        Policies and procedures for worker recruitment and
                        hiring;
                    </li>
                    <li>
                        Procedures to ensure that all workers have contracts
                        that clearly stipulate their employment terms, in
                        language they understand, and that any changes to
                        contracts are made with the informed written consent of
                        workers;
                    </li>
                    <li>
                        Mechanisms through which workers can submit any
                        grievances, including those related to harassment,
                        threats or intimidation;
                    </li>
                    <li>Appropriate record-keeping skills;</li>
                    <li>
                        Specific policies and procedures for migrant workers,
                        including mechanisms to ensure that migrant workers are
                        not charged fees by brokers/agents, are not required to
                        post deposits, receive employment terms and conditions
                        equal to those of non-migrants, and have ready access to
                        their identity documents and a safe place to store them;
                        and
                    </li>
                    <li>
                        Use of the social compliance information system, as
                        appropriate.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <h2>Suppliers Beyond the First Tier</h2>

                <p>
                    To the extent possible, your training and capacity-building
                    programs should extend to suppliers beyond the first tier.
                    Once your risk assessment has identified the areas of your
                    supply chains at greatest risk of child labor, forced labor
                    and other labor abuses, you should have an idea of those
                    suppliers, at all tiers, in most need of training. The
                    training materials you have developed for first-tier
                    suppliers can be adapted for other levels of the supply
                    chain. As noted, you may also require that vendors/agents or
                    suppliers provide this training. Note that some companies
                    achieve efficiencies by bringing together multiple
                    suppliers&mdash;for instance, all suppliers operating in the
                    same country or geographic region&mdash;to be trained
                    together.
                </p>

                <h2>Workers and Trade Unions</h2>
                <ul>
                    <li>Responsibilities in the workplace;</li>
                    <li>
                        Additional workplace rights not covered in the core
                        training content, such as rights under local law
                        concerning freedom of employment, wage deductions, etc.;
                    </li>
                    <li>Proper procedures for recording hours of work;</li>
                    <li>
                        Understanding pay slips, calculating wages and
                        deductions;
                    </li>
                    <li>
                        &ldquo;Red flags&rdquo; to identify child labor, forced
                        labor, and trafficking;
                    </li>
                    <li>
                        Computation of wages, including piece rates, overtime,
                        bonuses and legal, permitted deductions;
                    </li>
                    <li>
                        Policies to ensure timely and accurate payment of wages;
                    </li>
                    <li>Appropriate age-verification documentation;</li>
                    <li>
                        Policies on appropriate treatment of children identified
                        at worksites;
                    </li>
                    <li>
                        Policies and procedures for worker recruitment and
                        hiring;
                    </li>
                    <li>
                        Procedures to ensure that all workers have contracts
                        that clearly stipulate their employment terms, in
                        language they understand, and that any changes to
                        contracts are made with the informed written consent of
                        workers;
                    </li>
                    <li>
                        Mechanisms through which workers can submit any
                        grievance, including harassment, threats or
                        intimidation; and
                    </li>
                    <li>
                        Specific policies and procedures for migrant workers,
                        including mechanisms to ensure that migrant workers are
                        not charged fees by brokers/agents, are not required to
                        post deposits, receive employment terms and conditions
                        equal to those of non-migrants, and have ready access to
                        their identity documents and a safe place to store them.
                    </li>
                </ul>
                <p>
                    It is important to note that in some industries,
                    particularly agriculture, some workers may not be literate.
                    Starbucks&rsquo;* code of conduct for coffee, known as the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.scsglobalservices.com/starbucks-cafe-practices"
                    >
                        C.A.F.E Practices
                    </a>
                    , includes a requirement that all workers who are illiterate
                    be informed of their rights under the code verbally.
                </p>
            </div>
        </StaticData>
    );
};

export default en;
