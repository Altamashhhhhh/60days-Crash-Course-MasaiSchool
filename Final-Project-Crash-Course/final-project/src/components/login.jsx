import React from 'react';
// import { useHistory } from 'react-router-dom';
import './login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  

  return (
    <div>
      <div className="login-main">
        <h1>LOGIN PAGE</h1>
        <form action="#" style={{ width: "70%", margin: "auto", textAlign: "center" }}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email ID"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <button type="submit">LOG IN</button>
          <button > <li><Link to="/signup" > Sign Up</Link></li></button>
        </form>
      </div>
    </div>
  );
};

export default Login;
