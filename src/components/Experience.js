import React, { useState } from 'react';
import workData from '../data/work.json';
import educationData from '../data/education.json';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatDate = (str) => {
    const [year, month] = str.split("-");
    const date = new Date(`${year}-${month}-01`);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
  };

  return (
    <section style={styles.section}>
  
      <div style={styles.twoColumn}>
        <div style={styles.column}>
          <h3 style={styles.subheading}>💼 Work Experience</h3>
          {workData.map((job, i) => (
            <div key={i} style={{ ...styles.card, cursor: 'pointer' }} onClick={() => handleToggle(i)}>
              <div style={styles.cardContent}>
                <img src={job.image} alt={job.company} style={styles.image} />
                <div>
                  <h3>{job.title}</h3>
                  <p><strong>{job.company}</strong> — {job.location}</p>
                  <p>📅 {formatDate(job.startDate)} - {job.endDate}</p>
                  <p>{job.description}</p>
                </div>
              </div>
  
              {expandedIndex === i && (
                <div style={styles.expand}>
                  {job.responsibilities && (
                    <div style={styles.respBlock}>
                      <p><strong>Responsibilities:</strong></p>
                      <ul style={styles.bulletList}>
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Education Column */}
        <div style={styles.column}>
          <h3 style={styles.subheading}>🎓 Education</h3>
          {educationData.map((edu, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardContent}>
                <img src={edu.image} alt={edu.institution} style={styles.image} />
                <div>
                  <h3>{edu.degree}</h3>
                  <p><strong>{edu.institution}</strong> — {edu.location}</p>
                  <p>📅 {edu.startDate} - {edu.endDate}</p>
                  {edu.courses && (
                    <p><strong>Coursework:</strong> {edu.courses.join(', ')}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

const styles = {
  section: {
    padding: '1rem 2rem 0rem',
    display: 'flex',
  },
  card: {
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ddd',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '10rem',
    height: '10rem',
    objectFit: 'contain',
    borderRadius: '6px',
    backgroundColor: '#fff',
    padding: '0.25rem',
    border: '1px solid #ccc',
    margin:'1.5rem'
  },
  respBlock: {
    padding:'1rem 2rem',
    marginBottom: '0.1rem',
  },
  bulletList: {
    paddingLeft: '1rem',
    marginTop: '0.5rem',
    lineHeight: '1rem',
  },
  certList: {
    paddingLeft: '2rem',
    marginTop: '0.5rem',
    lineHeight: '1rem',
  },
  certLink: {
    color: '#0077ff',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
  },
  twoColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'space-between',
  },
  
  column: {
    flex: '1 1 25%',
    minWidth: '300px',
  },
  
  subheading: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#0077ff',
  },
  
};

export default Experience;
