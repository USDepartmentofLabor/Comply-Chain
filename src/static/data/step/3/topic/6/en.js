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
                        href="https://www.fairtradecertified.org"
                        title="Fair Trade Certified"
                    >
                        Fair Trade Certified
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
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>Example in Action: Goodweave</strong>
                    </h2>

                    <p>
                        For 25 years,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodweave.org/"
                            title="GoodWeave"
                        >
                            GoodWeave
                        </a>{" "}
                        has worked to stop child labor in global supply chains.
                        GoodWeave encourages market demand for child-labor free certified
                        rugs and home textiles, and helps businesses to meet that demand.
                        Importers and exporters that wish to be licensed by GoodWeave and
                        earn a consumer-facing GoodWeave label, must sign a legally binding
                        contract to abide by GoodWeave’s rigorous standard for certifying that
                        products are free from child, forced and bonded labor.  As part of the
                        certification program, companies agree to permit unannounced inspections
                        in their supply chains to monitor for compliance with the standard and
                        ensure that violations are remediated.  Companies also pay licensing fees
                        that support GoodWeave’s programs for monitoring and inspection of workplaces,
                        and the rehabilitation and education of exploited children.  GoodWeave is a full
                        member of the International Social and Environmental Accreditation and Labeling
                        (ISEAL) Alliance, an association widely known as a world leader in establishing best
                        practices for certification standards.
                    </p>
                    <p>
                        With over 170 brand partners and 25% of international market share, GoodWeave
                        has transformed South Asia’s handmade carpet sector through its market-based
                        model, where child labor has dropped from one million victims in 1995 to an
                        estimated 200,000 today.  GoodWeave is now expanding its successful model to
                        home textiles, apparel, fashion accessories and other sectors.
                        Visit&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodweave.org/"
                        >
                        goodweave.org
                        </a>
                        &nbsp;to learn more.
                    </p>
                    <p>
                        Learn more about the DOL-funded{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.dol.gov/agencies/ilab/project-prevent-child-labor-home-based-carpet-production-afghanistan"
                            title="Project to Prevent Child Labor in Home-Based Carpet Production in Afghanistan"
                        >
                            <em>
                                Project to Prevent Child Labor in Home-Based
                                Carpet Production in Afghanistan
                            </em>
                        </a>
                        <em>, </em>implemented by GoodWeave, at https://www.dol.gov/agencies/ilab/project-prevent-child-labor-home-based-carpet-production-afghanistan.
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
