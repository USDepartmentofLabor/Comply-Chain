import React from "react";
import StaticData from "../../../../components/StaticData";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    Liste des biens produits par le travail des enfants ou le travail forcé
                </h1>
                <p>
                    L&rsquo;ILAB tient &agrave; jour une liste des biens et de leurs pays d&rsquo;origine dont il y a lieu 
                    de penser qu&rsquo;ils sont issus du travail des enfants ou du travail forc&eacute; des enfants en 
                    contravention des normes internationales, tel qu&rsquo;exig&eacute; par la Loi de r&eacute;autorisation 
                    de la protection des victimes de la traite (TVPRA) de 2005 et ses r&eacute;autorisations ultérieures. Au 30 septembre 2020,
                    la Liste des biens produits par le travail des enfants ou du travail forcé comprend plus de 150 biens provenant de 77 pays ou régions.
                </p>

                <p>
                    L’ILAB tient cette liste à jour principalement pour sensibiliser le public au travail forcé et au travail des enfants dans le monde et
                    pour encourager les efforts de lutte contre ces fléaux ; elle n’a pas pour vocation d’être punitive mais plutôt de service de catalyseur
                    pour une coordination et une collaboration plus stratégiques et concentrées entre les parties prenantes qui s’attaquent à ces problèmes.
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
