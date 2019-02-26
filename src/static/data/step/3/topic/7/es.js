import React from "react";
import { Link } from "react-router-dom";

const es = () => {
    return (
        <div>
            <h1>Comunicaci&oacute;n del c&oacute;digo</h1>
            <p>
                La comunicaci&oacute;n eficaz es un aspecto importante de todo
                programa de cumplimiento social. Muchas empresas se dieron
                cuenta de que limitarse simplemente a auditar los lugares de
                trabajo y remediar las infracciones no resuelve muchos de los
                problemas laborales presentes en lugares de cosecha,
                miner&iacute;a y producci&oacute;n, plantas de proceso y
                dem&aacute;s lugares de trabajo. La capacitaci&oacute;n y
                comunicaci&oacute;n constantes, el fortalecimiento de
                capacidades y un &eacute;nfasis en la mejora continua han
                demostrado ser la manera m&aacute;s eficaz de continuar
                avanzando hacia un mayor grado de cumplimiento.
            </p>
            <p>
                <Link to="/steps/4">
                    En el cuarto paso: Comunicaci&oacute;n y capacitaci&oacute;n
                    en las cadenas de suministro
                </Link>
                , se tratar&aacute;n los detalles de la comunicaci&oacute;n del
                c&oacute;digo y del sistema de cumplimiento a varios
                p&uacute;blicos: los propios empleados, las partes interesadas,
                los proveedores, los gerentes y supervisores de los proveedores,
                los trabajadores de las plantas en toda la cadena de suministro,
                los gobiernos, las organizaciones de trabajadores, grupos
                comunitarios y otros. Adem&aacute;s, se presentar&aacute;n
                distintas maneras de lograr que el c&oacute;digo sea m&aacute;s
                accesible para las partes interesadas evitando la jerga
                t&eacute;cnica innecesaria y facilitando la traducci&oacute;n a
                varios idiomas.
            </p>
            <p>
                <em>
                    *Nota: Toda referencia que se haga en la presente
                    gu&iacute;a a empresas o entidades no gubernamentales
                    espec&iacute;ficas es con fines informativos
                    &uacute;nicamente a fin de demostrar las buenas
                    pr&aacute;cticas internacionalmente reconocidas a la fecha
                    de lanzamiento de la aplicaci&oacute;n. Las referencias a
                    dichas entidades no debe interpretarse como un aval oficial
                    del Departamento de Trabajo de los Estados Unidos a ellas,
                    sus productos ni servicios{" "}
                </em>
                <em>
                    y su menci&oacute;n no debe interpretarse como un examen
                    exhaustivo de las pr&aacute;cticas que emplean dichas
                    entidades en todos los &aacute;mbitos
                </em>
                <em>.</em>
            </p>
        </div>
    );
};

export default es;
