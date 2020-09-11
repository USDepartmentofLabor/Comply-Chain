import React from "react";
// import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
// import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
// import hrm from "../../../../../images/hrm.jpg";
// import panos from "../../../../../images/panos.jpg";
// import Accordion from "../../../../../../components/Accordion";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>The Reporting Team</h1>
                <p>
                    Planning for report production depends to some extent on how
                    often you report and in what form. A formal annual report
                    requires somewhat different skills from those required for
                    periodic web-based data updates, but both require
                    substantial investments of time and resources.
                </p>
                <p>
                    The social compliance team should designate a person to lead
                    the reporting process, with other team members assigned to
                    assist. That person will coordinate with the team but also
                    with the other business units throughout the company. Points
                    of contact throughout the company should be assigned to
                    provide input and review the report so that it reflects the
                    integration of social compliance throughout the entire company, 
                    including divisions one does not normally associate with social 
                    compliance, such as marketing and finance.
                </p>
                <p>
                    Other companies contract with an external service provider
                    to develop the report. Information is provided to the
                    service provider from relevant units within the company. The
                    risk of this approach is whether it will produce the same
                    quality and depth of collaboration during the development of
                    the report.
                </p>
                <p>
                    Some companies have external stakeholders who serve as
                    advisors to the team or as members of the team itself. In
                    this case, these should be individuals with experience and
                    expertise in social compliance, but who come from a
                    different background or perspective from that of the other
                    team members. In addition, it can be useful to have external
                    readers provide comments and feedback as the reporting is
                    developed; in the spirit of openness and transparency, some
                    companies have invited representatives of labor groups, NGOs
                    and other stakeholders to have excerpts of their comments
                    included in the published report itself, even where those
                    may be critical of some of the company&rsquo;s program.
                </p>
                <ExampleInAction id="nike">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Reporting as a small business
                        </strong>
                    </h2>
                    <p>
                        <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.uncommoncacao.com/company"
                                title="Uncommon Cacao"
                            >
                                Uncommon Cacao
                            </a>
                    
                    * is a small California-based company and registered {" "}
                    <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bcorporation.net/"
                                title="B Corporation"
                            >
                                B Corporation
                            </a> {" "}
                    
                     focused on the cacao supply chain that published its 
                    seventh annual {" "}
                    <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://indd.adobe.com/view/4afb053a-306c-4f52-8612-f77b23c7d466"
                                title="Transparency Report in 2018"
                            >
                                Transparency Report in 2018
                            </a>
                    
                    . Uncommon Cacao works with 
                    nearly 4,000 farmers through collectives in seven different 
                    cacao-producing countries, supplying more than 200 craft chocolatiers 
                    globally. The company&rsquo;s consistent public reporting on purchasing and 
                    sourcing information brings transparency to a sector that is sometimes 
                    lacking in these details and consistency. This reporting creates 
                    accountability for all stakeholders, enables consumers and producers 
                    to access real data, and establish pricing benchmarks all along the 
                    global cacao supply chain.
                    </p>
                    <p>
                    Source: {" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.uncommoncacao.com/company"
                                title="cacao company"
                            >
                                https://www.uncommoncacao.com/company
                            </a>.

                    </p>
                </ExampleInAction>
                {/* <p>
                    <em>
                        *Note: References to specific companies and
                        non-governmental entities within this guide are for
                        informational purposes only to demonstrate best
                        practices that have been recognized internationally, as
                        of the app&rsquo;s release date. Referencing the
                        entities should not be interpreted as an official
                        endorsement of those entities, their products, or
                        services by the U.S. Department of Labor{" "}
                    </em>
                    <em>
                        and their inclusion should not be interpreted as a
                        comprehensive review of these entities&rsquo; practices
                        in all areas
                    </em>
                    <em>.</em>
                </p> */}

            </div>
        </StaticData>
    );
};

export default en;
