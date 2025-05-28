import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <ContactHeader>
                    <Title>Get in Touch</Title>
                    <Subtitle>Let's discuss your next project or opportunity</Subtitle>
                </ContactHeader>

                <ContactGrid>
                    <ContactCard>
                        <CardIcon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </CardIcon>
                        <CardTitle>Email</CardTitle>
                        <CardContent>
                            <ContactLink href="mailto:alexrhoskins@gmail.com">
                                alexrhoskins@gmail.com
                            </ContactLink>
                        </CardContent>
                    </ContactCard>

                    <ContactCard>
                        <CardIcon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </CardIcon>
                        <CardTitle>LinkedIn</CardTitle>
                        <CardContent>
                            <ContactLink 
                                href="https://www.linkedin.com/in/alex-hoskins" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                linkedin.com/in/alex-hoskins
                            </ContactLink>
                        </CardContent>
                    </ContactCard>

                    <ContactCard>
                        <CardIcon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </CardIcon>
                        <CardTitle>GitHub</CardTitle>
                        <CardContent>
                            <ContactLink 
                                href="https://www.github.com/Alex-Hoskins" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                github.com/Alex-Hoskins
                            </ContactLink>
                        </CardContent>
                    </ContactCard>
                </ContactGrid>

                <ContactFooter>
                    <FooterText>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </FooterText>
                </ContactFooter>
            </ContactContent>
        </ContactContainer>
    );
};

const ContactContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
    padding: 6rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContactContent = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

const ContactHeader = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #4299e1 0%, #805ad5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: #4a5568;
    max-width: 600px;
    margin: 0 auto;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
`;

const ContactCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    }
`;

const CardIcon = styled.div`
    width: 48px;
    height: 48px;
    color: #4299e1;
    margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 1rem;
`;

const CardContent = styled.div`
    font-size: 1rem;
    color: #4a5568;
`;

const ContactLink = styled.a`
    color: #4299e1;
    text-decoration: none;
    transition: all 0.3s ease;
    word-break: break-all;

    &:hover {
        color: #2b6cb0;
        text-decoration: underline;
    }
`;

const ContactFooter = styled.div`
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
`;

const FooterText = styled.p`
    font-size: 1.125rem;
    color: #4a5568;
    line-height: 1.7;
`;

export default Contact;

