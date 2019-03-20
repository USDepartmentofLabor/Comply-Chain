import React from "react";
import Accordion from "../../../../components/Accordion";
import ExampleInAction from "../../../../components/ExampleInAction";
import OwnWords from "../../../../components/OwnWords";
import graph from "../../../images/graph_es.jpg";
import betterwork from "../../../images/betterwork.jpg";
import { Link } from "react-router-dom";

const es = ({ pdf }) => {
    return (
        <div>
            <h1>
                <strong>
                    Aspectos b&aacute;sicos de un sistema de cumplimiento social
                </strong>
            </h1>
            <Accordion>
                <Accordion.Section>
                    <Accordion.Title>
                        Objetivos did&aacute;cticos
                    </Accordion.Title>
                    <Accordion.Panel>
                        <ul>
                            <li>
                                Comprender los componentes clave de un sistema
                                de cumplimiento social y c&oacute;mo encajan.
                            </li>
                            <li>
                                Familiarizarse de los programas de cumplimiento
                                social de la industria y de otras industrias que
                                podr&iacute;an estar a su disposici&oacute;n.
                            </li>
                            <li>
                                Comenzar a definir el alcance de su sistema de
                                cumplimiento social.
                            </li>
                            <li>
                                Comprender los requisitos de personal para
                                conformar un equipo de cumplimiento social
                                s&oacute;lido.
                            </li>
                            <li>
                                Reconocer los sistemas de gesti&oacute;n que
                                marcar&aacute;n el &eacute;xito de su sistema de
                                cumplimiento social.
                            </li>
                        </ul>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>T&eacute;rminos clave</Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            <strong>
                                Responsabilidad social empresarial (RSE)
                            </strong>
                            : un concepto amplio con el que se procura describir
                            la manera en que las empresas integran las
                            inquietudes sociales y ambientales en sus
                            operaciones, as&iacute; como su interacci&oacute;n
                            con las partes interesadas al margen de los
                            requisitos legales. Tambi&eacute;n se utilizan
                            muchos otros t&eacute;rminos para referirse a estas
                            acciones, como &ldquo;triple cuenta de
                            resultados&rdquo;, &ldquo;sostenibilidad&rdquo;,
                            &ldquo;civismo empresarial&rdquo; y
                            &ldquo;cuestiones ambientales, sociales y de
                            gobernabilidad&rdquo;, entre otros. La
                            &ldquo;rendici&oacute;n de cuentas
                            empresarial&rdquo; es un t&eacute;rmino que suele
                            usarse en referencia a las acciones de las empresas
                            que se vinculan m&aacute;s bien con los requisitos
                            legales.
                        </p>
                        <p>
                            <strong>Sistema de cumplimiento social</strong>: uno
                            de los componentes del programa de RSE,
                            sostenibilidad o rendici&oacute;n de cuentas de una
                            empresa. Un sistema de cumplimiento social es una
                            serie integrada de pol&iacute;ticas y
                            pr&aacute;cticas por las que una empresa procura
                            garantizar la m&aacute;xima adhesi&oacute;n a los
                            elementos de su c&oacute;digo de conducta que abarca
                            cuestiones sociales y laborales.
                        </p>
                        <p>
                            <strong>Cadena de suministro</strong>: una cadena
                            compuesta por todas las organizaciones y los
                            individuos que participan en la producci&oacute;n,
                            el procesamiento, la comercializaci&oacute;n, el
                            transporte o la distribuci&oacute;n de un producto
                            desde el punto de origen hasta la empresa o hasta el
                            comerciante minorista final.
                        </p>
                        <p>
                            En el gr&aacute;fico que figura a
                            continuaci&oacute;n se muestra la cadena de
                            suministro del algod&oacute;n.
                        </p>
                        <img
                            src={graph}
                            alt="En el gr&aacute;fico se muestra la cadena de suministro del algod&oacute;n."
                        />
                        <div className="small-text">
                            <p>Fuentes</p>
                            <ol>
                                <li>
                                    Marcha Mundial contra el Trabajo Infantil.{" "}
                                    <em>
                                        <i>Dirty Cotton:</i>
                                        <i> </i>
                                        <i>
                                            A Research on Child Labour, Slavery,
                                            Trafficking and Exploitation in
                                            Cotton and Cotton Seed Farming in
                                            India.
                                        </i>
                                    </em>{" "}
                                    Nueva Delhi, 2012; disponible en idioma
                                    ingl&eacute;s solamente en{" "}
                                    <a
                                        href="http://globalmarch.org/wp-content/uploads/2017/09/Dirty-Cotton-Report.pdf"
                                        title="<i>Dirty Cotton:</i> <i>A Research on Child Labour, Slavery, Trafficking and Exploitation in Cotton and Cotton Seed Farming in India.</i>"
                                    >
                                        http://globalmarch.org/wp-content/uploads/2017/09/Dirty-Cotton-Report.pdf
                                    </a>
                                    .
                                </li>
                                <li>
                                    Josephine Moulds. &ldquo;
                                    <i>
                                        Child Labour in the Fashion Supply
                                        Chain:
                                    </i>{" "}
                                    <i>Where, Why, And What Can Be Done</i>
                                    .&rdquo; theguardian.com [en l&iacute;nea]
                                    [citado 2015]; disponible en idioma
                                    ingl&eacute;s solamente en{" "}
                                    <a
                                        href="https://labs.theguardian.com/unicef-child-labour/"
                                        title="<i>Child Labour in the Fashion Supply Chain:</i> <i>Where, Why, And What Can Be Done.</i>"
                                    >
                                        https://labs.theguardian.com/unicef-child-labour/
                                    </a>
                                    .
                                </li>
                                <li>
                                    Departamento de Estado de los Estados
                                    Unidos. &ldquo;Tayikist&aacute;n.&rdquo; En
                                    el{" "}
                                    <em>
                                        Informe de 2016 sobre la trata de
                                        personas
                                    </em>
                                    . Washington, D.C., 27 de julio de 2016;
                                    disponible en idioma ingl&eacute;s solamente
                                    en{" "}
                                    <a
                                        href="https://www.state.gov/j/tip/rls/tiprpt/countries/2016/258874.htm"
                                        title="Informe de 2016 sobre la trata de personas"
                                    >
                                        https://www.state.gov/j/tip/rls/tiprpt/countries/2016/258874.htm
                                    </a>
                                    .
                                </li>
                                <li>
                                    <i>Uzbek-German Forum for Human Rights.</i>{" "}
                                    <em>
                                        <i>
                                            Forced Labor in Uzbekistan&apos;s
                                            Cotton Sector:
                                        </i>{" "}
                                        <i>
                                            Preliminary Findings from the 2016
                                            Harvest.
                                        </i>
                                    </em>{" "}
                                    diciembre de 2016.
                                </li>
                            </ol>
                        </div>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>Temas</Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Antes de usar esta aplicaci&oacute;n, es importante
                            que se interiorice de los aspectos b&aacute;sicos de
                            un sistema de cumplimiento social. Los enlaces a
                            continuaci&oacute;n pueden ser de utilidad.
                        </p>
                        <h3>Modelo de un sistema de cumplimiento social</h3>
                        <div>
                            <p>
                                Si bien los sistemas pueden variar seg&uacute;n
                                la industria, un buen sistema de cumplimiento
                                social en cualquier industria comprende ocho
                                componentes que funcionan de manera integrada.
                            </p>
                            <p>
                                Los pasos a continuaci&oacute;n se enumeran para
                                facilitar la comprensi&oacute;n pero el sistema
                                de cumplimiento social es un proceso repetitivo
                                y constante. Las empresas pueden optar por
                                proceder con estos pasos en un orden diferente
                                y, por lo general, no es necesario finalizar un
                                paso antes de pasar al siguiente. Al mismo
                                tiempo, un sistema sin todos sus componentes
                                (por ejemplo, un sistema de auditor&iacute;a que
                                funciona de manera aislada de la
                                comunicaci&oacute;n y la capacitaci&oacute;n, la
                                remediaci&oacute;n y otras medidas) seguramente
                                ser&aacute; insuficiente para dar respuesta a
                                las cuestiones laborales dif&iacute;ciles que
                                pueden surgir en las cadenas de suministro
                                mundiales.
                            </p>
                            <ol>
                                <li>
                                    <em>
                                        <strong>Participaci&oacute;n</strong>
                                    </em>
                                    <em> de los interesados y los socios</em>
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
                                    <em> de un c&oacute;digo de conducta</em>
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
                                    <em> del desempe&ntilde;o</em>
                                </li>
                            </ol>
                            <p>
                                Cabe destacar que los sistemas de cumplimiento
                                social m&aacute;s robustos est&aacute;n
                                dise&ntilde;ados para abordar las normas
                                fundamentales del trabajo identificadas por la
                                Organizaci&oacute;n Internacional del Trabajo
                                (OIT), que abarcan la libertad sindical, la
                                negociaci&oacute;n colectiva, la
                                discriminaci&oacute;n en el trabajo, el trabajo
                                infantil y el trabajo forzoso, as&iacute; como
                                otras normas del trabajo tales como la seguridad
                                y salud en el trabajo, los salarios y el horario
                                de trabajo. (V&eacute;ase el{" "}
                                <Link to="/steps/3">
                                    tercer paso, Formulaci&oacute;n de un
                                    c&oacute;digo de conducta
                                </Link>
                                , para obtener m&aacute;s informaci&oacute;n
                                sobre estas normas de la OIT.)
                            </p>
                            <p>
                                La presente aplicaci&oacute;n proporciona pautas
                                para lograr sistemas integrales, pero se centra
                                en especial en el trabajo infantil y el trabajo
                                forzoso, de manera congruente con el mandato
                                dispuesto para ILAB en la Ley de 2005 de
                                Reautorizaci&oacute;n de la Protecci&oacute;n a
                                las V&iacute;ctimas de la Trata (TVPRA).
                            </p>
                        </div>
                        <h3>
                            Incorporaci&oacute;n a un programa de cumplimiento
                            social vigente
                        </h3>
                        <div>
                            <p>
                                En algunas industrias, hay grupos de empresas
                                que ya se reunieron para elaborar sistemas de
                                cumplimiento social conjuntos o, en algunos
                                casos, componentes de sistemas que las empresas
                                individuales pueden adoptar. Incorporarse a
                                estas redes, por lo general, implica un
                                compromiso de tiempo y recursos para colaborar
                                con otras empresas pero, a la larga, se pueden
                                ahorrar esfuerzos y recursos ya que se
                                aprovechan los conocimientos y las experiencias
                                de otras empresas. Es importante informarse
                                sobre estas iniciativas vigentes en la industria
                                antes de decidir sumarse a un programa actual o
                                elaborar uno propio.
                            </p>
                            <ExampleInAction id="better-work-garment">
                                <h4>
                                    <ExampleInAction.Icon />
                                    <strong>Ejemplo en acci&oacute;n</strong>:
                                    el programa{" "}
                                    <em>
                                        <strong>Better Work</strong>
                                    </em>{" "}
                                    en la industria de la vestimenta
                                </h4>
                                <p>
                                    El programa{" "}
                                    <a
                                        href="http://betterwork.org/"
                                        title="Better Work"
                                    >
                                        Better Work
                                    </a>
                                    , iniciativa conjunta de la
                                    Organizaci&oacute;n Internacional del
                                    Trabajo (OIT) y la Corporaci&oacute;n
                                    Financiera Internacional (CFI), est&aacute;
                                    dise&ntilde;ado para mejorar las
                                    pr&aacute;cticas y la productividad
                                    laborales en el sector de la vestimenta.{" "}
                                    <em>Better Work</em> es un programa
                                    transparente para la vigilancia y el
                                    seguimiento de f&aacute;bricas llevado
                                    adelante por un &oacute;rgano de vigilancia
                                    cre&iacute;ble (la OIT) en los pa&iacute;ses
                                    participantes. Los asesores de empresas de
                                    la OIT contratados a nivel local visitan las
                                    f&aacute;bricas para evaluar el cumplimiento
                                    de las normas fundamentales del trabajo
                                    (sobre libertad sindical y
                                    negociaci&oacute;n colectiva,
                                    discriminaci&oacute;n laboral, trabajo
                                    infantil y trabajo forzoso) as&iacute; como
                                    la legislaci&oacute;n nacional en materia de
                                    remuneraci&oacute;n, relaciones con los
                                    contratistas y en el lugar de trabajo,
                                    seguridad y salud ocupacionales y horario de
                                    trabajo. <em>Better Work</em> hace
                                    p&uacute;blicas estas evaluaciones en su{" "}
                                    <a
                                        href="https://portal.betterwork.org/transparency"
                                        title="Portal de transparencia"
                                    >
                                        portal de transparencia
                                    </a>
                                    , con lo cual los compradores
                                    internacionales pueden dirigir sus pedidos a
                                    f&aacute;bricas que avanzan en el
                                    cumplimiento. En el programa tambi&eacute;n
                                    se asesora a las empresas y se les ofrece
                                    asistencia para la remediaci&oacute;n a fin
                                    de mejorar el cumplimiento.{" "}
                                    <em>Better Work</em> est&aacute;
                                    estructurado de manera tal de armonizar los
                                    incentivos de los propietarios de
                                    f&aacute;bricas, los compradores, los
                                    gobiernos y los trabajadores m&aacute;s
                                    efectivamente a fin de proteger los derechos
                                    y mejorar el sustento. El Departamento de
                                    Trabajo de los EE.UU. es una fuente de
                                    fondos importante de los programas{" "}
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
                                requisitos para toda compa&ntilde;&iacute;a que
                                aspire a integrar la asociaci&oacute;n. Por
                                ejemplo, los miembros de la{" "}
                                <a
                                    href="http://www.eiccoalition.org/"
                                    title="Coalici&oacute;n Ciudadana de la Industria Electr&oacute;nica (EICC)"
                                >
                                    Coalici&oacute;n Ciudadana de la Industria
                                    Electr&oacute;nica (EICC)
                                </a>{" "}
                                se comprometen a seguir un{" "}
                                <a
                                    href="http://www.eiccoalition.org/standards/"
                                    title="C&oacute;digo de conducta"
                                >
                                    c&oacute;digo de conducta
                                </a>{" "}
                                com&uacute;n a fin de garantizar la mejora
                                continua en la responsabilidad social, ambiental
                                y &eacute;tica en sus cadenas de suministro. Los
                                miembros de la EICC demuestran cumplimiento de
                                este c&oacute;digo com&uacute;n mediante una
                                serie de evaluaciones obligatorias, como el{" "}
                                <a
                                    href="http://www.eiccoalition.org/standards/vap/"
                                    title="Proceso de evaluaci&oacute;n validado"
                                >
                                    proceso de evaluaci&oacute;n validado
                                </a>
                                , que contiene normas para realizar la
                                verificaci&oacute;n del cumplimiento{" "}
                                <i>in situ</i> y evaluaciones eficaces que se
                                pueden compartir.
                            </p>
                            <p>
                                Independientemente de que exista o no una
                                agrupaci&oacute;n en su industria, es
                                conveniente que tambi&eacute;n analice los
                                sistemas de cumplimiento social que abarcan a
                                varias industrias. Uno de estos programas es la{" "}
                                <a
                                    href="http://www.ethicaltrade.org"
                                    title="Iniciativa de Comercio &Eacute;tico (ETI)"
                                >
                                    Iniciativa de Comercio &Eacute;tico (ETI)
                                </a>
                                . Mediante la consulta con sindicatos,
                                organizaciones no gubernamentales (ONG) y
                                miembros empresariales, ETI cre&oacute; el{" "}
                                <a
                                    href="http://www.ethicaltrade.org/eti-base-code"
                                    title="C&oacute;digo B&aacute;sico de la ETI"
                                >
                                    C&oacute;digo B&aacute;sico de la ETI
                                </a>
                                . Las empresas que se incorporan a la ETI deben
                                adoptar este C&oacute;digo y aceptar los{" "}
                                <a
                                    href="http://www.ethicaltrade.org/resources/principles-implementation"
                                    title="Principios de aplicaci&oacute;n de la ETI"
                                >
                                    principios de aplicaci&oacute;n de la ETI
                                </a>
                                . Luego reciben instrumentos,
                                capacitaci&oacute;n y acceso a la red mundial de
                                la ETI a fin de obtener apoyo para tratar las
                                cuestiones de cumplimiento en el terreno. Para
                                obtener m&aacute;s informaci&oacute;n,
                                v&eacute;ase{" "}
                                <a
                                    href="http://www.ethicaltrade.org/node/1192?lang=en"
                                    title="compendio de instrumentos de la ETI"
                                >
                                    recursos para un comercio &eacute;tico
                                </a>{" "}
                                en el{" "}
                                <a
                                    href="http://www.ethicaltrade.org/node/1650"
                                    title="recursos para un comercio &eacute;tico"
                                >
                                    compendio de instrumentos de la ETI
                                </a>
                                .
                            </p>
                            <p>
                                El
                                <Link to="/steps/1">
                                    primer paso, Participaci&oacute;n de los
                                    interesados y los socios
                                </Link>
                                , contiene muchos m&aacute;s ejemplos de
                                programas e iniciativas de colaboraci&oacute;n a
                                las que puede sumarse.
                            </p>
                        </div>
                        <h3>
                            Definici&oacute;n del alcance del sistema de
                            cumplimiento social
                        </h3>
                        <div>
                            <p>
                                Actualmente en el mundo hay cerca de 80.000
                                empresas transnacionales y una cifra diez veces
                                superior de filiales. La mayor&iacute;a de las
                                empresas estadounidenses que realizan
                                transacciones a nivel mundial trabajan con
                                contratistas, agentes o productores en el
                                exterior en lugar de tener sus propias plantas
                                de producci&oacute;n en el extranjero. Por otra
                                parte, hay pocas empresas que comercializan o
                                venden una &uacute;nica l&iacute;nea de
                                productos y muchas trabajan con centenares,
                                incluso millares, de productos. Las cadenas de
                                suministro de las empresas son largas y
                                complejas, con un gran n&uacute;mero de
                                eslabones desde los proveedores inmediatos hasta
                                los establecimientos agropecuarios o las minas
                                que abastecen la materia prima.
                            </p>
                            <p>
                                Para la mayor&iacute;a de las empresas, puede
                                ser dif&iacute;cil lograr un sistema de
                                cumplimiento social que permita la
                                fiscalizaci&oacute;n y el control de cada actor
                                en cada cadena de suministro. Al mismo tiempo,
                                es fundamental que la empresa no solo evite
                                provocar o contribuir al trabajo infantil o al
                                trabajo forzoso por medio de sus propias
                                actividades, sino que tambi&eacute;n procure
                                evitar o mitigar una consecuencia adversa en los
                                derechos laborales emanada de sus operaciones
                                comerciales como consecuencia de sus relaciones
                                comerciales. En el{" "}
                                <Link to="/steps/2">
                                    segundo paso, Evaluaci&oacute;n de riesgos e
                                    impacto
                                </Link>
                                , se describen los procesos de debida diligencia
                                con los que se debe contar para identificar
                                estos abusos y el impacto.
                            </p>
                            <p>
                                De manera ideal, el sistema de cumplimiento debe
                                estar dise&ntilde;ado para priorizar esos
                                &aacute;mbitos de las cadenas de suministro en
                                los que el riesgo de infracciones laborales
                                atroces es m&aacute;s alto, ya sea debido al
                                contexto operativo, los productos o servicios en
                                cuesti&oacute;n u otras consideraciones
                                pertinentes. Por necesidad, tal vez deba
                                priorizar tambi&eacute;n los &aacute;mbitos de
                                las cadenas de suministro en los que la empresa
                                tiene la mayor influencia para realizar un
                                cambio importante. El{" "}
                                <Link to="/steps/2">
                                    segundo paso, Evaluaci&oacute;n de riesgos e
                                    impacto
                                </Link>
                                , tambi&eacute;n lo ayudar&aacute; a identificar
                                esos puntos de mayor riesgo e influencia.
                            </p>
                            <p>
                                Conforme se menciona a continuaci&oacute;n, las
                                &uacute;ltimas pautas de instituciones
                                internacionales abordaron directamente la
                                cuesti&oacute;n de la responsabilidad en la
                                cadena de suministro y se aclar&oacute; que las
                                empresas deben hacerse responsables por las
                                infracciones de los derechos humanos y laborales
                                en las cadenas de suministro. Posiblemente las
                                responsabilidades espec&iacute;ficas
                                var&iacute;en seg&uacute;n la gravedad de los
                                problemas en la cadena de suministro, el grado
                                en que la empresa causa o contribuye
                                directamente al problema, la influencia de la
                                empresa para repercutir en la conducta del
                                proveedor, el tipo de relaci&oacute;n comercial
                                entre la empresa y el proveedor en
                                cuesti&oacute;n, el tama&ntilde;o de la empresa
                                o el proveedor y otros factores.
                            </p>
                            <OwnWords>
                                <h4>
                                    <OwnWords.Icon />
                                    <strong>
                                        En sus propias palabras
                                    </strong>,{" "}
                                    <strong>
                                        Directrices de una instituci&oacute;n
                                        internacional sobre la responsabilidad
                                        en la cadena de suministro
                                    </strong>
                                </h4>
                                <p>
                                    <em>
                                        &ldquo;Para las empresas que cuenten con
                                        numerosas entidades en sus cadenas de
                                        valor puede resultar demasiado
                                        dif&iacute;cil proceder con la debida
                                        diligencia a fin de detectar
                                        consecuencias adversas en los derechos
                                        humanos en cada entidad. En tal caso,
                                        las empresas deben identificar las
                                        &aacute;reas generales que presenten el
                                        mayor riesgo de consecuencias adversas
                                        en los derechos humanos, ya sea por el
                                        contexto operativo de determinados
                                        proveedores o clientes, las operaciones,
                                        los productos o los servicios de que se
                                        trate, o por otras consideraciones
                                        pertinentes, y dar prioridad a la debida
                                        diligencia en materia de derechos
                                        humanos en esas &aacute;reas.&rdquo;
                                    </em>
                                </p>
                                <p>
                                    <em>
                                        &ldquo;Los medios a los que recurra una
                                        empresa para asumir su responsabilidad
                                        de respetar los derechos humanos
                                        ser&aacute;n proporcionales, entre otros
                                        factores, a su tama&ntilde;o. Las
                                        peque&ntilde;as y medianas empresas
                                        pueden disponer de menor capacidad,
                                        as&iacute; como de procedimientos y
                                        estructuras de gesti&oacute;n m&aacute;s
                                        informales que las grandes empresas, de
                                        modo que sus respectivos procesos y
                                        pol&iacute;ticas adoptar&aacute;n formas
                                        diferentes. Sin embargo, algunas
                                        peque&ntilde;as y medianas empresas
                                        pueden provocar graves consecuencias
                                        negativas para los derechos humanos, que
                                        requerir&aacute;n la adopci&oacute;n de
                                        las correspondientes medidas,
                                        independientemente de su tama&ntilde;o.
                                        La gravedad de esas consecuencias se
                                        determinar&aacute; en funci&oacute;n de
                                        su escala, alcance y car&aacute;cter
                                        irremediable.&rdquo;
                                    </em>
                                </p>
                                <p>
                                    Fuente:{" "}
                                    <a
                                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                                        title="Principios rectores de las Naciones Unidas sobre las empresas y los derechos humanos"
                                    >
                                        Principios rectores de las Naciones
                                        Unidas sobre las empresas y los derechos
                                        humanos
                                    </a>
                                    , 2011.
                                </p>
                                <p>
                                    <em>
                                        &ldquo;&hellip; [En] situaciones
                                        complejas en las que una empresa no haya
                                        contribuido a una consecuencia adversa
                                        en los derechos humanos, pero esa
                                        consecuencia tenga, no obstante, una
                                        conexi&oacute;n directa con sus
                                        operaciones, productos o servicios por
                                        la relaci&oacute;n comercial que tiene
                                        con otra entidad, &hellip; la empresa,
                                        sola o en cooperaci&oacute;n con otras
                                        entidades, conforme sea pertinente,
                                        [debe] usar su influencia para incidir
                                        en la entidad que provoca la
                                        consecuencia adversa en los derechos
                                        humanos con el fin de prevenir o mitigar
                                        esa consecuencia. &lsquo;Las relaciones
                                        comerciales&rsquo; comprenden las
                                        relaciones con socios comerciales,
                                        entidades en la cadena de suministro y
                                        cualquier otra entidad estatal o no
                                        estatal que est&eacute; vinculada
                                        directamente con las operaciones, los
                                        productos o servicios de la
                                        empresa.&rdquo;
                                    </em>
                                </p>
                                <p>
                                    Fuente:{" "}
                                    <a
                                        href="http://www.oecd.org/corporate/mne/"
                                        title="L&iacute;neas Directrices de la OCDE para Empresas Multinacionales, 2011."
                                    >
                                        L&iacute;neas Directrices de la OCDE
                                        para Empresas Multinacionales
                                    </a>
                                    <em>, </em>2011.
                                </p>
                                <p>
                                    <em>
                                        &ldquo;La Corporaci&oacute;n Financiera
                                        Internacional (CFI) establece que las
                                        empresas que se beneficien con
                                        empr&eacute;stitos de la CFI deben
                                        acatar ocho normas de desempe&ntilde;o
                                        en cuestiones ambientales y sociales. La
                                        norma de desempe&ntilde;o 2 establece
                                        las responsabilidades de las empresas en
                                        relaci&oacute;n con cuestiones de mano
                                        de obra y empleo. Con respecto a sus
                                        propios empleados, las empresas son
                                        responsables de identificar y remediar
                                        problemas en sus normas fundamentales
                                        del trabajo. Con respecto a los
                                        trabajadores contratados, la
                                        responsabilidad de la empresa es
                                        m&aacute;s limitada, y con respecto a
                                        los trabajadores en sus cadenas de
                                        suministro, las empresas son
                                        responsables &uacute;nicamente de
                                        identificar y remediar el trabajo
                                        infantil, el trabajo forzoso y los
                                        problemas de seguridad de magnitud. La
                                        CFI define a los &ldquo;trabajadores en
                                        la cadena de suministro&rdquo; como
                                        &ldquo;los trabajadores contratados por
                                        los proveedores principales [de la
                                        empresa] &hellip;los proveedores
                                        principales son aquellos que, de manera
                                        continua, suministran bienes o
                                        materiales esenciales para los
                                        &hellip;procesos de negocios centrales
                                        de la empresa&hellip;&rdquo;
                                    </em>
                                </p>
                                <p>
                                    Fuente:{" "}
                                    <a
                                        href="http://www.ifc.org/wps/wcm/connect/topics_ext_content/ifc_external_corporate_site/sustainability-at-ifc/policies-standards/performance-standards/ps2"
                                        title="Norma de desempe&ntilde;o 2 de la CFI"
                                    >
                                        Norma de desempe&ntilde;o 2 de la CFI
                                    </a>
                                    <em>,</em> 2012.
                                </p>
                            </OwnWords>
                        </div>
                        <h3>Sistemas de gesti&oacute;n</h3>
                        <div>
                            <p>
                                Al igual que toda unidad empresarial exitosa, el
                                equipo de gesti&oacute;n del cumplimiento social
                                debe contar con sistemas de gesti&oacute;n
                                integrados en los sistemas generales de la
                                empresa, en lugar de aislarse del resto de las
                                operaciones. Muchos elementos del sistema de
                                gesti&oacute;n (como la evaluaci&oacute;n de
                                riesgos, los planes de comunicaci&oacute;n, los
                                sistemas de informaci&oacute;n, los mecanismos
                                de reclamaci&oacute;n y demanda as&iacute; como
                                la verificaci&oacute;n independiente) son temas
                                de la presente aplicaci&oacute;n y se analizan
                                m&aacute;s a fondo en diferentes secciones.
                            </p>
                            <p>
                                La gesti&oacute;n de cualquier sistema o
                                programa debe comenzar con el establecimiento de
                                metas, objetivos y resultados de
                                desempe&ntilde;o. Muchos programas de
                                cumplimiento social definen una m&eacute;trica o
                                indicadores clave del desempe&ntilde;o en
                                relaci&oacute;n con los cuales miden los avances
                                logrados. Los indicadores clave del
                                desempe&ntilde;o pueden formularse internamente,
                                o como parte de un ejercicio de establecimiento
                                de puntos de referencia para compararse con los
                                programas de otras empresas. Una vez que se
                                establecen, el equipo debe corroborar
                                peri&oacute;dicamente los avances logrados
                                seg&uacute;n esas metas o indicadores, y abordar
                                los &aacute;mbitos en los que no se alcanzaron.
                                Por otra parte, el equipo peri&oacute;dicamente
                                debe examinar sus procesos y pol&iacute;ticas y
                                actualizarlos seg&uacute;n corresponda. Las
                                empresas con sistemas de cumplimiento social
                                s&oacute;lidos siempre se encuentran en la
                                modalidad de &ldquo;mejora
                                continua&rdquo;.&nbsp;
                            </p>
                            <p>
                                El{" "}
                                <a
                                    href="http://responsiblesourcingtool.org/"
                                    title="Responsible Sourcing Tool"
                                >
                                    Responsible Sourcing Tool
                                </a>{" "}
                                (instrumento de abastecimiento responsable),
                                lanzado en 2016 por Verit&eacute; y el
                                Departamento de Estado de los Estados Unidos,
                                contiene un{" "}
                                <a
                                    href="http://responsiblesourcingtool.org/riskmanagementprocess"
                                    title="Ejemplo de flujo de procesos para la gesti&oacute;n de riesgos en la cadena de suministro"
                                >
                                    ejemplo de flujo de procesos para la
                                    gesti&oacute;n de riesgos en la cadena de
                                    suministro
                                </a>
                                , que demuestra c&oacute;mo funciona un sistema
                                eficaz de gesti&oacute;n de la mejora continua
                                para detectar, atenuar y prevenir la trata de
                                personas en la cadena de suministro. Por otra
                                parte, el{" "}
                                <a
                                    href="http://responsiblesourcingtool.org/supplychainassurance"
                                    title="Ejemplo de programa de garant&iacute;a en la cadena de suministro"
                                >
                                    ejemplo de programa de garant&iacute;a en la
                                    cadena de suministro
                                </a>{" "}
                                contiene un resumen esquem&aacute;tico de los
                                procesos que puede aplicar una empresa para
                                identificar los puntos en la cadena de
                                suministro en que existe el riesgo de trata de
                                personas, abordar los problemas identificados,
                                aplicar soluciones duraderas, as&iacute; como
                                vigilar y dar seguimiento al desempe&ntilde;o de
                                los proveedores a lo largo del tiempo. Otro
                                recurso que contiene un bosquejo de los pasos
                                que puede seguir una empresa para lograr y
                                conservar una cadena de suministro sostenible es
                                la publicaci&oacute;n <em />
                                <a
                                    href="http://supply-chain.unglobalcompact.org/site/article/183"
                                    title="<i>Supply Chain Sustainability:</i> <i>A Practical Guide for Continuous Improvement</i>"
                                >
                                    <em>
                                        Supply Chain Sustainability: A Practical
                                        Guide for Continuous Improvement
                                    </em>
                                </a>
                                <em>,</em> publicada por el Pacto Mundial de las
                                Naciones Unidas y BSR.
                            </p>
                            <p>
                                A nivel pr&aacute;ctico, el equipo de
                                gesti&oacute;n debe cerciorarse de documentar
                                todas las funciones del sistema de cumplimiento
                                social. Esta documentaci&oacute;n debe incluir
                                pol&iacute;ticas y procedimientos escritos para
                                todos los componentes del sistema, as&iacute;
                                como protocolos de comunicaci&oacute;n.
                                Adem&aacute;s debe incluir documentos para
                                distribuir a otras unidades de la empresa; por
                                ejemplo, seguramente ser&aacute; muy &uacute;til
                                para el departamento de abastecimiento contar
                                con un resumen de las disposiciones de los
                                contratos con proveedores en relaci&oacute;n con
                                las obligaciones de cumplimiento social. Las
                                pol&iacute;ticas y los procedimientos
                                documentados del equipo deben contar con la
                                aprobaci&oacute;n y el respaldo de la alta
                                gerencia.
                            </p>
                            <p>
                                Las empresas y asociaciones de la industria
                                pueden optar por incorporar disposiciones sobre
                                los sistemas de gesti&oacute;n en sus propios
                                c&oacute;digos de conducta y exigir su
                                cumplimiento entre los miembros o los
                                proveedores de la asociaci&oacute;n. Este
                                concepto se ilustra con el ejemplo que se
                                describe a continuaci&oacute;n.
                            </p>
                            <ExampleInAction>
                                <h4>
                                    <ExampleInAction.Icon />
                                    <strong>
                                        Ejemplo en acci&oacute;n:
                                    </strong>{" "}
                                    <strong>
                                        C&oacute;digo de conducta de la
                                        Coalici&oacute;n Ciudadana de la
                                        Industria Electr&oacute;nica (EICC).
                                        Sistemas de gesti&oacute;n
                                    </strong>
                                </h4>
                                <p>
                                    Extra&iacute;do de la <em />
                                    <a
                                        href="http://www.eiccoalition.org/standards/code-of-conduct/"
                                        title="Extra&iacute;do de la versi&oacute;n 5.1 del C&oacute;digo de conducta de la EICC (2016)"
                                    >
                                        <em>
                                            versi&oacute;n 5.1 del C&oacute;digo
                                            de conducta de la EICC (2016)
                                        </em>
                                    </a>
                                </p>
                                <p>
                                    &ldquo;Los participantes deber&aacute;n
                                    adoptar o establecer un sistema de
                                    gesti&oacute;n cuyo alcance est&eacute;
                                    relacionado con el contenido del presente
                                    C&oacute;digo. El sistema de gesti&oacute;n
                                    estar&aacute; dise&ntilde;ado de manera tal
                                    de garantizar: a) el cumplimiento de la
                                    legislaci&oacute;n aplicable, la normativa y
                                    los requisitos del cliente en
                                    relaci&oacute;n con las operaciones y los
                                    productos del participante; b) la
                                    conformidad con el presente C&oacute;digo y
                                    c) la identificaci&oacute;n y
                                    mitigaci&oacute;n de los riesgos en las
                                    operaciones vinculados al presente
                                    C&oacute;digo. Adem&aacute;s, debe promover
                                    la mejora continua.
                                </p>
                                <p>
                                    El sistema de gesti&oacute;n debe contener
                                    los elementos que se indican a
                                    continuaci&oacute;n:
                                </p>
                                <ol>
                                    <li>
                                        <h4>Compromiso de la empresa</h4>
                                        <p>
                                            Declaraci&oacute;n de las
                                            pol&iacute;ticas de responsabilidad
                                            ambiental y social de la empresa en
                                            que se enuncie el compromiso del
                                            participante con el cumplimiento y
                                            la mejora continua, con el aval de
                                            la gerencia ejecutiva y exhibida en
                                            el idioma local en un lugar visible
                                            de las instalaciones.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Responsabilidad y rendici&oacute;n
                                            de cuentas de la gerencia
                                        </h4>
                                        <p>
                                            El participante identifica
                                            claramente al ejecutivo principal y
                                            al o a los responsables en la
                                            empresa de garantizar la
                                            ejecuci&oacute;n de los sistemas de
                                            gesti&oacute;n y los programas
                                            conexos. La alta gerencia
                                            peri&oacute;dicamente analiza el
                                            estado de situaci&oacute;n del
                                            sistema de gesti&oacute;n.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Requisitos legales y de los clientes
                                        </h4>
                                        <p>
                                            Proceso mediante el cual se
                                            identifica, vigila, da seguimiento y
                                            comprende la legislaci&oacute;n
                                            aplicable, la normativa y los
                                            requisitos del cliente, incluidos
                                            los que figuran en el presente
                                            C&oacute;digo.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Evaluaci&oacute;n de riesgos y
                                            gesti&oacute;n de riesgos
                                        </h4>
                                        <p>
                                            Proceso mediante el cual se
                                            identifican los riesgos en materia
                                            ambiental, de cumplimiento legal,
                                            salud y seguridad, pr&aacute;cticas
                                            laborales y &eacute;tica vinculados
                                            a las operaciones del participante.
                                        </p>
                                        <p>
                                            Determinar la importancia relativa
                                            de cada riesgo y aplicar los
                                            controles f&iacute;sicos y de
                                            procedimiento adecuados para
                                            contener los riesgos identificados y
                                            garantizar el cumplimiento
                                            normativo.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Objetivos de mejora</h4>
                                        <p>
                                            Objetivos de desempe&ntilde;o
                                            escritos, con sus metas y planes de
                                            aplicaci&oacute;n, a fin de mejorar
                                            el desempe&ntilde;o social y
                                            ambiental del participante, incluida
                                            una evaluaci&oacute;n
                                            peri&oacute;dica del
                                            desempe&ntilde;o del participante en
                                            pos del logro de dichos objetivos.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Capacitaci&oacute;n</h4>
                                        <p>
                                            Programas para capacitar a gerentes
                                            y trabajadores en la
                                            ejecuci&oacute;n de las
                                            pol&iacute;ticas, los procedimientos
                                            y los objetivos de mejora del
                                            participante, as&iacute; como para
                                            acatar los requisitos legales y
                                            normativos.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Comunicaci&oacute;n</h4>
                                        <p>
                                            Proceso para comunicar
                                            informaci&oacute;n clara y precisa
                                            sobre las pol&iacute;ticas,
                                            pr&aacute;cticas, expectativas y el
                                            desempe&ntilde;o del participante a
                                            los trabajadores, proveedores y
                                            clientes.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Comentarios y participaci&oacute;n
                                            de los trabajadores
                                        </h4>
                                        <p>
                                            Procesos en curso para evaluar la
                                            comprensi&oacute;n de los empleados
                                            y para que brinden comentarios sobre
                                            las pr&aacute;cticas y las
                                            condiciones contempladas en el
                                            C&oacute;digo, as&iacute; como para
                                            fomentar la mejora continua.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Auditor&iacute;as y evaluaciones
                                        </h4>
                                        <p>
                                            Autoevaluaciones peri&oacute;dicas
                                            para garantizar el cumplimiento de
                                            los requisitos legales y normativos,
                                            el contenido del C&oacute;digo y los
                                            requisitos contractuales de los
                                            clientes vinculados a la
                                            responsabilidad social y ambiental.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Proceso de acci&oacute;n correctiva
                                        </h4>
                                        <p>
                                            Proceso para la correcci&oacute;n
                                            oportuna de las deficiencias
                                            identificadas en las evaluaciones
                                            internas o externas, as&iacute; como
                                            en inspecciones, investigaciones y
                                            ex&aacute;menes.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Documentaci&oacute;n y registros
                                        </h4>
                                        <p>
                                            Formulaci&oacute;n y mantenimiento
                                            de documentos y registros para
                                            garantizar el cumplimiento normativo
                                            y la conformidad con los requisitos
                                            de la empresa junto con la debida
                                            confidencialidad para proteger la
                                            privacidad.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>
                                            Responsabilidad de los proveedores
                                        </h4>
                                        <p>
                                            Proceso para comunicar los
                                            requisitos del C&oacute;digo a los
                                            proveedores, as&iacute; como para
                                            vigilar y dar seguimiento al
                                            cumplimiento del
                                            C&oacute;digo.&rdquo;
                                        </p>
                                    </li>
                                </ol>
                            </ExampleInAction>
                        </div>
                        <h3>El equipo de cumplimiento social</h3>
                        <p>
                            En las empresas multinacionales, el equipo de
                            cumplimiento social generalmente est&aacute;
                            compuesto por un equipo de gesti&oacute;n, ubicado
                            en la casa matriz, y un equipo en el terreno,
                            ubicado en los pa&iacute;ses abastecedores de
                            productos, mientras que las PyME suelen tener
                            equipos de cumplimiento social m&aacute;s
                            peque&ntilde;os.
                        </p>
                        <p>
                            Las estructuras empresariales var&iacute;an
                            ampliamente pero el equipo de cumplimiento social
                            suele ser parte del departamento de Responsabilidad
                            Social Empresarial (RSE) o de Sostenibilidad de la
                            empresa. La nota distintiva de los equipos
                            m&aacute;s exitosos de cumplimiento social o RSE es
                            la l&iacute;nea directa de comunicaci&oacute;n que
                            poseen con las instancias decisorias de mayor nivel,
                            incluidos el ejecutivo principal y el Directorio.
                            Adem&aacute;s, la funci&oacute;n de cumplimiento
                            social o RSE debe estar bien integrada con otros
                            componentes de la empresa, en particular en
                            &aacute;mbitos como la gesti&oacute;n de la cadena
                            de suministro, la creaci&oacute;n de productos y el
                            abastecimiento. Por ejemplo, la funci&oacute;n de
                            cumplimiento social de Nike Corporation se encuentra
                            dentro de su &ldquo;
                            <a
                                href="http://about.nike.com/pages/sustainable-innovation"
                                title="Equipo de innovaci&oacute;n sostenible"
                            >
                                equipo de innovaci&oacute;n sostenible
                            </a>
                            &rdquo;, al cual le compete no solo el cumplimiento
                            ambiental y social sino tambi&eacute;n la
                            creaci&oacute;n de productos.
                        </p>
                        <p>
                            El equipo de gesti&oacute;n del cumplimiento social
                            fiscaliza todo el sistema de cumplimiento social.
                            Planea actividades, vigila la aplicaci&oacute;n, le
                            da seguimiento y recibe y analiza los informes del
                            terreno. Lo ideal ser&iacute;a que el equipo cuente
                            con la facultad de tomar decisiones sobre
                            situaciones individuales y sobre el sistema en su
                            totalidad. M&aacute;s all&aacute; de las aptitudes
                            de gesti&oacute;n centrales, como la
                            elaboraci&oacute;n del presupuesto y el
                            an&aacute;lisis de datos, el equipo de
                            gesti&oacute;n debe incluir a integrantes que posean
                            la flexibilidad de abordar situaciones inesperadas,
                            que puedan motivar y apoyar al equipo en el terreno
                            as&iacute; como promover la causa en nombre del
                            sistema ante la gerencia superior. Los miembros del
                            equipo de gesti&oacute;n siempre deben estar
                            expuestos de alguna manera al terreno. Deben seguir
                            de cerca las auditor&iacute;as, hablar con los
                            trabajadores y los sindicatos que los representan,
                            tanto en el lugar de trabajo como fuera, y vivir en
                            carne propia la realidad de los lugares de trabajo
                            que abastecen los productos.&nbsp;
                        </p>
                        <p>
                            Adem&aacute;s, el equipo de gesti&oacute;n del
                            cumplimiento social debe tener continuidad a largo
                            plazo. En las empresas en que el cumplimiento social
                            est&aacute; separado de otras funciones
                            empresariales, la partida de uno o dos integrantes
                            clave del equipo puede repercutir adversamente en
                            todo el programa de cumplimiento social. En
                            consecuencia, es importante que el equipo fortalezca
                            la capacidad de todo el personal de manera que las
                            operaciones puedan sobrevivir a los cambios de
                            personal.
                        </p>
                        <p>
                            Finalmente, el equipo de gesti&oacute;n debe contar
                            con los recursos adecuados para hacer su trabajo.
                            Por sobre todo, cuando la alta gerencia asigna
                            recursos y hay estructuras de incentivos por
                            desempe&ntilde;o que recompensan a los empleados por
                            la innovaci&oacute;n, la iniciativa y el impacto del
                            cumplimiento social, se env&iacute;a el mensaje de
                            que a la empresa le importa el cumplimiento social.
                        </p>
                        <p>
                            Los equipos de cumplimiento en el terreno
                            est&aacute;n conformados por auditores sociales que
                            realizan auditor&iacute;as sociales en las plantas
                            de producci&oacute;n y que trabajan con la gerencia
                            de la f&aacute;brica para identificar estrategias de
                            remediaci&oacute;n procedentes. La
                            composici&oacute;n de los equipos en el terreno, las
                            aptitudes necesarias y las cuestiones conexas se
                            analizan en el{" "}
                            <Link to="/steps/5">
                                quinto paso: Vigilancia y seguimiento del
                                cumplimiento.
                            </Link>
                        </p>
                        <p>
                            <em>
                                *Nota: Toda referencia que se haga en la
                                presente gu&iacute;a a empresas o entidades no
                                gubernamentales espec&iacute;ficas es con fines
                                informativos &uacute;nicamente a fin de
                                demostrar las buenas pr&aacute;cticas
                                internacionalmente reconocidas a la fecha de
                                lanzamiento de la aplicaci&oacute;n. Las
                                referencias a dichas entidades no debe
                                interpretarse como un aval oficial del
                                Departamento de Trabajo de los Estados Unidos a
                                ellas, sus productos ni servicios{" "}
                            </em>
                            <em>
                                y su menci&oacute;n no debe interpretarse como
                                un examen exhaustivo de las pr&aacute;cticas que
                                emplean dichas entidades en todos los
                                &aacute;mbitos
                            </em>
                            <em>.</em>
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                <border-separator> </border-separator>
                <Accordion.Section>
                    <Accordion.Title>Recursos adicionales</Accordion.Title>
                    <Accordion.Panel>
                        {" "}
                        <ol>
                            <li>
                                Dickson, Marsha, Suzanne Loker, Molly Eckman,
                                &ldquo;Stakeholder Theory and Social
                                Responsibility&rdquo;. Social Responsibility in
                                the Global Apparel Industry; Fairchild Books,
                                2009: 112-215.
                            </li>
                            <li>
                                La Organizaci&oacute;n Internacional de
                                Normalizaci&oacute;n (ISO) fij&oacute; una
                                amplia gama de normas para los sistemas de
                                gesti&oacute;n, como la ISO 17021, la
                                Gu&iacute;a 65 de ISO, la ISO 9001 y la ISO
                                19011. Estas normas abordan cuestiones como la
                                imparcialidad y la confidencialidad, el control
                                de documentaci&oacute;n y registros, los
                                ex&aacute;menes que realiza la gerencia,
                                criterios de calificaci&oacute;n del personal,
                                procedimientos de auditor&iacute;a, apelaciones
                                y demandas; disponible en idioma ingl&eacute;s
                                solamente en{" "}
                                <a
                                    href="https://www.iso.org/home.html"
                                    title="Organizaci&oacute;n Internacional de Normalizaci&oacute;n"
                                >
                                    http://www.iso.org/iso/home.html
                                </a>
                                .
                            </li>
                            <li>
                                En la norma de desempe&ntilde;o 1 de la
                                Corporaci&oacute;n Financiera Internacional se
                                abordan los elementos de los Sistemas de
                                Gesti&oacute;n Ambiental y Social (SGAS)
                                efectivos; disponible en idioma ingl&eacute;s
                                solamente en{" "}
                                <a
                                    href="http://www.ifc.org/wps/wcm/connect/b29a4600498009cfa7fcf7336b93d75f/Updated_GN1-2012.pdf?MOD=AJPERES"
                                    title="los elementos de los sistemas de Gesti&oacute;n Ambiental y Social (SGAS) efectivos "
                                >
                                    http://www.ifc.org/wps/wcm/connect/55d37e804a5b586a908b9f8969adcc27/PS_Spanish_2012_Full-Document.pdf?MOD=AJPERES
                                </a>
                                .
                            </li>
                            <li>
                                Locke, Richard M., Thomas Kochan, Monica Romis y
                                Fei Qin. &ldquo;Beyond corporate codes of
                                conduct: Work organization and labour standards
                                at Nike&rsquo;s suppliers,&rdquo;{" "}
                                <em>International Labour Review</em> 146, N.
                                <sup>o</sup> 1/2 (2007): 21-37.
                            </li>
                            <li>
                                Mamic, Ivanka. &ldquo;Managing Global Supply
                                Chain: The Sports Footwear, Apparel and Retail
                                Sectors&rdquo;,{" "}
                                <em>Journal of Business Ethics.</em> (2005) 59:
                                81-100.
                            </li>
                            <li>
                                Social Accountability International y
                                Corporaci&oacute;n Financiera Internacional
                                <em>. </em>
                                <i>
                                    Measure and Improve Your Labor Standards
                                    Performance
                                </i>
                                . 2010; disponible en idioma ingl&eacute;s
                                solamente en{" "}
                                <a
                                    href="http://www.ifc.org/wps/wcm/connect/a4aab30048865910b81afa6a6515bb18/SAI_IFC_LaborHandbook_Ch1-Intro.pdf?MOD=AJPERES"
                                    title="<i>Measure and Improve Your Labor Standards Performance</i>."
                                >
                                    http://www1.ifc.org/wps/wcm/connect/a4aab30048865910b81afa6a6515bb18/SAI_IFC_LaborHandbook_Ch1-Intro.pdf?MOD=AJPERES&amp;CACHEID=a4aab30048865910b81afa6a6515bb18
                                </a>
                                .
                            </li>
                            <li>
                                Social Accountability International (SAI) ofrece
                                el programa &ldquo;Huella social&rdquo; que se
                                centra en la formulaci&oacute;n de sistemas de
                                gesti&oacute;n. Al participar del
                                &ldquo;Programa huella social para la
                                gesti&oacute;n de la cadena de
                                suministro,&rdquo; las empresas pueden evaluar
                                sus avances en &aacute;mbitos de
                                desempe&ntilde;o clave para el cumplimiento
                                social y tener acceso a capacitaci&oacute;n en
                                la web para reforzar las competencias;
                                disponible en{" "}
                                <a
                                    href="http://sa-intl.org/index.cfm?fuseaction=Page.viewPage"
                                    title="Huella Social"
                                >
                                    http://socialfingerprint.org/
                                </a>
                                . Nota: este es un servicio pago.
                            </li>

                            <li>
                                Consejo de Derechos Humanos de las Naciones
                                Unidas.{" "}
                                <em>
                                    Principios Rectores Sobre las Empresas y los
                                    Derechos Humanos: Puesta en pr&aacute;ctica
                                    del marco de las Naciones Unidas para
                                    &quot;proteger, respetar y remediar.&quot;
                                </em>{" "}
                                Nueva York: 21 de marzo de 2011; disponible en{" "}
                                <a
                                    href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_SP.pdf"
                                    title='<i>Principios Rectores Sobre las Empresas y los Derechos Humanos: Puesta en pr&aacute;ctica del marco de las Naciones Unidas para "proteger, respetar y remediar"</i>'
                                >
                                    http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_SP.pdf
                                </a>
                                .
                            </li>
                        </ol>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
            <border-separator> </border-separator>
        </div>
    );
};

export default es;
