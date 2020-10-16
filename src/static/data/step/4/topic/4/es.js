import React from "react";
import Accordion from "../../../../../../components/Accordion";
import StaticData from "../../../../../../components/StaticData";
import cocoaSupplyChains from "../../../../../images/cocoa_supply_chains_es.png";
import genericImport from "../../../../../images/generic_import_es.png";
import electronics from "../../../../../images/electronics.jpg";
import minerals from "../../../../../images/minerals.jpg";
import seafood from "../../../../../images/seafood.jpg";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Representaci&oacute;n gr&aacute;fica de la cadena de
                    suministro
                </h1>
                <p>
                    Las empresas saben qui&eacute;nes son sus proveedores
                    directos y d&oacute;nde se encuentran. Sin embargo, en
                    muchos casos, las empresas se abastecen de contratistas o
                    agentes que no dan a conocer las f&aacute;bricas u otras
                    instalaciones de producci&oacute;n de las cuales{" "}
                    <em>ellos</em>, a su vez, se abastecen. Con frecuencia las
                    empresas tienen informaci&oacute;n sobre las f&aacute;bricas
                    y los establecimientos productores del primer orden en las
                    cadenas de suministro pero poseen informaci&oacute;n escasa
                    o nula sobre las pr&aacute;cticas de los proveedores de
                    segundo, tercer o dem&aacute;s &oacute;rdenes. Las empresas
                    deben poseer la mayor cantidad posible de informaci&oacute;n
                    sobre los proveedores en todos los niveles de la cadena de
                    suministro, incluso los productores de la materia prima.
                    Cuanto m&aacute;s integral sea la representaci&oacute;n
                    gr&aacute;fica que realiza la empresa de sus cadenas de
                    suministro, m&aacute;s precisamente podr&aacute; identificar
                    esos lugares en la cadena con el mayor riesgo de
                    explotaci&oacute;n laboral. Por ende, es importante
                    comunicarse con los equipos de abastecimiento o
                    gesti&oacute;n de la cadena de suministro de la empresa para
                    obtener datos sobre sus propias cadenas de suministro y, de
                    necesitarse m&aacute;s informaci&oacute;n, trabajar
                    estrechamente con ellos para complementar esos datos.
                </p>
                <p>
                    Si la empresa actualmente no tiene acceso a
                    informaci&oacute;n sobre los proveedores m&aacute;s
                    all&aacute; de los proveedores de los que se abastece
                    directamente, la mejor manera de obtener esta
                    informaci&oacute;n es trabajar con el departamento de
                    asesoramiento jur&iacute;dico u otra unidad pertinente de la
                    empresa para crear requisitos contractuales que rijan la
                    difusi&oacute;n de informaci&oacute;n integral sobre todos
                    los proveedores.
                </p>
                <p>
                    La &ldquo;representaci&oacute;n gr&aacute;fica&rdquo; no
                    solo indica qui&eacute;nes son los proveedores (en toda la
                    cadena de suministro), sino tambi&eacute;n d&oacute;nde se
                    encuentran. Esta informaci&oacute;n es esencial para la
                    evaluaci&oacute;n de riesgos e impacto en relaci&oacute;n
                    con los entornos jur&iacute;dico y normativo, entre otras
                    cosas. Este ejercicio puede incluir tambi&eacute;n
                    representaciones gr&aacute;ficas de la estacionalidad de la
                    producci&oacute;n o los ciclos de producci&oacute;n durante
                    el a&ntilde;o, dado que estos podr&iacute;an guardar
                    relaci&oacute;n con per&iacute;odos de mayor vulnerabilidad
                    a la explotaci&oacute;n laboral.&nbsp;
                </p>
                <p>
                    Los bienes producidos con productos b&aacute;sicos
                    agr&iacute;colas o minerales pueden ser especialmente
                    dif&iacute;ciles de rastrear, dado que la materia prima se
                    cosecha o extrae en zonas geogr&aacute;ficas sumamente
                    dispersas y se agrega o combina al comienzo de la cadena de
                    suministro. Algunas empresas y coaliciones de industrias han
                    probado programas de &ldquo;trazabilidad&rdquo; para hacer
                    un seguimiento retrospectivo de determinados productos
                    b&aacute;sicos desde el producto terminado hasta al punto de
                    origen pasando por toda la cadena de suministro.
                </p>
                <p>
                    A fin de evitar confusiones, la representaci&oacute;n
                    gr&aacute;fica de las cadenas de suministro no implica
                    necesariamente que la empresa sea responsable de todas las
                    consecuencias y riesgos de cada entidad en la cadena.
                    Conforme se afirma en los{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                        title="Principios Rectores sobre las Empresas y los Derechos Humanos de las Naciones Unidas"
                    >
                        Principios rectores sobre las empresas y los derechos
                        humanos
                    </a>
                    , &ldquo;para las empresas que cuenten con numerosas
                    entidades en sus cadenas de valor puede resultar demasiado
                    dif&iacute;cil proceder con la debida diligencia en materia
                    de derechos humanos a nivel de cada entidad. En tal caso,
                    las empresas deben identificar las &aacute;reas generales
                    que presenten mayor riesgo de consecuencias negativas sobre
                    los derechos humanos, ya sea debido al contexto operativo de
                    ciertos proveedores o clientes, a las operaciones, los
                    productos o los servicios de que se trate, o a otras
                    consideraciones pertinentes, y dar prioridad a la debida
                    diligencia en materia de derechos humanos en esas
                    &aacute;reas&rdquo;. Este proceso de fijar prioridades se
                    aborda a continuaci&oacute;n.
                </p>
                <p>A continuación, siguen tres ejemplos de representaciones gráficas de la cadena de suministro:</p>

                <div id="cocoa_chains">
                    <Accordion id="cocoa-chains-acc">
                        <Accordion.Section id="cocoa-description">
                            <Accordion.Title>
                                Cadenas de suministro del cacao
                            </Accordion.Title>
                            <Accordion.Panel>
                                <img
                                  src={cocoaSupplyChains}
                                  alt="Cadenas de suministro del cacao"
                                  longdesc="#cocoa_chains"
                              />
                              <p className="small-text">
                                  Fuente:{" "}
                                  <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href="http://www.crea.org/"
                                  >
                                      Centro para la Reflexi&oacute;n, la Educaci&oacute;n y
                                      la Acci&oacute;n (CREA).
                                  </a>
                              </p>
                                En este gráfico se ilustran los diferentes actores que intervienen en la cadena de suministro del cacao: agricultores,
                                acopiadores o transportadores, procesadores, exportadores, el mercado mundial, fabricantes (que también pueden dedicarse
                                al cultivo de otros granos), clientes (que incluyen los comercios de venta al por menor, restaurantes y pequeñas empresas
                                que compran productos para vender) y consumidores finales. Además, el gráfico contiene ejemplos de entidades y actividades
                                que entran en esas categorías de cadenas de suministro en dos países: Côte d’Ivoire y Ghana. En Côte d’Ivoire, los agricultores
                                pueden ser pequeños establecimientos agrícolas familiares (&gd;750.000), operaciones independientes o cooperativas (en las que el cacao representa &ld;20% de los cultivos).
                                Entre los acopiadores y transportadores hay operadores privados y además pisteurs (intermediarios que compran directamente de los
                                establecimientos agrícolas) y traitants (compradores de cacao que compran el producto a los pisteurs). Los procesadores y exportadores
                                agrupan a varios participantes, incluidas las empresas internacionales. Comprende a los que producen bienes semiacabados. En Ghana,
                                los agricultores pueden ser pequeños establecimientos agrícolas familiares (&gd;600.000), operaciones independientes o cooperativas
                                (en las que el cacao representa &ld;10% de los cultivos). La compra inicial de los granos de cacao está a cargo de compradores matriculados (LBC).
                                La Junta del Cacao de Ghana* (COCOBOD) y las organizaciones afiliadas garantizan que las ventas satisfagan los requisitos de calidad. En Ghana,
                                entre los procesadores y exportadores se encuentran COCOBOD y las empresas internacionales. Comprende a los que producen bienes semiacabados. En el
                                gráfico se ve que los últimos pasos del proceso son similares en ambos países. Los granos y los productos provenientes de pequeños establecimientos
                                agrícolas familiares llegan al mercado mundial por medio de los fabricantes, que toman la materia prima y la transforman en un producto final que venden
                                a los consumidores (por ejemplo, convierten los granos de cacao en barras de chocolate). Las tiendas de venta al por menor, los restaurantes y las pequeñas
                                empresas son el punto inicial de venta y el punto de servicio al cliente. El consumidor secundario es el consumidor final; por ejemplo, una persona que
                                compra una barra de chocolate en una tienda (punto de venta) o una porción de pastel de chocolate en un restaurante (punto de servicio).
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
                <Accordion id="electronic-supply-chain">
                        <Accordion.Section id="electronic-supply-chain-description">
                        <Accordion.Title>
                            Cadenas de suministro del cacao
                        </Accordion.Title>
                        <Accordion.Panel>
                        <img
                              src={electronics}
                              alt="Electronics Supply Chains"
                              longdesc="#electronics_chains"
                              />
                        <img
                              src={minerals}
                              alt="DRC Minerals Supply Chains"
                              longdesc="#minerals_chains"
                              />
                            <p>Los gráficos precedentes ilustran los pasos generales que se siguen en una cadena de suministro en la industria de artículos de electrónica,
                            que adquiere muchos metales de tierras raras de la República Democrática del Congo (RDC), situada en África Central. Si bien el diseño y la
                            fabricación de los artículos de electrónica suelen realizarse cerca de donde se encuentran los consumidores finales, como en los Estados Unidos,
                            la extracción de materiales suele comenzar prácticamente al otro lado del mundo, en África Central.  Estos materiales extraídos posteriormente se
                            transportan por tierra a puertos ubicados en la costa de África Oriental. Luego, los materiales se transportan por barco a fundiciones de Asia
                            Oriental y Sudoriental, donde se los refina y convierte en componentes aptos para el uso en fábricas que se encuentran tanto en la región como en Europa y América del Norte.</p>
                            </Accordion.Panel>
                    </Accordion.Section>
                </Accordion>
                <div>
                    <Accordion id="generic-import-acc">
                        <Accordion.Section id="generic-import-description">
                            <Accordion.Title>
                                Cadena de suministro de pescados y mariscos

                            </Accordion.Title>
                            <Accordion.Panel>
                                <img
                                  src={seafood}
                                  alt="Seafood Supply Chains"
                                  longdesc="#seafood_chains"
                                  />
                                <p>
                                   La estructura de cada cadena de suministro del sector de pescados y mariscos sigue una trayectoria similar desde
                                   el pescador hasta el comprador; sin embargo, suele haber bastantes variaciones en el proceso. Además, el perfil
                                   del consumidor final en la cadena de suministro de pescados y mariscos puede ser muy variado y abarca tanto puntos
                                   de servicio (como restaurantes, hoteles, hospitales y escuelas) como puntos de venta (comercios al por menor y otros).
                                   Con respecto a los pescados y mariscos de captura silvestre, hay flotas de buques pesqueros que pueden coordinar con un
                                   “buque nodriza” para consolidar la captura diaria. Al entregar la carga de captura en tierra, los pescados y mariscos se
                                   destinan o bien a una planta procesadora primaria o bien al mercado abierto. La planta procesadora recibe los pescados y
                                   mariscos y los procesa para venderlos a comercios minoristas o a distribuidores del sector de alimentos, que los hacen
                                   llegar al consumidor final.

                                </p>
                                <p>Los pescados y mariscos que se venden en estos mercados más formales pueden sufrir varios cambios a medida que pasan por
                                una serie de actores intermedios, cada uno de los cuales desempeña una función en el proceso de acercar el producto al punto de venta final.
                                </p>
                                <p>
                                Fuente:
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.resolve.ngo/site-eiscm/default.htm?RD=1"
                                >
                                https://www.resolve.ngo/site-eiscm/default.htm?RD=1
                                </a>.
                                </p>
                            </Accordion.Panel>
                        </Accordion.Section>
                    </Accordion>
                </div>
            </div>
        </StaticData>
    );
};

export default es;
