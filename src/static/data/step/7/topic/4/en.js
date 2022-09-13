import React from "react";
import ExampleInAction from "../../../../../../components/ExampleInAction/ExampleInAction";
import StaticData from "../../../../../../components/StaticData";
import usDol from "../../../../../images/usdol.jpg";

const en = () => {
    return (
        <StaticData>
            <div>
                <h1>Scheduling Audits</h1>
                <p>If you are part of an industry or multi-industry group, the group&rsquo;s systems and processes may drive when and how you schedule audits. If you are pursuing a social compliance system on your own, you will have several decisions to make in scheduling your audits.</p>
                <p>First, if auditing is part of a prescreening or preregistration process (i.e., if you require potential suppliers to obtain a passing score on an audit before you will place your first order), you will schedule audits with these facilities as soon as you believe they are ready, based on their experience with audits and the training they have received. Once the supplier has passed the audit and has been registered to supply to the company, audits should be repeated on a periodic basis, depending on the findings of the audit.</p>
                <ExampleInAction id="prereg">
                    <h2>
                        <ExampleInAction.Icon alt="Lightbulb"/>
                        Example in Action: Pre-Registration Processes
                    </h2>
                    <p>Many companies require a new supplier to earn a passing score on a social audit before the company will place any orders with that supplier. Typically, the company provides training to prepare the supplier for the audit or may expect a vendor or agent to provide training to suppliers. Once a supplier passes an audit, some companies will then register each supplier in the social compliance information system; other companies&rsquo; information systems are web-based and allow suppliers to register themselves.</p>
                    <p>For example, Target Corporation* requires all vendors that supply Target-branded products to complete a human rights and compliance assessment as part of the registration process. If a vendor proposes to source from a supplier that has a history of social compliance violations, Target requires a completed corrective action plan to remediate the violations before production begins. For more information, see <a href="https://corporate.target.com/corporate-responsibility/responsible-sourcing/social-compliance/standards-of-vendor-engagement">Target&rsquo;s Standards of Vendor Engagement</a>.</p>
                </ExampleInAction>
                <p>Companies with vast supply chains or dispersed suppliers typically conduct audits on a sampling basis. This is common with audits of agricultural producers, for example. Your sample should be random and statistically representative.</p>
                <p>Audits should be scheduled at times when code violations are most likely to occur. For example, in agriculture, child labor may be most likely to occur at harvest time. In manufacturing, labor issues are most likely to occur when facilities are at maximum production levels. Your risk assessment should provide information to feed into these determinations.</p>
                <p>Auditing of your supply chain should also be scheduled regularly. However, your audit team should also be ready to react quickly if a grievance is received regarding a particular worksite.</p>
                <p>Some companies allow suppliers to conduct their own self-audits, during which suppliers evaluate their own performance using the audit tools and report it to the company. Typically, companies may allow this for suppliers who have established a pattern of excellent performance on audits or for suppliers located in countries where the government has shown a pattern of effective labor law enforcement. It is still advisable to reserve the right to conduct additional audits on such suppliers. Self-auditing has the advantage of raising the capacity of suppliers; however, results of self-auditing should still be verified by an independent party.</p>
            </div>
        </StaticData>
    );
};

export default en;
