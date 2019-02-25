import PropTypes from "prop-types";
import React, { Component } from "react";
import Accordion from "../Accordion";

class AccordionView extends Component {
    render() {
        const { sections } = this.props;
        return (
            <Accordion>
                {sections.map((section, i) => {
                    return (
                        <Accordion.Section key={i}>
                            <Accordion.Title onClick={this.handleClick}>
                                {section.title}
                            </Accordion.Title>
                            <Accordion.Panel>{section.content}</Accordion.Panel>
                        </Accordion.Section>
                    );
                })}
            </Accordion>
        );
    }
}

AccordionView.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default AccordionView;
