import './App.css'
import Header from './components/header'
import Main from './components/main'
import Preview from './components/preview'
import Theme from './components/theme'
import Best from './components/best'
import Sale from './components/sale'
import Rising from './components/rising'
import Recommended from './components/recommended'
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [reveal, setReveal] = useState(true);
  const revealElement = useRef(null);

  const listener = e => {
    setReveal(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  useEffect(() => {
    if(reveal) {
      revealElement.current.classList.add("reveal");
      console.log(revealElement);
    }
  }, [reveal])

  return (
    <div className="wrap">
      <div className="container">
        <Header></Header>
        <div className="contents">
          <Main></Main>
          <Preview ref={revealElement}></Preview>
          <Theme></Theme>
          <Best></Best>
          <Sale></Sale>
          <Rising></Rising>
          <Recommended></Recommended>
        </div>
      </div>
    </div>
  );
}

export default App