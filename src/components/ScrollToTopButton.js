import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById('view-wrapper');
    if (!container) return;

    const handleScroll = () => {
      setIsVisible(container.scrollTop > 150);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById('view-wrapper');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.page}>
      <div id="view-wrapper" style={styles.scrollContainer}>
        <div>
        </div>
      </div>

      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    position: 'relative',
  },
  scrollContainer: {
    height: '100vh',
    overflowY: 'auto',
    border: '2px solid #ddd',
  },
  button: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: '#0077ff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
};

export default ScrollToTopButton;
