import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../components/StaticData";
const en = () => {
    return (
        <StaticData>
            <div>
                <p>
                    As discussed in Basics of a Social Compliance System, your
                    social compliance team has set goals, objectives and targets
                    for your system and periodically assesses performance
                    against those targets. In addition to this internal review,
                    you will also need periodic,{" "}
                    <strong>independent review</strong>, which includes{" "}
                    <strong>independent monitoring</strong> and{" "}
                    <strong>independent verification</strong> of the
                    effectiveness of all social compliance program elements.{" "}
                    <em>Note: If, in </em>
                    <Link to="/steps/7">Step 5, Monitor Compliance</Link>
                    <em>
                        , a company already opted for independent
                        monitoring/auditing, it is not necessary to repeat this
                        step, but it is still advised to carry out independent
                        verification.{" "}
                    </em>
                    Review and assessment by an independent external party helps
                    you identify areas for improvement and provides stakeholders
                    with desired information on the implementation and
                    effectiveness of your system.
                </p>
            </div>
        </StaticData>
    );
};

export default en;
