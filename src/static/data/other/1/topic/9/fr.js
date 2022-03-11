import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Faire le bien</strong>
                </h1>
                <p>
                    Pour certaines entreprises, disposer d&rsquo;un
                    syst&egrave;me de conformit&eacute; sociale est
                    intrins&egrave;quement «&nbsp;la bonne chose &agrave;
                    faire&nbsp;». Ces entreprises ont plus de chances de
                    consacrer des ressources et un soutien importants &agrave;
                    leurs syst&egrave;mes de conformit&eacute; sociale.
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

export default fr;
