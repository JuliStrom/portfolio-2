import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>
                    <h2><span>#</span>contacts</h2>
                </SectionTitle>
                <FlexWrapper direction={"row"} justify={'space-between'} wrap={'wrap'}>
                    <ContactsText>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </ContactsText>
                    <MessageMe>
                        <div>
                            <h5>Messege me here</h5>
                            <Icon width={"32px"} height={"32px"} iconId={'discord'}/>
                            <Link
                                href="https://discord.gg/!Elias#3519"
                                target="_blank"
                                rel="noopener noreferrer">!Elias#3519
                            </Link>
                        </div>


                    </MessageMe>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};
const StyledContacts = styled.section``

const SectionTitle = styled.h2``
const ContactsText = styled.p`
    max-width: 505px;
    height: auto;
`
const MessageMe = styled.div`
    border: 2px solid ${theme.colors.borderColor};
    width: 204px;
    height: auto;
`
const Link = styled.a`
    align-items: center;
`