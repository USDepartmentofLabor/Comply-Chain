import React from "react";
import OwnWords from "../../../../../components/OwnWords";

const en = () => {
    return (
        <div>
            <p>
                <OwnWords>
                    <h2>
                        <OwnWords.Icon />
                        <strong>In Their Own Words</strong>
                    </h2>
                    <p>
                        The responsibility to respect human rights requires that
                        business enterprises have in place policies and
                        processes through which they can both know and show that
                        they respect human rights in practice. Showing involves
                        communication, providing a measure of transparency and
                        accountability to individuals or groups who may be
                        impacted and to other relevant stakeholders, including
                        investors.
                    </p>
                    <p>
                        Communication can take a variety of forms, including
                        in-person meetings, online dialogues, consultation with
                        affected stakeholders, and formal public reports. Formal
                        reporting is itself evolving, from traditional annual
                        reports and corporate responsibility/sustainability
                        reports, to include on-line updates and integrated
                        financial and non-financial reports.
                    </p>
                    <p>
                        <em>
                            Source:{" "}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.ohchr.org/Documents/Publications/GuidingPrinciplesBusinessHR_EN.pdf"
                                title="United Nations Guiding Principles on Business and Human Rights"
                            >
                                United Nations Guiding Principles on Business
                                and Human Rights
                            </a>
                            , 2011.
                        </em>
                    </p>
                </OwnWords>
            </p>
        </div>
    );
};

export default en;
