import React from 'react';
import './SectionMain.css';

function SectionMain(props) {
  return (
    <section className="welcome-container">
      <h1>Bienvenido</h1>
      <p>hola</p>
      <p>{props.description}</p>
    </section>
  );
}

export default SectionMain;