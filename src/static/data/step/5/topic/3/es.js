import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

import StaticData from "../../../../../../components/StaticData";
import usFlag from "../../../../../images/us_flag.png";
import verite from "../../../../../images/verite.png";
import { UsFlag, Verite, VeriteFlagWrapper } from "./shared";
import Accordion from "../../../../../../components/Accordion"; 

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>Normas para el trabajo infantil y el trabajo forzoso</h1>
                <p>
                    El c&oacute;digo de conducta y los instrumentos de
                    auditor&iacute;a de cada empresa deben incluir las normas
                    que se indican a continuaci&oacute;n, tomadas de los
                    Convenios de la OIT:
                </p>
                <h2>Trabajo infantil</h2>
                <ul>
                    <li>
                        La edad m&iacute;nima para trabajar debe ser de 15
                        a&ntilde;os, o de 14 si los pa&iacute;ses ratificaron el
                        Convenio 138 y presentaron ante la OIT una
                        justificaci&oacute;n de la edad m&iacute;nima menor al
                        momento de ratificarlo.
                    </li>
                    <li>
                        Se permite que los ni&ntilde;os y j&oacute;venes que no
                        hayan alcanzado la edad m&iacute;nima para trabajar
                        trabajen <em>en escuelas</em> de formaci&oacute;n
                        general, profesional o t&eacute;cnica.
                    </li>
                    <li>
                        Tambi&eacute;n se permite que los ni&ntilde;os de 14
                        a&ntilde;os en adelante trabajen fuera de una escuela
                        que sea parte de un programa de formaci&oacute;n
                        profesional u ocupacional con determinadas
                        salvaguardias.
                    </li>
                    <li>
                        A los ni&ntilde;os de 13 a 15 a&ntilde;os (12 a 14 en
                        los pa&iacute;ses con una edad m&iacute;nima de 14) se
                        les permite realizar &ldquo;trabajo ligero&rdquo; que no
                        sea perjudicial para su salud ni desarrollo y que no
                        interfiera con la escuela siempre y cuando el
                        pa&iacute;s haya especificado las actividades que pueden
                        realizar los ni&ntilde;os, la cantidad de horas y las
                        condiciones en que las realizar&aacute;n.
                    </li>
                </ul>
                <p>
                    A continuaci&oacute;n se indican las peores formas de
                    trabajo infantil, que deben prohibirse para todos los
                    ni&ntilde;os menores de 18 a&ntilde;os:
                </p>
                <ol type="a">
                    <li>
                        todas las formas de esclavitud o las pr&aacute;cticas
                        an&aacute;logas a la esclavitud, como la venta y la
                        trata de ni&ntilde;os, la servidumbre por deudas y la
                        condici&oacute;n de siervo, y el trabajo forzoso u
                        obligatorio, incluido el reclutamiento forzoso u
                        obligatorio de ni&ntilde;os para utilizarlos en
                        conflictos armados;
                    </li>
                    <li>
                        la utilizaci&oacute;n, el reclutamiento o la oferta de
                        ni&ntilde;os para la prostituci&oacute;n, la
                        producci&oacute;n de pornograf&iacute;a o actuaciones
                        pornogr&aacute;ficas;
                    </li>
                    <li>
                        la utilizaci&oacute;n, el reclutamiento o la oferta de
                        ni&ntilde;os para la realizaci&oacute;n de actividades
                        il&iacute;citas, en particular la producci&oacute;n y el
                        tr&aacute;fico de estupefacientes, tal como se definen
                        en los tratados internacionales pertinentes, y
                    </li>
                    <li>
                        el trabajo que, por su naturaleza o por las condiciones
                        en que se lleva a cabo, es probable que da&ntilde;e la
                        salud, la seguridad o la moralidad de los ni&ntilde;os.
                    </li>
                </ol>
                <p>
                    Fuente: Art&iacute;culo 3 del{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                        title="Convenio 182 de la OIT"
                    >
                        Convenio 182 de la OIT
                    </a>
                    .
                </p>
                <h2>Trabajo peligroso para los ni&ntilde;os</h2>
                <p>
                    Seg&uacute;n el art&iacute;culo 3, inciso d) del Convenio
                    182 de la OIT, los tipos de trabajo peligroso
                    &ldquo;deber&aacute;n ser determinados por la
                    legislaci&oacute;n nacional o por la autoridad competente,
                    previa consulta con las organizaciones de empleadores y de
                    trabajadores interesadas y tomando en consideraci&oacute;n
                    las normas internacionales en la materia&hellip;&rdquo;
                    [Convenio 182 de la OIT, art&iacute;culo 4]. Tal como esto
                    sugiere, las formas de trabajo identificadas como
                    &ldquo;peligrosas&rdquo; para los ni&ntilde;os
                    [art&iacute;culo 3, inciso d)] pueden variar de un
                    pa&iacute;s a otro. &nbsp;Cada pa&iacute;s compila su propia
                    lista de formas de trabajo peligrosas prohibidas para los
                    ni&ntilde;os menores de 18. La Recomendaci&oacute;n
                    n&uacute;m. 190 de la OIT, que acompa&ntilde;a al Convenio
                    182 de la OIT, brinda directrices adicionales para
                    identificar el &ldquo;trabajo peligroso&rdquo;. En la
                    secci&oacute;n II, p&aacute;rrafo 3 de dicha
                    recomendaci&oacute;n se menciona que &ldquo;[a]l determinar
                    y localizar d&oacute;nde se practican los tipos de trabajo a
                    que se refiere el art&iacute;culo 3, inciso d) del Convenio
                    [Convenio 182 de la OIT], deber&iacute;a tomarse en
                    consideraci&oacute;n, entre otras cosas:
                </p>
                <ol type="a">
                    <li>
                        los trabajos en que el ni&ntilde;o queda expuesto a
                        abusos de orden f&iacute;sico, psicol&oacute;gico o
                        sexual;
                    </li>
                    <li>
                        los trabajos que se realizan bajo tierra, bajo el agua,
                        en alturas peligrosas o en espacios cerrados;
                    </li>
                    <li>
                        los trabajos que se realizan con maquinaria, equipos y
                        herramientas peligrosos, o que conllevan la
                        manipulaci&oacute;n o el transporte manual de cargas
                        pesadas;
                    </li>
                    <li>
                        los trabajos realizados en un medio insalubre en el que
                        los ni&ntilde;os est&eacute;n expuestos, por ejemplo, a
                        sustancias, agentes o procesos peligrosos, o bien a
                        temperaturas o niveles de ruido o de vibraciones que
                        sean perjudiciales para la salud;
                    </li>
                    <li>
                        los trabajos que impliquen condiciones especialmente
                        dif&iacute;ciles, como los horarios prolongados o
                        nocturnos, o los trabajos que retengan
                        injustificadamente al ni&ntilde;o en los locales del
                        empleador.&rdquo;
                    </li>
                </ol>
                <h2>Trabajo forzoso y trata de personas</h2>
                <p>
                    Todos los c&oacute;digos de conducta deben contener
                    disposiciones que proh&iacute;ban el trabajo forzoso y la
                    trata de personas. El trabajo forzoso y la trata de personas
                    son fen&oacute;menos estrechamente relacionados y, en
                    algunos casos, coincidentes, motivo por el cual en los
                    c&oacute;digos se los suele combinar en una misma
                    categor&iacute;a.
                </p>
                <p>
                    En{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ilo.org/global/topics/forced-labour/publications/WCMS_099625/lang--en/index.htm"
                        title="<i>Lucha contra el trabajo forzoso - Manual para empleadores y empresas - Folleto 3</i>"
                    >
                        <em>
                            <i>
                                Lucha contra el trabajo forzoso: Manual para
                                empleadores y empresas - Folleto 3
                            </i>
                        </em>
                    </a>
                    , la OIT brinda directrices sobre las normas relativas al
                    trabajo forzoso que las empresas deben considerar incluir en
                    sus c&oacute;digos. Otros recursos &uacute;tiles sobre
                    pol&iacute;ticas y normas son los{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://business-humanrights.org/en/pdf-athens-ethical-principles"
                        title="Principios &eacute;ticos de Atenas"
                    >
                        Principios &Eacute;ticos de Atenas
                    </a>
                    , conjunto de siete principios referidos a la lucha contra
                    la trata de personas de adhesi&oacute;n voluntaria para las
                    empresas y sus{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://fpbb.pl/user_upload/static/file/Luxor_Implementation_Guidelines_Ethical_Principles.pdf"
                        title="Directrices de Aplicaci&oacute;n de Luxor"
                    >
                        Directrices de Aplicaci&oacute;n de Luxor
                    </a>
                    , que pueden ayudar a las empresas a incorporar en sus
                    c&oacute;digos disposiciones sobre la lucha contra la trata
                    de personas; la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/"
                        title="Interfaith Center on Corporate Responsibility (ICCR)"
                    >
                        Declaraci&oacute;n de principios y pr&aacute;cticas
                        recomendadas para combatir la trata de seres humanos y
                        la esclavitud moderna
                    </a>{" "}
                    del{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.iccr.org/sites/default/files/resources_attachments/2013ICCR_HTPrinciplesFINAL112013.pdf"
                        title="Declaraci&oacute;n de principios y pr&aacute;cticas recomendadas para combatir la trata de seres humanos y la esclavitud moderna"
                    >
                        Interfaith Center on Corporate Responsibility (ICCR)
                    </a>
                    ; y los{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.americanbar.org/content/dam/aba/administrative/business_law/aba_model_policies.authcheckdam.pdf"
                        title="Modelos de pol&iacute;ticas para empresas y proveedores sobre la trata con fines de explotaci&oacute;n laboral y el trabajo infantil"
                    >
                        Modelos de pol&iacute;ticas para empresas y proveedores
                        sobre la trata con fines de explotaci&oacute;n laboral y
                        el trabajo infantil
                    </a>{" "}
                    del Colegio de Abogados de los Estados Unidos (ABA).{" "}
                </p>
                <p>
                    En los &uacute;ltimos a&ntilde;os, a medida que las empresas
                    fueron adquiriendo m&aacute;s conocimientos sobre la
                    naturaleza del trabajo forzoso y las modalidades que adopta
                    en las cadenas de suministro, comenzaron a incorporar nuevas
                    disposiciones en sus c&oacute;digos de conducta. Algunos
                    ejemplos son la prohibici&oacute;n de que los trabajadores
                    paguen tasas de reclutamiento y el requisito de que los
                    empleadores ofrezcan una &ldquo;contrataci&oacute;n
                    directa&rdquo; o &ldquo;empleo directo&rdquo; a los
                    trabajadores. En un documento de pol&iacute;tica de Hewlett
                    Packard Enterprise* de 2016 se explican los motivos basados
                    en riesgos por los que la empresa opt&oacute; por una
                    pol&iacute;tica de &ldquo;empleo directo&rdquo;.{" "}
                </p>
                
                <h2>Recursos</h2>
                <p>
                    Un recurso clave para redactar las disposiciones del
                    c&oacute;digo de conducta de manera de evitar el trabajo
                    forzoso en las cadenas de suministro mundiales es el
                    instrumento de abastecimiento responsable{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/"
                        title="Instrumento de abastecimiento responsable"
                    >
                        Responsible Sourcing Tool
                    </a>{" "}
                    (RST). Lanzado en 2016 por{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.verite.org/"
                        title="Verit&eacute;"
                    >
                        Verit&eacute;
                    </a>{" "}
                    y el Departamento de Estado de los Estados Unidos, RST
                    ofrece una serie de recursos orientados al cumplimiento,
                    as&iacute; como instrumentos para la gesti&oacute;n de
                    riesgos para empresas, contratistas del gobierno federal,
                    profesionales de adquisiciones y contrataci&oacute;n,
                    defensores, inversionistas, consumidores y otros interesados
                    que deseen identificar, prevenir y tratar la
                    problem&aacute;tica del trabajo forzoso en sus cadenas de
                    suministro. El instrumento 1,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.responsiblesourcingtool.org/codeofconduct"
                        title="Ejemplo de disposiciones del c&oacute;digo de conducta"
                    >
                        Ejemplo de disposiciones del c&oacute;digo de conducta
                    </a>
                    , contiene disposiciones relativas al trabajo forzoso que se
                    pueden incorporar en el c&oacute;digo de conducta de una
                    empresa o industria. Adem&aacute;s, el RST contiene otros
                    instrumentos relativos al reclutamiento responsable de mano
                    de obra, como el instrumento 3,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/laborrecruitments"
                    >
                         Evaluación de la contratación de mano de obra
                    </a>
                    , que ayuda a las empresas a realizar la debida diligencia
                    en el proceso de examen y selecci&oacute;n de los
                    reclutadores de obreros a fin de reducir al m&iacute;nimo el
                    riesgo de trata de seres humanos como resultado de
                    pr&aacute;cticas de reclutamiento fraudulentas o
                    enga&ntilde;osas.
                </p>
                <ExampleInAction id="rst1">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Ejemplo en acci&oacute;n:{" "}
                            <span>
                                herramienta 1 del RST
                            </span>
                        </strong>
                    </h3>
                    <VeriteFlagWrapper>
                        <UsFlag src={usFlag} alt="US Flag" />
                        <Verite src={verite} alt="Verite sign" />
                    </VeriteFlagWrapper>
                    <p style={{ color: "black" }}>
                        <strong>
                            PROTECCIONES CONTRA LA TRATA DE PERSONAS
                        </strong>
                    </p>
                    <p style={{ color: "black" }}>
                        <strong>
                            Ejemplo de disposiciones del c&oacute;digo de
                            conducta
                        </strong>
                    </p>
                    <p>Fuente: Responsible Sourcing Tool,&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/codeofconduct"
                    >
                    herramienta 1, Ejemplo de código de conducta
                    </a>.
                    </p>
                    <p>
                    Véase también la herramienta 1A del RST,&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/recruitmentandemployment"
                    >
                    Ejemplos de parámetros de referencia de buenas prácticas en la contratación y el empleo
                    </a>.
                    </p>
                    <p>
                    La página&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/recruitmentandemployment"
                    >
                    ResponsibleSourcingTool.org
                    </a>
                    &nbsp;se creó gracias a una colaboración entre el Departamento de
                    Estado de los Estados Unidos,&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/recruitmentandemployment"
                    >
                    Verité, Made in a Free World
                    </a>
                    &nbsp;y el&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.responsiblesourcingtool.org/recruitmentandemployment"
                    >
                    Aspen Institute
                    </a>
                    . El contenido de
                    RST fue aportado por Verité, organización dedicada a los derechos laborales con conocimientos
                    especializados en la cadena de suministro, con fondos de la Oficina del Departamento de Estado para
                    Controlar y Combatir la Trata de Personas con arreglo al acuerdo de cooperación S-SJTIP-13-CA-1029.
                    Para elaborar el RST se contó con los aportes de varios expertos de dependencias públicas de los
                    Estados Unidos, como los departamentos de Estado y Trabajo, y otros interesados principales, como
                    sobrevivientes de la trata, dirigentes de empresas y ONG, personal de adquisiciones y oficiales de contratación de la instancia federal.
                    </p>

                </ExampleInAction>
                <br />
                <ExampleInAction id="rst1">
                    <h3>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Ejemplo en acci&oacute;n:{" "}
                            <span>
                                el código de conducta de Primark* de 2019
                            </span>
                        </strong>
                    </h3>
                    <p>
                    Los ejemplos de disposiciones del código de conducta en materia de trabajo forzoso y trabajo infantil se tomaron del&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.primark.com/en/our-ethics/code-of-conduct"
                    >
                    Código de Conducta de Primark
                    </a>.
                    </p>
                    <p>
                    <strong>Empleo libremente elegido</strong>
                    <ol>
                    <li>No puede haber trabajo forzoso ni obligatorio en ninguna de sus formas (en régimen de servidumbre, utilizando víctimas de la trata o reclusos) y las horas extra deben ser voluntarias.</li>
                    <li>Toda comisión relacionada con el empleo del trabajador debe ser pagada por el empleador.</li>
                    <li>No se puede obligar a los trabajadores a realizar depósitos monetarios de ningún tipo ni a entregar sus documentos de identidad al empleador</li>
                    <li>Los trabajadores deben ser libres de desvincularse laboralmente tras un plazo razonable de preaviso.</li>
                    </ol>
                    </p>
                    <p>
                    <strong>Prohibición de usar el trabajo infantil</strong>
                    <ol>
                    <li>No se puede contratar ni utilizar el trabajo infantil.</li>
                    <li>En cualquier país, la edad mínima para trabajar, así como las reglas que rigen el empleo de un trabajador joven, se definirán de conformidad con los convenios de la
                     OIT o con la legislación nacional o regional, el que confiera mayor protección a la persona. Para aclarar, en este contexto por trabajador joven se entiende todo aquel que tiene edad legal para trabajar pero que aún no ha cumplido 18 años.</li>
                    <li>Las empresas deben contar con políticas y programas que eviten la contratación y el empleo de trabajo infantil.</li>
                    </ol>
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
