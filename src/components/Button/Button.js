import styled from "styled-components";
import { theme } from "../../modules/config/theme";
import { darken } from "polished";

const borderLine = "2px solid";

const variant = {
    primary: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        border: "none",
        hover: {
            backgroundColor: darken(0.05, theme.colors.primary),
            border: "none"
        },
        active: {
            backgroundColor: darken(0.01, theme.colors.primary),
            border: "none"
        }
    },
    primaryDarker: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primaryDarker,
        border: "none",
        hover: {
            backgroundColor: darken(0.05, theme.colors.primaryDarker),
            border: "none"
        },
        active: {
            backgroundColor: darken(0.01, theme.colors.primaryDarker),
            border: "none"
        }
    },
    primaryDarkest: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primaryDarkest,
        border: "none",
        hover: {
            backgroundColor: darken(0.05, theme.colors.primaryDarkest),
            border: "none"
        },
        active: {
            backgroundColor: darken(0.01, theme.colors.primaryDarkest),
            border: "none"
        }
    },
    secondary: {
        color: theme.colors.primary,
        backgroundColor: theme.colors.white,
        border: `${borderLine} ${theme.colors.primary}`,
        hover: {
            backgroundColor: theme.colors.white,
            border: `${borderLine} ${darken(0.05, theme.colors.primary)}`
        },
        active: {
            backgroundColor: theme.colors.white,
            border: `${borderLine} ${darken(0.3, theme.colors.primary)}`
        }
    }
};

const Button = styled.button`
    color: ${props =>
        (props.variant && props.variant && variant[props.variant].color) ||
        variant.primary.color};
    background-color: ${props =>
        (props.variant &&
            props.variant &&
            variant[props.variant].backgroundColor) ||
        variant.primary.backgroundColor};

    border: ${props =>
        (props.variant && props.variant && variant[props.variant].border) ||
        variant.primary.border};

    border-radius: 4px;
    padding: 15px 32px;
    display: inline-block;
    font-size: 1em;
    font-weight: bold;

    svg {
        vertical-align: middle;
    }

    &:hover {
        background-color: ${props =>
            (props.variant && variant[props.variant].hover.backgroundColor) ||
            variant.primary.hover.color};

        border: ${props =>
            (props.variant && variant[props.variant].hover.border) ||
            variant.primary.hover.border};
    }

    &:active {
        background-color: ${props =>
            (props.variant && variant[props.variant].active.backgroundColor) ||
            variant.primary.active.backgroundColor};

        border: ${props =>
            (props.variant && variant[props.variant].active.border) ||
            variant.primary.active.border};
    }
`;
export default Button;
