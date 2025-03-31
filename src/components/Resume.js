import React from 'react';
import theme from '../styles/theme';

const Resume = () => {
  const resumeUrl = 'public/Sushant_Mahalle_Resume.pdf';

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.buttonContainer}>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" style={styles.button}>
            👀 View Resume
          </a>
          <a href={resumeUrl} download style={styles.button}>
            ⬇️ Download PDF
          </a>
        </div>
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
  section: {
    padding: '1rem',
    background: 'linear-gradient(135deg, #F4F4F9 0%, #E6F7FB 100%)',
    color: theme.colors.text,
    textAlign: 'center',
  },
  container: {
    padding: '0',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    flexWrap: 'wrap',
    gap: theme.spacing.gapLarge,
  },
  button: {
    padding: '0.75rem 1.25rem',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: theme.fontSize.text,
    transition: theme.transitions.default,
  },
  iframe: {
    padding: '2%',
    width: '96%',
    height: '100vh',
    border: 'none',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.backgroundSolid,
    boxShadow: theme.shadow.medium,
  },
};

export default Resume;
