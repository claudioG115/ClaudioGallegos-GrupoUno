import React from 'react';
import './Footer.css';
import logo from '../assets/images/result_Logo.jpg';

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-logo-container">
        <img src={logo} alt="UrbanFashionTrends Logo" className="footer-logo" />
      </div>
      <div className="footer-name">© 2024 UrbanFashionTrends. Todos los derechos reservados.</div>
      
      <div className="footer-links">
        <ul>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">Repositorio GitHub</a></li>
          <li><a href="/privacy-policy">Política de Privacidad</a></li>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;