import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Hacer el bien</strong>
                </h1>
                <p>
                    Para algunas empresas, contar con un sistema de cumplimiento social es, en sí mismo, “hacer lo correcto”. Es más probable que estas empresas brinden apoyo y recursos considerables a sus sistemas de cumplimiento social.
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

export default es;
