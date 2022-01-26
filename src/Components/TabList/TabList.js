import React from 'react';
import './TabList.scss';

export default function TabList({ tabList, selectedTab, setSelectedTab }) {
  return (
    <ul className="tablist" role="tablist">
      {tabList.map(tab => {
        return (
          <li
            className={`${tab === selectedTab && 'active'}`}
            key={tab}
            role="tab"
            aria-selected={selectedTab === tab}
          >
            <button value={tab} onClick={() => setSelectedTab(tab)}>
              {tab}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
