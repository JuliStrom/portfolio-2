import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Icon} from "../../components/Icon";
import styled from "styled-components";
import {Logo} from "../../components/Logo";
import {theme} from "../../styles/Theme";

export const Footer:React.FC = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <ShotInfo>
                        <Logo />
                        <a href="/elias@elias-dev.ml">elias@elias-dev.ml</a>
                        <p>Web designer and front-end developer</p>

                    </ShotInfo>
                    <Media>
                        <h3>Media</h3>
                        <ul>
                            <li>
                                <a href="">
                                    <Icon width={'21px'} height={"20px"} viewBox={"0 0 21 20"} iconId={'github'}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon width={"23px"} height={"23px"} viewBox={"0 0 23 23"} iconId={'dribble'}/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon width={'16px'} height={"17px"} viewBox={"0 0 16 17"} iconId={'figma'}/>
                                </a>
                            </li>
                        </ul>
                    </Media>
                </FlexWrapper>
                <StyledCopyright>© Copyright 2022. Made by Elias</StyledCopyright>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter =styled.section`
    border-top: 1px solid ${theme.colors.borderColor};
    padding: 38px 0;
`

const ShotInfo = styled.div`
    a {
     padding-right: 24px;
 }
    p {
     margin-top: 16px;
 }
`
const Media = styled.div`
    
    ul {
        display: flex;
        flex-direction: row;
        gap: 15px;
        padding-top: 12px;
    }
    
`

const StyledCopyright = styled.p`
    margin-top: 48px;
    text-align: center;
    opacity: 0.5;
`