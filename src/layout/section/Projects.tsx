import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import projectChertNodes from "../../assets/img/chertNodes.png"
import projectProtectX from "../../assets/img/protectX.png"
import projectKahoot from "../../assets/img/kahoot.png"
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {LinkButton} from "../../components/LinkButton";


export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>
                    <h2><span>#</span>projects</h2>
                    <Link href="/projects">View all ~~&gt;</Link>
                </SectionTitle>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Project>
                        <ProjectImg src={projectChertNodes} alt="progectChertNodes" />
                        <ProgramUse>
                            <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>Python</li>
                                <li>Flask</li>
                            </ul>
                        </ProgramUse>
                        <ProjectDescription>
                            <h3>ChertNodes</h3>
                            <p>Minecraft servers hosting </p>
                            <LinkButton>Live &lt;~&gt;</LinkButton>
                            <LinkButton>Cached &gt;=</LinkButton>
                        </ProjectDescription>

                    </Project>
                    <Project>
                        <ProjectImg src={projectProtectX} alt="progectprotectX" />
                        <ProgramUse>
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>Discord.js</li>
                                <li>Node.js</li>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>Python</li>
                                <li>Flask</li>
                            </ul>
                        </ProgramUse>
                        <ProjectDescription>
                            <h3>ProtectX</h3>
                            <p>Discord anti-crash bot</p>
                            <LinkButton>Live &lt;~&gt;</LinkButton>
                        </ProjectDescription>
                    </Project>
                    <Project>
                        <ProjectImg src={projectKahoot} alt="progect Kahoot" />
                        <ProgramUse>
                            <ul>
                                <li>CSS</li>
                                <li>Express</li>
                                <li>Node.js</li>
                            </ul>
                        </ProgramUse>
                        <ProjectDescription>
                            <h3>Kahoot Answers Viewer</h3>
                            <p>Get answers to your kahoot quiz</p>
                            <LinkButton>Live &lt;~&gt;</LinkButton>
                        </ProjectDescription>

                    </Project>
                </FlexWrapper>
            </Container>


        </StyledProjects>
    );
};
const StyledProjects = styled.section`
    ${FlexWrapper} {
        justify-content: space-around;
        
    }`
const Link = styled.a``
const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        height: 2px;
        width: 40vw;
        background-color: ${theme.colors.accent};
    }
`
const Project = styled.div`
    border:2px solid ${theme.colors.borderColor};
    max-width: 330px;
    width: 100%;
`
const ProjectImg = styled.img`
    max-width: 100%;
    object-fit: cover;
`

const ProgramUse = styled.div`
   
   ul {
       display: flex;
       justify-content: flex-start;
       gap: 8px;
       padding: 8px;
       flex-wrap: wrap;
   }
    
`
const ProjectDescription = styled.div`
    border:2px solid ${theme.colors.borderColor};
    padding: 16px 16px;
    ${LinkButton} {
        margin-left: 16px;
    }
    
`