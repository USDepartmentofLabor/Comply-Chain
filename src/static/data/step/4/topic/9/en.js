import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";
import hrm from "../../../../../images/hrm.jpg";
import panos from "../../../../../images/panos.jpg";
import Accordion from "../../../../../../components/Accordion";

const en = () => {
    return (
        <StaticData>
            <h1>Key Information Related to Risk and Impact</h1>
            <div>
                <p>
                Following this initial research, the company should engage
                relevant stakeholders in gathering additional information
                about risks. The company should seek input from a range of
                groups, and put in place processes that allow for
                communication across language and other barriers.
            </p>
            <p>
                There may be situations where consultation with certain
                stakeholder groups is not possible, or where consultation
                did not yield all of the information you need. In these
                cases, experts from academic institutions, corporate social
                responsibility consultancies and NGOs can be engaged to
                assist with risk and impact assessment.
            </p>
            <p>What information are you looking for?</p> </div>
             <p>
                                Some companies take the approach of
                                &ldquo;outsourcing&rdquo; the information-gathering function
                                to an expert, such as a consulting firm, civil society group
                                or academic institution. For instance, in 2010, the NGO
                                Human Rights Watch* released a report documenting poor
                                working conditions&mdash;including child labor and forced
                                labor&mdash;on tobacco farms in Kazakhstan that supplied to
                                Philip Morris Kazakhstan* (PMK), a wholly owned subsidiary
                                of tobacco company Philip Morris International* (PMI). PMI
                                subsequently commissioned the NGO{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.verite.org/"
                                    title="Verit&eacute;"
                                >
                                    Verit&eacute;
                                </a>
                                * to conduct an onsite investigation of working conditions
                                on Kazakh tobacco farms and draft a{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.verite.org/wp-content/uploads/2016/11/Verite_Report_for_PMI_on_Kazakhstan-2_May_2011.pdf"
                                    title="recommendations report"
                                >
                                    recommendations report
                                </a>
                                . PMI has used the report to develop new policies and
                                practices. These include a comprehensive auditing system for
                                all tobacco farms in Kazakhstan, as well as partnerships
                                with local NGOs on children&rsquo;s camps, vocational
                                schools, community centers, schooling registration programs,
                                and farm owner education and training programs.&nbsp;
                            </p>
                            <img src={hrm} alt="Human rights Watch" />
                            <p className="small-text">
                                &copy;Marcus Bleasdale/Human Rights Watch
                            </p>
                            <p>
                                If you already have well-established relationships with
                                suppliers and are seeking to assess their existing risks,
                                audit reports done on these suppliers by other companies or
                                groups afford a very useful source of data. Obtaining them
                                may require joining a group, such as the{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.sedexglobal.com/"
                                    title="Supplier Ethical Data Exchange (SEDEX)"
                                >
                                    Supplier Ethical Data Exchange (SEDEX)
                                </a>{" "}
                                and{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.fairfactories.org/"
                                    title="Fair Factories Clearinghouse"
                                >
                                    Fair Factories Clearinghouse
                                </a>
                                , which provide a platform for sharing information on common
                                suppliers and collaborating on monitoring and remediation
                                efforts.&nbsp;
                            </p>
                            <p>
                                When audit reports are not available, there are other ways
                                to gather information on your current suppliers to determine
                                which ones to target for further compliance efforts.
                                Wherever a union exists, it may be a good source of
                                information on labor abuse risk factors. Where there is no
                                union, the supplier may have other grievance or complaint
                                mechanisms in place that could be a source of information.
                                Another option, of course, is to survey all of your
                                suppliers on the key risk factors listed above.
                            </p>
                            <h2>Checklist: Key "Landscape" Questions</h2>
                            <p>
                                <em>
                                    The following are key questions to answer when gathering
                                    information as part of the risk and impact assessment
                                    process.{" "}
                                </em>
                            </p>
                            <h3>Labor market:</h3>
                            <ul>
                                <li>
                                    <em>Is child labor a major problem in the country?</em>
                                </li>
                                <li>
                                    <em>Does it affect only certain sectors?</em>
                                </li>
                                <li>
                                    <em>
                                        Do children work mostly in formal or informal
                                        enterprises?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Is the major problem with workers under the legal
                                        age or with those over the legal age but undertaking
                                        hazardous work?
                                    </em>
                                </li>
                            </ul>
                            <h3>Legal:</h3>
                            <ul>
                                <li>
                                    <em>
                                        What national child labor laws exist that define
                                        permissible and non-permissible work for children?
                                        What are the provisions and definitions?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Has the country ratified the ILO&rsquo;s Minimum Age
                                        Convention (C. 138); and/or the Worst Forms of Child
                                        Labor Convention (C. 182)?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Has a list of what constitutes &ldquo;hazardous
                                        work&rdquo; been agreed upon by the social partners?
                                    </em>
                                </li>
                            </ul>
                            <h3>Organizations:</h3>
                            <ul>
                                <li>
                                    <em>
                                        Is the government active in enforcing laws? What
                                        ministries or agencies are active?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Is the education ministry an important player? How
                                        about local boards or councils?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Which local, national and international NGOs are
                                        active in your area in the field of child labor? Are
                                        there outside groups that are monitoring the issue,
                                        or others that can help enterprises and
                                        employers&rsquo; organizations remove children from
                                        work and help their parents increase income?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Are international bodies such as the ILO or UNICEF
                                        active in the country? The International
                                        Organization for Migration?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        What other business groups, including sector
                                        associations, are active in the country?{" "}
                                    </em>
                                </li>
                            </ul>
                            <h3>Buyers and consumers:</h3>
                            <ul>
                                <li>
                                    <em>
                                        Are the expectations of buyers and consumers more
                                        stringent than national laws?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Do the expectations of buyers vary by sector? Are
                                        textile buyers stricter than coffee buyers, for
                                        example?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Have producers complained about the multiplicity of
                                        demands from buyers?
                                    </em>
                                </li>
                                <li>
                                    <em>
                                        Have attempts been made to coordinate among buyers
                                        so that they agree on a common set of standards?
                                    </em>
                                </li>
                            </ul>
                            <p>
                                Adapted from International Labor Organization and
                                International Organization of Employers,{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/asia/publications/WCMS_117866/lang--ja/index.htm"
                                    title="The role of employers&rsquo; organizations in combating child labour, Guide 3"
                                >
                                    <em>
                                        The role of employers&rsquo; organizations in
                                        combating child labour, Guide 3
                                    </em>
                                </a>
                                , 2007.
                            </p>

        </StaticData>
    );
};

export default en;
