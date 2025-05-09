//Importing all the packages
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./HomePage.css";
import logo from "../../LoginAssets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import crew from "../../HomePageAssets/crew.png";
import event from "../../HomePageAssets/event.png";
import industry from "../../HomePageAssets/industry.png";
import office from "../../HomePageAssets/office.png";
import tunnel from "../../HomePageAssets/tunnel.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";
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

        {/* Main Content Area */}
        <section className="dashboard-content">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            sliderPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="image-carousel"
          >
            <SwiperSlide>
              <img src={crew} alt="crew" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={event} alt="event" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={industry} alt="industry" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={office} alt="office" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tunnel} alt="tunnel" />
            </SwiperSlide>
          </Swiper>

          <div className="welcome-message">
            <h2>Elevate your crew life</h2>
            <p>Experience a seamless journey</p>
            <button onClick={() => navigate("/servicepage")}>
              View Services
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
