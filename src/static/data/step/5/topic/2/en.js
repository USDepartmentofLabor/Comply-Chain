import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const en = () => {
    return (
        <div>
            <h1>The Audit Team</h1>
            <h2>Personnel</h2>
            <p>
                Your social compliance team consists of your social compliance
                staff at headquarters, as well as the personnel in the field
                coordinating and/or carrying out audits. For companies with an
                internal audit program, the audit team members are company
                employees; for companies that use external auditors, the audit
                team members are comprised of hired auditors from outside
                entities (whether for-profit or non-profit firms). Some
                companies use both internal and external auditors, depending on
                the sector or location of the facility.
            </p>
            <p>
                All three of the auditing approaches below can be reliable and
                credible, as long as they are well-managed by your social
                compliance team and operate within the framework of a
                comprehensive social compliance program. However, each approach
                has certain advantages and disadvantages.&nbsp;
            </p>
            <ul>
                <li>
                    <h3>Internal auditors</h3>
                </li>
            </ul>
            <p>
                Internal auditors are company employees who are trained in the
                skills and competencies of social auditing. One advantage to
                using internal auditors is that they are likely to be easier to
                communicate with; for example, if there are changes in policy,
                it is easier to ensure consistency among your own staff than
                with hired external auditors. Internal auditors also may have a
                deeper understanding of the company&rsquo;s full social
                compliance program and may be able to make contributions to it
                beyond auditing. On the other hand, since internal auditors are
                company employees, some stakeholders may question the
                credibility of their findings.&nbsp;
            </p>
            <ul>
                <li>
                    <h3>External auditors</h3>
                </li>
            </ul>
            <p>
                External auditors are audit professionals with defined skills
                and competencies, employed by social audit firms outside a
                company. They are a flexible workforce and may be available in
                geographic locations where it is not cost-effective for a
                company to maintain internal auditors. On the other hand, since
                external auditors are also paid by the company to do audits,
                some stakeholders may still doubt the credibility of their audit
                findings. In addition, some external audit groups may have their
                own systems in place that cannot be fully adapted to match a
                company&rsquo;s own protocols or parameters.
            </p>
            <ul>
                <li>
                    <h3>Independent auditors/monitors</h3>
                </li>
            </ul>
            <p>
                Independent auditors/monitors are audit professionals accredited
                by institutions or mechanisms; their role is to ensure that
                auditing takes place while eliminating any direct financial
                transaction between the company and the auditor. Typically, a
                company pays a separate, independent institution for auditing
                services, and/or for membership in that body. The institution
                accredits auditors under its established standards and is
                responsible for scheduling and oversight of all audits. While
                this is designed to increase the credibility of the audit, in
                some sectors or geographic locations, this type of arrangement
                may not be available. In addition, even without a direct
                financial transaction, some stakeholders may still have concerns
                about the degree of an auditor&rsquo;s independence from the
                audited entity. Varying degrees of independence exist, and
                independence ultimately needs to be judged on a case-by-case
                basis.
            </p>
            <p>
                If a company opts to use internal or external auditors, it may
                be necessary to engage independent entities for certain roles
                within the social compliance system if they wish to ensure
                maximum effectiveness and credibility. See
                <Link to="/steps/7">Step 7, Independent Review</Link> for a
                larger discussion of independent monitoring and verification.
            </p>
            <h2>Auditor Competencies</h2>
            <p>
                Whether internal, external or independent, all auditors must
                possess specific skills and knowledge in order to carry out
                audits effectively. In the past few years, several organizations
                have made efforts to formalize and document the standard skills
                and knowledge that an auditor should possess. For example, the{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.theapsca.org/"
                    title="Association of Professional Social Compliance Auditors (APSCA)"
                >
                    Association of Professional Social Compliance Auditors
                    (APSCA)
                </a>{" "}
                is a practitioner-led membership body currently working to
                establish a certification process for social compliance
                auditors. Necessary knowledge includes a detailed understanding
                of international labor standards, industry production
                environments and processes, and local cultures and
                languages.&nbsp;
            </p>
            <p>
                It&rsquo;s important that auditors also be trained in specific
                protocols for handling sensitive situations involving children
                and/or adult victims of egregious exploitation. Auditors should
                be prepared to interact with children and take measures on
                behalf of children that are age appropriate. Procedures should
                also be in place to ensure that both children and adult victims
                of forced labor receive immediate care and services from
                qualified individuals or organizations.
            </p>
            <h2>Team Composition</h2>
            <p>
                The size and composition of an audit team depends on the size
                and type of facility to be audited, the number of workers in the
                facility, and the nature of the workforce, including the
                languages and cultural composition of the workers. If the
                facility is large and a variety of languages are spoken,
                auditors who speak every language must be available. Gender of
                the workers is also an important consideration; for example, it
                normally is preferable for women to be interviewed by a woman in
                order to facilitate more comfortable discussions about issues
                such as sexual harassment.
            </p>
            <p>
                Many companies prefer auditors to be nationals of the countries
                where they will perform audits, because they know the culture,
                language and customs of the country, and hiring local auditors
                also contributes to sustainable local capacity-building.&nbsp;
            </p>
            <p>
                The team leader should ensure that the team functions
                interactively. Because violations can often be subtle, or
                deliberately concealed from auditors, the team should not simply
                divide up work responsibilities; in many cases, more than one
                auditor should examine the same issues, and the team should come
                together to assess findings and ensure that connections and
                patterns are identified. The team should collectively agree on
                the final audit findings.
            </p>
            <ExampleInAction id="better_work_assessment">
                <h3>
                    <ExampleInAction.Icon />
                    Example in Action: Better Work Assessment Teams
                </h3>
                <p>
                    Better Work has several regulations in place for evaluation
                    teams, requiring two &ldquo;enterprise advisors&rdquo;
                    [auditors] to be present for each unannounced assessment.{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://betterwork.org/our-work/factory-services"
                        title="Better Work advisors"
                    >
                        Better Work advisors
                    </a>{" "}
                    are hired locally and receive extensive training. A new
                    advisor is always paired with a more experienced colleague,
                    and no two advisors are paired on consecutive visits to a
                    particular factory. Advisors conducting assessments for a
                    particular factory are never the same individuals providing
                    remediation and advisory services to that factory.
                </p>
            </ExampleInAction>
        </div>
    );
};

export default en;
