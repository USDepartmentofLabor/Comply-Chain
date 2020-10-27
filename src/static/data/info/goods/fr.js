import React from "react";
import StaticData from "../../../../components/StaticData";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Rapport sur la liste des biens issus du travail des enfants ou du travail forc&eacute; des enfants
                </h1>
                <p>
                    L&rsquo;ILAB tient &agrave; jour une liste des biens et de leurs pays d&rsquo;origine dont il y a lieu 
                    de penser qu&rsquo;ils sont issus du travail des enfants ou du travail forc&eacute; des enfants en 
                    contravention des normes internationales, tel qu&rsquo;exig&eacute; par la Loi de r&eacute;autorisation 
                    de la protection des victimes de la traite (TVPRA) de 2005 et ses r&eacute;autorisations. Au 30 septembre 
                    2020, la Liste des biens issus du travail des enfants ou du travail forc&eacute; comprend plus de 150 biens 
                    provenant de 77 pays ou r&eacute;gions.
                </p>

                <p>
                    L&rsquo;ILAB tient cette liste &agrave; jour principalement pour sensibiliser le public au travail 
                    forc&eacute; et au travail des enfants dans le monde et pour encourager les efforts de lutte contre ces 
                    fl&eacute;aux ; elle n&rsquo;a pas pour vocation d&rsquo;&ecirc;tre punitive mais plut&ocirc;t de 
                    service de catalyseur pour une coordination et une collaboration plus strat&eacute;giques et 
                    concentr&eacute;es entre les parties prenantes qui s&rsquo;attaquent &agrave; ces probl&egrave;mes.
                </p>

                <p>
                    La publication de cette liste a d&eacute;bouch&eacute; sur de nouvelles opportunit&eacute;s de dialogue 
                    entre l&rsquo;ILAB et des gouvernements &eacute;trangers dans le but de lutter contre le travail forc&eacute; 
                    et des enfants. C&rsquo;est &eacute;galement une ressource pr&eacute;cieuse pour les soci&eacute;t&eacute;s, 
                    les chercheurs et les organisations de d&eacute;fense des droits qui souhaitent mener des analyses de risque 
                    et exercer leur diligence raisonnable concernant les droits du travail dans leurs cha&icirc;nes 
                    d&rsquo;approvisionnement.
                </p>

                <p>
                    Pour en savoir plus: 
                     
                
                    {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods"
                        title="List of Goods report"
                    >
                        https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods
                    </a>{" "}
                    [en anglais].
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
