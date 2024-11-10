import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: '80px' }}>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
