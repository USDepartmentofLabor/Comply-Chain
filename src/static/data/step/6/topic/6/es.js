import React from "react";
import StaticData from "../../../../../../components/StaticData";
import basicElements from "../../images/basic_elements.png";

const es = () => {
    return (
        <StaticData>
            <div>
                <p>
                    <strong>
                        Elementos b&aacute;sicos de dise&ntilde;o de un
                        mecanismo de reclamaci&oacute;n a nivel de proyecto
                    </strong>
                </p>
                <img src={basicElements} alt="no alt text" />
                <p>
                    Fuente: Corporaci&oacute;n Financiera Internacional.{" "}
                    <em>
                        <i>
                            Good Practice Note: Addressing Grievances from
                            Project-Affected Communities
                        </i>{" "}
                        -{" "}
                        <i>
                            Guidance for Projects and Companies on Designing
                            Grievance Mechanisms.
                        </i>
                    </em>{" "}
                    Washington, D.C., 2009; disponible en idioma ingl&eacute;s
                    solamente en{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18"
                    >
                        http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18
                    </a>
                    .
                </p>
                <p>
                    <em>
                        *Nota: Toda referencia que se haga en la presente
                        gu&iacute;a a empresas o entidades no gubernamentales
                        espec&iacute;ficas es con fines informativos
                        &uacute;nicamente a fin de demostrar las buenas
                        pr&aacute;cticas internacionalmente reconocidas a la
                        fecha de lanzamiento de la aplicaci&oacute;n. Las
                        referencias a dichas entidades no deben interpretarse
                        como un aval oficial del Departamento de Trabajo de los
                        Estados Unidos a ellas, sus productos ni servicios{" "}
                    </em>
                    <em>
                        y su menci&oacute;n no debe interpretarse como un examen
                        exhaustivo de las pr&aacute;cticas que emplean dichas
                        entidades en todos los &aacute;mbitos
                    </em>
                    <em>.</em>
                </p>
            </div>
        </StaticData>
    );
};

export default es;
