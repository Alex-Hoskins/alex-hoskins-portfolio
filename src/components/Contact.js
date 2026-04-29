import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactContent>
                <ContactHeader>
                    <Eyebrow>Contact</Eyebrow>
                    <Title>Get in touch.</Title>
                    <Subtitle>
                        The best ways to reach me.
                    </Subtitle>
                </ContactHeader>

                <ContactGrid>
                    <ContactCard
                        href="mailto:alexrhoskins@gmail.com"
                    >
                        <CardIconWrap>
                            <CardIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </CardIcon>
                        </CardIconWrap>
                        <CardLabel>Email</CardLabel>
                        <CardValue>alexrhoskins@gmail.com</CardValue>
                    </ContactCard>

                    <ContactCard
                        href="https://www.linkedin.com/in/alex-hoskins"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CardIconWrap>
                            <CardIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </CardIcon>
                        </CardIconWrap>
                        <CardLabel>LinkedIn</CardLabel>
                        <CardValue>linkedin.com/in/alex-hoskins</CardValue>
                    </ContactCard>

                    <ContactCard
                        href="https://www.github.com/Alex-Hoskins"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CardIconWrap>
                            <CardIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </CardIcon>
                        </CardIconWrap>
                        <CardLabel>GitHub</CardLabel>
                        <CardValue>github.com/Alex-Hoskins</CardValue>
                    </ContactCard>
                </ContactGrid>
            </ContactContent>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.section`
    background: var(--bg);
    padding: 6rem 2rem;
    border-top: 1px solid var(--border);

    @media (max-width: 640px) {
        padding: 4rem 1.25rem;
    }
`;

const ContactContent = styled.div`
    max-width: var(--container);
    margin: 0 auto;
`;

const ContactHeader = styled.div`
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
    margin: 0 0 1rem;
    letter-spacing: -0.025em;
    line-height: 1.15;
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 580px;
    margin: 0;
    line-height: 1.65;
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
`;

const ContactCard = styled.a`
    background: var(--bg-elevated);
    padding: 1.75rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    transition: border-color var(--transition), background var(--transition),
        transform var(--transition);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;

    &:hover {
        border-color: var(--accent-border);
        background: var(--bg-panel);
        transform: translateY(-2px);
    }
`;

const CardIconWrap = styled.div`
    width: 36px;
    height: 36px;
    border-radius: var(--radius-md);
    background: var(--bg-panel);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    margin-bottom: 0.75rem;
    transition: background var(--transition);

    ${ContactCard}:hover & {
        background: var(--accent-soft);
    }
`;

const CardIcon = styled.svg`
    width: 18px;
    height: 18px;
`;

const CardLabel = styled.span`
    font-size: 0.75rem;
    color: var(--text-subtle);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
`;

const CardValue = styled.span`
    font-size: 0.9375rem;
    color: var(--text);
    font-family: var(--font-mono);
    word-break: break-all;
`;
