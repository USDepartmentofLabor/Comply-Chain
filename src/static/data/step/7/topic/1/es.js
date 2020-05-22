import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const es = () => {
    return (
        <StaticData>
            <div>
                <h1>Auditor&iacute;as: los primeros pasos</h1>
                <p>
                Las auditor&iacute;as sociales son una de las principales
                maneras (adem&aacute;s de la participaci&oacute;n de
                sindicatos y trabajadores y los mecanismos de
                reclamaci&oacute;n) de obtener informaci&oacute;n sobre
                infracciones al c&oacute;digo de conducta de la empresa en
                la cadena de suministro. La auditor&iacute;a revela
                problemas, no los resuelve. Es uno de los componentes del
                sistema m&aacute;s amplio de cumplimiento social y no debe
                realizarse de manera aislada de la participaci&oacute;n de
                las partes interesadas, la comunicaci&oacute;n, la
                remediaci&oacute;n y dem&aacute;s pasos del proceso.
            </p>

                <p>
                    En todo sistema de cumplimiento social, la auditor&iacute;a
                    es esencial y debe estar seguida del proceso de los
                    resultados de la auditor&iacute;a, la evaluaci&oacute;n de
                    los datos de la auditor&iacute;a y la planificaci&oacute;n y
                    actividades en funci&oacute;n de dicha evaluaci&oacute;n.
                </p>
                <p>
                    Tal como se indic&oacute; en{" "}
                    <Link to="/steps/3">
                        el primer paso, Participaci&oacute;n de los interesados
                        y los socios
                    </Link>
                    , si la empresa es parte de un grupo de la industria o de
                    varias industrias, este grupo tal vez ya disponga de
                    auditores entrenados, material de capacitaci&oacute;n para
                    auditores, o ambos. Tal vez disponga de instrumentos
                    completos de auditor&iacute;a que se ajusten al
                    c&oacute;digo del grupo. Muchos de estos grupos se coordinan
                    para realizar auditor&iacute;as conjuntas de los proveedores
                    en com&uacute;n o comparten los informes de las
                    auditor&iacute;as.
                </p>
                <p>
                    Una vez identificadas las partes de la cadena de suministro
                    que representan el mayor riesgo y tras haber comunicado a
                    las personas y los organismos correspondientes la
                    funci&oacute;n que desempe&ntilde;an en el sistema de
                    cumplimiento social, se puede comenzar a programar las
                    auditor&iacute;as. A fin de garantizar que las
                    auditor&iacute;as sean eficientes, se debe contar con el
                    personal adecuado que disponga de los instrumentos que
                    necesita.
                </p>
                <h2>
                    La funci&oacute;n clave de los trabajadores y sindicatos
                </h2>
                <p>
                    Una de las maneras m&aacute;s eficaces de vigilar las
                    cadenas de suministro es por intermedio de los trabajadores
                    mismos y de los sindicatos que los representan. Los
                    trabajadores y los sindicatos pueden plantear problemas a la
                    empresa antes de que se realice la auditor&iacute;a. Si en
                    el lugar de trabajo que se est&aacute; auditando hay un
                    sindicato presente, se le debe consultar de entrada; si no
                    hay ning&uacute;n sindicato presente, como parte integral de
                    la auditor&iacute;a se debe entrevistar a los trabajadores y
                    pedirles comentarios.
                </p>
                <p>
                    En cualquier auditor&iacute;a, si llegaran a identificarse
                    infracciones, se las debe rectificar. Este tema se trata en
                    detalle en{" "}
                    <Link to="/steps/8">
                        el sexto paso, Remediaci&oacute;n de las infracciones
                    </Link>
                    .
                </p>
                <ExampleInAction id="better_work_assessment">
                                    <h3>
                                        <ExampleInAction.Icon alt="Lightbulb"/>
                                        Ejemplo en acci&oacute;n: Worker Voice in the Audit Process
                                    </h3>
                                    <p>
                                    <b>PLACEHOLDER FOR TEXT</b>
                                    </p>
                  </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
