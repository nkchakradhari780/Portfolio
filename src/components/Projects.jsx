import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Gym Management System',
      description: 'A comprehensive gym management platform with member tracking, payment processing, and workout scheduling.',
      features: [
        'Member registration and profile management',
        'Payment tracking and invoice generation',
        'Class scheduling and trainer assignment',
        'Dashboard with analytics and reports'
      ],
      techStack: ['Next.js', 'MongoDB', 'Node.js', 'Express'],
      github: 'https://github.com/nitin-chakradhari/gym-management',
      live: null
    },
    {
      title: 'SkyTM (Paytm-like App)',
      description: 'A digital wallet and payment application enabling seamless money transfers, bill payments, and transaction history.',
      features: [
        'User authentication and wallet creation',
        'Money transfer between users',
        'Bill payment integration',
        'Transaction history and statements',
        'QR code-based payments'
      ],
      techStack: ['Angular', '.NET', 'MSSQL'],
      github: 'https://github.com/nitin-chakradhari/skytm',
      live: null
    },
    {
      title: 'MiRestro Backend System',
      description: 'High-performance restaurant management backend handling orders, inventory, and real-time kitchen operations.',
      features: [
        'RESTful API with authentication',
        'Real-time order processing',
        'Inventory management system',
        'Redis caching for performance',
        'Multi-database support',
        'Role-based access control'
      ],
      techStack: ['Golang', 'Node.js', 'Express', 'Redis', 'MySQL', 'PostgreSQL', 'SQLite'],
      github: 'https://github.com/nitin-chakradhari/mirestro-backend',
      live: null
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
