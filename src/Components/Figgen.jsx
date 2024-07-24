import React, { useState } from 'react';

function Figgen() {
  const [activeTab, setActiveTab] = useState('overview');

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

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex h-screen">
      
      <div className="flex-grow p-6 bg-gray-100">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Total Balance</h2>
              <div className="text-4xl font-bold text-gray-800 mb-6">$240,399</div>
              <div className="bg-pink-200 rounded-md p-4 mb-4">
                <h3 className="text-lg font-bold mb-2">Account Type</h3>
                <p className="text-gray-600">Debit Card</p>
                <p className="text-gray-600">•••• •••• •••• 2598</p>
                <p className="text-gray-600">$25000</p>
              </div>
              <div className="flex justify-between">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                  Previous
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Next
                </button>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Goals</h2>
              <div className="flex items-center mb-4">
                <div className="text-4xl font-bold text-gray-800 mr-4">$20,000</div>
                <span className="text-gray-600">✎</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">Target Achieved</p>
                <p className="text-lg font-bold text-gray-800">$12,500</p>
              </div>
              <div>
                <p className="text-gray-600">This month Target</p>
                <p className="text-lg font-bold text-gray-800">$20,000</p>
              </div>
              <div className="mt-6">
                <div className="bg-gray-200 rounded-full h-4 w-full overflow-hidden">
                  <div
                    className="bg-pink-500 h-4"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">0</span>
                  <span className="text-gray-600">12K</span>
                  <span className="text-gray-600">20K</span>
                </div>
                <p className="text-gray-600 mt-2 text-center">
                  Target vs Achievement
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Bill</h2>
              <span className="text-blue-500 font-bold cursor-pointer">
                View All
              </span>
              <div className="bg-gray-200 rounded-md p-4 mt-6">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">May</span>
                    <span className="text-xl font-bold">15</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                    $150
                  </span>
                </div>
                <p className="text-gray-600">
                  Odo - Monthly
                  <br />
                  Last Charge - 14 May, 2022
                </p>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mt-4">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">Jun</span>
                    <span className="text-xl font-bold">16</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                    $559
                  </span>
                </div>
                <p className="text-gray-600">
                  M365 - Yearly
                  <br />
                  Last Charge - 17 Jun, 2023
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'projects' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {/* Project list */}
          </div>
        )}
        {activeTab === 'transactions' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Transactions</h2>
            {/* Transaction list */}
          </div>
        )}
        {activeTab === 'bills' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Bills</h2>
            {/* Bill list */}
          </div>
        )}
        {activeTab === 'expenses' && (
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Recent Transaction</h2>
              <div className="flex justify-between mb-4">
                <span className="text-blue-500 font-bold cursor-pointer">
                  View All
                </span>
                <div className="flex space-x-4">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                    All
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                    Revenue
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                    Expenses
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">
                    ★
                  </span>
                  <span className="ml-3 text-gray-800 font-bold">Profit</span>
                </div>
                <p className="text-gray-600">Gadget & Gear</p>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">17 May 2023</p>
                  <p className="text-gray-800 font-bold">$16000.00</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">
                    ✍
                  </span>
                  <span className="ml-3 text-gray-800 font-bold">Grant</span>
                </div>
                <p className="text-gray-600">XL fashions</p>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">17 May 2023</p>
                  <p className="text-gray-800 font-bold">$20000.00</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">
                    
                  </span>
                  <span className="ml-3 text-gray-800 font-bold">
                    salaries
                  </span>
                </div>
                <p className="text-gray-600">Hajji Biryani</p>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">17 May 2023</p>
                  <p className="text-gray-800 font-bold">$10000.00</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">
                    
                  </span>
                  <span className="ml-3 text-gray-800 font-bold">lunch</span>
                </div>
                <p className="text-gray-600">Uber</p>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">17 May 2023</p>
                  <p className="text-gray-800 font-bold">$1200.00</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Statistics</h2>
              <div className="mb-4">
                <p className="text-gray-600 font-bold mb-2">
                  Weekly Comparison
                </p>
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-md h-40 w-full overflow-hidden">
                      <div
                        className="bg-pink-500 h-24"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-gray-300 h-16"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-pink-500 h-12"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-gray-300 h-10"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-pink-500 h-18"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-gray-300 h-8"
                        style={{ width: '20%' }}
                      ></div>
                      <div
                        className="bg-pink-500 h-14"
                        style={{ width: '20%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600">17 Sun</span>
                      <span className="text-gray-600">18 Mon</span>
                      <span className="text-gray-600">19 Tue</span>
                      <span className="text-gray-600">20 Wed</span>
                      <span className="text-gray-600">21 Thu</span>
                      <span className="text-gray-600">22 Fri</span>
                      <span className="text-gray-600">23 Sat</span>
                    </div>
                  </div>
                  <div className="w-20">
                    <div className="bg-gray-300 rounded-md h-40 overflow-hidden">
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                      <div
                        className="bg-gray-400 h-16"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600">17 Sun</span>
                      <span className="text-gray-600">18 Mon</span>
                      <span className="text-gray-600">19 Tue</span>
                      <span className="text-gray-600">20 Wed</span>
                      <span className="text-gray-600">21 Thu</span>
                      <span className="text-gray-600">22 Fri</span>
                      <span className="text-gray-600">23 Sat</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <span className="bg-pink-500 rounded-full h-2 w-2 mr-2"></span>
                    <span className="text-gray-600">This week</span>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-gray-400 rounded-full h-2 w-2 mr-2"></span>
                    <span className="text-gray-600">Last week</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between h-40">
                <div className="text-gray-600 font-bold">
                  $250k
                </div>
                <div className="text-gray-600 font-bold">
                  $150k
                </div>
                <div className="text-gray-600 font-bold">
                  $100k
                </div>
                <div className="text-gray-600 font-bold">
                  $50k
                </div>
                <div className="text-gray-600 font-bold">
                  $2k
                </div>
                <div className="text-gray-600 font-bold">
                  $0
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">
                Expenses Breakdown
              </h2>
              <span className="text-gray-600">Compare to last month</span>
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-200 rounded-md p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 font-bold">
                      
                    </span>
                    <span className="ml-3 text-gray-800 font-bold">
                      Housing
                    </span>
                  </div>
                  <p className="text-gray-600">$2500.00</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">15%↑</span>
                    <span className="text-gray-800 font-bold">
                      →
                    </span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-md p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 font-bold">
                      
                    </span>
                    <span className="ml-3 text-gray-800 font-bold">
                      subscriptions
                    </span>
                  </div>
                  <p className="text-gray-600">$350.00</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">28%↓</span>
                    <span className="text-gray-800 font-bold">
                      →
                    </span>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-md p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 font-bold">
                      
                    </span>
                    <span className="ml-3 text-gray-800 font-bold">
                      lunch
                    </span>
                  </div>
                  <p className="text-gray-600">$50.00</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">12%↓</span>
                    <span className="text-gray-800 font-bold">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'goals' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Goals</h2>
            {/* Goal list */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            {/* Setting list */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Figgen;