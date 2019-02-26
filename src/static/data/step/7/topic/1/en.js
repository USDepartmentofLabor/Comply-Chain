import React from "react";
import { Link } from "react-router-dom";
import manBamboo from "../../images/man_bamboo.jpg";

const en = () => {
    return (
        <div>
            <h1>Independent Monitoring (Auditing)</h1>
            <p>
                As discussed under
                <Link to="/steps/5">Step 5, Monitor Compliance,</Link>{" "}
                independent monitoring should consist of unannounced site visits
                to worksites in the company&rsquo;s supply chain to evaluate
                compliance with the code of conduct. Announced visits may also
                be useful when it is necessary to have access to specific
                personnel or documentation present. In cases where the
                company&rsquo;s internal or paid third-party auditors conduct
                audits on a sampling basis in high-risk supply chain areas, the
                sites visited by independent monitors can be the same as those
                already audited, or a different sample of worksites in those
                areas, or both.
            </p>
            <p>
                Independent monitors should be impartial, accredited individuals
                or organizations with expertise on labor standards, appropriate
                language skills, and detailed knowledge of local workplace
                conditions and prevailing industry practices.
            </p>
            <p>
                Independent monitors should provide the company with a report
                outlining their findings, and may make recommendations for
                remediation measures a company should take to address any
                violations found. Companies should make this report public, or
                include it in their broader public reporting.
            </p>
            <p>
                In situations where accountability to institutional structures
                does not exist, independent monitoring can provide another
                option for credible monitoring results. And if you are not able
                to secure independent monitoring as described here, you can
                still maintain open channels of communication with stakeholders
                who have access to worksites and may detect labor abuses. Labor
                unions are viewed by some as &ldquo;independent
                monitors&rdquo;&mdash;if a union is present at the worksite, it
                should be aware of safe ways to bring issues to your attention.
                Similarly, individual workers and community groups may be aware
                of issues that are not detected by auditors. Making available to
                the public a list of the suppliers from whom a company sources
                can provide such groups the opportunity to bring issues to a
                company&rsquo;s attention.
            </p>
            <div className="example-in-action" id="fla">
                <h2>
                    <iron-icon icon="icons:lightbulb-outline" />
                    <strong>
                        Example in Action: The Fair Labor Association&rsquo;s
                        (FLA) Accreditation Program for Independent External
                        Monitors
                    </strong>
                </h2>
                <p>
                    The FLA Board of Directors accredits both monitoring
                    organizations and individual lead auditors for its{" "}
                    <a
                        href="http://www.fairlabor.org/independent-external-monitoring-reports"
                        title="Independent External Monitoring program"
                    >
                        Independent External Monitoring program
                    </a>{" "}
                    for a period of two years, which is then renewable for
                    successive two-year periods. Prospective monitors may apply
                    for accreditation for one or more countries, and for all or
                    some provisions of the{" "}
                    <a
                        href="http://www.fairlabor.org/our-work/code-of-conduct"
                        title="FLA Code of Conduct"
                    >
                        FLA Code of Conduct
                    </a>
                    . Monitors are accredited based upon their fulfillment of
                    criteria outlined in the FLA Charter and for specific
                    regions in which they document and display (through shadow
                    auditing conducted by the FLA prior to accreditation)
                    experience and expertise. Lead auditors are individuals with
                    sufficient experience to direct and manage a monitoring team
                    and submit the required reporting. All monitors must
                    demonstrate independence, impartiality, and a high degree of
                    rigor and thoroughness in assessing compliance for all areas
                    outlined in the FLA&rsquo;s Workplace Code of Conduct.
                </p>
            </div>
            <div className="example-in-action" id="bonsucro">
                <h2>
                    <iron-icon icon="icons:lightbulb-outline" />
                    <strong>
                        Example in Action: The Bonsucro* Model for Accrediting
                        Certification Bodies
                    </strong>
                </h2>
                <p>
                    <a href="https://www.bonsucro.com/en/" title="Bonsucro">
                        Bonsucro
                    </a>{" "}
                    is a global network of sugarcane farmers, traders, civil
                    society groups, brands and others that promotes responsible
                    sugarcane production. In order to become recognized and
                    approved by Bonsucro to audit and certify against the
                    organization&rsquo;s standards, a monitoring organization,
                    or what Bonsucro calls a Certification Body, must first meet
                    several criteria, including the following: 1) A
                    Certification Body (CB) must be in compliance with
                    International Organization for Standardization (ISO)
                    17065:2012{" "}
                    <em>
                        Requirements for bodies certifying products, processes,
                        and services,{" "}
                    </em>
                    while audit personnel must follow the guidelines in ISO
                    19011:2011
                    <em> Guidelines for auditing management systems</em>; 2) A
                    (CB) must operate at least one accredited program that meets
                    the sustainability criteria of Bonsucro&rsquo;s own
                    Production Standard and Chain of Custody Standard; and 3) A
                    CB is responsible for staying up-to-date on Bonsucro
                    requirements and, if applicable, relevant EU legislation.
                    When a CB is approved by Bonsucro and signs a contractual
                    agreement, Bonsucro will issue official approval and list
                    the CB on the Bonsucro Website as an official
                    Bonsucro-approved CB. The CB may then be utilized to conduct
                    audits according to Bonsucro&rsquo;s standards.
                </p>
                <img
                    id="img-browser"
                    src={manBamboo}
                    alt="Man chopping bamboo"
                />
                <br />
                <p className="small-text">
                    &copy; Florian Kopp/Alamy Stock Photo
                </p>
            </div>
            <div className="example-in-action" id="sai_model">
                <h2>
                    <iron-icon icon="icons:lightbulb-outline" />
                    <strong>
                        Example in Action: Social Accountability International
                        Model{" "}
                    </strong>
                </h2>
                <p>
                    To ensure the independence of audits conducted against its
                    Social Accountability 8000 (SA8000) Standard,{" "}
                    <a
                        href="http://www.sa-intl.org/"
                        title="Social Accountability International (SAI)"
                    >
                        Social Accountability International (SAI)
                    </a>{" "}
                    founded{" "}
                    <a href="http://www.saasaccreditation.org/">
                        Social Accountability Accreditation Services (SAAS)
                    </a>{" "}
                    in 1997. SAAS later became a separate not-for-profit
                    organization in 2007. SAAS is an agency that accredits and
                    monitors organizations as certifiers of compliance with
                    social standards, including SA8000, for ethical working
                    conditions.
                </p>
            </div>
        </div>
    );
};

export default en;
