import React from 'react';

const Resume = () => {
    const resumeUrl = '/Sushant_Mahalle_Resume.pdf'; 
  
    return (
      <section style={styles.container}>
        <h2>📄 My Resume</h2>
  
        <div style={styles.buttons}>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" style={styles.button}>
            👀 View Resume
          </a>
          <a href={resumeUrl} download style={styles.button}>
            ⬇️ Download PDF
          </a>
        </div>
  
        <iframe
          src={resumeUrl}
          style={styles.iframe}
          title="Resume Preview"
        ></iframe>
      </section>
    );
  };
  

const styles = {
  container: {
    padding: '2rem',
    height: '100%',
    boxSizing: 'border-box',
  },
  buttons: {
    marginBottom: '1.5rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  button: {
    padding: '0.6rem 1rem',
    backgroundColor: '#0077ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  iframe: {
    width: '100%',
    height: '70vh',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
};

export default Resume;
