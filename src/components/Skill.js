// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const SkillContainer = styled.div`
//   margin-bottom: 1em;
//   color: ${(props) => (props.nightMode ? '#fff' : '#333')}; // Adjust text color based on night mode
// `;

// const SkillHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const SkillName = styled.span`
//   font-weight: bold;
// `;

// const SkillLevel = styled.div`
//   background-color: ${(props) => (props.nightMode ? '#555' : '#e0e0e0')}; // Dark background for night mode
//   height: 30px;
//   border-radius: 5px;
//   position: relative;
//   overflow: hidden;
//   margin-top: 0.5em;
//   margin-bottom: 1em;
// `;

// const SkillFill = styled.div`
//   height: 100%;
//   border-radius: 5px;
//   background-color: ${(props) => (props.nightMode ? '#0bd' : '#007bff')}; // Brighter blue for night mode
//   transition: width 2s ease;
//   width: ${(props) => props.width};
// `;

// const Percentage = styled.span`
//   font-weight: bold;
// `;

// const Skill = ({ name, level, nightMode }) => {
//   const [width, setWidth] = useState('0%');

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setWidth(`${level}%`);
//     }, 500);

//     return () => clearTimeout(timeoutId);
//   }, [level]);

//   return (
//     <SkillContainer nightMode={nightMode}>
//       <SkillHeader>
//         <SkillName>{name}</SkillName>
//         <Percentage>{level}%</Percentage>
//       </SkillHeader>
//       <SkillLevel nightMode={nightMode}>
//         <SkillFill width={width} nightMode={nightMode} />
//       </SkillLevel>
//     </SkillContainer>
//   );
// };

// export default Skill;
