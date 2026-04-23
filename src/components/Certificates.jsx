import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'Android App Development ',
      issuer: 'CSIT, Durg',
      date: '21st - 24th November 2024',
      image: '/assets/certificates/androidWorkshopCertificate.png',
      link: '#'
    },
    {
      title: 'Programming in Modern C++',
      issuer: 'NPTEL',
      date: 'January - April 2025',
      image: '/assets/certificates/programmingInModernC++.png',
      link: '#'
    },
    {
      title: 'Project Intern',
      issuer: 'Ikansh Infosoft Solutions Pvt. Ltd.',
      date: 'June 2025 - January 2026',
      image: '/assets/certificates/infosoftSolutionsInternshipCertificate.png',
      link: '#'
    },
    {
      title: 'Web Development Intern',
      issuer: 'Zager Digital Services',
      date: 'September 2025 - December 2025',
      image: '/assets/certificates/zagerInternCertificate.png',
      link: '#'
    },
    {
      title: 'Vocational Training in Web Development',
      issuer: 'Skyvo Technologies Pvt. Ltd.',
      date: '21st May 2025 - 04th July 2025',
      image: '/assets/certificates/skyvoVocationalTrainingCertificate.png',
      link: '#'
    },
    {
      title: 'NSS B Certificate',
      issuer: 'NSS, CSVTU Bhilai',
      date: 'August 2024 - 2025',
      image: '/assets/certificates/nssBCertificate.png',
      link: '#'
    },
    {
      title: 'State Camp Certificate',
      issuer: 'NSS, Chhattisgarh',
      date: '22nd January - 28th January 2026',
      image: '/assets/certificates/stateCampCertificate.png',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                </div>
              </div>

              <div className="certificate-info">
                <div className="certificate-icon">
                  <FaCertificate />
                </div>
                <div className="certificate-details">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-date">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for adding certificates */}
      </div>
    </section>
  );
};

export default Certificates;
