import React from "react";
import Accordion from "../../../../components/Accordion";
import childBrick from "../images/child_brick.jpg";
import unoDc from "../images/UNO_DC.png";

const en = ({ pdf }) => {
    return (
        <div>
            <h1>
                <strong>What are Child Labor and Forced Labor?</strong>
            </h1>
            <p>Source of the Standards:</p>
            <p>
                International standards on child labor and forced labor were
                developed by the{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/global/about-the-ilo/lang--en/index.htm"
                    title="International Labor Organization"
                >
                    International Labor Organization
                </a>{" "}
                (ILO), a specialized UN agency that brings together governments,
                employers&rsquo;, and workers&rsquo; representatives of&nbsp;
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.ilo.org/public/english/standards/relm/country.htm"
                    title="187 member states&nbsp;"
                >
                    187 member states&nbsp;
                </a>
                to set international labor standards, develop policies, and
                devise programs to promote rights at work and decent work for
                all persons.
            </p>
            <Accordion pdf={pdf}>
                <Accordion.Section>
                    <Accordion.Title>Child Labor</Accordion.Title>
                    <Accordion.Panel>
                        <h3>Definitions</h3>
                        <p>
                            A <strong>child </strong>or{" "}
                            <strong>children</strong> are minors under the age
                            of 18 years.
                        </p>
                        <p>
                            <strong>Child labor</strong> includes{" "}
                            <em>employment below the minimum age</em> as
                            established in national legislation (excluding
                            permissible light work) and the{" "}
                            <em>worst forms of child labor (WFCL)</em>.
                        </p>
                        <p>
                            ILO Convention 138 requires countries to establish a
                            minimum age for work no less than the age of
                            compulsory schooling, and no less than 15
                            years.&nbsp; It allows less-developed countries to
                            establish a minimum age of 14.
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
                        <ol type="a">
                            <li>
                                all forms of slavery or practices similar to
                                slavery, such as the sale and trafficking of
                                children, debt bondage and serfdom and forced or
                                compulsory labor, including forced or compulsory
                                recruitment of children for use in armed
                                conflict;
                            </li>
                            <li>
                                the use, procuring or offering of a child for
                                prostitution, the production of pornography or
                                for pornographic performances;
                            </li>
                            <li>
                                the use, procuring or offering of a child for
                                illicit activities, in particular for the
                                production and trafficking of drugs as defined
                                in the relevant international treaties; and
                            </li>
                            <li>
                                work which, by its nature or the circumstances
                                in which it is carried out, is likely to harm
                                the health, safety or morals of children
                                (referred to as &ldquo;hazardous work&rdquo;).
                            </li>
                        </ol>
                        <p>
                            According to ILO Convention 182, hazardous work
                            "shall be determined by national laws or regulations
                            or by the competent authority, after consultation
                            with the organizations of employers and workers
                            concerned, taking into consideration relevant
                            international standards..." (Article 4). As this
                            suggests, forms of work identified as "hazardous"
                            for children may vary from country to country.{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R190"
                                title="ILO Recommendation No. 190"
                            >
                                ILO Recommendation No. 190
                            </a>
                            , which accompanies ILO Convention 182, gives
                            additional guidance on identifying "hazardous work."
                            ILO Recommendation No. 190 states in Section II,
                            Paragraph 3 that "[i]n determining the types of work
                            referred to under Article 3(d) of the Convention
                            [ILO Convention 182], and in identifying where they
                            exist, consideration should be given, inter alia to:
                        </p>
                        <ol>
                            <li>
                                work which exposes children to physical,
                                psychological, or sexual abuse;
                            </li>
                            <li>
                                work underground, under water, at dangerous
                                heights or in confined spaces;
                            </li>
                            <li>
                                work with dangerous machinery, equipment and
                                tools, or which involves the manual handling or
                                transport of heavy loads;
                            </li>
                            <li>
                                work in an unhealthy environment which may, for
                                example, expose children to hazardous
                                substances, agents or processes, or to
                                temperatures, noise levels, or vibrations
                                damaging to their health;
                            </li>
                            <li>
                                work under particularly difficult conditions
                                such as work for long hours or during the night
                                or work where the child is unreasonably confined
                                to the premises of the employer."
                            </li>
                        </ol>
                        <img
                            id="img-browser"
                            className="small-img"
                            src={childBrick}
                            alt="Girl with bricks"
                        />
                        <p className="small-text">M. Crozet/ILO</p>
                        <p>
                            Child labor spans nearly every sector and kind of
                            work. Children harvest cotton in Uzbekistan, work as
                            domestic servants in Haiti and mine diamonds in the
                            Central African Republic.
                        </p>
                        <p>
                            It is important to recognize that not all work
                            performed by children is exploitative child labor.
                            Children of legal working age who perform work that
                            does not hinder their mental, physical or emotional
                            development, &ldquo;working children&rdquo; under
                            international standards, can be an asset to their
                            families' welfare and their nations' economic
                            development. Such work can be performing household
                            chores in their own homes, assisting parents in a
                            family business outside of school hours, and working
                            in non-hazardous activities after school or during
                            vacations to earn extra income.
                        </p>
                        <p>
                            <em>Note: </em>
                            <em>
                                The standards on child labor and forced labor
                                discussed in this App are international
                                standards and should not be interpreted as U.S.
                                law.
                            </em>
                        </p>
                        <p />
                        <h3>Drivers of Child Labor</h3>
                        <p>
                            Children enter the labor force due to both supply
                            factors and industry demand for cheap, unskilled
                            labor, among other factors. Poverty is the most
                            salient source of pressure leading to the supply of
                            child labor. Production processes that require an
                            abundance of unskilled labor or that require certain
                            physical attributes&mdash;small stature, agility,
                            etc.&mdash;can also create demand for child labor.
                            In addition, price pressures encourage suppliers,
                            especially at points upstream in the supply chain,
                            to find the cheapest labor. Children may be the only
                            workers willing to work for these wages, or adults
                            may find that these wage levels do not allow them to
                            meet basic needs and they must put their children to
                            work to supplement family income. These fundamental
                            supply and demand factors are often reinforced by
                            factors such as a lack of adequate access to
                            education, inadequate employment potential for those
                            who do receive education, exclusionary social
                            attitudes based on caste or ethnicity, gender and
                            cultural attitudes about work and education.
                        </p>
                        <p />
                        <h3>Child Labor Estimates</h3>
                        <p>
                            The ILO estimates that in 2016, there were 152
                            million child laborers worldwide. Global child labor
                            statistics are not yet available from 2016 onward.
                        </p>
                        <p />
                        <h3>
                            <strong>Further Resources</strong>
                        </h3>
                        <ol>
                            <li>
                                International Labor Organization, Global
                                estimation of child labour 2016: Main results
                                and methodology, Geneva, September 2017.
                            </li>
                            <li>
                                International Labor Organization, Accelerating
                                action against child labour; Global Report under
                                the follow-up to the ILO Declaration on
                                Fundamental Principles and Rights at Work;
                                Geneva: 2010; available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/publications/books/WCMS_127688/lang--en/index.htm%20"
                                    title=" Global Report under the follow-up to the ILO Declaration on Fundamental Principles and Rights at Work - 2010"
                                >
                                    http://www.ilo.org/global/publications/books/WCMS_127688/lang--en/index.htm
                                </a>
                            </li>
                            <li>
                                International Labor Organization, &ldquo;What is
                                child labour,&rdquo; accessed November 25, 2011;
                                available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/ipec/facts/lang--en/index.htm"
                                    title="&ldquo;What is child labour,&rdquo;"
                                >
                                    http://www.ilo.org/ipec/facts/lang--en/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                International Labor Organization, Children in
                                hazardous work: What we know, what we need to do
                                Geneva, June 2011; available from{" "}
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
                                International Labor Organization Convention 138
                                (Minimum Age); available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138"
                                    title="International Labor Organization Convention 138 (Minimum Age)"
                                >
                                    http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C138
                                </a>
                            </li>
                            <li>
                                International Labor Organization Convention 182
                                (Worst Forms of Child Labor); available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182"
                                    title="International Labor Organization Convention 182 (Worst Forms of Child Labor)"
                                >
                                    http://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C182
                                </a>
                            </li>
                            <li>
                                International Labor Organization-International
                                Organization of Employers, Eliminating Child
                                Labour Guide for Employers: Guide One:
                                Introduction to the Issue of Child Labour,
                                Geneva: 2007; available from{" "}
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
                                International Trade Union Confederation.
                                <em> Mini Action Guide on Child Labour, </em>
                                Brussels, 2008; available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ituc-csi.org/IMG/pdf/guide_CL_EN_Final.pdf"
                                    title="Mini Action Guide on Child Labour"
                                >
                                    http://www.ituc-csi.org/IMG/pdf/guide_CL_EN_Final.pdf
                                </a>
                                .
                            </li>
                            <li>
                                International Labor Office.{" "}
                                <em>
                                    18<sup>th</sup> International Conference of
                                    Labor Statisticians Report III: Child labour
                                    statistics.
                                </em>{" "}
                                Geneva, December 5, 2008. ICLS/18/2008/III.
                                Available at{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/meetingdocument/wcms_099577.pdf"
                                    title="18<sup>th</sup> International Conference of Labor Statisticians Report III: Child labour statistics."
                                >
                                    http://www.ilo.org/global/statistics-and-databases/meetings-and-events/international-conference-of-labour-statisticians/WCMS_099577/lang--en/index.htm
                                </a>
                            </li>
                            <li>
                                U.S. Department of Labor. &nbsp;Findings on the
                                Worst Forms of Child Labor, Washington, D.C.
                                available from{" "}
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

                <Accordion.Section>
                    <Accordion.Title>Forced Labor</Accordion.Title>
                    <Accordion.Panel>
                        <h3>Definitions</h3>
                        <p>
                            The internationally recognized definition of{" "}
                            <strong>forced or compulsory labor</strong> is found
                            in ILO Convention 29. According to this Convention,
                            forced or compulsory labor is "all work or service
                            which is exacted from any person under the menace of
                            any penalty and for which the said person has not
                            offered himself voluntarily." There are four key
                            elements to this definition, and indicators related
                            to each element, as set forth below. The combination
                            of indicators for each situation must be analyzed in
                            order to determine whether the situation is one of
                            forced labor or not.
                        </p>
                        <ul>
                            <li>
                                <em>All work or service:</em> This includes all
                                types of work, service and employment,
                                regardless of the industry, sector or occupation
                                within which it is found, and encompasses legal
                                and formal employment as well as illegal and
                                informal work.
                            </li>
                            <li>
                                <em>Any person:</em> This refers to adults and
                                children.
                            </li>
                            <li>
                                <em>Menace of any penalty:</em> This refers to a
                                worker believing he or she will face a penalty
                                if they refuse to work. "Menace" means the
                                penalty need not be exacted, but rather, that
                                threats of penalty may be sufficient, if the
                                employee believes the employer will exact the
                                penalty. A wide variety of penalties, such as
                                confinement to the workplace, violence against
                                workers or family members, retention of identity
                                documents, dismissal from employment, and
                                non-payment of wages, denunciation to
                                authorities, or other loss of rights or
                                privileges, may be sufficient to fulfill this
                                element of the test for forced labor.
                            </li>
                            <li>
                                <em>Voluntary: </em>This refers to
                                workers&rsquo; consent to enter into employment
                                and their freedom to leave the employment at any
                                time, with reasonable notice in accordance with
                                national law or collective agreements. In
                                essence, persons are in a forced labor situation
                                if they enter work or service against their free
                                choice, and cannot leave it without penalty or
                                the threat of penalty. Involuntariness does not
                                have to result from physical punishment or
                                constraint; it can also stem from other forms of
                                retaliation, such as the loss of rights or
                                privileges or non-payment of wages owed. Note
                                that a worker can be considered to be in forced
                                labor even if his or her consent was given, if
                                that consent was obtained through the use of
                                force, abduction, fraud, deception or the abuse
                                of power or a position of vulnerability, or if
                                the consent has been revoked.
                            </li>
                        </ul>
                        <p>
                            ILO Convention 105, another convention on forced
                            labor, specifies that forced labor should never be
                            used for the purpose of economic development or as a
                            means of political coercion, discrimination, labor
                            discipline or punishment for having participated in
                            labor strikes.
                        </p>
                        <p>
                            <em>Note: </em>
                            <em>
                                The standards on child labor and forced labor
                                discussed in this App are international
                                standards and should not be interpreted as U.S.
                                law.
                            </em>
                        </p>
                        <p />
                        <h3>Patterns and Forms of Forced Labor</h3>
                        <p>
                            Forced labor can happen in any industry and country,
                            and can be especially prevalent in industries that
                            require low-skilled labor, such as agriculture and
                            mining, or occupations hidden from public view, like
                            domestic service.
                        </p>
                        <p>
                            Until the 20th century, most of the world's forced
                            labor was rooted in traditional social
                            stratification systems and patterns of
                            discrimination, agrarian production structures,
                            conquest, colonialism and the slave trade. Certain
                            castes, religious minorities, and indigenous peoples
                            have long been vulnerable to forced labor.
                        </p>
                        <p>
                            Forced labor is not just a historical problem.
                            Today, as in the past, some governments force their
                            citizens to carry out infrastructure projects,
                            produce goods, raise crops and perform other forms
                            of work. Indeed, the ILO estimates that 16 percent
                            of forced labor worldwide is state-imposed forced
                            labor. This includes prison labor where victims are
                            imprisoned without conviction by a court of law, and
                            made to perform work or service.
                        </p>

                        <p>
                            Labor migration has also given rise to forced labor.
                            There are approximately 150 million migrant workers
                            in the global workforce.<sup>1</sup> These workers
                            may be especially vulnerable to labor recruiters and
                            other intermediaries, organized crime syndicates,
                            and employers offering false contract terms and
                            other fraudulent schemes. Many migrants pay fees to
                            such recruiters or intermediaries and become trapped
                            in debt bondage: cyclical debt, often including
                            unreasonable interest or other terms that their
                            wages are insufficient to repay. Cycles of debt
                            bondage can also occur when employers deduct from
                            workers' wages for housing, food and other costs,
                            leaving them with little or no take-home pay.{" "}
                        </p>
                        <p>
                            Migrants can also be especially vulnerable to
                            confinement in workplaces, including through
                            employer retention of their identity documents
                            and/or various forms of physical and/or
                            psychological coercion.{" "}
                        </p>

                        <p>
                            Modern dynamics of global production and demand for
                            cheaper, disposable goods have also increased worker
                            vulnerability to forced labor. For instance, buyer
                            pressure on suppliers to complete orders in an
                            unreasonable amount of time can lead suppliers to
                            force workers to work long hours, often without
                            extra compensation. It can also lead suppliers to
                            outsource production to subcontractors beyond their
                            network of allowable subcontractors. In many
                            countries, these are small, informal businesses that
                            are not registered with the government and are not
                            visible to the buyer, leaving workers outside the
                            purview of legal protections and social compliance
                            systems.
                        </p>

                        <p>
                            While poverty can push people into exploitative
                            work, it is important to distinguish between very
                            poor working conditions and forced labor. A lack of
                            economic alternatives, such as other jobs, does not
                            by itself qualify a situation as one of forced
                            labor. Nor do unsafe buildings, poor health and
                            safety conditions, substandard employer-provided
                            housing, or other labor rights violations
                            constitute, on their own, forced labor. Forced labor
                            is distinguished by the worker feeling a threat of
                            penalty, exacted by his or her employer or an agent
                            of the employer, such as a supervisor or recruiter,
                            and performing work involuntarily.
                        </p>

                        <h3>Forced Labor Estimates</h3>
                        <p>
                            The ILO estimated in 2016 that 25 million people are
                            victims of forced labor globally. Of these, nearly 5
                            million are in forced commercial sexual
                            exploitation, and 16 million are in other forms of
                            labor exploitation spanning sectors such as
                            agriculture, construction, domestic work and
                            manufacturing. The remaining 4 million are in
                            state-imposed forms of forced labor.
                            <sup>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="#_ftnref1"
                                    name="_ftn1"
                                >
                                    [1]
                                </a>{" "}
                                ILO:&nbsp;{" "}
                                <em>
                                    ILO Global Estimates on Migrant
                                    Workers:&nbsp; Results and Methodology,{" "}
                                </em>
                                Geneva, 2015, p.xi
                            </sup>
                        </p>

                        <h3>Human Trafficking</h3>
                        <p>
                            Human trafficking, or trafficking in persons, is
                            defined in the{" "}
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
                            of 2000 (a Protocol to the United Nations Convention
                            Against Transnational Organized Crime) as "the
                            recruitment, transportation, transfer, harboring or
                            receipt of persons, by means of the threat or use of
                            force or other forms of coercion, abduction, fraud,
                            deception, the abuse of power or a position of
                            vulnerability, or of the giving or receiving of
                            payments or benefits to achieve the consent of a
                            person having control over another person, for the
                            purpose of exploitation." As set out in that
                            Protocol, exploitation includes, at a minimum, "the
                            exploitation of the prostitution of others or other
                            forms of sexual exploitation, forced labor or
                            services, slavery or practices similar to slavery,
                            servitude or the removal of organs."
                        </p>
                        <img src={unoDc} alt="UNO DC" />
                        <br />
                        <p className="small-text">
                            Source: United Nations Office on Drugs and Crime.{" "}
                            <em>Global Report on Trafficking in Persons</em>;
                            2016.{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.unodc.org/documents/data-and-analysis/glotip/2016_Global_Report_on_Trafficking_in_Persons.pdf"
                                title="Global Report on Trafficking in Persons"
                            >
                                https://www.unodc.org/documents/data-and-analysis/glotip/2016_Global_Report_on_Trafficking_in_Persons.pdf
                            </a>
                            .
                        </p>
                        <p />
                        <h3>
                            <strong>Further Resources</strong>
                        </h3>
                        <ol>
                            <li>
                                International Labor Organization Convention 29
                                (Forced Labor Convention); available from{" "}
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
                                International Labor Organization,
                                <em>
                                    {" "}
                                    The cost of coercion: Global Report under
                                    the follow-up to the ILO Declaration on
                                    Fundamental Principles and Rights at Work,{" "}
                                </em>
                                Geneva; 2009 available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/topics/forced-labour/publications/WCMS_106268/lang--en/index.htm"
                                    title="The cost of coercion: Global Report under the follow-up to the ILO Declaration on Fundamental Principles and Rights at Work"
                                >
                                    http://www.ilo.org/global/topics/forced-labour/publications/WCMS_106268/lang--en/index.htm
                                </a>
                                .
                            </li>
                            <li>
                                International Labor Organization, ILO Global
                                Estimate of Forced Labour: Results and
                                Methodology, Geneva, 2012; available from{" "}
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
                                International Labor Organization,{" "}
                                <em>
                                    Hard to see, harder to count - Survey
                                    guidelines to estimate forced labour of
                                    adults and children,{" "}
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
                                International Labour Organization, Combating
                                Forced Labour: A Handbook for Employers and
                                Business, Geneva, June 25, 2015; available from{" "}
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
                                International Labour Organization,{" "}
                                <em>
                                    Profits and Poverty: The Economics of Forced
                                    Labor
                                </em>
                                . Geneva, 2014; available from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--en/index.htm."
                                    title="Profits and Poverty: The Economics of Forced Labor"
                                >
                                    http://www.ilo.org/global/topics/forced-labour/publications/profits-of-forced-labour-2014/lang--en/index.htm
                                </a>
                            </li>
                            <li>
                                International Labor Organization Protocol of
                                2014 to the Forced Labour Convention; available
                                from{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174672,en:NO"
                                    title="International Labor Organization Protocol of 2014 to the Forced Labour Convention"
                                >
                                    http://www.ilo.org/dyn/normlex/en/f?p=1000:12100:0::NO::P12100_INSTRUMENT_ID,P12100_LANG_CODE:3174672,en:NO
                                </a>
                            </li>
                            <li>
                                International Labor Organization Recommendation
                                203 on supplementary measures for the effective
                                suppression of forced labour, 2014; available
                                from{" "}
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
                                    How to Combat Forced Labour and Human
                                    Trafficking
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
                        <p>&nbsp;</p>
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
        </div>
    );
};

export default en;
