import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains.png";
import genericImport from "../../../../../images/generic_import.png";
import electronics from "../../../../../images/electronics.jpg";
import minerals from "../../../../../images/minerals.jpg";
import seafood from "../../../../../images/seafood.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Supply Chain Mapping</h1>
                <p>
                    Companies know who their direct suppliers are and where they are located.
                    However, in many cases, companies source from vendors or agents who do not
                    disclose the factories or other production facilities from which they in turn source.
                    Oftentimes companies may be aware of the first-tier factories and production facilities
                    in their supply chains, but know little or nothing about the practices of second, third
                    and other tiers of suppliers down the line.  Companies should know as much as possible
                    about who supplies to them—at all levels of the supply chain, including upstream producers
                    of raw materials.  The more comprehensively a company can map its supply chains, the more
                    accurately it can identify those places along the chain with the greatest risks of labor abuses.
                    It is therefore important to communicate with the company’s sourcing and/or supply chain management
                    teams to obtain data about their own supply chains, and if more information is needed, to work closely
                    with them to supplement that data.
                </p>
                <p>
                    If a company does not have access to information
                    about suppliers beyond those from whom it sources directly,
                    consider working with the legal department and/or other
                    appropriate units in the company to create contractual
                    requirements for disclosing comprehensive information about
                    all of the suppliers.
                </p>
                <p>
                    &ldquo;Mapping&rdquo; includes knowing not only who your
                    suppliers are (throughout the supply chain), but also where
                    they are located. This information is essential for risk and
                    impact assessment related to legal and regulatory
                    environments, among other things. This exercise may also
                    include maps showing seasonality of production or production
                    cycles throughout the year, as these may be tied to times of
                    greater risk for labor abuses.&nbsp;
                </p>
                <p>
                    Goods produced using agricultural or mineral commodities can be particularly
                    difficult to trace, since the raw materials are harvested or mined in widely
                    dispersed geographic areas and aggregated or co-mingled early in the supply chain.
                    Some companies and industry coalitions have attempted
                    &ldquo;traceability&rdquo; programs to
                    track certain commodities from a finished product
                    back through the supply chain to their point of origin.
                </p>
                <p>
                    To be clear, mapping supply chains does not necessarily
                    imply that a company is responsible for all impacts and
                    risks associated with every entity in the chain. As stated
                    in the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                        title="United Nations Guiding Principles on Business and Human Rights"
                    >
                        United Nations Guiding Principles on Business and Human
                        Rights
                    </a>
                    , &ldquo;where business enterprises have large numbers of
                    entities in their value chains it may be unreasonably
                    difficult to conduct due diligence for adverse human rights
                    impacts across them all. If so, business enterprises should
                    identify general areas where the risk of adverse human
                    rights impacts is more significant, whether due to certain
                    suppliers&rsquo; or clients&rsquo; operating context, the
                    particular operations, products or services involved, or
                    other relevant considerations, and prioritize those for
                    human rights due diligence.&rdquo; This prioritization
                    process is addressed below.
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

                                This graphic illustrates the various players in
                                a cocoa supply chain, which include farmers;
                                collectors/transporters; processors; exporters;
                                the global market; manufacturers (which may also
                                manufacture other beans); customers; which include retail outlets, restaurants,
                                and small businesses purchasing products to sell;
                                and final consumers. The graphic also lists examples of
                                entities and activities that fall into those
                                supply chain categories in two countries:
                                C&ocirc;te d&rsquo;Ivoire and Ghana. In
                                C&ocirc;te d&rsquo;Ivoire, examples of farmers
                                include small, family farms (&gt;750,000);
                                independent operations; and a few cooperatives
                                (where cocoa is &lt;20% of crop). Collectors and transporters include privately-funded
                                operators; and pisteurs (middlemen who purchase directly from farms) and traitants
                                (cocoa buyers purchasing from pisteurs).  Processors and exporters include
                                various participants, including international companies. This includes those
                                that produce semi-finished goods. In Ghana,
                                examples of farmers include small, family farms
                                (&gt;600,000); independent operations; and a few
                                cooperatives (where cocoa is &lt;10% of crop).
                                The initial purchase of cocoa beans is by
                                licensed buyers (LBCs). The Ghana Cocoa Board
                                (COCOBOD) and affiliated organizations ensure
                                that quality requirements are linked to sales.
                                Processors and exporters in Ghana include
                                COCOBOD and international companies. This
                                includes those that produce semi-finished goods.
                                The graphic lists similar final steps in the process
                                for both countries.  Beans and small family farm products
                                are moved into the global market to manufacturers, which take
                                the raw good and transform it into an end product for consumers
                                (e.g. cocoa beans into chocolate bars).  Retail outlets, restaurants
                                and small businesses serve as initial point of sale and point of
                                service customers.  And secondary consumers are the final customer,
                                for example an individual purchasing a chocolate bar from a grocery
                                store (point of sale) or a piece of chocolate cake from a restaurant (point of service).


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
                        The graphics above illustrates the general steps in the supply chain for the electronics industry,
                        which sources many rare earth metals from the Central African nation of the Democratic Republic of
                        the Congo (DRC).  Although design and development on consumer electronics takes place often near the
                        locations of end users, such as in the United States, the sourcing of materials often begins halfway
                        around the world in Central Africa.  These mined materials are then delivered overland to ports on the coast of
                         East Africa.  Traveling by boat, the materials are delivered to smelters in East and Southeast Asia, where the
                         smelters refine the materials and convert the materials into usable components for the manufactures
                         that are based both in the region and also in Europe and North America.

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
                      The structure of every supply chain in the seafood sector takes a similar path from the fisher 
                      to the end buyer; however, there are often many variations along the way. Furthermore, the end 
                      user in a seafood supply chain is very diverse, including points of service (e.g., restaurants, 
                      hotels, hospitals, and schools) and points of sale (e.g. retail outlets among others). With 
                      respect to wild caught seafood, fleets of vessels may coordinate with a “mother ship” to 
                      aggregate the daily catch. Upon delivery of this catch to land, the seafood is either delivered 
                      to a primary processor or to the open market. The primary processor receives the seafood and 
                      processes it for further sale to retailers or foodservice distributors who move it to end users. 
                    </p>
                    <p>
                    Seafood sold into these more formal markets entail many permutations with a variety of mid-chain 
                    players from primary processors to secondary processors to dealers to transporters among others 
                    with each playing a role to move the product closer to the point of final sale.
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
