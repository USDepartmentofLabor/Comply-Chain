import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Auditing: Getting Started </h1>

                <p>Robust social auditing is a valuable way&mdash;in addition to engagement with unions, workers, and grievance mechanisms&mdash;to obtain information about violations of a company&rsquo;s code of conduct in your supply chain. Auditing uncovers problems; it does not solve problems. It is one piece of the larger social compliance system along with stakeholder engagement, communication, remediation, and the other steps in the process.</p>
                <p>Auditing is central to the implementation of an effective social compliance system. Upon completion, your company should carefully review audit results, evaluate audit data, and plan activities based on this evaluation.</p>
                <p>As discussed in <a target="_blank" rel="noopener noreferrer" href="https://www.dol.gov/ilab/complychain/steps/3">Step 1: Engage Stakeholders and Partners</a>, if you are part of an industry or multi-industry group, this group may already have trained auditors or auditor training materials. It may have complete audit tools that comport with the group&rsquo;s code. Many of these groups coordinate to conduct joint audits of shared suppliers or share audit reports.</p>
                <p>Once you have targeted certain areas of your supply chain as higher risk and communicated to the relevant individuals and organizations their roles and responsibilities in your social compliance system, you can begin to set up audits. To ensure successful audits, you will need to make sure you have the right personnel in place with the tools they need.</p>
                <p>It is also important to note that companies can explore other avenues to monitor compliance beyond the traditional audit process. Increasingly, companies are exploring other ways to gather information and monitor compliance, such as relying on the use of technology, as highlighted in several examples in this section, and through existing partnerships with the NGO community and other civil society members, among others.<br /><br /></p>
                <h2>The Key Role of Workers and Unions</h2>
                <p>One of the most effective ways to monitor supply chains is through workers themselves and the unions that represent them. Workers and unions can bring issues to a company&rsquo;s attention before any audit takes place. If a union is present in a workplace that is being audited, it should be consulted up front; if no union is present, worker interviews and input should be an integral part of the audit.</p>
                <p>In any audit, when violations are found, you should remediate them. This is covered in detail in <a target="_blank" rel="noopener noreferrer" href="https://www.dol.gov/ilab/complychain/steps/8">Step 6: Remediate Violations</a>.</p>

                <ExampleInAction id="better_work_assessment">
                <h3>
                    <ExampleInAction.Icon alt="Lightbulb"/>
                    Example in Action: Worker Voice
                </h3>
                <p>Increasingly, business entities are finding the traditional pen-and-paper audit process to be cumbersome and sometimes challenging when it comes to the incorporation of worker voice. To alleviate those issues, groups are turning more to technology, especially mobile phones, to find ways to answer the call of workers.</p>
                <p>One of those examples is the Responsible Business Alliance&rsquo;s <a target="_blank" rel="noopener noreferrer" href="https://www.responsiblebusiness.org/tools/wvp/">Worker Voice Platform</a>. The RBA developed its worker voice platform, RBA Voices, to help members and their suppliers improve conditions in their international supply chains. RBA Voices gives workers more ways to provide feedback and provide companies with greater visibility into facilities. Features include a worker survey tool, audit support, a mobile learning app, and grievance reporting.</p>
                <p>For stakeholders looking to understand worker voice technology more broadly, the <a target="_blank" rel="noopener noreferrer" href="https://westprinciples.org/">Worker Engagement Supported by Technology (WEST) Principles</a> aim to maximize the impact of technology-driven efforts to engage workers in global supply chains. Authored by Humanity United* and a group of technology providers (Laborlink by Good World Solutions*, GeoPoll*, MicroBenefits*, Ulula*, and Labor Solutions*), these principles offer guidance on how to design and implement technological solutions that identify and address worker abuse and exploitation, such as through the use of data to inform decision-making, training workers and raising awareness, in addition to behavior change among managers. The goal of the WEST Principles is to enable stakeholders at all levels of global supply chains, including brands and employers, to benefit from inclusive, secure, and impactful technology that elevates worker voices. There are eight WEST Principles in total; of those, worker-centric design (Principle 2), building trust with workers (Principle 3), and informing decisions and system changes (Principle 7) overlap most with labor concerns. When combined with transparent and accessible grievance procedures (see Grievance Mechanisms) and access to remedy, digital platforms that incorporate the WEST Principles can be useful tools to monitor compliance.</p>
                <p><br />To read more about the WEST Principles, visit <a target="_blank" rel="noopener noreferrer" href="https://westprinciples.org/start-with-integrity-and-purpose">https://westprinciples.org/start-with-integrity-and-purpose</a>.</p>
            </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
