import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" name="email" required />
        <button type="submit">Reset Password</button>
        <div className="links">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
