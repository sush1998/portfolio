import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import theme from '../styles/theme';

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={30} />,
      url: 'https://www.linkedin.com/in/sushantmahalle/',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub size={30} />,
      url: 'https://github.com/sush1998',
      label: 'GitHub',
    },
    {
      icon: <FaEnvelope size={30} />,
      url: 'mailto:scm364@drexel.edu',
      label: 'Email',
    },
  ];

  return (
    <section style={styles.section}>
      <p style={styles.heading}>🌍 Find Me Online</p>

      <div style={styles.socialGrid}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            style={styles.card}
          >
            {link.icon}
            <span style={styles.cardLabel}>{link.label}</span>
          </a>
        ))}
      </div>

      <h3 style={styles.messageNote}>
        👇 Send your message here, I will get back to you 👇
      </h3>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
          required
        />
        <textarea
          placeholder="Your Message"
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
};

const styles = {
  section: {
    height:'100vh',
    padding: '1rem',
    background: 'linear-gradient(135deg, #F4F4F9 0%, #E6F7FB 100%)',
    color: theme.colors.text,
    textAlign: 'center',
  },
  heading: {
    fontSize: theme.fontSize.heading,
    marginBottom: theme.spacing.gapLarge,
    fontWeights:'600',
  },
  socialGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing.gapLarge,
    marginBottom: theme.spacing.gapLarge,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.medium,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colors.text,
    width: '120px',
    transition: theme.transitions.default,
    boxShadow: theme.shadow.light,
  },
  cardLabel: {
    marginTop: theme.spacing.gapSmall,
    fontSize: theme.fontSize.small,
  },
  messageNote: {
    fontSize: theme.fontSize.text,
    color: theme.colors.lightText,
    marginBottom: theme.spacing.gapMedium,
  },
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.gapMedium,
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: theme.borderRadius.small,
    border: '1px solid #ccc',
    fontSize: theme.fontSize.text,
  },
  textarea: {
    padding: '1rem',
    borderRadius: theme.borderRadius.small,
    border: '1px solid #ccc',
    fontSize: theme.fontSize.text,
    minHeight: '120px',
  },
  button: {
    padding: '0.75rem 1.25rem',
    backgroundColor: theme.colors.accent,
    color: theme.colors.text,
    fontSize: theme.fontSize.text,
    border: 'none',
    borderRadius: theme.borderRadius.small,
    cursor: 'pointer',
    transition: theme.transitions.default,
  },
};

export default Contact;
