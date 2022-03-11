import React from "react";
import StaticData from "../../../../../../components/StaticData";
import OwnWords from "../../../../../../components/OwnWords";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";


const fr = () => {
    return (
        <StaticData>
            <div>
                <h1>
                   Travailleurs migrants
                </h1>
                    <p>
                        Les migrants sont une catégorie de travailleurs particulièrement vulnérables au travail forcé.
                        Dans l’économie mondiale, des millions de travailleurs quittent leurs foyers pour travailler ailleurs,
                        dans leur propre pays ou ailleurs dans le monde. De nombreux migrants à la recherche d&apos;un emploi
                        font confiance à des recruteurs ou à des courtiers pour organiser les transports et les placer dans des
                        emplois, mais découvrent, trop tard, que leurs salaires et les modalités de leur emploi ne correspondent
                        pas aux promesses des courtiers. Certains migrants contractent des dettes importantes au cours du
                        processus de recrutement et tombent dans le piège de la servitude lorsqu&apos;ils ne peuvent rembourser
                        ces dettes. Les cycles de servitude pour dette peuvent également se produire lorsque les employeurs opèrent
                        des retenues sur le salaire des employés pour le logement, la nourriture et d’autres frais, leur laissant
                        peu ou pas de salaire net. De nombreux travailleurs migrants sont contraints de signer des contrats dans une
                        langue qu&apos;ils ne savent pas lire ; d&apos;autres ont une relation d&apos;emploi informelle dénuée de tout
                        contrat. Certains doivent remettre leurs papiers d&apos;identité à leurs employeurs, ce qui leur enlève toute
                        possibilité de s&apos;échapper de situations d’abus ou d’exploitation.
                    </p>
                    <p>
                    Si vos fournisseurs ont recours à des courtiers de main-d&apos;œuvre pour recruter et placer des travailleurs migrants,
                    vous pouvez courir un risque que le travail forcé et la traite existe dans vos chaînes d&apos;approvisionnement.
                    Les ressources recommandées sur cette question comprennent les{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ilo.org/global/topics/fair-recruitment/WCMS_536755/lang--en/index.htm"
                    >
                    Principes généraux et directives opérationnelles
                    concernant le recrutement équitable
                    </a>
                    {" "}de l’OIT, qui informe les travaux de l’OIT, des corps législatifs au niveau
                    national et d&apos;autres partenaires sociaux dans le cadre de la promotion et de la garantie d’un recrutement
                    équitable et{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.iccr.org/sites/default/files/iccrsbestpracticesinethicalrecruitment05.01.17.pdf"
                    >
                    les Orientations en matière de bonnes pratiques sur le recrutement éthique des travailleurs migrants
                    </a>
                    {" "}[en anglais] du{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="www.iccr.org/"
                    >
                    Centre interconfessionnel sur la responsabilité des entreprises (ICCR)
                    </a>.
                    </p>
                    <ExampleInAction id="clt">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>Example in action: Placeholder*</strong>
                    </h2>

                    <p>
                        Placeholder
                    </p>
                </ExampleInAction>

                    <ul>
                        <li>
                            <em>
                                <strong>Test 1</strong>
                            </em>
                        </li>
                        <li>
                            <strong>
                                <em>Test 2</em>
                            </strong>
                        </li>
                    </ul>
                    <OwnWords>
                                        <h2>
                                            <OwnWords.Icon alt="Feedback"/>{" "}
                                            <strong>Dans leurs propres mots</strong>&nbsp;{": "}
                                        </h2>
                                        <p>
                                            « Imaginez devoir payer 7 000 dollars É.-U. pour obtenir un travail. C&apos;est ce que facturent certains courtiers
                                            de main-d&apos;œuvre à des travailleurs migrants dans des pays d’Asie pour leur trouver un emploi dans une usine de
                                            Taïwan, où ce genre de travail ne court actuellement pas les rues. C’est là une pratique considérée comme acceptable
                                            et faisant partie des affaires, même si ces courtiers demandent souvent des frais supérieurs aux limites légales.
                                            Le transport, les visas de travail et d’autres éléments essentiels sont inclus. Mais payer une telle somme pour
                                            un travail d’usine est presque impossible pour des ouvriers qui ont déjà du mal à gagner leur vie. »

                                        </p>
                                        <p>
                                        Source : Patagonia,{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.patagonia.com/stories/the-unacceptably-high-cost-of-labor-a-new-migrant-worker-standard-from-patagonia/story-17743.html"
                                        >
                                        Comment un examen approfondi de notre chaîne d&apos;approvisionnement a conduit à une nouvelle norme
                                        pour les travailleurs migrants
                                        </a>
                                        {" "}[en anglais], 2015 disponible [en anglais] sur{" "}
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://www.patagonia.com/stories/the-unacceptably-high-cost-of-labor-a-new-migrant-worker-standard-from-patagonia/story-17743.html"
                                        >
                                        https://www.patagonia.com/stories/the-unacceptably-high-cost-of-labor-a-new-migrant-worker-standard-from-patagonia/story-17743.html
                                        </a>.
                                        </p>
                                    </OwnWords>
            </div>
        </StaticData>
    );
};

export default fr;
