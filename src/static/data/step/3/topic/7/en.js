import React from "react";
import { Link } from "react-router-dom";

const en = () => {
    return (
        <div>
            <h1>Communicating the Code</h1>
            <p>
                Effective communication is an important aspect of any social
                compliance program. Many companies have learned that merely
                auditing workplaces and remediating violations alone does not
                solve many of the labor problems found at harvesting, mining and
                production sites, processing facilities and other workplaces.
                Ongoing training and communication, capacity building and an
                emphasis on continuous improvement have been found to be the
                most effective path to sustaining progress toward greater
                compliance.
            </p>
            <p>
                <Link to="/step/4">
                    Step 4, Communicate and Train Across Your Supply Chain
                </Link>{" "}
                will discuss the ins and outs of communicating your code and
                compliance system to a variety of audiences: your own employees,
                your shareholders, your suppliers, supplier managers and
                supervisors, workers at facilities throughout the supply chain,
                governments, workers&rsquo; organizations, community groups and
                others. It will also discuss ways to make the code more
                accessible to stakeholders by avoiding unnecessary technical
                jargon and providing for translation into multiple languages.
            </p>
            <p>
                <em>
                    *Note: References to specific companies and non-governmental
                    entities within this guide are for informational purposes
                    only to demonstrate best practices that have been recognized
                    internationally, as of the app&rsquo;s release date.
                    Referencing the entities should not be interpreted as an
                    official endorsement of those entities, their products, or
                    services by the U.S. Department of Labor{" "}
                </em>
                <em>
                    and their inclusion should not be interpreted as a
                    comprehensive review of these entities&rsquo; practices in
                    all areas
                </em>
                <em>.</em>
            </p>
        </div>
    );
};

export default en;
