import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import Home from './Components/Home';
import Overview from './Components/pages/Overview';
import Projects from './Components/pages/Projects';
import Transactions from './Components/pages/Transactions';
import Bills from './Components/pages/Bills';
import Expenses from './Components/pages/Expenses';
import Goals from './Components/pages/Goals';
import Settings from './Components/pages/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(false); // State to control loading screen

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex h-full w-full">
          <div>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div>

          <div className="content flex-1 p-6">
            {loading && (
              <div className="loading-overlay">
                <div className="loader"></div>
              </div>
            )}
            <div className="w-full">

            <Routes>
              <Route path="/" element={<Home setLoading={setLoading} />} />
              <Route path="/overview" element={<Overview setLoading={setLoading} />} />
              <Route path="/projects" element={<Projects setLoading={setLoading} />} />
              <Route path="/transactions" element={<Transactions setLoading={setLoading} />} />
              <Route path="/bills" element={<Bills setLoading={setLoading} />} />
              <Route path="/expenses" element={<Expenses setLoading={setLoading} />} />
              <Route path="/goals" element={<Goals setLoading={setLoading} />} />
              <Route path="/settings" element={<Settings setLoading={setLoading} />} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
