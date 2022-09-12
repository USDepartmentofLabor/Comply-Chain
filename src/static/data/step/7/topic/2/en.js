import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";
import apsca from "../../../../../../static/images/apsca.jpg";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>The Audit Team</h1>
                <h2>Personnel</h2>
                <p>Your social compliance team consists of social compliance staff at headquarters and the personnel in the field coordinating and carrying out audits. For companies with an internal audit program, the audit team members are company employees; for companies that use external auditors, the audit team members are hired auditors from outside entities (whether for-profit or non-profit firms). Some companies use both internal and external auditors, depending on the sector or location of the facility.</p>
                <p>All three auditing approaches below can be reliable and credible if they are well-managed by your social compliance team and operate within the framework of a comprehensive social compliance program. However, each approach has certain advantages and disadvantages.<br /><br /></p>
                 <Accordion id="int-auditors-acc">
                    <Accordion.Section id="int-auditors-description">
                       <Accordion.Title>
                       Internal auditors
                          </Accordion.Title>
                          <Accordion.Panel>
                          <p>Internal auditors are company employees who are trained in the skills and competencies of social auditing. One advantage of using internal auditors is that communication will likely be easier; for example, if there are changes in policy, it is easier to ensure consistency among your own staff than with hired external auditors. Internal auditors also may have a deeper understanding of the company&rsquo;s full social compliance program and potentially be able to make contributions to it beyond auditing. On the other hand, there are several limitations of using internal auditors. Given that internal auditors are company employees, some stakeholders may question the timing, objectivity, and credibility of their findings. Internal auditors may be sent from headquarters to operations around the world, including geographies with legal or social contexts that auditors may not be familiar with. In addition, internal auditors may not have specialized training in specific compliance areas such as labor standards.</p>
                      </Accordion.Panel>
                  </Accordion.Section>
                  {/* </Accordion>

                  <Accordion id="ext-auditors-acc"> */}
                      <Accordion.Section id="ext-auditors-description">
                         <Accordion.Title>
                         External auditors
                            </Accordion.Title>
                            <Accordion.Panel>

                            <p>External auditors are audit professionals with defined skills and competencies who are employed by social audit firms outside of a company. They are a flexible workforce and may be available in geographic locations where it is not cost-effective for a company to maintain internal auditors. Since external auditors are paid by the company to perform audits, some stakeholders may doubt the credibility of their findings. In addition, some external audit groups may have their own systems in place that cannot be fully adapted to match a company&rsquo;s own protocols or parameters. A business that relies on an independent or third party to either conduct or verify a self-initiated audit must also weigh and consider the particular entity that conducts the audit. A third party, independent auditor&rsquo;s status as such does not guarantee an absence of risk.</p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>
                        <Accordion id="independent-auditors-acc"> */}
                        <Accordion.Section id="independent-auditors-description">
                           <Accordion.Title>
                           Independent auditors/monitors
                              </Accordion.Title>
                              <Accordion.Panel>

                              <p>Independent auditors or monitors are audit professionals accredited by institutions or mechanisms, such as trade or professional organizations; their role is to ensure that auditing takes place while eliminating any direct financial transaction between the company and the auditor. Typically, a company pays a separate, independent institution for auditing services or for membership in that body. The institution accredits auditors under its established standards and is responsible for scheduling and oversight of all audits. While this is designed to increase the credibility of the audit, in some sectors or geographic locations, this type of arrangement may not be available. In addition, even without a direct financial transaction, some stakeholders may still have concerns about the degree of an auditor&rsquo;s independence from the audited entity. Varying degrees of independence exist, and independence ultimately needs to be judged on a case-by-case basis.</p>
                            <p>If a company opts to use internal or external auditors, it may be necessary to engage independent entities for certain roles within the social compliance system if they wish to ensure maximum effectiveness and credibility. See {" "}
                                  <Link to="/steps/7">Step 7, Independent Review</Link> for a larger discussion of independent monitoring and verification.</p>
                          </Accordion.Panel>
                      </Accordion.Section>
                      </Accordion>
                <h2>Auditor Competencies</h2>
                <p>Whether internal, external, or independent, all auditors must possess specific skills and knowledge in order to carry out audits effectively. In the past few years, several organizations have made efforts to formalize and document the standard skills and knowledge that an auditor should possess. For example, the <a target="_blank" rel="noopener noreferrer" href="http://www.theapsca.org/">Association of Professional Social Compliance Auditors (APSCA)</a> is a practitioner-led membership body that manages a certification process for social compliance auditors. Necessary knowledge includes a detailed understanding of international labor standards, industry production environments and processes, and local cultures and languages.&nbsp;</p>
                <p>It is important that auditors also be trained in specific protocols for handling sensitive situations involving children or adult victims of egregious exploitation. Auditors should be prepared to interact with children, and on behalf of children take measures that are age-appropriate. An auditing firm should also have procedures to ensure that victims of child labor or forced labor receive immediate care and services from qualified individuals or organizations.<br /><br /></p>
                <ExampleInAction id="better_work_assessment">
                                <h3>
                                    <ExampleInAction.Icon alt="Lightbulb"/>
                                    Example in Action: Association of Professional Social Compliance Auditors (APSCA)* Competency Framework
                                </h3>
                                <p><a target="_blank" rel="noopener noreferrer" href="https://www.theapsca.com/">APSCA</a>&rsquo;s Certified Social Compliance Auditor (CSCA) designation signifies that an individual demonstrates specific experience, knowledge, and skills within the field of social compliance auditing. Through a rigorous certification process&mdash;including experience, education, examination, and assessment&mdash;the CSCA candidate must demonstrate the core competencies relevant to the profession. Included below is APSCA&rsquo;s competency framework as reflected in foundational skills and functional knowledge areas.</p>
                                <p>Foundational skills:</p>
                                <ul>
                                    <li>Strategic and systems thinking</li>
                                    <li>Professional and ethical behavior</li>
                                    <li>Observation and investigation</li>
                                    <li>Data collection and analysis</li>
                                    <li>Problem solving and analytical decision making</li>
                                    <li>Management systems</li>
                                    <li>Documentation review</li>
                                    <li>Interview skills</li>
                                    <li>Communication, relationship management, and conflict resolution</li>
                                    <li>Self-management</li>
                                    <li>Standards, laws, and regulations</li>
                                </ul>
                                <p>Functional knowledge areas:&nbsp;</p>
                                <ul>
                                    <li>Business legitimacy and integrity of records</li>
                                    <li>Underage labor</li>
                                    <li>Discrimination and disciplinary practices</li>
                                    <li>Forced labor</li>
                                    <li>Working hours and overtime</li>
                                    <li>Freedom of association and effective recognition of the right to collective bargaining</li>
                                    <li>Harassment and abuse practices</li>
                                    <li>Wages, benefits, and terms of employment</li>
                                    <li>Subcontracting</li>
                                    <li>Occupational health and safety</li>
                                </ul>
                                <p>Source: APSCA, Competency Framework <a target="_blank" rel="noopener noreferrer" href="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf">https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf</a></p>
                            
                            </ExampleInAction>
                <h2>Team Composition</h2>
                <p>The size and composition of an audit team depends on the size and type of facility to be audited, the number of workers in the facility, and the nature of the workforce, including the languages and cultural composition of workers. If the facility is large and multiple languages are spoken, auditors who speak every language must be available. Gender of the workers is also an important consideration; for example, it is normally preferable for women to be interviewed by a woman to facilitate more comfortable discussions about issues such as sexual harassment.</p>
                <p>Many companies prefer that auditors be nationals of the countries where they will perform audits, because they know the culture, language, and customs of the country; hiring local auditors also contributes to sustainable local capacity-building.&nbsp;</p>
                <p>The team leader should ensure that the team functions interactively. Because violations can often be subtle or deliberately concealed from auditors, the team should not simply divide up work responsibilities; in many cases, more than one auditor should examine the same issues, and the team should come together to assess findings and ensure that connections and patterns are identified. The team should collectively agree on the final audit findings.<br /><br /></p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Example in Action: Better Work Assessment Teams
                    </h3>
                    <p>Better Work has several regulations in place for evaluation teams, requiring two &ldquo;enterprise advisors&rdquo; (auditors) to be present for each unannounced assessment. <a target="_blank" rel="noopener noreferrer" href="http://betterwork.org/our-work/factory-services">Better Work advisors</a> are hired locally and receive extensive training. A new advisor is always paired with a more experienced colleague, and no two advisors are paired on consecutive visits to a particular factory. Advisors conducting assessments for a particular factory are never the same individuals providing remediation and advisory services to that factory.</p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
