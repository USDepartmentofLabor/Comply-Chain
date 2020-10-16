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
                <h1>El equipo de notificaci&oacute;n</h1>
                <p>
                    Planificar la redacci&oacute;n de informes depende en cierta 
                    medida de la frecuencia con que se presentan dichos informes 
                    y en qu&eacute; forma. Un informe anual formal exige 
                    competencias algo distintas a las necesarias para las 
                    actualizaciones peri&oacute;dicas en l&iacute;nea, aunque 
                    ambos exigen una inversi&oacute;n considerable de tiempo 
                    y recursos.
                </p>
                <p>
                El equipo de cumplimiento social debe designar a un encargado de 
                la redacci&oacute;n de informes y a otros integrantes del equipo 
                para que lo ayuden. Esa persona coordinar&aacute; la labor con el 
                equipo y con otras unidades de negocios de toda la empresa. Se 
                deben asignar puntos de contacto en toda la empresa para que 
                brinden insumos y examinen el informe a fin de corroborar que 
                refleja la integraci&oacute;n del cumplimiento social en toda la 
                empresa, incluso las divisiones que normalmente no se asocian con 
                el cumplimiento social, como Comercializaci&oacute;n y Finanzas.
                </p>
                <p>
                Algunas empresas contratan a un proveedor externo para que redacte
                 el informe. Las distintas unidades pertinentes de la empresa brindan
                  la informaci&oacute;n necesaria al proveedor del servicio. El riesgo
                   de este enfoque es que tal vez no se obtenga la misma calidad ni 
                   profundidad de colaboraci&oacute;n durante la redacci&oacute;n 
                   del informe.
                </p>
                <p>
                Algunas empresas tienen partes interesadas externas que fungen de 
                asesores del equipo o incluso lo integran. En este caso, se debe 
                tratar de personas con experiencia y conocimientos t&eacute;cnicos 
                en el campo del cumplimiento social pero que provengan de otros 
                &aacute;mbitos o tengan una perspectiva distinta a la del resto 
                de los integrantes del equipo. Adem&aacute;s, a medida que se redacta 
                el informe, puede ser &uacute;til hacer que lo lean personas ajenas, 
                hagan comentarios y brinden retroalimentaci&oacute;n. En aras de la 
                apertura y la transparencia, algunas empresas invitan a representantes 
                de grupos laborales, ONG y dem&aacute;s partes interesadas e incluyen 
                extractos de sus comentarios, que se publican en el informe en s&iacute;, 
                incluso los que tal vez critiquen algunos aspectos del programa de la empresa.
                </p>
                <ExampleInAction id="nike">
                  <h2>
                      <ExampleInAction.Icon alt="Lightbulb"/>
                      <strong>
                          Ejemplo en acci&oacute;n: los informes de una peque&ntilde;a empresa
                      </strong>
                  </h2>
                  <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.uncommoncacao.com/company"
                        title="Uncommon Cacao"
                    >
                        Uncommon Cacao
                    </a>
                  
                  * es una peque&ntilde;a empresa con sede en California inscrita 
                  como{" "}
                  <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://bcorporation.net/"
                        title="sociedad an&oacute;nima tipo Bo"
                    >
                        sociedad an&oacute;nima tipo B
                    </a>{" "}
                   
                  que se dedica a la cadena de suministro 
                  del cacao y que ya public&oacute; su s&eacute;ptimo{" "}
                  <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://indd.adobe.com/view/4afb053a-306c-4f52-8612-f77b23c7d466"
                        title="informe anual de transparencia en 2018"
                    >
                        informe anual de transparencia en 2018
                    </a>
                  
                  . Mediante cooperativas, Uncommon Cacao trabaja con casi 4.000 establecimientos 
                  agr&iacute;colas en siete pa&iacute;ses productores de cacao y abastece a m&aacute;s 
                  de 200 chocolateros artesanales de todo el mundo. Los informes que presenta 
                  sistem&aacute;ticamente la empresa con informaci&oacute;n de compras e insumos aporta 
                  transparencia a un sector que a veces carece de este nivel de detalle y sistematicidad. 
                  Presentar informes crea rendici&oacute;n de cuentas en todas las partes interesadas, 
                  permite que los consumidores y productores accedan a datos reales y fijan puntos de 
                  referencia para los precios en toda la cadena mundial de suministro del cacao.
                  </p>
                  <p>
                  <em>
                            Fuente:{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.uncommoncacao.com/company"
                                title="https://www.uncommoncacao.com/company"
                            >
                                <i>
                                https://www.uncommoncacao.com/company.
                                </i>
                            </a>
                           
                        </em>  
                  
                  </p>
              </ExampleInAction>
                {/* <p>
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
                </p> */}

            </div>
        </StaticData>
    );
};

export default es;
