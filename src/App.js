import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Bet from './betting ';
import Footer from './Footer';
import Userprofile from './Userprofile';
import Home from './Home';


function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="betting" element={< Bet/>} />
        <Route path="Userprofile" element={< Userprofile/>} />
        <Route path="Home" element={< Home/>} />




        




      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;


