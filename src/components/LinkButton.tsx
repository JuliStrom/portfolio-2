import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const LinkButton = styled.a<{active?: boolean}>`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 8px 16px;
    border: 2px solid ${theme.colors.borderColor};
    color: ${theme.colors.font};
    cursor: pointer;
    
    &:hover {
        border: 3px solid ${theme.colors.accent};
    }
    &:active {
        background-color: rgba(199, 120, 221, 0.2);;
    }
    

    ${props => props.active && css<{active?: boolean}>`
        border: 2px solid ${theme.colors.accent};
    `}
`