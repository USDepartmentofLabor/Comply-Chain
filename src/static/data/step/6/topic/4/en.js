import React from "react";
import { Link } from "react-router-dom";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Where, When and How Should Training be Conducted?</h1>
                <p>
                    Some social compliance teams have in-house staff members who
                    develop training materials for their company&rsquo;s
                    program. Others contract out this function, or use training
                    materials developed by an industry or cross-industry group.
                    In some cases, it is also feasible and fruitful to engage
                    some stakeholder groups in training other stakeholder
                    groups. For example, vendors or agents can be trained, and
                    then be charged with training all the managers, supervisors
                    and human resources staff of the production facilities from
                    which they source. Trade unions can also play an important
                    role in developing training materials and raising awareness
                    among workers and/or communities on social compliance
                    issues.
                </p>
                <p>
                    Training for workers should be designed according to the
                    particular worker population. In a country or geographic
                    area where most workers have at least a basic education,
                    training may also be taught in a classroom setting using
                    written materials. However, there are industries and
                    geographic areas where a significant proportion of workers
                    may be illiterate or simply have very little experience in a
                    classroom. In such cases, training methods and materials
                    must be adapted to ensure that workers still capture the
                    necessary information. Specific training formats have been
                    developed for such populations, including films, graphical
                    materials, posters and other visuals.
                </p>
                <p>
                    In areas where many workers may lack basic education, some
                    companies choose to go beyond basic social compliance
                    training to offer literacy and numeracy education at the
                    worksite or scholarships for such education. These efforts
                    are often tied to the company&rsquo;s overall philanthropy
                    portfolio, discussed further in{" "}
                    <em>
                        <Link to="/steps/4/topic/9">
                        Assessing and Addressing Root Causes
                        </Link>
                    </em>.

                </p>
                <p>
                    Cultural norms are also a key consideration in designing
                    trainings. For instance, in some countries, men and women
                    must be seated separately or separated by a certain distance
                    within a room. In some cases, a trainer of a certain gender
                    may be more appropriate for a particular group. Issues like
                    eye contact and personal space are important for trainers to
                    understand. It is also critical to have an understanding of
                    teaching styles that are common in the area &ndash; for
                    instance, in many cultures, raising one&rsquo;s hand to
                    answer a question or having a group &ldquo;brainstorm&rdquo;
                    is unheard of.&nbsp;
                </p>
                <p>
                    Some companies also choose to tie their social compliance
                    training to other forms of training they may offer. In fact,
                    many companies have found that integrating social compliance
                    training into trainings on other topics like productivity,
                    quality assurance and industry-specific technical skills has
                    many benefits. Workers with improved skills are likely to be
                    valued more highly and treated better, and improved
                    workforce technical skills and productivity have concrete
                    impacts on producers and suppliers&rsquo; incomes, so the
                    trainings may be deemed more important by management and
                    supervisors.
                </p>
                
               
                <p>
                    Developing materials, scheduling training sessions, hiring
                    trainers and tracking training delivery are all significant
                    investments. There are various ways to structure financing
                    for your training program. Some companies simply choose to
                    allocate a large portion of their social compliance budget
                    to training and capacity building, believing that training
                    helps to prevent problems and ultimately saves money. Some
                    companies provide a core set of trainings free of charge,
                    but if code violations are found for which training is
                    required as part of remediation, the supplier then pays
                    those training costs. In some relationships, the
                    vendors/agents or suppliers handle all responsibilities
                    related to training, including all costs.
                </p>
                <ExampleInAction id="iloscore">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: ILO's Program for Sustaining Competitive and Responsible Enterprises (SCORE)
                        </strong>
                    </h2>
                    <p>
                    The ILO&rsquo;s Program for{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.ilo.org/empent/Projects/score/lang--en/index.htm"
                        title="Sustaining Competitive and Responsible Enterprises (SCORE)"
                    >
                        Sustaining Competitive and Responsible Enterprises
                        (SCORE)
                    </a>{" "}
                    a training program to increase the productivity of Small and
                    Medium Enterprises (SMEs) while promoting recognition of and
                    respect for the ILO&rsquo;s international labor standards
                    and improving working conditions. SCORE provides
                    &ldquo;training of trainers&rdquo; for government agencies,
                    industry associations and trade unions, and other
                    organizations, who then deliver the training program to
                    SMEs. SCORE is currently active in emerging economies
                    throughout Africa, Asia, and Latin America, and as of July 2019, over 2,100 SMEs have received SCORE Training in 11 countries, representing a total workforce of over 403,000 people.&nbsp;
                </p>
                </ExampleInAction>
                <br />
                <ExampleInAction id="cocoa">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        <strong>
                            Example in Action: The International Chocolate and
                            Cocoa Industry
                        </strong>
                    </h2>
                    <p>
                    Over the past decade, Industry funded the construction and 
                    rehabilitation of schools and provision of school supplies and 
                    other education support services in hundreds of communities in 
                    C&ocirc;te d&rsquo;Ivoire and Ghana.  In addition to implementing 
                    child labor awareness-raising activities, Industry supported child 
                    labor data collection and monitoring through community and supply 
                    chain-based child labor monitoring and remediation systems, 
                    including an ILO-IPEC project that developed and expanded 
                    community-based child labor monitoring systems. Industry s
                    upported activities to increase the incomes of households 
                    with at-risk children and provided supplementary funding to 
                    the International Cocoa Initiative to expand its work to implement 
                    community action plans, train community child protection committees 
                    and build classrooms. For more information, 
                        See the{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.worldcocoafoundation.org/wp-content/uploads/2018/08/CLCCG-2016-Annual-Report.pdf"
                            title="Child Labor Cocoa Coordinating Group&rsquo;s (CLCCG) 2016 Annual Report"
                        >
                            World Cocoa Foundation&rsquo;s* CocoaAction initiative
                        </a>
                        .
                    </p>
                </ExampleInAction>
                
            </div>
        </StaticData>
    );
};

export default en;
