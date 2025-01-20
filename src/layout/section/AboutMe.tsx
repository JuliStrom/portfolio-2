import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import dots from "../../assets/img/Dots.svg";
import man from "../../assets/img/man.png"
import {theme} from "../../styles/Theme";

function Dots(props: { src: {}, alt: string }) {
    return null;
}

export const AboutMe = () => {
    return (
        <StyledAboutMe>
                <Container>
                   <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                        <AboutMeText>
                            <FlexWrapper align={"flex-start"} direction={'column'} justify={'space-between'}>
                                <h2><span>#</span>about-me</h2>
                                <p>Hello, i’m Elias!</p>
                                <p> I’m a self-taught front-end developer based in Kyiv,
                                    Ukraine. I can develop responsive websites from scratch and raise them into modern
                                    user-friendly web
                                    experiences.</p>
                                <p>Transforming my creativity and knowledge into a websites has been my passion for over
                                    a year. I have been helping various clients to establish their presence online. I
                                    always strive to learn about the newest technologies and frameworks.</p>
                                <button>Contact me!!</button>
                            </FlexWrapper>
                        </AboutMeText>

                        <AboutMeImage>
                            <Dots src={dots} alt="Dots"/>

                        </AboutMeImage>

                    </FlexWrapper>
                </Container>
        </StyledAboutMe>
    );
};
const StyledAboutMe = styled.section`
    ${FlexWrapper} {
        gap: 27px;
        height: auto;
    }
`
const AboutMeText = styled.div`
    width: 515px;
    `
const AboutMeImage = styled.div`
    width: 339px;
    height: 507px;
    background-image: url(${man});
    position: relative;
    &::after {
        content: '';
        height: 1px;
        width: 271px;
        position: absolute;
        bottom: 0;
        right: 15px;
        background-color: ${theme.colors.accent};
        z-index: 999999;
    }
`