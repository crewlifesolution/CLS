import "./App.scss";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import ContactUs from "./Components/ContactUs/ContactUs";
import ServicePage from "./Components/ServicePage/ServicePage";
import BiddingServices from "./Components/BiddingServices/BiddingServices";
import LifestyleServices from "./Components/LifestyleServices/LifestyleServices";
import WellbeingServices from "./Components/WellbeingServices/WellbeingServices";

//Import the react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

//Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },

  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
  },

  {
    path: "/forgotpassword",
    element: (
      <div>
        <ForgotPassword />
      </div>
    ),
  },

  {
    path: "/navbar",
    element: (
      <div>
        <NavBar />
      </div>
    ),
  },

  {
    path: "/homepage",
    element: (
      <div>
        <HomePage />
      </div>
    ),
  },

  {
    path: "/profilepage",
    element: (
      <div>
        <ProfilePage />
      </div>
    ),
  },

  {
    path: "/aboutus",
    element: (
      <div>
        <AboutUs />
      </div>
    ),
  },

  {
    path: "/services",
    element: (
      <div>
        <Services />
      </div>
    ),
  },

  {
    path: "/contactus",
    element: (
      <div>
        <ContactUs />
      </div>
    ),
  },

  {
    path: "/servicepage",
    element: (
      <div>
        <ServicePage />
      </div>
    ),
  },

  {
    path: "/biddingservices",
    element: (
      <div>
        <BiddingServices />
      </div>
    ),
  },

  {
    path: "/lifestyleservices",
    element: (
      <div>
        <LifestyleServices />
      </div>
    ),
  },

  {
    path: "/wellbeingservices",
    element: (
      <div>
        <WellbeingServices />
      </div>
    ),
  },
]);

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/message") // Uses proxy in package.json to avoid CORS issues
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <RouterProvider router={router} />

      <p>BackEnd Response: {message || "Loading.."}</p>
    </div>
  );
}
export default App;
