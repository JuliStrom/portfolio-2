import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {Logo} from "../../components/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./Menu";
import {Icon} from "../../components/Icon";
import React from "react";
import {MobileMenu} from "./MobileMenu";

const items = ["home", "works", "about-me", "contacts"]

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <Media>
                    <Icon width={'2px'} height={"191px"} iconId={'lineVertical'}/>
                    <Link href="">
                        <Icon width={'21px'} height={"20px"} viewBox={"0 0 21 20"} iconId={'github'}/>
                    </Link>
                    <Link href="">
                        <Icon width={"23px"} height={"23px"} viewBox={"0 0 23 23"} iconId={'dribble'}/>
                    </Link>
                    <Link href="">
                        <Icon width={'16px'} height={"17px"} viewBox={"0 0 16 17"} iconId={'figma'}/>
                    </Link>
                </Media >
                <FlexWrapper justify="space-between" align={"center"} >
                    <Logo/>
                    <Menu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    padding: 32px 0 8px;
    max-width: 1024px;
    width: 100%;
    height: 61px;
    //position: fixed;
    top: 0;
    z-index: 88888;
    margin: 0 auto;
    @media ${theme.media.tablet} {
        padding: 16px 16px 8px 16px;
        height: 48px;
    }
`
const Link = styled.a``
const Media = styled.div`
    width: 32px;
    height: 311px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 30px;
    @media screen and (max-width: 1150px) {
        display: none;
    }
`