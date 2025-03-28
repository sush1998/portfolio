import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.name}>Hi, I'm Sushant 👋</h1>
      <p style={styles.subtitle}>A passionate Information Systems student building cool tech!</p>
      <a href="#projects" style={styles.cta}>View My Work</a>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem',
    backgroundColor: '#f0f4f8',
  },
  name: {
    fontSize: '3rem',
    margin: '0 0 1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  },
  cta: {
    textDecoration: 'none',
    backgroundColor: '#0077ff',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
  }
};

export default Hero;
