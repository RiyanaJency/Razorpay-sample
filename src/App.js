<<<<<<< HEAD
import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/Navbar';
import Footer from './Component/Footer';
import Payment from './Component/Payment';
import Home from './Component/Home';
import UserProfile from './Component/User profile';
import Betting from './Component/Betting';
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Bet from './betting ';
import Footer from './Footer';
import Userprofile from './Userprofile';
import Home from './Home';
>>>>>>> b95f8af33058c5917b0b0bff65a0c15c76eb801f


function App() {
  return (
    <>
    
<<<<<<< HEAD
  <Router>
  <NavigationBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/User profile' element={<UserProfile/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Betting' element={<Betting/>}/>
    </Routes>
  </Router>
  <Footer/>
  </>
=======
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
>>>>>>> b95f8af33058c5917b0b0bff65a0c15c76eb801f
  );
}

export default App;


