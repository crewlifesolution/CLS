import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../LoginAssets/logo.png";
import HomePage from "../HomePage/HomePage";
import { FaUserCircle } from "react-icons/fa";
import Bidding from "../../ServicePageAssets/Bidding.png";
import Wellbeing from "../../ServicePageAssets/Wellbeing.png";
import Lifestyle from "../../ServicePageAssets/Lifestyle.png";
import "./ServicePage.css";
const ServicePage = () => {
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

  const pageservices = [
    {
      title: "Bidding Services",
      description:
        "Explore all our services related to bidding and schedule management",
      image: Bidding,
      link: "/biddingservices",
    },

    {
      title: "Personal Wellbeing Services",
      description:
        "Your well-being is our top priority, explore services that help you maintain your healthy lifestyle",
      image: Wellbeing,
      link: "/wellbeingservices",
    },

    {
      title: "Lifestyle and Delivery Services",
      description:
        "Explore recreational services and seamless delivery options to make your events better",
      image: Lifestyle,
      link: "/lifestyleservices",
    },
  ];

  const handleNavigate = (link) => {
    navigate(link);
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
        <div className="services-container">
          <div className="services-header">
            <h3 className="services-subtitle">Elevate Your Crew Life</h3>
            <h2 className="services-title">
              Streamlined Solutions for Aviation Professionals
            </h2>
          </div>

          <div className="services-grid">
            {pageservices.map((service, index) => (
              <div key={index} className="service-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-content">
                  <h3 className="service-title">{service.title} &gt;</h3>
                  <p className="service-description">{service.description}</p>
                  <button
                    className="service-button"
                    onClick={() => handleNavigate(service.link)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
