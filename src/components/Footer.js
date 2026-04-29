import React from 'react';
import styled from 'styled-components';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const navHeight = 70;
    const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterTop>
                    <FooterBrand>
                        <BrandName>Alex Hoskins</BrandName>
                        <BrandTagline>Senior Solutions Engineer · Founder of Leveo</BrandTagline>
                    </FooterBrand>
                    <FooterLinks>
                        <LinkGroup>
                            <LinkTitle>Navigation</LinkTitle>
                            <LinkButton onClick={() => scrollToSection('about')}>About</LinkButton>
                            <LinkButton onClick={() => scrollToSection('projects')}>Projects</LinkButton>
                            <LinkButton onClick={() => scrollToSection('contact')}>Contact</LinkButton>
                        </LinkGroup>
                        <LinkGroup>
                            <LinkTitle>Connect</LinkTitle>
                            <SocialLink
                                href="https://www.linkedin.com/in/alex-hoskins"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="https://www.github.com/Alex-Hoskins"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </SocialLink>
                            <SocialLink href="mailto:alexrhoskins@gmail.com">
                                Email
                            </SocialLink>
                        </LinkGroup>
                    </FooterLinks>
                </FooterTop>
                <FooterBottom>
                    <Copyright>
                        © {new Date().getFullYear()} Alex Hoskins. All rights reserved.
                    </Copyright>
                    <BackToTop
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Back to top
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </BackToTop>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 4rem 2rem 2rem;

    @media (max-width: 640px) {
        padding: 3rem 1.25rem 1.5rem;
    }
`;

const FooterContent = styled.div`
    max-width: var(--container);
    margin: 0 auto;
`;

const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
`;

const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const BrandName = styled.h2`
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.01em;
`;

const BrandTagline = styled.p`
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.5;
`;

const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-self: end;

    @media (max-width: 768px) {
        justify-self: start;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const LinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: flex-start;
`;

const LinkTitle = styled.h3`
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-subtle);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
`;

const LinkButton = styled.button`
    color: var(--text-muted);
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: 0.9375rem;
    cursor: pointer;
    text-align: left;
    transition: color var(--transition);

    &:hover {
        color: var(--text);
    }
`;

const SocialLink = styled.a`
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color var(--transition);

    &:hover {
        color: var(--text);
    }
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border);

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const Copyright = styled.p`
    font-size: 0.8125rem;
    color: var(--text-subtle);
`;

const BackToTop = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.8125rem;
    font-weight: 500;
    transition: color var(--transition);

    svg {
        width: 14px;
        height: 14px;
        transition: transform var(--transition);
    }

    &:hover {
        color: var(--text);
    }

    &:hover svg {
        transform: translateY(-2px);
    }
`;
