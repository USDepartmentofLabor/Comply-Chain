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
                    Si la empresa está considerando abastecerse de un país o una
                    zona geográfica nueva, usted probablemente ya evalúe los riesgos
                    de manera diferente. La evaluación de los riesgos para los derechos
                    humanos y el cumplimiento social debe ser parte de estos procesos.
                    Este tema se aborda en mayor detalle en la siguiente sección, ,{" "}
                    <em>
                        <u>
                            Recolecci&oacute;n de informaci&oacute;n sobre
                            riesgos e impacto
                        </u>
                    </em>
                    . En la evaluación se identifica a las personas o los grupos que podrían
                    verse afectados por las actividades de la empresa y se proyectan los posibles
                    efectos adversos. Además, en la evaluación se deben tener en cuenta a los grupos
                    o las personas que pueden ser extremadamente vulnerables a la explotación, ya sea
                    por circunstancias de la vida (como pobreza o falta de estudios) o por discriminación
                    jurídica y social. Además, en la evaluación se debe contemplar a las personas que pueden
                    no estar a la vista del público y que, por ende, no pueden abogar por sus derechos, como
                    sobrevivientes de violación y abuso sexual, los que viven con VIH/sida y los trabajadores
                    indocumentados. Como mínimo, la evaluación debe comprender la investigación documental,
                    la investigación en el terreno en el país o la comunidad en cuestión, y una ronda de
                    referencia de auditorías previas al abastecimiento para evaluar los niveles actuales
                    de cumplimiento. Encontrará información adicional sobre la manera de realizar estos tipos de auditoría en el{" "}
                    <Link to="/steps/7">
                        quinto paso: Vigilancia y seguimiento del cumplimiento
                    </Link>
                    .
                </p>
                <p>
                    En caso de que la empresa posea cadenas de suministro bien establecidas con las cuales mantiene
                    relaciones comerciales relativamente estables, debe evaluar el impacto y los riesgos asociados a
                    esos actores en la cadena de suministro. Esto debe realizarse en primer lugar en un ejercicio de
                    representación gráfica de la cadena de suministro, junto con la recolección de información sobre
                    los proveedores que más necesitan fiscalización, investigación documental, investigación en el
                    terreno en las zonas en cuestión y una ronda de referencia de auditorías para esos proveedores a
                    fin de evaluar su nivel actual de cumplimiento. Estos datos de referencia le permiten identificar
                    los ámbitos posibles de los proveedores que necesitan mejoras. Encontrará información adicional
                    sobre la manera de realizar estos tipos de auditoría en el{" "}
                    <Link to="/steps/7">
                        el quinto paso: Vigilancia y seguimiento del
                        cumplimiento.
                    </Link>
                </p>
            </div>
        </StaticData>
    );
};

export default es;
