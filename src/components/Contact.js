import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section style={styles.container}>
      <h2>🤝 Let’s Connect</h2>

      <ContactForm />
      <p>I'm always open to networking, collaborations, or job opportunities.</p>

      <div style={styles.links}>
        <a href="https://linkedin.com/in/sushantmahalle" target="_blank" rel="noreferrer" style={styles.link}>
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/sush1998" target="_blank" rel="noreferrer" style={styles.link}>
          <FaGithub /> GitHub
        </a>
        <a href="mailto:scm364@drexel.edu" style={styles.link}>
          <FaEnvelope /> Email
        </a>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '2rem',
    height: '100%',
    boxSizing: 'border-box',
  },
  links: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  link: {
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: '#0077ff',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

export default Contact;
