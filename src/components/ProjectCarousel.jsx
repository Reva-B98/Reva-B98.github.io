import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/ProjectCarousel.css'; // Make sure this path is correct

const projects = [
  {
    title: 'Road Sign Detection',
    description: 'A deep learning project aimed at accurately detecting road signs using convolutional neural networks. This project was part of my work to enhance autonomous driving systems. Implemented innovative solutions that improved project performance by 30%.',
    link: 'https://github.com/Reva-B98/Road-Sign-Detection',
    image: '/RSD.png'
  },
  {
    title: 'Sentiment Analysis with NLTK',
    description: 'A natural language processing project using NLTK to perform sentiment analysis on textual data. This project involved training models to understand and classify sentiments expressed in various text forms. Developed capabilities for stance detection in movie reviews, increasing detection accuracy by 20%.',
    link: 'https://github.com/Reva-B98/Project-NLTK',
    image: '/SA.png'
  },
  {
    title: 'Personal Website',
    description: 'A personal website developed using modern web technologies to showcase my portfolio, projects, and resume. This project highlights my skills in web development, including React.js and responsive design. Guided the design and successful implementation of the website, ensuring 100% alignment with project objectives.',
    link: 'https://github.com/Reva-B98/personal-website',
    image: '/PW.png'
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProjectCarousel = () => {
  return (
    <div className="slider-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
