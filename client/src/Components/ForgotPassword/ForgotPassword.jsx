import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";

//Importing the assets
import video from "../../LoginAssets/CLSvideo.mp4";
import logo from "../../LoginAssets/logo.png";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const ForgotPassword = () => {
  return (
    <div className="ForgotPasswordPage flex">
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
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Reset Password</h3>
          </div>
          {/* Creating the forgot password form */}
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>

            <button type="submit" className="btn">
              <span>Send Code</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Did not recieve code? <Link to="">Resend Code</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
