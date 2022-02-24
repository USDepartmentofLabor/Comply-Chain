import React from "react";

import StaticData from "../../../../../../components/StaticData";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>Conditionnalité des prêts</strong>
                </h1>
                <p>
                    Les entreprises qui reçoivent des prêts de la
                   {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dfc.gov/"
                    >
                        Société financière internationale de développement (DFC)
                    </a>{" "}
                    du gouvernement des États-Unis (créée en 2019 pour consolider les
                    fonctions de la Société de promotion des investissements à l’étranger – OPIC) ou de la{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ifc.org/wps/wcm/connect/Topics_Ext_Content/IFC_External_Corporate_Site/Sustainability-At-IFC/Policies-Standards/Performance-Standards"
                    >
                        Soci&eacute;t&eacute; financi&egrave;re internationale
                        (SFI)
                    </a>
                    , qui fait partie du groupe de la Banque mondiale, doivent
                    souscrire &agrave; des normes du travail et &agrave; des
                    normes environnementales pr&eacute;cises dans leurs
                    op&eacute;rations et leurs cha&icirc;nes
                    d&apos;approvisionnement, y compris les normes relatives au
                    travail des enfants et au travail forc&eacute;. Ces normes
                    exigent une diligence raisonnable pour identifier les
                    probl&egrave;mes et des efforts cibl&eacute;s pour y
                    rem&eacute;dier, ce qui est peut &ecirc;tre accompli par le
                    biais d&apos;un syst&egrave;me robuste de conformit&eacute;
                    sociale.
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
