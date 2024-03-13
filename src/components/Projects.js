// import contactImage from "../components/images/contact.png";
// import homeImage from "../components/images/home.png";
// import customer from "../components/images/return-cus.png";
// import confirmation from "../components/images/confirmation.png";



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { FaImage, FaVideo, FaGithub } from 'react-icons/fa';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';


// const ProjectsTitle = styled.h1`
//   text-align: center;
//   font-size: 2.5em; 
//   margin-top: 20px;
//   font-weight: 600;
//   color: #2c3e50;

// `;

// const ProjectsSubheading = styled.h2`
//   text-align: center;
//   font-size: 1.5em; 
//   color: #666;
//   margin-bottom: 40px; 
//   font-weight: 400; // Lighter weight for subheading
//   max-width: 800px; // Limit the width for better readability
//   margin: 40px auto;
// `;


// const ProjectContainer = styled.div`
//   background-color: #ecf0f1; // Light grey background for the card
//   border-radius: 10px;
//   box-shadow: 0 10px 20px rgba(0,0,0,0.1); // Smooth shadow for a softer look
//   transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
//   width: 80%;
//   margin: 30px auto;
//   padding: 20px; // Padding inside the container
  
// `;

// const ProjectsContainer = styled.div`
//   display: flex;
//   flex-direction: column; // Stack projects vertically
//   align-items: center;
//   gap: 30px; // Space between project containers
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const NavItem = styled.button`
// background-color: #203e4a;
//   margin-top: 10px;
//   border: none;
//   border-radius: 5px;
//   padding: 8px 20px; 
//   margin: 0 10px; 
//   font-weight: 500; 
//   color: white;
//   cursor: pointer;
//   position: relative;
//   font-size: 1rem;
//   transition: all 0.3s ease-in-out;

//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     right: 50%;
//     height: 3px;
//     background-color: white;
//     transition: all 0.3s ease-in-out;
//     transform-origin: center;
//   }

//   &:hover:after, &.active:after {
//     left: 0;
//     right: 0;
//   }
// `;

// const ContentContainer = styled.div`
//   padding: 40px;
// `;

// const ProjectVideo = styled.video`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 10px;
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

// const TabButton = styled(NavItem)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Icon = styled.span`
//   margin-right: 8px;
//   display: flex;
// `;



// // const ArrowButton = styled.button`
// // z-index: 100;
// //   width: 40px;
// //   height: 40px;
// //   border-radius: 50%;
// //   background: transparent; 
// //   border: 2px solid #3498db; 
// //   color: #3498db;
// //   font-size: 16px; // Icon size
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   cursor: pointer;
// //   transition: all 0.3s;

// //   &:hover {
// //     background-color: #3498db; 
// //     color: white; 
// //   }

// //   &:focus {
// //   z-index: 100;
// //   width: 40px;
// //   height: 40px;
// //   border-radius: 50%;
// //   background: blue;
// //   border: 2px solid #3498db; // Button border color
// //   color: #3498db; // Button icon color
// //   font-size: 16px; // Icon size
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   cursor: pointer;
// //   transition: all 0.3s;
// //   }

// //   position: absolute;
// //   top: 50%;
// //   transform: translateY(-50%);
// // `;

// // const PrevArrow = styled(ArrowButton)`
// //   left: 250px; 

// // `;

// // const NextArrow = styled(ArrowButton)`
// //   right: 250px; 
// // `;

// // function SamplePrevArrow(props) {
// //   const { className, onClick } = props;
// //   return (
// //     <PrevArrow
// //       className={className}
// //       onClick={onClick}
// //     >
// //       <FaChevronLeft /> {/* Assuming FaChevronLeft is imported */}
// //     </PrevArrow>
// //   );
// // }

// // function SampleNextArrow(props) {
// //   const { className, onClick } = props;
// //   return (
// //     <NextArrow
// //       className={className}
// //       onClick={onClick}
// //     >
// //       <FaChevronRight /> {/* Assuming FaChevronRight is imported */}
// //     </NextArrow>
// //   );
// // }

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
  
//     {
//     id: 2,
//     title: 'FOMO - Social Media WebApp',
//     description: 'This is a brief description of Project Two.',
//     imageUrls: [
//       'path-to-different-first-image.jpg',
//       'path-to-different-second-image.jpg',
//       // ... more images
//     ],
//     videoUrl: 'path-to-your-video.mp4',
//     githubUrl: 'https://github.com/your-username/project-two',
//     },
// ];


// const Project = ({ project }) => {
//     const [activeTab, setActiveTab] = useState('image');
//     // const settings = {
//     //     dots: true,
//     //     infinite: true,
//     //     speed: 500,
//     //     slidesToShow: 1,
//     //     centerMode: true,
//     //     nextArrow: <SampleNextArrow />,
//     //     prevArrow: <SamplePrevArrow />,
//     //   };

  
//     return (
//       <>
//         <ProjectContainer>
//           <Nav>
//             <TabButton onClick={() => setActiveTab('image')} className={activeTab === 'image' ? 'active' : ''}>
//               <Icon><FaImage /></Icon> Image
//             </TabButton>
//             <TabButton onClick={() => setActiveTab('video')} className={activeTab === 'video' ? 'active' : ''}>
//               <Icon><FaVideo /></Icon> Video
//             </TabButton>
//           </Nav>
//           <ContentContainer>
//           <ProjectTitle>{project.title}</ProjectTitle>
//           {activeTab === 'image' && (
//             <ImageGallery>
//             {project.imageUrls.map((image, index) => (
//               <GalleryImage key={index} src={image} alt={`Project ${project.title} - Image ${index + 1}`} />
//             ))}
//           </ImageGallery>
//           )}
//           {activeTab === 'video' && (
//             <ProjectVideo src={project.videoUrl} controls />
//           )}
//         </ContentContainer>
//           <ProjectDescription>{project.description}</ProjectDescription>
//           <GithubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//             <FaGithub /> View on GitHub
//           </GithubLink>
//         </ProjectContainer>
//       </>
//     );
//   };

// const Projects = () => (
//     <>
//     <ProjectsTitle>My Projects</ProjectsTitle>
//     <ProjectsSubheading>
//       Some of the projects in my portfolio that I worked on...
//     </ProjectsSubheading>
//   <ProjectsContainer>
//     {projects.map(project => (
//       <Project key={project.id} project={project} />
//     ))}
//   </ProjectsContainer>
//   </>
// );

// export default Projects;
