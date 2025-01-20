import React from 'react';
import {Container} from "../../Container";
import {FlexWrapper} from "../../FlexWrapper";
import projectChertNodes from "../../../assets/img/chertNodes.png";
import {LinkButton} from "../../LinkButton";
import projectProtectX from "../../../assets/img/protectX.png";
import projectKahoot from "../../../assets/img/kahoot.png";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
// import {Header} from "../../../layout/header/Header";

export const ProjectsPage = () => {
    return (
        //<Header />
        <StyledProjectsPage>
            <Container>
                <SectionTitle>
                    <h2><span>/</span>projects</h2>
                    <p>List of my projects</p>
                </SectionTitle>
                <FlexWrapper justify={"space-"} align={"flex-start"} wrap={"wrap"}>
                    <SectionTitle>
                        <h2><span>#</span>complete-apps</h2>
                    </SectionTitle>
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
                            <LinkButton active>Live &lt;~&gt;</LinkButton>
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
                <FlexWrapper justify={"space-"} align={"flex-start"} wrap={"wrap"}>
                    <SectionTitle>
                        <h2><span>#</span>small-projects</h2>

                    </SectionTitle>
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
                            <LinkButton active>Live &lt;~&gt;</LinkButton>
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
        </StyledProjectsPage>
    );
};
const StyledProjectsPage = styled.section`
    ${FlexWrapper} {
        gap: 16px;
    }`
const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
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