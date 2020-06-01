import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Administraci&oacute;n de los datos de la auditor&iacute;a
                </h1>
                <p>
                    Las auditor&iacute;as resultan poco &uacute;tiles a menos
                    que la empresa se comprometa a usar los datos que emanan de
                    ellas para mejorar las condiciones laborales con el tiempo.
                    Los datos de la auditor&iacute;a deben ingresarse en un
                    sistema de base de datos que permita analizar
                    meticulosamente una auditor&iacute;a puntual, as&iacute;
                    como analizar en el tiempo los datos globales de cada
                    proveedor y lugar de trabajo auditado, cada l&iacute;nea de
                    productos, cada tipo de infracci&oacute;n, el cumplimiento
                    en las distintas zonas geogr&aacute;ficas y dem&aacute;s
                    patrones.
                </p>
                <p>
                    Mantener actualizada una base de datos eficaz de las
                    auditor&iacute;as presenta varios desaf&iacute;os.
                </p>
                <Accordion id="data-processing-acc">
                                   <Accordion.Section id="data-processing-description">
                      <Accordion.Title>
                      Procesamiento de datos
                         </Accordion.Title>
                         <Accordion.Panel>
                          <p>
                                              En primer lugar, el sistema debe permitir procesar
                                              eficazmente los datos que provienen de varios auditores
                                              diferentes, como los internos y los externos, o los datos
                                              recibidos de auditor&iacute;as de un sector de la industria
                                              o de un grupo de varios sectores. Si los instrumentos de
                                              auditor&iacute;a est&aacute;n en papel, los auditores y
                                              dem&aacute;s personal deben estar capacitados para ingresar
                                              los datos en el sistema de manera uniforme. (Algunas
                                              empresas subcontratan la tarea de limpiar los datos de la
                                              auditor&iacute;a.) Si la empresa adem&aacute;s recibe datos
                                              de supervisores independientes, debe incluir esos datos
                                              tambi&eacute;n.&nbsp;
                                          </p>
                                          <p>
                                              La capacitaci&oacute;n reviste particular importancia si
                                              permite que los auditados ingresen su propia
                                              informaci&oacute;n para la autoevaluaci&oacute;n. Algunos de
                                              estos postulantes poseen conocimientos limitados de
                                              inform&aacute;tica o de uso de bases de datos, con lo cual
                                              es fundamental ense&ntilde;arles a ingresar la
                                              informaci&oacute;n correctamente a fin de garantizar la
                                              integridad de los datos.
                                          </p>
                                          <p>
                                              Antes de pensar en capacitar a los auditores o a quienes
                                              realizan la autoevaluaci&oacute;n, se debe pensar en el
                                              dise&ntilde;o de la base de datos. Una base de datos bien
                                              dise&ntilde;ada puede ayudar a garantizar la integridad de
                                              los datos si facilita que el usuario los ingrese en el
                                              formato correcto. Una base de datos personalizada con un
                                              dise&ntilde;o l&oacute;gico implica que una empresa
                                              &uacute;nicamente obtiene la informaci&oacute;n que necesita
                                              y que los datos son &uacute;tiles y se pueden analizar.
                                              Cualquier empresa, independientemente de su tama&ntilde;o,
                                              puede reducir la cantidad de datos err&oacute;neos obtenidos
                                              si parte de una buena base de datos. Asimismo, existen
                                              distintos programas inform&aacute;ticos que permiten
                                              automatizar la verificaci&oacute;n de la integridad de los
                                              datos.
                                          </p>
                     </Accordion.Panel>
                 </Accordion.Section>
                 </Accordion>

                <Accordion id="systems-integration-acc">
                                                    <Accordion.Section id="systems-integration-description">
                                                          <Accordion.Title>
                                                          Integraci&oacute;n con otros sistemas de inform&aacute;tica
                                                             </Accordion.Title>
                                                             <Accordion.Panel>
                                                              <p>
                                                                  El segundo desaf&iacute;o es la integraci&oacute;n. La base
                                                                  de datos debe estar integrada con sistemas de
                                                                  inform&aacute;tica que sigan los datos de otros programas de
                                                                  cumplimiento social, como listas de proveedores, datos sobre
                                                                  la capacitaci&oacute;n y el fortalecimiento de capacidades
                                                                  de los proveedores, remediaci&oacute;n e informaci&oacute;n
                                                                  de las verificaciones independientes. En segundo lugar, debe
                                                                  estar integrada con otras funciones de la empresa, en
                                                                  particular con la de abastecimiento, de manera que los datos
                                                                  de cumplimiento social se utilicen de manera eficaz en otras
                                                                  unidades de la empresa. La integraci&oacute;n debe ser tal
                                                                  que el departamento de abastecimiento pueda realizar pedidos
                                                                  a proveedores con un buen desempe&ntilde;o en las auditorias
                                                                  sociales.
                                                              </p>
                                                         </Accordion.Panel>
                                                     </Accordion.Section>
                                                     </Accordion>

                <Accordion id="using-data-acc">
                                                                     <Accordion.Section id="using-data-description">
                                                          <Accordion.Title>
                                                          Uso de los datos
                                                             </Accordion.Title>
                                                             <Accordion.Panel>
                                                              <p>
                                                                                  Un tercer desaf&iacute;o es fijar procesos claros para usar
                                                                                  los datos. Los auditores deben consultar la base de datos
                                                                                  cuando se est&eacute;n preparando para una auditor&iacute;a
                                                                                  a fin de observar el historial de auditor&iacute;as de un
                                                                                  determinado lugar de trabajo y los tipos de infracciones que
                                                                                  son comunes en ese lugar geogr&aacute;fico o para ese tipo
                                                                                  de producto. El equipo de cumplimiento social debe contar
                                                                                  con procesos claros para analizar los datos de
                                                                                  auditor&iacute;as espec&iacute;ficas e identificar patrones
                                                                                  en todas las auditor&iacute;as realizadas.&nbsp;
                                                                              </p>
                                                                              <p>
                                                                                  Si se hallan infracciones en un lugar de trabajo, se debe
                                                                                  disponer de procesos que permitan dar seguimiento a la
                                                                                  remediaci&oacute;n propuesta por el proveedor. El equipo
                                                                                  debe intentar identificar patrones de infracciones en
                                                                                  determinadas l&iacute;neas de producto, en regiones
                                                                                  puntuales, as&iacute; como infracciones relativas a los
                                                                                  due&ntilde;os o gerentes de un proveedor y dem&aacute;s
                                                                                  problemas. Cuando se detecten patrones, se deben programar
                                                                                  auditor&iacute;as en los tipos de lugares de trabajo que
                                                                                  aparentemente presenten los mayores riesgos. El equipo
                                                                                  tambi&eacute;n debe contar con controles que permitan
                                                                                  identificar &ldquo;valores at&iacute;picos&rdquo; y
                                                                                  verificar la exactitud de los datos.&nbsp;
                                                                              </p>
                                                                              <p>
                                                                                  Habr&aacute; veces en que los datos de una auditor&iacute;a
                                                                                  revelen infracciones graves y veces en que un determinado
                                                                                  proveedor contin&uacute;a infringiendo el c&oacute;digo a
                                                                                  pesar de las reiteradas auditor&iacute;as y los esfuerzos de
                                                                                  remediaci&oacute;n. La empresa deber&aacute; contar con
                                                                                  pol&iacute;ticas que permitan determinar cu&aacute;ndo
                                                                                  continuar con la remediaci&oacute;n y cu&aacute;ndo
                                                                                  desvincularse comercialmente de un determinado proveedor.
                                                                                  Algunas empresas tienen pol&iacute;ticas de
                                                                                  &ldquo;tolerancia cero&rdquo; con respecto a determinadas
                                                                                  infracciones, normalmente el trabajo infantil y el trabajo
                                                                                  forzoso, para lo cual se desvinculan de inmediato de un
                                                                                  proveedor o lo suspenden. Otras contin&uacute;an la
                                                                                  remediaci&oacute;n por un tiempo o hasta llegar a
                                                                                  determinadas metas pero si el proveedor no muestra una
                                                                                  mejora suficiente, la empresa se desvincula. Al
                                                                                  desvincularse comercialmente de un proveedor, la empresa
                                                                                  siempre debe tener presente el efecto que esto tendr&aacute;
                                                                                  en los trabajadores.
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
                                                                                  .
                                                                              </p>
                                                         </Accordion.Panel>
                                                     </Accordion.Section>
                                                     </Accordion>
            </div>
        </StaticData>
    );
};

export default es;
