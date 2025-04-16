import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const contactPush = () => {
    navigate('./contact');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  return (
    <AboutStyle>
      <AboutContainer>
        <TextContainer>
          <h2>About Me</h2>
          <p>
            I'm <strong>Alex Hoskins</strong>, a Full Stack Software Engineer with formal training in computer science, software engineering, and web development. Most recently, I worked at <strong>Bluecore</strong> as a <strong>Forward Deployed Engineer</strong>, where I helped clients implement and optimize large-scale marketing solutions.
          </p>
          <p>
            I’m passionate about building thoughtful, user-centered applications and thrive in collaborative environments where communication, problem-solving, and clean code are highly valued. I'm currently exploring opportunities to apply my technical skills and people-first mindset to solve meaningful challenges.
          </p>
          <p>
            Feel free to explore my work — and if you'd like to connect, you’ll find my contact info at the top of the page.
          </p>
        </TextContainer>

        <ProfileImage ref={profileRef}>
        <img src="/profile_pic.png" alt="Alex Hoskins Profile Pic" />
          <h4>Alex Hoskins</h4>
          
        </ProfileImage>
      </AboutContainer>

      <LanguageDiv>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5 logo"
          width="10%"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3 logo"
          width="10%"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript logo"
          width="10%"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python logo"
          width="10%"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="SQL logo"
          width="10%"
        />
      </LanguageDiv>
    </AboutStyle>
  );
};

export default About;

// Styled Components

const AboutStyle = styled.div`
  width: 100%;
  background-color: rgb(246, 246, 246);
  padding: 0 10%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 7px double #343f4f;

  @media (max-width: 600px) {
    padding: 0 10%;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: #fc6d6d;
    border-bottom: 2px solid #343f4f;
    padding-bottom: 15px;
  }

  p {
    color: #343f4f;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  strong {
    color: #000;
  }
`;

const AboutContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;  // Start as hidden
  width: 40%; // or adjust this value as needed
  margin-top: 6rem;

    @media (max-width: 1200px) {
    width: 100%;
    margin-top: 3rem;
    }

  &.in-view {
    opacity: 1;
    transform: scale(1.2); // Dramatic zoom effect as it comes into view
    transition: transform 0.8s ease, opacity 0.8s ease; // Slower, more dramatic transition
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #6EB6FF;
    padding: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); // Stronger shadow
  }

  h4 {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #343f4f;
  }
`;

const LanguageDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10%;

  @media (min-width: 800px) {
    width: 50%;
  }
`;