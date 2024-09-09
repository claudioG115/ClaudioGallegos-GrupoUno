import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionMain from './components/SectionMain';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionMain title="Bienvenido" />
      <Footer />
    </div>
  );
}

export default App;