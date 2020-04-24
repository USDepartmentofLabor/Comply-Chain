import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../components/StaticData";
const es = () => {
    return (
        <StaticData>
            <div>
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
            </div>
        </StaticData>
    );
};

export default es;
