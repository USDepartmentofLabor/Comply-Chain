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
            <p>
            Some companies take the approach of “outsourcing” the information-gathering
            function to an expert, such as a consulting firm, civil society group, or academic
            institution.  If you already have well-established relationships with suppliers and
            are seeking to assess their existing risks, audit reports done on these suppliers by
            other companies or groups afford a very useful source of data.  Obtaining them may
            require joining a group, such as the&nbsp;
            <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sedexglobal.com/"
                  title="Supplier Ethical Data Exchange (SEDEX)"
              >
            Supplier Ethical Data Exchange (SEDEX)
             </a>
             &nbsp;and&nbsp;
             <a
                   target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.sedexglobal.com/"
                   title="Supplier Ethical Data Exchange (SEDEX)"
               >
               Fair Factories Clearinghouse
               </a>
            , which provide a platform for sharing information on
            common suppliers and collaborating on monitoring and remediation efforts.
            </p>
            <p>
            When audit reports are not available, there are other ways to gather information on
            your current suppliers to determine which ones to target for further compliance efforts.
            Wherever a union exists, field grievances or complaints may be a good source of information
            on labor abuse risk factors.  Where there is no union, the supplier may have other grievance
            or complaint mechanisms in place that could be sources of information.  Another option, of course,
            is to survey all of your suppliers on the key risk factors listed above.
            </p>
            <p>What information are you looking for?</p> </div>
              <Accordion id="nature-prev-acc">
                   <Accordion.Section id="nature-prev-acc-description">
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
                               <Accordion id="root-causes-acc">
                                  <Accordion.Section id="root-causes-description">
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
                             <Accordion id="industry-structure-acc">
                               <Accordion.Section id="industry-structure-acc-description">
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
                             <Accordion id="labor-pop-acc">
                               <Accordion.Section id="labor-pop-acc-description">
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

                             <Accordion id="industry-rel-acc">
                               <Accordion.Section id="industry-rel-description">
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

                               <Accordion id="social-protection-acc">
                                    <Accordion.Section id="social-protection-description">
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
                             <Accordion id="legal-reg-env-acc">
                                        <Accordion.Section id="legal-reg-env-description">
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
                             <Accordion id="exist-init-org-acc">
                                        <Accordion.Section id="exist-init-org-description">
                                           <Accordion.Title>
                                         Existing Initiatives and Organizations
                                              </Accordion.Title>
                                              <Accordion.Panel>

                                              <p>
                                                  What efforts are being undertaken, and by whom, to combat
                                                  labor abuses such as child and forced labor in this industry
                                                  or area?
                                              </p>

                                          </Accordion.Panel>
                                      </Accordion.Section>
                                      </Accordion>
                                       <Accordion id="market-data-acc">
                                             <Accordion.Section id="market-data-description">
                                                <Accordion.Title>
                                               Market Data
                                                   </Accordion.Title>
                                                   <Accordion.Panel>

                                                   <p className="indent-margin">
                                                      What are the high spend categories, such as essential raw materials
                                                      or vital components, within your operations that are most at-risk,
                                                      and thus pose an outsized impact given any disruptions?  Do other
                                                      companies within your industry disclose particular supplier lists or
                                                      sourcing information that you can incorporate into your risk assessment and analysis?
                                                   </p>
                                               </Accordion.Panel>
                                           </Accordion.Section>
                                           </Accordion>
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
                                           enforcement in fishing and seafood. The&nbsp;
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
                                           efforts are further complicated when vessels operate within the territorial jurisdiction of another state.
                                           </p>
                                           <p>
                                           Illegal, unreported, and unregulated (IUU) fishing has become an ever-growing problem.  IUU fishing evades regulations, undermines
                                           fisheries management and conservation, and endangers the world food supply.  It exacerbates exploitative labor practices, which may
                                           have a negative impact on wages and working conditions of all fishers.  IUU fishing may also involve forced labor and human trafficking,
                                           and child labor.  Governments have been increasing efforts related to IUU fishing.  For example, the European Union regulation to end IUU
                                           fishing requires countries that export fish to the EU or lend their flags to vessels that import into the EU meet strict standards for
                                           fisheries management.  If these standards are not met, the countries may be ‘carded,’ which means that they could ultimately face exclusion
                                           of their fish from the EU market.
                                           </p>
                                           <p>
                                            The U.S. Government is also taking action to address IUU fishing.  In 2019, the United States Congress passed the Maritime SAFE Act.
                                            This law created an interagency working group to provide federal agencies with a coordinated framework to counter IUU fishing and
                                            authorized a range of agency activities.  These activities include building capacity for law enforcement and port security, improving
                                             transparency and traceability in the seafood supply chain, promoting the use of technology to counter IUU fishing, and encouraging better
                                              information sharing among agencies and other organizations.
                                           </p>
                                           <p>Prior to the Maritime SAFE Act, a Presidential Task Force on Combatting IUU Fishing released an&nbsp;
                                           <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                                              title="Action Plan for Implementing Task Force Recommendations"
                                          >
                                              Action Plan for Implementing Task Force Recommendations
                                          </a>
                                         , under which the United States is developing a Seafood
                                           Traceability Program. This traceability program, known as Seafood Import Monitoring Program,
                                           or SIMP, requires the U.S. importer of record to provide and report key data—from the point of
                                           harvest to the point of entry into U.S. commerce—on thirteen imported fish and fish products
                                           identified as vulnerable IUU fishing and/or seafood fraud.  Compliance became effective at the end of 2018.
                                           </p>
                                           <p>
                                           Source:&nbsp;
                                           <a
                                                 target="_blank"
                                                 rel="noopener noreferrer"
                                                 href="http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                                             >
                                           http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf
                                           </a>.
                                           </p>
                                           <p>
                                           Source:&nbsp;
                                           <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                                            >
                                           https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf
                                           </a>.
                                           </p>
                                           <p>
                                          Source:&nbsp;
                                          <a
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               href="https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program"
                                           >
                                           https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program
                                           </a>.
                                           </p>
               </ExampleInAction> <br />
               <OwnWords>
                                          <h4>
                                              <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words
                                              {": "}Key Risk Factors for Labor Rights Violations</strong>
                                          </h4>
                                          <p>
                                              Certain projects funded by the U.S. International Development Finance Corporation (DFC),
                                              the successor to the Overseas Private Investment Corporation (OPIC), are classified as
                                              “Special Consideration” based on a screening of labor-related factors.
                                              </p>
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
                                          <p>  Source: U.S. International Development Finance Corporation,&nbsp;
                                          <a
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              href="https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf"
                                              title="Environmental and Social Policy Statement 2020."
                                          >
                                              Environmental and Social Policy and Procedures
                                          </a>, 2020 at https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf
                                          </p>
                                                          </OwnWords>
        </StaticData>
    );
};

export default en;
