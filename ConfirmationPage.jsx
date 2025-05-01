import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ConfirmationPage.css";

const ConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const applicationId = location.state?.applicationId;

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="confirmation-container">
            <h2>Application Submitted Successfully!</h2>
            {applicationId ? (
                <>
                    <p>
                        Thank you for submitting your financial aid application.
                        <br />
                        Your application ID is: <strong>{applicationId}</strong>
                    </p>
                    <p>
                        <small>Please keep this ID for future reference.</small>
                    </p>
                </>
            ) : (
                <p>No application found. Please submit a new application.</p>
            )}
            <button 
                onClick={handleBackToProfile}
                className="profile-button"
            >
                Go Back to Profile
            </button>
        </div>
    );
};

export default ConfirmationPage;











// // src/components/ConfirmationPage.jsx
// import React from "react";
// import "../styles/ConfirmationPage.css";

// const ConfirmationPage = () => {
//   return (
//     <div className="confirmation-container">
//       <h2>Confirmation!!!</h2>
//       <p>
//         Thank you for your submitting financial aid form.
//         Your application id is : 6427697
//       </p>
//       <button>Go Back to Profile</button>
//     </div>
//   );
// };

// export default ConfirmationPage;
