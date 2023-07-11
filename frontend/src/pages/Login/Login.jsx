import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Loginpage-container">
      <div className="loginpage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
        
      </div>
      <div className="loginpage-gridright">
        <div className="loginInsidecontent">
          <div className="loginFormHeader-loginpage">
            <div className="loginpage-color">Sign in</div>
            <span>
              or <a href="#">create an account</a>
            </span>
          </div>
          <input className="input-loginpage" type="text" placeholder="Email" />
          <input
            type="password"
            className="input-loginpage"
            placeholder="Password"
          />
          <div className="loginformbottom-loginpage">
            <div className="checkboxloginpage">
              <input type="checkbox" name="remember" id="rememberLoginPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="rememberLoginPage" className="loginpage-color">Remember me</label>
            </div>
            <button>Sign in</button>
          </div>
          <a href="#">Forgot your password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
