import React from "react";
import Accordion from "../../../../components/Accordion";
import StaticData from "../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <h1 role="heading" aria-level="1">About the Comply Chain App</h1>
            <p>
                In the era of globalization, the production of goods in foreign countries has increased at a rapid pace. Unfortunately, 
                in too many countries, illegal labor practices persist, either going unchecked or willfully ignored. Lack of accountability 
                and oversight of labor rights has made it more likely that goods imported into the United States may be tainted by child labor 
                and forced labor. The importation of forced labor-made goods is a violation of U.S. trade policy that gives an unfair 
                competitive advantage to countries and businesses that do not play by the rules. In turn, such abuses force U.S. workers and 
                responsible businesses to compete on an uneven playing field.
            </p>
            <p>
                According to numbers released in 2021, the International Labor Organization (ILO) estimates that 160 million children between 
                5 and 17 years old were engaged in child labor, of which about 79 million were in hazardous labor. The ILO also estimates that 
                25 million adults and children are in forced labor. New forced labor estimates are expected in 2022.
            </p>
            <p>
                By downloading this app, you have shown that you are concerned about the grim reality of these serious human rights violations. 
                You are interested in reducing the chance that your products&mdash;and the raw materials they come from&mdash;are manufactured, 
                mined, or harvested by children who should be in school or by workers locked in sweatshops or forced into work through false 
                promises or threats.
            </p>
            <p>
                This app was created by the U.S. Department of Labor&apos;s (DOL){" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods/"
                    title="List of Goods Produced by Child Labor or Forced Labor"
                >
                Bureau of International Labor Affairs
                 </a>
                 {" "}(ILAB). ILAB&apos;s mission is to strengthen global labor standards, enforce labor commitments among trading partners, promote racial 
                 and gender equity, and combat international child labor, forced labor, and human trafficking.&nbsp;
            </p>
            <p>
            Please e-mail&nbsp;
            <a href = "mailto: GlobalKids@dol.gov">GlobalKids@dol.gov</a>&nbsp;
             to learn more!  
            </p>
            <Accordion id="about-acc">
                <Accordion.Section id="why-develop">
                    <Accordion.Title>
                        <strong>
                            Why did the U.S. Department of Labor Develop This App?
                        </strong>
                    </Accordion.Title>

                    <Accordion.Panel>
                        <p>
                            The Trafficking Victims Protection Reauthorization Act (TVPRA) of 2005 mandates that ILAB &ldquo;work with persons who are involved in 
                            the production of goods on [ILAB&rsquo;s{" "} 
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.dol.gov/agencies/ilab/reports/child-labor/list-of-goods/"
                                title="List of Goods Produced by Child Labor or Forced Labor"
                            >
                                <em>
                                    List of Goods Produced by Child Labor or
                                    Forced Labor
                                </em>
                            </a>
                            ]
                            to create a standard set of practices that will reduce the likelihood that such persons will produce goods using [forced and child labor].&rdquo;&nbsp;
                        </p>
                        <p>
                           In the&nbsp;
                           <a
                               target="_blank"
                               rel="noopener noreferrer"
                               href="https://www.congress.gov/bill/115th-congress/house-bill/2200/text"
                               title="2018 reauthorization of the TVPRA"
                           >
                           2018 reauthorization of the TVPRA
                           </a>
                           , Congress added a new mandate for ILAB related to this list. Specifically, in Section 133 of the new law, Congress included language to 
                           require that &ldquo;to the extent practicable, goods that are produced with inputs that are produced with forced labor or child labor&ldquo; be added 
                           to the List of Goods Produced by Child Labor or Forced Labor. This new language challenges ILAB and others around the world to trace the 
                           inputs made with forced or child labor to their end use in final goods and products, in addition to listing the inputs and raw materials 
                           thought to be produced with child or forced labor. ILAB&rsquo;s expanded mandate reinforces the expanding parameters of due diligence and 
                           confronting child labor and forced labor across often complex and multi-tier global supply chains.
                        </p>
                        <p>
                            This web-based and mobile app tool responds to these evolving mandates of the TVPRA, but it also achieves a much broader purpose by 
                            actively supporting the efforts of companies and other stakeholders that seek to address these issues in supply chains. In addition, 
                            the tool responds to efforts being made by the international community. In September 2015, United Nations (UN) member states adopted the{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://sustainabledevelopment.un.org/?menu=1300"
                                title="Sustainable Development Goals"
                            >
                                Sustainable Development Goals
                            </a>{" "}
                            (SDGs), a set of 17 interrelated, mutually reinforcing goals for global development over the next 15 years. Within each of the SDGs, specific 
                            targets have been set that will be essential to achieving the goals by 2030. Under{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://sustainabledevelopment.un.org/sdg8"
                                title="SDG 8"
                            >
                                SDG 8
                            </a>{" "}
                            on Decent Work and Economic Growth, Target 8.7 calls on governments to:
                        </p>
                        <p className="indent-margin">
                            &ldquo;Take immediate and effective measures to eradicate forced labor, end modern slavery and human trafficking and secure the prohibition 
                            and elimination of the worst forms of child labor, including recruitment and use of child soldiers, and by 2025 end child labor in all its forms.&rdquo;
                        </p>
                        <p>
                            ILAB&rsquo;s work has informed and supported{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.alliance87.org/"
                                title="Alliance 8.7"
                            >
                                Alliance 8.7
                            </a>
                            , a global partnership that aims to provide strategic coordination of diverse stakeholders with an interest in achieving Target 8.7. 
                            One of the ways in which ILAB has supported the work of the Alliance is through support for research on child labor and forced labor. 
                            ILAB has supported the development of improved tools and methodologies for the collection of data on child labor and forced labor, including 
                            the drafting and adoption by the International Conference of Labor Statisticians on&nbsp;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.alliance87.org/"
                                title="guidelines concerning the measurement of forced labor"
                            >
                            guidelines concerning the measurement of forced labor
                            </a>
                            in 2018. ILAB has also supported original data collection on child labor and forced labor through national surveys, many of 
                            which have informed the development of the global estimates on child labor and forced labor, which were updated in 2021 and 
                            earlier this year, respectively.
                            </p>
                            <p>
                                ILAB also supports critical research on global supply chains, resulting in the 2019 report{" "}
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.ilo.org/ipec/Informationresources/WCMS_716930/lang--en/index.htm"
                                title="Ending Child Labour, Forced Labour and Human Trafficking in Global Supply Chains"
                            >
                            Ending Child Labour, Forced Labour and Human Trafficking in Global Supply Chains
                            </a>. This research uncovered gaps in existing data sets and the variables between child labor and forced labor in domestic-focused 
                            supply chains versus global supply chains, informing the engagement of the world&rsquo;s major economies on child labor and forced labor, 
                            including the first G20 Strategy to Eradicate Child Labor, Forced Labor, and Human Trafficking in the world of work. In addition, 
                            ILAB continues to support ILO research to inform responses to forced labor in specific supply chains, including in the fishing sector, 
                            where the ILO has developed an evidence-based handbook for first responders such as labor inspectors to recognize such exploitation.
                            </p>
                            <p>
                                A key actor in this alliance is the business community. Eradicating child and forced labor by 2030 cannot be achieved without 
                                sustained commitment from the businesses that mine, produce, manufacture, distribute, and sell goods around the world. Businesses 
                                create jobs and find workers to perform the jobs; they bear a responsibility to ensure that these working relationships respect 
                                national laws and fundamental labor rights. Some businesses and industry groups have taken this responsibility seriously through 
                                voluntary standards, due diligence, remediation, transparency, and engagement with stakeholders. The combination of increased 
                                pressure from stakeholders and incentives to develop stronger responses is driving more businesses to acknowledge and address 
                                labor abuses in their supply chains. ILAB is committed to working alongside the business community in this effort.
                            </p>

                        <p>
                            Since 1993, ILAB has developed a unique approach to using research to combat these abuses. ILAB employs a systematic and rigorous 
                            process to triangulate information, supporting the collection of in-country data, traveling to conduct firsthand research in hard-to-reach 
                            places, and corroborating reports of labor abuses with credible local sources. This approach helps ensure the credibility and validity of 
                            ILAB&rsquo;s publications on child labor and forced labor. ILAB uses these reports to provide critical and actionable information to federal government 
                            agencies to safeguard federal procurement and prohibit the importation of goods made with forced labor, help U.S. companies reduce labor abuses in 
                            their supply chains to ensure trade respects human rights, and help foreign governments build their capacity to end modern slavery in their countries. 
                            This app is part of that effort.
                        </p>
                        <p>
                            The app is also an important component of the U.S.
                            {" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.state.gov/u-s-national-contact-point-for-the-oecd-guidelines-for-multinational-enterprises/u-s-national-action-plan-on-responsible-business-conduct/"
                                title="National Action Plan on Responsible Business Conduct (NAP-RBC)"
                            >
                                National Action Plan on Responsible Business
                                Conduct (NAP-RBC)
                            </a>
                            , which was developed pursuant to the{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.oecd.org/corporate/mne/1922428.pdf"
                                title="Organization for Economic Cooperation and Development&rsquo;s Guidelines for Multinational Enterprises"
                            >
                                Organization for Economic Cooperation and
                                Development&rsquo;s Guidelines for Multinational
                                Enterprises
                            </a>{" "}
                            and the{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                                title="UN Guiding Principles on Business and Human Rights"
                            >
                                UN Guiding Principles on Business and Human Rights
                            </a>
                            . The NAP-RBC encompasses the U.S. government&rsquo;s efforts and commitments to protect human rights in the overseas operations of U.S. businesses 
                            through research, technical cooperation, federal procurement practices, labor diplomacy, and public-private dialogue. The NAP-RBC also emphasizes 
                            the positive contributions that businesses can make to respect human rights.
                        </p>
                        <p>
                            In addition, since 1995, the U.S. Congress has appropriated funding to ILAB for programming to combat child labor and related abuses internationally 
                            through{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.dol.gov/agencies/ilab/projects"
                                title="technical assistance projects"
                            >
                                technical assistance projects
                            </a>
                            . ILAB has implemented more than 300 technical assistance projects in more than 95 countries, in partnership with a variety of governments, international 
                            institutions, civil society organizations, and industry groups.
                        </p>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="http://www.dol.gov/agencies/ilab/ilab-around-world"
                                    title="Learn more"
                                >
                                    Learn more
                                </a>{" "}
                                about ILAB&rsquo;s work around the world
                            </li>
                        </ul>
                        <p />
                    </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="how-develop">
                    <Accordion.Title>
                        <strong>How did USDOL develop this app?</strong>
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            Many organizations contributed to the development of this app, beginning with the National Academy of Sciences and the Center for 
                            Reflection, Education, and Action, both of which carried out initial research under contract with ILAB. ILAB also collected good practices 
                            from the many organizations whose materials are linked throughout the app. Interagency partners across the U.S. government provided feedback 
                            on the initial draft, as did a focus group of external experts from business, academia, unions, the socially responsible investment community, 
                            and other civil society groups. ILAB greatly appreciates the contributions of all who participated in this process.
                        </p>
                        <p>
                            The first online edition of Reducing Child Labor and Forced Labor: A Toolkit for Responsible Businesses was published in December 2012. In 
                            September 2017, ILAB released the first version of the mobile application, renamed Comply Chain, and updated the app in September 2018, including 
                            translations in French and Spanish. The 2020 rework includes additional updates and makes the app available for the first time in Malay, a common 
                            language across South-East Asia spoken by over 300 million people in Brunei, Indonesia, Malaysia, Singapore, and parts of Thailand.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="who-app">
                    <Accordion.Title>
                        <strong>Who is this app for?</strong>
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            This app is for all companies, as well as those in academia, investors, members of civil society, and many more. Companies that have not yet put in 
                            place social compliance systems may find it most useful. It can also be useful for companies that have systems in place but are seeking improvement, 
                            or those who are working with partners in their global supply chains to establish such programs. Academic specialists can use the app for information 
                            regarding trends in practices of due diligence and the evolving field of business and human rights. Members of civil society may use the app as a way 
                            to engage with the private sector and apply the app&rsquo;s resources to encouraging meaningful change on the ground.
                        </p>
                    </Accordion.Panel>
                </Accordion.Section>
                <Accordion.Section id="how-use-app">
                    <Accordion.Title>
                        <strong>How Do I Use This App?</strong>
                    </Accordion.Title>
                    <Accordion.Panel>
                        <p>
                            The app is organized around {" "}
                            <strong>
                                steps to build or improve a social compliance system
                            </strong>
                            . Each step begins with learning objectives and key terms. Companies that are new to social compliance are encouraged to work through the 
                            modules in order. Companies that wish to improve elements of their systems or work with their supply chain partners on their systems can choose 
                            which modules best fit their needs. However, they are encouraged to consider implementing all elements of the social compliance system presented 
                            here to ensure integration of all components and maximize the effectiveness of their systems.
                        </p>
                        <p>
                            As companies familiar with social compliance know, this app is just one of many guides, handbooks, white papers, and other materials that 
                            provide information on social compliance. We hope this app provides useful guidance and examples to help you build or strengthen your social 
                            compliance system or that of your global supply chain partners.
                        </p>
                        <p>
                            As you use the app, you can provide feedback to assist us in improving its content. You are also encouraged to share your good practices related to 
                            social compliance from your own experience. You may do so by{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:GlobalKids@ilab.dol.gov?subject=Comments on Comply Chain App"
                                title="e-mailing ILAB"
                            >
                                e-mailing ILAB
                            </a>
                            .
                        </p>
                        <p>
                            Because ILAB&rsquo;s TVPRA mandate is to work with persons involved in the production of goods or goods
                            with inputs produced from child labor or forced labor, this app focuses on social compliance programs for entities, in particular companies, that produce goods, rather than services.
                        </p>
                        <p />
                    </Accordion.Panel>
                </Accordion.Section>
            </Accordion>
            <p>
                Note on Guidance and Organizations Referenced
            </p>
            <p>
                <em>
                    The contents of this document do not have the force and effect of law and are not meant to bind the public in any way. This document is 
                    intended only to provide clarity to the public regarding existing requirements under the law or agency policies.
                  </em> </p>
                  <p>
                   <em> 
                    References to specific companies and non-governmental entities within this guide are for informational purposes only to demonstrate best 
                    practices that have been recognized internationally, as of the app&rsquo;s release date. Referencing the entities should not be interpreted as an 
                    official endorsement of those entities, their products, or services by the U.S. Department of Labor and their inclusion should not be interpreted 
                    as a comprehensive review of these entities&rsquo; practices in all areas{" "}
                </em>
                </p>
                <p>
                <em>
                    ILAB chose to highlight certain companies&rsquo; practices in this app based on extensive literature review and engagement in social compliance-focused 
                    fora. These companies have shown leadership in one or more areas of the app&rsquo;s “Steps.” These examples are illustrative and not exhaustive. Many 
                    other companies have also developed, or are developing, good practices in these areas that could also be shared. These examples are also snapshots 
                    in time, and ILAB recognizes that companies&rsquo; practices may change over time. ILAB welcomes{" "}
                    <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:GlobalKids@dol.gov?subject=Comments%20on%20Comply%20Chain%20App"
                                title="input from the public"
                            >
                                input from the public
                            </a>{" "}
                     on additional leadership practices 
                    that could be highlighted in the app.
                </em>
                <em>.</em>
            </p>
            <p>
                <em>
                This application was developed for USDOL/ILAB.
                </em>
            </p>
            <p>
            You may incorporate content from this app into your own materials, and we request that you attribute it to the Department of Labor&rsquo;s Comply Chain app.
            </p>

        </StaticData>
    );
};

export default en;
