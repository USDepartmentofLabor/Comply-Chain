import React from "react";
import OwnWords from "../../../../../../components/OwnWords";

import StaticData from "../../../../../../components/StaticData";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Contratación y retención de empleados</strong>
                </h1>
                <p>
                    Cada vez más, los&nbsp;
                    <a
                             target="_blank"
                             rel="noopener noreferrer"
                             href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                       >
                    estudios de investigación
                    </a>
                    &nbsp;demuestran que los empleados, en especial los más jóvenes, tienden a inclinarse más por trabajar en empresas con responsabilidad social y ambiental, aspectos que tienen en cuenta al momento de tomar decisiones laborales para su futuro.
                </p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words</strong>
                        {": "}
                    </h2>
                    <p>
                        Placeholder
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default es;
