import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>

                <AboutGrid>
                    <ProfileSection>
                        <ProfileImage>
                            <img src="/profile_pic.png" alt="Alex Hoskins" />
                        </ProfileImage>
                        <ProfileInfo>
                            <Name>Alex Hoskins</Name>
                            <Role>Full Stack Developer & Software Engineer</Role>
                            <Location>📍 San Francisco Bay Area</Location>
                        </ProfileInfo>
                    </ProfileSection>

                    <BioSection>
                        <SectionTitle>About Me</SectionTitle>
                        <BioText>
                            I'm a Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                            My experience at Bluecore as a Forward Deployed Engineer has equipped me with deep expertise in 
                            implementing and optimizing large-scale marketing solutions.
                        </BioText>
                        <BioText>
                            I'm passionate about creating thoughtful, user-centered applications and thrive in collaborative 
                            environments where communication, problem-solving, and clean code are highly valued. I'm currently 
                            exploring opportunities to apply my technical skills and people-first mindset to solve meaningful 
                            challenges in the tech industry.
                        </BioText>
                    </BioSection>

                    <SkillsSection>
                        <SectionTitle>Technical Expertise</SectionTitle>
                        <SkillsGrid>
                            <SkillCategory>
                                <CategoryTitle>Frontend</CategoryTitle>
                                <SkillList>
                                    <Skill>React</Skill>
                                    <Skill>JavaScript</Skill>
                                    <Skill>HTML5</Skill>
                                    <Skill>CSS3</Skill>
                                    <Skill>TypeScript</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Backend</CategoryTitle>
                                <SkillList>
                                    <Skill>Node.js</Skill>
                                    <Skill>Python</Skill>
                                    <Skill>Express</Skill>
                                    <Skill>SQL</Skill>
                                    <Skill>MongoDB</Skill>
                                </SkillList>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Tools & Others</CategoryTitle>
                                <SkillList>
                                    <Skill>Git</Skill>
                                    <Skill>AWS</Skill>
                                    <Skill>Docker</Skill>
                                    <Skill>REST APIs</Skill>
                                    <Skill>Agile</Skill>
                                </SkillList>
                            </SkillCategory>
                        </SkillsGrid>
                    </SkillsSection>
                </AboutGrid>

                <CallToAction>
                    <CTAText>Let's Build Something Amazing Together</CTAText>
                    <CTADescription>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </CTADescription>
                    <CTAButton href="mailto:alexrhoskins@gmail.com">Get in Touch</CTAButton>
                </CallToAction>
            </AboutContent>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
    padding: 8rem 2rem;
    display: flex;
    align-items: center;
`;

const AboutContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
`;

const AboutHeader = styled.div`
    text-align: center;
    margin-bottom: 5rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(135deg, #4299e1 0%, #805ad5 100%);
        border-radius: 2px;
    }
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #4299e1 0%, #805ad5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
    font-size: 1.375rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
`;

const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    background: white;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        padding: 2rem;
    }
`;

const ProfileImage = styled.div`
    img {
        width: 240px;
        height: 240px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #4299e1;
        padding: 4px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(66, 153, 225, 0.15);

        &:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 16px rgba(66, 153, 225, 0.2);
        }
    }
`;

const ProfileInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
`;

const Name = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;
    position: relative;
    padding-bottom: 0.75rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 3px;
        background: linear-gradient(135deg, #4299e1 0%, #805ad5 100%);
        border-radius: 2px;
    }
`;

const Role = styled.p`
    font-size: 1.375rem;
    color: #4299e1;
    font-weight: 600;
    margin: 0;
    line-height: 1.4;
`;

const Location = styled.p`
    font-size: 1.125rem;
    color: #4a5568;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 0;
`;

const BioSection = styled.div`
    background: white;
    padding: 3rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    text-align: left;
`;

const SectionTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 2rem;
    position: relative;
    padding-bottom: 1rem;
    text-align: left;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 3px;
        background: #4299e1;
        border-radius: 2px;
    }
`;

const BioText = styled.p`
    font-size: 1.125rem;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    text-align: left;
    max-width: 100%;

    &:last-child {
        margin-bottom: 0;
    }
`;

const SkillsSection = styled.div`
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const SkillCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const CategoryTitle = styled.h4`
    font-size: 1.125rem;
    font-weight: 600;
    color: #4299e1;
    margin-bottom: 0.5rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 24px;
        height: 2px;
        background: #4299e1;
        border-radius: 2px;
    }
`;

const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Skill = styled.span`
    background: #edf2f7;
    color: #2d3748;
    padding: 0.375rem 0.875rem;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background: #4299e1;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 2px 4px rgba(66, 153, 225, 0.2);
    }
`;

const CallToAction = styled.div`
    text-align: center;
    background: white;
    padding: 3rem 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #4299e1, #805ad5);
    }
`;

const CTAText = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
    line-height: 1.4;
`;

const CTADescription = styled.p`
    font-size: 1.125rem;
    color: #4a5568;
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const CTAButton = styled.a`
    display: inline-block;
    background: linear-gradient(135deg, #4299e1 0%, #805ad5 100%);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(66, 153, 225, 0.2);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(66, 153, 225, 0.3);
    }

    &:active {
        transform: translateY(0);
    }
`;

export default About;