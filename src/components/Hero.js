import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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
            solving problems at the intersection of data, design, and technology.
            Gravitated towards data analytics and visualization with a growing interest in making sense of complex datasets.
            I bring close to 4 years of experience in technical and production support, complemented by full-stack development
            and AI integration to deliver impactful user experiences.
          </p>
          <p style={styles.quote}>
            "Driven by curiosity. Grounded in empathy. Building for impact."
          </p>
        </motion.div>

        <motion.img
          src="/Hero.PNG" // Replace with your real path
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
    padding: '0.5rem 2rem',
    backgroundColor: '#f5f7fa',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textContent: {
    flex: 1,
    minWidth: '500px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 700,
    color: '#2c3e50',
  },
  subheading: {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    color: '#34495e',
  },
  quote: {
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
  image: {
    flex: 1,
    maxHeight:'500px',
    maxWidth: '400px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #ddd',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
};

export default Hero;
