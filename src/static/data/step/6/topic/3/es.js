import React from "react";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    ¿Qu&eacute; temas deben incluirse en la capacitaci&oacute;n
                    y el fortalecimiento de capacidades?
                </h1>
                {/* <p>
                    A continuaci&oacute;n se presentan los principales temas que
                    se deben incluir para los distintos p&uacute;blicos:
                </p> */}

                <h2>Todos los p&uacute;blicos</h2>
                <ul>
                    <li>
                        Las normas incluidas en el c&oacute;digo de conducta {" "}
                        <em>
                            (Nota: esta parte de la capacitaci&oacute;n debe ser minuciosa y exhaustiva. Se debe 
                            explicar cada una de las normas en detalle. Por ejemplo, se debe dar una explicaci&oacute;n 
                            completa del trabajo infantil, con ejemplos de qu&eacute; constituye trabajo infantil y 
                            qu&eacute; no.)
                        </em>
                        ;
                    </li>
                    <li>
                        Una descripci&oacute;n general y exhaustiva del sistema de cumplimiento social, donde se muestren todos 
                        los componentes y la manera en que encajan entre s&iacute; a fin de que todos comprendan la funci&oacute;n 
                        que desempe&ntilde;an en el sistema
                    </li>
                    <li>
                        Las expectativas que se tienen de cada uno de los componentes del sistema, el responsable de cada componente 
                        y la manera en que se le har&aacute; rendir cuentas
                    </li>
                    <li>
                        Qu&eacute; esperar de una auditor&iacute;a y la manera en que los datos de la auditor&iacute;a se verifican de manera independiente
                    </li>
                    <li>
                        Las pol&iacute;ticas y los procedimientos de remediaci&oacute;n de la empresa.
                    </li>
                    <li>
                        Los valores en el lugar de trabajo, como el respeto y la honestidad.
                    </li>
                    <li>
                        La presentaci&oacute;n de informes p&uacute;blicos de la empresa, y
                    </li>
                    <li>
                        Las oportunidades de contribuir, incluidos los mecanismos de reclamaci&oacute;n
                    </li>
                </ul>
                <h2>Internos</h2>
                <Accordion id="what-topic-cover">
                <Accordion.Section id="soc-comp-team">
                    <Accordion.Title>
                                <strong>
                                Equipo de cumplimiento social
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>                
                <p>
                    Capacitaci&oacute;n intensiva en todos los aspectos del sistema. La capacitaci&oacute;n continua de 
                    este equipo puede incluir el uso del sistema de informaci&oacute;n de cumplimiento social y una 
                    comparaci&oacute;n con otras empresas e iniciativas.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="product-dept">
                            <Accordion.Title>
                                <strong>
                                Departamentos de desarrollo de productos y abastecimiento

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <p>
                    Capacitar en los tipos de datos que recolecta el equipo de cumplimiento social y la manera de usar dichos datos 
                    a la hora de tomar decisiones sobre el desarrollo y abastecimiento de productos, as&iacute; como informaci&oacute;n 
                    constante sobre el desempe&ntilde;o de los proveedores en el campo de cumplimiento social. Es fundamental hablar 
                    con los desarrolladores y compradores de productos de la empresa acerca del efecto que tienen sus pr&aacute;cticas 
                    y decisiones en el cumplimiento social. Lo ideal es que las evaluaciones de desempe&ntilde;o y la estructura de 
                    incentivos de estos equipos se basen en la medida en que usan los datos de cumplimiento social. En este di&aacute;logo 
                    probablemente sea necesario contar con la aceptaci&oacute;n y participaci&oacute;n de las m&aacute;ximas esferas de 
                    la empresa.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="other-emp">
                            <Accordion.Title>
                                <strong>
                                Otros empleados

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel> 
                <p>
                    La comunicaci&oacute;n por boletines informativos, correo electr&oacute;nico, informes anuales, reuniones anuales u 
                    otro medio a fin de garantizar que todos los empleados sean conscientes del compromiso que asume la empresa con el 
                    cumplimiento social. Otro enfoque que suele emplearse es un sistema de incentivos o recompensas que premia a quienes 
                    tengan el mejor desempe&ntilde;o en responsabilidad social.
                </p>
                </Accordion.Panel>
                </Accordion.Section>
                
                <Accordion.Section id="vendor-agent">
                            <Accordion.Title>
                                <strong>
                                Proveedores o agentes de la empresa (si procede)

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <p>
                    Los requisitos contractuales que se exigen al contratista o agente. Por lo general, un contratista o 
                    agente debe firmar el compromiso de adherirse al c&oacute;digo de conducta, que debe incorporarse al 
                    contrato. Adem&aacute;s, en el contrato se debe especificar qu&eacute; actividades realizar&aacute; el 
                    contratista o agente por ser parte del sistema, como garantizar que los auditores y los organismos de 
                    verificaci&oacute;n tengan acceso irrestricto a las plantas de producci&oacute;n. Si la empresa tiene 
                    una relaci&oacute;n relativamente estable con los contratistas o agentes, tal vez se deba adoptar un 
                    modelo de sistema de cumplimiento social que delegue al contratista o agente una parte considerable de 
                    la responsabilidad que tienen el proveedor o productor con el cumplimiento social. En este caso, el 
                    contrato tambi&eacute;n puede exigir al contratista o agente:
                </p>
                <ul>
                    <li>
                        Garantizar que los proveedores de primer orden se adhieran al c&oacute;digo de conducta.
                    </li>
                    <li>
                        Capacitar a los proveedores de primer orden.
                    </li>
                    <li>
                        Realizar una auditor&iacute;a propia de los proveedores de primer orden.
                    </li>
                    <li>
                        Redactar planes de acci&oacute;n correctiva, aplicarlos y darles seguimiento.
                    </li>
                    <li>
                        Supervisar el desempe&ntilde;o de los proveedores respecto del cumplimiento social e informar los resultados.
                    </li>
                    <li>
                        Limitar la cantidad de subcontratistas o divulgar los nombres de los subcontratistas que trabajan en 
                        determinados puntos de la cadena de suministro.
                    </li>
                    <li>
                        Ofrecer incentivos al contratista o agente por buen desempe&ntilde;o en el cumplimiento social.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <h2>Proveedores</h2>
                <Accordion id="what-topic-cover-1">
                <Accordion.Section id="mgmt">
                    <Accordion.Title>
                                <strong>
                                Gerencia
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                

                <p>
                    Los requisitos contractuales que se exigen a los proveedores, si la empresa contrata a los proveedores directamente. 
                    Al proveedor se le debe exigir firmar el compromiso de adherirse al c&oacute;digo de conducta, que debe incorporarse 
                    al contrato. Adem&aacute;s, en el contrato se debe especificar qu&eacute; actividades realizar&aacute; el proveedor 
                    o agente por ser parte del sistema, como garantizar que los auditores y los organismos de verificaci&oacute;n tengan 
                    acceso irrestricto a las plantas de producci&oacute;n. Si la empresa tiene una relaci&oacute;n relativamente estable 
                    con los proveedores, tal vez deba adoptar un modelo de sistema de cumplimiento social que delegue una parte 
                    considerable de la responsabilidad de cumplimiento social al proveedor o agente. En este caso, el contrato 
                    tambi&eacute;n puede exigir al proveedor:
                </p>
                <ul>
                    <li>
                        Capacitar a supervisores, trabajadores y dem&aacute;s grupos en materia de cumplimiento social.
                    </li>
                    <li>
                        Realizar algo de &ldquo;auditor&iacute;a propia&rdquo;.
                    </li>
                    <li>
                        Redactar planes de acci&oacute;n correctiva, aplicarlos y darles seguimiento.
                    </li>
                    <li>
                        Supervisar el desempe&ntilde;o en cuanto al cumplimiento social e informar los resultados.
                    </li>
                    <li>
                        Limitar la cantidad de subcontratistas o divulgar los nombres de los subcontratistas que trabajan en 
                        determinados puntos de la cadena de suministro y
                    </li>
                    <li>
                        Garantizar que haya cumplimiento social tanto con los subcontratistas como en determinados puntos de la cadena de suministro.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="supervisor">
                    <Accordion.Title>
                                <strong>
                                Supervisores
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                
                <ul>
                    <li>
                        Uso adecuado de la autoridad
                    </li>
                    <li>
                        Aptitudes de comunicaci&oacute;n para motivar a los trabajadores y comunicar a la gerencia los logros, 
                        las necesidades, las aptitudes y los talentos de los trabajadores
                    </li>
                    <li>
                        Aptitudes de fomento del esp&iacute;ritu de equipo y
                    </li>
                    <li>
                        &ldquo;Alertas&rdquo; para identificar el trabajo infantil, el trabajo forzoso y la trata
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="hr-staff">
                    <Accordion.Title>
                                <strong>
                                Personal de Recursos Humanos
                                </strong>
                    </Accordion.Title>
                <Accordion.Panel>
                
                <ul>
                    <li>
                        C&aacute;lculo de sueldos, como el pago a destajo, las horas extras, las bonificaciones y las deducciones legales y permitidas
                    </li>
                    <li>
                        Pol&iacute;ticas para garantizar el pago oportuno y correcto de sueldos
                    </li>
                    <li>
                        Documentaci&oacute;n adecuada para verificar la edad
                    </li>
                    <li>
                        Pol&iacute;ticas sobre el trato correcto de los ni&ntilde;os identificados en los lugares de trabajo
                    </li>
                    <li>
                        Pol&iacute;ticas y procedimientos para el reclutamiento y la contrataci&oacute;n de trabajadores
                    </li>
                    <li>
                        Procedimientos para garantizar que todos los trabajadores tengan contratos donde se estipulen claramente 
                        los t&eacute;rminos de su empleo, en un idioma que comprendan y que cualquier cambio al contrato se 
                        realice con el consentimiento informado y por escrito de los trabajadores
                    </li>
                    <li>
                        Mecanismos mediante los cuales los trabajadores pueden presentar cualquier reclamaci&oacute;n, como por 
                        acoso, amenazas o intimidaci&oacute;n
                    </li>
                    <li>
                        Aptitudes adecuadas para llevar registros
                    </li>
                    <li>
                        Pol&iacute;ticas y procedimientos espec&iacute;ficos para los trabajadores migrantes, como mecanismos para 
                        garantizar que los intermediarios o agentes no les cobren, que no se les exija dejar un dep&oacute;sito, 
                        que puedan recibir t&eacute;rminos y condiciones de empleo an&aacute;logos a los que reciben los trabajadores 
                        no migrantes y que tengan f&aacute;cil acceso a sus documentos de identidad y un lugar seguro para guardarlos; y
                    </li>
                    <li>
                        Uso del sistema de informaci&oacute;n de cumplimiento social, si procede.
                    </li>
                </ul>
                </Accordion.Panel>
                </Accordion.Section>
                </Accordion>
                <h2>
                    Proveedores m&aacute;s all&aacute; de los de primer orden
                </h2>

                <p>
                    En la medida de lo posible, los programas de capacitaci&oacute;n y fortalecimiento de capacidades deben 
                    incluir a los proveedores m&aacute;s all&aacute; de los de primer orden. Una vez que con la evaluaci&oacute;n 
                    de riesgos se hayan identificado los &aacute;mbitos de la cadena de suministro que presentan el mayor riesgo 
                    de trabajo infantil, trabajo forzoso y dem&aacute;s abusos laborales, ya se tiene una idea de cu&aacute;les 
                    son los proveedores de esos niveles que m&aacute;s necesitan la capacitaci&oacute;n. El material de 
                    capacitaci&oacute;n que se elabor&oacute; para los proveedores de primer orden se puede adaptar para otros 
                    niveles de la cadena de suministro. Tal como se indic&oacute;, la empresa tambi&eacute;n puede exigir que los 
                    proveedores o agentes impartan esta capacitaci&oacute;n. Cabe mencionar que algunas empresas logran resultados 
                    m&aacute;s eficaces reuniendo a varios proveedores (por ejemplo, todos los proveedores que operan en el mismo 
                    pa&iacute;s o en la misma regi&oacute;n geogr&aacute;fica) para capacitarlos juntos.
                </p>

                <h2>Trabajadores y sindicatos</h2>
                <ul>
                    <li>
                        Responsabilidades en el lugar de trabajo
                    </li>
                    <li>
                        Los derechos adicionales en el lugar de trabajo que no se tratan en el contenido b&aacute;sico de la capacitaci&oacute;n, 
                        como los derechos que confieren las leyes locales sobre la libertad de empleo, las deducciones salariales, etc.
                    </li>
                    <li>
                        Procedimientos adecuados para asentar las horas trabajadas
                    </li>
                    <li>
                        Comprensi&oacute;n de los recibos de sueldo, c&aacute;lculos de salario y deducciones
                    </li>
                    <li>
                        &ldquo;Alertas&rdquo; para identificar el trabajo infantil, el trabajo forzoso y la trata
                    </li>
                    <li>
                        C&aacute;lculo de sueldos, como el pago a destajo, las horas extras, las bonificaciones y las deducciones legales y permitidas
                    </li>
                    <li>
                        Pol&iacute;ticas para garantizar el pago oportuno y correcto de sueldos
                    </li>
                    <li>
                        Documentaci&oacute;n adecuada para verificar la edad
                    </li>
                    <li>
                        Pol&iacute;ticas sobre el trato correcto de los ni&ntilde;os identificados en los lugares de trabajo
                    </li>
                    <li>
                        Pol&iacute;ticas y procedimientos para el reclutamiento y la contrataci&oacute;n de trabajadores
                    </li>
                    <li>
                        Procedimientos para garantizar que todos los trabajadores tengan contratos donde se estipulen claramente los 
                        t&eacute;rminos de su empleo, en un idioma que comprendan y que cualquier cambio al contrato se realice con el 
                        consentimiento informado y por escrito de los trabajadores
                    </li>
                    <li>
                        Mecanismos mediante los cuales los trabajadores pueden presentar cualquier reclamaci&oacute;n, como por acoso, 
                        amenazas o intimidaci&oacute;n y
                    </li>
                    <li>
                        Pol&iacute;ticas y procedimientos espec&iacute;ficos para los trabajadores migrantes, como mecanismos para 
                        garantizar que los intermediarios o agentes no les cobren, que no se les exija dejar un dep&oacute;sito, que 
                        puedan recibir t&eacute;rminos y condiciones de empleo an&aacute;logos a los que reciben los trabajadores no 
                        migrantes y que tengan f&aacute;cil acceso a sus documentos de identidad y un lugar seguro para guardarlos.
                    </li>
                </ul>
                <p>
                    Cabe mencionar que, en algunos sectores, en particular el agr&iacute;cola, algunos trabajadores pueden ser analfabetos. 
                    El c&oacute;digo de conducta de Starbucks* para el caf&eacute;, conocido como las{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.scsglobalservices.com/starbucks-cafe-practices"
                    >
                        Pr&aacute;cticas C.A.F.E.
                    </a>
                    , contempla el requisito de que todos los trabajadores analfabetos sean informados verbalmente de los derechos contenidos 
                    en el c&oacute;digo.
                </p>
            </div>
        </StaticData>
    );
};

export default es;
