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
            <div>
                <h1>Risk and Impact Information Gathering</h1>
                <p>Various forms of human rights-focused impact and risk assessments are becoming increasingly common, and comprehensive tools are available to walk companies through the process. These include the <a href="https://www.ihrb.org/"> Institute for Human Rights and Business </a> and <a href="http://www.ifc.org/wps/wcm/connect/corp_ext_content/ifc_external_corporate_site/home"> International Finance Corporation </a> &rsquo;s <a href="https://www.unglobalcompact.org/library/25"> Guide to Human Rights Impact Assessment and Management </a> and <a href="https://www.bsr.org/en/"> Business for Social Responsibility&rsquo;s </a> <a href="https://www.bsr.org/reports/BSR_Human_Rights_Impact_Assessments.pdf"> Conducting an Effective Human Rights Impact Assessment: Guidelines, Steps, and Examples </a> .</p>
                <p>An early step in your risk and impact assessment should be to examine the various products that you market and sell to identify those that are more likely to be produced by child or forced labor. A useful resource for this is the Department of Labor&rsquo;s <a href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods/"> <em> List of Goods Produced by Child Labor or Forced Labor </em> </a> . Like this app, this regularly updated ILAB publication was mandated by the <a href="https://www.congress.gov/109/plaws/publ164/PLAW-109publ164.pdf"> Trafficking Victims Protection Reauthorization Act of 2005 (TVPRA) </a> . ILAB also produces the <a href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-products"> <em> List of Products Produced by Forced or Indentured Child Labor </em> </a> , pursuant to Executive Order 13126. This list is intended to ensure that U.S. federal agencies do not procure goods made by forced or indentured child labor. Under procurement regulations, federal contractors who supply products on the list must certify to the contracting agency that they have made a good faith effort to determine whether forced or indentured child labor was used to produce the items supplied. The Department&rsquo;s <a href="http://www.dol.gov/agencies/ilab/resources/reports/child-labor/findings"> <em> Findings on the Worst Forms of Child Labor </em> </a> report, mandated by the <a href="https://www.dol.gov/sites/dolgov/files/ILAB/20000518TDA.pdf"> Trade and Development Act of 2000 (TDA) </a> , is a third resource that focuses on the efforts of certain U.S. trade beneficiary countries and territories to eliminate the worst forms of child labor through legislation, enforcement mechanisms, policies, and social programs. Information from all three ILAB reports is also available via the <a href="https://www.dol.gov/general/apps/ilab"> Sweat &amp; Toil app </a> . Like Comply Chain, this app is free and available for download from Apple&rsquo;s <a href="https://apps.apple.com/us/app/comply-chain/id1271454169"> App Store </a> and the <a href="https://play.google.com/store/apps/details?id=gov.dol.childlabor"> Google Play </a> store.</p>
                <p>Launched in 2021, ILAB&rsquo;s <a href="https://www.dol.gov/agencies/ilab/better-trade-tool"> Better Trade Tool </a> empowers users to advance efforts in supply chain transparency and strategic sourcing priorities. This innovative tool integrates ILAB&rsquo;s existing reporting with U.S. import for consumption trade data, including Harmonized Tariff Schedule codes. As a new data-driven initiative launched in 2021, the current version of the Better Trade Tool is available as a beta release. The Better Trade Tool is intended to serve as a resource for users interested in learning about labor exploitation risks in global supply chains and provides a search feature that enables users to select a specific country, good, type of labor exploitation, and year.</p>
                <p>The U.S. government, international organizations, NGOs, and others produce additional useful resources for initial information-gathering; see <a href="https://www.dol.gov/ilab/complychain/steps/2#resources"> Further Resources </a> for more information.</p>


                <ExampleInAction id="med_rep">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: The Important Role of Media
                            Reporting
                        </strong>
                    </h2>
                    <p>Respected media outlets have generated headlines with their reporting on child labor and debt bondage in the production of Mexican agricultural produce, brutal forced labor on fishing vessels throughout Southeast Asia, bonded labor in India&rsquo;s brick kilns, fraudulent recruitment practices in construction work in the Middle East, and child labor in mica mining, among many others. In many cases, journalists&rsquo; key sources are representatives of civil society organizations and workers who have long fought to bring these issues into the spotlight&mdash;often at great personal risk&mdash;and are now finding greater opportunities to do so.</p>
                    <p>Because of this research and reporting, we know more about indigenous families who migrate through Central America harvesting crops, including the elderly and very young children. We have a better understanding about the kinds of government laws and policies, such as those seen in some Gulf countries, that can perpetuate forced labor by leaving migrant workers vulnerable to exploitative practices such as passport confiscation by their employers, non-payment of wages, and contract substitution without the worker&rsquo;s consent.</p>
                    <p>We are learning about the deep linkages between forced labor and environmental destruction. In areas where goods are produced illegally or where law enforcement is weak, both people and the environment are at risk&mdash;as in gold mining, an industry with high levels of illicit production, known to contaminate drinking water and land with mercury and cyanide, and where child labor seems to proliferate. We have come to know the bleak stories behind the jubilance of mega-sporting events: stories of workers deceived and paid a pittance to construct awe-inspiring stadiums and toiling in sweatshops to make apparel and merchandise for these events. And we share in the collective abhorrence of the exploitation of fishermen at sea.</p>
                    <p>By shining a light on opaque tiers of supply chains to increase ethical recruitment and transparent sourcing, or by spurring action to ensure that grievance and remediation mechanisms exist to address labor violations, media coverage can play an important role in contributing to businesses&rsquo; due diligence efforts to prevent and eliminate human rights violations in their supply chains.</p>
                </ExampleInAction>

           </div>
        </StaticData>
    );
};

export default en;
