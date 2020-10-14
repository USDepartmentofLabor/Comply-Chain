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
                <h1>Información clave relativa al riesgo y el impacto</h1>
                <p>
                    Tras esta investigaci&oacute;n inicial, la empresa debe
                    incorporar a las partes interesadas pertinentes para
                    recolectar informaci&oacute;n adicional sobre los riesgos.
                    La empresa debe procurar obtener el aporte de una gama de
                    grupos y poner en marcha procesos que permitan la
                    comunicaci&oacute;n sin barreras ling&uuml;&iacute;sticas ni
                    de otro tipo.
                </p>
                <p>
                    En algunas situaciones no es posible la consulta con ciertos
                    grupos de partes interesadas o la consulta no
                    producir&aacute; toda la informaci&oacute;n necesaria. En
                    estos casos, se puede incorporar a expertos de instituciones
                    acad&eacute;micas, consultoras sobre responsabilidad social
                    empresarial y ONG para ayudar con la evaluaci&oacute;n de
                    riesgos e impacto.
                </p>
                <p>
                   Algunas empresas optan por “tercerizar” la función de recolección de
                   información a un experto, como una consultora, un grupo de la sociedad civil o una
                   institución académica. Si ya cuenta con relaciones bien establecidas con los proveedores y está
                   procurando evaluar los riesgos actuales, los informes de auditoría sobre estos proveedores realizados
                   por otras empresas o grupos constituyen una fuente de datos muy útil. Para acceder a ellos, tal vez sea
                   requisito incorporarse al grupo, como el&nbsp;
                   <a
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.sedexglobal.com/"
                   >
                   Supplier Ethical Data Exchange (SEDEX)*
                   </a>
                   &nbsp;y&nbsp;
                   <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.fairfactories.org/"
                      >
                   Fair Factories Clearinghouse*
                   </a>
                   ,
                   que brindan una plataforma para compartir información sobre proveedores comunes, así como para colaborar en las
                   iniciativas de vigilancia, seguimiento y reparación.
                </p>
                <p>
                  Si los informes de auditoría no están disponibles, hay otras maneras de obtener información sobre sus proveedores actuales
                  para determinar los que deben ser objeto de iniciativas de cumplimiento adicionales. Si hay un sindicato constituido, las
                  reclamaciones o denuncias en el terreno pueden ser una buena fuente de información sobre factores de riesgo de abusos laborales.
                  Si no hay sindicato, el proveedor puede poner en práctica otros mecanismos de reclamación o denuncia para obtener información.
                  Claramente, otra opción es estudiar a todos los proveedores a la luz de los factores de riesgo fundamentales antes mencionados.
                </p>
                <p>¿Qu&eacute; informaci&oacute;n procura obtener?</p>
                <Accordion id="nature-prev-acc">
                <Accordion.Section id="nature-prev-acc-description">
                  <Accordion.Title>
                  Naturaleza y frecuencia
                     </Accordion.Title>
                     <Accordion.Panel>

                     <p className="indent-margin">
                         ¿Se conocen casos de trabajo infantil, trabajo forzoso u
                         otras infracciones laborales o se cree que ocurren en sus
                         zonas (o zonas posibles) geogr&aacute;ficas de
                         abastecimiento? ¿Qu&eacute; tipo de trabajo se est&aacute;
                         realizando? ¿D&oacute;nde se encuentran infracciones
                         m&aacute;s frecuentemente?
                     </p>
                 </Accordion.Panel>
             </Accordion.Section>
             </Accordion>
                <Accordion id="industry-structure-acc">
                 <Accordion.Section id="industry-structure-acc-description">
                  <Accordion.Title>
                  Causas fundamentales
                     </Accordion.Title>
                     <Accordion.Panel>

                     <p className="indent-margin">
                         Si existe el trabajo infantil, el trabajo forzoso y otras
                         infracciones laborales, ¿cu&aacute;les son las causas
                         fundamentales?
                     </p>
                     </Accordion.Panel>
                 </Accordion.Section>
                 </Accordion>
                   <Accordion id="root-causes-acc">
                     <Accordion.Section id="root-causes-description">
                         <Accordion.Title>
                         Estructura de la industria
                            </Accordion.Title>
                            <Accordion.Panel>

                            <p className="indent-margin">
                                ¿C&oacute;mo funciona esta industria en el pa&iacute;s? ¿Los
                                lugares de trabajo son formales o informales? ¿Est&aacute;n
                                formalizadas las relaciones de empleo? ¿Se subcontratan
                                algunos elementos de producci&oacute;n? En tal caso, ¿parte
                                de la producci&oacute;n se terceriza a hogares?
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    </Accordion>

                <Accordion id="cocoa-chains-acc">
                                                               <Accordion.Section id="cocoa-description">
                                                                  <Accordion.Title>
                                                                  Poblaci&oacute;n laboral
                                                                     </Accordion.Title>
                                                                     <Accordion.Panel>

                                                                     <p className="indent-margin">
                                                                         ¿Cu&aacute;les son las caracter&iacute;sticas de la fuerza
                                                                         laboral en esta industria en esta zona geogr&aacute;fica?
                                                                         ¿Se recurre de manera importante a trabajadores
                                                                         subcontratados, temporales o migrantes no calificados? En
                                                                         tal caso, ¿estos trabajadores hablan el idioma de la zona?
                                                                         ¿Los trabajadores son predominantemente de uno u otro sexo?
                                                                         ¿Se contrata habitualmente a un grupo etario en particular?
                                                                     </p>
                                                                 </Accordion.Panel>
                                                             </Accordion.Section>
                                                             </Accordion>

                    <Accordion id="cocoa-chains-acc">
                               <Accordion.Section id="cocoa-description">
                                  <Accordion.Title>
                                  Relaciones industriales
                                     </Accordion.Title>
                                     <Accordion.Panel>
                                     <p className="indent-margin">
                                         ¿Se cuenta con un marco jur&iacute;dico e institucional
                                         nacional en vigencia para permitir relaciones industriales
                                         efectivas y negociaci&oacute;n colectiva? ¿Est&aacute;n
                                         presentes sindicatos efectivos? En caso contrario, ¿existen
                                         en los lugares de trabajo mecanismos vigentes para que los
                                         trabajadores expresen su opini&oacute;n?
                                     </p>
                                 </Accordion.Panel>
                             </Accordion.Section>
                             </Accordion>
                    <Accordion id="cocoa-chains-acc">
                                   <Accordion.Section id="cocoa-description">
                                      <Accordion.Title>
                                     Protecci&oacute;n social
                                         </Accordion.Title>
                                         <Accordion.Panel>

                                         <p className="indent-margin">
                                             ¿Existe en el pa&iacute;s una red de seguridad social que
                                             proteja a los m&aacute;s vulnerables y que ofrezca, entre
                                             otras cosas, acceso a atenci&oacute;n m&eacute;dica,
                                             seguridad de los ingresos para las personas mayores y las
                                             personas con discapacidad, prestaciones para ni&ntilde;os y
                                             seguridad de los ingresos para los desempleados y la clase
                                             obrera pobre? ¿Son suficientes las instituciones educativas
                                             para formar a los ni&ntilde;os hasta que alcancen la edad
                                             legal para trabajar?
                                         </p>
                                     </Accordion.Panel>
                                 </Accordion.Section>
                                 </Accordion>


                <Accordion id="cocoa-chains-acc">
                           <Accordion.Section id="cocoa-description">
                              <Accordion.Title>
                              Entorno jur&iacute;dico y reglamentario
                                 </Accordion.Title>
                                 <Accordion.Panel>

                                 <p className="indent-margin">
                                     ¿Cu&aacute;les son las leyes y reglamentos principales en
                                     materia de trabajo infantil, trabajo forzoso y otras
                                     cuestiones laborales en este pa&iacute;s o
                                     jurisdicci&oacute;n? ¿Se aplican estas leyes y reglamentos a
                                     los trabajadores migrantes? ¿Qu&eacute; leyes existen sobre
                                     la complicidad empresarial en los abusos contra los derechos
                                     humanos? ¿En qu&eacute; medida se hacen cumplir las leyes y
                                     hay indicios de corrupci&oacute;n en el incumplimiento?
                                 </p>
                             </Accordion.Panel>
                         </Accordion.Section>
                         </Accordion>
                <Accordion id="cocoa-chains-acc">
                                       <Accordion.Section id="cocoa-description">
                                          <Accordion.Title>
                                          Iniciativas y organizaciones existentes
                                             </Accordion.Title>
                                             <Accordion.Panel>

                                             <p>
                                                 ¿Qu&eacute; iniciativas se est&aacute;n llevando a cabo, y
                                                 qui&eacute;n est&aacute; a cargo, para combatir las
                                                 infracciones laborales como trabajo infantil y forzoso en
                                                 esta industria o zona?
                                             </p>
                                         </Accordion.Panel>
                                     </Accordion.Section>
                                     </Accordion>

                <Accordion id="cocoa-chains-acc">
                       <Accordion.Section id="cocoa-description">
                          <Accordion.Title>
                          Datos de mercado
                             </Accordion.Title>
                             <Accordion.Panel>

                             <p className="indent-margin">
                             ¿Cuáles son las categorías de mayor gasto, como materia prima esencial o
                             componentes vitales, en las operaciones de la empresa que están más en riesgo
                             y que, por lo tanto, podrían tener un impacto desmesurado ante cualquier perturbación?
                             ¿Hay otras empresas de la industria que divulgan listas de proveedores particulares o
                             información de fuentes que pueda incorporar su empresa en la evaluación y el análisis de riesgos?
                         </p>
                         </Accordion.Panel>
                     </Accordion.Section>
                     </Accordion>

                     <Accordion id="cocoa-chains-acc">
                        <Accordion.Section id="cocoa-description">
                           <Accordion.Title>
                           Continuación
                              </Accordion.Title>
                              <Accordion.Panel>

                              <p className="indent-margin">
                              Para tener una idea de cómo se puede aplicar este enfoque general a un sector en particular, la&nbsp;
                              <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="www.responsiblesourcingtool.org/download/seafood/SF_Tool_04.pdf"
                                >
                              herramienta 4 del RST: Recolección de información y evaluación de riesgos en las cadenas de suministro de la industria pesquera
                              </a>
                              &nbsp;presenta un enfoque paso a paso (en inglés) para examinar los riesgos relativos al país, a las cadenas de suministro y a los proveedores.
                          </p>
                          </Accordion.Panel>
                      </Accordion.Section>
                      </Accordion>
                                                             <br />
                <ExampleInAction id="fish">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Ejemplo en acci&oacute;n: pescados y mariscos
                        </strong>
                    </h2>
                    <p>
                        El trabajo infantil y el trabajo forzoso se emplean para
                        capturar y procesar pescados y mariscos en una gama de
                        entornos acu&aacute;ticos de todo el mundo. La
                        naturaleza solitaria de este tipo de trabajo presenta
                        una serie de desaf&iacute;os para hacer cumplir la
                        normativa en materia de trabajo infantil y trabajo
                        forzoso en la industria pesquera. La{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf"
                            title="Convenci&oacute;n de las Naciones Unidas sobre el Derecho del Mar"
                        >
                            Convenci&oacute;n de las Naciones Unidas sobre el
                            Derecho del Mar
                        </a>{" "}
                        es el principal instrumento internacional en derecho
                        mar&iacute;timo. En la Convenci&oacute;n se hace
                        referencia a distintas zonas mar&iacute;timas (mar
                        territorial, zonas econ&oacute;micas exclusivas y alta
                        mar), as&iacute; como a la capacidad que tienen los
                        pa&iacute;ses de regular las actividades que se realizan
                        en cada una. Estas fronteras mar&iacute;timas agregan
                        otro nivel de complejidad al momento de ejecutar la
                        legislaci&oacute;n laboral en los buques pesqueros. El
                        pa&iacute;s cuya bandera enarbola el buque pesquero
                        suele ser el responsable de regular las condiciones
                        laborales a bordo del buque. No obstante, cuando el
                        Estado del pabell&oacute;n no puede o no quiere hacer
                        cumplir la normativa laboral a bordo de sus buques, los
                        trabajadores pueden volverse cada vez m&aacute;s
                        vulnerables a la explotaci&oacute;n. Si bien los buques
                        no pueden cambiar de pabell&oacute;n durante el viaje,
                        algunos emplean los denominados pabellones de
                        conveniencia, o sea el pabell&oacute;n de un Estado que
                        no es el del due&ntilde;o del buque, para evitar
                        sanciones financieras o normativas en su pa&iacute;s, y
                        para regirse por un r&eacute;gimen laboral que
                        consideran beneficioso. Las iniciativas de cumplimiento,
                        enjuiciamiento y restituci&oacute;n se complican
                        m&aacute;s a&uacute;n cuando los buques operan dentro de
                        la jurisdicci&oacute;n territorial de otro Estado.&nbsp;
                    </p>
                    <p>
                        La pesca ilegal, no declarada y no reglamentada (pesca INDNR) es un
                        problema cada vez mayor. La pesca INDNR evade reglamentos, socava la
                        gestión y conservación de las pesquerías y pone en peligro la oferta mundial de
                        alimentos.  Exacerba las prácticas laborales de explotación, lo cual puede tener un
                        impacto negativo en los salarios y en las condiciones de trabajo de todos los pescadores.
                        Además, la pesca INDNR puede prestarse para el trabajo forzoso, la trata de personas y el
                        trabajo infantil. Los gobiernos se han esmerado por combatir la pesca INDNR. Por ejemplo,
                        de conformidad con el reglamento de la Unión Europea para poner fin a la pesca INDNR, los
                        países que exportan pescado a la UE o que prestan sus pabellones a buques que importan a
                        la UE tienen la obligación de cumplir estándares estrictos para la gestión de las pesquerías.
                        Si no cumplen dichos estándares, se los puede “amonestar”, lo cual significa que su
                        pescado podría quedar excluido del mercado de la UE.
                    </p>
                    <p>
                    El Gobierno de los Estados Unidos también está adoptando medidas para tratar la problemática de la
                    pesca INDNR. En 2019, el Congreso de los Estados Unidos aprobó la Ley marítima SAFE (sigla que en
                    inglés significa “seguridad y rendición de cuentas en todos los puertos”). Mediante esta ley se creó
                    un grupo de trabajo interinstitucional que brinda a las dependencias del gobierno federal un marco
                    coordinado para combatir la pesca INDNR y se autorizó una serie de actividades a nivel dependencia.
                    Entre estas actividades cabe mencionar fomentar la capacidad de los organismos de aplicación de la
                    ley, mejorar la transparencia y trazabilidad en la cadena de suministro de pescados y mariscos, promover
                    el uso de la tecnología para combatir la pesca INDNR y fomentar un mejor intercambio de información entre las dependencias y otros organismos.
                    </p>
                    <p>
                    Antes de que se aprobara la Ley SAFE, un equipo de tareas presidencial abocado a combatir la pesca INDNR lanzó un&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                    >
                    Plan de acción para aplicar las recomendaciones del equipo de tareas
                    </a>
                    , en virtud del cual los Estados Unidos se
                    encuentran en el proceso de elaborar un programa de trazabilidad de pescados y mariscos. Este programa de trazabilidad,
                    conocido como&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.fisheries.noaa.gov/international/seafood-import-monitoring-program"
                    >
                    Programa de vigilancia y seguimiento de las importaciones de pescados y mariscos
                    </a>
                    &nbsp;(Seafood Import Monitoring
                    Program o SIMP) exige que el importador estadounidense inscrito brinde datos clave (desde el punto de captura hasta el
                    punto de ingreso al comercio de los Estados Unidos) de trece especies de pescado y productos pesqueros que se identificaron
                    como vulnerables a la pesca INDNR o al fraude. El cumplimiento se volvió obligatorio a finales de 2018.
                    </p>
                    <p>
                    Fuente:&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.un.org/depts/los/convention_agreements/texts/unclos/convemar_es.pdf"
                    >
                    https://www.un.org/depts/los/convention_agreements/texts/unclos/convemar_es.pdf
                    </a>.
                    </p>
                </ExampleInAction>
                <br />
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>En sus propias palabras</strong>
                        {": "}
                    </h2>
                    <p>
                        <strong>
                            Factores de riesgo clave para el quebrantamiento de
                            los derechos laborales
                        </strong>
                    </p>
                    <p>
                        Algunos proyectos financiados por la Corporación Financiera de
                        Desarrollo Internacional (DFC) de los Estados Unidos, sucesora
                        de la Corporación de Inversiones Privadas en el Extranjero (OPIC),
                        se clasifican como “de especial consideración” por una serie de factores laborales.
                    </p>
                    <p>
                        “Los proyectos de especial consideración tienden a albergar un mayor potencial de que se
                        presenten riesgos sociales relacionados con el proyecto por la participación o el impacto
                        en las personas afectadas por el proyecto, como los trabajadores. Los proyectos pueden
                        recibir esta clasificación tras realizarse una evaluación de la gravedad que revisten
                        determinados riesgos sociales posibles y la pertinencia que tienen para el proyecto.
                    </p>
                    <p>
                        Algunos factores de riesgo clave que pueden tenerse en
                        cuenta son:
                    </p>
                    <ul>
                        <li>
                            Industria o sector: las industrias o los sectores
                            m&aacute;s laboriosos en los que,
                            estad&iacute;sticamente, hay mayores probabilidades
                            de que se vulneren los derechos laborales.
                        </li>
                        <li>
                            Vulnerabilidades regionales: proyectos en
                            pa&iacute;ses 1) con una trayectoria documentada de
                            problemas de derechos laborales, 2) que
                            recientemente se hayan visto expuestos a un
                            conflicto con las personas afectadas por el proyecto
                            o 3) con sistemas normativos fr&aacute;giles o en
                            riesgo.{" "}
                        </li>
                        <li>
                            Presencia de grupos vulnerables: 1)
                            utilizaci&oacute;n o dependencia en gran medida de
                            grandes grupos de trabajadores subcontratados, no
                            calificados, temporarios o migrantes (incluso en la
                            cadena de suministro), 2) riesgos o efectos del
                            proyecto que recaen de manera desproporcionada en
                            las personas afectadas por el proyecto, quienes, por
                            sus circunstancias particulares, pueden ser
                            vulnerables o encontrarse en situaci&oacute;n de
                            desventaja o 3) sectores en que existe un alto
                            riesgo de que se use el trabajo infantil o el
                            trabajo forzoso.
                        </li>
                        <li>
                            Efectos adversos considerables: 1) proyectos que se
                            prev&eacute; tendr&aacute;n efectos adversos en una
                            cantidad considerable de trabajadores o 2) proyectos
                            que, por su naturaleza o zona de impacto, pueden
                            causar, se prev&eacute; que causar&aacute;n o
                            podr&iacute;an contribuir a causar efectos adversos
                            en los derechos humanos.&rdquo;
                        </li>
                    </ul>
                    <p>
                        Fuente: Corporación Financiera de Desarrollo Internacional de los Estados Unidos,&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf"
                        >
                           Environmental and Social Policy and Procedures
                        </a>
                        &nbsp;, 2020; disponible en idioma inglés solamente en https://www.dfc.gov/sites/default/files/media/documents/DFC_ESPP_012020.pdf{" "}.
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default es;
