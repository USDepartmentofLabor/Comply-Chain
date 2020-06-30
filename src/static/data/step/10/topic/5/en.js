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
                <h1>Report Engagement</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>

                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>
                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>
                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>
                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>
                    <li>Bullet Point Level 1
                            <ul>
                            <li>Bullet Point Level 2</li>
                            </ul>
                    </li>
                </ul>
                <ExampleInAction id="nike">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Future of Fashion
                        </strong>
                    </h2>
                    <p>
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
                     </p>
                 </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default en;






