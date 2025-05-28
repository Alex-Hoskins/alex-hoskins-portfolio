import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 70; // Height of the navigation bar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <FooterContainer>
            <FooterContent>
                <FooterTop>
                    <FooterBrand>
                        <BrandName>Alex Hoskins</BrandName>
                        <BrandTagline>Full Stack Developer & Software Engineer</BrandTagline>
                    </FooterBrand>
                    <FooterLinks>
                        <LinkGroup>
                            <LinkTitle>Navigation</LinkTitle>
                            <Link onClick={() => scrollToSection('about')}>About</Link>
                            <Link onClick={() => scrollToSection('projects')}>Projects</Link>
                            <Link onClick={() => scrollToSection('contact')}>Contact</Link>
                        </LinkGroup>
                        <LinkGroup>
                            <LinkTitle>Connect</LinkTitle>
                            <SocialLink 
                                href="https://www.linkedin.com/in/alex-hoskins" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SocialIcon>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </SocialIcon>
                                LinkedIn
                            </SocialLink>
                            <SocialLink 
                                href="https://www.github.com/Alex-Hoskins" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <SocialIcon>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                    </svg>
                                </SocialIcon>
                                GitHub
                            </SocialLink>
                            <SocialLink href="mailto:alexrhoskins@gmail.com">
                                <SocialIcon>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </SocialIcon>
                                Email
                            </SocialLink>
                        </LinkGroup>
                    </FooterLinks>
                </FooterTop>
                <FooterBottom>
                    <Copyright>
                        © {new Date().getFullYear()} Alex Hoskins. All rights reserved.
                    </Copyright>
                    <BackToTop href="#" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        Back to Top
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </BackToTop>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background: white;
    padding: 4rem 2rem 2rem;
    border-top: 1px solid #e2e8f0;
`;

const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

const FooterBrand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const BrandName = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
`;

const BrandTagline = styled.p`
    font-size: 1rem;
    color: #4a5568;
`;

const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

const LinkGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
`;

const LinkTitle = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: left;
`;

const Link = styled.button`
    color: #4a5568;
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color 0.3s ease;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    width: 100%;

    &:hover {
        color: #4299e1;
    }
`;

const SocialLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    text-decoration: none;
    font-size: 0.9375rem;
    transition: all 0.3s ease;

    &:hover {
        color: #4299e1;
        transform: translateX(4px);
    }
`;

const SocialIcon = styled.span`
    width: 16px;
    height: 16px;
    color: currentColor;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #e2e8f0;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
`;

const Copyright = styled.p`
    font-size: 0.875rem;
    color: #4a5568;
`;

const BackToTop = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4299e1;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;

    svg {
        width: 16px;
        height: 16px;
    }

    &:hover {
        color: #2b6cb0;
        transform: translateY(-2px);
    }
`;

export default Footer;