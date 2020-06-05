import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const es = () => {
    return (
        <StaticData>
            <div>
            <h1>Why Conduct Independent Review?</h1>
                <p>
                    Tal como se mencion&oacute; en Aspectos b&aacute;sicos de un
                    sistema de cumplimiento social, el equipo de cumplimiento
                    social fija metas, objetivos y resultados esperados del
                    sistema y peri&oacute;dicamente eval&uacute;a el
                    desempe&ntilde;o en comparaci&oacute;n con ellos.
                    Adem&aacute;s de este examen interno, peri&oacute;dicamente
                    tambi&eacute;n se necesitar&aacute; un{" "}
                    <strong>examen</strong> independiente, que incluye una{" "}
                    <strong>vigilancia independiente</strong> y una{" "}
                    <strong>verificaci&oacute;n independiente</strong> de la
                    eficacia de los elementos del programa de cumplimiento
                    social.{" "}
                    <em>
                        Nota: si en{" "}
                        <Link to="/steps/7">
                            el quinto paso, Vigilancia y seguimiento del
                            cumplimiento
                        </Link>
                        , la empresa ya opt&oacute; por controles o
                        auditor&iacute;as independientes, no es necesario
                        repetir este paso pero igualmente se recomienda realizar
                        una verificaci&oacute;n independiente.
                    </em>{" "}
                    El examen y la evaluaci&oacute;n por parte de un tercero
                    independiente ayuda a identificar &aacute;mbitos de mejora y
                    brinda a las partes interesadas la informaci&oacute;n
                    deseada sobre la aplicaci&oacute;n y eficacia de su sistema.
                </p>
                <ExampleInAction id="sai_model">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Ejemplo en acci&oacute;n: modelo internacional de
                            rendici&oacute;n de cuentas social
                        </strong>
                    </h2>
                    <p>
                        A fin de garantizar la independencia de las
                        auditor&iacute;as realizadas de conformidad con la norma
                        de rendici&oacute;n de cuentas social 8000 (SA8000), en
                        1997,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/"
                            title="Social Accountability International (SAI)"
                        >
                            Social Accountability International (SAI)
                        </a>{" "}
                        fund&oacute; la entidad{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.saasaccreditation.org/"
                        >
                            Social Accountability Accreditation Services
                        </a>{" "}
                        (Servicios de Acreditaci&oacute;n de Responsabilidad
                        Social o SAAS). En 2007, SAAS se convirti&oacute; en una
                        organizaci&oacute;n sin fines de lucro independiente.
                        SAAS acredita y vigila a las organizaciones como
                        certificadoras de cumplimiento de las normas sociales,
                        incluida la SA8000, para lograr condiciones laborales
                        &eacute;ticas.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
