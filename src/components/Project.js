import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
    return (
        <ProjectCard href={props.project_url} target="_blank" rel="noopener noreferrer">
            <ProjectImage>
                <img src={props.project_img} alt={props.project_name} />
            </ProjectImage>
            <ProjectContent>
                <ProjectTitle>{props.project_name}</ProjectTitle>
                <TechStack>{props.project_tech_stack}</TechStack>
                <ProjectDescription>{props.project_description}</ProjectDescription>
                {props.project_name === "Resume" && (
                    <DownloadButton href="Alex_Hoskins_Resume.pdf" download="Alex_Hoskins_Resume.pdf">
                        Download My Resume
                    </DownloadButton>
                )}
            </ProjectContent>
        </ProjectCard>
    );
};

export default Project;

// Styled Components
const ProjectCard = styled.a`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    height: 100%;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    ${ProjectCard}:hover & img {
        transform: scale(1.05);
    }
`;

const ProjectContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.75rem;
`;

const TechStack = styled.h4`
    font-size: 0.875rem;
    color: #4299e1;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
`;

const DownloadButton = styled.a`
    display: inline-block;
    background-color: #4299e1;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    text-decoration: none;
    margin-top: auto;

    &:hover {
        background-color: #3182ce;
        transform: translateY(-2px);
    }
`;