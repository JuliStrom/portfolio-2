import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import skillGroup from "../../assets/img/skillGroup.svg"
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Skills: React.FC = () => {
    return (
        <StyledSkill>
            <Container>
                <SectionTitle>
                    <span>#</span>skills
                </SectionTitle>
                <FlexWrapper justify={'space-between'}>
                <ImageWrapper>
                        <img src={skillGroup} alt={"dots lines"}/>
                </ImageWrapper>
                    {/*<FlexWrapper>*/}
                        <SkillsWrapper>
                            <Skill>
                                <h5>Tools</h5>
                                <p>VSCode Neovim Linux Figma XFCE Arch Git Font Awesome</p>
                            </Skill>
                            <Skill>
                                <h5>Frameworks</h5>
                                <p>React Vue Disnake Discord.js Flask Express.js</p>
                            </Skill>
                            <Skill>
                                <h5>Databases</h5>
                                <p>SQLite PostgreSQL Mongo</p>
                            </Skill>
                            <Skill>
                                <h5>Languages</h5>
                                <p>TypeScript Lua Python JavaScript</p>
                            </Skill>


                            <Skill>
                                <h5>Other</h5>
                                <p>HTML CSS EJS SCSS REST Jinja</p>
                            </Skill>

                        </SkillsWrapper>
                    {/*</FlexWrapper>*/}

                </FlexWrapper>
            </Container>
        </StyledSkill>
    )
}
const StyledSkill = styled.section`
    @media screen and (max-width: 902px) {
        ${FlexWrapper} {
            justify-content: center;
            gap: 0; 
        }
    }
`
const SectionTitle = styled.h2`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 48px;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: ${theme.colors.accent};
        width: 20vw;
        left: 200px;
        top: 50%;
    }
`
const ImageWrapper = styled.div`
    max-width: 349px;
    margin-left: 32px;
    flex-shrink: 5;
    transition: transform 0.5s ease, opacity 0.5s ease;
    
    @media screen and (max-width: 990px) {
        transform: scale(0.8);
        opacity: 0.4;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`
const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap-reverse;
    max-width: 585px;
    height: 302px;
    gap: 14px 16px;
    @media screen and (max-width: 980px) {
        width: 406px;
        height: 350px;
    }
    
    @media ${theme.media.mobile} {
        min-width: 360px;
        margin-top: 20px;
    }
`

const Skill = styled.div`
    border: 2px solid ${theme.colors.borderColor};
    width: 178px;
    height: fit-content;
    padding: 8px 8px;
    position: relative;
    @media ${theme.media.tablet} {
        //min-width: 70vw;
    }
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.borderColor};
        position: absolute;
        top: 32px;
        left: 0;
    }
   p {
        padding-top: 14px;
   }
    
`