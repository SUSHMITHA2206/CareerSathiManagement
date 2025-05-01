// src/pages/ApplicationPage.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import FinancialAidForm from "../components/FinancialAidForm";
import UpdateProfileForm from "../components/UpdateProfileForm";
import TrackApplicationStatus from "../components/TrackApplicationStatus";
import LandingPage from "../components/LandingPage";
import ConfirmationPage from "../components/ConfirmationPage";
import ProfilePage from "../components/ProfilePage";
import ViewApplications from "../components/ViewApplications";
import ResetPasswordPage from "../components/ResetPasswordPage";
import ViewTrainingSessions from "../components/ViewAvailableSessions";
import NotificationDemo from "../components/Notification";
import Logout from "../components/Logout";
import Signup from "../components/Signup";
import Login from "../components/Login";
const ApplicationPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/apply" element={<FinancialAidForm />} />
        {/* <Route path = "/" element = {FinancialAidForm}></Route> */}
        {/* <Route.Provider>{FinancialAidForm}</Route.Provider> */}
        <Route path="/update-profile" element={<UpdateProfileForm />} />
        <Route path="/track-status" element={<TrackApplicationStatus />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/view-applications" element={<ViewApplications />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/available-sessions" element={<ViewTrainingSessions />} />
        <Route path="/notification" element={<NotificationDemo/>}/>  
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/login" elememt={<Login/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
                 
      </Routes>
    </div>
  );
};

export default ApplicationPage;
