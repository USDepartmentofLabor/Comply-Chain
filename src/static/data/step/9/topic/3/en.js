import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Independent Verification</h1>
                <p>
                    Independent third-party verification consists of an
                    assessment of a company's complete social compliance system,
                    to determine whether it is being implemented properly and
                    thoroughly. This verification should be done at least
                    annually.
                </p>
                <p>
                    Verifiers should be accredited Certification Bodies (CBs),
                    complying with either ISO/IEC 17021 or ISO/IEC Guide 65, or
                    other relevant systems. ISO/IEC 17021 contains principles
                    and requirements for the competence, consistency and
                    impartiality of an audit and the certification of management
                    systems of all types and for bodies providing these
                    activities. ISO/IEC Guide 65 contains the general
                    requirements that a third party operating a product or
                    service certification system shall meet in order to be
                    recognized as competent and reliable.
                </p>
                <p>
                    Independent verification should include consultation with
                    appropriate stakeholders, including unions where they exist.
                    Verifiers should conduct witness audits, which consist of a
                    verifier first accompanying and observing audits carried out
                    by the company&rsquo;s existing auditors (internal, external or
                    independent) and then testing audit data to confirm that
                    company data systems are reliable. Announced witness audits
                    are important when it is necessary to have access to
                    specific personnel or documentation; unannounced witness
                    audits may also be useful in verifying that company policies
                    are being implemented appropriately. Verification should
                    also include an examination of the company&rsquo;s
                    remediation policies and procedures, as well as specific
                    cases of remediation, to examine whether they have been
                    effective.
                </p>
                <p>
                    Verifiers should provide the company with a report
                    identifying weaknesses found in the company&rsquo;s system
                    and system implementation. Verifiers may also suggest
                    remediation measures the company may take to address the
                    weaknesses.
                </p>
                <ExampleInAction id="ind-verify">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: The search for verification and standards in fashion
                        </strong>
                    </h2>
                    <p>
                    There is no independent verification standard for words like “sustainable” 
                    and “transparent;” however, a number of small startup companies are attempting 
                    to meet the consumer demand for reliable information on a company’s efforts 
                    to address supply chain labor abuses, among others. Startups like {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.shopwearwell.com/"
                            title="Wearwell"
                        >
                            Wearwell
                        </a>{""}
                    ,* 
                    {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodonyou.eco/"
                            title="GoodOnYou"
                        >
                            GoodOnYou
                        </a>{""}
                    ,* 
                    and {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://compareethics.com/"
                            title="Compare Ethics"
                        >
                            Compare Ethics
                        </a>{""}
                    * 
                    sift through a company&rsquo;s claims in its 
                    reporting and audit documents and validate those claims against reality, 
                    serving as platform for consumers to access brands that meet certain standards. 
                    This model presents challenges but reflects a desire from customers to help break 
                    down claims and establish verification of those claims within an apparel market 
                    of approximately $1.5 trillion as of 2020.
                        
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
