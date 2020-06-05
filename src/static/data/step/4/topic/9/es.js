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
                <h1>Key Information Related to Risk and Impact</h1>
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
                                          Iniciativas actuales
                                             </Accordion.Title>
                                             <Accordion.Panel>

                                             <p>
                                                 ¿Qu&eacute; iniciativas se est&aacute;n llevando a cabo, y
                                                 qui&eacute;n est&aacute; a cargo, para combatir las
                                                 infracciones laborales como trabajo infantil y forzoso en
                                                 esta industria o zona?
                                             </p>

                                             <p>
                                                 Para tener una idea de c&oacute;mo se puede aplicar este
                                                 enfoque general en un sector en particular, en el{" "}
                                                 <a
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     href="http://www.responsiblesourcingtool.org/download/seafood/SF_Tool_04.pdf"
                                                     title="Instrumento de abastecimiento responsable 4: Recolecci&oacute;n de informaci&oacute;n y evaluaci&oacute;n de riesgos en las cadenas de suministro de la industria pesquera (en ingl&eacute;s)"
                                                 >
                                                     instrumento de abastecimiento responsable 4:
                                                     Recolecci&oacute;n de informaci&oacute;n y
                                                     evaluaci&oacute;n de riesgos en las cadenas de
                                                     suministro de la industria pesquera
                                                 </a>{" "}
                                                 (disponible solamente en idioma ingl&eacute;s) se explica
                                                 paso a paso c&oacute;mo examinar los riesgos de pa&iacute;s,
                                                 los riesgos en la cadena de suministro y los riesgos de los
                                                 proveedores.&nbsp;
                                             </p>
                                         </Accordion.Panel>
                                     </Accordion.Section>
                                     </Accordion>

                <Accordion id="cocoa-chains-acc">
                                                               <Accordion.Section id="cocoa-description">
                                                                  <Accordion.Title>
                                                                  Market Data
                                                                     </Accordion.Title>
                                                                     <Accordion.Panel>

                                                                     <p className="indent-margin">
                                                                     <b>PLACEHOLDER FOR TEXT</b>
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
                        La pesca ilegal, no declarada y no reglamentada (INDNR)
                        se ha convertido en un problema cada vez mayor ya que
                        agota las reservas mundiales de pescados y mariscos y
                        crea una situaci&oacute;n de competencia desleal en la
                        industria, entre otros factores, por la
                        explotaci&oacute;n de los trabajadores. Los gobiernos se
                        han esmerado por combatir la pesca INDNR. Por ejemplo,
                        de conformidad con el reglamento sobre la pesca INDNR de
                        la Uni&oacute;n Europea, se emiten advertencias,
                        m&aacute;s conocidas como &ldquo;tarjetas
                        amarillas&rdquo;, a los pa&iacute;ses que se considera
                        que no est&aacute;n haciendo lo suficiente para combatir
                        la pesca INDNR. Al emitir una tarjeta amarilla se inicia
                        un di&aacute;logo formal con el gobierno en
                        cuesti&oacute;n sobre las medidas correctivas. El
                        gobierno de los Estados Unidos tambi&eacute;n adopta
                        medidas para combatir la pesca INDNR: un equipo de
                        tareas presidencial abocado a combatir la pesca INDNR
                        lanz&oacute; un{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.iuufishing.noaa.gov/Portals/33/noaa_taskforce_report_final.pdf"
                            title="Plan de acci&oacute;n para aplicar las recomendaciones del equipo de tareas"
                        >
                            Plan de acci&oacute;n para aplicar las
                            recomendaciones del equipo de tareas
                        </a>
                        , en virtud del cual los Estados Unidos se encuentran en
                        el proceso de elaborar un programa de trazabilidad de
                        pescados y mariscos.
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
                        La Corporaci&oacute;n para Inversiones Privadas en el
                        Extranjero del gobierno de los Estados Unidos (OPIC)
                        cuenta con procesos que permiten garantizar que los
                        proyectos que reciban apoyo de la OPIC sean sostenibles
                        desde las perspectivas social y ambiental. Algunos
                        proyectos financiados por la OPIC se clasifican como
                        &ldquo;de especial consideraci&oacute;n&rdquo; por una
                        serie de factores laborales.
                    </p>
                    <p>
                        &nbsp;&ldquo;Los proyectos de especial
                        consideraci&oacute;n tienden a albergar un mayor
                        potencial de que se presenten riesgos sociales
                        relacionados con el proyecto por la participaci&oacute;n
                        o el impacto en las personas afectadas por el proyecto,
                        como los trabajadores. Los proyectos pueden recibir esta
                        clasificaci&oacute;n tras realizarse una
                        evaluaci&oacute;n de la gravedad que revisten
                        determinados riesgos sociales posibles y la pertinencia
                        que tienen para el proyecto.&nbsp;
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
                        Fuente: Corporaci&oacute;n de Inversiones Privadas en el
                        Extranjero de los EE.UU.,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.opic.gov/sites/default/files/files/final%20revised%20ESPS%2001132017(1).pdf"
                            title="Declaraci&oacute;n de pol&iacute;tica ambiental y social"
                        >
                            Declaraci&oacute;n de pol&iacute;tica ambiental y
                            social
                        </a>
                        , 2017.
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default es;
