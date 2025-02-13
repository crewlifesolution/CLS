import React from "react";
import "./NavBar.css";
import logo from "../../LoginAssets/logo.png";

const NavBar = () => {
  return (
    <header className="header">
      <div className="NavLogo">
        <Link to="">
          <img src={logo} alt="Logo Image" />
        </Link>
      </div>

      {/*Creating the navbar*/}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default NavBar;
