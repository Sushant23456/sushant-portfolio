import React from 'react';
import { FaGithub, FaLinkedin, FaAward, FaCode, FaLaptopCode, FaBook, FaMountain, FaGuitar, FaCamera} from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled.section`
  padding: 5em 2em; // Increased padding for more space
  background-color: ${(props) => (props.nightMode ? '#282c34' : '#f9f9f9')};
  color: ${(props) => (props.nightMode ? '#fff' : '#333')};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  text-align: center;
  transition: background-color 0.3s;
  background-image: ${(props) => props.nightMode ? 'url(path_to_dark_pattern)' : 'url(path_to_light_pattern)'};
  background-size: cover;
  animation: ${fadeInUp} 0.5s ease-out;
`;

const Heading = styled.h2`
  font-size: 2.5em; // Increase font size
  margin-bottom: 0.5em; // Add more space below the heading
  color: ${(props) => (props.nightMode ? '#ffbd59' : '#333')}; // Use a color that stands out
  text-transform: uppercase; // Style preference
  letter-spacing: 1.5px; // Increase letter spacing
  animation: ${fadeInUp} 0.7s ease-out;
`;

const Content = styled.p`
  color: ${(props) => (props.nightMode ? '#ccc' : '#666')};
  font-size: 1.1em; // Slightly increase the font size
  line-height: 1.6; // Increase line height for better readability
  max-width: 800px; // Don't let the lines get too long
  margin: 0 auto; // Center the paragraph in the container
  animation: ${fadeInUp} 0.9s ease-out;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em; // Space between items
  margin-top: 1em; // Space above the social links
`;

const IconLink = styled.a`
  color: ${props => props.nightMode ? '#fff' : '#333'}; // Change color based on nightMode
  font-size: 2em; // Size of the icons
  transition: color 0.3s ease;

  &:hover {
    color: #4dd0e1; // Color on hover
  }
`;

const CertificationLink = styled.a`
  display: block; // Each certification link will be on its own line
  color: ${props => props.nightMode ? '#fff' : '#333'};
  margin-top: 0.5em;
  text-decoration: none;

  &:hover {
    text-decoration: underline; // Underline on hover for better visibility
  }
`;

const ProfileIcon = styled.div`
  font-size: 5em; // Larger icon size
  margin-bottom: 0.5em;
  color: ${(props) => (props.nightMode ? '#ffbd59' : '#333')};
`;

const InterestsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5em; // Space between items
  margin-top: 2em;
  flex-wrap: wrap; // Wrap items to the next line if they don't fit
`;

const InterestIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3em; // Size of the icons
  color: ${props => props.nightMode ? '#ffbd59' : '#4dd0e1'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); // Slightly enlarge icons on hover
  }
`;

const IconLabel = styled.span`
  margin-top: 0.5em;
  color: ${props => props.nightMode ? '#fff' : '#333'}; // Ensure text is visible in both modes
`;




const About = ({ nightMode }) => {
  return (
    <AboutContainer nightMode={nightMode} style={{ backgroundImage: nightMode ? 'url(dark_pattern.svg)' : 'url(light_pattern.svg)' }}>
      <ProfileIcon nightMode={nightMode}>
        <FaAward />
      </ProfileIcon>
      <Heading nightMode={nightMode}>About Me</Heading>
      <Content nightMode={nightMode}>
        I'm a passionate software developer with a keen interest in building scalable web applications.
        My journey started with a simple "Hello, World!" and has since evolved into a full-fledged adventure 
        with modern web technologies. I specialize in Python, Java, HTML, CSS, React.js, Node.js, MySQL, AWS, React Native, and more also have experience in building 
        applications with a focus on user experience, performance, and maintainability.
        
        When I'm not coding, you'll find me exploring the great outdoors or delving into a good book. 
        I believe in lifelong learning and am constantly seeking to improve my skills and expand my knowledge.
      </Content>
      <SocialLinks>
        <IconLink href="https://github.com/Sushant23456" target="_blank" rel="noopener noreferrer" nightMode={nightMode}>
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/sushant-tiwari-2570151b8/" target="_blank" rel="noopener noreferrer" nightMode={nightMode}>
          <FaLinkedin />
        </IconLink>
      </SocialLinks>
      <CertificationLink href="https://www.freecodecamp.org/certification/fcc888004a9-1ae3-436e-bbd8-66728bb2934d/responsive-web-design" target="_blank" rel="noopener noreferrer" nightMode={nightMode}>
        Responsive Web Design Certification
      </CertificationLink>
      <CertificationLink href="https://www.freecodecamp.org/certification/fcc888004a9-1ae3-436e-bbd8-66728bb2934d/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" nightMode={nightMode}>
        JavaScript Algorithms and Data Structures Certification
      </CertificationLink>
      <br></br>
      <InterestsContainer>
      <InterestIcon nightMode={nightMode}>
            <FaGuitar />
            <IconLabel nightMode={nightMode}>Music</IconLabel>
        </InterestIcon>
      <InterestIcon nightMode={nightMode}>
        <FaCode />
        <IconLabel nightMode={nightMode}>Programming</IconLabel>
      </InterestIcon>
      <InterestIcon nightMode={nightMode}>
        <FaLaptopCode />
        <IconLabel nightMode={nightMode}>Web Development</IconLabel>
      </InterestIcon>
      <InterestIcon nightMode={nightMode}>
        <FaBook />
        <IconLabel nightMode={nightMode}>Reading</IconLabel>
      </InterestIcon>
        <InterestIcon nightMode={nightMode}>
            <FaMountain />
            <IconLabel nightMode={nightMode}>Hiking</IconLabel>
        </InterestIcon>
        <InterestIcon nightMode={nightMode}>
            <FaCamera />
            <IconLabel nightMode={nightMode}>Photography</IconLabel>
        </InterestIcon>

    </InterestsContainer>
    </AboutContainer>
  );
};

export default About;
