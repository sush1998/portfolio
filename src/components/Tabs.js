import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div style={styles.tabList} className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`tab-button ${activeTab === tab.label ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs.map((tab) =>
            tab.label === activeTab ? (
            <div key={tab.label} className="fullscreen-tab">{tab.content}</div>
            ) : null
            )}
        </div>
    </div>
  );
};

const styles = {
  tabList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    borderBottom: '2px solid #eee',
    marginBottom: '1rem',
  }
};

export default Tabs;
