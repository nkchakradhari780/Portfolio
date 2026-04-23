import React from 'react';
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Chhatrapati Shivaji Institute of Technology',
      location: 'Durg, Chhattisgarh, India',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.5/10',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Web Technologies',
        'Object-Oriented Programming',
        'Cloud Computing'
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-details">
                <h3 className="education-degree">{edu.degree}</h3>
                
                <div className="education-institution">
                  <FaUniversity /> {edu.institution}
                </div>

                <div className="education-meta">
                  <span className="education-location">
                    {edu.location}
                  </span>
                  <span className="education-duration">
                    <FaCalendar /> {edu.duration}
                  </span>
                  <span className="education-grade">
                    {edu.grade}
                  </span>
                </div>

                <div className="relevant-courses">
                  <h4>Relevant Coursework:</h4>
                  <div className="courses-grid">
                    {edu.relevantCourses.map((course, idx) => (
                      <span key={idx} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note: You can add more education entries here */}
      </div>
    </section>
  );
};

export default Education;
