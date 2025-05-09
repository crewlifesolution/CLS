import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../LoginAssets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import HomePage from "../HomePage/HomePage";
import "./WellbeingServices.css";
import Fatigue from "../../ServiceAssets/Fatigue.png";
import Laundry from "../../ServiceAssets/Laundry.png";
import calender from "../../ServiceAssets/calender.png";
import Car from "../../ServiceAssets/Car.png";

const WellbeingServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  /*Creating the wellbeing section*/
  const wellbeingservices = [
    {
      title: "Fatigue Management",
      description: "Monitor and manage your fatigue levels with our solutions",
      image: Fatigue,
      popupMessage:
        "To access fatigue management, please purchase Standard Package for AED 150 monthly",
    },

    {
      title: "Personal Calendar",
      description:
        "Stay organized with a comprehensive personal and profesisonal calender to keep you on track and well-balanced",
      image: calender,
      popupMessage:
        "To access personalized calender service, please purchase Basic Package for AED 50 monthly",
    },

    {
      title: "Laundry Services",
      description:
        "Get your laundry done amidst your busy schedules by finding nearby cost-effective solutions",
      image: Laundry,
      popupMessage:
        "To access laundry services, please purchase Basic Package for AED 50 monthly",
    },

    {
      title: "Car and Driver License Registration",
      description: "Get your car and driver's license registered with ease",
      image: Car,
      popupMessage:
        "To access car and driver license service, please purchase Premium Package for AED 200 monthly",
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
        <div className="wservices-container">
          <div className="services-header">
            <h3 className="services-subtitle">Elevate Your Crew Life</h3>
            <h2 className="services-title">
              Streamlined Solutions for Aviation Professionals
            </h2>
          </div>

          <div className="services-grid">
            {wellbeingservices.map((service, index) => (
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

export default WellbeingServices;
