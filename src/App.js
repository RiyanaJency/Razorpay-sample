import logo from './logo.svg';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/Navbar';
import Footer from './Component/Footer';
import Payment from './Component/Payment';
import Home from './Component/Home';
import UserProfile from './Component/User profile';
import Betting from './Component/Betting';


function App() {
  return (
    <>
    
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
  );
}

export default App;
