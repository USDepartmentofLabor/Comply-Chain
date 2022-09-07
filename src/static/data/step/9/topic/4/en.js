import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Impact Evaluation</h1>
                <p>
                    Some companies and social compliance initiatives have begun to consider impact evaluation to determine the long-term development 
                    impact of their efforts to reduce child labor, forced labor, and other labor rights violations in their supply chains. Impact evaluation 
                    is a method that establishes, with statistical rigor, a causal linkage and quantifiable impact of a specific intervention. Impact 
                    evaluation isolates the effects of a program or service by comparing a treatment group (those exposed to the program or service) to a 
                    control group (those not exposed to the program or service) that is similar to the treatment group.
                </p>
                <ExampleInAction id="bwi_eval">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: Better Work Impact Evaluation
                        </strong>
                    </h2>
                    <p>
                        A multidisciplinary academic team from Tufts University and the ILO conducted a long-term impact evaluation of the Better Work 
                        program from 2009&ndash;2015. The methodology evaluated project outcomes beyond the factory or industry level. In certain countries, 
                        the study team used the methodology to look at both managers and workers to assess human development and economic development 
                        indicators. In other countries, impact measurement analyzed year-to-year changes in factory performance using a range of other 
                        qualitative research methods.
                    </p>
                    <p>
                        The study presented evidence that improvements in working conditions lead to higher productivity and firm profitability. Key 
                        findings showed that workers reach daily production targets nearly 40 minutes faster in factories with high rates of labor law 
                        compliance than in factories with lower rates. In addition, the study showed that when workers are concerned about verbal abuse, 
                        it takes them almost 1 hour extra per day to reach their production target.
                    </p>
                    <p>
                        It should be noted that, while review and assessment methods like independent monitoring, independent verification, and impact 
                        evaluation can verify that companies have robust systems in place to reduce the likelihood of child labor, forced labor, and other 
                        labor abuses in supply chains, none of these methods guarantees that these abuses are not present.
                    </p>        
                </ExampleInAction>
                <p>
                    <em>
                        *Note: References to specific companies and non-governmental entities within this guide are for informational purposes only to 
                        demonstrate best practices that have been recognized internationally, as of the app&rsquo;s release date. Referencing the entities 
                        should not be interpreted as an official endorsement of those entities, their products, or services by the U.S. Department of Labor 
                        and their inclusion should not be interpreted as a comprehensive review of these entities&rsquo; practices in all areas.
                    </em>
                </p>
            </div>
        </StaticData>
    );
};

export default en;
