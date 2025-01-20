import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import mainPhoto from "../../assets/img/imgMain.png"
import dots from "../../assets/img/Dots.svg"
import lines from "../../assets/img/Lines.svg"
import {theme} from "../../styles/Theme";

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <h2>Elias is a <strong>web designer</strong> and <br/><strong> front-end developer</strong></h2>
                        <p>He crafts responsive websites where technologies <br/>meet creativity</p>
                        <button>Contact me!!</button>
                    </div>
                    <PhotoHolder>
                        <Dots src={dots} alt="Dots"/>
                        <Lines src={lines} alt="Line Line"/>
                    </PhotoHolder>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
    
    p {
        padding-top: 32px;
        padding-bottom: 24px;
    }
    strong {
        color: ${theme.colors.accent};
    }
    button {
        padding: 6px 18px;
    }
    @media screen and (max-width: 928px) {
        ${FlexWrapper} {
            justify-content: center;
            margin: 10px;
        }
    }`
    
const PhotoHolder = styled.div`
    position: relative;
    width: 457px;
    height: 386px;
    background-image: url(${mainPhoto});
    background-repeat: no-repeat;
    background-position: 50px 20px;
    z-index: 10;
    @media ${theme.media.mobile} {
        width: 316px;
        background-position: -70px -5px;
        
    }
`
const Dots = styled.img`
    position: absolute;
    max-width: 84px;
    max-height: 84px;
    bottom: 56px;
    right: 16px;
    @media ${theme.media.mobile} {
        width: 56px;
        height: 56px;
        bottom: 38px;
        right: 11px;
    }
`
const Lines = styled.img`
    position: absolute;
    max-width: 155px;
    max-height: 155px;
    top: 84px;
    left: -12px;
    z-index: 5;
    @media ${theme.media.mobile} {
        width: 104px;
        height: 104px;
        top: 82px;
        left: 20px;
    }
`

