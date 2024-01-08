import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  margin-bottom: 1em;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: bold;
  color: #333;
`;

const SkillLevel = styled.div`
  background-color: #e0e0e0;
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
  background-color: #007bff;
  transition: width 2s ease;
  width: ${(props) => props.width};
`;

const Percentage = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 1.5em;
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
      <SkillHeader>
        <SkillName>{name}</SkillName>
        <Percentage>{level}%</Percentage>
      </SkillHeader>
      <SkillLevel>
        <SkillFill width={width} />
      </SkillLevel>
    </SkillContainer>
  );
};

export default Skill;
