import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Signup.css";
const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Login</button>
        <div className="links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
