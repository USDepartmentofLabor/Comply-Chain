import React from "react";
import Accordion from "../../../../components/Accordion";
import childBrick from "../../../images/child_brick.jpg";
import unoDc from "../../../images/UNO_DC_es.png";

const es = ({ pdf }) => {
    return (
        <div>
            <h1>
                <strong>
                    ¿Qu&eacute; son el trabajo infantil y el trabajo forzoso?
                </strong>
            </h1>
            <p>Fuente de las normas:</p>
            <p>
                Las normas internacionales sobre el trabajo infantil y el
                trabajo forzoso fueron elaboradas por la{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.ilo.org/global/about-the-ilo/lang--es/index.htm"
                    title="Organizaci&oacute;n Internacional del Trabajo"
                >
                    Organizaci&oacute;n Internacional del Trabajo
                </a>{" "}
                (OIT), organismo especializado de las Naciones Unidas que
                re&uacute;ne a representantes del gobierno, empleadores y
                trabajadores de{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/public/english/standards/relm/country.htm"
                    title="187 Estados miembros&nbsp;"
                >
                    187 Estados miembros
                </a>{" "}
                para fijar normas internacionales del trabajo, elaborar
                pol&iacute;ticas e idear programas para promover los derechos en
                el trabajo y el empleo digno para todos.
            </p>
            <Accordion pdf={pdf}>
                <Accordion.Section>
                    <Accordion.Title>Trabajo infantil</Accordion.Title>
                    <Accordion.Panel>
                        <h3>Definiciones</h3>
                        <p>
                            Por <strong>ni&ntilde;o </strong>o{" "}
                            <strong>ni&ntilde;os</strong> se entiende a los
                            menores de 18 a&ntilde;os de edad.
                        </p>
                        <p>
                            El <strong>trabajo infantil</strong> comprende{" "}
                            <em>el trabajo de los menores de edad</em> conforme
                            se establece en la legislaci&oacute;n nacional
                            (salvo el trabajo ligero permitido) y las{" "}
                            <em>peores formas de trabajo infantil</em>.
                        </p>
                        <p>
                            El Convenio 138 de la OIT dispone que los
                            pa&iacute;ses deben fijar una edad m&iacute;nima
                            para trabajar que no sea inferior a la edad de
                            escolaridad obligatoria ni inferior a los 15
                            a&ntilde;os.&nbsp; Permite que los pa&iacute;ses
                            menos desarrollados fijen la edad m&iacute;nima en
                            14 a&ntilde;os.
                        </p>
                        <p>
                            El{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                title="Convenio 182 de la OIT"
                            >
                                Convenio 182 de la OIT
                            </a>{" "}
                            define las peores formas de trabajo infantil como:
                        </p>
                        <ol type="a">
                            <li>
                                todas las formas de esclavitud o las
                                pr&aacute;cticas an&aacute;logas a la
                                esclavitud, como la venta y la trata de
                                ni&ntilde;os, la servidumbre por deudas y la
                                condici&oacute;n de siervo, y el trabajo forzoso
                                u obligatorio, incluido el reclutamiento forzoso
                                u obligatorio de ni&ntilde;os para utilizarlos
                                en conflictos armados;
                            </li>
                            <li>
                                la utilizaci&oacute;n, el reclutamiento o la
                                oferta de ni&ntilde;os para la
                                prostituci&oacute;n, la producci&oacute;n de
                                pornograf&iacute;a o actuaciones
                                pornogr&aacute;ficas;
                            </li>
                            <li>
                                la utilizaci&oacute;n, el reclutamiento o la
                                oferta de ni&ntilde;os para la
                                realizaci&oacute;n de actividades
                                il&iacute;citas, en particular la
                                producci&oacute;n y el tr&aacute;fico de
                                estupefacientes, tal como se definen en los
                                tratados internacionales pertinentes, y
                            </li>
                            <li>
                                el trabajo que, por su naturaleza o por las
                                condiciones en que se lleva a cabo, es probable
                                que da&ntilde;e la salud, la seguridad o la
                                moralidad de los ni&ntilde;os.
                            </li>
                        </ol>
                        <p>
                            Seg&uacute;n el Convenio 182 de la OIT, los tipos de
                            trabajo peligroso &ldquo;deber&aacute;n ser
                            determinados por la legislaci&oacute;n nacional o
                            por la autoridad competente, previa consulta con las
                            organizaciones de empleadores y de trabajadores
                            interesadas y tomando en consideraci&oacute;n las
                            normas internacionales en la materia…&rdquo;
                            [art&iacute;culo 4]. Tal como se sugiere, los tipos
                            de trabajo identificado como &ldquo;peligroso&rdquo;
                            para los ni&ntilde;os pueden variar seg&uacute;n el
                            pa&iacute;s. La{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R190"
                                title="Recomendaci&oacute;n n&uacute;m. 190 de la OIT"
                            >
                                Recomendaci&oacute;n n&uacute;m. 190 de la OIT
                            </a>
                            , que acompa&ntilde;a al Convenio 182 de la OIT,
                            brinda directrices adicionales para identificar el
                            &ldquo;trabajo peligroso&rdquo;. En la
                            secci&oacute;n II, p&aacute;rrafo 3 de dicha
                            recomendaci&oacute;n se menciona que &ldquo;[a]l
                            determinar y localizar d&oacute;nde se practican los
                            tipos de trabajo a que se refiere el art&iacute;culo
                            3, d) del Convenio [Convenio 182 de la OIT],
                            deber&iacute;a tomarse en consideraci&oacute;n,
                            entre otras cosas:
                        </p>
                        <ol>
                            <li>
                                los trabajos en que el ni&ntilde;o queda
                                expuesto a abusos de orden f&iacute;sico,
                                psicol&oacute;gico o sexual;
                            </li>
                            <li>
                                los trabajos que se realizan bajo tierra, bajo
                                el agua, en alturas peligrosas o en espacios
                                cerrados;
                            </li>
                            <li>
                                los trabajos que se realizan con maquinaria,
                                equipos y herramientas peligrosos, o que
                                conllevan la manipulaci&oacute;n o el transporte
                                manual de cargas pesadas;
                            </li>
                            <li>
                                los trabajos realizados en un medio insalubre en
                                el que los ni&ntilde;os est&eacute;n expuestos,
                                por ejemplo, a sustancias, agentes o procesos
                                peligrosos, o bien a temperaturas o niveles de
                                ruido o de vibraciones que sean perjudiciales
                                para la salud;
                            </li>
                            <li>
                                los trabajos que implican condiciones
                                especialmente dif&iacute;ciles, como los
                                horarios prolongados o nocturnos, o los trabajos
                                que retienen injustificadamente al ni&ntilde;o
                                en los locales del empleador.&rdquo;
                            </li>
                        </ol>
                        <img
                            id="img-browser"
                            className="small-img"
                            src={childBrick}
                            alt="Ni&ntilde;a con ladrillos"
                        />
                        <p className="small-text">M. Crozet/OIT</p>
                        <p>
                            El trabajo infantil abarca pr&aacute;cticamente a
                            todos los sectores y tipos de trabajo. Los
                            ni&ntilde;os cosechan algod&oacute;n en
                            Uzbekist&aacute;n, trabajan como sirvientes
                            dom&eacute;sticos en Hait&iacute; y extraen
                            diamantes en la Rep&uacute;blica Centroafricana.
                        </p>
                        <p>
                            Cabe mencionar que no en todos los trabajos que
                            realizan los ni&ntilde;os media la
                            explotaci&oacute;n. Los ni&ntilde;os en edad legal
                            para trabajar que realizan tareas que no impiden su
                            desarrollo mental, f&iacute;sico o emocional
                            (&ldquo;ni&ntilde;os que trabajan&rdquo;
                            seg&uacute;n las normas internacionales) pueden
                            desempe&ntilde;ar una funci&oacute;n importante para
                            el bienestar de sus familias y el desarrollo
                            econ&oacute;mico de sus pa&iacute;ses. Este tipo de
                            trabajo puede consistir en ayudar con los quehaceres
                            dom&eacute;sticos, ayudar a los padres en un negocio
                            familiar fuera del horario escolar y realizar
                            actividades no peligrosas fuera del horario escolar
                            o durante las vacaciones para ganar dinero
                            adicional.
                        </p>
                        <p>
                            <em>*Nota: </em>
                            <em>
                                Las normas sobre trabajo infantil y trabajo
                                forzoso que se analizan en la presente
                                aplicaci&oacute;n son normas internacionales y
                                no deben interpretarse como legislaci&oacute;n
                                de los Estados Unidos.
                            </em>
                        </p>
                        <p />
                        <h3>Factores determinantes del trabajo infantil</h3>
                        <p>
                            Los ni&ntilde;os ingresan a la fuerza laboral debido
                            a factores tanto de oferta como de demanda de la
                            industria para acceder a mano de obra de bajo costo
                            y no calificada, entre otros factores. La pobreza es
                            la fuente m&aacute;s destacada de presi&oacute;n que
                            lleva a la oferta de trabajo infantil. Los procesos
                            productivos que exigen mano de obra no calificada en
                            abundancia o ciertos atributos f&iacute;sicos (baja
                            estatura, agilidad y otros de este tipo)
                            tambi&eacute;n dan lugar a la demanda de trabajo
                            infantil. Por otra parte, las presiones de precio
                            instan a los proveedores, en particular en los
                            puntos de producci&oacute;n al inicio de la cadena
                            de suministro, a buscar la mano de obra m&aacute;s
                            econ&oacute;mica. Los ni&ntilde;os tal vez sean los
                            &uacute;nicos obreros dispuestos a trabajar por
                            estos salarios o, para los adultos, estos niveles
                            salariales tal vez no les permitan satisfacer sus
                            necesidades b&aacute;sicas y deban poner a trabajar
                            a sus hijos para complementar el ingreso familiar.
                            Estos factores fundamentales de la oferta y la
                            demanda suelen verse reforzados por factores como la
                            falta de acceso adecuado a la educaci&oacute;n, la
                            escasa posibilidad de empleo para los que estudian,
                            actitudes sociales de exclusi&oacute;n basadas en
                            castas o grupos &eacute;tnicos, sexo y actitudes
                            culturales hacia el trabajo y la educaci&oacute;n.
                        </p>
                        <p />
                        <h3>C&aacute;lculos de trabajo infantil</h3>
                        <p>
                            Seg&uacute;n los c&aacute;lculos de la OIT, en 2016
                            en todo el mundo hab&iacute;a 152 millones de
                            ni&ntilde;os que trabajaban. Todav&iacute;a no se
                            dispone de las estad&iacute;sticas mundiales de
                            trabajo infantil de 2016 en adelante.
                        </p>
                        <p />
                        <h3>
                            <strong>Recursos adicionales</strong>
                        </h3>
                        <ol>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo.{" "}
                                <i>Global estimation of child labour 2016:</i>{" "}
                                <i>Main results and methodology</i>, Ginebra,
                                septiembre de 2017.
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,
                                Intensificar la lucha contra el trabajo
                                infantil: Informe global con arreglo al
                                seguimiento de la Declaraci&oacute;n de la OIT
                                relativa a los principios y derechos
                                fundamentales en el trabajo - 2010 Ginebra;
                                2010; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/publications/books/WCMS_127688/lang--en/index.htm%20"
                                    title="Informe global con arreglo al seguimiento de la Declaraci&oacute;n de la OIT relativa a los principios y derechos fundamentales en el trabajo - 2010"
                                >
                                    http://www.ilo.org/wcmsp5/groups/public/@ed_norm/@relconf/documents/meetingdocument/wcms_136697.pdf
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,
                                <em>
                                    {" "}
                                    ¿Qu&eacute; se entiende por trabajo
                                    infantil?
                                </em>{" "}
                                consultado el 25 de noviembre de 2011;
                                disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/ipec/facts/lang--es/index.htm"
                                    title="<i>¿Qu&eacute; se entiende por trabajo infantil?</i> "
                                >
                                    http://www.ilo.org/ipec/facts/lang--es/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,{" "}
                                <em>Ni&ntilde;os en trabajos peligrosos:</em>
                                <em> </em>
                                <em>Lo que sabemos, lo que debemos hacer</em>,
                                Ginebra, junio de 2011; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/global/publications/ilo-bookstore/order-online/books/WCMS_155443/lang--es/index.htm"
                                    title="<i>Ni&ntilde;os en trabajos peligrosos:</i><i> </i><i>Lo que sabemos, lo que debemos hacer</i>, Ginebra, junio de 2011"
                                >
                                    https://www.ilo.org/global/publications/ilo-bookstore/order-online/books/WCMS_155443/lang--es/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Convenio 138 de la Organizaci&oacute;n
                                Internacional del Trabajo (edad m&iacute;nima);
                                disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:312283,es:NO"
                                    title="Convenio 138 de la Organizaci&oacute;n Internacional del Trabajo (edad m&iacute;nima)"
                                >
                                    http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:312283,es
                                </a>
                                .
                            </li>
                            <li>
                                Convenio 182 de la Organizaci&oacute;n
                                Internacional del Trabajo (las peores formas de
                                trabajo infantil); disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                    title="Convenio 182 de la Organizaci&oacute;n Internacional del Trabajo (las peores formas de trabajo infantil)"
                                >
                                    http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del
                                Trabajo-Organizaci&oacute;n Internacional de
                                Empleadores,{" "}
                                <i>
                                    Eliminaci&oacute;n del trabajo infantil.
                                    Gu&iacute;a para empleadores. Gu&iacute;a I:
                                    Introducci&oacute;n al problema del trabajo
                                    infantil
                                </i>
                                , Ginebra: 2007; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/public/spanish/dialogue/actemp/downloads/projects/guia_empleadores_actemp.pdf"
                                    title="<i>Eliminaci&oacute;n del trabajo infantil. Gu&iacute;a para empleadores. Gu&iacute;a I: Introducci&oacute;n al problema del trabajo infantil</i>"
                                >
                                    http://www.ilo.org/public/spanish/dialogue/actemp/downloads/projects/guia_empleadores_actemp.pdf
                                </a>
                                .
                            </li>
                            <li>
                                Confederaci&oacute;n Sindical Internacional.{" "}
                                <em>
                                    Mini gu&iacute;a de acci&oacute;n: trabajo
                                    infantil
                                </em>
                                , Bruselas, 2008; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ituc-csi.org/IMG/pdf/mini_guide_CL_final_ES.pdf"
                                    title="Mini gu&iacute;a de acci&oacute;n para los sindicatos: : trabajo infantil"
                                >
                                    http://www.ituc-csi.org/IMG/pdf/mini_guide_CL_final_ES.pdf
                                </a>
                                .
                            </li>
                            <li>
                                Oficina Internacional del Trabajo.{" "}
                                <em>
                                    18a Conferencia Internacional de
                                    Estad&iacute;sticos del Trabajo - Informe
                                    III: Estad&iacute;sticas del trabajo
                                    infantil
                                </em>
                                . Ginebra, 5 de diciembre de 2008.
                                ICLS/18/2008/III. Disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/meetingdocument/wcms_099977.pdf"
                                    title="18a Conferencia Internacional de Estad&iacute;sticos del Trabajo - Informe III: Estad&iacute;sticas sobre trabajo infantil"
                                >
                                    https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/meetingdocument/wcms_099977.pdf
                                </a>
                                .
                            </li>
                            <li>
                                Departamento de Trabajo de los Estados Unidos.
                                &nbsp;
                                <i>
                                    Conclusiones sobre las peores formas de
                                    trabajo infantil
                                </i>
                                , Washington, DC; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.dol.gov/agencies/ilab/resources/reports/child-labor/findings"
                                    title="Departamento de Trabajo de los Estados Unidos. Conclusiones sobre las peores formas de trabajo infantil, Washington, DC."
                                >
                                    http://www.dol.gov/ilab/programs/ocft/tda.htm
                                </a>
                                .
                            </li>
                        </ol>
                    </Accordion.Panel>
                </Accordion.Section>

                <Accordion.Section>
                    <Accordion.Title>Trabajo forzoso</Accordion.Title>
                    <Accordion.Panel>
                        <h3>Definiciones</h3>
                        <p>
                            La definici&oacute;n de{" "}
                            <strong>trabajo forzoso u obligatorio</strong>{" "}
                            reconocida internacionalmente se encuentra en el
                            Convenio 29 de la OIT. En el marco de este convenio,
                            el trabajo forzoso u obligatorio es &ldquo;todo
                            trabajo o servicio exigido a un individuo bajo la
                            amenaza de una pena cualquiera y para el cual dicho
                            individuo no se ofrece voluntariamente&rdquo;. Esta
                            definici&oacute;n consta de cuatro elementos
                            centrales e indicadores para cada elemento, conforme
                            se explica a continuaci&oacute;n. Debe analizarse la
                            combinaci&oacute;n de indicadores en cada
                            situaci&oacute;n a fin de determinar si constituye
                            trabajo forzoso o no.
                        </p>
                        <ul>
                            <li>
                                <em>Todo trabajo o servicio:</em> incluye todos
                                los tipos de trabajo, servicio y empleo,
                                independientemente de la industria, el sector o
                                la ocupaci&oacute;n en que se encuentre y abarca
                                tanto el empleo legal y formal como el trabajo
                                ilegal e informal.
                            </li>
                            <li>
                                <em>Un individuo:</em> se refiere a adultos y
                                ni&ntilde;os.
                            </li>
                            <li>
                                <em>Amenaza de una pena cualquiera:</em> se
                                refiere a la convicci&oacute;n de un trabajador
                                de que recibir&aacute; una pena si se
                                reh&uacute;sa a trabajar. &ldquo;Amenaza&rdquo;
                                implica que la pena no se impuso necesariamente
                                sino que las amenazas de pena podr&iacute;an ser
                                suficientes si el empleado considera que el
                                empleador la impondr&aacute;. Una amplia
                                variedad de penas, como encierro en el lugar de
                                trabajo, violencia contra los trabajadores o sus
                                familiares, retenci&oacute;n de los documentos
                                de identidad, despido, impago de salarios,
                                denuncia a las autoridades u otra p&eacute;rdida
                                de derechos o privilegios, puede ser suficiente
                                para satisfacer este elemento de prueba del
                                trabajo forzoso.
                            </li>
                            <li>
                                <em>Voluntariamente: </em>se refiere al
                                consentimiento de los trabajadores a aceptar un
                                empleo y a su libertad de abandonarlo en
                                cualquier momento, previa notificaci&oacute;n
                                razonable de conformidad con la
                                legislaci&oacute;n nacional o los convenios
                                colectivos. Esencialmente, las personas se
                                encuentran en situaci&oacute;n de trabajo
                                forzoso si realizan alg&uacute;n trabajo o
                                prestan servicios en contra de su libre
                                albedr&iacute;o y no pueden abandonarlo sin una
                                pena o la amenaza de pena. La falta de voluntad
                                no necesariamente se desprende del castigo
                                f&iacute;sico ni el encierro; tambi&eacute;n
                                emana de otras formas de represalia, como la
                                p&eacute;rdida de derechos o privilegios o el
                                impago de los salarios adeudados. Cabe mencionar
                                que se puede considerar que un trabajador se
                                encuentra en situaci&oacute;n de trabajo forzoso
                                incluso tras expresar su consentimiento, si
                                dicho consentimiento se obtuvo mediante el uso
                                de la fuerza, el rapto, la estafa, el
                                enga&ntilde;o o el abuso de poder o una
                                posici&oacute;n de vulnerabilidad, o si el
                                consentimiento se revoc&oacute;.
                            </li>
                        </ul>
                        <p>
                            El Convenio 105 de la OIT, que tambi&eacute;n se
                            refiere al trabajo forzoso, establece adem&aacute;s
                            que nunca se har&aacute; uso del trabajo forzoso con
                            fines de fomento econ&oacute;mico ni como medio de
                            coacci&oacute;n pol&iacute;tica,
                            discriminaci&oacute;n, disciplina o castigo laboral
                            por haber participado en huelgas.
                        </p>
                        <p>
                            <em>*Nota: </em>
                            <em>
                                Las normas sobre trabajo infantil y trabajo
                                forzoso que se analizan en la presente
                                aplicaci&oacute;n son normas internacionales y
                                no deben interpretarse como legislaci&oacute;n
                                de los Estados Unidos.
                            </em>
                        </p>
                        <p />
                        <h3>Patrones y tipos de trabajo forzoso</h3>
                        <p>
                            El trabajo forzoso puede ocurrir en cualquier
                            industria y en cualquier pa&iacute;s, pero puede ser
                            especialmente frecuente en las industrias en las que
                            se requiere mano de obra escasamente calificada,
                            como la agricultura o la miner&iacute;a, o en
                            ocupaciones que no est&aacute;n a la vista del
                            p&uacute;blico, como el servicio dom&eacute;stico.
                        </p>
                        <p>
                            Hasta el siglo XX, gran parte del trabajo forzoso
                            del mundo estaba arraigado en los sistemas de
                            estratificaci&oacute;n social y los patrones de
                            discriminaci&oacute;n tradicionales, las estructuras
                            de producci&oacute;n agraria, la conquista, el
                            colonialismo y el comercio de esclavos. Ciertas
                            castas, minor&iacute;as religiosas y pueblos
                            ind&iacute;genas han sido vulnerables al trabajo
                            forzoso desde hace mucho tiempo.
                        </p>
                        <p>
                            El trabajo forzoso no es simplemente un problema
                            hist&oacute;rico. En la actualidad, al igual que en
                            el pasado, algunos gobiernos obligan a sus
                            ciudadanos a realizar proyectos de infraestructura,
                            producir bienes, cultivar la tierra y realizar otros
                            tipos de trabajo. En realidad, la OIT calcula que el
                            16 por ciento del trabajo forzoso en todo el mundo
                            est&aacute; impuesto por el Estado. Esto abarca el
                            trabajo en centros penitenciarios donde las
                            v&iacute;ctimas est&aacute;n encarceladas sin la
                            condena de un tribunal de justicia, y obligadas a
                            trabajar o prestar servicios.
                        </p>
                        <p>
                            La migraci&oacute;n laboral tambi&eacute;n ha dado
                            lugar al trabajo forzoso. En todo el mundo, hay unos
                            150 millones de trabajadores migrantes en la fuerza
                            laboral.
                            <sup>1</sup> Estos trabajadores pueden ser
                            especialmente vulnerables a los reclutadores
                            laborales y a otros intermediarios, como grupos de
                            delincuencia organizada y empleadores que ofrecen
                            t&eacute;rminos contractuales falsos y dem&aacute;s
                            artima&ntilde;as fraudulentas. Muchos migrantes
                            abonan tasas a estos reclutadores o intermediarios y
                            quedan atrapados en la servidumbre por deudas: deuda
                            c&iacute;clica, con frecuencia con tasas de
                            inter&eacute;s irrazonables u otras condiciones que
                            resultan inalcanzables con sus salarios. Los ciclos
                            de servidumbre por deudas se originan tambi&eacute;n
                            cuando los empleadores realizan deducciones de los
                            salarios de los trabajadores en concepto de
                            vivienda, alimentos y otros costos, y el salario
                            neto termina siendo escaso o nulo.
                        </p>
                        <p>
                            Asimismo, los migrantes pueden ser especialmente
                            vulnerables al encierro en el lugar de trabajo,
                            tanto por retenci&oacute;n por parte del empleador
                            de los documentos de identidad como por distintos
                            medios de coacci&oacute;n f&iacute;sica o
                            psicol&oacute;gica.{" "}
                        </p>
                        <p>
                            Por otra parte, la din&aacute;mica moderna de la
                            producci&oacute;n mundial y la demanda de bienes
                            m&aacute;s econ&oacute;micos y desechables
                            intensificaron la vulnerabilidad del trabajador al
                            trabajo forzoso. Por ejemplo, la presi&oacute;n del
                            comprador a los proveedores para que completen los
                            pedidos en plazos irrisorios puede dar lugar a que
                            los proveedores obliguen a los trabajadores a
                            extender el horario laboral, normalmente sin
                            remuneraci&oacute;n adicional. Tambi&eacute;n puede
                            dar lugar a que los proveedores tercericen la
                            producci&oacute;n a subcontratistas que est&aacute;n
                            fuera de la red de subcontratistas permitidos. En
                            muchos pa&iacute;ses, hay peque&ntilde;as empresas
                            informales que no est&aacute;n inscritas y no son
                            visibles para el comprador, lo cual deja a los
                            trabajadores al margen de las protecciones legales y
                            de los sistemas de cumplimiento social.{" "}
                        </p>
                        <p>
                            Si bien la pobreza puede llevar a la gente a
                            realizar trabajos explotadores, es importante
                            diferenciar entre condiciones laborales sumamente
                            deficientes y trabajo forzoso. La falta de
                            alternativas econ&oacute;micas, como otros trabajos,
                            no constituye en s&iacute; misma trabajo forzoso ni
                            tampoco los edificios en mal estado, condiciones de
                            salud y seguridad deficientes, viviendas precarias
                            facilitadas por el empleador y otras infracciones de
                            los derechos laborales. La caracter&iacute;stica
                            distintiva del trabajo forzoso es la
                            sensaci&oacute;n que tiene el trabajador de que
                            existe una amenaza de pena, impuesta por su
                            empleador o agente del empleador, como un supervisor
                            o reclutador, y la realizaci&oacute;n del trabajo en
                            contra de su voluntad.
                        </p>
                        <h3>C&aacute;lculos de trabajo forzoso</h3>
                        <p>
                            Seg&uacute;n c&aacute;lculos de la OIT en 2016, en
                            todo el mundo hab&iacute;a 25 millones de
                            v&iacute;ctimas del trabajo forzoso. De estas, 5
                            millones se encontraban en situaci&oacute;n de
                            explotaci&oacute;n sexual forzosa con fines
                            comerciales y 16 millones, en otros tipos de
                            explotaci&oacute;n laboral en sectores como la
                            agricultura, la construcci&oacute;n, el trabajo
                            dom&eacute;stico y la fabricaci&oacute;n. Los 4
                            millones restantes realizaban distintos tipos de
                            trabajo forzoso impuestos por el Estado.
                            <sup>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="#_ftnref1"
                                    name="_ftn1"
                                >
                                    [1]
                                </a>{" "}
                                OIT:&nbsp;
                                <em>
                                    <i>
                                        ILO Global Estimates on Migrant Workers:
                                    </i>
                                    &nbsp; <i>Results and Methodology</i>,{" "}
                                </em>
                                Ginebra, 2015, p.xi
                            </sup>
                        </p>
                        <h3>Trata de personas</h3>
                        <p>
                            La trata de personas se define en el{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.osce.org/odihr/19223?download=true"
                                title="Protocolo para prevenir, reprimir y sancionar la trata de personas, especialmente mujeres y ni&ntilde;os"
                            >
                                &ldquo;Protocolo para prevenir, reprimir y
                                sancionar la trata de personas, especialmente
                                mujeres y ni&ntilde;os&rdquo;
                            </a>{" "}
                            de 2000 (Protocolo de la Convenci&oacute;n de las
                            Naciones Unidas contra la Delincuencia Organizada
                            Transnacional) como &ldquo;la captaci&oacute;n, el
                            transporte, el traslado, la acogida o la
                            recepci&oacute;n de personas, recurriendo a la
                            amenaza o al uso de la fuerza u otras formas de
                            coacci&oacute;n, al rapto, al fraude, al
                            enga&ntilde;o, al abuso de poder o de una
                            situaci&oacute;n de vulnerabilidad o a la
                            concesi&oacute;n o recepci&oacute;n de pagos o
                            beneficios para obtener el consentimiento de una
                            persona que tenga autoridad sobre otra, con fines de
                            explotaci&oacute;n&rdquo;. Conforme se establece en
                            dicho Protocolo, la explotaci&oacute;n comprende,
                            como m&iacute;nimo &ldquo;la explotaci&oacute;n de
                            la prostituci&oacute;n ajena u otras formas de
                            explotaci&oacute;n sexual, los trabajos o servicios
                            forzados, la esclavitud o las pr&aacute;cticas
                            an&aacute;logas a la esclavitud, la servidumbre o la
                            extracci&oacute;n de &oacute;rganos&rdquo;.
                        </p>
                        <img src={unoDc} alt="UNO DC" /> <br />
                        <p className="small-text">
                            Fuente: Oficina de Naciones Unidas contra la Droga y
                            el Delito.{" "}
                            <em>Informe mundial sobre la trata de personas</em>;
                            2016.{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.unodc.org/documents/data-and-analysis/glotip/2016_Global_Report_on_Trafficking_in_Persons.pdf"
                                title="Informe mundial sobre la trata de personas "
                            >
                                https://www.unodc.org/documents/data-and-analysis/glotip/2016_Global_Report_on_Trafficking_in_Persons.pdf
                            </a>
                            .
                        </p>
                        <p />
                        <h3>
                            <strong>Recursos adicionales</strong>
                        </h3>
                        <ol>
                            <li>
                                Convenio 29 de la Organizaci&oacute;n
                                Internacional del Trabajo (Convenio sobre el
                                trabajo forzoso); disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:312174,es"
                                    title="Convenio 29 de la Organizaci&oacute;n Internacional del Trabajo (Convenio sobre el trabajo forzoso)"
                                >
                                    http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:312174,es
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo.
                                <em>
                                    {" "}
                                    El costo de la coacci&oacute;n: Informe
                                    global con arreglo al seguimiento de la
                                    Declaraci&oacute;n de la OIT relativa a los
                                    principios y derechos fundamentales en el
                                    trabajo,{" "}
                                </em>
                                Ginebra; 2009; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_106269/lang--es/index.htm"
                                    title="El costo de la coacci&oacute;n: Informe global con arreglo al seguimiento de la Declaraci&oacute;n de la OIT relativa a los principios y derechos fundamentales en el trabajo"
                                >
                                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_106269/lang--es/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,
                                ILO Global <em>Estimate of Forced Labour:</em>
                                <em> </em>
                                <em>Results and Methodology</em>, Ginebra, 2012;
                                disponible en idioma ingl&eacute;s solamente en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/washington/WCMS_182004/lang--en/index.htm"
                                    title="ILO <i>Global Estimate of Forced Labour:</i><i> </i><i>Results and Methodology</i>"
                                >
                                    http://www.ilo.org/washington/WCMS_182004/lang--en/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,{" "}
                                <em>
                                    <em>
                                        Hard to see, harder to count - Survey
                                        guidelines to estimate forced labour of
                                        adults and children
                                    </em>
                                    ,{" "}
                                </em>
                                Ginebra, 2012; disponible en idioma
                                ingl&eacute;s solamente en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://ilo.org/global/topics/forced-labour/publications/WCMS_182096/lang--en/index.htm"
                                    title="<i>Hard to see, harder to count - Survey guidelines to estimate forced labour of adults and children</i>"
                                >
                                    http://ilo.org/global/topics/forced-labour/publications/WCMS_182096/lang--en/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,{" "}
                                <i>Lucha contra el trabajo forzoso - </i>
                                <i> </i>
                                <i>Manual para empleadores y empresas</i>,
                                Ginebra, 25 de junio de 2015; disponible en
                                idioma ingl&eacute;s solamente en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm"
                                    title="<i>Lucha contra el trabajo forzoso -</i><i> </i><i>Manual para empleadores y empresas</i>"
                                >
                                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_105883/lang--es/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Organizaci&oacute;n Internacional del Trabajo,{" "}
                                <em>
                                    <em>Ganancias y Pobreza:</em>{" "}
                                    <em>
                                        Aspectos econ&oacute;micos del trabajo
                                        forzoso
                                    </em>
                                </em>
                                . Ginebra, 2014; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--es/index.htm"
                                    title="<i>Ganancias y Pobreza:</i><i> </i><i>Aspectos econ&oacute;micos del trabajo forzoso</i>"
                                >
                                    http://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--es/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                Protocolo de la Organizaci&oacute;n
                                Internacional del Trabajo de 2014 relativo al
                                Convenio sobre el trabajo forzoso; disponible en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174672,es"
                                    title="Protocolo de la Organizaci&oacute;n Internacional del Trabajo de 2014 relativo al Convenio sobre el trabajo forzoso"
                                >
                                    http://www.ilo.org/dyn/normlex/es/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174672,es
                                </a>
                                .
                            </li>
                            <li>
                                Recomendaci&oacute;n de la Organizaci&oacute;n
                                Internacional del Trabajo sobre las medidas
                                complementarias para la supresi&oacute;n
                                efectiva del trabajo forzoso, 2014; disponible
                                en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/es/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174688,es:NO"
                                    title="Recomendaci&oacute;n de la Organizaci&oacute;n Internacional del Trabajo sobre las medidas complementarias para la supresi&oacute;n efectiva del trabajo forzoso"
                                >
                                    http://www.ilo.org/dyn/normlex/es/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174688,es:NO
                                </a>
                                .
                            </li>
                            <li>
                                Confederaci&oacute;n Sindical Internacional.{" "}
                                <em>
                                    <em>
                                        C&oacute;mo luchar contra el trabajo
                                        forzoso y la trata de personas
                                    </em>
                                </em>
                                , Bruselas, 2010; disponible en idioma
                                ingl&eacute;s solamente en{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ituc-csi.org/ituc-guide-how-to-combat-forced.html?lang=en"
                                    title="Cómo luchar contra el trabajo forzoso y la trata de personas"
                                >
                                    http://www.ituc-csi.org/guia-csi-como-luchar-contra-el?lang=es.
                                </a>
                            </li>
                        </ol>
                        <p>&nbsp;</p>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
        </div>
    );
};

export default es;
