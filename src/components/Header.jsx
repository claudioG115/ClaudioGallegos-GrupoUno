import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/result_Logo.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
};

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo de UrbanFashionTrends" className="logo-image" />
        <h1 className="logo-title">UrbanFashionTrends</h1>
      </div>

       <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/products">Productos</a></li>
          <li><a href="/contact">Contactos</a></li>
        </ul>
      </nav>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;