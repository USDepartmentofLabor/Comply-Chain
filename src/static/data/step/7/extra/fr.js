import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../components/StaticData";
const fr = () => {
    return (
        <StaticData>
            <div>
                <p>
                    Comme l&rsquo;indique la section intitul&eacute;e
                    &Eacute;l&eacute;ments de base d&apos;un syst&egrave;me de
                    conformit&eacute; sociale, votre &eacute;quipe de
                    conformit&eacute; sociale a fix&eacute; des buts, des
                    objectifs et des cibles pour votre syst&egrave;me et
                    &eacute;value p&eacute;riodiquement les r&eacute;alisations
                    par rapport &agrave; ces cibles. Outre cet examen interne,
                    vous devrez &eacute;galement mener un{" "}
                    <strong>examen ind&eacute;pendant </strong>r&eacute;gulier
                    qui comprendra un{" "}
                    <strong>contr&ocirc;le ind&eacute;pendant</strong> et une{" "}
                    <strong>v&eacute;rification ind&eacute;pendante</strong> de
                    l&rsquo;efficacit&eacute; de tous les &eacute;l&eacute;ments
                    du programme de conformit&eacute; sociale.{" "}
                    <em>Remarque&nbsp;: Si, &agrave;</em>{" "}
                    <Link to="/steps/5">
                        la 5<sup>e</sup>&nbsp;&eacute;tape : surveiller la
                        conformit&eacute;
                    </Link>
                    ,{" "}
                    <em>
                        une soci&eacute;t&eacute; a d&eacute;j&agrave;
                        opt&eacute; pour un contr&ocirc;le
                        ind&eacute;pendant/audit, il n&rsquo;est pas
                        n&eacute;cessaire de r&eacute;p&eacute;ter cette
                        &eacute;tape&nbsp;; cependant, il est tout de m&ecirc;me
                        recommand&eacute; de proc&eacute;der &agrave; une
                        v&eacute;rification ind&eacute;pendante.{" "}
                    </em>
                    Un examen et une &eacute;valuation r&eacute;alis&eacute;s
                    par une partie ind&eacute;pendante ext&eacute;rieure vous
                    permettent d&apos;identifier les domaines &agrave;
                    am&eacute;liorer et offrent aux parties prenantes les
                    informations souhait&eacute;es sur la mise en &oelig;uvre et
                    l&apos;efficacit&eacute; de votre syst&egrave;me.
                </p>
            </div>
        </StaticData>
    );
};

export default fr;
