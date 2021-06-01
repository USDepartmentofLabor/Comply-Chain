import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import styled from "styled-components";
import { theme } from "../../../../../../modules/config/theme";
import Accordion from "../../../../../../components/Accordion"; 
// import { Link } from "react-router-dom";

const Table = styled.table`
    border-collapse: collapse;
    border: 2px solid ${theme.colors.charcoal};
    margin-bottom: 16px;

    & th,
    td {
        border: 1px solid ${theme.colors.charcoal};
    }
`;

const es = () => {
    const script = document.createElement("script");
    
        script.src = "../../../../../../components/Utils/utils.js";
        script.async = true;
    
        document.body.appendChild(script);
    return (
        <StaticData>
            <div>
                <h1>Prevenci&oacute;n de la reincidencia</h1>
                <p>
                Adem&aacute;s de abordar las situaciones individuales de las v&iacute;ctimas, es importante 
                analizar el motivo que dio lugar a la infracci&oacute;n. Este an&aacute;lisis no se limita 
                simplemente a atribuir el trabajo infantil y el trabajo forzoso a la pobreza, a instituciones 
                gubernamentales ineficaces o a otros motivos, que se analizan en Tratamiento de las causas 
                fundamentales.
                </p>
                <p>
                En algunos casos, tal como se mencion&oacute;, el propio accionar de la empresa (como presionar 
                para que le entreguen un pedido para una determinada fecha o modificar de manera repentina los 
                vol&uacute;menes o estilos) puede dar lugar a situaciones en que los proveedores se ven presionados 
                a exigir horas extras, incorporar mano de obra adicional, para lo cual recurren a intermediarios o 
                reclutadores que tal vez no hagan primar el cumplimiento, o subcontratar a contratistas no 
                autorizados para hacer el trabajo. En muchos otros casos, las fallas de la gerencia y en las 
                pol&iacute;ticas, los procesos o la capacitaci&oacute;n en el lugar de trabajo constituyen las 
                principales causas de infracci&oacute;n y estos problemas tienen soluci&oacute;n y se deben reparar.
                </p>
                <p>
                La reparaci&oacute;n siempre debe dise&ntilde;arse de manera de rectificar el problema, brindar 
                medidas de reparaci&oacute;n a los afectados y evitar que vuelva a ocurrir. En condiciones ideales, 
                seguir esta secuencia de pasos es factible; sin embargo, algunos abusos, como los delitos sexuales, 
                resultan imposibles de reparar dadas las inquietudes socioemocionales que acarrean. En el caso de 
                infracciones por trabajo infantil y trabajo forzoso, esto implica tanto mejorar las condiciones para 
                las v&iacute;ctimas individuales como evitar que vuelvan a ocurrir en el lugar de trabajo.
                </p>
                <h2>Trabajo infantil</h2>
                <p>
                    En casos de <strong>trabajo infantil</strong>, las causas
                    pueden ser:
                </p>
                <div className="indent-margin">
                    <p>
                    No exigir documentos que permitan verificar la edad al momento de la contrataci&oacute;n o 
                    no constatarlos, verificarlos y darles seguimiento.
                    </p>
                    <p>
                    Comprensi&oacute;n deficiente por parte de la gerencia de las actividades laborales adecuadas, 
                    los peligros o el horario laboral adecuado para los ni&ntilde;os.
                    </p>
                    <p>
                    V&iacute;nculos laborales informales que permiten que los ni&ntilde;os &ldquo;se cuelen entre 
                    las grietas&rdquo;.
                    </p>
                </div>
                <p>
                    La publicaci&oacute;n{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://impacttlimited.com/wp-content/uploads/2017/01/Impactt_CLOPIndustrialcontexts_REVISION_26112008.pdf"
                        title="<i>Operational Procedures for Remediation of Child Labour in Industrial Contexts</i>"
                    >
                        <i>
                            Operational Procedures for Remediation of Child
                            Labour in Industrial Contexts
                        </i>
                    </a>{" "}
                    (Procedimientos operativos para la reparaci&oacute;n del trabajo infantil en contextos industriales) 
                    de Impact Limited contiene directrices detalladas sobre maneras de mejorar la situaci&oacute;n de 
                    las v&iacute;ctimas y de prevenir la reincidencia del trabajo infantil cuando se descubre en un 
                    entorno de plantas de producci&oacute;n.
                </p>
                <h2>Trabajo forzoso</h2>
                <p>
                    En casos de <strong>trabajo forzoso</strong>, las causas
                    pueden ser:
                </p>
                <div className="indent-margin">
                    <p>
                    Un c&aacute;lculo inadecuado de los sueldos y las deducciones o el pago tard&iacute;o;
                    </p>
                    <p>
                    Ausencia de pol&iacute;ticas y procedimientos claros para el reclutamiento y la contrataci&oacute;n 
                    de trabajadores;
                    </p>
                    <p>
                    Ausencia de procedimientos claros para garantizar que todos los trabajadores tengan contratos donde 
                    se estipulen claramente los t&eacute;rminos de su empleo, en un idioma que comprendan y que cualquier 
                    cambio al contrato se realice con el consentimiento informado y por escrito de los trabajadores;
                    </p>
                    <p>
                    Ausencia de mecanismos para que los trabajadores puedan presentar una reclamaci&oacute;n;
                    </p>
                    <p>Tenedur&iacute;a de libros deficiente;</p>
                    <p>
                    Ausencia de pol&iacute;ticas y procedimientos para los trabajadores migrantes, como mecanismos para 
                    garantizar que los intermediarios o agentes no les cobren, que no se les exija dejar un dep&oacute;sito, 
                    que puedan recibir t&eacute;rminos y condiciones de empleo an&aacute;logos a los que reciben los 
                    trabajadores no migrantes, y
                    </p>
                    <p>
                    Pol&iacute;ticas que permiten que los empleadores &ldquo;retengan&rdquo; los documentos de identidad 
                    de los empleados de manera tal que no est&eacute;n a disposici&oacute;n de los trabajadores cuando 
                    estos lo deseen.
                    </p>
                </div>
                <h2>Pr&aacute;cticas de reparaci&oacute;n relativas al trabajo forzoso</h2>
                <p>
                Por supuesto que las causas de las infracciones pueden ir m&aacute;s all&aacute; de meras fallas del 
                sistema y ser el resultado del enga&ntilde;o deliberado por parte del proveedor, de la gerencia, de 
                determinados empleados o de los reclutadores. Accidentales o intencionales, las infracciones deben 
                repararse con un plan de acci&oacute;n correctiva claro que obligue al proveedor a rendir cuentas 
                de sus actos.
                </p>
                <ExampleInAction id="plch">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                        Ejemplo en acci&oacute;n: comisiones de contrataci&oacute;n y c&oacute;digo de conducta de los proveedores de Apple*
                        </strong>
                    </h2>
                    
                    <p>
                        En 2018, Apple recibi&oacute; el premio{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://uk.reuters.com/article/slavery-conference-award/apple-wins-global-award-for-efforts-to-eradicate-slave-labour-idUKL8N1WY5IG"
                        title="Stop Slavery Award que otorga la Fundaci&oacute;n Thomson Reuters"
                    >
                        Stop Slavery Award que otorga la Fundaci&oacute;n Thomson Reuters 
                    </a>{" "}
                        por divulgar p&uacute;blicamente detalles de sus cadenas de suministro en un intento por 
                        fomentar la transparencia y ayudar a poner fin a las formas contempor&aacute;neas de esclavitud.
                    </p>

                    <p>
                        Sin embargo, desde comienzos de 2015, por medio de su{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple-Supplier-Code-of-Conduct-January.pdf"
                        title="C&oacute;digo de conducta de los proveedores"
                    >
                        C&oacute;digo de conducta de los proveedores
                    </a>
                        , Apple (la multinacional estadounidense de tecnolog&iacute;a) orden&oacute; que ninguno de sus 
                        proveedores podr&iacute;a cobrar comisiones de contrataci&oacute;n a sus empleados como parte 
                        del proceso de contrataci&oacute;n, a pesar de que la legislaci&oacute;n nacional lo 
                        permit&iacute;a. Si Apple se entera de que se contradice este mandato, el proveedor debe 
                        reembolsar al empleado el dinero que haya pagado por la comisi&oacute;n. Los proveedores que no 
                        adoptan medidas para rectificar estas pr&aacute;cticas se arriesgan a dejar de trabajar con Apple.
                    </p>

                    <p>
                        Desde 2008, Apple est&aacute; trabajando para reembolsar las comisiones de contrataci&oacute;n que 
                        se cobraron a 36.137 empleados por un monto de US $30.900.000, de los cuales solo en 2018 
                        reembols&oacute; US $616.000 a 287 empleados.
                    </p>

                    <p>Fuente:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                        title="https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf"
                    >
                    <em>https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2018_Progress_Report.pdf</em>
                    </a>.
                    </p>               
                </ExampleInAction>
                <p>
                En las cuatro secciones que se presentan a continuaci&oacute;n se describen algunos ejemplos de medidas de reparaci&oacute;n 
                espec&iacute;ficas que se pueden adoptar cuando se hallan indicadores de trabajo forzoso. En todos los casos, se deben 
                documentar los problemas, se les debe dar seguimiento y los sistemas de la gerencia deben actualizarse para evitar la 
                reincidencia.
                </p>
                <Accordion id="prevent-recurrence">
                        <Accordion.Section id="practice-issue">
                            <Accordion.Title>
                                <strong>
                                Reparaci&oacute;n de los problemas en las pr&aacute;cticas de reclutamiento

                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Cuadro: Reparaci&oacute;n de los problemas en las pr&aacute;cticas de reclutamiento
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="-1">
                                <p>
                                    <strong>Circunstancias</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="-1">
                                <p>
                                    <strong>
                                        Medidas de remediaci&oacute;n
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores sustra&iacute;dos, encerrados durante el proceso de reclutamiento o vendidos.</th>
                            <td tabindex="0">
                                <p>
                                Denunciar la contravenci&oacute;n a las autoridades responsables de la aplicaci&oacute;n de la ley. 
                                Trabajar con las autoridades responsables de la aplicaci&oacute;n de la ley y con grupos locales a 
                                fin de brindar a las v&iacute;ctimas un lugar seguro para quedarse y ponerlas en contacto con los 
                                servicios que necesiten.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores reclutados con un pr&eacute;stamo o anticipo y que est&eacute;n trabajando para pagarlo.</th>
                            <td tabindex="-1">
                                <p>
                                Si el proveedor pag&oacute; el pr&eacute;stamo o anticipo, determinar si los t&eacute;rminos del mismo son 
                                razonables. De lo contrario, pactar t&eacute;rminos razonables entre el proveedor y el trabajador. Si el 
                                pr&eacute;stamo o anticipo fue pagado por un reclutador, determinar si el proveedor estaba al tanto del 
                                acuerdo. De ser as&iacute;, pactar t&eacute;rminos razonables entre el proveedor, el reclutador y el 
                                trabajador. De lo contrario, exigir que el proveedor se desvincule del reclutador. Denunciar a los reclutadores 
                                inescrupulosos a las autoridades.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Reclutamiento enga&ntilde;oso: a los trabajadores se les prometieron tipos de trabajo, condiciones
                        de trabajo, vivienda o alojamiento, lugares de trabajo, empleadores, sueldos o ganancias que no se concretan.</th>
                            <td tabindex="-1">
                                <p>
                                Si el proveedor hizo una falsa promesa, debe pagar a todos los empleados que deseen irse el total del 
                                sueldo adeudado y el transporte para regresar a su hogar. Si un reclutador hizo las falsas promesas, 
                                determinar si el proveedor estaba al tanto del acuerdo. De ser as&iacute;, el proveedor es responsable 
                                de lo anterior. De lo contrario, exigir que el proveedor se desvincule del reclutador. Denunciar a los 
                                reclutadores inescrupulosos a las autoridades.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                            </Accordion.Section>
                    <Accordion.Section id="living-cond">
                            <Accordion.Title>
                                <strong>
                                Reparaci&oacute;n de los problemas en las condiciones de trabajo o de alojamiento
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Cuadro: Reparaci&oacute;n de los problemas en las condiciones de trabajo o de alojamiento
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="-1">
                                <p>
                                    <strong>Circunstancias</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="-1">
                                <p>
                                    <strong>
                                        Medidas de remediaci&oacute;n
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que trabajan horas extras excesivas, m&aacute;s all&aacute; de lo que permite la ley</th>
                            <td tabindex="0">
                                <p>
                                Cerciorarse de que el proveedor abone a los trabajadores el sueldo atrasado correspondiente a 
                                todas las horas extras trabajadas. Trabajar con el proveedor para evaluar las pol&iacute;ticas 
                                de asignaci&oacute;n de personal y las pr&aacute;cticas de remuneraci&oacute;n, como el precio 
                                a destajo, que contribuyen a las horas extras. Analizar sus propias pr&aacute;cticas de 
                                abastecimiento, como los plazos de entrega, los cambios en los pedidos, los precios y dem&aacute;s 
                                presiones que pueden llevar a exigir medidas extremas de reducci&oacute;n de costos por parte del 
                                proveedor, incluidas las horas extras excesivas. Cerciorarse de que todos los trabajadores reciban 
                                capacitaci&oacute;n en los derechos que les confieren la ley y el sistema de cumplimiento social.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que se pretende trabajen &ldquo;de guardia&rdquo;</th>
                            <td tabindex="-1">
                                <p>
                                Trabajar con el proveedor a fin de dise&ntilde;ar un plan de dotaci&oacute;n de personal m&aacute;s 
                                estructurado que se ajuste a los requisitos fijados en el c&oacute;digo de la empresa. Cerciorarse 
                                de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les confieren la ley 
                                y el c&oacute;digo de conducta de la empresa.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Empleador que limita la libertad de circulaci&oacute;n o comunicaci&oacute;n de los trabajadores.</th>
                            <td tabindex="-1">
                                <p>
                                Determinar qui&eacute;nes (la gerencia, los supervisores, los jefes de turno, etc.) participan de la 
                                limitaci&oacute;n impuesta a la libertad de circulaci&oacute;n o comunicaci&oacute;n de los trabajadores 
                                e investigar el accionar de estas personas. Si las personas actuaban por su cuenta sin conocimiento de 
                                la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, la suspensi&oacute;n 
                                o el despido. Si las limitaciones provienen de la gerencia, desvincularse del proveedor u otorgarle un 
                                plazo corto para poner fin a todas esas pr&aacute;cticas.
                                </p>
                                <p>
                                Investigar m&aacute;s a fondo las condiciones y circunstancias presentes en el lugar de trabajo que 
                                la gerencia o los supervisores puedan estar intentando ocultar (como entrevistas fuera del lugar de 
                                trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto). Cerciorarse 
                                de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les confiere la ley, 
                                incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los trabajadores que deseen 
                                irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se les adeuda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Condiciones de vida degradantes.</th>
                            <td tabindex="-1">
                                <p>
                                Cerciorarse de que el proveedor comprenda plenamente las normas m&iacute;nimas que la empresa fije 
                                para la vivienda de los empleados. Otorgar al proveedor un plazo corto para reparar las condiciones 
                                de vida. Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que 
                                les confiere la ley, incluidas las normas para la vivienda. Cerciorarse de que todos los trabajadores 
                                que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se les adeuda.
                                </p>
                                <p>
                                Dar seguimiento con una investigaci&oacute;n no anunciada que incluya entrevistas fuera del lugar de 
                                trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto. Si no mejoran 
                                las condiciones de vida, desvincularse del proveedor pero atenuar el efecto que pueda tener en los 
                                trabajadores.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores obligados a participar de actividades il&iacute;citas,
                        trabajar en una vivienda o para una familia en particular o consumir drogas adictivas.</th>
                            <td tabindex="-1">
                                <p>
                                Determinar qui&eacute;nes (la gerencia, los supervisores, los jefes de turno, etc.) 
                                participan de la limitaci&oacute;n impuesta a la libertad de circulaci&oacute;n o 
                                comunicaci&oacute;n de los trabajadores e investigar el accionar de estas personas. 
                                Si las personas actuaban por su cuenta sin conocimiento de la gerencia, tomar las 
                                medidas adecuadas con ellas, como la capacitaci&oacute;n, la suspensi&oacute;n o el 
                                despido. Si las limitaciones provienen de la gerencia, desvincularse del proveedor u 
                                otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas.
                                </p>
                                <p>
                                Investigar m&aacute;s a fondo las condiciones y circunstancias presentes en el lugar 
                                de trabajo que la gerencia o los supervisores puedan estar intentando ocultar (como 
                                entrevistas fuera del lugar de trabajo a los trabajadores u otros integrantes de la 
                                comunidad que est&eacute;n al tanto). Cerciorarse de que todos los trabajadores reciban 
                                capacitaci&oacute;n en los derechos que les confiere la ley, incluidos los mecanismos de 
                                reclamaci&oacute;n. Cerciorarse de que todos los trabajadores que deseen irse del trabajo 
                                puedan hacerlo y percibir la totalidad del sueldo que se les adeuda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Proveedores que exageran las deudas de los trabajadores.</th>
                            <td tabindex="-1">
                                <p>
                                Determinar cu&aacute;l es la fuente de la deuda inicial de los trabajadores. Si la deuda 
                                inicial era con el proveedor, solicitarle a este que la cancele. Si la deuda inicial era 
                                con un reclutador, investigar si el proveedor estaba al tanto de la deuda. De ser as&iacute;, 
                                exigir que el proveedor cancele la deuda. De lo contrario, exigir que el proveedor se desvincule 
                                del reclutador. Denunciar al reclutador a las autoridades.
                                </p>
                                <p>
                                Con respecto a la exageraci&oacute;n de la deuda, exigir que el empleador deje de cobrar de 
                                inmediato cualquier tipo de inter&eacute;s sobre la misma. Si la deuda se exagera con compras 
                                de art&iacute;culos al empleador, como en la cantina, determinar si los trabajadores tienen 
                                otras alternativas. Si comprar en las tiendas que son propiedad del empleador es la &uacute;nica 
                                opci&oacute;n factible para los trabajadores, trabajar con el proveedor para garantizar que los 
                                precios y los t&eacute;rminos sean razonables.
                                </p>
                                <p>
                                Cerciorarse de que todos los trabajadores que deseen irse del trabajo puedan hacerlo y percibir 
                                la totalidad del sueldo que se les adeuda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que dependen del empleador para la vivienda, la comida u otras necesidades.</th>
                            <td tabindex="-1">
                                <p>
                                En algunos casos, en especial en el caso de los trabajadores migrantes, la vivienda, la comida 
                                y otras necesidades que ofrece el empleador puede ser la mejor opci&oacute;n para todas las 
                                partes implicadas. Sin embargo, se debe examinar la calidad de la vivienda y de la comida y 
                                si no cumple las normas m&iacute;nimas, trabajar con el proveedor para que mejore la calidad.
                                </p>
                                <p>
                                Dar seguimiento con una investigaci&oacute;n no anunciada que incluya entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al 
                                tanto. Si las condiciones de alojamiento o la comida no mejoran, desvincularse del proveedor.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores con una dependencia personal del empleador.</th>
                            <td tabindex="-1">
                                <p>
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que 
                                les confieren la ley y el c&oacute;digo de conducta de la empresa independientemente de 
                                las relaciones personales.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="impossible-leaving">
                            <Accordion.Title>
                                <strong>
                                Reparaci&oacute;n de los problemas relativos a la &ldquo;imposibilidad de irse&rdquo;
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table>
                    <caption>
                        Cuadro: Reparaci&oacute;n de los problemas relativos a la &ldquo;imposibilidad de irse&rdquo;
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="-1">
                                <p>
                                    <strong>Circunstancias</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="-1">
                                <p>
                                    <strong>
                                        Medidas de remediaci&oacute;n
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que no creen que puedan renunciar libremente por los beneficios
                        que ya recibieron o por las restricciones que impone el empleador.</th>
                            <td tabindex="0">
                                <p>
                                Si el supervisor u otra persona hacen creer a los trabajadores que no pueden irse porque 
                                el proveedor les brind&oacute; capacitaci&oacute;n u otros beneficios, o por alg&uacute;n 
                                requisito contractual il&iacute;cito, exija que el proveedor adopte las medidas correctivas 
                                adecuadas con tal persona, desde la capacitaci&oacute;n hasta el despido. Si los trabajadores 
                                simplemente no comprenden sus derechos, br&iacute;ndeles capacitaci&oacute;n para garantizar que 
                                sepan cu&aacute;ndo pueden renunciar. Cerciorarse de que todos los trabajadores que deseen irse 
                                del trabajo puedan hacerlo y percibir la totalidad del sueldo que se les adeuda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que se sienten obligados a quedarse porque le adeudan parte del salario.</th>
                            <td tabindex="-1">
                                <p>
                                Cerciorarse de que el salario se calcule adecuadamente y que todos los empleados implicados en 
                                la n&oacute;mina est&eacute;n debidamente capacitados para saber calcular el salario. Exigir al 
                                proveedor que pague todos los sueldos atrasados previstos por la legislaci&oacute;n local 
                                (por ejemplo, si la ley exige el pago quincenal, que se paguen todos los salarios, como m&iacute;nimo 
                                hasta hace dos semanas). Cerciorarse de que se formalice el cronograma de pago conforme lo estipulan 
                                los l&iacute;mites legales y los del c&oacute;digo de la empresa. Dar seguimiento con una 
                                auditor&iacute;a no anunciada. Cerciorarse de que todos los trabajadores que deseen irse del trabajo 
                                puedan hacerlo y percibir la totalidad del sueldo que se les adeuda.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">Trabajadores que trabajan por per&iacute;odos excesivos o indefinidos para
                        pagar una deuda o un anticipo que recibieron del empleador o reclutador.</th>
                            <td tabindex="-1">
                                <p>
                                Si el proveedor pag&oacute; el pr&eacute;stamo o anticipo, determinar si los t&eacute;rminos 
                                del mismo son razonables. De lo contrario, pactar t&eacute;rminos razonables entre el proveedor 
                                y el trabajador. Si el pr&eacute;stamo o anticipo fue pagado por un reclutador, determinar si 
                                el proveedor estaba al tanto del acuerdo. De ser as&iacute;, pactar t&eacute;rminos razonables 
                                entre el proveedor, el reclutador y el trabajador. De lo contrario, exigir que el proveedor se 
                                desvincule del reclutador. Denunciar a los reclutadores inescrupulosos a las autoridades.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                    <Accordion.Section id="penalty-issue">
                            <Accordion.Title>
                                <strong>
                                Remediaci&oacute;n de los problemas de
                        sanciones o amenazas
                                </strong>
                            </Accordion.Title>
                            <Accordion.Panel>
                <Table width="100%">
                    <caption>
                        Cuadro: Remediaci&oacute;n de los problemas de
                        sanciones o amenazas
                    </caption>
                    <tbody>
                        <tr>
                            <th scope="col" width="55%" scope="col" tabindex="-1">
                                <p>
                                    <strong>Circunstancias</strong>
                                </p>
                            </th>
                            <th scope="col" width="45%" scope="col" tabindex="-1">
                                <p>
                                    <strong>
                                        Medidas de remediaci&oacute;n
                                    </strong>
                                </p>
                            </th>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El proveedor o reclutador tiene en su poder los documentos de identidad o de viaje de los trabajadores.</th>
                            <td tabindex="0">
                                {/* <p id='P1'> */}
                                <p>
                                Los proveedores nunca deben confiscar ni tener en su poder los documentos de identidad o 
                                de viaje de los trabajadores a menos que sea exclusivamente con el fin de guardarlos e 
                                incluso as&iacute;, &uacute;nicamente si los trabajadores pueden recuperarlos con rapidez 
                                al solicitarlo. Exigir que el proveedor devuelva todos los documentos de identidad a los 
                                trabajadores. Si los trabajadores prefieren que el proveedor los retenga para guardarlos, 
                                cerciorarse de que se disponga de una pol&iacute;tica para recuperar los documentos y que 
                                todos los trabajadores tengan conocimiento de tal pol&iacute;tica. Dar seguimiento al tema 
                                con una auditor&iacute;a no anunciada.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador limita la comunicaci&oacute;n de los trabajadores.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P1">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P1">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                Los proveedores nunca deben confiscar ni tener en su poder los documentos de identidad o 
                                de viaje de los trabajadores a menos que sea exclusivamente con el fin de guardarlos e 
                                incluso as&iacute;, &uacute;nicamente si los trabajadores pueden recuperarlos con rapidez 
                                al solicitarlo. Exigir que el proveedor devuelva todos los documentos de identidad a los 
                                trabajadores. Si los trabajadores prefieren que el proveedor los retenga para guardarlos, 
                                cerciorarse de que se disponga de una pol&iacute;tica para recuperar los documentos y que 
                                todos los trabajadores tengan conocimiento de tal pol&iacute;tica. Dar seguimiento al tema 
                                con una auditor&iacute;a no anunciada.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador amenaza con entregar a los trabajadores a las autoridades inmigratorias.</th>
                            <td tabindex="-1">
                                {/* <p id="P2"> */}
                                <p>
                                    En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                    determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                    los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                    conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                    la suspensi&oacute;n o el despido.
                                </p>
                                <p>
                                    Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                    desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                    Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                    confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                    trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                    les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                    lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador perpetra violencia f&iacute;sica o sexual o amenaza con hacerlo.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P2">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P2">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                la suspensi&oacute;n o el despido.
                                Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador o reclutador amenaza con retirar privilegios como posibles ascensos, amenaza
                        con deteriorar a&uacute;n m&aacute;s las condiciones de trabajo o con despedir a los trabajadores.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P2">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P2">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                la suspensi&oacute;n o el despido.
                                Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador o reclutador se aprovecha de las creencias religiosas o culturales de los trabajadores.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P2">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P2">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                la suspensi&oacute;n o el despido.
                                Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador o reclutador retiene la remuneraci&oacute;n o las pertenencias de los trabajadores o
                        amenaza con imponerles sanciones econ&oacute;micas.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P2">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P2">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                la suspensi&oacute;n o el despido.
                                Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row" tabindex="-1">El empleador amenaza con imponer trabajo adicional a los trabajadores que no colaboren.<br />
                        El empleador recurre al soborno para obligar a los trabajadores.</th>
                            <td tabindex="-1">
                                {/* <p><a href="#P2">V&eacute;ase arriba.</a></p> */}
                                <p>
                                {/* <Link to="/steps/8/topic/3/#P2">
                                V&eacute;ase arriba.
                                </Link> */}
                                <abbr title="" aria-label="
                                En cualquier situaci&oacute;n de violencia, sanci&oacute;n, intimidaci&oacute;n o amenaza, 
                                determinar qui&eacute;nes son las partes involucradas en la infracci&oacute;n (la gerencia, 
                                los supervisores, los jefes de turno, etc.). Si las personas actuaban por su cuenta sin 
                                conocimiento de la gerencia, tomar las medidas adecuadas con ellas, como la capacitaci&oacute;n, 
                                la suspensi&oacute;n o el despido.
                                Si las sanciones, amenazas, etc. provienen de la gerencia o si esta era c&oacute;mplice, 
                                desvincularse del proveedor u otorgarle un plazo corto para poner fin a todas esas pr&aacute;cticas. 
                                Cerciorarse de que todos los trabajadores reciban capacitaci&oacute;n en los derechos que les 
                                confiere la ley, incluidos los mecanismos de reclamaci&oacute;n. Cerciorarse de que todos los 
                                trabajadores que deseen irse del trabajo puedan hacerlo y percibir la totalidad del sueldo que se 
                                les adeuda. Dar seguimiento con auditor&iacute;as no anunciadas que incluyan entrevistas fuera del 
                                lugar de trabajo a los trabajadores u otros integrantes de la comunidad que est&eacute;n al tanto.
                                ">
                                    V&eacute;ase arriba.
                                    </abbr> 
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Accordion.Panel>
                        </Accordion.Section>
                </Accordion>
                <br />
                <ExampleInAction id="better_work">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Ejemplo en acci&oacute;n: el{" "}
                            <strong>
                                proceso de remediaci&oacute;n del programa Better Work
                            </strong>
                        </strong>
                        
                    </h2>
                    <p>
                    El programa Better Work fomenta la elaboraci&oacute;n de estructuras y procesos democr&aacute;ticos 
                    para las relaciones industriales, lo cual se logra incluyendo a representantes de las organizaciones 
                    de empleadores y sindicatos para dise&ntilde;ar los programas y ponerlos en pr&aacute;ctica. Al nivel 
                    de la f&aacute;brica, los problemas de cumplimiento que se identifican con las evaluaciones se elevan 
                    a los comit&eacute;s consultivos de mejora del desempe&ntilde;o, &oacute;rgano conformado por 8 a 10 
                    personas con igual cantidad de representantes de la gerencia y de los trabajadores. De ser posible, 
                    al elaborar programas de formaci&oacute;n y capacidades, estos comit&eacute;s parten de las estructuras 
                    existentes en la f&aacute;brica para una gesti&oacute;n eficaz de la mano de obra. Cada comit&eacute; 
                    se re&uacute;ne por lo menos una vez por mes. Con el apoyo de asesores del programa Better Work, 
                    formulan y supervisan la aplicaci&oacute;n de un plan de remediaci&oacute;n, lo cual garantiza que 
                    la gerencia y los trabajadores compartan la responsabilidad y la rendici&oacute;n de cuentas a lo 
                    largo de todo el proceso. Los auditores de Better Work est&aacute;n a disposici&oacute;n para brindar 
                    asistencia t&eacute;cnica y realizar auditor&iacute;as de seguimiento a fin de evaluar los logros 
                    alcanzados con el plan de remediaci&oacute;n.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
