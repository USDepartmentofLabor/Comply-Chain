import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Steps in an Audit</h1>
                <p>
                    An audit typically consists of several steps, listed
                    below.&nbsp;
                </p>
                 <Accordion id="worksite-travel-acc">
                   <Accordion.Section id="worksite-travel-description">
                      <Accordion.Title>
                      Arrival at the worksite
                         </Accordion.Title>
                         <Accordion.Panel>
                         <p>Company practice varies in terms of whether worksites are notified in advance of an audit (an &ldquo;announced audit&rdquo;). However, best practice in this area normally is <strong>unannounced</strong> audits. No one at the worksite should be notified in advance that the audit team will visit on a particular day.</p>
                     </Accordion.Panel>
                 </Accordion.Section>
                 {/* </Accordion>
                  <Accordion id="mgmt-meeting-acc"> */}
                    <Accordion.Section id="mgmt-meeting-description">
                       <Accordion.Title>
                       Opening meeting with management
                          </Accordion.Title>
                          <Accordion.Panel>
                           <p>
                           The purpose of the opening meeting is to explain the audit process to the worksite managers, including the portions in which management is or is not requested to participate. This is also the time for the team to request the documentation needed for the audit; management may need some time to assemble those documents after the meeting.

                           </p>
                      </Accordion.Panel>
                  </Accordion.Section>
                  {/* </Accordion>
                  <Accordion id="site-walk-through-acc"> */}
                  <Accordion.Section id="site-walk-through-description">
                     <Accordion.Title>
                     Walk-through of the worksite
                        </Accordion.Title>
                        <Accordion.Panel>
                         <p>
                         The purpose of the walk-through is to observe conditions in the factory and any associated locations such as cafeterias and dormitories. This allows the audit team to get a sense of any discernible social compliance concerns; for instance, the auditors may observe workers that appear young, possibly below the minimum age. The team should observe, but not disrupt, the flow of work in the factory. Auditors may choose to speak with workers briefly but not in a manner that would interrupt their work or put the workers in any jeopardy. The walk-through is also a good time to examine safety equipment, emergency exits, and timekeeping systems.

                         </p>
                         <OwnWords>
                             <h3>
                                 <OwnWords.Icon alt="Feedback"/>{" "}
                                 <strong>
                                     In Their Own Words: The challenges of age verification
                                 </strong>
                             </h3>
                             <p>To verify the age of workers, &ldquo;employers should keep and make available to the competent authority registers or other documents indicating the names and ages or dates of birth, duly certified wherever possible, not only of children and young persons employed by them but also of those receiving vocational orientation or training in their undertakings.&rdquo;</p>
                            <p>&ldquo;When there are no birth certificates to verify age or where falsified documents are easily obtained, the following suggestions may be helpful:</p>
                            <ul>
                                <li>A medical examination prior to employment may help to indicate the person&rsquo;s true age and verify the physical aptitude for the work. Care should always be taken to respect the person&rsquo;s right to privacy.</li>
                                <li>Cross-checking multiple written documents and affidavits can help identify false documentation.</li>
                                <li>Employers can hold interviews with employees and applicants who appear to be below the minimum age required for work to obtain further information.</li>
                                <li>School enrollment certificates can be a good source of information.&rdquo;</li>
                            </ul>
                            <p>Local indicators may also be helpful in countries where the challenge is that the worker may not know the precise year in which they were born. For example, in some Asian countries, children do not know their precise birth year but know the animal year (Year of the Monkey, etc.). A person might know that their birth is related to some major historical event, such as independence or the start or end of a war, or a significant anniversary. You may wish to research local key events or means of marking time in the country of operation; you could use this information in interviews with workers if you have doubts about their age.</p>
                            <p>(1) See Article 9(3) of <a target="_blank" rel="noopener noreferrer" href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138">Convention No. 138 (1973)</a>, concerning the employers&rsquo; obligation to keep registers of young workers under 18.</p>
                            <p>(2) See ILO. <a target="_blank" rel="noopener noreferrer" href="http://www.ilo.org/jakarta/whatwedo/publications/WCMS_151355/lang--en/index.htm">Eliminating Child Labour: Guides for Employers</a>. Geneva, 2007.</p>
                            <p>Source: Excerpted from the ILO Helpdesk for Business, <a target="_blank" rel="noopener noreferrer" href="http://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm"><em>Q&amp;As on Business and Child Labor</em></a><em>;</em><em> accessed May 11, 2017.</em></p>
                            <p></p>
                             </OwnWords>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="worker-interview-acc"> */}
                  <Accordion.Section id="worker-interview-description">
                     <Accordion.Title>
                     Worker interviews
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>The team should select a cross-section of workers to interview. The selected workers should represent the full diversity of the workplace and include (as applicable) men and women, migrant workers and local workers, workers on different shifts, workers performing different tasks, members of various production teams, etc. If there are young people in the facility, a representative group should be interviewed using age-sensitive interview techniques.&nbsp;</p>
                        <p>Interviews may be conducted individually or in groups and are typically conducted both inside and outside the facility. Particularly in cases where there are indications of egregious violations about which employees may hesitate to discuss during work, auditors may need to make time to speak with workers outside work hours and away from the worksite. Auditors should use their audit tools to ensure that they ask workers a comprehensive set of questions. They also should collect copies of paystubs from workers to compare them to management-provided payment records.</p>
                        <p>Interviews also provide workers a chance to voice any other concerns they may have. Workers should be assured that all responses are confidential and are never shared with management. Your contract with suppliers should include a clause on non-retaliation against workers for participating in an audit; participation in an audit should carry the same worker protections as any grievance mechanism.</p>
                        <p>If a trade union is present in the facility, a representative should be interviewed. Auditors should always interview members of worker organizations or local worker advocacy groups where available. Local civil society organizations, particularly those involved in advocacy for workers, may also be able to corroborate information and provide contextual information regarding the labor situation in a particular area.&nbsp;</p>
                        <p>The RST contains a tool, <a target="_blank" rel="noopener noreferrer" href="http://www.responsiblesourcingtool.org/workerinterviews">Migrant Worker Interviews</a>, which provides a set of sample interview questions to use when conducting targeted migrant and foreign contract worker interviews. Companies can use this tool to shape their own worker interview questionnaires in order to improve their auditors&rsquo; ability to identify possible cases of abuse or recruiter-induced human trafficking at company, supplier, and subcontractor facilities.</p>
                         <OwnWords>
                         <h3>
                             <OwnWords.Icon alt="Feedback"/>{" "}
                             <strong>
                                 In Their Own Words: Interviewing a child
                             </strong>
                         </h3>
                         <p>&ldquo;Interviewing a child is necessary in connection with recruitment of young people: (a) to assess their age, (b) to assess the maturity in connection with ﬁnding out what job the person is able to carry out, (c) possible work experience, and/or (d) if one of the workers is identified to be underage for the type of job/process that the child or young person carries out.</p>
                        <p>When interviewing a child that you suspect to be below the minimum required age for the particular type of job or where the child has been engaged in hazardous work, it is important to create a trusting and relaxed atmosphere. It is also important that the conversation takes place in an undisturbed but not too remote and out of sight environment. Essentially, the child must feel as secure as possible.</p>
                        <p><strong>What to Observe?</strong></p>
                        <ul>
                            <li>The child must be treated with respect and recognized as an individual in his or her own right.</li>
                            <li>There must always be two adults present at the interview at all times. An adult must not spend excessive time alone with children away from others in order not to create unnecessary worry for the child and create a basis for suspicion of inappropriate or threatening behavior and abuse.</li>
                            <li>When interviewing a girl, there must always be a woman present.</li>
                            <li>It is advisable to invite the child&rsquo;s parents or guardians for the interview.</li>
                            <li>If the child is an orphan and no guardian or relatives can be identified, a representative of a child rights NGO may be invited.</li>
                        </ul>
                        <p><strong>During the Interview with a Child:</strong></p>
                        <ul>
                            <li>The key objective of the interview is always to listen to the child and to try to make an overall assessment of the child&rsquo;s family and work situation:</li>
                            <ul>
                                <li>Reasons why the child works.</li>
                                <li>How does the child contribute to the family income and what are the circumstances of the family (e.g., unemployment, disease, etc.)?</li>
                                <li>How does the child understand and appreciate his or her own work?&rdquo;</li>
                            </ul>
                        </ul>
                        <p>Source: Save the Children Denmark, Child Labour Toolkit, Responsible Approaches to Child Labour in the Textile and Garment Industry, 2006.</p>
                     </OwnWords>
                     <p></p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="mgmnt-interview-acc"> */}
                  <Accordion.Section id="mgmnt-interview-description">
                     <Accordion.Title>
                     Management interviews
                        </Accordion.Title>
                        <Accordion.Panel>
                         <p>
                         Management interviews provide an opportunity to corroborate or find discrepancies in information gathered through worker interviews. The team should interview a cross-section of management, including human resources personnel, production supervisors, and others. Audit tools should be used to ensure that managers are asked a comprehensive set of questions.
                         </p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="broker-interview-acc"> */}
                  <Accordion.Section id="broker-interview-description">
                     <Accordion.Title>
                     Interviews with labor brokers and recruiters
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>For companies with significant numbers of migrant and contract workers in their supply chains, there is an increasing movement toward interviewing labor recruiters and brokers as part of the audit process. Gaining access to recruiters or brokers for interviews can be a challenge and is likely to require the supplier&rsquo;s coordination and cooperation. Verit&eacute;&rsquo;s* <a target="_blank" rel="noopener noreferrer" href="https://verite.org/help-wanted/fair-hiring-toolkit/">Fair Hiring Toolkit</a> includes <a target="_blank" rel="noopener noreferrer" href="https://verite.org/help-wanted/fair-hiring-toolkit/for-suppliers/3-screening-labor-recruiters/">sample interview questions for labor recruiters</a> that are designed for use by company social auditors.</p>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                <Accordion id="doc-review-acc"> */}
                  <Accordion.Section id="doc-review-description">
                     <Accordion.Title>
                      Documentation review
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>The purpose of a documentation review is to provide tangible proof of compliance and to either corroborate or find discrepancies in the information gathered through worker and management interviews. The types of documents to be reviewed include:</p>
                        <ul>
                            <li>Age verification procedures and documents</li>
                            <li>Master list of juvenile workers</li>
                            <li>Selection and recruitment procedures</li>
                            <li>Contracts with labor brokers</li>
                            <li>Worker contracts or employment agreements</li>
                            <li>Worker personal documents that may be in the employer&rsquo;s keeping</li>
                            <li>Introduction program and materials</li>
                            <li>Personnel files</li>
                            <li>Employee communication and training plan&mdash;certifications including but not limited to skills training, worker preparedness, government certification programs, and systems and policy orientations</li>
                            <li>Collective bargaining agreements including union certification, role of the union, and minutes of meetings</li>
                            <li>Contracts with security agencies, including scope of responsibilities&nbsp;</li>
                            <li>Payroll and time records</li>
                            <li>Production capacity reports</li>
                            <li>Written human resources policies and procedures</li>
                            <li>Occupational health and safety plans and records including legal permits, maintenance and monitoring records, injury and accident reports, investigation procedures, chemical inventories, personal protective equipment inventories, training certificates, and evacuation plans</li>
                            <li>Disciplinary notices</li>
                            <li>Grievance reports</li>
                            <li>Performance evaluations</li>
                            <li>Promotion and merit increases</li>
                            <li>Dismissal and suspension records</li>
                            <li>Records of employees who have resigned</li>
                            <li>Worker paystubs</li>
                        </ul>
                    </Accordion.Panel>
                </Accordion.Section>
                {/* </Accordion>
                                <Accordion id="closing-meeting-acc"> */}
                                  <Accordion.Section id="closing-meeting-description">
                                     <Accordion.Title>
                                     Closing meeting with management
                                        </Accordion.Title>
                                        <Accordion.Panel>
                                        <p>
                                        The closing meeting is a time to report to management any code violations found in the facility. Some companies use the closing meeting as a time to request management proposals to remediate problems or to work with management on a corrective action plan (CAP).  Other companies use the closing meeting as a time to discuss issues with management but develop formal CAPs after the audit is complete and the full team has reviewed the audit report.

                                        </p>
                                    </Accordion.Panel>
                                </Accordion.Section>
                                {/* </Accordion>
                                <Accordion id="report-prep-acc"> */}
                                  <Accordion.Section id="report-prep-description">
                                     <Accordion.Title>
                                     Report preparation
                                        </Accordion.Title>
                                        <Accordion.Panel>
                                         <p>
                                         During report preparation, the audit team prepares a full report of the audit.
                                         </p>
                                         <p>
                                         The length of an audit depends on the size of the worksite. Most audits take up to two days, but auditors can perform, and companies should invest in, longer audits if the worksite and workforce are large or if significant violations are found that require time to investigate. Audits triggered by a grievance or whistleblower complaint may take longer to investigate, particularly if they require intervention by law enforcement authorities.

                                         </p>
                                    </Accordion.Panel>
                                </Accordion.Section>
                               </Accordion>
            </div>
        </StaticData>
    );
};

export default en;
