import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const en = () => {
    return (
        <StaticData>
            <div>
            <h1>Why Conduct Independent Review?</h1>
                <p>
                As discussed in Basics of a Social Compliance System, your social 
                compliance team has set goals, objectives and targets for your 
                system and periodically assesses performance against those targets. 
                In addition to this internal review, you will also need periodic,{" "}
                    <strong>independent review</strong>, which includes{" "}
                    <strong>independent monitoring</strong> and{" "}
                    <strong>independent verification</strong> of the
                    effectiveness of all social compliance program elements.{" "}
                    <em>Note: If, in </em>
                    <Link to="/steps/7">Step 5, Monitor Compliance</Link>
                    <em>
                        , a company already opted for independent monitoring/auditing, 
                        it is not necessary to repeat this step, but it is still advised 
                        to carry out independent verification.{" "}
                    </em>
                    Review and assessment by an independent external party helps you 
                    identify areas for improvement and provides stakeholders with 
                    desired information on the implementation and effectiveness of your system.
                </p>
                <ExampleInAction id="sai_model">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Social Accountability 
                            International Model{" "}
                        </strong>
                    </h2>
                    <p>
                        Social Accountability 8000 (SA8000) Standard,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/"
                            title="Social Accountability International (SAI)"
                        >
                            Social Accountability International (SAI)
                        </a>{" "}
                        is a global non-governmental organization focused on human rights at work. 
                        In 1997, as part of a multi-stakeholder initiative, SAI created the 
                        {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/_data/global/files/SA8000Standard2014(3).pdf"
                            title="Social Accountability (SA8000) Standard"
                        >
                            Social Accountability (SA8000) Standard
                        </a>{""}
                        . SA8000 is a global social certification standard for factories and 
                        organizations that, over the years, has evolved into an inclusive framework 
                        that helps organizations demonstrate high quality social compliance in supply 
                        chains. To ensure the independence of audits conducted against its SA8000, 
                        SAI founded {" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/_data/global/files/SA8000Standard2014(3).pdf"
                            title="Social Accountability Accreditation Services (SAAS)"
                        >
                            Social Accountability Accreditation Services (SAAS)
                        </a>{" "}
                        
                        in 1997. SAAS later became a separate not-for-profit organization in 2007. 
                        SAAS is an agency that accredits and monitors organizations as certifiers 
                        of compliance with social standards, including SA8000, for ethical working conditions.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;
