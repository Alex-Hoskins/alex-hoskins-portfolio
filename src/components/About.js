import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <AboutHeader>
                    <Eyebrow>About</Eyebrow>
                    <Title>How I work, and the things I'm building.</Title>
                </AboutHeader>

                <AboutGrid>
                    <BioSection>
                        <SectionTitle>Background</SectionTitle>
                        <BioText>
                            I'm a Senior Solutions Engineer at Cordial. Day-to-day, I work
                            with enterprise customers on complex marketing platform
                            implementations — taking unclear requirements and turning them
                            into shipped software. Before Cordial, I did similar
                            customer-facing engineering work at Bluecore.
                        </BioText>
                        <BioText>
                            On the side, I'm the founder of Leveo, an AI-powered Chrome
                            extension I think of as a job search command center. It works
                            across LinkedIn and other job platforms to cut the repetitive
                            parts out of job hunting. Building it has meant owning the
                            whole stack — architecture, AI integration, UX, and the
                            messier go-to-market questions about who it's actually for.
                        </BioText>
                        <BioText>
                            What I care about most is the intersection of technical
                            execution and user psychology: code that ships, but also
                            software that fits how real people actually work. The way I
                            get there has shifted a lot lately — I lean heavily on Claude
                            Code and modern AI-augmented developer tooling, and on showing
                            the work as I go (Loom, OBS) instead of saving it for the demo.
                        </BioText>
                    </BioSection>

                    <SkillsSection>
                        <SectionTitle>Toolkit</SectionTitle>
                        <SkillsGrid>
                            <SkillCategory>
                                <CategoryTitle>Languages</CategoryTitle>
                                <SkillList>
                                    <Skill>JavaScript (ES6+)</Skill>
                                    <Skill>TypeScript</Skill>
                                    <Skill>Python</Skill>
                                    <Skill>SQL</Skill>
                                    <Skill>HTML5</Skill>
                                    <Skill>CSS3</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Frameworks &amp; Libraries</CategoryTitle>
                                <SkillList>
                                    <Skill>React.js</Skill>
                                    <Skill>Node.js</Skill>
                                    <Skill>Vite</Skill>
                                    <Skill>Chrome Extension APIs</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>AI &amp; APIs</CategoryTitle>
                                <SkillList>
                                    <Skill>Claude API</Skill>
                                    <Skill>OpenAI API</Skill>
                                    <Skill>REST APIs</Skill>
                                    <Skill>Smarty</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Data &amp; Infrastructure</CategoryTitle>
                                <SkillList>
                                    <Skill>Supabase</Skill>
                                    <Skill>PostgreSQL</Skill>
                                    <Skill>BigQuery</Skill>
                                    <Skill>Datadog</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Tools</CategoryTitle>
                                <SkillList>
                                    <Skill>Git</Skill>
                                    <Skill>JSON</Skill>
                                    <Skill>YAML</Skill>
                                    <Skill>Jira</Skill>
                                    <Skill>Confluence</Skill>
                                    <Skill>Agile / Scrum</Skill>
                                </SkillList>
                            </SkillCategory>
                        </SkillsGrid>
                    </SkillsSection>
                </AboutGrid>
            </AboutContent>
        </AboutContainer>
    );
};

export default About;

const AboutContainer = styled.div`
    background: var(--bg);
    padding: 6rem 2rem;
    border-top: 1px solid var(--border);

    @media (max-width: 640px) {
        padding: 4rem 1.25rem;
    }
`;

const AboutContent = styled.div`
    max-width: var(--container);
    margin: 0 auto;
    width: 100%;
`;

const AboutHeader = styled.div`
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
    max-width: 720px;
`;

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const BioSection = styled.div`
    background: var(--bg-elevated);
    padding: 2.25rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);

    @media (max-width: 640px) {
        padding: 1.75rem;
    }
`;

const SectionTitle = styled.h3`
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-muted);
    margin: 0 0 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
`;

const BioText = styled.p`
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.75;
    margin: 0 0 1.25rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const SkillsSection = styled.div`
    background: var(--bg-elevated);
    padding: 2.25rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    align-self: start;

    @media (max-width: 640px) {
        padding: 1.75rem;
    }
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
`;

const SkillCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const CategoryTitle = styled.h4`
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-subtle);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.12em;
`;

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Skill = styled.span`
    background: var(--bg-panel);
    color: var(--text);
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius-sm);
    font-size: 0.8125rem;
    font-weight: 500;
    border: 1px solid var(--border);
    transition: border-color var(--transition), color var(--transition),
        background var(--transition);
    font-family: var(--font-mono);

    &:hover {
        border-color: var(--accent-border);
        color: var(--accent);
        background: var(--accent-soft);
    }
`;
