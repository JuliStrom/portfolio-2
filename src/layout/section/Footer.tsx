import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {Icon} from "../../components/Icon";
import styled from "styled-components";
import {Logo} from "../../components/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <ShotInfo>
                        <Logo/>
                        <a href="/elias@elias-dev.ml">elias@elias-dev.ml</a>
                        <p>Web designer and front-end developer</p>

                    </ShotInfo>
                    <Media><h3>Media</h3>
                        <a href="">
                            <Icon width={'21px'} height={"20px"} viewBox={"0 0 21 20"} iconId={'github'}/>
                        </a>
                        <a href="">
                            <Icon width={"23px"} height={"23px"} viewBox={"0 0 23 23"} iconId={'dribble'}/>
                        </a>
                        <a href="">
                            <Icon width={'16px'} height={"17px"} viewBox={"0 0 16 17"} iconId={'figma'}/>
                        </a>
                    </Media>

                </FlexWrapper>
                <StyledCopyright>© Copyright 2022. Made by Elias</StyledCopyright>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter =styled.section`
`
const ShotInfo = styled.div``
const Media = styled.div`
`
const StyledCopyright = styled.p`
    text-align: center;
    opacity: 0.5;
`