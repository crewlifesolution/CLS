import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Fooddelivery from "../../ServiceAssets/Fooddelivery.png";
import logo from "../../LoginAssets/logo.png";
import Chaffer from "../../ServiceAssets/Chaffer.png";
import Birthday from "../../ServiceAssets/Birthday.png";
import Travel from "../../ServiceAssets/Travel.png";
import "./LifestyleServices.css";

const LifestyleServices = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username") || "user";
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleUserIconClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    // Clear authentication (for demo purposes, we remove from localStorage)
    localStorage.removeItem("username");
    navigate("/");
  };

  /*Making the lifestyle services box*/
  const lifestyleservices = [
    {
      title: "Birthday and Event Planning",
      description: "Plan ahead for your special occassions with our services",
      image: Birthday,
      popupMessage:
        "To access birthday and event planning, please purchase Premium Package for AED 200 monthly",
    },

    {
      title: "Travel and Holiday Planning",
      description:
        "Enjoy the vacation you deserve by utilizing our management services",
      image: Travel,
      popupMessage:
        "To acess travel and holiday planning, please purchase Premium Package for AED 200 monthly",
    },

    {
      title: "Food Delivery Services",
      description: "Hungry? Get that meal fast with our food delivery services",
      image: Fooddelivery,
      popupMessage:
        "To access food delivery services, please purchase Basic Package for AED 50 monthly",
    },

    {
      title: "Chaffer Services",
      description:
        "Have the luxury of a personal driver with our chaffer services",
      image: Chaffer,
      popupMessage:
        "To access chaffer services, please purchase Premium Package for AED 200 monthly",
    },
  ];

  const handleServiceClick = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="dashboard-container">
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
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
                <Link to="/servicepage">Services</Link>
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

        {/* Main Services Page */}
        <div className="lservices-container">
          <div className="services-header">
            <h3 className="services-subtitle">Elevate Your Crew Life</h3>
            <h2 className="services-title">
              Streamlined Solutions for Aviation Professionals
            </h2>
          </div>

          <div className="services-grid">
            {lifestyleservices.map((service, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => handleServiceClick(service.popupMessage)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-content">
                  <h3 className="service-title">{service.title} &gt;</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleServices;
