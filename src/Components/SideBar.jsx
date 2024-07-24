import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // for navigation

const SideLeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const tabs = [
    {
      id: 'overview',
      title: 'Overview',
      icon: 'grid',
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: 'folder',
    },
    {
      id: 'transactions',
      title: 'Transactions',
      icon: 'exchange',
    },
    {
      id: 'bills',
      title: 'Bills',
      icon: 'receipt',
    },
    {
      id: 'expenses',
      title: 'Expenses',
      icon: 'wallet',
    },
    {
      id: 'goals',
      title: 'Goals',
      icon: 'clock',
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'settings',
    },
  ];
  const [activeTab, setActiveTab] = useState('overview');
  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sidebar bg-gray-800 w-64 p-6 text-white">
    <ul>
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={`cursor-pointer p-3 rounded-md hover:bg-gray-700 ${
            activeTab === tab.id && 'bg-gray-700'
          }`}
          onClick={() => handleClick(tab.id)}
        >
          <span className={`icon-${tab.icon}`}></span>
          <span className="ml-3">{tab.title}</span>
        </li>
      ))}
    </ul>
    <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
      Logout
    </button>
  </div>
  );
}

export default SideLeftBar;