import React from 'react';
import styled from 'styled-components';

const Project = ({
    project_name,
    project_description,
    project_tech_stack,
    project_url,
    project_img,
    project_video_id,
    project_video_src,
    project_youtube_channel,
    project_linkedin,
    project_github,
}) => {
    const primary_url = project_url || project_github;
    return (
        <ProjectCard>
            <ProjectMedia>
                {project_video_id ? (
                    <VideoFrame
                        src={`https://www.youtube-nocookie.com/embed/${project_video_id}?rel=0&modestbranding=1`}
                        title={`${project_name} demo video`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                ) : project_video_src ? (
                    <Video
                        src={project_video_src}
                        controls
                        playsInline
                        muted
                        loop
                        preload="metadata"
                    />
                ) : (
                    <img src={project_img} alt="" loading="lazy" />
                )}
            </ProjectMedia>
            <ProjectContent>
                <ProjectTitle>
                    <TitleLink
                        href={primary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project_name}
                        <ExternalIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H8M17 7v9" />
                        </ExternalIcon>
                    </TitleLink>
                </ProjectTitle>
                <ProjectDescription>{project_description}</ProjectDescription>

                <SocialRow>
                    {project_url && (
                        <SocialPill
                            href={project_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Website"
                        >
                            <SocialIcon viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.6.08-1.18.21-1.74L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </SocialIcon>
                            Website
                        </SocialPill>
                    )}
                    {project_github && (
                        <SocialPill
                            href={project_github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                        >
                            <SocialIcon viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </SocialIcon>
                            GitHub
                        </SocialPill>
                    )}
                    {project_youtube_channel && (
                        <SocialPill
                            href={project_youtube_channel}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube channel"
                        >
                            <SocialIcon viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </SocialIcon>
                            YouTube
                        </SocialPill>
                    )}
                    {project_linkedin && (
                        <SocialPill
                            href={project_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn page"
                        >
                            <SocialIcon viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </SocialIcon>
                            LinkedIn
                        </SocialPill>
                    )}
                </SocialRow>

                <TechStack>{project_tech_stack}</TechStack>
            </ProjectContent>
        </ProjectCard>
    );
};

export default Project;

const ProjectCard = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--bg-elevated);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    transition: border-color var(--transition), transform var(--transition),
        background var(--transition);
    height: 100%;

    &:hover {
        border-color: var(--border-strong);
        transform: translateY(-3px);
        background: var(--bg-panel);
    }
`;

const ProjectMedia = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--bg-panel);
    border-bottom: 1px solid var(--border);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms var(--ease);
    }

    ${ProjectCard}:hover & img {
        transform: scale(1.04);
    }
`;

const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: var(--bg-panel);
`;

const ProjectContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.75rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.01em;
`;

const TitleLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: inherit;
    text-decoration: none;

    /* Whole-card click target — sits behind interactive elements (z-index 2) */
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
    }
`;

const ExternalIcon = styled.svg`
    width: 16px;
    height: 16px;
    color: var(--text-subtle);
    flex-shrink: 0;
    transition: color var(--transition), transform var(--transition);

    ${ProjectCard}:hover & {
        color: var(--accent);
        transform: translate(2px, -2px);
    }
`;

const ProjectDescription = styled.p`
    font-size: 0.9375rem;
    color: var(--text-muted);
    line-height: 1.65;
    margin: 0;
    flex-grow: 1;
`;

const SocialRow = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const SocialPill = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-muted);
    background: var(--bg-panel);
    border: 1px solid var(--border);
    padding: 0.4rem 0.75rem;
    border-radius: var(--radius-full);
    text-decoration: none;
    transition: color var(--transition), border-color var(--transition),
        background var(--transition);

    &:hover {
        color: var(--accent);
        border-color: var(--accent-border);
        background: var(--accent-soft);
    }
`;

const SocialIcon = styled.svg`
    width: 13px;
    height: 13px;
    flex-shrink: 0;
`;

const TechStack = styled.p`
    font-size: 0.75rem;
    color: var(--text-subtle);
    font-family: var(--font-mono);
    margin: 0;
    padding-top: 0.875rem;
    border-top: 1px solid var(--border);
    letter-spacing: 0.01em;
`;
