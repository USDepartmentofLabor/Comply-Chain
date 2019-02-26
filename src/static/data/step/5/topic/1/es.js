import React from "react";
import { Link } from "react-router-dom";

const es = () => {
    return (
        <div>
            <h1>Auditor&iacute;as: los primeros pasos</h1>
            <p>
                En todo sistema de cumplimiento social, la auditor&iacute;a es
                esencial y debe estar seguida del proceso de los resultados de
                la auditor&iacute;a, la evaluaci&oacute;n de los datos de la
                auditor&iacute;a y la planificaci&oacute;n y actividades en
                funci&oacute;n de dicha evaluaci&oacute;n.
            </p>
            <p>
                Tal como se indic&oacute; en{" "}
                <Link to="/step/1">
                    el primer paso, Participaci&oacute;n de los interesados y
                    los socios
                </Link>
                , si la empresa es parte de un grupo de la industria o de varias
                industrias, este grupo tal vez ya disponga de auditores
                entrenados, material de capacitaci&oacute;n para auditores, o
                ambos. Tal vez disponga de instrumentos completos de
                auditor&iacute;a que se ajusten al c&oacute;digo del grupo.
                Muchos de estos grupos se coordinan para realizar
                auditor&iacute;as conjuntas de los proveedores en com&uacute;n o
                comparten los informes de las auditor&iacute;as.
            </p>
            <p>
                Una vez identificadas las partes de la cadena de suministro que
                representan el mayor riesgo y tras haber comunicado a las
                personas y los organismos correspondientes la funci&oacute;n que
                desempe&ntilde;an en el sistema de cumplimiento social, se puede
                comenzar a programar las auditor&iacute;as. A fin de garantizar
                que las auditor&iacute;as sean eficientes, se debe contar con el
                personal adecuado que disponga de los instrumentos que necesita.
            </p>
            <h2>La funci&oacute;n clave de los trabajadores y sindicatos</h2>
            <p>
                Una de las maneras m&aacute;s eficaces de vigilar las cadenas de
                suministro es por intermedio de los trabajadores mismos y de los
                sindicatos que los representan. Los trabajadores y los
                sindicatos pueden plantear problemas a la empresa antes de que
                se realice la auditor&iacute;a. Si en el lugar de trabajo que se
                est&aacute; auditando hay un sindicato presente, se le debe
                consultar de entrada; si no hay ning&uacute;n sindicato
                presente, como parte integral de la auditor&iacute;a se debe
                entrevistar a los trabajadores y pedirles comentarios.
            </p>
            <p>
                En cualquier auditor&iacute;a, si llegaran a identificarse
                infracciones, se las debe rectificar. Este tema se trata en
                detalle en{" "}
                <Link to="/step/6">
                    el sexto paso, Remediaci&oacute;n de las infracciones
                </Link>
                .
            </p>
        </div>
    );
};

export default es;
