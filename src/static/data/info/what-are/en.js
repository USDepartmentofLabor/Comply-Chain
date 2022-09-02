import React from "react";
import Accordion from "../../../../components/Accordion";
import StaticData from "../../../../components/StaticData";
// import childBrick from "../../../images/child_brick.jpg";
// import unoDc from "../../../images/UNO_DC.png";
import usdol1 from "../../../images/usdol1.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>
                    <strong>What are Child Labor and Forced Labor?</strong>
                </h1>
                <p>
                    International standards on child labor and forced labor were developed by the {" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/global/about-the-ilo/lang--en/index.htm"
                        title="International Labor Organization"
                    >
                        International Labor Organization
                    </a>{" "}
                    (ILO), a specialized UN agency that brings together
                    governments, employers&rsquo;, and workers&rsquo;
                    representatives of&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/public/english/standards/relm/country.htm"
                        title="187 member states&nbsp;"
                    >
                        187 member states&nbsp;
                    </a>
                    to set international labor standards, develop policies, and devise programs to promote rights at work and decent work for all persons.
                </p>
                <Accordion  id="what-are-acc">
                    <Accordion.Section id="child-labor">
                        <Accordion.Title>Child Labor</Accordion.Title>
                        <Accordion.Panel>
                            <h3>Definitions</h3>
                            <p>
                                A <strong>child </strong> is a person under the
                                age of 18 years.
                            </p>
                            <p>
                                <strong>Child labor</strong> is work <em>below the minimum age</em> as established in national legislation (excluding permissible light work).  Child labor also includes the&nbsp;
                                <em>worst forms of child labor (WFCL)</em>.
                            </p>
                            <p>
                            <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                    title="ILO Convention 182"
                                >
                                    ILO Convention 182
                                </a>{" "}
                                requires countries to establish a minimum age for work no less than the age of compulsory schooling, and no less than 15 years. 
                                It allows less-developed countries to establish a minimum age of 14.
                            </p>
                            <p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                    title="ILO Convention 182"
                                >
                                    ILO Convention 182
                                </a>{" "}
                                defines the WFCL as:
                            </p>
                            <ol>
                                <li>
                                All forms of slavery or practices similar to slavery, such as the sale and trafficking of children, debt bondage and serfdom, and 
                                forced or compulsory labor, including forced or compulsory recruitment of children for use in armed conflict.
                                </li>
                                <li>
                                The use, procuring, or offering of a child for prostitution, the production of pornography, or for pornographic performances.
                                </li>
                                <li>
                                The use, procuring, or offering of a child for illicit activities, in particular for the production and trafficking of drugs as 
                                defined in the relevant international treaties.
                                </li>
                                <li>
                                Work which, by its nature or the circumstances in which it is carried out, is likely to harm the health, safety, or morals of 
                                children (referred to as &ldquo;hazardous work&ldquo;).
                                </li>
                            </ol>
                            <p>
                                According to ILO Convention 182, hazardous work “shall be determined by national laws or regulations or by the competent authority, 
                                after consultation with the organizations of employers and workers concerned, taking into consideration relevant international 
                                standards...” (Article 4). As this suggests, forms of work identified as “hazardous” for children may vary from country to 
                                country.{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R190"
                                    title="ILO Recommendation No. 190"
                                >
                                    ILO Recommendation No. 190
                                </a>
                                , which accompanies ILO Convention 182, gives additional guidance on identifying “hazardous work.” ILO Recommendation No. 190 states 
                                in Section II, Paragraph 3 that “[i]n determining the types of work referred to under Article 3(d) of the Convention [ILO Convention 182], 
                                and in identifying where they exist, consideration should be given, <em>inter alia to</em>:
                            </p>
                            <ol>
                                <li>
                                    work which exposes children to physical, psychological, or sexual abuse;
                                </li>
                                <li>
                                    work underground, under water, at dangerous heights, or in confined spaces;
                                </li>
                                <li>
                                    work with dangerous machinery, equipment and tools, or which involves the manual handling or transport of heavy loads;
                                </li>
                                <li>
                                    work in an unhealthy environment which may, for example, expose children to hazardous substances, agents or processes, or to 
                                    temperatures, noise levels, or vibrations damaging to their health;
                                </li>
                                <li>
                                work under particularly difficult conditions such as work for long hours or during the night or work where the child is 
                                unreasonably confined to the premises of the employer.”
                                </li>
                            </ol>
                            {/* <img
                                id="img-browser"
                                className="small-img"
                                src={childBrick}
                                alt="Girl with bricks"
                            />
                            <p className="small-text">M. Crozet/ILO</p> */}
                            <p>
                                Child labor spans nearly every sector and kind of work. Children mine gold in the Democratic Republic of the Congo, work in 
                                footwear and textile factories in Bangladesh, and harvest blueberries in Argentina.
                            </p>
                            <p>
                                It is important to recognize that not all work performed by children is exploitative child labor. Children of legal working age 
                                who perform work that does not hinder their mental, physical, or emotional development are “working children” under international 
                                standards and can be an asset to their family&rdquo;s welfare and their nation&rdquo;s economic development. Such work can include performing 
                                household chores in their own homes, assisting parents in a family business outside of school hours, and working in non-hazardous 
                                activities after school or during vacations to earn extra income.
                            </p>
                            <p>
                                <em>Note: </em>
                                <em>
                                    The standards on child labor and forced labor discussed in this app are international standards and should not be interpreted as 
                                    U.S. law.
                                </em>
                            </p>
                            <p />
                            <h3>Drivers of Child Labor</h3>
                            <p>
                                Children enter the labor force due to both supply factors and industry demand for cheap, unskilled labor, among other factors. Poverty is the most 
                                salient source of pressure leading to the supply of child labor. Production processes that require an abundance of unskilled labor or that require 
                                certain physical attributes&mdash;small stature, agility, etc.&mdash;can also create demand for child labor. In addition, price pressures encourage suppliers, 
                                especially at points upstream in the supply chain, to find the cheapest labor. Children may be the only workers willing to work for these wages. 
                                Alternatively, adults may find that these wage levels do not allow them to meet basic needs, and they must put their children to work to supplement 
                                family income. These fundamental supply and demand factors are often reinforced by factors such as a lack of adequate access to education, 
                                inadequate employment potential for those who do receive education, exclusionary social attitudes based on caste or ethnicity, gender, and cultural 
                                attitudes about work and education. Moreover, informal work drives child labor, as does a lack of access to or weakness of social protection systems 
                                that leaves adults vulnerable to economic shocks and poverty and unable to provide for their families.
                            </p>
                            <h3>Child Labor Estimates</h3>
                            <p>
                                The ILO&rdquo;s{" "}
                                <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.ilo.org/wcmsp5/groups/public/---ed_norm/---ipec/documents/publication/wcms_797515.pdf"
                                        Title="Child Labour: Global Estimates 2020, Trends and the Road Forward report"
                                    >
                                Child Labour: Global Estimates 2020, Trends and the Road Forward report
                                </a>
                                {" "}noted that there were 160 million child laborers—63 million girls and 97 million boys&mdash;worldwide. Since the most recent 2016 estimates, the 
                                absolute number of children in child labor has increased by more than 8 million, while the proportion of children in child labor remained unchanged. 
                                Global child labor statistics are not yet available from 2020 onward. Of the 160 million child laborers, the most recent estimates indicate that 70.0 
                                percent are engaged in agriculture, 19.7 percent in services, and 10.3 percent in industry. Regionally, sub&mdash;Saharan Africa accounts for the highest 
                                regional percentage of children in child labor and the highest absolute number of children in child labor&mdash;86.6 million. Central and Southern Asia 
                                accounts for 5.5 percent of all child laborers, or 26.3 million in absolute terms. Behind that region, Eastern and South-Eastern Asia accounts for 
                                6.2 percent of all child laborers, or 24.3 million in absolute terms. Northern Africa and Western Asia, Latin America and the Caribbean, and Europe 
                                and Northern America account for the remaining child laborers with 10.1 million, 8.2 million, and 3.8 million children toiling in these perilous 
                                conditions, respectively.
                            </p>
                            <p />

                            <Accordion >
                                <Accordion.Section id="child-resources">
                                    <Accordion.Title>
                                        Further Resources
                                    </Accordion.Title>
                                    <Accordion.Panel>
                                        <ol>
                                            <li>
                                                ILO and United Nations Children&rdquo;s Fund, Child Labour: Global estimates 2020, trends and the road forward. New York, 2021. License: CC BY 4.0.
                                            </li>
                                            <li>
                                                ILO. Accelerating action against child labour; Global Report under the follow-up to the ILO Declaration on Fundamental Principles and Rights at Work; 
                                                Geneva: 2010; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://labordoc.ilo.org/discovery/fulldisplay?vid=41ILO_INST:41ILO_V1&search_scope=ALL_ILO&tab=Everything&docid=alma994571433402676&lang=en&context=L"
                                                    title=" https://labordoc.ilo.org/discovery/fulldisplay?vid=41ILO_INST:41ILO_V1&search_scope=ALL_ILO&tab=Everything&docid=alma994571433402676&lang=en&context=L"
                                                >
                                                    https://labordoc.ilo.org/discovery/fulldisplay?vid=41ILO_INST:41ILO_V1&search_scope=ALL_ILO&tab=Everything&docid=alma994571433402676&lang=en&context=L
                                                </a>.
                                            </li>
                                            <li>
                                                ILO. “What is child labour,” [accessed November 25, 2011]; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/ipec/facts/lang--en/index.htm"
                                                    title="&ldquo;What is child labour&rdquo;,"
                                                >
                                                    http://www.ilo.org/ipec/facts/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO. Children in hazardous work: What we know, what we need to do. Geneva, June 2011; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/global/publications/ilo-bookstore/order-online/books/WCMS_155428/lang--en/index.htm"
                                                    title="Children in hazardous work: What we know, what we need to do Geneva, June 2011"
                                                >
                                                    http://www.ilo.org/global/publications/ilo-bookstore/order-online/books/WCMS_155428/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                International Labor Organization Convention 138 (Minimum Age); available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138"
                                                    title="International Labor Organization Convention 138 (Minimum Age)"
                                                >
                                                    http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138
                                                </a>.
                                            </li>
                                            <li>
                                                International Labor Organization Convention 182 (Worst Forms of Child Labor); available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                                    title="International Labor Organization Convention 182 (Worst Forms of Child Labor)"
                                                >
                                                    http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182
                                                </a>.
                                            </li>
                                            <li>
                                                ILO. International Organization of Employers, Eliminating Child Labour Guides for Employers: Guide One: Introduction to the 
                                                Issue of Child Labour, Geneva: 2007; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/wcmsp5/groups/public/---asia/---ro-bangkok/documents/publication/wcms_117863.pdf"
                                                    title="Eliminating Child Labour Guide for Employers: Guide One: Introduction to the Issue of Child Labour"
                                                >
                                                    http://www.ilo.org/wcmsp5/groups/public/---asia/---ro-bangkok/documents/publication/wcms_117863.pdf
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                International Trade Union
                                                Confederation.
                                                <em>
                                                    {" "}
                                                    Mini Action Guide on Child
                                                    Labour,{" "}
                                                </em>
                                                Brussels, 2008; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.ituc-csi.org/mini-action-guide-child-labour"
                                                    title="Mini Action Guide on Child Labour"
                                                >
                                                    https://www.ituc-csi.org/mini-action-guide-child-labour
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO.{" "}
                                                <em>
                                                    18<sup>th</sup>{" "}
                                                    International Conference of
                                                    Labor Statisticians Report
                                                    III: Child labour
                                                    statistics.
                                                </em>{" "}
                                                Geneva, December 5, 2008.
                                                Available at{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/meetingdocument/wcms_099577.pdf"
                                                    title="18<sup>th</sup> International Conference of Labor Statisticians Report III: Child labour statistics."
                                                >
                                                    https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/meetingdocument/wcms_099577.pdf
                                                </a>
                                            </li>
                                            <li>
                                                U.S. Department of Labor. Findings on the Worst Forms of Child Labor, Washington, DC; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.dol.gov/agencies/ilab/resources/reports/child-labor/findings"
                                                    title="U.S. Department of Labor. &nbsp;Findings on the Worst Forms of Child Labor, Washington, D.C."
                                                >
                                                    https://www.dol.gov/agencies/ilab/resources/reports/child-labor/findings
                                                </a>
                                            </li>
                                        </ol>
                                    </Accordion.Panel>
                                </Accordion.Section>
                            </Accordion>
                            <p />
                        </Accordion.Panel>
                    </Accordion.Section>

                    <Accordion.Section id="forced-labor">
                        <Accordion.Title>Forced Labor</Accordion.Title>
                        <Accordion.Panel>
                            <h3>Definitions</h3>
                            <p>
                                The internationally recognized definition of <strong>forced or compulsory labor</strong> is found in{" "}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_ILO_CODE:C029"
                                        title="ILO Convention 29"
                                        >
                                        ILO Convention 29
                                    </a>
                                . According to this Convention, 
                                forced or compulsory labor as &rdquo;all work or service which is exacted from any person under the menace of any penalty and for which the 
                                said person has not offered himself voluntarily.&rdquo; There are four key elements to this definition and indicators related to each element, 
                                as set forth below. The combination of indicators for each situation must be analyzed to determine whether the situation is one of forced 
                                labor or not.
                            </p>
                            <ul>
                                <li>
                                    <em>All work or service:</em> This includes all types of work, service, and employment, regardless of the industry, sector, or occupation 
                                    within which it is found, and encompasses legal and formal employment as well as illegal and informal work.
                                </li>
                                <li>
                                    <em>Any person:</em> This refers to adults and children.
                                </li>
                                <li>
                                    <em>Menace of any penalty:</em> This refers to a worker believing he or she will face a penalty if they refuse to work. &rdquo;Menace&rdquo; means 
                                    the penalty need not be exacted, but rather, that threats of penalty may be sufficient, if the employee believes the employer will exact 
                                    the penalty. A wide variety of penalties, such as confinement to the workplace, violence against workers or family members, retention of 
                                    identity documents, dismissal from employment, and non-payment of wages, denunciation to authorities, or other loss of rights or privileges, 
                                    may be sufficient to fulfill this element of the test for forced labor.
                                </li>
                                <li>
                                    <em>Voluntary: </em> This refers to workers&rsquo; consent to enter employment and their freedom to leave that employment at any time, 
                                    with reasonable notice in accordance with national law or collective agreements. In essence, persons are in a forced labor situation if 
                                    they enter work or service against their free choice and cannot leave their work without penalty or the threat of penalty. Involuntariness 
                                    does not have to result from physical punishment or constraint; it can also stem from other forms of retaliation, such as the loss of rights 
                                    or privileges or non-payment of wages owed. Note that a worker can be considered to be in forced labor even if their consent was given, if 
                                    that consent was obtained through the use of force, abduction, fraud, deception, or the abuse of power or a position of vulnerability, or if 
                                    the consent has been revoked.
                                </li>
                            </ul>
                            <p>
                                <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_ILO_CODE:C105"
                                        title="ILO Convention 105"
                                        >
                                        ILO Convention 105
                                    </a>
                                , another convention on forced labor, specifies that forced labor should never be used for the purpose of economic development or as a means of 
                                political coercion, discrimination, labor discipline, or punishment for having participated in labor strikes.
                            </p>
                            <p>
                                <em>Note: </em>
                                <em>
                                    The standards on child labor and forced labor discussed in this app are international standards and should not be interpreted as 
                                    U.S. law.
                                </em>
                            </p>
                            <p />
                            <h3>Patterns and Forms of Forced Labor</h3>
                            <p>
                                Until the 20th century, most of the world&rsquo;s forced labor was rooted in traditional social stratification systems and patterns of 
                                discrimination, agrarian production structures, conquest, colonialism, and the slave trade. Certain castes, religious minorities, and 
                                indigenous peoples have long been vulnerable to forced labor.
                            </p>
                            <p>
                                Today, forced labor can happen in any industry and country and can be especially prevalent in industries that require low-skilled labor, 
                                such as agriculture and mining, or occupations hidden from public view, like domestic service.
                            </p>
                            <p>
                                Some governments force their citizens to carry out infrastructure projects, produce goods, raise crops, and perform other forms of work. 
                                Indeed, the ILO estimates that 16 percent of forced labor worldwide is state-imposed forced labor. This includes prison labor, where victims 
                                are imprisoned without conviction by a court of law and made to perform work or service.
                            </p>

                            <p>
                                Labor migration has also contributed to forced labor. There are approximately&nbsp;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/global/publications/books/WCMS_652001/lang--en/index.htm"
                                    title="150 million migrant workers in the global workforce"
                                >
                                150 million migrant workers in the global workforce
                                </a>.
                                These workers may be especially vulnerable to labor recruiters and other intermediaries, organized crime syndicates, and employers offering 
                                false contract terms and other fraudulent schemes. Many migrants pay fees to such recruiters or intermediaries and become trapped in debt 
                                bondage, often including unreasonable interest or other terms that their wages are insufficient to repay, that results in cyclical debt. 
                                Cycles of debt bondage can also occur when employers deduct from workers&rsquo; wages for housing, food, and other costs, leaving workers with 
                                little or no take-home pay.
                            </p>
                            <p>
                                Migrants can also be especially vulnerable to confinement in workplaces, including through employer retention of their identity documents and 
                                various forms of physical or psychological coercion.
                            </p>

                            <p>
                                Modern dynamics of global production and the demand for cheaper, disposable goods have also increased worker vulnerability to forced labor. 
                                For instance, buyer pressure on suppliers to complete orders in an unreasonable amount of time can lead suppliers to force workers to work 
                                long hours, often without extra compensation. It can also lead suppliers to outsource production to subcontractors beyond their network of 
                                allowable subcontractors. In many countries, these are small, informal businesses that are not registered with the government and are not 
                                visible to the buyer, leaving workers outside the purview of legal protections and social compliance systems.
                            </p>

                            <p>
                                While poverty can push people into exploitative work, it is important to distinguish between very poor working conditions and forced labor. 
                                A lack of economic alternatives, such as other jobs, does not by itself qualify a situation as one of forced labor. Nor do unsafe buildings, 
                                poor health and safety conditions, substandard employer-provided housing, or other labor rights violations constitute, on their own, forced 
                                labor. Forced labor is distinguished by the worker feeling a threat of penalty exacted by their employer or an agent of the employer, such as 
                                a supervisor or recruiter, and performing work involuntarily.
                            </p>

                            <h3>Forced Labor Estimates</h3>
                            <p>
                                The ILO estimated in 2016 that&nbsp;
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/wcmsp5/groups/public/@dgreports/@dcomm/documents/publication/wcms_575479.pdf"
                                >
                                25 million people are victims of forced labor globally
                                </a>
                                . Of these, nearly 5 million are in forced commercial sexual exploitation, and 16 million are in other forms of labor exploitation spanning sectors 
                                such as agriculture, construction, domestic work, and manufacturing. The remaining 4 million are in state-imposed forms of forced labor.

                            </p>

                            <h3>Human Trafficking</h3>
                            <p>
                                Human trafficking, or trafficking in persons, is defined in the{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.osce.org/odihr/19223?download=true"
                                    title="Protocol to Prevent, Suppress and Punish Trafficking in Persons, especially Women and Children"
                                >
                                    "Protocol to Prevent, Suppress and Punish
                                    Trafficking in Persons, especially Women and
                                    Children"
                                </a>{" "}
                                of 2000 (a protocol to the UN Convention Against Transnational Organized Crime) as &rdquo;the recruitment, transportation, transfer, harboring or 
                                receipt of persons, by means of the threat or use of force or other forms of coercion, abduction, fraud, deception, the abuse of power or a 
                                position of vulnerability, or of the giving or receiving of payments or benefits to achieve the consent of a person having control over 
                                another person, for the purpose of exploitation.&rdquo; As set out in this protocol, exploitation includes, at a minimum, &rdquo;the exploitation of the 
                                prostitution of others or other forms of sexual exploitation, forced labor or services, slavery or practices similar to slavery, servitude or 
                                the removal of organs.&rdquo;
                            </p>
                            {/* <img src={unoDc} alt="UNO DC" /> */}
                            <img src={usdol1}  />
                            {/* <img
                                id="img-browser1"
                                className="small-img"
                                src={usdol1}
                                
                            /> */}
                            <br />
                            <p className="small-text">
                                Source: International Labor Organization. Toolkit on Developing National Action Plans on Forced Labour; Tool No. 2: Forced labour and related concepts; 2020.{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.ilo.org/global/topics/forced-labour/publications/WCMS_716879/lang--en/index.htm"
                                    title="Global Report on Trafficking in Persons"
                                >
                                    https://www.ilo.org/global/topics/forced-labour/publications/WCMS_716879/lang--en/index.htm
                                </a>
                                .
                            </p>
                            <p />
                            <Accordion >
                                <Accordion.Section id="forced-resources">
                                    <Accordion.Title>
                                        Further Resources
                                    </Accordion.Title>
                                    <Accordion.Panel>
                                        <ol>
                                            <li>
                                                International Labor Organization Convention 29 (Forced Labor Convention); available from {" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID:312174"
                                                    title="International Labor Organization Convention 29 (Forced Labor Convention)"
                                                >
                                                    http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID:312174
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO,
                                                <em>
                                                    {" "}
                                                    The cost of coercion: Global Report under the follow-up to the ILO Declaration on Fundamental Principles and Rights at Work.{" "}
                                                </em>
                                                Geneva; 2009 available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.ilo.org/global/topics/forced-labour/publications/WCMS_106268/lang--en/index.htm"
                                                    title="The cost of coercion: Global Report under the follow-up to the ILO Declaration on Fundamental Principles and Rights at Work"
                                                >
                                                    https://www.ilo.org/global/topics/forced-labour/publications/WCMS_106268/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO, ILO Global Estimate of Forced Labour: Results and Methodology. Geneva, 2012; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/washington/WCMS_182004/lang--en/index.htm"
                                                    title="ILO Global Estimate of Forced Labour: Results and Methodology"
                                                >
                                                    http://www.ilo.org/washington/WCMS_182004/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO,{" "}
                                                <em>
                                                    HHard to see, harder to count – Survey guidelines to estimate forced labour of adults and children.{" "}
                                                </em>
                                                Geneva, 2012; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://ilo.org/global/topics/forced-labour/publications/WCMS_182096/lang--en/index.htm"
                                                    title="Hard to see, harder to count - Survey guidelines to estimate forced labour of adults and children"
                                                >
                                                    http://ilo.org/global/topics/forced-labour/publications/WCMS_182096/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO. Combating Forced Labour: A Handbook for Employers and Business. Geneva, June 25, 2015; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm"
                                                    title="Combating Forced Labour: A Handbook for Employers and Business"
                                                >
                                                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_101171/lang--en/index.htm
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                ILO.{" "}
                                                <em>
                                                Profits and Poverty: The Economics of Forced Labor
                                                </em>
                                                . Geneva, 2014; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--en/index.htm"
                                                    title="Profits and Poverty: The Economics of Forced Labor"
                                                >
                                                    https://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--en/index.htm
                                                </a>
                                            </li>
                                            <li>
                                                International Labor Organization Protocol of 2014 to the Forced Labour Convention; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029"
                                                    title="International Labor Organization Protocol of 2014 to the Forced Labour Convention"
                                                >
                                                    https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:P029
                                                </a>
                                            </li>
                                            <li>
                                                International Labor Organization Recommendation 203, Forced Labor (Supplementary Measures) Recommendation, 2014; available from {" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174688,en:NO"
                                                    title="Recommendation on supplementary measures for the effective suppression of forced labour"
                                                >
                                                    http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174688,en:NO
                                                </a>
                                            </li>
                                            <li>
                                                International Trade Union Confederation.{" "}
                                                <em>
                                                    How to Combat Forced Labour and Trafficking.
                                                </em>
                                                , Brussels, 2010; available from{" "}
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="http://www.ituc-csi.org/ituc-guide-how-to-combat-forced.html?lang=en"
                                                    title="How to Combat Forced Labour and Human Trafficking"
                                                >
                                                    http://www.ituc-csi.org/ituc-guide-how-to-combat-forced.html?lang=en.
                                                </a>
                                            </li>
                                        </ol>
                                    </Accordion.Panel>
                                </Accordion.Section>
                            </Accordion>
                            <p>&nbsp;</p>
                        </Accordion.Panel>
                    </Accordion.Section>
                </Accordion>
            </div>
        </StaticData>
    );
};

export default en;
