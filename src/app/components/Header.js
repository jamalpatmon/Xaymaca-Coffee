const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Xaymaca Coffee
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#aboutus" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="#contactus" className="nav__link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
