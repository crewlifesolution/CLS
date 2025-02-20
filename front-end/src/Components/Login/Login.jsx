import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

//Importing the assets
import video from "../../LoginAssets/CLSvideo.mp4";
import logo from "../../LoginAssets/logo.png";
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">
              Manage your personal life one click at a time!
            </h2>
            <p>Adapt to a scheduled, hassle free lifestyle!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome</h3>
          </div>
          {/* Creating the login form */}
          <form action="" className="form grid">
            <span className="showMessage">Login Status</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="text" id="password" placeholder="Enter Password" />
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/homepage")}
              className="btn flex"
            >
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot Your Password? <Link to="/forgotPassword">Click Here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
