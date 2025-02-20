import React from "react";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../LoginAssets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import image from "../../AboutPageAssets/image.png";

const AboutUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username") || "user";
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserIconClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Clear authentication (for demo purposes, we remove from localStorage)
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="top-nav-left">
          <Link to="/homepage">
            <img src={logo} alt="Logo Image" />
          </Link>
        </div>
        <div className="top-nav-right">
          <div className="user-icon" onClick={handleUserIconClick}>
            <FaUserCircle size={40} />
          </div>
          {showDropdown && (
            <div className="user-dropdown">
              <ul>
                <li>
                  <Link to="/profilepage">My Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-main">
        {/* Left Sidebar Navigation */}
        <aside className="left-sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/homepage">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/*Beginning the about us page*/}
        <section class="About">
          <div class="About-text">
            <h2>About Us</h2>
            <p>
              CrewLifeSolution is an exclusive premium web application designed
              specifically for working professionals and crew members including
              airline industry, air hostesses, pilots, flight staff, engineers
              and more. Our platform offers a unique blend of features including
              leave bidding, roster management, personalized calenders to keep
              your professional life organized along with additional services
              such as event reminders, an AI chatbot and vendor options for
              cakes, snacks and laundry.
            </p>

            <div className="about-link">
              <Link to="/contact">Get In Touch</Link>
            </div>
          </div>

          <div class="About-img">
            <img src={image} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
