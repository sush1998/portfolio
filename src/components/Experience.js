import React from 'react';
import workData from '../data/work.json';
import educationData from '../data/education.json';

const Experience = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>💼 Experience & Education</h2>

      {/* Work Experience */}
      <h3 style={styles.subheading}>🧑‍💼 Work</h3>
      {workData.map((job, i) => (
        <div key={i} style={styles.card}>
          <h4>{job.title}</h4>
          <p><strong>{job.company}</strong> — {job.location}</p>
          <p>📅 {formatDate(job.startDate)} - {job.endDate}</p>
          <p>{job.description}</p>
        </div>
      ))}

      {/* Education */}
      <h3 style={{ ...styles.subheading, marginTop: '2rem' }}>🎓 Education</h3>
      {educationData.map((edu, i) => (
        <div key={i} style={styles.card}>
          <h4>{edu.degree}</h4>
          <p><strong>{edu.institution}</strong> — {edu.location}</p>
          <p>📅 {edu.startDate} - {edu.endDate}</p>
          {edu.courses && (
            <p><strong>Coursework:</strong> {edu.courses.join(', ')}</p>
          )}
        </div>
      ))}
    </section>
  );
};

const formatDate = (dateStr) => {
  const [year, month] = dateStr.split("-");
  const d = new Date(`${year}-${month}-01`);
  return d.toLocaleString('default', { month: 'short', year: 'numeric' });
};

const styles = {
  section: { padding: '2rem',marginBottom: '4.5rem', },
  heading: { fontSize: '2rem', marginBottom: '1rem' },
  subheading: { fontSize: '1.5rem', marginTop: '1rem', color: '#0077ff' },
  card: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ddd'
  }
};

export default Experience;
