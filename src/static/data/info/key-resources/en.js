import React from "react";
import { Link } from "react-router-dom";
import BorderSeparator from "../../../../common/BorderSeparator";
import Icons from "../../../../common/Icons";
import { EiaList } from "./shared";
import SweatAndToilLink from "../../../../common/SweatAndToilLink";

const en = () => {
    return (
        <div>
            <h2>More Apps Like This:</h2>
            <p>U.S. Department of Labor</p>
            <p>
                <em>
                    Sweat &amp; Toil: Child Labor, Forced Labor, and Human
                    Trafficking Around the World
                </em>
            </p>
            <SweatAndToilLink />
            <br />
            <BorderSeparator />
            <h2>
                <strong>Key Tools: </strong>
            </h2>
            <p>
                United Nations, Office of the High Commissioner on Human Rights
            </p>
            <p>
                <em>UN Guiding Principles on Business and Human Rights</em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                    title="UN Guiding Principles on Business and Human Rights"
                >
                    http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf
                </a>
            </p>
            <BorderSeparator />
            <p>Organization for Economic Co-operation and Development</p>
            <p>
                <em>Guidelines for Multinational Enterprises</em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.oecd.org/corporate/mne/"
                    title="Guidelines for Multinational Enterprises"
                >
                    http://www.oecd.org/corporate/mne/
                </a>
            </p>
            <BorderSeparator />
            <p>International Labor Organization</p>
            <p>
                <em>
                    ILO Helpdesk for Business on International Labour Standards
                </em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/empent/areas/business-helpdesk/lang--en/index.htm"
                    title="ILO Helpdesk for Business on International Labour Standards"
                >
                    http://www.ilo.org/empent/areas/business-helpdesk/lang--en/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>International Labor Organization</p>
            <p>
                <em>
                    Combating Forced Labor: A Handbook for Employers and
                    Business
                </em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm"
                    title=">Combating Forced Labor: A Handbook for Employers and Business"
                >
                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>International Labor Organization</p>
            <p>
                <em>
                    Checkpoints for Companies &ndash; Eliminating and Preventing
                    Forced Labour
                </em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm"
                    title="Checkpoints for Companies &ndash; Eliminating and Preventing Forced Labour"
                >
                    http://www.ilo.org/global/publications/WCMS_456961/lang--en/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>International Labor Organization</p>
            <p>
                <em>ILO-IOE Child Labour Guidance Tool for Business</em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/ipec/Informationresources/WCMS_IPEC_PUB_27555/lang--en/index.htm"
                    title="ILO-IOE Child Labour Guidance Tool for Business"
                >
                    http://www.ilo.org/ipec/Informationresources/WCMS_IPEC_PUB_27555/lang--en/index.htm
                </a>
            </p>
            <BorderSeparator />
            <p>Consumer Goods Forum</p>
            <p>
                <em>
                    Business Actions Against Forced Labour &ndash; Success
                    Stories
                </em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.theconsumergoodsforum.com/strategic-focus/social-sustainability/forced-labour-case-studies"
                    title="Business Actions Against Forced Labour &ndash; Success Stories"
                >
                    http://www.theconsumergoodsforum.com/strategic-focus/social-sustainability/forced-labour-case-studies
                </a>
            </p>
            <BorderSeparator />
            <p>Verit&eacute;</p>
            <p>
                <em>Responsible Sourcing Tool</em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.responsiblesourcingtool.org/"
                    title="Responsible Sourcing Tool"
                >
                    http://www.responsiblesourcingtool.org/
                </a>
            </p>
            <BorderSeparator />
            <p>Verit&eacute;</p>
            <p>
                <em>Anti-Human Trafficking Business Authentication Criteria</em>
            </p>
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf"
                    title="Anti-Human Trafficking Business Authentication Criteria"
                >
                    http://responsiblesourcingtool.org/download/reports/Verite_BusinessAuthenticationCriteria_r1.pdf
                </a>
            </p>
            <BorderSeparator />
            <h2>
                <strong>Examples in Action:</strong>
            </h2>
            <EiaList id="eia-list">
                <li>
                    <Link to="/basics">
                        Better Work Program in the Garment Industry
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/basics">
                        Electronics Industry Citizenship Coalition (EICC) Code
                        of Conduct &ndash; Management Systems
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/1/topic/3#engagement_gov_brazil"
                        id="engagement_gov_brazil"
                    >
                        Engagement with Government: Brazil&rsquo;s &ldquo;Dirty
                        List&rdquo; and Institute of the National Pact for the
                        Eradication of Slave Labor
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/1/topic/4#rsn" id="rsn">
                        Responsible Sourcing Network
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link
                        to="/steps/1/topic/4#res_min_trade"
                        id="res_min_trade"
                    >
                        Public-Private Alliance for Responsible Minerals Trade
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/1/topic/4#sug_phil" id="sug_phil">
                        Multi-stakeholder Efforts to Eliminate Child Labor in
                        the Sugarcane Sector in the Philippines
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/1/topic/5#eclt" id="eclt">
                        Eliminating Child Labor in Tobacco-Growing (ECLT)
                        Foundation
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/1/topic/5#clt" id="clt">
                        Child Labor Platform
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/1/topic/5#gbn" id="gbn">
                        ILO&rsquo;s Global Business Network on Forced Labor and
                        Human Trafficking
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/1/topic/6#goodweave" id="goodweave">
                        GoodWeave
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/5#med_rep" id="med_rep">
                        The Important Role of Media Reporting
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/5#fish" id="fish">
                        Fishing and Seafood
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/6#leber" id="leber">
                        Leber Jeweler: The Jewelers&rsquo; Burma Relief Project
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/6#Isidro" id="Isidro">
                        Isidro Le&oacute;n-York
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/6#lco" id="lco">
                        League Collegiate Outfitters: Creating Opportunities for
                        Disadvantaged Youth in El Salvador
                        <Icons.ChevronRight />
                    </Link>
                </li>

                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/6#gap" id="gap">
                        Gap Inc.&rsquo;s P.A.C.E Program
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link
                        to="/steps/2/topic/7#Conflict_Free"
                        id="Conflict_Free"
                    >
                        Conflict-Free Sourcing Initiative
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/2/topic/7#mica" id="mica">
                        L&rsquo;Or&eacute;al and Responsible Mica Sourcing
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/3/topic/3#rst1" id="rst1">
                        Responsible Sourcing Tool 1, Sample Code of Conduct
                        Provisions
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/3/topic/4#patagonia" id="patagonia">
                        Patagonia&rsquo;s Migrant Worker Standards
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/3/topic/4#leadership" id="leadership">
                        Leadership Group for Responsible Recruitment
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/3/topic/5#fair_labor" id="fair_labor">
                        Fair Labor Association Code Revision Process
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/4/topic/4#cocoa" id="cocoa">
                        The International Chocolate and Cocoa Industry &ndash;
                        World Cocoa Foundation&rsquo;s CocoaAction
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link
                        to="/steps/5/topic/2#better_work_assessment"
                        id="better_work_assessment"
                    >
                        Better Work Assessment Teams
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/3#rst1a" id="rst1a">
                        Responsible Sourcing Tool 1A, Sample Benchmarks of Good
                        Practice in Recruitment and Employment
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/4#prereg" id="prereg">
                        Pre-Registration Processes
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/5/topic/8#cambodia" id="cambodia">
                        Community Based Child Labor Monitoring in Cambodia
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/6/topic/1#turkey" id="turkey">
                        Collaboration to Address Seasonal Migrant Child Labor in
                        Turkey&rsquo;s Hazelnut Harvest
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/6/topic/2#better_work" id="better_work">
                        The Better Work Remediation Process: Performance
                        Improvement Consultative Committees (PICC)
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/1#fla" id="fla">
                        The Fair Labor Association&rsquo;s (FLA) Accreditation
                        Program for Independent External Monitors
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />
                <li>
                    <Link to="/steps/7/topic/1#bonsucro" id="bonsucro">
                        The Bonsucro Accreditation Model
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/7/topic/1#sai_model" id="sai_model">
                        Social Accountability International Model
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/7/topic/3#bwi_eval" id="bwi_eval">
                        Better Work Impact Evaluation
                        <Icons.ChevronRight />
                    </Link>
                </li>
                <BorderSeparator />

                <li>
                    <Link to="/steps/8/topic/3#nike" id="nike">
                        Nike: Reporting on Remediation
                        <Icons.ChevronRight />
                    </Link>
                </li>
            </EiaList>
        </div>
    );
};

export default en;
