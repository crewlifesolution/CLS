// import React from "react";
// import "./ContactUs.css";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import logo from "../../LoginAssets/logo.png";
// import image from "../../ContactAssets/image.png";

// const ContactUs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const username = localStorage.getItem("username") || "User";
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleUserIconClick = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleLogout = () => {
//     // Clear authentication (for demo purposes, we remove from localStorage)
//     localStorage.removeItem("username");
//     navigate("/");
//   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     consent: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted: ", formData);
//   };
// };

// return (
//   <div className="dashboard-container">
//     {/* Top Navigation Bar */}
//     <header className="top-nav">
//       <div className="top-nav-left">
//         <Link to="/homepage">
//           <img src={logo} alt="Logo Image" />
//         </Link>
//       </div>
//       <div className="top-nav-right">
//         <div className="user-icon" onClick={handleUserIconClick}>
//           <FaUserCircle size={40} />
//         </div>
//         {showDropdown && (
//           <div className="user-dropdown">
//             <ul>
//               <li>
//                 <Link to="/profilepage">My Profile</Link>
//               </li>
//               <li>
//                 <button onClick={handleLogout}>Log Out</button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>

//     <div className="dashboard-main">
//       {/* Left Sidebar Navigation */}
//       <aside className="left-sidebar">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/homepage">Home</Link>
//             </li>
//             <li>
//               <Link to="/services">Services</Link>
//             </li>
//             <li>
//               <Link to="/aboutus">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Contact Us Forms Begins */}
//       <section className="contact-container">
//         {/*Left contact form */}
//         <div className="form-section">
//           <h2>We are here to assist</h2>

//           <form onSubmit={handleSubmit} className="form-content">
//             {/*Name*/}
//             <div className="form-field">
//               <label className="form-label">Name *</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             {/*Email */}
//             <div className="form-field">
//               <label className="form-label">Email Address*</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             {/*Phone*/}
//             <div className="form-field">
//               <label className="form-label">Phone Number*</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Enter with country code"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="form-input"
//               />
//             </div>

//             {/*Message*/}
//             <div className="form-field">
//               <label className="form-label">Message</label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Your message here"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="form-textarea"
//               ></textarea>
//             </div>

//             {/*Consent Checkbox */}
//             <div className="form-consent">
//               <input
//                 type="checkbox"
//                 name="consent"
//                 checked={formData.consent}
//                 onChange={handleChange}
//                 required
//                 className="consent-checkbox"
//               />

//               <label>
//                 I allow this website to store my submission so they can respond
//                 to my inquiry.*
//               </label>
//             </div>

//             {/*Submit button*/}
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Right section: Contact information*/}
//         <div className="info-section">
//           {/*Image section (Instead of map)*/}
//           <div className="info-image">
//             <img src={image} alt="Contact Image" className="image" />
//           </div>

//           {/*Contact Details*/}
//           <div className="info-details">
//             <h3>Get in touch</h3>
//             <p>
//               Email:{" "}
//               <a href="mailto:crewlifesolutions@gmail.com">
//                 crewlifesolutions@gmail.com
//               </a>
//             </p>
//           </div>

//           {/*Location Section*/}
//           <div className="info-location">
//             <h3>Location</h3>
//             <p>Dubai, UAE</p>
//           </div>

//           {/*Hours Section */}
//           <div className="info-hours">
//             <h3>Hours</h3>
//             <p>Monday-Sunday: 9:00am - 10:00pm</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
// );

// export default ContactUs;

import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./ContactUs.css";
import logo from "../../LoginAssets/logo.png";
import image from "../../ContactAssets/image.png";

const ContactUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem("username") || "User";
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserIconClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="top-nav-left">
          <Link to="/homepage">
            <img src={logo} alt="Logo" />
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

        {/* Contact Us Form Section */}
        <section className="contact-container">
          {/* Left: Contact Form */}
          <div className="form-section">
            <h2>We are here to assist</h2>

            <form onSubmit={handleSubmit} className="form-content">
              {/* Name */}
              <div className="form-field">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Phone */}
              <div className="form-field">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter with country code"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="form-consent">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="consent-checkbox"
                />
                <label>
                  I allow this website to store my submission so they can
                  respond to my inquiry.*
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="info-section">
            {/* Image Section */}
            <div className="info-image">
              <img src={image} alt="Contact" className="image" />
            </div>

            {/* Contact Details */}
            <div className="info-details">
              <h3>Get in touch</h3>
              <p>
                Email:{" "}
                <a href="mailto:crewlifesolutions@gmail.com">
                  crewlifesolutions@gmail.com
                </a>
              </p>
            </div>

            {/* Location Section */}
            <div className="info-location">
              <h3>Location</h3>
              <p>United Arab Emirates</p>
            </div>

            {/* Hours Section */}
            <div className="info-hours">
              <h3>Hours</h3>
              <p>Monday-Sunday: 9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
