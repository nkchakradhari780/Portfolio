import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Ikansh Infosoft Solutions Pvt. Ltd.',
      role: 'Backend Developer Intern',
      type: 'Paid Internship',
      duration: 'June 2024 - Present',
      location: 'Remote',
      responsibilities: [
        'Developed RESTful APIs using Go and Node.js for MiRestro restaurant management system',
        'Implemented Redis caching strategies to improve API response times by 40%',
        'Designed and optimized database schemas across MySQL, PostgreSQL, and SQLite',
        'Collaborated with frontend team to integrate backend services seamlessly',
        'Wrote comprehensive API documentation and unit tests'
      ],
      technologies: ['Golang', 'Node.js', 'Express', 'Redis', 'MySQL', 'PostgreSQL', 'SQLite', 'Git']
    },
    {
      company: 'Skyvo Technologies',
      role: 'Full Stack Developer Trainee',
      type: 'Vocational Training',
      duration: 'January 2024 - May 2024',
      location: 'Raipur, Chhattisgarh, India',
      responsibilities: [
        'Built SkyTM digital wallet application using Angular and .NET framework',
        'Implemented secure user authentication and authorization systems',
        'Developed payment processing modules with transaction history tracking',
        'Created responsive UI components following Material Design principles',
        'Worked with MSSQL database for data management and reporting'
      ],
      technologies: ['Angular', '.NET', 'MSSQL', 'TypeScript', 'C#', 'RESTful APIs']
    },
    {
      company: 'Zager Digital Services',
      role: 'Web Development Intern',
      type: 'Unpaid Internship',
      duration: 'August 2023 - December 2023',
      location: 'Durg, Chhattisgarh, India',
      responsibilities: [
        'Developed gym management system using Next.js and MongoDB',
        'Created member registration and payment tracking modules',
        'Implemented class scheduling and trainer assignment features',
        'Built admin dashboard with analytics and reporting capabilities',
        'Gained hands-on experience with full-stack development workflow'
      ],
      technologies: ['Next.js', 'React', 'MongoDB', 'Node.js', 'Express', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">
                      <FaBriefcase /> {exp.company}
                    </h4>
                  </div>
                  <span className="experience-type">{exp.type}</span>
                </div>

                <div className="experience-meta">
                  <span className="experience-duration">
                    <FaCalendar /> {exp.duration}
                  </span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>

                <div className="experience-responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tech">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
