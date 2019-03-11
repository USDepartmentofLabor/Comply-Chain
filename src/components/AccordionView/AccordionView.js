import PropTypes from "prop-types";
import React, { Component } from "react";
import Accordion from "../Accordion";

class AccordionView extends Component {
    render() {
        const { sections, id, pdf } = this.props;
        return (
            <Accordion id={id} pdf={pdf}>
                {sections.map((section, i) => {
                    return (
                        <Accordion.Section id={section.id} key={i}>
                            <Accordion.Title>{section.title}</Accordion.Title>
                            <Accordion.Panel>{section.content}</Accordion.Panel>
                        </Accordion.Section>
                    );
                })}
            </Accordion>
        );
    }
}

AccordionView.propTypes = {
    id: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    pdf: PropTypes.bool
};
export default AccordionView;
