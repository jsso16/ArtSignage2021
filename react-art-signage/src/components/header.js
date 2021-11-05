function Header() {
  
  return (
    <header className="header">
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