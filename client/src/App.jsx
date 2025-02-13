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

//Import the react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
