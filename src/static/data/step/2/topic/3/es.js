import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Evaluaci&oacute;n del impacto y los factores de riesgo
                    externos
                </h1>
                <p>
                    El impacto y los riesgos &ldquo;externos&rdquo; abarcan a
                    aquellos vinculados con las operaciones, los productos o
                    servicios de la empresa mediante relaciones comerciales,
                    respecto de los cuales usted puede y debe ejercer
                    influencia, as&iacute; como los riesgos sobre los cuales
                    tiene menos control, como los que se desprenden de leyes o
                    acontecimientos nacionales en entornos de operaci&oacute;n
                    m&aacute;s amplios.&nbsp;
                </p>
                <p>
                    Si la empresa est&aacute; considerando abastecerse de un
                    pa&iacute;s o una zona geogr&aacute;fica nueva, usted
                    probablemente ya eval&uacute;e los riesgos de manera
                    diferente. La evaluaci&oacute;n de los riesgos para los
                    derechos humanos y el cumplimiento social debe ser parte de
                    estos procesos. Esto se aborda en mayor detalle en la
                    siguiente secci&oacute;n,{" "}
                    <em>
                        <u>
                            Recolecci&oacute;n de informaci&oacute;n sobre
                            riesgos e impacto
                        </u>
                    </em>
                    . En la evaluaci&oacute;n se identificar&aacute; a las
                    personas o los grupos que podr&iacute;an verse afectados por
                    las actividades de la empresa y se proyectar&aacute;n los
                    efectos adversos posibles. Como m&iacute;nimo, la
                    evaluaci&oacute;n debe comprender la investigaci&oacute;n
                    documental, la investigaci&oacute;n en el terreno en el
                    pa&iacute;s o la comunidad en cuesti&oacute;n, y una ronda
                    de referencia de auditor&iacute;as previas al abastecimiento
                    para evaluar los niveles actuales de cumplimiento.
                    Encontrar&aacute; informaci&oacute;n adicional sobre la
                    manera de realizar estos tipos de auditor&iacute;a en el{" "}
                    <Link to="/steps/5">
                        quinto paso: Vigilancia y seguimiento del cumplimiento
                    </Link>
                    .
                </p>
                <p>
                    En caso de que la empresa posea cadenas de suministro bien
                    establecidas con las cuales mantiene relaciones comerciales
                    relativamente estables, debe evaluar el impacto y los
                    riesgos asociados a esos actores en la cadena de suministro.
                    Esto debe realizarse en primer lugar en un ejercicio de
                    representaci&oacute;n gr&aacute;fica de la cadena de
                    suministro, junto con la recolecci&oacute;n de
                    informaci&oacute;n sobre los proveedores que m&aacute;s
                    necesitan fiscalizaci&oacute;n, investigaci&oacute;n
                    documental, investigaci&oacute;n en el terreno en las zonas
                    en cuesti&oacute;n y una ronda de referencia de
                    auditor&iacute;as para esos proveedores a fin de evaluar su
                    nivel actual de cumplimiento. Estos datos de referencia le
                    permiten identificar los &aacute;mbitos posibles de los
                    proveedores que necesitan mejoras. Encontrar&aacute;
                    informaci&oacute;n adicional sobre la manera de realizar
                    estos tipos de auditor&iacute;a en{" "}
                    <Link to="/steps/5">
                        el quinto paso: Vigilancia y seguimiento del
                        cumplimiento.
                    </Link>
                </p>
            </div>
        </StaticData>
    );
};

export default es;
