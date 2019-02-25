import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accordion, Icon } from "semantic-ui-react";

class AccordionView extends Component {
    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex });
    };
    render() {
        const { activeIndex } = this.state;
        const { sections } = this.props;
        return (
            <Accordion styled fluid>
                {sections.map((section, i) => {
                    return (
                        <div key={i}>
                            <Accordion.Title
                                active={activeIndex === i}
                                index={i}
                                onClick={this.handleClick}
                            >
                                {section.title}
                                <Icon name="dropdown" />
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === i}>
                                {section.content}
                            </Accordion.Content>
                        </div>
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
