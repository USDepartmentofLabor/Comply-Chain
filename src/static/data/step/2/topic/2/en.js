import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";
import betterwork from "../../../../../../static/images/betterwork.jpg";
import { Link } from "react-router-dom";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Joining an Existing Social Compliance System</h1>
                <p>
                                    In some industries, groups of companies have
                                    already come together to develop joint
                                    social compliance systems&mdash;or in some
                                    cases, system components&mdash;that
                                    individual companies can adopt. Joining such
                                    networks usually entails a commitment of
                                    time and resources to collaborate with other
                                    companies, but ultimately may save effort
                                    and resources by capitalizing on other
                                    companies&rsquo; insights and experiences.
                                    It is important to learn about the
                                    initiatives that exist in your industry
                                    before deciding to either join an existing
                                    program or develop your own.
                                </p>
                                <ExampleInAction id="better-work-garment">
                                    <h4>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>Example in Action</strong>
                                        {": "}
                                        <em>
                                            <strong>Better Work</strong>
                                        </em>{" "}
                                        Program in the Garment Industry{" "}
                                    </h4>
                                    <p>
                                        The{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="http://betterwork.org/"
                                            title="Better Work"
                                        >
                                            Better Work
                                        </a>{" "}
                                        program, a joint initiative of the
                                        International Labor Organization (ILO)
                                        and the International Finance
                                        Corporation (IFC), is designed to
                                        improve labor practices and productivity
                                        in the apparel sector.{" "}
                                        <em>Better Work</em> is a transparent
                                        factory monitoring program conducted by
                                        a credible monitor (the ILO) in
                                        participating countries. The ILO&rsquo;s
                                        locally recruited enterprise advisors
                                        visit factories to assess compliance
                                        with core labor standards&mdash;on
                                        freedom of association and collective
                                        bargaining, employment discrimination,
                                        child labor and forced labor&mdash;as
                                        well as national laws on compensation,
                                        contractor and workplace relations,
                                        occupational safety and health, and
                                        working hours. <em>Better Work</em>{" "}
                                        makes these assessments public through
                                        its{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://portal.betterwork.org/transparency"
                                            title="Transparency Portal"
                                        >
                                            Transparency Portal
                                        </a>
                                        , enabling international buyers to
                                        direct their orders to factories making
                                        compliance improvements. The program
                                        also provides advice and remediation
                                        assistance to firms to improve their
                                        compliance. <em>Better Work</em> is
                                        structured to align the incentives of
                                        factory owners, buyers, governments and
                                        workers more effectively in order to
                                        protect rights and improve livelihoods.
                                        The U.S. Department of Labor is a major
                                        funder of
                                        <em>Better Work</em> programs in several
                                        countries, along with several other
                                        donor governments and institutions.
                                    </p>
                                    <img
                                        src={betterwork}
                                        alt="Work being done in a well-lit and clean factory"
                                    />
                                    <br />
                                    <div className="small-text">
                                        <p>
                                            &copy; Better Work Jordan/Photo by
                                            Ala&rsquo;a al Sukhni
                                        </p>
                                    </div>
                                </ExampleInAction>
                                <p>
                                    Most industry associations have a basic set
                                    of requirements for any company wishing to
                                    join. For example, members of the{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.responsiblebusiness.org/"
                                        title="Responsible Business Alliance (RBA)"
                                    >
                                        Responsible Business Alliance
                                    </a>{" "}
                                    (formerly Electronics Industry Citizenship
                                    Coalition) commit to a common{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.eiccoalition.org/standards/"
                                        title="Code of Conduct"
                                    >
                                        Code of Conduct
                                    </a>{" "}
                                    to ensure continuous improvement in the
                                    social, environmental, and ethical
                                    responsibility of their supply chains.
                                    EICC&rsquo;s members demonstrate compliance
                                    to this common code through a range of
                                    mandatory assessments, including the{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.eiccoalition.org/standards/vap/"
                                        title="Validated Assessment Process"
                                    >
                                        Validated Assessment Process
                                    </a>
                                    , which provides standards for onsite
                                    compliance verification and effective,
                                    shareable assessments.
                                </p>
                                <p>
                                    Whether or not there is a group within your
                                    industry, you may also wish to explore
                                    social compliance systems that span multiple
                                    industries. One such program is the{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org"
                                        title="Ethical Trading Initiative (ETI)"
                                    >
                                        Ethical Trading Initiative (ETI)
                                    </a>
                                    . Through consultation with trade unions,
                                    non-governmental organizations (NGOs) and
                                    corporate members, ETI developed the{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/eti-base-code"
                                        title="ETI Base Code"
                                    >
                                        ETI Base Code
                                    </a>
                                    . Companies that join ETI must adopt this
                                    Code and agree to{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/resources/principles-implementation"
                                        title="ETI&rsquo;s Principles of Implementation"
                                    >
                                        ETI&rsquo;s Principles of Implementation
                                    </a>
                                    . Companies then receive tools, training and
                                    access to ETI&rsquo;s global network for
                                    support in tackling on-the-ground compliance
                                    issues. For more information, see{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/node/1192?lang=en"
                                        title="ETI's toolkit"
                                    >
                                        ETI's toolkit
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/node/1650"
                                        title="resources for ethical trade"
                                    >
                                        {" "}
                                        resources for ethical trade
                                    </a>
                                    .
                                </p>
                                <p>
                                    <Link to="/steps/3">
                                        Step 1, Engage Stakeholders and Partners
                                    </Link>{" "}
                                    offers many more examples of collaborative
                                    programs and initiatives you could opt to
                                    join.
                                </p>
                                <p>
                                <em>
                                    *Note: References to specific companies and
                                    non-governmental entities within this guide
                                    are for informational purposes only to
                                    demonstrate best practices that have been
                                    recognized internationally, as of the
                                    app&rsquo;s release date. Referencing the
                                    entities should not be interpreted as an
                                    official endorsement of those entities,
                                    their products, or services by the U.S.
                                    Department of Labor{" "}
                                </em>
                                <em>
                                    and their inclusion should not be
                                    interpreted as a comprehensive review of
                                    these entities&rsquo; practices in all areas
                                </em>
                                <em>.</em>
                            </p>
            </div>
        </StaticData>
    );
};

export default en;
