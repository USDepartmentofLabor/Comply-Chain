import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
// import manBamboo from "../../../../../images/man_bamboo.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Independent Monitoring (Auditing)</h1>
                <p>
                    As discussed under{" "}
                    <Link to="/steps/5">Step 5: Monitor Compliance,</Link>{" "}
                    independent monitoring should consist of unannounced site visits to worksites in the company&rsquo;s supply chain to evaluate 
                    compliance with the code of conduct. Announced visits may also be useful when it is necessary to have access to specific personnel 
                    or documentation. In cases where the company&rsquo;s internal or paid third-party auditors conduct audits on a sampling basis in 
                    high-risk supply chain areas, the sites visited by independent monitors can be the same as those already audited, a different sample 
                    of worksites in those areas, or both.
                </p>
                <p>
                    Independent monitors should be impartial, accredited individuals or organizations with expertise in labor standards, appropriate 
                    language skills, and detailed knowledge of local workplace conditions and prevailing industry practices.
                </p>
                <p>
                    Independent monitors should provide the company with a report outlining their findings and may make recommendations for remediation 
                    measures that a company should take to address any violations found. Companies should make this report public or include it in their 
                    broader public reporting.
                </p>
                <p>
                    In situations where accountability to institutional structures does not exist, independent monitoring can provide another option for 
                    credible monitoring results. If you are not able to secure independent monitoring as described here, you can still maintain open channels 
                    of communication with stakeholders who have access to worksites and may detect labor abuses. Labor unions are viewed by some 
                    as &ldquo;independent monitors&rdquo;&mdash;if a union is present at the worksite, it should be aware of safe ways to bring issues to your 
                    attention. Similarly, individual workers and community groups may be aware of issues that are not detected by auditors. Making available 
                    to the public a list of the suppliers from whom a company sources can provide such groups the opportunity to bring any issues to the 
                    company&rsquo;s attention.
                </p>
                <ExampleInAction id="fla">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: The Fair Labor Association&rsquo;s* (FLA) accreditation program for independent external monitors
                        </strong>
                    </h2>
                    <p>
                        The FLA Board of Directors accredits both monitoring organizations and individual lead auditors for its{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Independent External Monitoring program" 
                        href="http://www.fairlabor.org/independent-external-monitoring-reports"
                        >Independent External Monitoring program
                        </a>{" "}
                        for a period of 2 years; this accreditation is then renewable for successive 2-year periods. Prospective monitors may apply for accreditation 
                        for one or more countries and for some or all provisions of the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="FLA Workplace Code of Conduct" 
                        href="http://www.fairlabor.org/our-work/code-of-conduct"
                        >FLA Workplace Code of Conduct
                        </a>.{" "}
                        Monitors are accredited based upon their fulfillment of criteria outlined in the FLA Charter and for specific regions in which they document 
                        and display (through shadow auditing conducted by the FLA prior to accreditation) experience and expertise. Lead auditors are individuals who 
                        have sufficient experience to direct and manage a monitoring team and submit the required reporting. All monitors must demonstrate independence, 
                        impartiality, and a high degree of rigor and thoroughness in assessing compliance for all areas outlined in the FLA&rsquo;s Workplace Code of 
                        Conduct.
                    </p>
                </ExampleInAction>
                <br></br>
                <ExampleInAction id="bonsucro">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: The Bonsucro* model for accrediting certification bodies
                        </strong>
                    </h2>
                    <p>
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Bonsucro" 
                        href="https://www.bonsucro.com/"
                        >Bonsucro
                        </a>{" "}
                        is a global network of sugarcane farmers, traders, civil society groups, brands, and others that promotes responsible sugarcane production. To 
                        become recognized and approved by Bonsucro to audit and certify against the organization&rsquo;s standards, a monitoring organization, or what 
                        Bonsucro calls a certification body (CB), must first meet several criteria, including the following: (1) the CB must be in compliance with 
                        International Organization for Standardization (ISO) 17065:2012 <em>Requirements for bodies certifying products, processes, and 
                            services, </em>while audit personnel must follow the guidelines in ISO 19011: 2011<em> Guidelines for auditing management systems</em>; 
                            (2) the CB must operate at least one accredited program that meets the sustainability criteria of Bonsucro&rsquo;s own Production Standard 
                            and Chain of Custody Standard; and (3) the CB is responsible for staying up-to-date on Bonsucro requirements and, if applicable, relevant 
                            EU legislation. When a CB is approved by Bonsucro and signs a contractual agreement, Bonsucro will issue official approval and list the CB 
                            on the Bonsucro website as an official Bonsucro-approved CB. The CB may then be utilized to conduct audits according to Bonsucro&rsquo;s 
                            standards.
                    </p>
                    
                    {/* <img
                        id="img-browser"
                        className="small-img"
                        src={manBamboo}
                        alt="Man chopping bamboo"
                    />
                    <p className="small-text">
                        &copy; Florian Kopp/Alamy Stock Photo
                    </p> */}
                </ExampleInAction>
                
            </div>
        </StaticData>
    );
};

export default en;
