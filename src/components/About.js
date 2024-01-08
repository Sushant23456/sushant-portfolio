import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4em;
  background: #f9f9f9;
  background-color: ${(props) => (props.nightMode ? '#282c34' : '#f9f9f9')}; // Example night mode style
  color: ${(props) => (props.nightMode ? '#fff' : '#333')}; // Example night mode style
`;

const Heading = styled.h2`
  color: #333;
  font-size: 2em;
  margin-bottom: 0.25em;
`;

const Content = styled.p`
  color: #666;
  font-size: 1em;
  line-height: 1.5;
`;

const About = ({ nightMode }) => {
  return (
    <AboutContainer nightMode = {nightMode}>
      <Heading>About Me</Heading>
      <Content>
        I'm a passionate software developer with a keen interest in building scalable web applications.
        My journey started with a simple "Hello, World!" and has since evolved into a full-fledged adventure 
        with modern web technologies. I specialize in React.js and have experience in building 
        applications with a focus on user experience, performance, and maintainability.
        
        When I'm not coding, you'll find me exploring the great outdoors or delving into a good book. 
        I believe in lifelong learning and am constantly seeking to improve my skills and expand my knowledge.
      </Content>
    </AboutContainer>
  );
};

export default About;
