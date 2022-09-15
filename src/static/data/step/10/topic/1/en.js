import React from "react";
import StaticData from "../../../../../../components/StaticData";
// import OwnWords from "../../../../../../components/OwnWords";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Forms of Public Reporting </h1>
                <p>
                    A company&rsquo;s public reporting on its social compliance program, including the auditing and verification processes and other 
                    elements of the program discussed in previous sections, may be a stand-alone report or part of a broader sustainability or corporate 
                    social responsibility (CSR) report. It may be published in hard copy, on a company&rsquo;s website, or both; some companies publish 
                    both an annual or other regular hard-copy report and updates online.
                </p>
                <p>
                    Reporting should also include periodic communication with stakeholders about issues of importance that come up unexpectedly; this type of 
                    reporting should be done as needed and as appropriate to the circumstances. Whatever format is chosen, reporting should be timely and 
                    regular, and you should make an effort to ensure that key information is accessible to a wide variety of audiences, including those who 
                    may not have access to the Internet.
                </p>
                <ExampleInAction id="correct-action">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                        In Their Own Words: The Coca-Cola Company&rsquo;s* country sugar studies on child labor, forced labor, and land rights
                        </strong>
                    </h2>
                    <p>
                        &ldquo;The country study is an exercise to enable The Coca-Cola Company to better understand its sugar sourcing supply chain and 
                        to give visibility on how Coca-Cola sugar supply companies and bottling partners are addressing key risks. The studies are not an 
                        audit, but are research, and focus on three key elements: child labor, forced labor and land rights, as these are considered higher 
                        risk factors in Coca-Cola&rsquo;s agriculture supply chain.&rdquo;
                    </p>
                    <p>
                        Read more about the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="methodology" 
                        href="https://www.coca-colacompany.com/content/dam/journey/us/en/policies/pdf/human-workplace-rights/addressing-global-issues/sugar-study-methodology-overview.pdf"
                        >methodology
                        </a>{" "}
                        of Coca-Cola&rsquo;s country studies and explore the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="country sugar studies" 
                        href="https://www.coca-colacompany.com/policies-and-practices/country-sugar-studies"
                        >country sugar studies
                        </a>{" "}
                        produced so far.
                    </p>                   
                </ExampleInAction>
                {/* <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words: The Coca-Cola Company&rsquo;s* country sugar studies on child labor, forced labor, and land rights</strong>
                        {": "}
                    </h2>
                    <p>
                        &ldquo;The country study is an exercise to enable The Coca-Cola Company to better understand its sugar sourcing supply chain and 
                        to give visibility on how Coca-Cola sugar supply companies and bottling partners are addressing key risks. The studies are not an 
                        audit, but are research, and focus on three key elements: child labor, forced labor and land rights, as these are considered higher 
                        risk factors in Coca-Cola&rsquo;s agriculture supply chain.&rdquo;
                    </p>
                    <p>
                        Read more about the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="methodology" 
                        href="https://www.coca-colacompany.com/content/dam/journey/us/en/policies/pdf/human-workplace-rights/addressing-global-issues/sugar-study-methodology-overview.pdf"
                        >methodology
                        </a>{" "}
                        of Coca-Cola&rsquo;s country studies and explore the{" "}
                        <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="country sugar studies" 
                        href="https://www.coca-colacompany.com/policies-and-practices/country-sugar-studies"
                        >country sugar studies
                        </a>{" "}
                        produced so far.
                    </p>
                </OwnWords> */}

            </div>
        </StaticData>
    );
};

export default en;
