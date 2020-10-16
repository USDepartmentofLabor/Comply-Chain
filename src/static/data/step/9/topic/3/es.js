import React from "react";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const es = () => {
    return (
        <StaticData>
            <div>
                <h1>Verificaci&oacute;n independiente</h1>
                <p>
                La verificaci&oacute;n independiente realizada por un tercero consta de una evaluaci&oacute;n 
                de todo el sistema de cumplimiento social de la empresa a fin de determinar si se est&aacute; 
                aplicando de manera adecuada y cabal. Esta verificaci&oacute;n debe realizarse como m&iacute;nimo 
                una vez al a&ntilde;o.
                </p>
                <p>
                Los verificadores deben ser organismos de certificaci&oacute;n acreditados que se ajusten a las 
                normas ISO/IEC 17021, a la Gu&iacute;a 65 de la ISO/IEC o a otros sistemas pertinentes. La norma 
                ISO/IEC 17021 contiene principios y requisitos para la competencia, coherencia e imparcialidad de 
                una auditor&iacute;a y la certificaci&oacute;n de sistemas de gesti&oacute;n de todo tipo y para 
                los organismos que realizan estas actividades. La Gu&iacute;a 65 de la ISO/IEC contiene los 
                requisitos generales que todo tercero a cargo de un sistema de certificaci&oacute;n de productos 
                o servicios debe reunir a fin de ser reconocido como competente y fiable.
                </p>
                <p>
                La verificaci&oacute;n independiente debe incluir una consulta con las partes interesadas 
                adecuadas, incluidos los sindicatos si los hay. Los verificadores deben realizar auditor&iacute;as 
                de observaci&oacute;n, que son aquellas en las que un verificador primero debe acompa&ntilde;ar 
                y observar las auditor&iacute;as que realizan los auditores actuales de la empresa (internos, 
                externos o independientes) y luego evaluar los datos de la auditor&iacute;a para confirmar que 
                los sistemas de datos que utiliza la empresa son fiables. Las auditor&iacute;as de observaci&oacute;n 
                anunciadas son importantes cuando hace falta tener acceso a personal espec&iacute;fico o a la 
                documentaci&oacute;n, mientras que las auditor&iacute;as de observaci&oacute;n no anunciadas 
                tambi&eacute;n pueden ser &uacute;tiles para verificar que se est&eacute;n aplicando las 
                pol&iacute;ticas de la empresa de manera adecuada. La verificaci&oacute;n tambi&eacute;n debe 
                incluir un examen de las pol&iacute;ticas y los procedimientos de remediaci&oacute;n de la empresa, 
                as&iacute; como casos espec&iacute;ficos de remediaci&oacute;n a fin de analizar su eficacia.
                </p>
                <p>
                Los verificadores deben brindar a la empresa un informe donde se identifiquen los puntos 
                d&eacute;biles hallados en el sistema de la empresa y en la aplicaci&oacute;n de dicho sistema. 
                Adem&aacute;s, los verificadores pueden sugerir medidas de remediaci&oacute;n que la empresa 
                puede adoptar para abordar tales puntos d&eacute;biles.
                </p>
                <ExampleInAction id="ind-verify">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                        Ejemplo en acci&oacute;n: la b&uacute;squeda de la verificaci&oacute;n y de 
                        normas en la industria de la moda
                        </strong>
                    </h2>
                    <p>
                    No existe ninguna norma de verificaci&oacute;n independiente para t&eacute;rminos 
                    como &ldquo;sostenible&rdquo; y &ldquo;transparente&rdquo;; sin embargo, una serie 
                    de peque&ntilde;as empresas emergentes (startups) se est&aacute;n esmerando por 
                    suplir la demanda de los consumidores de tener informaci&oacute;n fiable sobre 
                    los esfuerzos que realizan las empresas por abordar la problem&aacute;tica de los 
                    abusos laborales en las cadenas de suministro, entre otros. Empresas como{" "}
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.shopwearwell.com/"
                            title="Wearwell"
                        >
                            Wearwell
                        </a>
                    ,* {" "}
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goodonyou.eco/"
                            title="GoodOnYou"
                        >
                            GoodOnYou
                        </a>
                    ,* y {" "}
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://compareethics.com/"
                            title="Compare Ethics"
                        >
                            Compare Ethics
                        </a>
                    
                    * analizan las reclamaciones a una empresa en los documentos de auditor&iacute;a 
                    y en los informes y las validan tras compararlas con la realidad, lo cual crea 
                    una plataforma para que los consumidores accedan a marcas que cumplen determinados 
                    est&aacute;ndares. Este modelo presenta desaf&iacute;os pero es reflejo del deseo 
                    que tienen los consumidores de desglosar las reclamaciones y verificarlas en el 
                    mercado de la ropa, que en el a&ntilde;o 2020 representaba US $1,5 billones.
                        
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default es;
