import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const leveo = {
    project_name: 'Leveo',
    project_description: "An AI-powered Chrome extension and command center for the job search. Works across LinkedIn and other job platforms to cut the repetitive parts out of job hunting. Built end-to-end as the founder.",
    project_tech_stack: 'React · TypeScript · Vite · Claude API · Chrome Extension APIs',
    project_url: 'https://www.leveo.io/',
    project_video_id: '-lrQEOS6Zl8',
    project_youtube_channel: 'https://www.youtube.com/@getLeveo',
    project_linkedin: 'https://www.linkedin.com/company/the-leveo'
};

const waveshare = {
    project_name: 'Waveshare Calendar Builder',
    project_description: 'A Chrome extension for building and exporting weekly visual calendars as BMP images for Waveshare 7.3" 7-color e-paper displays.',
    project_tech_stack: 'JavaScript · Chrome Extension APIs · Canvas · BMP Encoding',
    project_github: 'https://github.com/Alex-Hoskins/waveshare-calendar-builder',
    project_video_src: '/waveshare_demo.mp4'
};

const buzzcut = {
    project_name: 'buzz.cut',
    project_description: "A browser-based timing puzzle where you drop swinging clippers onto a customer's head to shave hair in clean stripes.",
    project_tech_stack: 'Next.js · TypeScript · HTML5 Canvas',
    project_url: 'https://buzz-cut-roan.vercel.app/',
    project_video_src: '/buzzcut_demo.mp4'
};

const myProjects = [leveo, buzzcut, waveshare];

const ProjectList = () => {
    return (
        <ProjectsSection>
            <ProjectsContainer>
                <SectionHeader>
                    <Eyebrow>Selected Work</Eyebrow>
                    <Title>Things I've built.</Title>
                </SectionHeader>
                <ProjectsGrid>
                    {myProjects.map((proj, index) => (
                        <Project key={index} {...proj} />
                    ))}
                </ProjectsGrid>
            </ProjectsContainer>
        </ProjectsSection>
    );
};

export default ProjectList;

const ProjectsSection = styled.section`
    background: var(--bg);
    padding: 6rem 2rem;
    border-top: 1px solid var(--border);

    @media (max-width: 640px) {
        padding: 4rem 1.25rem;
    }
`;

const ProjectsContainer = styled.div`
    max-width: var(--container);
    margin: 0 auto;
    width: 100%;
`;

const SectionHeader = styled.div`
    margin-bottom: 3rem;
`;

const Eyebrow = styled.span`
    display: inline-block;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 0.875rem;
`;

const Title = styled.h2`
    font-size: clamp(1.875rem, 3.5vw, 2.5rem);
    font-weight: 700;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.025em;
    line-height: 1.15;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    width: 100%;
`;
