import React from "react";
import StaticData from "../../../../../../components/StaticData";
import { Link } from "react-router-dom";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                Modelo de un sistema de cumplimiento social
                </h1>
                <p>
                                    Si bien los sistemas pueden variar
                                    seg&uacute;n la industria, un buen sistema
                                    de cumplimiento social en cualquier
                                    industria comprende ocho componentes que
                                    funcionan de manera integrada.
                                </p>
                                <p>
                                    Los pasos a continuaci&oacute;n se enumeran
                                    para facilitar la comprensi&oacute;n pero el
                                    sistema de cumplimiento social es un proceso
                                    repetitivo y constante. Las empresas pueden
                                    optar por proceder con estos pasos en un
                                    orden diferente y, por lo general, no es
                                    necesario finalizar un paso antes de pasar
                                    al siguiente. Al mismo tiempo, un sistema
                                    sin todos sus componentes (por ejemplo, un
                                    sistema de auditor&iacute;a que funciona de
                                    manera aislada de la comunicaci&oacute;n y
                                    la capacitaci&oacute;n, la
                                    remediaci&oacute;n y otras medidas)
                                    seguramente ser&aacute; insuficiente para
                                    dar respuesta a las cuestiones laborales
                                    dif&iacute;ciles que pueden surgir en las
                                    cadenas de suministro mundiales.
                                </p>
                                <ol>
                                    <li>
                                        <em>
                                            <strong>
                                                Participaci&oacute;n
                                            </strong>
                                        </em>
                                        <em>
                                            {" "}
                                            de los interesados y los socios
                                        </em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Evaluaci&oacute;n</em>
                                        </strong>
                                        <em> de riesgos e impacto</em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Formulaci&oacute;n</em>
                                        </strong>
                                        <em>
                                            {" "}
                                            de un c&oacute;digo de conducta
                                        </em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>
                                                Comunicaci&oacute;n y
                                                capacitaci&oacute;n
                                            </em>
                                        </strong>
                                        <em> en la cadena de suministro</em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Vigilancia y seguimiento </em>
                                        </strong>
                                        <em>del cumplimiento</em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Remediaci&oacute;n </em>
                                        </strong>
                                        <em>de infracciones</em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Examen</em>
                                        </strong>
                                        <em> independiente</em>
                                    </li>
                                    <li>
                                        <strong>
                                            <em>Notificaci&oacute;n</em>
                                        </strong>
                                        <em> del desempe&ntilde;o y </em><strong>participación</strong>
                                    </li>
                                </ol>
                                <p>
                                    Cabe destacar que los sistemas de
                                    cumplimiento social m&aacute;s robustos
                                    est&aacute;n dise&ntilde;ados para abordar
                                    las normas fundamentales del trabajo
                                    identificadas por la Organizaci&oacute;n
                                    Internacional del Trabajo (OIT), que abarcan
                                    la libertad sindical, la negociaci&oacute;n
                                    colectiva, la discriminaci&oacute;n en el
                                    trabajo, el trabajo infantil y el trabajo
                                    forzoso, as&iacute; como otras normas del
                                    trabajo tales como la seguridad y salud en
                                    el trabajo, los salarios y el horario de
                                    trabajo. (V&eacute;ase el{" "}
                                    <Link to="/steps/7">
                                        tercer paso, Formulaci&oacute;n de un
                                        c&oacute;digo de conducta
                                    </Link>
                                    , para obtener m&aacute;s informaci&oacute;n
                                    sobre estas normas de la OIT.)
                                </p>
                                <p>
                                    Esta aplicación contiene pautas para lograr sistemas integrales, pero se centra en
                                    especial en el trabajo infantil y el trabajo forzoso, de manera congruente con el
                                    mandato dispuesto para ILAB en la Ley de 2005 de reautorización de la protección a las víctimas de la trata (TVPRA).
                                </p>

            </div>
        </StaticData>
    );
};

export default es;
