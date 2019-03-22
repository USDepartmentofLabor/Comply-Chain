import React from "react";
import basicElements from "../../images/basic_elements.png";

const en = () => {
    return (
        <div>
            <p>
                <strong>
                    Basic Design Elements of a Project-Level Grievance Mechanism
                </strong>
            </p>
            <img src={basicElements} alt="no alt text" />
            <p>
                Source: International Finance Corporation.{" "}
                <em>
                    Good Practice Note: Addressing Grievances from
                    Project-Affected Communities: Guidance for Projects and
                    Companies on Designing Grievance Mechanisms.
                </em>{" "}
                Washington, D.C., 2009; available from{" "}
                <a target="_blank" rel="noopener noreferrer" href="http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18">
                    http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18
                </a>
                .
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
