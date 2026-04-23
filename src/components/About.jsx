import React from 'react';
import { FaCode, FaDatabase, FaServer, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaServer />,
      title: 'Backend Engineering',
      description: 'Expert in building scalable server-side applications'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Proficient in SQL & NoSQL database architecture'
    },
    {
      icon: <FaCode />,
      title: 'API Development',
      description: 'RESTful & GraphQL API design and implementation'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Optimization for speed, scalability, and reliability'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <p className="about-intro">
              I'm a <span className="highlight">Full Stack Developer</span> with a strong focus on 
              <span className="highlight"> backend development</span>. I specialize in building 
              robust, scalable server-side applications that handle complex business logic and 
              massive data flows efficiently.
            </p>
            <p>
              My expertise lies in architecting RESTful APIs, designing efficient database schemas, 
              and implementing high-performance backend systems. I'm passionate about writing clean, 
              maintainable code and following industry best practices.
            </p>
            <p>
              With hands-on experience in <strong>Go, Node.js, and Express.js</strong>, I've worked 
              with various databases including <strong>MongoDB, PostgreSQL, MySQL, and SQLite</strong>. 
              I also leverage caching strategies with <strong>Redis</strong> to optimize application 
              performance.
            </p>
            <p>
              Beyond backend, I have solid frontend skills in <strong>Angular and Next.js</strong>, 
              enabling me to understand the full stack and build cohesive, end-to-end solutions. 
              I'm also proficient with modern development tools like <strong>Git, Postman, VS Code, 
              and Figma</strong>, and I actively use AI tools like <strong>ChatGPT and Claude</strong> 
              to enhance productivity.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
