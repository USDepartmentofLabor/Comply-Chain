import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains.png";
import electronics from "../../../../../images/electronics.jpg";
import minerals from "../../../../../images/minerals.jpg";
import seafood from "../../../../../images/seafood.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Supply Chain Mapping</h1>
                <p>
                    Companies often may be aware of the first-tier factories and production facilities in their supply chains but know little or nothing about the practices of second, third, and other tiers of suppliers in their supply chains, in addition to the various agents, vendors, or contractors that may also play a role. Companies should know as much as possible about who supplies to them at all levels of the supply chain, including upstream producers of raw materials. The more comprehensively a company can map its supply chains, the more accurately it can identify those places along the chain with the greatest risks of labor abuses. It is therefore important to communicate with the company&rsquo;s sourcing and supply chain management teams to obtain data about their own supply chains and to work closely with them to supplement that data if needed.
                </p>
                <p>
                    If your company currently does not have access to information about suppliers beyond those from whom it sources directly, you should work with the legal department or other appropriate units in the company to create contractual requirements for disclosing comprehensive information about suppliers at all tiers. At a minimum, companies should collect information on the locations where suppliers operate and source raw materials, labor laws in those jurisdictions, and suppliers&rsquo; labor policies. ILAB&rsquo;s annual
                    <em>
                        Findings on the Worst Forms of Child Labor
                    </em>
                    report details the legal framework for more than 130 countries and can help you determine whether a country&rsquo;s legal framework meets international standards.
                </p>
                <p>
                    &ldquo;Mapping&rdquo; includes knowing who your suppliers are throughout the supply chain, where they are located, and how those locations may evolve over time. This information is essential for risk and impact assessment related to legal and regulatory environments, among other things. Regular maintenance of supply chain data keeps this information accurate and, in turn, reduces risks that may emerge from outdated information on suppliers. This exercise may also include maps showing seasonality of production or production cycles throughout the year, as these may be tied to times of greater risk for labor abuses.
                </p>
                <p>
                    Goods produced using agricultural or mineral commodities can be particularly difficult to trace, since the raw materials are harvested or mined in widely dispersed geographic areas and aggregated or comingled early in the supply chain. Some companies and industry coalitions have implemented &ldquo;traceability&rdquo; programs to track certain commodities from a finished product back through the supply chain to their point of origin.
                </p>
                <p>
                    On January 8, 2019, the Frederick Douglass Trafficking Victims Prevention and Protection Reauthorization Act of 2018 (Public Law 115&ndash;425, title I, &sect; 133(a), Jan. 8, 2019, 132 Stat. 5481) directed that ILAB&rsquo;s
                    <em>
                        List of Goods Produced by Child Labor or Forced Labor
                    </em>
                    include &ldquo;to the extent practicable, goods that are produced with inputs that are produced with forced labor or child labor.&rdquo; As part of this mandate, ILAB has explored several case studies to map supply chains for various supply chains, including from cobalt to lithium-ion batteries, from palm oil to oleochemicals, and from polysilicon to solar products.
                </p>
                <p>
                    To be clear, mapping supply chains does not necessarily imply that a company is responsible for all impacts and risks associated with every entity in the chain. As stated in the
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=un+guiding+principles+on+business+and+human+rights&amp;rlz=1C1GCEA_enUS976US977&amp;oq=un+guiding+princ&amp;aqs=chrome.1.69i57j69i59j69i60l3j69i65l2j69i60.2263j0j4&amp;sourceid=chrome&amp;ie=UTF-8">
                        UN Guiding Principles on Business and Human Rights
                    </a>
                    UN Guiding Principles on Business and Human Rights, &ldquo;where business enterprises have large numbers of entities in their value chains it may be unreasonably difficult to conduct due diligence for adverse human rights impacts across them all. If so, business enterprises should identify general areas where the risk of adverse human rights impacts is more significant, whether due to certain suppliers&rsquo; or clients&rsquo; operating context, the particular operations, products or services involved, or other relevant considerations, and prioritize those for human rights due diligence.&rdquo; This prioritization process is addressed below.
                </p>
                <p>
                    The following are three examples of supply chain maps:
                </p>
                       <Accordion id="cocoa-chains-acc">
                              <Accordion.Section id="cocoa-description">
                              <Accordion.Title>
                              Cocoa Supply Chains (Cote D'Ivoire and Ghana)
                          </Accordion.Title>
                          <Accordion.Panel>
                              <img
                              src={cocoaSupplyChains}
                              alt="Cocoa Supply Chains"
                              longdesc="#cocoa_chains"
                              />
                          <p className="small-text">
                              Source:{" "}
                              <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="http://www.crea.org/"
                              >
                                  Center for Reflection, Education and Action (CREA).
                              </a>
                            </p>
                             <div id="cocoa_chains">

                             <p>
                                This graphic illustrates the various players in a cocoa supply chain, which include farmers; collectors/transporters; processors; exporters; the global market; manufacturers (that may also manufacture other beans); customers, which includes retail outlets, restaurants, and small businesses purchasing products to sell; and final consumers. The graphic also lists examples of entities and activities that fall into those supply chain categories in two countries: C&ocirc;te d&rsquo;Ivoire and Ghana.&nbsp;
                            </p>
                            <p>
                                In C&ocirc;te d&rsquo;Ivoire, examples of farmers include small, family farms (more than 750,000); independent operations; and a few cooperatives (where cocoa is less than 20% of crop). Collectors and transporters include privately funded operators; and
                                <em>
                                    pisteurs
                                </em>
                                (middlemen who purchase directly from farms) and
                                <em>
                                    traitants
                                </em>
                                (cocoa buyers purchasing from
                                <em>
                                    pisteurs
                                </em>
                                ). Processors and exporters include various participants, including international companies, and includes those that produce semi-finished goods.&nbsp;
                            </p>
                            <p>
                                In Ghana, examples of farmers include small, family farms (more than 600,000); independent operations; and a few cooperatives (where cocoa is less than 10% of crop). The initial purchase of cocoa beans is by licensed buyers (LBCs). The Ghana Cocoa Board* (COCOBOD) and affiliated organizations ensure that quality requirements are linked to sales. Processors and exporters in Ghana include COCOBOD and international companies, and includes those that produce semi-finished goods. The graphic lists similar final steps in the process for both countries. Beans and small family farm products are moved into the global market to manufacturers, which take the raw good and transform it into an end product for consumers (e.g., cocoa beans into chocolate bars). Retail outlets, restaurants, and small businesses serve as initial points of sale and points of service for customers. Secondary consumers are the final customer; for example, an individual purchasing a chocolate bar from a grocery store (point of sale) or buying a piece of chocolate cake from a restaurant (point of service).&nbsp;
                                <br />
                                <br />
                            </p>




                                            </div>
                          </Accordion.Panel>
                      </Accordion.Section>
                     { /*</Accordion>
                    <Accordion id="electronic-supply-chain">*/}
                        <Accordion.Section id="electronic-supply-chain-description">
                            <Accordion.Title>
                            Electronics Supply Chains
                        </Accordion.Title>
                        <Accordion.Panel>
                        <img
                              src={electronics}
                              alt="Electronics Supply Chains"
                              longdesc="#electronics_chains"
                              />
                        <img
                              src={minerals}
                              alt="DRC Minerals Supply Chains"
                              longdesc="#minerals_chains"
                              />
                        <p className="small-text">
                        The graphics above illustrate the general steps in the supply chain for the electronics industry, which sources many rare earth metals from the Democratic Republic of the Congo (DRC) in Central Africa. Although the design and development of consumer electronics often take place near the locations of end users, such as in the United States, the sourcing of materials often begins halfway around the world in Central Africa. These mined materials are then delivered over land to ports on the coast of East Africa. Traveling by boat, the materials are then delivered to smelters in East and Southeast Asia, where the smelters refine the materials and convert them into usable components for the manufacturers that are based both in the region and also in Europe and North America.

                          </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                   {/* </Accordion>

                  <Accordion id="generic-imp-supply">*/}
                      <Accordion.Section id="generic-imp-description">
                          <Accordion.Title>
                          Seafood Supply Chain
                      </Accordion.Title>
                      <Accordion.Panel>
                          <br />
                      <img
                              src={seafood}
                              alt="Seafood Supply Chains"
                              longdesc="#seafood_chains"
                              />
                     <p>
                        The structure of every supply chain in the seafood sector takes a similar path from the fisher to the end buyer; however, there are often many variations along the way. Furthermore, the end user in a seafood supply chain is very diverse, including points of service (e.g., restaurants, hotels, hospitals, and schools) and points of sale (e.g., retail outlets, among others). With respect to wild caught seafood, fleets of vessels may coordinate with a &ldquo;Mothership&rdquo; to aggregate the daily catch. Upon delivery of this catch to land, the seafood is either delivered to a primary processor or to the open market. The primary processor receives the seafood and processes it for further sale to retailers or foodservice distributors who move it to end users.
                    </p>
                    <p>
                        Seafood sold into formal markets passes through a variety of mid-chain players from primary processors to secondary processors to dealers to transporters, among others.
                    </p>


                    <p>
                    Source: {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.resolve.ngo/site-eiscm/default.htm?RD=1"
                        title="Resolve NGO"
                    >
                        https://www.resolve.ngo/site-eiscm/default.htm?RD=1
                    </a>.  
                    </p>

                      </Accordion.Panel>
                  </Accordion.Section>
                  </Accordion>
            </div>
        </StaticData>
    );
};

export default en;
