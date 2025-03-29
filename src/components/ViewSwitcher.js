import React, { useState } from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Resume from './Resume';
import Contact from './Contact';

const ViewSwitcher = () => {
  const [activeView, setActiveView] = useState('Home');

  const renderView = () => {
    switch (activeView) {
        case 'Home':
            return <Hero />;
        case 'Projects':
            return <Projects />;
        case 'Work & Education':
            return <Experience />;
        case 'Resume':
            return <Resume />;
        case 'Contact':
            return <Contact />;
        default:
            return <Hero />;
    }
  };

  return (
    <>
      {/* Fixed Tab Navigation */}
      <div style={styles.navbar}>
        {['Home', 'Projects', 'Work & Education','Resume','Contact'].map((label) => (
          <button
            key={label}
            onClick={() => setActiveView(label)}
            style={{
              ...styles.navButton,
              ...(activeView === label ? styles.activeButton : {})
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Fullscreen View Area */}
      <div id="view-wrapper" style={{
        height: 'calc(100vh - 4.5rem)', 
        overflowY: 'auto',
        marginTop: '4.5rem',
        position: 'relative',
        }}>
        {renderView()}
        </div>    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f9f9f9',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    zIndex: 1000,
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
  },
  activeButton: {
    borderBottom: '2px solid #0077ff',
    fontWeight: 'bold',
    color: '#0077ff',
  },
  viewWrapper: {
    marginTop: '4.5rem',
    minHeight: 'calc(100vh - 4.5rem)',
    overflowY: 'auto',
    position: 'relative',
  }
};

export default ViewSwitcher;
