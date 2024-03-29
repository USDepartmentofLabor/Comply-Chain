import React from "react";
import StaticData from "../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>List of Goods Produced by Child Labor or Forced Labor</h1>
                <p>
                    ILAB maintains a list of goods and their source countries that it has reason to believe are produced by child labor or 
                    forced labor in violation of international standards, as required under the Trafficking Victims Protection Reauthorization Act 
                    (TVPRA) of 2005 and subsequent reauthorizations. As of September 28, 2022, the <em>List of Goods Produced by Child Labor or Forced 
                    Labor</em> comprises more than 158 goods from 77 countries or areas and 10 goods from supply chain tracing that are produced in two 
                    countries.

                </p>
                <p>
                    ILAB maintains the list primarily to raise public awareness about forced labor and child labor around the world and to promote efforts 
                    to combat them; it is not intended to be punitive, but rather to serve as a catalyst for more strategic and focused coordination and 
                    collaboration among those working to address these problems.
                </p>
                <p>
                    Publication of the list has resulted in new opportunities for ILAB to engage with foreign governments to combat forced labor and child 
                    labor. It is also a valuable resource for companies, researchers, and advocacy organizations wishing to carry out risk assessments and 
                    engage in due diligence on labor rights in their supply chains.
                </p>
                <p>
                    Read more here:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods"
                        title="List of Goods report"
                    >
                        https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods
                    </a>
                </p>
            </div>
        </StaticData>
    );
};

export default en;
