import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'overview', title: 'Overview', icon: 'grid' },
    { id: 'projects', title: 'Projects', icon: 'folder' },
    { id: 'transactions', title: 'Transactions', icon: 'exchange' },
    { id: 'bills', title: 'Bills', icon: 'receipt' },
    { id: 'expenses', title: 'Expenses', icon: 'wallet' },
    { id: 'goals', title: 'Goals', icon: 'clock' },
    { id: 'settings', title: 'Settings', icon: 'settings' },
  ];

  return (
    <div className="sidebar bg-gray-800 w-64 p-6 text-white h-full flex flex-col justify-between">
      <ul className="flex-1">
        {tabs.map((tab) => (
          <li key={tab.id} className={`cursor-pointer p-4 mb-2 rounded-md hover:bg-gray-700 ${activeTab === tab.id ? 'bg-gray-700' : ''}`}>
            <Link 
              to={`/${tab.id}`} 
              className="flex items-center"
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={`icon-${tab.icon} text-xl`}></span>
              <span className="ml-3 text-lg">{tab.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
