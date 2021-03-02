import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/trbc_00/">
        <img id="img-logo" src={require('../imgs/logo.png')} alt="" />
      </Link>
      <ul className="main-nav" id="js-menu">
        <Link to="/trbc_00/" className="main-nav-link">
          <li className="nav-links">Home</li>
        </Link>
        <Link to="/trbc_00/aboutus" className="main-nav-link">
          <li className="nav-links">About Us</li>
        </Link>

        <Link to="/trbc_00/imnew" className="main-nav-link">
          <li className="nav-links">I'm New</li>
        </Link>
        <Link to="/trbc_00/outreach" className="main-nav-link">
          <li className="nav-links">Outreach</li>
        </Link>
        <Link to="/trbc_00/missions" className="main-nav-link">
          <li className="nav-links">Missions</li>
        </Link>
        <Link to="/trbc_00/discipleship" className="main-nav-link">
          <li className="nav-links">Discipleship</li>
        </Link>
        <Link to="/trbc_00/facilitybookings" className="main-nav-link">
          <li className="nav-links">Facility Bookings</li>
        </Link>
        <Link to="/trbc_00/resources" className="main-nav-link">
          <li className="nav-links">Resources</li>
        </Link>
        <Link to="/trbc_00/" className="main-nav-link">
          <li className="nav-links" id="lang-toggle">
            ENGLISH
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
