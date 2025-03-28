import './App.css';
import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import ViewSwitcher from './components/ViewSwitcher';

function App() {

  return (
    <div id="top" style={{ height: '100vh', overflow: 'hidden' }}>
      <ViewSwitcher />
      <ScrollToTopButton />
    </div>
  );
}
export default App;
