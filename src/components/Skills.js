import React from 'react';
import styled from 'styled-components';
import Skill from './Skill';

const SkillsContainer = styled.section`
  padding: 4em;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; // Added gap for spacing between columns
`;

const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 10px); // Subtracting the gap size to maintain proper spacing
`;

const SkillsHeading = styled.h2`
  color: #333;
  font-size: 2em;
  text-align: center;
  width: 100%; // Ensure the heading spans the full width
  margin-bottom: 1em;
`;

const Skills = () => {
  const skillsData = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'CSS', level: 60 },
    { name: 'HTML', level: 70 },
    { name: 'Node.js', level: 65 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 60 },
    { name: 'Git', level: 70 },
  ];

  // Split the skillsData into two arrays for left and right columns
  const leftSkills = skillsData.slice(0, 4);
  const rightSkills = skillsData.slice(4);

  return (
    <SkillsContainer>
      <SkillsHeading>Technical Expertise</SkillsHeading>
      <SkillsColumn>
        {leftSkills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </SkillsColumn>
      <SkillsColumn>
        {rightSkills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </SkillsColumn>
    </SkillsContainer>
  );
};

export default Skills;
