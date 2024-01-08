import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column; // Align children vertically
  margin-bottom: 1em;
`;

const SkillName = styled.span`
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5em; // Add space between the name and the skill bar
  text-align: left;
`;

const SkillLevel = styled.div`
  background-color: #e0e0e0;
  height: 30px; // Adjust the height to your preference
  border-radius: 5px;
  position: relative;
  overflow: hidden;
`;

const SkillFill = styled.div`
  height: 100%;
  border-radius: 5px; // Keep consistent with SkillLevel
  background-color: #007bff;
  transition: width 2s ease;
  width: ${(props) => props.level}%;
`;

const Percentage = styled.span`
font-weight: bold;
color: #333;
margin-bottom: 0.5em; // Add space between the name and the skill bar
text-align: left;
`;

const Skill = ({ name, level }) => {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWidth(`${level}%`);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [level]);

  return (
    <SkillContainer>
      <SkillName>{name}</SkillName>
      <SkillLevel>
        <SkillFill style={{ width }} />
        <Percentage>{level}%</Percentage>
      </SkillLevel>
      
    </SkillContainer>
  );
};

export default Skill;
