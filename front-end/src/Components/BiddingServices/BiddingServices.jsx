import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../LoginAssets/logo.png";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Leave from "../../ServiceAssets/Leave.png";
import Roster from "../../ServiceAssets/Roster.png";
import Weekend from "../../ServiceAssets/Weekend.png";
import Layover from "../../ServiceAssets/Layover.png";
import "./BiddingServices.css";

const BiddingServices = () => {
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

  /*Makign the bidding */
  const biddingservice = [
    {
      title: "Leave Bidding",
      description: "Manage your leaves and inform your management priorly",
      image: Leave,
      popupMessage:
        "To access leave bidding service, please purchase Basic Package for AED 50 monthly",
    },

    {
      title: "Roster Bidding",
      description:
        "Keep your schedules organized to have seamless work experience",
      image: Roster,
      popupMessage:
        "To access roster bidding service, please purchase Standard Package for AED 150 monthly",
    },

    {
      title: "Weekend Bidding",
      description: "Make your weekends hasslefree by bidding for your weekends",
      image: Weekend,
      popupMessage:
        "To access weekend bidding, please purchase Standard Package for AED 150 monthly",
    },

    {
      title: "Layover Bidding",
      description: "Plan the best during layovers with bidding",
      image: Layover,
      popupMessage:
        "To access layover bidding, please purchase Premium Package for AED 200 monthly",
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
        <div className="bservices-container">
          <div className="services-header">
            <h3 className="services-subtitle">Elevate Your Crew Life</h3>
            <h2 className="services-title">
              Streamlined Solutions for Aviation Professionals
            </h2>
          </div>

          <div className="services-grid">
            {biddingservice.map((service, index) => (
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

export default BiddingServices;
