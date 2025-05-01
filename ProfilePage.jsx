// src/components/ProfilePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProfilePage.css"

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleApply = () => navigate("/apply");
  const handleUpdate = () => navigate("/update-profile");
  const handleTrack = () => navigate("/track-status");
  const handleView = () => navigate("/view-applications");
  const handlePassword = () => navigate("/reset-password");
  const handleSession=()=>navigate("/available-sessions");
  const handleNotification=()=>navigate("/notification")
  const handleLogout=()=>navigate("/Logout");
  return (
    <div className="profile-container">
      <button onClick={handleLogout} className="Logout" style={{"position":"fixed",
  "top":"10px","right":"10px"}}>Logout</button>
      <h1 className="profile-heading">Welcome to Your Profile</h1>
      {/* <p className="profile-subtext">Manage your financial aid application below</p> */}
      <div className="profile-buttons">
        <button onClick={handleApply}>Apply for Financial Aid</button>
        <button onClick={handleUpdate}>Edit / Update Application</button>
        <button onClick={handleTrack}>Track Application Status</button>
        <button onClick={handleView}>View Applications</button>
        <button onClick={handlePassword}>Reset Password</button>
        <button onClick={handleSession}>Available Training Sessions</button> 
        <a href="/notification" onClick={handleNotification} style={{"position":"fixed","top":"10px","right":"93px"}}>Notification</a>     
      </div>
    </div>
  );
};

export default ProfilePage;
