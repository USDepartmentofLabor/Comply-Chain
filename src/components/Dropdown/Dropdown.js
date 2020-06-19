import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Wrapper = styled.div`
    float: left;
    overflow: hidden;
`;

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.currentFocusRef = React.createRef();
      }
    state = { active: false};

    componentWillMount(props) {

         document.addEventListener("keydown", this.handleKeyPress, false);

        if (window.PointerEvent) {
            document.addEventListener("pointerdown", this.handleClick, false);
        } else {
            document.addEventListener("mousedown", this.handleClick, false);
        }
}

    componentWillUnmount() {
        if (window.PointerEvent) {
            document.removeEventListener("pointerdown",this.handleClick,false);
        } else {
            document.removeEventListener("mousedown", this.handleClick, false);
        }
    }
    handleKeyPress = e => {

    if ((this.state.active)&&(e.keyCode === 13)) {
                   console.log('THIS.PROPS.ID ==', this.props.id);
                  return this.setState({ active: false });
    }
    if ((e.target.innerText === "Share")&&(e.keyCode === 13)) {
                this.setState({ active: !this.state.active });
    }
    };

    handleClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.setState({ active: false });
    };

    toggleActive = (e) => {
            this.setState({ active: !this.state.active });
    };

    generatePropsForChild = child => {
        const { up } = this.props;
        const { active } = this.state;
        if (child.type.displayName === "Title") {
            return React.cloneElement(child, {
                onFocus: this.onFocus,
                onClick: this.toggleActive
            });
        }

        if (child.type.displayName === "Content") {
            if (!active) {
                return null;
            }
            return React.cloneElement(child, {
                onFocus: this.onFocus,
                onClick: this.toggleActive,
                up
            });
        }

        return child;
    };



    isFocussed = (e) => {
     if (e.target == this.node) {
            console.log('Focussed on Share');
            return true;
        }

     }
    render() {
        const { children, id, className } = this.props;
        const {sampleObj} = document.activeElement;

        return (
            <Wrapper
                id={id}
                className={className}
                ref={div => (this.node = div)
                }

            >
                {React.Children.map(children, (child, i) => {
                    if (child.type.displayName === "div") {
                        return React.Children.map(
                            child.props.children,
                            gchild => {
                                return this.generatePropsForChild(gchild);
                            }
                        );
                    }
                    return this.generatePropsForChild(child);
                })}
            </Wrapper>
        );
    }
}

Dropdown.Title = styled.div`
    cursor: pointer;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
`;

Dropdown.Title.displayName = "Title";

Dropdown.Content = styled.div`
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    bottom: ${props => (props.up ? "100%" : null)};
`;

Dropdown.Content.displayName = "Content";

Dropdown.Item = styled.div`
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;

    &:hover {
        background-color: #ddd;
    }
`;

Dropdown.Item.displayName = "Item";

Dropdown.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    up: PropTypes.bool
};

export default Dropdown;
