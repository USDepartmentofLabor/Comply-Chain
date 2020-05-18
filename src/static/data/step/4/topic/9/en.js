import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const en = () => {
    return (
        <StaticData>
            <h1>Key Information Related to Risk and Impact</h1>
            <div>
                <p>
                Following this initial research, the company should engage
                relevant stakeholders in gathering additional information
                about risks. The company should seek input from a range of
                groups, and put in place processes that allow for
                communication across language and other barriers.
            </p>
            <p>
                There may be situations where consultation with certain
                stakeholder groups is not possible, or where consultation
                did not yield all of the information you need. In these
                cases, experts from academic institutions, corporate social
                responsibility consultancies and NGOs can be engaged to
                assist with risk and impact assessment.
            </p>
            <p>What information are you looking for?</p> </div>
              <Accordion id="cocoa-chains-acc">
                                 <Accordion.Section id="cocoa-description">
                                     <Accordion.Title>
                                     Nature and prevalence
                                 </Accordion.Title>
                                 <Accordion.Panel>

                                     <p className="indent-margin">
                                         Are child labor, forced labor and other labor abuses known
                                         or believed to occur in your geographic areas (or potential
                                         areas) of sourcing? What kind of work is being done? Where
                                         are abuses most often found?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                               <Accordion id="cocoa-chains-acc">
                                                 <Accordion.Section id="cocoa-description">
                                         <Accordion.Title>
                                          Root causes
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                         <p className="indent-margin">
                                             If child labor, forced labor and other labor abuses exist,
                                             what are the root causes?
                                         </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>
                                 </Accordion>
                             <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Industry structure
                                 </Accordion.Title>
                                 <Accordion.Panel>

                                     <p className="indent-margin">
                                         How does this industry operate in the country? Are
                                         workplaces formal or informal? Are employment relationships
                                         formalized? Are there elements of production that are
                                         subcontracted? If so, is some production outsourced to
                                         homes?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                             <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Labor population
                                     </Accordion.Title>
                                     <Accordion.Panel>

                                     <p className="indent-margin">
                                         What are the characteristics of the labor force in this
                                         industry in this geographic area? Is there significant
                                         reliance on subcontracted, unskilled temporary and/or
                                         migrant workers? If so, do these workers typically speak the
                                         language of the area? Are workers predominantly of one
                                         gender or another? Is there a particular age group commonly
                                         hired?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>

                             <Accordion id="cocoa-chains-acc">
                                               <Accordion.Section id="cocoa-description">
                                                  <Accordion.Title>
                                                  Industrial relations
                                                     </Accordion.Title>
                                                     <Accordion.Panel>

                                                     <p className="indent-margin">
                                                     Is a national legal and institutional framework in place to
                                                     allow for effective industrial relations and collective
                                                     bargaining? Are effective labor unions present? If not, are
                                                     there other mechanisms in place for workers to have a voice
                                                     in their workplaces?
                                                 </p>
                                                 </Accordion.Panel>
                                             </Accordion.Section>
                                             </Accordion>

                               <Accordion id="cocoa-chains-acc">
                                    <Accordion.Section id="cocoa-description">
                                       <Accordion.Title>
                                      Social protection
                                          </Accordion.Title>
                                          <Accordion.Panel>

                                          <p className="indent-margin">
                                              Is there a social safety net in the country that protects
                                              the most vulnerable&mdash;providing, among other things,
                                              access to health care, income security for the elderly and
                                              persons with disabilities, child benefits, and income
                                              security for the unemployed and working poor? Are there
                                              sufficient educational institutions to educate children
                                              until they reach legal working age?
                                          </p>
                                      </Accordion.Panel>
                                  </Accordion.Section>
                                  </Accordion>
                             <Accordion id="cocoa-chains-acc">
                                        <Accordion.Section id="cocoa-description">
                                           <Accordion.Title>
                                          Legal and regulatory environment
                                              </Accordion.Title>
                                              <Accordion.Panel>

                                              <p className="indent-margin">
                                                  What are the key laws and regulations concerning child
                                                  labor, forced labor and other labor issues in this
                                                  country/jurisdiction? Do those laws and regulations apply to
                                                  migrant workers? What laws exist concerning corporate
                                                  complicity in human rights abuse? To what extent are laws
                                                  enforced and is there evidence of corruption tied to lack of
                                                  enforcement?
                                              </p>
                                          </Accordion.Panel>
                                      </Accordion.Section>
                                      </Accordion>
                             <Accordion id="cocoa-chains-acc">
                                        <Accordion.Section id="cocoa-description">
                                           <Accordion.Title>
                                         Existing Initiatives and Organizations
                                              </Accordion.Title>
                                              <Accordion.Panel>

                                              <p>
                                                  What efforts are being undertaken, and by whom, to combat
                                                  labor abuses such as child and forced labor in this industry
                                                  or area?
                                              </p>

                                              <p>
                                                  To get a sense for how this general approach can be applied
                                                  in a particular sector, the{" "}
                                                  <a
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      href="http://www.responsiblesourcingtool.org/download/seafood/SF_Tool_04.pdf"
                                                      title="Responsible Sourcing Seafood Tool 4: Information Gathering and Risk Assessment in Seafood Supply Chains"
                                                  >
                                                      Responsible Sourcing Seafood Tool 4: Information
                                                      Gathering and Risk Assessment in Seafood Supply Chains
                                                  </a>{" "}
                                                  takes a step-by-step approach to examining country-based
                                                  risks, supply chain-based risks, and supplier-based
                                                  risks.&nbsp;
                                              </p>
                                          </Accordion.Panel>
                                      </Accordion.Section>
                                      </Accordion>
                                       <Accordion id="cocoa-chains-acc">
                                             <Accordion.Section id="cocoa-description">
                                                <Accordion.Title>
                                               Market Data
                                                   </Accordion.Title>
                                                   <Accordion.Panel>

                                                   <p className="indent-margin">
                                                      <b>PLACEHOLDER FOR TEXT </b>
                                                   </p>
                                               </Accordion.Panel>
                                           </Accordion.Section>
                                           </Accordion>
                                           <br />
                                           <ExampleInAction id="med_rep">
                                           <h2>
                                               <ExampleInAction.Icon alt="Lightbulb"/>
                                               <strong>
                                                   Example in Action: Fishing and Seafood
                                               </strong>
                                           </h2>
                                           <p>
                                           Child labor and forced labor are used to catch and process fish and seafood in a range of aquatic environments around the
                                           world. The isolated nature of work on waters presents a number of challenges to child labor and forced labor law
                                           enforcement in fishing and seafood. The
                                           <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                                              title="United Nations Convention on the Law of the Sea"
                                          >
                                              United Nations Convention on the Law of the Sea
                                          </a> is the leading international
                                           instrument on the issue of maritime law at sea. The Convention distinguishes between different maritime areas—territorial
                                           sea, Exclusive Economic Zones, and the high seas—and countries’ ability to regulate activities within each of these. These
                                           maritime boundaries add an additional layer of complexity to enforcing labor laws on fishing vessels. The country with its
                                           flag on a fishing vessel generally has the responsibility for regulating labor conditions on that vessel. However, when flagging
                                           states are unable or unwilling to enforce labor laws on their vessels, workers can become increasingly vulnerable to
                                           exploitation. While ships may not change their flags during a voyage, vessels have been known to use so-called flags of
                                           convenience, or the flag of a state other than that of the vessel’s owner, to avoid financial or regulatory charges in that state,
                                           as well as to subject themselves to a state’s labor regime they deem beneficial. Enforcement, prosecution, and restitution
                                           efforts are further complicated when vessels operate within the territorial jurisdiction of another state. </p>
                                           <p>Illegal, unreported, and unregulated (IUU) fishing has become an ever- growing problem. IUU fishing depletes global seafood
                                           stocks and creates unfair competition within the seafood industry, including by exploiting workers. Governments have been
                                           increasing efforts related to IUU fishing. For example, under its IUU regulation, the European Union has issued preidentifications, better known as “yellow cards”, to countries that it deems are not doing enough to combat IUU fishing.
                                           Issuance of a yellow card initiates a formal dialogue with the government in question regarding corrective measures. The U.S.
                                           government is also taking action to address IUU fishing: a Presidential Task Force on Combatting IUU Fishing released an&nbsp;
                                           <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                                              title="Action Plan for Implementing Task Force Recommendations"
                                          >
                                              Action Plan for Implementing Task Force Recommendations
                                          </a>
                                         , under which the United States is developing a Seafood
                                           Traceability Program.
                                           </p>
               </ExampleInAction> <br />
               <OwnWords>
                                          <h4>
                                              <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                                              {": "}
                                          </h4>
                                          <p>
                                              Key Risk Factors for Labor Rights Violations
                                              The U.S. Government’s Overseas Private Investment Corporation (OPIC) has processes in place to ensure that projects
                                              receiving OPIC support are environmentally and socially sustainable. Certain OPIC-funded projects are classified as “Special
                                              Consideration” based on a screening of labor-related factors.</p>
                                             <p> “Special Consideration projects are considered to have heightened potential for adverse project-related social risks
                                              associated with the involvement of or impact on Project Affected People including Workers. Projects may be classified as
                                              Special Consideration based on an assessment of the severity of possible social risks, and their relevance to a project.</p>
                                              <p>Key risk factors that are taken into consideration may include:
                                              <ul>
                                             <li> Industry or sector: labor-intensive industries or sectors that are statistically more likely to infringe upon Labor Rights.</li>
                                              <li>Regional vulnerabilities: projects in countries (i) with a documented history of Labor Rights issues, (ii) having recently
                                              experienced conflict associated with Project Affected People, or (iii) with weak or compromised regulatory systems.</li>
                                              <li>Presence of vulnerable groups: (i) utilization or reliance to a large degree on large pools of sub-contracted, unskilled,
                                              temporary, and/or migrant Workers, including within the supply chain; (ii) project risks or impacts that fall
                                              disproportionately on Project Affected People who, because of their particular circumstances, may be disadvantaged or
                                              vulnerable, or (iii) sectors in which there is a high risk for the use of forced labor or child labor.</li>
                                             <li> Significant adverse impacts: (i) projects anticipated to have adverse impacts on a significant numbers of Workers, or (ii)
                                              projects that by their nature or footprint could cause or be anticipated to cause (or be complicit in) significant adverse
                                              Human Rights impacts.”</li>
                                              </ul></p>
                                          <p>    Source: U.S. Overseas Private Investment Corporation,
                                          <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.dfc.gov/sites/default/files/2019-08/final%20revised%20ESPS%2001132017(1).pdf"
                                              title="Environmental and Social Policy Statement"
                                          >
                                              Environmental and Social Policy Statement
                                          </a>.
                                          </p>
                                                          </OwnWords>
        </StaticData>
    );
};

export default en;
