import React from "react";
import './Header.css'

const Header = () => {
  return (
    <nav className="app__navbar">
      <div className="navbarlogo">
        <h1>PAYDAY</h1>
      </div>
      <ul className="app_nav-links">
        <li className="p__opensans">
          {" "}
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#menu">Add Payment</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#awards">Payment History</a>
        </li>
        <li className="p__opensans">
          {" "}
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="nav-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
      </div>
    </nav>
  );
};

export default Header;
