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
import NotFound from './Components/NotFound'; // Add a NotFound component

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="flex">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="content flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/settings" element={<Settings />} />
              {/* Add a route to handle unmatched paths */}
              <Route path="*" element={<NotFound />} />  
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
