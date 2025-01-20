import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

const MobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 25px;
    right: 30px;
    width: 24px;
    height: 24px;
    z-index: 9999999;
    border: none;

    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.burger};
        position: relative;
        transform: translateY(-6px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        `}
        &::after {
            content: "";
            height: 2px;
            position: absolute;
            right: 0;
            width: 18px;
            background-color: ${theme.colors.burger};
            transform: translateY(7px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
        width: 24px;
        transform: rotate(-90deg) translateY(0);
        `}
        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    
    padding: 5px;
    background-color: ${theme.colors.primaryBg};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: none;
   
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-evenly;
        `}
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 16px;
        margin-top: 50px;
}
`
const Link = styled.a`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 32px;
    span {
        color: ${theme.colors.accent};
    }
`
const MenuItem = styled.li`
    line-height: 3.6em;
`
const SelectLang = styled.select`
    font-weight: 600;
    font-size: 32px;
    width: 70px;
    background: none;
    color: ${theme.colors.font};
    border: none;
`
const MobileMedia = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
`
export const S = {
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    Link,
    MenuItem,
    SelectLang,
    MobileMedia
}