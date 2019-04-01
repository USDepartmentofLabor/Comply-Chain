import React from "react";
import OwnWords from "../../../../../components/OwnWords";

const es = () => {
    return (
        <div>
            <br />
            <OwnWords>
                <h2>
                    <OwnWords.Icon />
                    <strong>En sus propias palabras</strong>
                </h2>
                <p>
                    La responsabilidad de respetar los derechos humanos exige
                    que las empresas cuenten con pol&iacute;ticas y procesos
                    para saber y hacer saber que respetan los derechos humanos
                    en la pr&aacute;ctica. Hacer saber implica comunicar,
                    ofrecer transparencia y rendir cuentas a las personas o
                    grupos que puedan verse afectados y a otros interesados,
                    incluidos los inversores.
                </p>
                <p>
                    La comunicaci&oacute;n puede adoptar diversas formas, como
                    reuniones personales, di&aacute;logos en l&iacute;nea,
                    consultas con los afectados e informes p&uacute;blicos
                    oficiales. Tambi&eacute;n la informaci&oacute;n oficial
                    est&aacute; evolucionando, desde los tradicionales informes
                    anuales y los informes de responsabilidad/sostenibilidad
                    empresarial hasta la inclusi&oacute;n de actualizaciones en
                    l&iacute;nea e informes integrados financieros y no
                    financieros.
                </p>
                <p>
                    <em>
                        Fuente:{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                            title="Principios Rectores sobre las Empresas y los Derechos Humanos de las Naciones Unidas"
                        >
                            <i>
                                Principios Rectores sobre las Empresas y los
                                Derechos Humanos de las Naciones Unidas
                            </i>
                        </a>
                        , 2011.
                    </em>
                </p>
            </OwnWords>
            <br />
        </div>
    );
};

export default es;
