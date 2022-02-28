import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../modules/config/theme";
import { storage } from "../../../../modules/storage";
import { isAndroid, isBrowser, isIOS } from "../../../../modules/utils/platform"; 

const Wrapper = styled.ul`
    list-style: none;
`;

const Topic = styled.li`
    color: ${props =>
        props.checked ? theme.colors.primaryDarker : theme.colors.primary};
    & a {
        color: ${props =>
            props.checked ? theme.colors.primaryDarker : theme.colors.primary};
    }
`;

const UnicodeCheckBox = styled.span`
    &::before {
        content: "${props => (props.checked ? "\\2713" : "\\2713")}";
        padding-right: 7px;
        font-size: 1em;
    }
`;
const UnicodeCheckBox2 = styled.span`
    &::before {
        content: "${props => (props.checked ? "\\25A1" : "\\25A1")}";
        padding-right: 7px;
        font-size: 1em;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
`;

class TopicsList extends Component {
    render() {
        const { step, topics } = this.props;
        console.log("!!!!!!!!!!!!!!!!!!!!!")
        console.log(step);
        console.log(topics);
        return (
            <div>
                <br></br>
            <div>
                {topics.map((topic, i) => {
                    const topicId = i + 1;
                    const checked = storage.steps.isTopicComplete(step - 1, i);
                    if(isAndroid()){
                        return (
                            <div>
                                {checked?<UnicodeCheckBox aria-hidden="false" aria-label = {checked?"Reviewed":"Not Reviewed"} className={`topicList ${checked ? "checked" : ""}` }></UnicodeCheckBox>:<UnicodeCheckBox2 aria-hidden="false" aria-label = {checked?"Reviewed":"Not Reviewed"} className={`topicList ${checked ? "checked" : ""}`}></UnicodeCheckBox2>}
                                {(step == 11 || step ==12)?
                                    (<StyledLink to={`/othersteps/${step}/topic/${topicId}`}>
                                    {topic.title}
                                    </StyledLink>):
                                    (<StyledLink to={`/steps/${step}/topic/${topicId}`}>
                                    {topic.title}
                                    </StyledLink>)
                                }
                                
                                <br></br>
                            </div>
                        );
                    }else{
                        console.log("*****************");
                        return (
                            <div>
                                {checked?<UnicodeCheckBox aria-hidden="true" className={`topicList ${checked ? "checked" : ""}` }></UnicodeCheckBox>:<UnicodeCheckBox2 aria-hidden="true"  className={`topicList ${checked ? "checked" : ""}`}></UnicodeCheckBox2>}
                                {
                                (step==11||step==12)?
                                (<StyledLink aria-label={ checked ? "Reviewed " + topic.title : "Not Reviewed " + topic.title} to={`/othersteps/${step}/topic/${topicId}`} >
                                    {topic.title}
                                </StyledLink>):(<StyledLink aria-label={ checked ? "Reviewed " + topic.title : "Not Reviewed " + topic.title} to={`/steps/${step}/topic/${topicId}`} >
                                    {topic.title}
                                </StyledLink>)}
                                <br></br>
                            </div>
                        );
                    }
                })}
            </div>
            </div>
        );
    }
}

TopicsList.propTypes = {
    step: PropTypes.number.isRequired,
    topics: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TopicsList;
