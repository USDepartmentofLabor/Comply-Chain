import PropTypes from "prop-types";
import React, { Component } from "react";
import Accordion from "../Accordion";
import styled from "styled-components";

const Wrapper = styled(Accordion.Section)`
    & h3 {
        font-size: 17px;
    }
`;
class AccordionView extends Component {
    render() {
        const { sections, id, reset } = this.props;
        return (
            <Wrapper>
                <Accordion id={id} reset={reset}>
                    {sections.map((section, i) => {
                        return (
                            <Accordion.Section id={section.id} key={i}>
                                <Accordion.Title heading="h3">
                                    {section.title}
                                </Accordion.Title>
                                <Accordion.Panel>
                                    {section.content}
                                </Accordion.Panel>
                            </Accordion.Section>
                        );
                    })}
                </Accordion>
            </Wrapper>
        );
    }
}

AccordionView.propTypes = {
    id: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    reset: PropTypes.bool
};
export default AccordionView;
