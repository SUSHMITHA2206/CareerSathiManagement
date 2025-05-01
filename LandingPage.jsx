// src/components/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Career Saathi</h1>
        <p>Your one-stop solution for student financial aid applications.</p>
        <button onClick={() => navigate("/profile")}>Get Started</button>
      </header>
      <section className="landing-info">
        <h2>Why Career Saathi?</h2>
        <ul>
          <li>✔️ Apply for financial aid easily</li>
          <li>✔️ Track your application status</li>
          <li>✔️ Access and manage your profile anytime</li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
