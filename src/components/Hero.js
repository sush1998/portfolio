import React from 'react';
import { motion } from 'framer-motion';
import theme from '../styles/theme';

const Hero = ({ setActiveView }) => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textContent}
        >
          <h1 style={styles.heading}>Hi, I'm Sushant Mahalle 👋</h1>
          <p style={styles.subheading}>
            Graduate Student in Information Systems at Drexel University, passionate about
            solving problems at the intersection of data, design, and technology. Gravitated
            towards data analytics and visualization with a growing interest in making sense
            of complex datasets. I bring close to 4 years of experience in technical and
            production support, complemented by full-stack development and AI integration to
            deliver impactful user experiences.
          </p>
          <p style={styles.quote}>
            "Driven by curiosity. Grounded in empathy. Building for impact."
          </p>
          <div style={styles.ctaContainer}>
            <button style={styles.ctaButton} className="hero-button" onClick={() => setActiveView('Projects')}>
            🚀 View My Projects
            </button>
            <button style={styles.ctaButton} className="hero-button" onClick={() => setActiveView('Work & Education')}>
            💼 Work Experience
            </button>
          </div>

        </motion.div>

        <motion.img
          src="/hero.png"
          alt="Sushant Mahalle"
          style={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(135deg, #8ECAE6 0%, #FFDDD2 100%)',
    minHeight: '92vh',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.text,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.gapLarge,
    flexWrap: 'wrap',
  },
  textContent: {
    flex: 1,
    minWidth: '300px',
  },
  heading: {
    fontSize: theme.fontSize.xlarge,
    marginBottom: '1.2rem',
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.text,
  },
  subheading: {
    fontSize: theme.fontSize.text,
    lineHeight: 1.7,
    color: theme.colors.lightText,
  },
  quote: {
    marginTop: '1.5rem',
    fontStyle: 'italic',
    color: theme.colors.text,
  },
  image: {
    flex: 1,
    maxWidth: '280px',
    height: '280px',
    borderRadius: theme.borderRadius.round,
    objectFit: 'cover',
    border: `4px solid ${theme.colors.text}`,
    boxShadow: theme.shadow.heavy,
  },
  ctaContainer: {
    marginTop: '2rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  
  ctaButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    padding: '0.75rem 1.5rem',
    borderRadius: theme.borderRadius.small,
    fontSize: theme.fontSize.text,
    border: 'none',
    cursor: 'pointer',
    transition: theme.transitions.default,
    boxShadow: theme.shadow.light,
  },
  
};

export default Hero;
