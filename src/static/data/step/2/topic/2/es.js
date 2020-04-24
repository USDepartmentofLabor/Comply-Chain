import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction";
import betterwork from "../../../../../../static/images/betterwork.jpg";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>ncorporaci&oacute;n a un programa de
                                cumplimiento social</h1>
                                <p>
                                    En algunas industrias, hay grupos de
                                    empresas que ya se reunieron para elaborar
                                    sistemas de cumplimiento social conjuntos o,
                                    en algunos casos, componentes de sistemas
                                    que las empresas individuales pueden
                                    adoptar. Incorporarse a estas redes, por lo
                                    general, implica un compromiso de tiempo y
                                    recursos para colaborar con otras empresas
                                    pero, a la larga, se pueden ahorrar
                                    esfuerzos y recursos ya que se aprovechan
                                    los conocimientos y las experiencias de
                                    otras empresas. Es importante informarse
                                    sobre estas iniciativas vigentes en la
                                    industria antes de decidir sumarse a un
                                    programa actual o elaborar uno propio.
                                </p>
                                <ExampleInAction id="better-work-garment">
                                    <h4>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        <strong>
                                            Ejemplo en acci&oacute;n
                                        </strong>
                                        : el programa{" "}
                                        <em>
                                            <strong>Better Work</strong>
                                        </em>{" "}
                                        en la industria de la vestimenta
                                    </h4>
                                    <p>
                                        El programa{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="http://betterwork.org/"
                                            title="Better Work"
                                        >
                                            Better Work
                                        </a>
                                        , iniciativa conjunta de la
                                        Organizaci&oacute;n Internacional del
                                        Trabajo (OIT) y la Corporaci&oacute;n
                                        Financiera Internacional (CFI),
                                        est&aacute; dise&ntilde;ado para mejorar
                                        las pr&aacute;cticas y la productividad
                                        laborales en el sector de la vestimenta.{" "}
                                        <em>Better Work</em> es un programa
                                        transparente para la vigilancia y el
                                        seguimiento de f&aacute;bricas llevado
                                        adelante por un &oacute;rgano de
                                        vigilancia cre&iacute;ble (la OIT) en
                                        los pa&iacute;ses participantes. Los
                                        asesores de empresas de la OIT
                                        contratados a nivel local visitan las
                                        f&aacute;bricas para evaluar el
                                        cumplimiento de las normas fundamentales
                                        del trabajo (sobre libertad sindical y
                                        negociaci&oacute;n colectiva,
                                        discriminaci&oacute;n laboral, trabajo
                                        infantil y trabajo forzoso) as&iacute;
                                        como la legislaci&oacute;n nacional en
                                        materia de remuneraci&oacute;n,
                                        relaciones con los contratistas y en el
                                        lugar de trabajo, seguridad y salud
                                        ocupacionales y horario de trabajo.{" "}
                                        <em>Better Work</em> hace
                                        p&uacute;blicas estas evaluaciones en su{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://portal.betterwork.org/transparency"
                                            title="Portal de transparencia"
                                        >
                                            portal de transparencia
                                        </a>
                                        , con lo cual los compradores
                                        internacionales pueden dirigir sus
                                        pedidos a f&aacute;bricas que avanzan en
                                        el cumplimiento. En el programa
                                        tambi&eacute;n se asesora a las empresas
                                        y se les ofrece asistencia para la
                                        remediaci&oacute;n a fin de mejorar el
                                        cumplimiento. <em>Better Work</em>{" "}
                                        est&aacute; estructurado de manera tal
                                        de armonizar los incentivos de los
                                        propietarios de f&aacute;bricas, los
                                        compradores, los gobiernos y los
                                        trabajadores m&aacute;s efectivamente a
                                        fin de proteger los derechos y mejorar
                                        el sustento. El Departamento de Trabajo
                                        de los EE.UU. es una fuente de fondos
                                        importante de los programas{" "}
                                        <em>Better Work</em> en varios
                                        pa&iacute;ses, junto con varios otros
                                        gobiernos e instituciones donantes.
                                    </p>
                                    <img
                                        src={betterwork}
                                        alt="Trabajo en una f&aacute;brica limpia y bien iluminada"
                                    />{" "}
                                    <br />
                                    <div className="small-text">
                                        <p>
                                            &copy; Better Work Jordania/Foto de
                                            Ala&rsquo;a al Sukhni
                                        </p>
                                    </div>
                                </ExampleInAction>
                                <p>
                                    La mayor&iacute;a de las asociaciones de la
                                    industria posee una serie b&aacute;sica de
                                    requisitos para toda compa&ntilde;&iacute;a
                                    que aspire a integrar la asociaci&oacute;n.
                                    Por ejemplo, los miembros de la{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.responsiblebusiness.org/"
                                        title="Responsible Business Alliance (RBA)"
                                    >
                                        Responsible Business Alliance (RBA)
                                    </a>
                                    , anteriormente conocida como Electronic
                                    Industry Citizenship Coalition (EICC) se
                                    comprometen a seguir un{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.eiccoalition.org/standards/"
                                        title="C&oacute;digo de conducta"
                                    >
                                        c&oacute;digo de conducta
                                    </a>{" "}
                                    com&uacute;n a fin de garantizar la mejora
                                    continua en la responsabilidad social,
                                    ambiental y &eacute;tica en sus cadenas de
                                    suministro. Los miembros de la EICC
                                    demuestran cumplimiento de este
                                    c&oacute;digo com&uacute;n mediante una
                                    serie de evaluaciones obligatorias, como el{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.eiccoalition.org/standards/vap/"
                                        title="Proceso de evaluaci&oacute;n validado"
                                    >
                                        proceso de evaluaci&oacute;n validado
                                    </a>
                                    , que contiene normas para realizar la
                                    verificaci&oacute;n del cumplimiento{" "}
                                    <i>in situ</i> y evaluaciones eficaces que
                                    se pueden compartir.
                                </p>
                                <p>
                                    Independientemente de que exista o no una
                                    agrupaci&oacute;n en su industria, es
                                    conveniente que tambi&eacute;n analice los
                                    sistemas de cumplimiento social que abarcan
                                    a varias industrias. Uno de estos programas
                                    es la{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org"
                                        title="Iniciativa de Comercio &Eacute;tico (ETI)"
                                    >
                                        Iniciativa de Comercio &Eacute;tico
                                        (ETI)
                                    </a>
                                    . Mediante la consulta con sindicatos,
                                    organizaciones no gubernamentales (ONG) y
                                    miembros empresariales, ETI cre&oacute; el{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/eti-base-code"
                                        title="C&oacute;digo B&aacute;sico de la ETI"
                                    >
                                        C&oacute;digo B&aacute;sico de la ETI
                                    </a>
                                    . Las empresas que se incorporan a la ETI
                                    deben adoptar este C&oacute;digo y aceptar
                                    los{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/resources/principles-implementation"
                                        title="Principios de aplicaci&oacute;n de la ETI"
                                    >
                                        principios de aplicaci&oacute;n de la
                                        ETI
                                    </a>
                                    . Luego reciben instrumentos,
                                    capacitaci&oacute;n y acceso a la red
                                    mundial de la ETI a fin de obtener apoyo
                                    para tratar las cuestiones de cumplimiento
                                    en el terreno. Para obtener m&aacute;s
                                    informaci&oacute;n, v&eacute;ase{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/node/1192?lang=en"
                                        title="compendio de instrumentos de la ETI"
                                    >
                                        recursos para un comercio &eacute;tico
                                    </a>{" "}
                                    en el{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="http://www.ethicaltrade.org/node/1650"
                                        title="recursos para un comercio &eacute;tico"
                                    >
                                        compendio de instrumentos de la ETI
                                    </a>
                                    .
                                </p>
                                <p>
                                    El
                                    <Link to="/steps/3">
                                        primer paso, Participaci&oacute;n de los
                                        interesados y los socios
                                    </Link>
                                    , contiene muchos m&aacute;s ejemplos de
                                    programas e iniciativas de
                                    colaboraci&oacute;n a las que puede sumarse.
                                </p>
                <p>
                                <em>
                                    *Nota: Toda referencia que se haga en la
                                    presente gu&iacute;a a empresas o entidades
                                    no gubernamentales espec&iacute;ficas es con
                                    fines informativos &uacute;nicamente a fin
                                    de demostrar las buenas pr&aacute;cticas
                                    internacionalmente reconocidas a la fecha de
                                    lanzamiento de la aplicaci&oacute;n. Las
                                    referencias a dichas entidades no debe
                                    interpretarse como un aval oficial del
                                    Departamento de Trabajo de los Estados
                                    Unidos a ellas, sus productos ni servicios{" "}
                                </em>
                                <em>
                                    y su menci&oacute;n no debe interpretarse
                                    como un examen exhaustivo de las
                                    pr&aacute;cticas que emplean dichas
                                    entidades en todos los &aacute;mbitos
                                </em>
                                <em>.</em>
                            </p>
            </div>
        </StaticData>
    );
};

export default es;
