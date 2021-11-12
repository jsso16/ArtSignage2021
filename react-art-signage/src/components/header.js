import React, { useState, useEffect, useRef } from 'react'
import '../styles/header.css'

function Header() {
  const [top, setTop] = useState(true);
  const headerElement = useRef(null);

  const listener = e => {
    if(window.pageYOffset > 0) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  useEffect(() => {
    if(top) {
      headerElement.current.classList.remove("active");
    } else {
      headerElement.current.classList.add("active");
    }
  }, [top])

  return (
    <header className="header" ref={headerElement}>
      <div className="header-wrap">
        <ul className="menu-list">
          <li className="menu">
            <img className="white" src="../img/ic_logo_white.png" alt="Artprime Club" />
            <img className="black" src="../img/ic_logo_black.png" alt="Artprime Club" />
          </li>
          <li className="menu">
            <span>Artworks</span>
          </li>
          <li className="menu">
            <span>Digital canvas</span>
          </li>
          <li className="menu">
            <span>Magazine</span>
          </li>
        </ul>
        <button className="login-btn">Login</button>
      </div>
    </header>
  )
}

export default Header