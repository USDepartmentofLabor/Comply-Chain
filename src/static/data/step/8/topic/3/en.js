import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import styled from "styled-components";
import { theme } from "../../../../../../modules/config/theme";
import Accordion from "../../../../../../components/Accordion"; 

const Table = styled.table`
    border-collapse: collapse;
    border: 2px solid ${theme.colors.charcoal};
    margin-bottom: 16px;
    & th,
    td {
        border: 1px solid ${theme.colors.charcoal};
    }, accessible ="true"
`;

const focusBorder = {
      border:"1px solid"
      };

const en = () => {
    const script = document.createElement("script");
    
        script.src = "../../../../../../components/Utils/utils.js";
        script.async = true;
    
        document.body.appendChild(script);
    return (
        <StaticData>
            <div>
                <h1>Preventing Recurrence</h1>
                <p>
                    In addition to addressing individual victim situations, it is important to analyze why a violation occurred. This analysis is different 
                    than simply attributing child labor and forced labor to poverty, ineffective government institutions, and other reasons, which are 
                    discussed in <Link to="/steps/2/topic/9">Addressing Root Causes</Link>.
                </p>
                <p>
                    A company&rsquo;s own actions&mdash;such as pressure to fill orders by a set date or sudden changes in volume or style&mdash;could be 
                    causing situations where suppliers are pressured to require overtime, bring in additional labor using brokers or recruiters that may not 
                    be fully compliant, or subcontract to unauthorized contractors to get the work done. In many other cases, management failures and the 
                    breakdown of policies, processes, and training at the worksite are the main causes of violations, and these issues can and should be remedied.
                </p>
                <p>
                    Remediation actions should always be designed to correct the problem found, provide remedies for those affected, and prevent it from 
                    recurring. In an ideal world, these steps are all possible; however, some abuses, such as sexual crimes, are impossible to fully remediate 
                    given the associated emotional and societal concerns. In the case of child labor and forced labor violations, remediation means both 
                    improving circumstances for individual child labor or forced labor victims and preventing further child labor or forced labor from occurring 
                    at the worksite.
                </p>
                <h2>Child Labor</h2>
                <p>
                    In instances of <strong>child labor</strong>, causes can include:
                </p>
                <ul>
                <li>Failure to require age verification documents at the time of hiring, or failure to check, verify, and track them.</li>
                <li>Poor understanding on the part of management of appropriate work activities, hazards, and appropriate working hours for children.</li>
                <li>Informal employment relationships that allow children to &ldquo;slip through the cracks.&rdquo;</li>
                </ul>
                <p>Impact Limited&rsquo;s{" "}
                    <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Operational Procedures for Remediation of Child Labour in Industrial Contexts" 
                    href="http://impacttlimited.com/wp-content/uploads/2017/01/Impactt_CLOPIndustrialcontexts_REVISION_26112008.pdf"
                    >Operational Procedures for Remediation of Child Labour in Industrial Contexts
                    </a> {" "}
                    provides detailed guidance on both improving victim situations and preventing recurrence of child labor when found in a manufacturing environment.
                </p>
                
                <h2>Forced Labor</h2>
                <p>
                    In instances of <strong>forced labor</strong>, causes can
                    include:
                </p>
                <ul>
                    <li>Inaccurate computation of wages and deductions and/or delayed wage payment.</li>
                    <li>Lack of clear policies and procedures for worker recruitment and hiring.</li>
                    <li>Lack of clear procedures to ensure that all workers have contracts that clearly stipulate their employment terms in a language they understand, and that any changes to contracts are made with the informed written consent of workers.</li>
                    <li>Lack of mechanisms through which workers can submit grievances.</li>
                    <li>Poor recordkeeping.</li>
                    <li>Lack of policies and procedures for migrant workers, including mechanisms to ensure that migrant workers are not charged fees by brokers or agents, are not required to post deposits, and receive employment terms and conditions equal to those of non-migrants.</li>
                    <li>Policies that allow employers to hold employees&rsquo; identification papers or communication devices &ndash; like cell phones &ndash; in such a manner that they are not available to workers at will.</li>
                </ul>
                <h2>Remediation Practices Related to Forced Labor</h2>
                <p>
                    Of course, causes of violations can go beyond mere system failures and can result from deliberate deception on the part of the supplier, 
                    management, certain employees, and labor recruiters. Whether accidental or deliberate, violations should be remedied through a clear 
                    Corrective Action Plan that holds the supplier accountable.
                </p>
                <ExampleInAction id="plch">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Apple&rsquo;s* Supplier Code of Conduct and Recruitment Fees
                        </strong>
                    </h2>
                    <p>
                        In 2018, Apple was awarded the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Stop Slavery Award by the Thomson Reuters Foundation" 
                        href="https://uk.reuters.com/article/slavery-conference-award/apple-wins-global-award-for-efforts-to-eradicate-slave-labour-idUKL8N1WY5IG"
                        >Stop Slavery Award by the Thomson Reuters Foundation
                        </a> {" "}
                        for making public the details of its supply chains in a bid to boost transparency and help end modern slavery. These efforts were 
                        implemented in tandem with Apple&rsquo;s work updating its policies on worker recruitment fees. Beginning in 2015, through its{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Supplier Code of Conduct" 
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple-Supplier-Code-of-Conduct-January.pdf"
                        >Supplier Code of Conduct
                        </a>, 
                        Apple mandated that suppliers could charge zero fees to supplier employees as part of the recruitment process, despite existing 
                        national legislation that would allow recruitment fees. If Apple discovers instances of practices in contradiction to this mandate, 
                        the supplier must repay the recruitment fees. Suppliers that do not implement measures to correct these practices risk their business 
                        with Apple.
                    </p>
                    <p>
                        Since 2008 and as of 2020, Apple has repaid recruitment fees to 36,980 employees in value of $32.4 million, with $177,277 paid to 381 
                        employees in 2020 alone. Apple has also mapped more than 470 labor recruitment, employment, and placement agencies in its supply chains 
                        in Southeast Asia. In 2020, Apple partnered with the International Organization for Migration to translate and conduct training for 
                        their suppliers on responsible recruitment.
                    </p>
                    <p>Source: 
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2021_Progress_Report.pdf"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2021_Progress_Report.pdf"
                        >https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2021_Progress_Report.pdf
                        </a>.
                    </p>                                    
                </ExampleInAction>
                <p>
                    The following four sections outline some examples of specific remediation actions that could be taken when indicators of forced labor are 
                    found. In all cases, issues should be documented and tracked, and management systems should be updated to prevent recurrence.
                </p>
                <Accordion id="prevent-recurrence" role="table">
                        <Accordion.Section id="practice-issue">
                            <Accordion.Title>
                                <strong>
                                Remediation of Recruitment Practice Issues

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                 <Table>
                    <caption>
                        <em>Remediation of Recruitment Practice Issues</em>
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%"  >
                                    <strong>Circumstances</strong>
                            </th>
                            <th scope="col" width="45%"  >
                                <p>
                                    <strong>Remediation Actions </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                            <th scope="row"  >Workers abducted, confined during the recruitment process, or sold.</th>

                            <td  >
                                <p>
                                    Report offenses to law enforcement authorities. Work with law enforcement and local groups to provide victims a safe place 
                                    to stay and link them to needed services.
                                </p>
                            </td>
                        </tr>
                        <tr>
                                <th scope="row"  >Workers recruited through a loan or advance and are working to pay it off.</th>
                            <td  >
                                <p>
                                    If the supplier paid the loan or advance, determine whether the terms were reasonable. If not, work out reasonable terms 
                                    between supplier and worker. If the loan or advance was paid by a labor recruiter, determine whether the supplier had 
                                    knowledge of the arrangement. If so, work out reasonable terms between supplier, recruiter, and worker. If not, require 
                                    the supplier to discontinue its relationship with the recruiter. Report unscrupulous recruiters to authorities.
                                </p>
                            </td>
                        </tr>
                        <tr>
                                    <th scope="row"  >Deceptive, and sometimes fraudulent, recruitment&mdash;workers promised types of work, working conditions, 
                                    contract terms, housing or living conditions, job locations, employers, or wages or earnings that do not materialize.</th>

                            <td  >
                                <p>
                                    If the supplier made a false promise, the supplier should provide all employees who wish to leave their full wages due and 
                                    transportation home. If the false promises were made by a labor recruiter, determine whether the supplier had knowledge of 
                                    the arrangement. If so, the supplier is still responsible for the above. If not, require the supplier to discontinue its 
                                    relationship with the recruiter. Report unscrupulous recruiters to authorities.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                                
                            </Accordion.Panel>
                            </Accordion.Section>
                    <Accordion.Section id="living-cond">
                            <Accordion.Title>
                                <strong>
                                Remediation of Working and Living Conditions Issues
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table accessibile="true">
                    <caption>
                        {" "}
                        <em>Remediation of Working and Living Conditions</em>
                        Issues{" "}
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%"  >
                                <p>
                                    <strong>Circumstances</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%"  >
                                <p>
                                    <strong>Remediation Actions </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                                <th scope="row"  >Workers working excessive overtime beyond legal limits.</th>

                            <td  >
                                <p>
                                    Ensure that the supplier pays workers back wages for all overtime hours worked. Work with the supplier to evaluate staffing 
                                    policies and compensation practices, such as piece rates, that are contributing to overtime. Examine your own sourcing 
                                    practices, including lead times, changes in orders, pricing, and other pressures that could necessitate extreme cost-cutting 
                                    measures on the part of the supplier, including excessive overtime. Ensure that all workers receive training on their rights under the law and the social compliance system.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"  >Workers expected to work &ldquo;on call.&rdquo;</th>
                           <td  >
                                <p>
                                    Work with the supplier to design a more structured staffing plan that meets your code&rsquo;s requirements. Ensure that all 
                                    workers receive training on their rights under the law and your code of conduct.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer restricts workers&rsquo; freedom of movement or communication.</th>
                            <td  >
                                <p>
                                    Determine who&mdash;management, supervisors, shift leaders, etc.&mdash;is involved in restricting workers&rsquo; freedom of 
                                    movement or communication and investigate these individuals&rsquo; actions. If individuals were acting on their own without 
                                    management knowledge, take appropriate action with these individuals, which could include training, suspension, or termination. 
                                    If these restrictions came from management, terminate the relationship with the supplier or provide the supplier a short 
                                    window of time to end all such practices.&nbsp;
                                </p>
                                <p>
                                    Further investigate conditions and circumstances at the worksite that management or supervisors may be trying to 
                                    conceal&mdash;including through offsite interviews with workers and other knowledgeable community members. Ensure that all 
                                    workers receive training on their rights under the law and your code of conduct, including channels for grievances. Ensure 
                                    that workers who wish to leave the job are able to do so and receive their full wages due.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Degrading living conditions.</th>
                            <td  >
                                <p>
                                    Ensure that the supplier fully understands your minimum standards for employee housing. Give the supplier a short window of 
                                    time to remedy all living conditions. Ensure that all workers receive training on their rights under the law and your code of 
                                    conduct, including housing standards. Ensure that workers who wish to leave the job are able to do so and receive their full 
                                    wages due.
                                </p>
                                <p>
                                    Follow up with an unannounced investigation that includes offsite interviews with workers and other knowledgeable community 
                                    members. If the living conditions have not improved, terminate the relationship with the supplier while mitigating the impact 
                                    of this on the workers.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers forced to engage in illicit activities, to work for individuals or families outside the scope of business needs, or to take addictive drugs.</th>
                           <td  >
                                <p>
                                    Determine who&mdash;management, supervisors, shift leaders, etc.&mdash;is involved in forcing workers to engage in illicit activities, to work 
                                    for private homes or families, or to take addictive drugs, and investigate these individuals&rsquo; actions. If individuals were acting on their 
                                    own without management knowledge, take appropriate action with these individuals, which could include training, suspension, or termination. If 
                                    these restrictions came from management, terminate the relationship with the supplier or provide the supplier a short window of time to end all 
                                    such practices.
                                </p>
                                <p>
                                Further investigate conditions and circumstances at the worksite that management or supervisors may be trying to conceal&mdash;including through offsite 
                                interviews with workers and other knowledgeable community members. Ensure that all workers receive training on their rights under the law and your code 
                                of conduct, including channels for grievances. Ensure that workers who wish to leave the job are able to do so and receive their full wages due.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Supplier inflates workers&rsquo; indebtedness.</th>
                            <td  >
                                <p>
                                    Determine the source of workers&rsquo; initial debt. If the initial debt was to the supplier, require the supplier to cancel this debt. 
                                    If the initial debt was to a labor recruiter, investigate whether the supplier had knowledge of the debt arrangement. If so, require the 
                                    supplier to cancel the debt. If not, require the supplier to terminate its relationship with the recruiter. Report the recruiter to 
                                    authorities.
                                </p>
                                <p>
                                    With respect to the inflation of the debt, require the employer to immediately stop charging any form of interest on the debt. If debt is 
                                    inflated through purchases from the employer, such as at a canteen, determine whether workers have other options. If purchases at employer-owned 
                                    stores are the only viable option for workers, work with the supplier to ensure that prices and terms are reasonable.
                                </p>
                                <p>
                                    Ensure that workers who wish to leave the job are able to do so and receive their full wages due.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers depend on employer for housing, food, or other necessities.</th>
                            <td  >
                                <p>
                                    In some cases, particularly for migrant workers, provision of housing, food, and other necessities by the employer may be the best option 
                                    for all involved. However, the quality of housing and foods must be examined; if it does not meet minimum standards, work with the supplier to 
                                    improve quality.
                                </p>
                                <p>
                                    Follow up with an unannounced investigation that includes offsite interviews with workers and other knowledgeable community members. If living 
                                    and food conditions have not improved, terminate the relationship with the supplier.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers have personal dependency on employer.</th>
                            <td  >
                                <p>
                                    Ensure that all workers receive training on their workplace rights under the law and your code of conduct, regardless of personal relationships.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="impossible-leaving">
                            <Accordion.Title>
                                <strong>
                                Remediation of "Impossibility of Leaving" Issues
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        <em>Remediation of "Impossibility of Leaving"
                        Issues</em>{" "}
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" >
                                <p>
                                    <strong>Circumstances</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" >
                                <p>
                                    <strong>Remediation Actions </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers do not feel free to resign because of benefits they have received or employer restrictions.</th>
                            <td  >
                                <p>
                                    If a supervisor or other individual is leading workers to believe they cannot leave because the supplier has provided 
                                    training or other benefits, or because of an illegal contractual requirement, require the supplier to take appropriate 
                                    corrective action against this individual, from training to termination. If workers simply do not understand their rights, 
                                    provide training to ensure they know when they may resign. Ensure that workers who wish to leave the job are able to do so 
                                    and receive their full wages due.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers feel compelled to stay because they are due wages.</th>
                            <td  >
                                <p>
                                    Ensure that wages are being computed accurately and that all employees involved in payroll are adequately trained in wage computation. 
                                    Require the supplier to pay all wages due under local law (for example, if local law requires payment biweekly, require all wages to be paid, 
                                    at a minimum, through two weeks ago). Ensure that payment schedules are formalized within legal limits and the limits of your code. Follow up 
                                    with an unannounced audit. Ensure that workers who wish to leave the job are able to do so and receive their full wages due.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Workers work for an excessive or indefinite amount of time to repay a debt or advance from the employer or recruiter.</th>
                            <td  >
                                <p>
                                    If the supplier paid the loan or advance, determine whether the terms were reasonable. If not, work out reasonable terms between 
                                    supplier and worker. If the loan or advance was paid by a labor recruiter, determine whether the supplier had knowledge of the 
                                    arrangement. If so, work out reasonable terms between supplier, recruiter, and worker. If not, require the supplier to discontinue 
                                    its relationship with the recruiter. Report unscrupulous recruiters to authorities.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="penalty-issue">
                            <Accordion.Title>
                                <strong>
                                Remediation of Penalty or Threat Issues
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table width="100%">
                    <caption>
                        <em>Remediation of Penalty or Threat Issues</em>
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" >
                                <p>
                                    <strong>Circumstances</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" >
                                <p>
                                    <strong>Remediation Actions </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row"  >Supplier or recruiter has possession of workers&rsquo; identity or travel documents.</th>
                            <td  >
                                {/* <p id="P1"> */}
                                <p>
                                    Suppliers should never confiscate or take control of workers&rsquo; identity or travel documents unless it is purely for 
                                    safekeeping purposes, and then only if workers are able to retrieve their documents promptly upon request. Require the supplier 
                                    to return all workers&rsquo; identity documents. If workers prefer that the supplier hold them for safekeeping, ensure that a 
                                    policy is in place for retrieval of documents and that all workers are aware of the policy. Follow up to check on the issue through 
                                    an unannounced audit.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer restricts workers&rsquo; communication.</th>
                            <td  >
                                {/* <p><a href="#P1">See above.</a></p> */}
                                <p>
                                <abbr title="Suppliers should never confiscate or take control of workers&rsquo; identity or travel documents unless 
                                it is purely for safekeeping purposes, and then only if workers are able to retrieve their documents promptly upon request. Require 
                                the supplier to return all workers&rsquo; identity documents. If workers prefer that the supplier hold them for safekeeping, ensure 
                                that a policy is in place for retrieval of documents and that all workers are aware of the policy. Follow up to check on the issue 
                                through an unannounced audit." aria-label="Suppliers should never confiscate or take control of workers&rsquo; identity or travel documents unless 
                                it is purely for safekeeping purposes, and then only if workers are able to retrieve their documents promptly upon request. Require 
                                the supplier to return all workers&rsquo; identity documents. If workers prefer that the supplier hold them for safekeeping, ensure 
                                that a policy is in place for retrieval of documents and that all workers are aware of the policy. Follow up to check on the issue 
                                through an unannounced audit.">See above.</abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer threatens to turn in workers to immigration authorities.</th>
                            <td  >
                                {/* <p id="P2"> */}
                                <p>
                                    In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                </p>
                                <p>
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer perpetrates or threatens physical or sexual violence.</th>
                            <td  >
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members." aria-label="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members."> 
                                        See above.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer or recruiter threatens to remove privileges like promotion potential, threatens further deterioration in working conditions, 
                        or threatens to fire workers.</th>
                            <td  >
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members." aria-label="
                                    In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members.
                                    ">
                                        See above.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer or recruiter exploits religious or cultural beliefs of workers.</th>
                            <td  >
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members." aria-label="
                                    In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members.
                                    ">
                                        See above.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer or recruiter withholds workers&rsquo; pay or assets or threatens financial penalties.</th>
                            <td  >
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members." aria-label="
                                    In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members.
                                    ">
                                        See above.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row"  >Employer threatens extra work for uncooperative workers.
                        Employer uses blackmail to coerce workers.</th>
                            <td  >
                                {/* <p><a href="#P2">See above.</a></p> */}
                                <p>
                                    <abbr title="In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members." aria-label="
                                    In any situation of violence, penalty, intimidation, or threat, determine who&mdash;management, supervisors, shift leaders, 
                                    etc.&mdash;is involved in these violations. If individuals were acting on their own without management knowledge, take appropriate action 
                                    with these individuals, which could include training, suspension, or termination.
                                    If these penalties or threats were initiated by management or if management was complicit, terminate the relationship with the 
                                    supplier or provide the supplier a short window of time to end all such practices. Ensure that all workers receive training on 
                                    their rights under the law and your code of conduct, including channels for grievances. Ensure that workers who wish to leave 
                                    the job are able to do so and receive their full wages due. Follow up with unannounced audits that include offsite interviews 
                                    with workers and knowledgeable community members.
                                    ">
                                        See above.
                                    </abbr>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                </Accordion>
                <br />
                <ExampleInAction id="better_work">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>Example in Action: The </strong>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://betterwork.org/"
                            title="Better Work"
                        >
                            <strong>Better Work</strong>
                        </a>
                        <strong> Remediation Process</strong>
                    </h2>
                    <p>
                        Better Work encourages the development of democratic industrial relations structures and processes by including representatives 
                        of employers&rsquo; organizations and trade unions in the design and implementation of its programs. At the factory level, 
                        compliance issues identified through assessments are addressed by a Performance Improvement Consultative Committee (PICC), a body 
                        of 8&ndash;10 persons comprising an equal number of management and worker representatives. Where possible, the formation and capacity 
                        development of the PICC builds on a factory&rsquo;s existing effective labor-management structures. Each PICC meets at least monthly. 
                        Supported by Better Work Advisors, they formulate and oversee implementation of a remediation plan, ensuring that management and 
                        workers share responsibility and accountability throughout the process. Better Work Advisors are available to provide technical 
                        assistance and conduct follow-up visits to evaluate progress on the remediation plan.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
