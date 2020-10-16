import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import Accordion from "../../../../../../components/Accordion";
import apsca from "../../../../../../static/images/apsca.jpg";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>El equipo de auditor&iacute;a</h1>
                <h2>Personal</h2>
                <p>
                El equipo de cumplimiento social est&aacute; conformado por el personal de cumplimiento social en la 
                sede central de la empresa y el personal de campo que coordina las auditor&iacute;as o las realiza. 
                Para las empresas que cuentan con un programa de auditor&iacute;as internas, los integrantes del 
                equipo de auditor&iacute;a son empleados de la empresa; en el caso de empresas que recurren a auditores 
                externos, los integrantes del equipo de auditor&iacute;a son auditores contratados que trabajan para 
                entidades externas (con o sin fines de lucro). Algunas empresas emplean auditores tanto internos como 
                externos, seg&uacute;n el sector o la ubicaci&oacute;n de la planta.
                </p>
                <p>
                Los tres enfoques de auditor&iacute;a que se presentan a continuaci&oacute;n pueden ser fiables siempre y 
                cuando est&eacute;n bien administrados por el equipo de cumplimiento social y se realicen en el marco de 
                un programa integral de cumplimiento social. Sin embargo, cada enfoque tiene ventajas y desventajas.
                </p>
                <Accordion id="int-auditors-acc">
                            <Accordion.Section id="int-auditors-description">
                                <Accordion.Title>
                                Auditores internos
                                    </Accordion.Title>
                                    <Accordion.Panel>
                                    <p>
                                    Los auditores internos son empleados de la empresa capacitados en las especialidades y 
                                    competencias de la auditor&iacute;a social. Una ventaja de usar auditores internos es que 
                                    probablemente resulte m&aacute;s f&aacute;cil comunicarse con ellos; por ejemplo, si se 
                                    introducen cambios a una pol&iacute;tica, es m&aacute;s f&aacute;cil garantizar la 
                                    coherencia interna con el personal propio que hacerlo con auditores externos contratados. 
                                    Adem&aacute;s, es probable que los auditores internos conozcan m&aacute;s a fondo la totalidad 
                                    del programa de cumplimiento social de la empresa y puedan contribuir m&aacute;s all&aacute; 
                                    de la auditor&iacute;a. Por otro lado, dado que los auditores internos son empleados de la 
                                    empresa, algunas partes interesadas pueden cuestionar la credibilidad de sus conclusiones.
                                    </p>
                                </Accordion.Panel>
                            </Accordion.Section>
                            {/* </Accordion>

                 <Accordion id="ext-auditors-acc"> */}
                            <Accordion.Section id="ext-auditors-description">
                            <Accordion.Title>
                            Auditores externos
                                </Accordion.Title>
                                <Accordion.Panel>
                                <p>
                                Los auditores externos son profesionales de la auditor&iacute;a con especialidades y competencias 
                                definidas, empleados por firmas de auditor&iacute;a social ajenas a la empresa. Son una fuerza 
                                laboral flexible y puede estar disponible en lugares geogr&aacute;ficos donde a la empresa no 
                                le resulte rentable tener auditores internos. Dado que a los auditores externos tambi&eacute;n 
                                les paga la empresa para que realicen las auditor&iacute;as, algunas partes interesadas pueden 
                                poner en tela de juicio las conclusiones. Asimismo, algunos grupos de auditores externos tal vez 
                                tengan sus propios sistemas, los cuales quiz&aacute;s no se adapten plenamente a los protocolos o 
                                par&aacute;metros propios de la empresa. La empresa que recurre a un tercero para que realice una 
                                auditor&iacute;a externa o verifique una auditor&iacute;a interna tambi&eacute;n debe considerar a 
                                la entidad en particular que realiza la auditor&iacute;a. Un auditor externo e independiente por 
                                su sola condici&oacute;n no garantiza la ausencia total de riesgo.
                                </p>
                            </Accordion.Panel>
                        </Accordion.Section>
                        {/* </Accordion>
                <Accordion id="independent-auditors-acc"> */}
                        <Accordion.Section id="independent-auditors-description">
                        <Accordion.Title>
                        Encargados de la vigilancia o verificadores independientes

                            </Accordion.Title>
                            <Accordion.Panel>
                            <p>
                            Los verificadores o auditores independientes son profesionales de la auditor&iacute;a acreditados por 
                            instituciones o mecanismos, como organismos profesionales o comerciales, cuya funci&oacute;n consiste 
                            en garantizar que se realice la auditor&iacute;a sin ninguna transacci&oacute;n financiera directa entre 
                            la empresa y el auditor. Por lo general, la empresa le paga a una instituci&oacute;n separada e independiente 
                            por los servicios de auditor&iacute;a, por afiliarse, o ambos. La instituci&oacute;n acredita a los auditores 
                            en virtud de normas establecidas y se encarga de programar todas las auditor&iacute;as y supervisarlas. Si bien 
                            esto est&aacute; dise&ntilde;ado para aumentar la credibilidad de la auditor&iacute;a, en algunos sectores o 
                            lugares geogr&aacute;ficos, tal vez no se pueda coordinar este tipo de arreglo. Adem&aacute;s, incluso sin 
                            transacci&oacute;n financiera directa de por medio, algunas partes interesadas pueden tener dudas acerca del 
                            grado de independencia entre el auditor y la entidad auditada. Hay distintos grados de independencia y, en 
                            definitiva, debe evaluarse caso por caso.
                            </p>
                            <p>
                                Si desea lograr la mayor eficacia y credibilidad y la empresa opta por usar auditores externos, tal vez se 
                                deba solicitar la participaci&oacute;n de entidades independientes para algunas funciones del sistema de 
                                cumplimiento social. Ver{" "}
                                <Link to="/steps/9">
                                s&eacute;ptimo paso, Examen independiente
                                </Link> 
                                , donde se tratar&aacute; m&aacute;s el tema de vigilancia, seguimiento y verificaci&oacute;n independientes.
                                
                            </p>
                        </Accordion.Panel>
                    </Accordion.Section>
                    </Accordion>
                <h2>Competencias del auditor</h2>
                <p>
                    Ya sea interno, externo o independiente, todo auditor debe poseer especialidades y conocimientos espec&iacute;ficos para 
                    realizar auditor&iacute;as eficaces. En los &uacute;ltimos a&ntilde;os, varios organismos se esforzaron por formalizar 
                    y documentar las especialidades y los conocimientos est&aacute;ndar que todo auditor debe poseer. Por ejemplo, la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.theapsca.org/"
                        title="Asociaci&oacute;n de Auditores Profesionales de Cumplimiento Social (APSCA)"
                    >
                        Asociaci&oacute;n de Auditores Profesionales de Cumplimiento Social (APSCA)
                    </a>{" "}
                    es un &oacute;rgano encabezado por profesionales que actualmente est&aacute; trabajando para definir el proceso de 
                    certificaci&oacute;n para los auditores de cumplimiento social. Algunos de los conocimientos necesarios son una 
                    comprensi&oacute;n detallada de las normas internacionales del trabajo, los entornos y procesos de producci&oacute;n 
                    de la industria y las culturas y los idiomas locales.
                </p>
                <p>
                Es importante que los auditores tambi&eacute;n est&eacute;n capacitados en protocolos espec&iacute;ficos para manejar 
                situaciones delicadas que impliquen a ni&ntilde;os o a v&iacute;ctimas adultas de explotaci&oacute;n atroz. Los auditores 
                deben estar preparados para interactuar con ni&ntilde;os y tomar medidas en nombre de estos que sean adecuadas para la edad. 
                Una empresa de auditor&iacute;a tambi&eacute;n debe contar con procedimientos para asegurar que las v&iacute;ctimas de 
                trabajo infantil o de trabajo forzoso reciban atenci&oacute;n y servicios de inmediato de personas u organizaciones calificadas.
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Ejemplo en acci&oacute;n: marco de competencias de la Asociaci&oacute;n de Auditores Profesionales de Cumplimiento Social (APSCA)*
                    </h3>
                    <p>
                    La designaci&oacute;n de auditor de cumplimiento social certificado (CSCA) de la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.theapsca.com/"
                        title="APSCA"
                    >
                        APSCA
                    </a>{" "}implica que la persona demuestra 
                    tener experiencia, conocimientos y competencias espec&iacute;ficas en el &aacute;mbito de auditor&iacute;as de 
                    cumplimiento social. Mediante un riguroso proceso de certificaci&oacute;n (que implica experiencia, estudios, 
                    ex&aacute;menes y evaluaci&oacute;n), el candidato a la certificaci&oacute;n CSCA debe demostrar que posee las 
                    competencias b&aacute;sicas pertinentes para la profesi&oacute;n. A continuaci&oacute;n, se presenta el marco de 
                    competencias de APSCA, con las competencias b&aacute;sicas y los &aacute;mbitos de conocimiento funcional.
                    </p>
                    <br />
                                    <img
                        src={apsca} 
                        />
                                     <br />
                               
                                <p>
                                Fuente: APSCA, Competency Framework:
                                <br />
                                {""}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                                title="https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf"
                            >
                                https://www.theapsca.com/uploads/7/3/4/0/73406857/apsca_competency_framework_-d-011.pdf
                            </a>{""}
                                .
                                </p>
                </ExampleInAction>

                <h2>Composici&oacute;n del equipo</h2>
                <p>
                El tama&ntilde;o y la composici&oacute;n del equipo de auditor&iacute;a depende del tama&ntilde;o y tipo de planta 
                que se auditar&aacute;, de la cantidad de trabajadores que haya en dicha planta y del tipo de fuerza laboral, 
                incluidos los idiomas y la composici&oacute;n cultural de los trabajadores. Si la planta es grande y en ella se 
                hablan varios idiomas, se debe contar con auditores que hablen cada uno de esos idiomas. El sexo de los trabajadores 
                tambi&eacute;n es una consideraci&oacute;n importante. Por ejemplo, suele ser preferible que las mujeres sean 
                entrevistadas por una mujer a fin de facilitar un di&aacute;logo m&aacute;s distendido sobre temas como el acoso 
                sexual.
                </p>
                <p>
                Muchas empresas prefieren que los auditores sean ciudadanos del pa&iacute;s donde se realizar&aacute;n las 
                auditor&iacute;as ya que conocen la cultura, el idioma y las costumbres; adem&aacute;s, contratar auditores 
                locales contribuye al fortalecimiento sostenible de la capacidad local.
                </p>
                <p>
                El jefe de equipo debe garantizar que el equipo funcione de manera interactiva. Dado que las infracciones 
                pueden ser sutiles, o ser ocultadas de los auditores adrede, el equipo no debe limitarse a dividir las 
                responsabilidades laborales; en muchos casos, m&aacute;s de un auditor debe analizar un mismo tema y el 
                equipo debe reunirse para evaluar las conclusiones y garantizar que se identifiquen conexiones y patrones. 
                Todo el equipo debe estar de acuerdo con las conclusiones finales de la auditor&iacute;a.
                </p>
                <ExampleInAction id="better_work_assessment">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Ejemplo en acci&oacute;n: equipos de evaluaci&oacute;n
                        del programa Better Work
                    </h3>
                    <p>
                        El programa Better Work tiene una amplia normativa que rige el trabajo de los equipos de 
                        evaluaci&oacute;n, como el requisito de que en toda evaluaci&oacute;n haya dos 
                        &ldquo;asesores de la empresa&rdquo; [auditores] presentes en las evaluaciones no anunciadas. Los{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://betterwork.org/our-work/factory-services"
                            title="Asesores de Better Work"
                        >
                            asesores de Better Work
                        </a>{" "}
                        se contratan localmente y reciben amplia capacitaci&oacute;n. Los equipos siempre est&aacute;n conformados 
                        por un asesor m&aacute;s experimentado y uno nuevo y nunca va el mismo par de auditores a visitas consecutivas 
                        de una misma f&aacute;brica. Los asesores que realizan las evaluaciones de una planta en particular nunca son 
                        los mismos que brindan los servicios de remediaci&oacute;n o asesor&iacute;a.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
