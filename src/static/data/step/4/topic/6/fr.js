import React from "react";
import basicElements from "../../images/basic_elements.png";

const fr = () => {
    return (
        <div>
            <p>
                <strong>
                    &Eacute;l&eacute;ments de conception de base d&apos;un
                    m&eacute;canisme de r&eacute;clamation dans le cadre
                    d&apos;un projet
                </strong>
            </p>
            <img src={basicElements} alt="no alt text" />
            <p>
                Source&nbsp;: Soci&eacute;t&eacute; financi&egrave;re
                internationale.{" "}
                <em>
                    Good Practice Note: Addressing Grievances from
                    Project-Affected Communities: Guidance for Projects and
                    Companies on Designing Grievance Mechanisms.
                </em>{" "}
                Washington, D.C., 2009 ; disponible [en anglais] sur{" "}
                <a target="_blank" rel="noopener noreferrer" href="http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18">
                    http://www1.ifc.org/wps/wcm/connect/cbe7b18048855348ae6cfe6a6515bb18/IFC%2BGrievance%2BMechanisms.pdf?MOD=AJPERES&amp;CACHEID=cbe7b18048855348ae6cfe6a6515bb18
                </a>
                .
            </p>
            <p>
                <em>
                    *Remarque&nbsp;: Les r&eacute;f&eacute;rences &agrave; des
                    soci&eacute;t&eacute;s et entit&eacute;s non
                    gouvernementales sp&eacute;cifiques dans ce guide sont
                    &agrave; des fins d&rsquo;information uniquement afin de
                    d&eacute;montrer les bonnes pratiques reconnues &agrave;
                    l&rsquo;&eacute;chelle internationale, &agrave; la date de
                    lancement de l&rsquo;appli. Toute r&eacute;f&eacute;rence
                    &agrave; ces entit&eacute;s ne saurait constituer une
                    approbation officielle de ces derni&egrave;res, de leurs
                    produits ou de leurs services par le d&eacute;partement du
                    Travail des &Eacute;tats-Unis,{" "}
                </em>
                <em>
                    et leur inclusion dans cette appli ne saurait &ecirc;tre
                    interpr&eacute;t&eacute;e comme un examen exhaustif des
                    pratiques de ces entit&eacute;s dans tous les domaines
                </em>
                <em>.</em>
            </p>
        </div>
    );
};

export default fr;
