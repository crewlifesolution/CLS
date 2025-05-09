import React from "react";
import { useState, useEffect } from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  //Making the constants
  const [profileData, setProfileData] = useState({
    FullName: "",
    DateOfBirth: "",
    Nationality: "",
    MaritalStatus: "",
    NumberOfKids: "",
    CountryOfResidence: "",
    CityOfResidence: "",
    Company: "",
    Designation: "",
    HomeAddress: "",
    CompanyAddress: "",
    ImportantDates: "",
  });

  //tracking if form is in edit mode or not
  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  //Stimulate fetching and saving the profile data
  useEffect(() => {
    const savedProfile = localStorage.getItem("profileData");
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
      setIsEditing(false);
    }
  }, []);

  //Handling the changed data
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  //Handling and saving the data
  const handleSave = (e) => {
    e.preventDefault();

    //Saving the profile data and using local Storage
    localStorage.setItem("profileData", JSON, stringify(profileData));
    setIsEditing(false);
  };

  //Handling the edit button
  const handleEdit = () => {
    setIsEditing(true);
  };

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
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    );
  };
  return (
    <div className="profile-page">
      <header className="profile-header">
        <h2>My Profile</h2>
      </header>

      <div className="profile-container">
        <form onSubmit={handleSave} className="profile-form">
          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              name="FullName"
              value={profileData.FullName}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Date Of Birth: </label>
            <input
              type="date"
              name="DateOfBirth"
              value={profileData.DateOfBirth}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>Nationality: </label>
            <input
              type="text"
              name="nationality"
              value={profileData.Nationality}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your nationality"
            />
          </div>

          <div className="form-group">
            <label>Marital Status: </label>
            <input
              type="text"
              name="MaritalStatus"
              value={profileData.MaritalStatus}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your marital status"
            />
          </div>

          <div className="form-group">
            <label>Number of Kids: </label>
            <input
              type="number"
              name="NumberOfKids"
              value={profileData.NumberOfKids}
              onChange={!isEditing}
              placeholder="Enter the number of kids"
            />
          </div>

          <div className="form-group">
            <label>Country of Residence: </label>
            <input
              type="text"
              name="CountryOfResidence"
              value={profileData.CountryOfResidence}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your country of residence"
            />
          </div>

          <div className="form-group">
            <label>City of Residence: </label>
            <input
              type="text"
              name="CityOfResidence"
              value={profileData.CityOfResidence}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your city of residence"
            />
          </div>

          <div className="form-group">
            <label>Company/Organization:</label>
            <input
              type="text"
              name="Company"
              value={profileData.Company}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter company or organization"
            />
          </div>

          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              name="Designation"
              value={profileData.Designation}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your designation"
            />
          </div>

          <div className="form-group">
            <label>Home Address: </label>
            <input
              type="text"
              name="HomeAddress"
              value={profileData.HomeAddress}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your home address"
            />
          </div>

          <div className="form-group">
            <label>Company Address:</label>
            <input
              type="text"
              name="CompanyAddress"
              value={profileData.CompanyAddress}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter your company address"
            />
          </div>

          <div className="form-group">
            <label>Important Dates (e.g., birthdays, anniversaries):</label>
            <textarea
              name="ImportantDates"
              value={profileData.ImportantDates}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="Enter important dates..."
            ></textarea>
          </div>

          <div className="form-actions">
            {isEditing ? (
              <button type="submit" className="btn">
                Save
              </button>
            ) : (
              <button type="button" className="btn" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
