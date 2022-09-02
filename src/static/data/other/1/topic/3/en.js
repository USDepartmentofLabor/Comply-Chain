import React from "react";
import OwnWords from "../../../../../../components/OwnWords";
import StaticData from "../../../../../../components/StaticData";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Company reputation </h1>
                <p>
                    <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.conecomm.com/research-blog/2016-millennial-employee-engagement-study"
                        >
                    Research
                    </a>
                    &nbsp;finds that consumers are increasingly attuned to issues of labor abuses, particularly in industries such as apparel, 
                    electronics, footwear, and agriculture (especially chocolate and coffee products.) Expos&eacute;s on social media revealing child 
                    labor, forced labor, or other degrading working conditions in a supply chain quickly reach consumers and damage a brand&rsquo;s 
                    reputation and adversely impact sales or stock prices.
                </p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon alt="Feedback"/> <strong>In Their Own Words: Apparel company benefits from its commitment to social responsibility</strong>
                        {""}
                    </h2>
                    <p>
                    Cotopaxi* is a B Corporation that creates sustainable and ethical apparel. In an interview with Forbes, members of Cotopaxi&rsquo;s 
                    leadership team discussed how a corporate reputation for socially responsible behavior has benefited their business:
                    </p>
                    <p>
                    &rdquo;Having a strong and authentic social mission can differentiate you from your competitors.… It can also help attract and 
                    retain great talent.… People want to be a part of a company and movement that helps others, and an authentic social mission can 
                    turn customers into loyal brand evangelists.&rdquo;
                    <br></br>
                    <em>—Davis Smith, Founder and CEO of Cotopaxi</em>
                    
                    </p>
                    <p>
                    &rdquo;[W]e have really great partnerships with our suppliers. They know that they can come to us, that we&rsquo;re going to treat them 
                    with respect and dignity. We&rsquo;re very open with them about our expectations—but they know they can come to us and say when they&rsquo;re 
                    not going to be able to meet an order without going massively over with additional overtime or subcontracting to another 
                    supplier.… [They are] not afraid of losing our business.… Understand that if you&rsquo;re experiencing really high levels of returns, poor 
                    standards of quality assurance, recalls in the form of, say automotive or tech, those are really strong indicators that you have 
                    labor and sustainability issues in your supply chain—and those are massive hits to company&rsquo;s bottom line.&rdquo;
                    <br></br>
                    <em>—Annie Agle, Senior Director–Impact and Sustainability of Cotopaxi</em>
                    </p>
                    <p>
                        Quotes excerpted from an{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.forbes.com/sites/simonmainwaring/2021/07/20/purpose-at-work-how-cotopaxis-purpose-moves-people-products-and-mountains/?sh=1839ecc63884"
                            title="interview published by Forbes in 2021"
                        >
                    interview published by Forbes in 2021
                    </a>
                    . 
                    </p>
                </OwnWords>
            </div>
        </StaticData>
    );
};

export default en;
