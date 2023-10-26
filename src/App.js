import Header from "./components/Header/Header"
import Home from './Pages/Home/Home'
import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleScrollToTop); // Subir para o topo das páginas
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  return (
    <div className="App">
        <Header /> 
    </div>
  );
}

export default App;
