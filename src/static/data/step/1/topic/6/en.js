import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import goodweave from "../../../../../images/goodweave.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Certification Programs</strong>
                </h1>
                <p>
                    Another option for developing social compliance programs is
                    to explore existing <strong>certification </strong>programs.
                    These programs certify products or processes against
                    established sets of standards; some of them confer a label
                    on certified products in order to directly reach consumers
                    and communicate that the product was produced under certain
                    conditions.
                </p>
                <p>
                    While there are few existing certification programs that
                    confer a &ldquo;child labor free&rdquo; or &ldquo;forced
                    labor free&rdquo; label, there are programs that include
                    child labor, forced labor and other labor issues in their
                    certification standards. For example, the Fair Trade program
                    is primarily aimed at ensuring a &ldquo;fair&rdquo; price
                    for producers at the bottom of the supply chain, but
                    producers must also meet child labor, forced labor and other
                    labor standards in order to earn the &ldquo;Fair
                    Trade&rdquo; certification. For more information, see the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.fairtrade.net/child-labour.html"
                    >
                        Fairtrade International
                    </a>{" "}
                    and{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.fairtradeusa.org/"
                        title="Fair Trade USA"
                    >
                        Fair Trade USA
                    </a>{" "}
                    toolkits.
                </p>
                <p>
                    Some certification programs aim to meet the standards of the{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.isealalliance.org/"
                        title="ISEAL Alliance"
                    >
                        ISEAL Alliance
                    </a>
                    , an association of organizations that develops guidance on
                    establishment and implementation of sustainability-related
                    standards.
                </p>
                <p>
                    At the same time, some certification programs&mdash;and
                    multi-stakeholder initiatives more broadly&mdash;have come
                    under criticism related to governance arrangements, such as
                    certification programs&rsquo; financing structures, balance
                    of power among members and mechanisms for holding members
                    accountable. Other criticism is related to implementation,
                    such as issues around inadequate or insufficient auditing
                    and inadequate stakeholder outreach. It is therefore
                    important to understand the structure of particular programs
                    in order to assess how they will be viewed by different
                    stakeholders.&nbsp;
                </p>
                <ExampleInAction id="clt">
                    <h2>
                        <ExampleInAction.Icon />
                        <strong>Example in Action: Goodweave</strong>
                    </h2>

                    <p>
                        For over 20 years,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodweave.org/"
                            title="GoodWeave"
                        >
                            GoodWeave
                        </a>{" "}
                        has been working to transform the carpet industry by
                        encouraging market demand for child-labor free rugs and
                        helping businesses to meet that demand. Rug importers
                        and exporters that wish to be licensed by GoodWeave and
                        earn a consumer-facing GoodWeave label must sign a
                        legally binding contract to abide by GoodWeave&rsquo;s
                        rigorous standard for certifying that rugs are free from
                        child labor, forced labor, and bonded labor. As part of
                        the certification program, companies agree to permit
                        unannounced inspections in their supply chains to
                        monitor for compliance with the standard and ensure that
                        violations are remediated. Companies also pay licensing
                        fees that support GoodWeave&rsquo;s programs for
                        monitoring and inspection of workplaces and the
                        rehabilitation and education of exploited children.
                        GoodWeave is a full member of the International Social
                        and Environmental Accreditation and Labeling (ISEAL)
                        Alliance, an association widely known as a world leader
                        in establishing best practices for certification
                        standards. In the past few years, GoodWeave has expanded
                        the reach of its program beyond the carpet industry in
                        India, to new sectors and countries, including the brick
                        kilns of Nepal, apparel factories in India, and
                        home-based carpet production in Afghanistan (the latter
                        through a DOL-funded project).
                    </p>
                    <p>
                        Learn more about the DOL-funded{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.dol.gov/ilab/projects/summaries/Afghanistan_Carpets.pdf"
                            title="Project to Prevent Child Labor in Home-Based Carpet Production in Afghanistan"
                        >
                            <em>
                                Project to Prevent Child Labor in Home-Based
                                Carpet Production in Afghanistan
                            </em>
                        </a>
                        <em>, </em>implemented by GoodWeave.
                    </p>
                    <img src={goodweave} alt="GoodWeave International" />
                    <p className="small-text">
                        &copy; Lorenzo Tugnoli courtesy of GoodWeave
                        International
                    </p>
                </ExampleInAction>

                <p>
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
                </p>
            </div>
        </StaticData>
    );
};

export default en;
