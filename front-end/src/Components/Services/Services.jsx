import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../LoginAssets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import image from "../../ServiceAssets/image.png";
import Photo1 from "../../ServiceAssets/Photo1.png";

const Services = () => {
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

  const pageservice = [
    {
      title: "Leave Bidding",
      description:
        "Seamlessly managee your time off with our leave bidding features",
      image: { Photo1 },
    },

    {
      title: "Roster Management",
      description:
        "Take control of your work schedule with our dynamic roster management suited to your needs",
      image: { image },
    },

    {
      title: "Personal and Professional Calendar",
      description:
        "Stay organized with a comprehensive personal and profesisonal calender to keep you on track and well-balanced.",
      image: {},
    },

    {
      title: "Fatigue Management",
      description:
        "Monitor and manage your fatigue levels with data-driven insights",
      image: {},
    },

    {
      title: "Laundry Services",
      description:
        "Get your laundry done amidst your busy schedules by finding nearby cost-effective solutions",
      image: {},
    },

    {
      title: "Food Delivery Services",
      description:
        "Order your cake and drinks from your nearest and favorite locations and bakeries",
      image: {},
    },
  ];

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

        {/* Main Services Page */}
        <div className="services-container">
          <div className="services-header">
            <h3 className="services-subtitle">Elevate Your Crew Life</h3>
            <h2 className="services-title">
              Streamlined Solutions for Aviation Professionals
            </h2>
          </div>

          <div className="services-grid">
            {pageservice.map((service, index) => (
              <div key={index} className="service-card">
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

export default Services;
