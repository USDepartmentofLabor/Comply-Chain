import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";



const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Doing good</strong>
                </h1>
                <p>
                    For some companies, having a social compliance system is
                    intrinsically &ldquo;the right thing to do.&rdquo; Such
                    companies are more likely to devote significant support and
                    resources to their social compliance systems.
                </p>
                <ExampleInAction id="better-work-garment">
                                    <h4>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>Example in Action</strong>
                                        {": "}
                                        <em>
                                            <strong>Placeholder</strong>
                                        </em>{" "}
                                    </h4>
                                    <p>Placeholder</p>
                    </ExampleInAction>
                    <ExampleInAction id="better-work-garment">
                                    <h4>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>Example in Action</strong>
                                        {": "}
                                        <em>
                                            <strong>Placeholder</strong>
                                        </em>{" "}
                                    </h4>
                                    <p>Placeholder</p>
                                </ExampleInAction>            

            </div>
        </StaticData>
    );
};

export default en;
