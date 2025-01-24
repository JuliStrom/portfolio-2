import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/Icon";

export const Contacts = () => {
    return (
        <StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>
                    <span>#</span>contacts
                </SectionTitle>
                <FlexWrapper direction={"row"} justify={'space-between'} wrap={'wrap'}>
                    <ContactsText>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </ContactsText>
                    <MessageMeBox>
                        <h5>Message me here</h5>
                        <DiscordBox>
                            <Icon width={"32px"} height={"32px"} iconId={'discord'}/>
                            <Link
                                href="https://discord.gg/!Elias#3519"
                                target="_blank"
                                rel="noopener noreferrer">!Elias#3519
                            </Link>
                        </DiscordBox>
                        <EmailBox>
                            <Icon width={"32px"} height={"32px"} iconId={'email'}/>
                            <Link
                                href="mailto:elias@elias.me"
                                target="_blank"
                                rel="noopener noreferrer">elias@elias.me
                            </Link>
                        </EmailBox>


                    </MessageMeBox>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
            gap:30px;
            margin: 10px;
        }`

const SectionTitle = styled.h2`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: ${theme.colors.accent};
        width: 20vw;
        left: 200px;
        top: 50%;
    }`
const ContactsText = styled.p`
    max-width: 505px;
    margin-top: 45px;
    height: auto;
`
const MessageMeBox = styled.div`
    border: 2px solid ${theme.colors.borderColor};
    width: 204px;
    height: auto;
    padding: 16px;
`
const Link = styled.a`
   `
const DiscordBox = styled.div`
    margin-top: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
`
const EmailBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`