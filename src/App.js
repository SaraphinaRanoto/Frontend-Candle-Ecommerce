import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import './App.css';
import Candles from './components/pages/Candles';

 
function App() {
  return (
    <div>
      
      <Router>
      <nav>
      <h3>CANDLE LIGHT</h3>
         <Link className="text-link" to="/">Home</Link>
         <Link className="text-link" to="/About">About</Link>
         <Link className="text-link" to="/Shop">Shop</Link>
         {/* <Link className="text-link" to="/Candles">Candles</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Candles/:id_num" element={<Candles/>}/>
      </Routes>
    </Router>
    </div>


  );
}
 
export default App; 