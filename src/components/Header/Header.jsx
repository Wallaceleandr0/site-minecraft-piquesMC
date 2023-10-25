import Rotas from "../Rotas/Rotas";
import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
  const [menuVisivel, setMenuVisivel] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > 500) {
        setMenuVisivel(true);
      } else {
        setMenuVisivel(false);
      }
    };

    checkWidth();

    return () => {
      window.addEventListener('resize', checkWidth);
    };
  }, []);

  const handleMenu = () => {
    if (window.innerWidth <= 500) {
      setMenuVisivel(!menuVisivel);
    }
  };

  return (
    <div className="Header">
      <header>
        <div className="Header-logo-a">
          <a href="#" id="Header-logo">PiquesMC</a>
          <div className="Header-menu" onClick={handleMenu}>
            <div className="line-menu"></div>
            <div className="line-menu"></div>
            <div className="line-menu"></div>
          </div>
        </div>
        <ul
          className={`Header-ul ${menuVisivel ? 'visible' : ''}`}
          id="myList"
        >
          <Link to="/" onClick={handleMenu}>
            Inicio
          </Link>
          <Link to="/torneio" onClick={handleMenu}>
            Torneio
          </Link>
          <Link to="/loja" onClick={handleMenu}>
            Loja
          </Link>
        </ul>
      </header>
      <Rotas />
    </div>
  );
}

export default Header;
