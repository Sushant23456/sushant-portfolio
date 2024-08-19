// import contactImage from "../components/images/contact.png";
// import homeImage from "../components/images/home.png";
// import customer from "../components/images/return-cus.png";
// import confirmation from "../components/images/confirmation.png";



// import React from 'react';
// import styled from 'styled-components';
// import {FaGithub } from 'react-icons/fa';


// const ProjectsTitle = styled.h1`
//   text-align: center;
//   font-size: 2.5em;
//   margin-top: 20px;
//   font-weight: 600;
//   color: ${({ nightMode }) => (nightMode ? '#ecf0f1' : '#2c3e50')};
// `;

// const ProjectsSubheading = styled.h2`
//   text-align: center;
//   font-size: 1.5em;
//   color: ${({ nightMode }) => (nightMode ? '#aaa' : '#666')};
//   margin-bottom: 40px;
//   font-weight: 400;
//   max-width: 800px;
//   margin: 40px auto;
// `;

// const ProjectContainer = styled.div`
//   border-radius: 10px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
//   width: 80%;
//   margin: 30px auto;
//   padding: 20px;
//   color: ${({ nightMode }) => (nightMode ? '#ecf0f1' : '#34495e')}; // Adjust text color for night mode
// `;

// const ProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column; // Stack projects vertically
//   align-items: center;
//   gap: 30px; // Space between project containers
// `;

// const ContentContainer = styled.div`
//   padding: 40px;
// `;


// const ProjectTitle = styled.h2`
//   margin-bottom: 10px;
//   text-align: center;
// `;

// const ProjectDescription = styled.p`
//   color: #34495e; // Dark color for text for better readability
//   font-size: 1rem;
//   line-height: 1.6; // Increased line-height for readability
//   margin-bottom: 20px; // More space before the GitHub link
// `;

// const GithubLink = styled.a`
//   background-color: #3498db; // Button color
//   color: white; // Text color for the button
//   padding: 10px 15px; // Padding inside the button
//   border-radius: 5px; // Rounded corners for the button
//   box-shadow: 0 4px 6px rgba(0,0,0,0.1); // Shadow for the button
//   display: inline-block;
//   margin-top: 20px; // Space above the GitHub link
//   transition: background-color 0.3s; // Smooth background color transition on hover
//   text-decoration: none; // Remove default underline on link
//   margin: 0 auto; // Center the button

//   &:hover {
//     background-color: #2980b9; // Darker shade on hover
//     text-decoration: none; 
//   }
// `;



// const ImageGallery = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
//   grid-gap: 15px;
//   margin-top: 20px;
//   margin: 0 auto;
// `;

// const GalleryImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0,0,0,0.1);

//   &:hover {
//     transform: scale(1.03);
//     transition: all 0.2s ease-in-out;
//   }
// `;

// const projects = [
//   {
//     id: 1,
//     title: 'Hotel Booking Website',
//     description: 'Developed a fully functional hotel booking website with a comprehensive admin management system.',
//     imageUrls: [
//       contactImage,
//       homeImage,
//       customer,
//       confirmation,
//     ],
//     videoUrl: 'path-to-your-video.mp4',
//     githubUrl: 'https://github.com/Sushant23456/Hotel-Book',
//   },
  
//     // {
//     // id: 2,
//     // title: 'FOMO - Social Media WebApp',
//     // description: 'This is a brief description of Project Two.',
//     // imageUrls: [
//     //   'path-to-different-first-image.jpg',
//     //   'path-to-different-second-image.jpg',
//     //   // ... more images
//     // ],
//     // videoUrl: 'path-to-your-video.mp4',
//     // githubUrl: 'https://github.com/your-username/project-two',
//     // },
// ];


// const Project = ({ project, nightMode }) => { 
//     return (
//       <>
//         <ProjectContainer nightMode={nightMode}>
//           <ContentContainer>
//             <ProjectTitle>{project.title}</ProjectTitle>
//             <ImageGallery>
//               {project.imageUrls.map((image, index) => (
//                 <GalleryImage key={index} src={image} alt={`Project ${project.title} - Image ${index + 1}`} />
//               ))}
//             </ImageGallery>
//           </ContentContainer>
//           <ProjectDescription>{project.description}</ProjectDescription>
//           <GithubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//             <FaGithub /> View on GitHub
//           </GithubLink>
//         </ProjectContainer>
//       </>
//     );
//   };
  
//   const Projects = ({ nightMode }) => (
//     <>
//       <ProjectsTitle nightMode={nightMode}>My Projects</ProjectsTitle>
//       <ProjectsSubheading nightMode={nightMode}>
//         Some of the projects in my portfolio that I worked on...
//       </ProjectsSubheading>
//       <ProjectsContainer>
//         {projects.map(project => (
//           <Project key={project.id} project={project} nightMode={nightMode} />
//         ))}
//       </ProjectsContainer>
//     </>
//   );
  
//   export default Projects;