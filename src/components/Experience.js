import React, { useState } from 'react';
import workData from '../data/work.json';
import educationData from '../data/education.json';
import theme from '../styles/theme';

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
        {/* Work Column */}
        <div style={styles.column}>
          <h3 style={styles.heading}>💼 Work Experience</h3>
          {workData.map((job, i) => (
            <div key={i} title="Click to expand and see responsibilities" style={{ ...styles.card, cursor: 'pointer' }} onClick={() => handleToggle(i)}>
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
          <h3 style={styles.heading}>🎓 Education</h3>
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
    padding:'1rem',
    background: 'linear-gradient(135deg, #F4F4F9 0%, #E6F7FB 100%)',
    color: theme.colors.text,
  },
  card: {
    marginBottom: '1.5rem',
    padding: theme.spacing.cardPadding,
    backgroundColor: theme.colors.card,
    border: `1px solid ${theme.colors.border}`, 
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadow.light,
    transition: theme.transitions.default,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '10rem',
    height: '10rem',
    objectFit: 'contain',
    borderRadius: theme.borderRadius.small,
    backgroundColor: '#fff',
    padding: '0.25rem',
    border: `1px solid ${theme.colors.lightText}`,
    margin: '1.5rem',
  },
  respBlock: {
    padding: '0rem 2rem',
  },
  bulletList: {
    paddingLeft: '1.2rem',
    marginTop: '0.5rem',
    lineHeight: '1.6rem',
  },
  twoColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.gapLarge,
    justifyContent: 'space-between',
  },
  column: {
    flex: '1 1 ',
    minWidth: '300px',
  },
  subheading: {
    fontSize: theme.fontSize.subheading,
    marginBottom: '1rem',
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.bold,
  }
};

export default Experience;
