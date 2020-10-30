import React from "react";

import StaticData from "../../../../../../components/StaticData";

const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>Réputation de l'entreprise</h1>
                <p>
                    Selon des{" "}
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://csic.georgetown.edu/magazine/corporate-social-responsibility-matters-ignore-millennials-peril/"
                        >
                    recherches
                    </a>
                    , les consommateurs sont de plus en plus au fait des violations du droit du travail,
                    surtout dans les secteurs tels que l’habillement et la chaussure, les produits électroniques et l’agriculture,
                    surtout pour les produits du chocolat et du café. De plus, avec l&apos;explosion des médias sociaux, les
                    reportages exposant des cas de travail des enfants, de travail forcé ou d&apos;autres conditions de travail
                    dégradantes dans une chaîne d’alimentation pourront plus facilement toucher les consommateurs et nuire à la
                    réputation d&apos;une marque et avoir un effet négatif sur ses ventes ou sa cote en Bourse.
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
