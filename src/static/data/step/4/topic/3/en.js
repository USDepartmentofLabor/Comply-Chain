import React from "react";
import { Link } from "react-router-dom";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Assessing External Impacts and Risk Factors</h1>
                <p>
                    &ldquo;External&rdquo; impacts and risks encompass both
                    those linked to a company&rsquo;s operations, products or
                    services through business relationships, over which you can
                    and should exert influence, and risks of which you have less
                    control, such as arising from national laws or developments
                    in wider operating environments.&nbsp;
                </p>
                <p>
                    If a company is considering sourcing from a new country or
                    geographic area, you are probably already carrying out other
                    forms of risk assessment. Human rights/social compliance
                    risk assessment should be built into those processes. This
                    is addressed further in the next section,{" "}
                    <em>
                        <Link to="/steps/4/topic/5">Risk and Impact Information Gathering</Link>
                    </em>
                    . The assessment should involve identifying people or groups
                    who may be affected by your business activities and
                    projecting any adverse impacts that could occur. Such an assessment
                    should also factor in groups or individuals that may be acutely
                    vulnerable to exploitation, whether through life circumstances
                    (e.g., poverty or lack of education) or through legal and social discrimination.
                    In addition, an assessment should factor in individuals who may be hidden
                    from the public and are consequently unable to advocate for their rights such
                    as survivors of rape and sexual abuse, those living with HIV/AIDS, and undocumented workers.
                    At a
                    minimum, the assessment should involve desk research, field
                    research in the target country/community, and then a
                    baseline round of pre-sourcing audits to assess current
                    levels of compliance. More information on how to conduct
                    these types of audits is included in{" "}
                    <Link to="/steps/7">Step 5, Monitor Compliance</Link>.
                </p>
                <p>
                    If a company already has well-established supply chains in
                    which it has relatively stable business relationships, you
                    should assess the impacts of and risks associated with those
                    supply chain actors. This should be done first through a
                    supply chain mapping exercise, together with gathering
                    information on the suppliers most in need of oversight, desk
                    research, field research in the target areas, and a baseline
                    round of audits on those suppliers to assess their current
                    level of compliance. These baseline data allow you to
                    identify suppliers&rsquo; potential areas for improvement.
                    More information on how to conduct these types of audits is
                    included in{" "}
                    <Link to="/steps/7">Step 5, Monitor Compliance</Link>.
                </p>
            </div>
        </StaticData>
    );
};

export default en;
