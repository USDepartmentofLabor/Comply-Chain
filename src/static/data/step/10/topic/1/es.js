import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>Tipos de informes p&uacute;blicos</h1>
                <p>
                    Los informes p&uacute;blicos que presenta la empresa sobre
                    el programa de cumplimiento social, incluidos los procesos
                    de auditor&iacute;a y verificaci&oacute;n y dem&aacute;s
                    elementos del programa que se mencionaron en secciones
                    anteriores, pueden ser un informe independiente o parte de
                    un informe m&aacute;s amplio de sostenibilidad o
                    responsabilidad social empresarial (RSE). Puede publicarse
                    en formato impreso, en el sitio web de la empresa, o ambos;
                    algunas empresas publican un informe anual u otra
                    publicaci&oacute;n peri&oacute;dica en formato impreso y las
                    actualizaciones en Internet.
                </p>
                <p>
                    La presentaci&oacute;n de informes tambi&eacute;n debe
                    tratarse de una comunicaci&oacute;n peri&oacute;dica con las
                    partes interesadas sobre los temas importantes que surgen de
                    manera inesperada; este tipo de informes debe presentarse
                    seg&uacute;n sea necesario y seg&uacute;n proceda a la luz
                    de las circunstancias. Sea cual fuere el formato elegido,
                    los informes deben ser oportunos y peri&oacute;dicos y la
                    empresa debe esmerarse por garantizar que la
                    informaci&oacute;n clave est&eacute; a disposici&oacute;n de
                    una amplia gama de p&uacute;blicos, incluido el que tal vez
                    no tenga acceso a Internet.
                </p>

                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>En sus propias palabras: estudios de pa&iacute;s 
                            sobre el az&uacute;car que realiz&oacute; la empresa 
                            Coca-Cola* sobre trabajo infantil, trabajo forzoso y 
                            derechos territoriales</strong>
                        {""}
                    </h2>
                    <p>
                    &ldquo;El estudio de pa&iacute;s es un ejercicio que permite a 
                    la empresa Coca-Cola tener una mejor comprensi&oacute;n de la 
                    cadena de suministro de la obtenci&oacute;n del az&uacute;car 
                    y as&iacute; brindar visibilidad a la manera en que est&aacute;n 
                    abordando los riesgos clave sus proveedores de az&uacute;car y 
                    embotelladoras socias. Los estudios no son una auditor&iacute;a 
                    sino un trabajo de investigaci&oacute;n que se centra en tres 
                    elementos clave: el trabajo infantil, el trabajo forzoso y los 
                    derechos territoriales, ya que estos se consideran los factores 
                    de mayor riesgo en la cadena de suministros agr&iacute;colas 
                    de Coca-Cola.&rdquo;
                     </p>
                     <p>
                     Se recomienda leer ma&oacute;s sobre la {" "}
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coca-colacompany.com/content/dam/journey/us/en/policies/pdf/human-workplace-rights/addressing-global-issues/sugar-study-methodology-overview.pdf"
                        title="metodologia"
                    >
                        metodolog&iacute;a
                    </a>
                     {" "} 
                     que se emplea en los estudios de pa&iacute;s que realiza Coca-Cola y explorar los {" "}
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.coca-colacompany.com/policies-and-practices/country-sugar-studies"
                        title="estudios de pair"
                    >
                        estudios de pa&iacute;s sobre el az&uacute;car 
                    </a>
                     {" "} 
                     realizados hasta el momento. 
                     </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default es;
