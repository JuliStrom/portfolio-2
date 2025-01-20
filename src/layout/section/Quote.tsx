import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import hugUp from '../../assets/img/“.svg'
import hugDown from '../../assets/img/“.svg'

export const Quote = () => {
    return (
        <StyledQuote>
            <QuoteWrapper>
                <QuoteText>
                    <img src={hugUp} alt="Hug up"/>
                    <img src={hugDown} alt="Hug down"/>
                    <h4>With great power comes great electricity bill</h4>
                </QuoteText>
                <QuoteAuthor>
                <h5>- Dr.Who</h5>
                </QuoteAuthor>
            </QuoteWrapper>
        </StyledQuote>

    );
};

const StyledQuote = styled.section`
    max-width: 1024px;
    margin: 0 auto;
    padding: 112px;
`
const QuoteWrapper = styled.div`
    max-width: 712px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    
`

const QuoteText =styled.div`
    
    border: 2px solid ${theme.colors.borderColor};
    padding: 32px;
    position: relative;
    img:first-child {
        position: absolute;
        left: 11px;
        top: -14px;
        z-index: 9;
    }
    img:nth-child(2) {
        position: absolute;
        right: 15px;
        bottom: -10px;
        z-index: 9;
    }
`
const QuoteAuthor = styled.div`
    border: 2px solid ${theme.colors.borderColor};
    padding: 16px;
    width: 162px;
`
