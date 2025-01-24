import styled from "styled-components";
import React from "react";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const items = [
    {   title: "home",
        href: "home"
    },
    {   title: "works",
        href: "works"
    },
    {   title: "about-me",
        href: "about-me"
    },
    {   title: "contacts",
        href: "contacts"
    }]
export const Menu: React.FC = () => {
    return (
        <DesktopMenu>
            <ul>
                {items.map((item, index) => {
                    return <StyledMenuItem key={index}>
                        <StyledLink href="">
                            <span>#</span>
                            <NavLink to={item.href} smooth={true}>{item.title}</NavLink>
                        </StyledLink>
                    </StyledMenuItem>
                })}
                <SelectLang>
                    <option value={"en"} selected>EN</option>
                    <option value={"ru"}>RU</option>
                </SelectLang>
            </ul>

        </DesktopMenu>

    );
};
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`
const StyledLink = styled.a`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    span {
        color: ${theme.colors.accent};
    }
`
const StyledMenuItem = styled.li``
const SelectLang = styled.select`
    background: none;
    color: ${theme.colors.font};
    border: none;
`
const NavLink = styled(Link)``