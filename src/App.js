//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
