import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Auditing: Getting Started </h1>

                <p>
                Social auditing is one of the key ways—in addition to 
                engagement with unions/workers and grievance mechanisms—to 
                obtain information about violations of a company’s code of 
                conduct in your supply chain.  Auditing uncovers problems; 
                it does not solve problems.  It is one piece of the larger 
                social compliance system, and cannot and should not be done 
                in isolation from stakeholder engagement, communication, 
                remediation and the other steps in the process.
                </p>
                <p>
                    Auditing is central to the implementation of an effective
                    social compliance system and should be followed by the
                    process of audit results, evaluation of audit data, and
                    planning and activities based on this evaluation.
                </p>
                <p>
                    As discussed in{" "}
                    <Link to="/steps/3">
                        Step 1, Engage Stakeholders and Partners
                    </Link>
                    , if you are part of an industry or multi-industry group,
                    this group may already have trained auditors and/or auditor
                    training materials. It may have complete audit tools that
                    comport with the group&rsquo;s code. Many of these groups
                    coordinate to conduct joint audits of shared suppliers, or
                    to share audit reports.
                </p>
                <p>
                    Once you have targeted certain areas of your supply chain as
                    higher risk and communicated to the relevant individuals and
                    organizations their roles and responsibilities in your
                    social compliance system, you can begin to set up audits. To
                    ensure successful audits, you will need to make sure you
                    have the right personnel in place, and that they have the
                    tools they need.
                </p>
                <p>
                It is also important to note that companies can explore other 
                avenues to monitor compliance beyond the traditional audit process. 
                Increasingly, companies are exploring other ways to gather information 
                and monitor compliance, such as relying on the use of technology, 
                as highlighted in several examples in this section, and through 
                existing partnerships with the NGO community and other civil society 
                members, among others.
                </p>
                <h2>The Key Role of Workers and Unions</h2>
                <p>
                    One of the most effective ways to monitor supply chains is
                    through workers themselves and the unions that represent
                    them. Workers and unions can bring issues to a
                    company&rsquo;s attention before any audit takes place. If a
                    union is present in a workplace being audited, it should be
                    consulted up front; if no union is present, worker
                    interviews and input should be an integral part of the
                    audit.
                </p>
                <p>
                    In any audit, when violations are found, you should
                    remediate them. This is covered in detail in{" "}
                    <Link to="/steps/8">Step 6, Remediate Violations</Link>.
                </p>

                <ExampleInAction id="better_work_assessment">
                <h3>
                    <ExampleInAction.Icon alt="Lightbulb"/>
                    Example in Action: Worker Voice
                </h3>
                <p>
                Increasingly, business entities are finding the traditional
                 pen and paper audit process as cumbersome and sometimes 
                 challenging when it comes to the incorporation of worker voice. 
                 To alleviate those issues, groups are turning more often to 
                 technology, especially mobile phones, to find ways to answer 
                 the call of workers.
                </p>
                <p>
                One of those examples is {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ethicaltoyprogram.org/en/"
                        title="The Ethical Toy Company"
                    >
                        <em>
                        The Ethical Toy Company
                        </em>
                    </a>
                * and its work with 
                {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.microbenefits.com/"
                        title="MicroBenefits"
                    >
                        <em>
                        MicroBenefits
                        </em>
                    </a>
                * 
                and through funding from 
                {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://thewaltdisneycompany.com/"
                        title="The Walt Disney Company"
                    >
                        <em>
                        The Walt Disney Company
                        </em>
                    </a>
                * 
                to pilot worker voice technology at 50 toy factories in China.  
                This industry pilot that was kicked off in 2018, 
                hopes to leverage mobile technology as a way to share and collect 
                direct feedback from workers on working conditions within the 
                toy supply chain. 
                </p>
            </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
