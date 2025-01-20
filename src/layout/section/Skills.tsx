import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import dotsSkill from "../../assets/img/DotsSkill.svg"
import rectangle52 from "../../assets/img/Rectangle52.svg"
import rectangle86 from "../../assets/img/Rectangle86.svg"
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";
import lines from "../../assets/img/Lines.svg";

export const Skills: React.FC = () => {
    return (
        <StyledSkill>
            <Container>
                <SectionTitle>
                    <h2><span>#</span>skills</h2>
                </SectionTitle>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                <ImageWrapper>
                        <img src={dotsSkill} alt={"dots skill"}/>
                        <img src={dotsSkill} alt={"dots skill2"}/>
                        <img src={rectangle52} alt={"rectangle 52*52"}/>
                        <img src={rectangle86} alt={"rectangle 86*86"}/>
                        <img src={lines} alt={"lines"}/>
                    </ImageWrapper>
                    <SkillsWrapper>
                        <Skill>
                            <h5>Languages</h5>
                            <p>TypeScript Lua Python JavaScript</p>
                        </Skill>
                        <Skill>
                            <h5>Databases</h5>
                            <p>SQLite PostgreSQL Mongo</p>
                        </Skill>
                        <Skill>
                            <h5>Tools</h5>
                            <p>VSCode Neovim Linux Figma XFCE Arch Git Font Awesome</p>
                        </Skill>
                        <Skill>
                            <h5>Frameworks</h5>
                            <p>React Vue Disnake Discord.js Flask Express.js</p>
                        </Skill>
                        <Skill>
                            <h5>Other</h5>
                            <p>HTML CSS EJS SCSS REST Jinja</p>
                        </Skill>
                    </SkillsWrapper>
                </FlexWrapper>

            </Container>
        </StyledSkill>
    )
}
const StyledSkill = styled.section``
const SectionTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 48px;
`
const ImageWrapper = styled.div`
    width: 349px;
    height: 282px;
    margin-left: 32px;
    position: relative;
    img:nth-child(1) {
        position: absolute;
        left: 0;
        top: 38px;
    }
    img:nth-child(2) {
        position: absolute;
        right: 109px;
        top: 132px;
    }
    img:nth-child(3) {
        position: absolute;
        right: 0;
        bottom: 37px;
    }
    img:nth-child(4) {
        position: absolute;
        right: 36px;
        top: 0;
    }
    img:nth-child(5) {
        position: absolute;
        width: 113px;
        left: 15px;
        bottom: 0;
    }
`
const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 584px;
    gap: 16px;
`
const Skill = styled.div`
    border: 2px solid ${theme.colors.borderColor};
    width: 178px;
    height: auto;
    padding: 8px 0;
    
    h5 {
        position: relative;
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.borderColor};
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}
    
        
`