import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  margin-bottom: 1em;
  color: ${(props) => (props.nightMode ? '#fff' : '#333')}; // Adjust text color based on night mode
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: bold;
`;

const SkillLevel = styled.div`
  background-color: ${props => (props.nightMode ? '#555' : '#ddd')}; // Dark background for night mode
  height: 30px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

const SkillFill = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: ${props => (props.nightMode ? '#0bd' : '#3498db')};  // Brighter blue for night mode
  transition: width 2s ease;
  width: ${(props) => props.width};
`;

const Percentage = styled.span`
  font-weight: bold;
`;

const SkillsContainer = styled.section`
  padding: 4em;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; // Added gap for spacing between columns
  background: ${props => (props.nightMode ? '#333' : '#f9f9f9')}; // Dark background for night mode
  color: ${props => (props.nightMode ? '#fff' : '#333')};
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 10px); // Subtracting the gap size to maintain proper spacing
`;

const SkillsHeading = styled.h2`
color: ${props => (props.nightMode ? '#fff' : '#333')};
  font-size: 2em;
  text-align: center;
  width: 100%; // Ensure the heading spans the full width
  margin-bottom: 1em;
`;

const Skill = ({ name, level, nightMode }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWidth(`${level}%`);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [level]);

  return (
    <SkillContainer nightMode={nightMode}>
      <SkillHeader>
        <SkillName>{name}</SkillName>
        <Percentage>{level}%</Percentage>
      </SkillHeader>
      <SkillLevel nightMode={nightMode}>
        <SkillFill width={width} nightMode={nightMode} />
      </SkillLevel>
    </SkillContainer>
  );
};

const Skills = ({ nightMode }) => {
  const skillsData = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'CSS', level: 60 },
    { name: 'HTML', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 60 },
    { name: 'Java', level: 70 },
  ];

  // Split the skillsData into two arrays for left and right columns
  const leftSkills = skillsData.slice(0, 4);
  const rightSkills = skillsData.slice(4);

  return (
    <SkillsContainer nightMode={nightMode}>
      <SkillsHeading nightMode={nightMode}>Technical Expertise</SkillsHeading>
      <SkillsColumn nightMode={nightMode}>
        {leftSkills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} nightMode={nightMode} />
        ))}
      </SkillsColumn>
      <SkillsColumn nightMode={nightMode}>
        {rightSkills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} nightMode={nightMode} />
        ))}
      </SkillsColumn>
    </SkillsContainer>
  );
};

export default Skills;