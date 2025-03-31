import React, { useState } from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Resume from './Resume';
import Contact from './Contact';
import theme from '../styles/theme';

const ViewSwitcher = () => {
  const [activeView, setActiveView] = useState('Home');

  const renderView = () => {
    switch (activeView) {
      case 'Home':
        return <Hero setActiveView={setActiveView} />;
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
      {/*Nav Tab */}
      <div style={styles.navbar}>
        {['Home', 'Projects', 'Work & Education', 'Resume', 'Contact'].map((label) => (
          <button
            key={label}
            onClick={() => setActiveView(label)}
            style={{
              ...styles.navButton,
              ...(activeView === label ? styles.activeButton : {}),
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        id="view-wrapper"
        style={{
          height: 'calc(100vh - 4.5rem)',
          marginTop: '4.5rem',
          position: 'relative',
          overflowY: 'scroll',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {display: 'none', }}}>
        {renderView()}
      </div>
    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F0F4F8',
    borderBottom: `1px solid ${theme.colors.lightText}`,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing.gapLarge,
    padding: '1rem',
    zIndex: 1000,
    boxShadow: theme.shadow.light,
    fontWeight:'900',
  },
  navButton: {
    all:'unset',
    background: 'none',
    border: 'none',
    fontSize: theme.fontSize.subheading, 
    fontWeight: theme.fontWeight.bold,  
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    color: theme.colors.lightText,
    transition: theme.transitions.default,
  },
  activeButton: {
    borderBottom: `2px solid ${theme.colors.primary}`,
    color: '#000000',
    fontWeight: theme.fontWeight.bold,
  },
  
};

export default ViewSwitcher;
