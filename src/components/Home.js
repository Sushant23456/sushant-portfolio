import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';


const movingGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const typewriter = keyframes`
  from { max-width: 0; }
  to { max-width: 100%; }
`;

const blinkCursor = keyframes`
  50% { border-color: transparent; }
`;

const MovingDot = styled.div`
  position: absolute;
  width: ${props => props.size || '10px'};
  height: ${props => props.size || '10px'};
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  left: ${props => props.left};
  top: ${props => props.top};
  animation: ${fadeInOut} 10s linear infinite;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 768px) {
    width: ${props => props.size ? 'calc(' + props.size + ' / 2)' : '5px'};
    height: ${props => props.size ? 'calc(' + props.size + ' / 2)' : '5px'};
  }
`;

const generateDots = (numDots, contentRect) => {
    const dots = [];
    for (let i = 0; i < numDots; i++) {
      // Avoid placing dots over the content
      let left = Math.random() * 100;
      let top = Math.random() * 100;
  
      // Check if the dot is within the content area
      if (top > contentRect.top && top < contentRect.bottom && left > contentRect.left && left < contentRect.right) {
        // Adjust position if it is
        top = contentRect.top - 10; // Move it above the content area
      }
  
      dots.push(
        <MovingDot
          key={i}
          left={`${left}vw`}
          top={`${top}vh`}
          delay={Math.random() * 10}
          size="10px"
        />
      );
    }
    return dots;
  };
  

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 4rem;
  background: linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #0f2027);
  background-size: 400% 400%;
  color: #fff;
  text-align: center;
  animation: ${movingGradient} 10s ease infinite;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Content = styled.div`
  max-width: 700px;
  padding: 1rem; // Add padding around the text for better spacing
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Center-align the text elements
  gap: 1rem; // Add space between elements
  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem; // Smaller gap for smaller screens
  }
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  color: #fff;
  line-height: 1.2; 
  padding: 0.5rem 0; 
  animation: ${fadeIn} 4s ease forwards;
`;

const Name = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 5rem;
  color: #4dd0e1;
`;


const NameContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  max-width: 0;
  border-right: 3px solid #4dd0e1;
  animation: ${typewriter} 2s steps(40, end) 0.5s forwards, 
             ${blinkCursor} 750ms step-end infinite alternate;
`;


const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  color: #ddd;
  padding: 0.5rem 0;
`;

const DownloadButton = styled.a`
  padding: 1rem 2rem;
  margin-top: 2rem;
  background-color: #4dd0e1;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease, background-color 0.3s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  // Apply padding to button for more control
  padding: 1rem 2.5rem; // Increased horizontal padding for the button

  &:hover {
    transform: translateY(-2px);
    background-color: #3a9cb8;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;


const Home = ({ nightMode }) => {
    const [contentRect, setContentRect] = useState({ top: 0, bottom: 100, left: 0, right: 100 });
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        setContentRect({
          top: rect.top / window.innerHeight * 100,
          bottom: rect.bottom / window.innerHeight * 100,
          left: rect.left / window.innerWidth * 100,
          right: rect.right / window.innerWidth * 100
        });
      }
    }, []);
  
    return (
        <HomeContainer nightMode={nightMode}>
          {generateDots(20, contentRect)}
          <Content ref={contentRef}>
            <Greeting>Hello,</Greeting>
            <NameContainer>
              <Name>I'm Sushant Tiwari</Name>
            </NameContainer>
            <Subtitle>Full Stack Developer | Tech Enthusiast</Subtitle>
            <DownloadButton href="path-to-your-resume.pdf" download>
              Download CV
            </DownloadButton>
          </Content>
        </HomeContainer>
      );
    };
  
export default Home;
