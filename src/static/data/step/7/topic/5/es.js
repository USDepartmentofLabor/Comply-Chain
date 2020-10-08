import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>Pasos de una auditor&iacute;a</h1>
                <p>
                    Toda auditor&iacute;a suele constar de varios pasos, que se
                    enumeran a continuaci&oacute;n.&nbsp;
                </p>
                <Accordion id="worksite-travel-acc">
                    <Accordion.Section id="worksite-travel-description">
                        <Accordion.Title>
                        Llegada al lugar de trabajo
                            </Accordion.Title>
                            <Accordion.Panel>
                            <p>
                                Seg&uacute;n la empresa, se puede notificar la auditor&iacute;a de antemano (&ldquo;auditor&iacute;a anunciada&rdquo;). 
                                Sin embargo, en este &aacute;mbito la mejor pr&aacute;ctica suelen ser las auditor&iacute;as no anunciadas. No se debe 
                                notificar de antemano a nadie del lugar de trabajo que el equipo de auditor&iacute;a llegar&aacute; un d&iacute;a en 
                                particular.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    {/* </Accordion>

                    <Accordion id="mgmt-meeting-acc"> */}
                        <Accordion.Section id="mgmt-meeting-description">
                            <Accordion.Title>
                            Reuni&oacute;n de apertura con la gerencia
                                </Accordion.Title>
                                <Accordion.Panel>
                                <p>
                                    El objeto de la reuni&oacute;n de apertura es explicar el proceso de la auditor&iacute;a a los gerentes 
                                    del lugar, incluso las secciones en que se les solicitar&aacute; que participen o no. Por otra parte, 
                                    es el momento en que el equipo solicita la documentaci&oacute;n necesaria para la auditor&iacute;a; la 
                                    gerencia puede necesitar un tiempo para ubicar esos documentos despu&eacute;s de la reuni&oacute;n.
                                </p>
                            </Accordion.Panel>
                        </Accordion.Section>
                        {/* </Accordion>

                    <Accordion id="site-walk-through-acc"> */}
                <Accordion.Section id="site-walk-through-description">
                    <Accordion.Title>
                    Recorrido por el lugar de trabajo
                        </Accordion.Title>
                        <Accordion.Panel>
                        <p>
                            El objeto de este recorrido es observar las condiciones de la f&aacute;brica y cualquier otro lugar conexo, como 
                            comedores y complejos habitacionales. Esto permite que el equipo de auditor&iacute;a tenga una idea de cualquier 
                            inquietud en cuanto al cumplimiento social; por ejemplo, los auditores pueden ver trabajadores que aparentan ser 
                            demasiado j&oacute;venes, que posiblemente no tengan la edad m&iacute;nima para trabajar. El equipo debe observar 
                            el flujo de trabajo de la f&aacute;brica sin perturbar. Los auditores pueden optar por hablar brevemente con los 
                            trabajadores, pero no de una manera que interrumpa su trabajo ni los ponga en riesgo. El recorrido tambi&eacute;n 
                            brinda la oportunidad de examinar el equipo de seguridad, las salidas de emergencia y los sistemas para registrar 
                            los horarios de trabajo.
                        </p>

                <OwnWords>
                    <h3>
                        <OwnWords.Icon alt="Feedback"/>{" "}
                        <strong>
                            En sus propias palabras: los desaf&iacute;os a la
                            hora de verificar la edad
                        </strong>
                    </h3>
                    <p>
                        &ldquo;A fin de verificar la edad de los trabajadores, los empleadores deben tener registros u otros 
                        documentos y ponerlos a disposici&oacute;n de la autoridad competente. Estos registros deber&aacute;n 
                        indicar el nombre y apellidos y la edad o fecha de nacimiento, debidamente certificados siempre que 
                        sea posible, no solo de todas las personas menores de dieciocho a&ntilde;os empleadas por &eacute;l 
                        sino de aquellos que reciban orientaci&oacute;n o capacitaci&oacute;n profesional en el desempe&ntilde;o 
                        de sus funciones.&rdquo;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_151846/lang--es/index.htm#F4"
                            title="Convenio n&uacute;m. 138 (1973)"
                        >
                            [1]
                        </a>
                    </p>
                    <p>
                        En los casos en que no haya certificados de nacimiento para verificar la edad, o que resulte f&aacute;cil 
                        conseguir documentos falsos, se ofrecen algunas t&eacute;cnicas que pueden ser &uacute;tiles:
                        
                    </p>
                    <ul>
                        <li>
                            Examen m&eacute;dico previo a la contrataci&oacute;n, que puede ayudar a calcular la verdadera edad de 
                            la persona y verificar su aptitud f&iacute;sica para trabajar. Siempre se debe tener cuidado de respetar 
                            el derecho de la persona a la privacidad.
                        </li>
                        <li>
                            Referencias cruzadas de m&uacute;ltiples pruebas documentales y declaraciones juradas, lo cual puede 
                            ayudar a identificar documentaci&oacute;n falsa.
                        </li>
                        <li>
                            Los empleadores pueden entrevistar a empleados y postulantes que parezcan demasiado j&oacute;venes 
                            a fin de obtener m&aacute;s informaci&oacute;n.
                        </li>
                        <li>
                            Los certificados escolares pueden ser una buena fuente de informaci&oacute;n.
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_DOC_ENT_HLP_CHL_FAQ_EN/lang--en/index.htm#F5"
                            title="Eliminaci&oacute;n del trabajo infantil. Gu&iacute;a para empleadores"
                        >
                            [2]
                        </a>
                        </li>
                    </ul>
                    
                    <p>
                        Los indicadores locales tambi&eacute;n pueden resultar &uacute;tiles en los pa&iacute;ses en los que el desaf&iacute;o 
                        es que el trabajador tal vez no sepa exactamente en qu&eacute; a&ntilde;o naci&oacute;. Por ejemplo, en algunos 
                        pa&iacute;ses de Asia los ni&ntilde;os no saben en qu&eacute; a&ntilde;o nacieron pero s&iacute; saben el a&ntilde;o 
                        de qu&eacute; animal (a&ntilde;o del mono, etc.). Una persona puede saber que su cumplea&ntilde;os est&aacute; vinculado 
                        a alg&uacute;n acontecimiento hist&oacute;rico, como la independencia o el inicio o el fin de una guerra o alg&uacute;n 
                        aniversario importante. Tal vez resulte &uacute;til averiguar cu&aacute;les son los acontecimientos locales m&aacute;s 
                        importantes o las maneras de identificar el tiempo en el pa&iacute;s en que opera la empresa a fin de usar esas 
                        referencias en las entrevistas con trabajadores sobre los que tenga dudas respecto de su edad.
                    </p>
                    <p>
                        [1] V&eacute;ase el art&iacute;culo 9, inciso 3)
                        del&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312283"
                            title="Convenio n&uacute;m. 138 (1973)"
                        >
                            Convenio n&uacute;m. 138 (1973)
                        </a>
                        , relativo a la obligaci&oacute;n de los empleadores de llevar registros de los trabajadores menores de 18 a&ntilde;os.
                         <br /> [2] V&eacute;ase:{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ilo.org/global/publications/ilo-bookstore/order-online/books/WCMS_093485/lang--en/index.htm"
                            title="Eliminating Child Labour:Guides for Employers"
                        >
                            Eliminating Child Labour:Guides for Employers
                        </a>
                        , OIT, Ginebra, 2007.
                    </p>
                    <p>
                        Fuente: Extra&iacute;do del Servicio de Asistencia de la
                        OIT para empresas,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.ilo.org/empent/areas/business-helpdesk/faqs/WCMS_151846/lang--es/index.htm"
                            title="Preguntas y respuestas sobre las empresas y el trabajo forzoso"
                        >
                            <em>
                                Preguntas y respuestas sobre las empresas y el
                                trabajo forzoso
                            </em>
                        </a>
                        <em>, consultado el 11 de mayo de 2017.</em>
                    </p>
                </OwnWords>
                </Accordion.Panel>
                 </Accordion.Section>
                 {/* </Accordion>
                <Accordion id="worker-interview-acc"> */}
                <Accordion.Section id="worker-interview-description">
            <Accordion.Title>
            Entrevista a los trabajadores
                </Accordion.Title>
                <Accordion.Panel>
                    <p>
                        El equipo debe elegir un segmento transversal de trabajadores para entrevistar. Los trabajadores elegidos deben 
                        representar toda la diversidad presente en el lugar de trabajo e incluir (seg&uacute;n proceda) a hombres y 
                        mujeres, trabajadores migrantes y locales, trabajadores de distintos turnos, trabajadores que realizan distintas 
                        tareas, integrantes de distintos equipos de producci&oacute;n, etc. Si hay j&oacute;venes trabajadores en la planta, 
                        se debe entrevistar a un grupo representativo empleando t&eacute;cnicas apropiadas para la edad.
                    </p>
                    <p>
                        Las entrevistas pueden ser individuales o grupales y suelen realizarse tanto dentro como fuera de la planta. En 
                        particular en los casos donde hay indicios de infracciones atroces de las que los empleados pueden dudar en 
                        hablar en el trabajo, tal vez los auditores deban hacerse un tiempo para hablar con los trabajadores en otro 
                        lugar y fuera del horario de trabajo. Los auditores deben emplear los instrumentos de auditor&iacute;a a fin de 
                        cerciorarse de formular una amplia gama de preguntas a los trabajadores. Adem&aacute;s, deben pedir copias de los 
                        recibos de sueldo que tengan los empleados para compararlas con los registros de pago que presente la gerencia.
                    </p>
                    <p>
                        Por otra parte, las entrevistas brindan a los trabajadores la posibilidad de expresar cualquier otra inquietud 
                        que puedan tener. Se debe garantizar a los trabajadores que todas las respuestas son confidenciales y nunca se 
                        divulgar&aacute;n a la gerencia. El contrato con los proveedores debe contener una cl&aacute;usula que impida 
                        que se tomen represalias con los trabajadores por participar de una auditor&iacute;a y que debe conferir las 
                        mismas protecciones al trabajador que el mecanismo de reclamaci&oacute;n.
                    </p>
                    <p>
                        Si en la planta hay un sindicato presente, se debe entrevistar a un representante. Ante la ausencia de un 
                        sindicato u otra organizaci&oacute;n representativa de los trabajadores, los auditores deben procurar llegar a 
                        los grupos locales de defensa del trabajador. Las organizaciones locales de la sociedad civil, en especial las 
                        que abogan por los trabajadores, tambi&eacute;n pueden corroborar la informaci&oacute;n y brindar 
                        informaci&oacute;n de contexto sobre la situaci&oacute;n laboral en un lugar en particular.
                    </p>
                    <p>
                        El RST contiene un instrumento,{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.responsiblesourcingtool.org/workerinterviews"
                            title="<i>Conducting Migrant Worker Interviews</i>"
                        >
                            entrevista a los trabajadores migrantes
                        </a>
                        , que contiene ejemplos de preguntas para la entrevista que se pueden usar para entrevistar a trabajadores 
                        migrantes o a trabajadores extranjeros contratados. Las empresas pueden emplear esta herramienta para compilar 
                        sus propios cuestionarios para entrevistas con miras a aumentar las probabilidades de que los auditores 
                        identifiquen posibles casos de abuso o de trata de seres humanos inducida por los reclutadores en las plantas 
                        de la empresa, los proveedores o subcontratistas.
                    </p>
                    <OwnWords>
                        <h3>
                            <OwnWords.Icon alt="Feedback"/>{" "}
                            <strong>
                                En sus propias palabras: entrevistas a ni&ntilde;os
                            </strong>
                        </h3>
                            <p>
                                <em>
                                    &ldquo;Es necesario saber entrevistar a un ni&ntilde;o cuando se contrata a gente joven: a) para determinar 
                                    su edad, b) para evaluar la madurez en cuanto al trabajo que puede realizar, c) para determinar la posible 
                                    experiencia laboral o d) para averiguar si alguno de los trabajadores tiene menos edad que la m&iacute;nima 
                                    para el tipo de trabajo o proceso que realiza.
                                </em>
                            </p>
                            <p>
                                <em>
                                    Al entrevistar a un ni&ntilde;o que uno sospecha tiene menos edad que la m&iacute;nima obligatoria para un 
                                    tipo de trabajo en particular o que haya realizado alg&uacute;n trabajo peligroso, es importante crear un 
                                    ambiente distendido y de confianza. Tambi&eacute;n es importante que la conversaci&oacute;n tenga lugar en 
                                    un sitio donde no haya interrupciones pero que tampoco est&eacute; demasiado alejado ni fuera de la vista. 
                                    En esencia, el ni&ntilde;o debe sentirse lo m&aacute;s seguro posible.
                                </em>
                            </p>
                        <h2>
                            <em>&iquest;Qu&eacute; se debe observar?</em>
                        </h2>
                        <p>
                            <em>
                                Se debe tratar al ni&ntilde;o con respeto y reconocerlo como un sujeto de derecho.
                            </em>
                        </p>
                        <p>
                            <em>
                                Siempre debe haber dos adultos presentes en la entrevista en todo momento. Ning&uacute;n adulto puede 
                                estar demasiado tiempo a solas con ni&ntilde;os alejados de los dem&aacute;s para no despertar una 
                                preocupaci&oacute;n innecesaria en el ni&ntilde;o ni levantar sospechas de conducta inadecuada, 
                                amenazante o de abuso.
                            </em>
                        </p>
                        <p>
                            <em>
                                Al entrevistar a una ni&ntilde;a, siempre debe haber una mujer presente.
                            </em>
                        </p>
                        <p>
                            <em>
                                Se aconseja invitar a los padres o tutores de los ni&ntilde;os a la entrevista.
                            </em>
                        </p>
                        <p>
                            <em>
                                Si el ni&ntilde;o es hu&eacute;rfano y no se puede identificar al tutor ni a ning&uacute;n pariente, 
                                se puede invitar a un representante de una ONG que vela por los derechos del ni&ntilde;o.
                            </em>
                        </p>
                        <h2>
                            <em>Durante la entrevista con un ni&ntilde;o</em>
                        </h2>
                        <p>
                            <em>
                                El objetivo principal de la entrevista siempre es escuchar al ni&ntilde;o e intentar hacer una 
                                evaluaci&oacute;n general de su situaci&oacute;n familiar y laboral:
                            </em>
                        </p>
                        <div className="indent-margin">
                            <p>
                                <em>Motivos por los que trabaja el ni&ntilde;o.</em>
                            </p>
                            <p>
                                <em>
                                    &iquest;De qu&eacute; manera el ni&ntilde;o contribuye a los ingresos de la familia y cu&aacute;les 
                                    son las circunstancias de la familia (por ejemplo, desempleo, enfermedad, etc.)?
                                </em>
                            </p>
                            <p>
                                <em>
                                    &iquest;De qu&eacute; manera el ni&ntilde;o comprende el trabajo que realiza y lo valora?&rdquo;
                                </em>
                            </p>
                        </div>
                        <p>
                            Fuente: Save the Children Dinamarca.{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.cottonafrica.com/textileeastafrica/workshop for industry/Child labour toolki.pdf"
                                title="Save the Children Dinamarca, Child Labour Toolkit, Responsible Approaches to Child Labour in the Textile and Garment Industry"
                            >
                                <i>
                                    Child Labour Toolkit, Responsible Approaches to
                                    Child Labour in the Textile and Garment Industry
                                </i>
                            </a>
                            , 2006.
                        </p>
                    </OwnWords>
            </Accordion.Panel>
        </Accordion.Section>
        {/* </Accordion>
                    <Accordion id="mgmnt-interview-acc"> */}
            <Accordion.Section id="mgmnt-interview-description">
                <Accordion.Title>
                Entrevistas a la gerencia
                    </Accordion.Title>
                    <Accordion.Panel>
                    <p>
                        Las entrevistas a la gerencia brindan la oportunidad de corroborar la informaci&oacute;n recolectada 
                        en las entrevistas a los trabajadores o de encontrar discrepancias. El equipo debe entrevistar a un 
                        segmento transversal de la gerencia que comprenda al personal de recursos humanos, a los supervisores 
                        de producci&oacute;n y otros. Se deben emplear los instrumentos de auditor&iacute;a a fin de garantizar 
                        que se formule una amplia gama de preguntas a la gerencia.
                    </p>
                </Accordion.Panel>
            </Accordion.Section>
            {/* </Accordion>
                    <Accordion id="broker-interview-acc"> */}
        <Accordion.Section id="broker-interview-description">
            <Accordion.Title>
            Entrevistas con intermediarios laborales y reclutadores

                </Accordion.Title>
                <Accordion.Panel>
                <p>
                    Para las empresas que cuentan con una cantidad
                    considerable de trabajadores migrantes y contratados
                    en su cadena de suministro, hay una tendencia cada
                    vez mayor a entrevistar a los intermediarios
                    laborales y reclutadores como parte del proceso de
                    auditor&iacute;a. Lograr acceso a los intermediarios
                    laborales y reclutadores para entrevistarlos puede
                    ser un desaf&iacute;o y probablemente exija
                    coordinaci&oacute;n y cooperaci&oacute;n con el
                    proveedor. El{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://helpwanted.verite.org/helpwanted/toolkit"
                        title="<i>Kit de herramientas para la contrataci&oacute;n justa</i>"
                    >
                        Kit de Herramientas para la Contrataci&oacute;n
                        Justa
                    </a>{" "}
                    de Verit&eacute;* incluye{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://helpwanted.verite.org/helpwanted/toolkit/suppliers/managing-labor-recruiters"
                        title="ejemplos de preguntas que los reclutadores deben hacer en las entrevistas"
                    >
                        ejemplos de preguntas que los reclutadores deben
                        hacer en las entrevistas
                    </a>{" "}
                    y que fueron dise&ntilde;adas para ser usadas por empresas y por
                    auditores sociales.
                </p>
            </Accordion.Panel>
        </Accordion.Section>
        {/* </Accordion>
                    <Accordion id="doc-review-acc"> */}
            <Accordion.Section id="doc-review-description">
                <Accordion.Title>
                Examen de la documentaci&oacute;n
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            El objeto del examen de la documentaci&oacute;n es brindar una prueba tangible de cumplimiento y corroborar 
                            o encontrar discrepancias en la informaci&oacute;n recopilada en las entrevistas a trabajadores y gerentes. 
                            Los tipos de documentos que se deben examinar comprenden:
                        </p>
                        <ul>
                        <li>
                            procedimientos para verificar la edad y documentos correspondientes
                        </li>
                        <li>
                            lista maestra de trabajadores menores
                        </li>
                        <li>
                            procedimientos de selecci&oacute;n y reclutamiento
                        </li>
                        <li>
                            contratos con intermediarios laborales
                        </li>
                        <li>
                            contratos de los trabajadores o acuerdos de empleo
                        </li>
                        <li>
                            documentos personales de los trabajadores que pueden estar en poder del empleador
                        </li>
                        <li>
                            programa de introducci&oacute;n y materiales
                        </li>
                        <li>
                            archivos de personal
                        </li>
                        <li>
                            comunicaci&oacute;n con los empleados y plan de capacitaci&oacute;n (por ejemplo, certificados de 
                            capacitaci&oacute;n en determinadas especialidades, preparaci&oacute;n de los trabajadores, programas 
                            de certificaci&oacute;n del gobierno, orientaci&oacute;n sobre sistemas o pol&iacute;ticas)
                        </li>
                        <li>
                            convenios colectivos de trabajo, incluida la certificaci&oacute;n sindical, la funci&oacute;n 
                            del sindicato y el acta de las reuniones
                        </li>
                        <li>
                            contratos con agencias de seguridad y alcance de sus responsabilidades
                        </li>
                        <li>
                            registros de la n&oacute;mina de pagos y de horarios
                        </li>
                        <li>
                            informes sobre la capacidad de producci&oacute;n
                        </li>
                        <li>
                            pol&iacute;ticas y procedimientos escritos de recursos humanos
                        </li>
                        <li>
                            planes de seguridad y salud en el trabajo y registros, incluidos los permisos legales, registros de mantenimiento, 
                            vigilancia y seguimiento, informes de lesiones y accidentes, procedimientos de investigaci&oacute;n, inventario de 
                            sustancias qu&iacute;micas, inventario de equipo de protecci&oacute;n personal, certificados de capacitaci&oacute;n 
                            y planes de evacuaci&oacute;n.
                        </li>
                        <li>
                            avisos disciplinarios
                        </li>
                        <li>
                            informes de reclamaci&oacute;n
                        </li>
                        <li>
                        evaluaciones de desempe&ntilde;o
                        </li>
                        <li>
                            ascensos o aumentos por m&eacute;rito
                        </li>
                        <li>
                            registros de despidos y suspensiones
                        </li>
                        <li>
                            registros de empleados que renunciaron
                        </li>

                        <li>
                            recibos de sueldo de los trabajadores
                        </li>
                        </ul>
                </Accordion.Panel>
            </Accordion.Section>
            {/* </Accordion>

                     <Accordion id="closing-meeting-acc"> */}
    <Accordion.Section id="closing-meeting-description">
        <Accordion.Title>
        Reuni&oacute;n de clausura con la gerencia
            </Accordion.Title>
            <Accordion.Panel>
            <p>
                La reuni&oacute;n de clausura es el momento de notificar a la gerencia cualquier infracci&oacute;n al c&oacute;digo 
                identificada en la planta. Algunas empresas usan la reuni&oacute;n de clausura para solicitar a la gerencia propuestas 
                para solucionar problemas o para ayudarla a elaborar un plan de acci&oacute;n correctiva. Otras empresas aprovechan 
                esta reuni&oacute;n para hablar de problemas con la gerencia, pero redactan los planes de acci&oacute;n correctiva una 
                vez que haya concluido la auditor&iacute;a y que el equipo completo haya examinado el informe correspondiente.
            </p>
        </Accordion.Panel>
    </Accordion.Section>
    {/* </Accordion>
                    <Accordion id="report-prep-acc"> */}
    <Accordion.Section id="report-prep-description">
        <Accordion.Title>
        Elaboraci&oacute;n del informe
            </Accordion.Title>
            <Accordion.Panel>
            <p>
                El equipo de auditor&iacute;a elabora un informe completo de la misma.
            </p>
            <p>
                La duraci&oacute;n de la auditor&iacute;a depende del tama&ntilde;o del lugar de trabajo. La mayor&iacute;a de las 
                auditor&iacute;as duran de uno a dos d&iacute;as, pero pueden durar m&aacute;s, y las empresas deben invertir en 
                ellas, si el lugar de trabajo y la fuerza laboral son grandes o si se identifican infracciones considerables que 
                deben investigarse. Las auditor&iacute;as que emanan de una denuncia realizada de manera an&oacute;nima o de una 
                reclamaci&oacute;n pueden llevar m&aacute;s tiempo de investigaci&oacute;n, en especial si exigen la intervenci&oacute;n 
                de las autoridades responsables de la aplicaci&oacute;n de la ley.
            </p>
        </Accordion.Panel>
    </Accordion.Section>
    </Accordion>
            </div>
        </StaticData>
    );
};

export default es;
