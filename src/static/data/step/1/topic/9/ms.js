import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Berbuat baik</strong>
                </h1>
                <p>
                    Bagi sesetengah syarikat, mempunyai sistem pematuhan sosial secara
                    intrinsik adalah “perkara yang patut dilakukan.” Syarikat seperti
                    ini cenderung menumpukan sokongan dan sumber daya yang besar kepada sistem pematuhan sosial mereka.
                </p>
            </div>
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

        </StaticData>
    );
};

export default en;
