import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";

const ms = () => {
    return (
        <StaticData>
            <div>
                <h1>What Can Stakeholders Do?</h1>
                <p>
                    There are fruitful ways to collaborate and partner with
                    stakeholders on almost every component of a social
                    compliance system. Below are just a few examples:
                </p>
                <div className="indent-margin">
                    <h2>Root causes</h2>
                    <p className="indent-margin">
                        As noted earlier, tackling the root causes of labor
                        abuse is fundamentally a governmental responsibility.
                        Working with governments to advocate for more resource
                        allocation to these issues can yield lasting long-term
                        benefits, and is likely to be more effective when
                        several companies join together.
                    </p>
                    <h2>Code of conduct development</h2>
                    <p className="indent-margin">
                        One of the tenets of good code of conduct development is
                        incorporating input from a broad range of stakeholders.
                        You can seek input at the stage of initial code
                        drafting, or maintain a standing group of contributors
                        who provide ideas and feedback on the code on an ongoing
                        basis.
                    </p>
                    <h2>Risk assessment</h2>
                    <p className="indent-margin">
                        Understanding your risks of child labor, forced labor
                        and other workplace issues is often difficult due to
                        lack of empirical data. Input from a broad range of
                        knowledgeable people is important to get an accurate
                        idea of risks, as well as recommendations for ways to
                        mitigate them.
                    </p>
                    <h2>Training</h2>
                    <p className="indent-margin">
                        A successful social compliance program must make a
                        significant investment in training and capacity
                        building. Involvement of stakeholders can have a variety
                        of benefits; for instance, ensuring that training
                        materials are culturally appropriate.
                    </p>
                    <h2>Communication</h2>
                    <p className="indent-margin">
                        Stakeholders can assist in improving communication
                        channels; for example, trade union representatives can
                        receive feedback and concerns from workers at worksites
                        where a union is present, while some civil society
                        groups specialize in setting up grievance mechanisms and
                        other communication channels at non-unionized
                        facilities.
                    </p>
                    <h2>Auditing and independent monitoring/verification</h2>
                    <p className="indent-margin">
                        Some community-based groups are trained to carry out
                        monitoring and independent verification services; others
                        can provide an independent &ldquo;check&rdquo; for
                        internal or external monitors.
                    </p>
                    <h2>Remediation</h2>
                    <p className="indent-margin">
                        Qualified organizations can provide services for victims
                        of labor violations or link companies to local resources
                        to assist and remedy.
                    </p>
                    <h2>Public reporting</h2>
                    <p className="indent-margin">
                        Stakeholders can be instrumental in reviewing or vetting
                        reports and providing feedback.
                    </p>
                </div>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                        {": "}
                    </h2>
                    <p>
                        &ldquo;Stakeholder engagement can take many forms. It
                        can be initiated by an organization or it can begin as a
                        response by an organization to one or more stakeholders.
                        It can take place in either informal or formal meetings
                        and can follow a wide variety of formats such as
                        individual meetings, conferences, workshops, public
                        hearings, round-table discussions, advisory committees,
                        regular and structured information and consultation
                        procedures, collective bargaining and web-based forums.
                        Stakeholder engagement should be interactive and is
                        intended to provide opportunities for
                        stakeholders&rsquo; views to be heard. Its essential
                        feature is that it involves two-way
                        communication.&rdquo;
                    </p>
                    <p>
                        <em>
                            Source: International Organization for
                            Standardization (ISO){" "}
                        </em>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.iso.org/standard/42546.html"
                            title="26000, Guidance on Social Responsibility"
                        >
                            26000, Guidance on Social Responsibility
                        </a>
                        <em>, 2010</em>.
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default ms;
