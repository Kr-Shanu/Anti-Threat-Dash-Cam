import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="Signuppage-container">
      <div className="signuppage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
      </div>
      <div className="signupPage-gridright">
        <div className="signupInsidecontent">
          <div className="signupFormHeader-signuppage">
            <div className="signup-color">Register</div>
            <span>
              or <a href="#">create an account</a>
            </span>
          </div>
          <div className="inputBoxes-signupPage">
            <input
              className="input-signuppage"
              type="text"
              placeholder="First Name"
            />
            <input
              className="input-signuppage"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="input-signuppage grid-expand-signupPage"
              type="text"
              placeholder="Email"
            />
            <input type="text" placeholder="Driving License Id" className="input-signuppage"/>
            <input type="text" placeholder="Car Registration No." className="input-signuppage"/>
            <input
              className="input-signuppage"
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              className="input-signuppage"
              placeholder="Confirm Password"
            />
          </div>
          <div className="signupformbottom-signuppage">
            <div className="checkboxsignuppage">
              <input type="checkbox" name="remember" id="remembersignupPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="remembersignupPage" className="signup-color">
                I agree to the terms and condition
              </label>
            </div>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
