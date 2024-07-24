import React, { useState } from 'react';
import Sidebar from '../SideBar';

function Figgen() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <div className="flex space-x-4 mb-4">
          <button
            className={`py-2 px-4 rounded ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'transactions' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('transactions')}
          >
            Transactions
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'bills' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('bills')}
          >
            Bills
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'expenses' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('expenses')}
          >
            Expenses
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'goals' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('goals')}
          >
            Goals
          </button>
          <button
            className={`py-2 px-4 rounded ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

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
                  <div className="bg-pink-500 h-4" style={{ width: '60%' }}></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">0</span>
                  <span className="text-gray-600">12K</span>
                  <span className="text-gray-600">20K</span>
                </div>
                <p className="text-gray-600 mt-2 text-center">Target vs Achievement</p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Bill</h2>
              <span className="text-blue-500 font-bold cursor-pointer">View All</span>
              <div className="bg-gray-200 rounded-md p-4 mt-6">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">May</span>
                    <span className="text-xl font-bold">15</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">$150</span>
                </div>
                <p className="text-gray-600">Odo - Monthly<br />Last Charge - 14 May, 2022</p>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mt-4">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">Jun</span>
                    <span className="text-xl font-bold">16</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">$559</span>
                </div>
                <p className="text-gray-600">M365 - Yearly<br />Last Charge - 17 Jun, 2023</p>
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
                <span className="text-blue-500 font-bold cursor-pointer">View All</span>
                <div className="flex space-x-4">
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">All</button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">Revenue</button>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">Expenses</button>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">★</span>
                  <span className="ml-3 text-gray-800 font-bold">Profit</span>
                </div>
                <p className="text-gray-600">$12,000</p>
                <p className="text-gray-600">12 Jun 2024</p>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">★</span>
                  <span className="ml-3 text-gray-800 font-bold">Paypal</span>
                </div>
                <p className="text-gray-600">$6,500</p>
                <p className="text-gray-600">12 Jul 2024</p>
              </div>
              <div className="bg-gray-200 rounded-md p-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-800 font-bold">★</span>
                  <span className="ml-3 text-gray-800 font-bold">Revenue</span>
                </div>
                <p className="text-gray-600">$14,000</p>
                <p className="text-gray-600">13 Jul 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Monthly Expense</h2>
              <div className="flex justify-between mb-4">
                <span className="text-blue-500 font-bold cursor-pointer">View All</span>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                  Edit
                </button>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">Electricity</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">$100</span>
                </div>
                <p className="text-gray-600">Due Date: 12 Jul 2024</p>
              </div>
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">Internet</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">$50</span>
                </div>
                <p className="text-gray-600">Due Date: 15 Jul 2024</p>
              </div>
              <div className="bg-gray-200 rounded-md p-4">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-800 font-bold">
                    <span className="text-lg">Rent</span>
                  </div>
                  <span className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">$500</span>
                </div>
                <p className="text-gray-600">Due Date: 1 Aug 2024</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'goals' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Goals</h2>
            {/* Goals content */}
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            {/* Settings content */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Figgen;
