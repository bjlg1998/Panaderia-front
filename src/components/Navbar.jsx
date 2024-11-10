import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <div className="header fixed top-0 left-0 w-full py-5 px-[10%] bg-green-700 flex justify-between items-center z-50">
   
      <div className="logo text-white font-black text-4xl">
        Logo
      </div>
    
      <nav className="navbar flex space-x-8">
        <Link 
          to="/" 
          className="relative text-white font-medium text-lg transition duration-300 hover:after:w-full after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="relative text-white font-medium text-lg transition duration-300 hover:after:w-full after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300"
        >
          Productos
        </Link>
        <Link 
          to="/contact" 
          className="relative text-white font-medium text-lg transition duration-300 hover:after:w-full after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300"
        >
          Contact
        </Link>
      </nav>
    
      <button className="ml-8 bg-white text-green-700 font-medium rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition duration-300">
        <span className="sr-only">Iniciar Sesión</span>
        IS
      </button>
    </div>
  );
}

export default NavBar;
