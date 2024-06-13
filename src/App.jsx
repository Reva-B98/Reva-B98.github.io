import React, { useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  useEffect(() => {
    
    const handleResize = () => {
      const canvas = document.querySelector('.ThreeSceneContainer canvas');
      if (canvas) {
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="root">
      <div className="ThreeSceneContainer">
        <ThreeScene />
      </div>
      <div className="App">
        <div className="nameOverlay">REVA B.</div>
        <div className="social-icons">
          <a href="https://github.com/Reva-B98" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/reva-balasundaram-521379153/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:reva.bala.ca@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <nav className="top-right-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects" id="projects-link">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
        <section id="about">
          <div className="about-content">
            <div className="about-text">
              <p>Hello, I'm Reva.</p>
              <p>I like creating interesting things and helping people in the process. I welcome a challenge and I am always seeking to learn new things while perfecting my craft. I like spending time outdoors when im not coding away or gaming and I also enjoy the occasional good book.</p>
              <p>My experience working in the industry has helped me grow as a full stack developer and my chosen field of study has helped me work on and gain a lot of knowledge on artificial intelligence, in addition to exposing me to a world of culture and opportunities.</p>
              <p>Feel free to check out my <a href="#projects">projects</a> or learn more about my <a href="#experience">experience</a>.</p>
            </div>
          </div>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Road Sign Detection',
      description: 'A deep learning project aimed at accurately detecting road signs using convolutional neural networks. This project was part of my work to enhance autonomous driving systems. Implemented innovative solutions that improved project performance by 30%.',
      link: 'https://github.com/Reva-B98/Road-Sign-Detection'
    },
    {
      title: 'Sentiment Analysis with NLTK',
      description: 'A natural language processing project using NLTK to perform sentiment analysis on textual data. This project involved training models to understand and classify sentiments expressed in various text forms. Developed capabilities for stance detection in movie reviews, increasing detection accuracy by 20%.',
      link: 'https://github.com/Reva-B98/Project-NLTK'
    },
    {
      title: 'Personal Website',
      description: 'A personal website developed using modern web technologies to showcase my portfolio, projects, and resume. This project highlights my skills in web development, including React.js and responsive design. Guided the design and successful implementation of the website, ensuring 100% alignment with project objectives.',
      link: 'https://github.com/Reva-B98/personal-website'
    }
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Infosys',
      period: 'August 2019 – August 2021',
      achievements: [
        'Developed responsive and interactive web pages using Angular, HTML, and CSS, improving load times by 20%.',
        'Supported backend development with SpringBoot and crafted refined SQL queries, boosting database performance by 15%.',
        'Achieved a 98% completion rate on bug fixes and deliverable timelines.',
        'Reduced new bug introduction by 25% through process improvements.',
        'Contributed to creating RESTful web services using the Spring framework, enhancing system efficiency by 20%.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Infosys',
      period: 'December 2018 – June 2019',
      achievements: [
        'Designed and developed a dynamic website using Angular for the front end and Node.js along with MongoDB in the backend.',
        'Guided the design and successful implementation of the website, ensuring 100% alignment with project objectives.'
      ]
    }
  ];

  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p>{exp.period}</p>
          <ul>
            {exp.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-container">
      <ul>
        <li><strong>Languages:</strong> TypeScript, Python, JavaScript, Java, C++</li>
        <li><strong>Web Frameworks:</strong> Angular, Next.js, React.js, Node.js</li>
        <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
        <li><strong>Technologies:</strong> HTML, SpringBoot, TensorFlow, Keras, NLTK, PyTorch, Apache Spark, Apache Cassandra, Kubernetes</li>
        <li><strong>DevOps:</strong> Docker, GitHub Actions</li>
        <li><strong>Other Tools:</strong> Git, Postman, Jira, Visual Studio Code, Android Studio, Eclipse, Vite</li>
        <li><strong>Testing:</strong> Unit, Integration Tests</li>
      </ul>
    </div>
  );
}

export default App;
