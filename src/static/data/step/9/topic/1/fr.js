import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";

const fr = () => {
    return (
        <StaticData>
            <div>
            <h1>Pourquoi effectuer un examen ind&eacute;pendant?</h1>
                <p>
                    Comme l&rsquo;indique la section intitul&eacute;e &Eacute;l&eacute;ments de base d'un syst&egrave;me de conformit&eacute; 
                    sociale, votre &eacute;quipe de conformit&eacute; sociale a fix&eacute; des buts, des objectifs et des cibles pour votre 
                    syst&egrave;me et &eacute;value p&eacute;riodiquement les r&eacute;alisations par rapport &agrave; ces cibles. Outre cet 
                    examen interne, vous devrez &eacute;galement mener un <strong>examen ind&eacute;pendant</strong> r&eacute;gulier qui comprendra une{" "}
                    <strong>v&eacute;rification ind&eacute;pendante</strong> et un <strong>contr&ocirc;le ind&eacute;pendant</strong> de l&rsquo;efficacit&eacute; de tous les 
                    &eacute;l&eacute;ments du programme de conformit&eacute; sociale. Remarque : Si, &agrave; la {" "}
                    <Link to="/steps/7">
                        cinqui&egrave;me &eacute;tape, Surveiller la conformit&eacute;
                    </Link>
                    , <em>une soci&eacute;t&eacute; a d&eacute;j&agrave; opt&eacute; pour une v&eacute;rification 
                    ind&eacute;pendante (audit), il n&rsquo;est pas n&eacute;cessaire de r&eacute;p&eacute;ter cette &eacute;tape ; cependant, 
                    il est tout de m&ecirc;me recommand&eacute; de proc&eacute;der &agrave; un contr&ocirc;le ind&eacute;pendant</em>. Un examen et 
                    une &eacute;valuation r&eacute;alis&eacute;s par une partie ind&eacute;pendante ext&eacute;rieure vous permettent 
                    d'identifier les domaines &agrave; am&eacute;liorer et offrent aux parties prenantes les informations souhait&eacute;es 
                    sur la mise en &#339;uvre et l'efficacit&eacute; de votre syst&egrave;me.
                </p>
                <ExampleInAction id="sai_model">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Exemple d&apos;action: Mod&egrave;le de Social Accountability International
                        </strong>
                    </h2>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/"
                            title="Social Accountability International (SAI)"
                        >
                            Social Accountability International (SAI)
                        </a>* 
                        est une organisation non gouvernementale internationale qui se centre sur les droits de l&rsquo;homme au travail. En 1997, 
                        dans le cadre d&rsquo;une initiative avec plusieurs parties prenantes, SAI a cr&eacute;&eacute; la{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.sa-intl.org/_data/global/files/SA8000Standard2014(3).pdf"
                            title="norme 8000 de responsabilit&eacute; sociale (SA8000)"
                        >
                            norme 8000 de responsabilit&eacute; sociale (SA8000)
                        </a>. 
                        SA8000 est une norme mondiale de certification sociale pour les usines et organisations qui, au fil des ans, s'est 
                        transform&eacute;e en un cadre inclusif qui aide les organisations &agrave; d&eacute;montrer une conformit&eacute; sociale 
                        de haute qualit&eacute; dans les cha&icirc;nes d'approvisionnement. Pour garantir l'ind&eacute;pendance des audits 
                        r&eacute;alis&eacute;s en vertu de sa norme SA8000, SAI a cr&eacute;&eacute;{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.saasaccreditation.org/"
                            title="Social Accountability Accreditation Services (SAAS)"
                        >
                            Social Accountability Accreditation Services (SAAS)
                        </a>
                        {" "}
                        en 1997. SAAS est par la suite devenue, en 2007, une organisation distincte &agrave; but non lucratif. SAAS est une 
                        agence qui accr&eacute;dite et surveille les organisations &agrave; titre de certificateurs de conformit&eacute; avec 
                        les normes sociales, y compris la SA8000, pour les conditions de travail &eacute;thiques.
                    </p>
                </ExampleInAction>
            </div>
        </StaticData>
    );
};

export default fr;
