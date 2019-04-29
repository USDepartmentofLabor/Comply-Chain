import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Auditing: Getting Started </h1>
                <p>
                    Auditing is central to the implementation of an effective
                    social compliance system and should be followed by the
                    process of audit results, evaluation of audit data, and
                    planning and activities based on this evaluation.
                </p>
                <p>
                    As discussed in{" "}
                    <Link to="/steps/1">
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
                    <Link to="/steps/6">Step 6, Remediate Violations</Link>.
                </p>
            </div>
        </StaticData>
    );
};

export default en;
