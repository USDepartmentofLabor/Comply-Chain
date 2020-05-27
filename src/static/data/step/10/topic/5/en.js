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
            <div>
                <h1>Engaging Consumers</h1>
                <p>
                    Planning for report production depends to some extent on how
                    often you report and in what form. A formal annual report
                    requires somewhat different skills from those required for
                    periodic web-based data updates, but both require
                    substantial investments of time and resources.
                </p>
                <ExampleInAction id="nike">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Future of Fashion
                        </strong>
                    </h2>
                    <p>
                    <br />
                    <br />
                    </p>
                </ExampleInAction>

                <h2>Heading 1</h2>
                <p><b>PLACEHOLDER FOR TEXT</b></p>

                <h2>Heading 2</h2>
                <p><b>PLACEHOLDER FOR TEXT</b></p>

                <h2>Heading 3</h2>
                <p><b>PLACEHOLDER FOR TEXT</b></p>

                <h2>Heading 4</h2>
                 <p><b>PLACEHOLDER FOR TEXT</b></p>

                 <h2>Heading 5</h2>
                 <p><b>PLACEHOLDER FOR TEXT</b></p>

                 <ExampleInAction id="nike">
                     <h2>
                         <ExampleInAction.Icon alt="Lightbulb"/>
                         <strong>
                             Example in Action: Behind the Brands and Consumer Engagement
                         </strong>
                     </h2>
                     <p>
                     <br />
                     <br />
                     </p>
                 </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;






