import React from "react";
import usDol from "../../images/usdol.jpg";
import ExampleInAction from "../../../../../../common/ExampleInAction/ExampleInAction";

const es = () => {
    return (
        <div>
            <h1>Programaci&oacute;n de las auditor&iacute;as</h1>
            <p>
                Si la empresa es parte de una industria o grupo de varias
                industrias, los sistemas y procesos del grupo pueden determinar
                cu&aacute;ndo se programan las auditor&iacute;as y de qu&eacute;
                manera. Si se procura establecer un sistema de cumplimiento
                social por cuenta propia, es preciso tomar varias decisiones a
                la hora de programar las auditor&iacute;as.
            </p>
            <p>
                Primero, si la auditor&iacute;a es parte de un proceso previo a
                la selecci&oacute;n o inscripci&oacute;n (por ejemplo, si exige
                que los posibles proveedores obtengan un puntaje m&iacute;nimo
                en una auditor&iacute;a antes de realizar el primer pedido), se
                deber&aacute;n programar las auditor&iacute;as de estas plantas
                en cuanto se considere que est&aacute;n listas, seg&uacute;n la
                experiencia que estas tengan con auditor&iacute;as, la
                capacitaci&oacute;n recibida o ambas. Una vez que el proveedor
                haya pasado la auditor&iacute;a y quedado inscrito como
                proveedor de la empresa, se deben repetir las auditor&iacute;as
                peri&oacute;dicamente, en funci&oacute;n de las conclusiones.
            </p>
            <ExampleInAction id="prereg">
                <h2>
                    <ExampleInAction.Icon />
                    Ejemplo en acci&oacute;n: proceso previo a la
                    inscripci&oacute;n
                </h2>
                <p>
                    Muchas empresas exigen que todo proveedor nuevo obtenga un
                    puntaje m&iacute;nimo en la auditoria social antes de
                    realizar el primer pedido. Por lo general, la empresa
                    capacita al proveedor a fin de prepararlo para la
                    auditor&iacute;a, o tal vez se pretenda que un tercero
                    capacite a los proveedores. Una vez que el proveedor pasa la
                    auditor&iacute;a, algunas empresas lo inscriben en un
                    sistema de informaci&oacute;n de cumplimiento social
                    mientras que otras usan sistemas de red y permiten que los
                    proveedores se inscriban por su cuenta.
                </p>
                <p>
                    Por ejemplo, Target Corporation*, como parte del
                    tr&aacute;mite de inscripci&oacute;n de contratistas exige
                    que aquellos que brindan productos de la marca Target
                    realicen una evaluaci&oacute;n de cumplimiento y derechos
                    humanos. Si un contratista sugiere abastecerse de un
                    proveedor con una trayectoria de infracciones en materia de
                    cumplimiento social, Target exige un plan de acci&oacute;n
                    correctiva completo para rectificar las infracciones antes
                    de comenzar la producci&oacute;n. Para m&aacute;s
                    informaci&oacute;n, v&eacute;ase el{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://corporate.target.com/corporate-responsibility/responsible-sourcing/social-compliance/labor-and-human-rights"
                        title="Sitio web de las normas para los contratistas de Target"
                    >
                        sitio web de las normas para los contratistas de Target
                    </a>
                    .
                </p>
            </ExampleInAction>
            <p>
                Las empresas con grandes cadenas de suministro o proveedores
                dispersos suelen realizar auditor&iacute;as por muestreo. Esto
                es com&uacute;n con auditor&iacute;as de productores
                agr&iacute;colas, por ejemplo. El muestreo debe ser aleatorio y
                estad&iacute;sticamente representativo.
            </p>
            <p>
                Las auditor&iacute;as deben programarse en los momentos en que
                es m&aacute;s probable que se produzcan infracciones al
                c&oacute;digo. Por ejemplo, en la agricultura, es m&aacute;s
                probable que haya trabajo infantil en la &eacute;poca de
                cosecha. En la manufactura, los problemas laborales suelen
                ocurrir cuando las f&aacute;bricas alcanzan los niveles
                m&aacute;ximos de producci&oacute;n. La evaluaci&oacute;n de
                riesgos debe contener informaci&oacute;n que permita tomar estas
                decisiones.
            </p>
            <img
                id="img-browser"
                src={usDol}
                alt="trabajo infantil en el sector agr&iacute;cola"
            />
            <p className="small-text">
                &copy;Shelley Stinelli/Departamento de Trabajo de los Estados
                Unidos
            </p>
            <p>
                Las auditor&iacute;as de la cadena de suministro de la empresa
                deben programarse peri&oacute;dicamente. Sin embargo, el equipo
                de auditor&iacute;a tambi&eacute;n debe estar preparado para
                reaccionar r&aacute;pidamente si se recibe una
                reclamaci&oacute;n sobre un sitio de trabajo puntual.
            </p>
            <p>
                Algunas empresas permiten que los proveedores realicen sus
                propias auditor&iacute;as, en las cuales eval&uacute;an su
                propio desempe&ntilde;o, para lo cual emplean instrumentos de
                auditor&iacute;a y presentan los resultados a la empresa. Por lo
                general, las empresas permiten esta opci&oacute;n a los
                proveedores con una trayectoria establecida de desempe&ntilde;o
                excelente en las auditor&iacute;as, o a aquellos ubicados en
                pa&iacute;ses donde el gobierno posee una trayectoria de
                aplicaci&oacute;n eficaz del derecho laboral. Se recomienda
                reservar el derecho de realizar auditor&iacute;as
                complementarias a dichos proveedores. Las auditor&iacute;as
                propias presentan la ventaja de elevar la capacidad de los
                proveedores pero los resultados de las mismas deben ser
                verificados por una parte independiente.
            </p>
        </div>
    );
};

export default es;
