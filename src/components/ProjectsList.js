import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const workspace = {
    project_name: 'WorkSpace',
    project_description: 'Designed a web app where users can save open office spaces posted by users to meet the office needs of remote workers.',
    project_tech_stack: 'React | JavaScript | Node | Express | Redux | CSS | HTML',
    project_url: 'https://workspace-zeta.vercel.app/',
    project_img: '/workspace_image.png'
};

const levelup = {
    project_name: 'LevelUp: AI Tools for LinkedIn',
    project_description: 'A chrome extension that uses AI to help users level up their networking on LinkedIn.',
    project_tech_stack: 'React | JavaScript | OpenAI API | Chrome Extension API',
    project_url: 'https://chromewebstore.google.com/detail/levelup-ai-tools-for-link/ioomjennaofikknjjjbnnofkaloknbel',
    project_img: '/LevelUpHome.png'
};

const resume = {
    project_name: 'Resume',
    project_description: 'Check it out!',
    project_tech_stack: 'You can see my resume',
    project_url: 'Alex_Hoskins_Resume.pdf',
    project_img: "markus-winkler-7iSEHWsxPLw-unsplash.jpg"
};

const myProjects = [levelup, workspace, resume];

const ProjectList = () => {
    return (
        <ProjectsSection>
            <ProjectsContainer>
                <SectionTitle>Featured Projects</SectionTitle>
                <ProjectsGrid>
                    {myProjects.map((proj, index) => (
                        <Project
                            key={index}
                            project_name={proj.project_name}
                            project_description={proj.project_description}
                            project_tech_stack={proj.project_tech_stack}
                            project_url={proj.project_url}
                            project_img={proj.project_img}
                        />
                    ))}
                </ProjectsGrid>
            </ProjectsContainer>
        </ProjectsSection>
    );
};

export default ProjectList;

// Styled Components
const ProjectsSection = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-color: #ffffff;
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

const ProjectsContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const SectionTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #4299e1;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    text-align: center;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
`;

