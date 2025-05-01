// src/App.js
import React, { useState } from 'react';
import '../styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';



function Signup() {
   
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    loginUser: '',
    loginPass: '',
    loginRole: '',
    signUser: '',
    signEmail: '',
    signPass: '',
    signConfirm: '',
    signRole: ''
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
   
    alert(`✅ Logged in as ${formData.loginRole}`);
    
    <Link to={LandingPage}/>
  };

  const register = (e) => {
    e.preventDefault();
    
    alert(`✅ Registered as ${formData.signRole}`);
    setShowSignup(false);
    setShowLogin(true);
  };

  const resetPassword = () => {
    alert("Reset password flow goes here.");
  };

  return (
    <div className="app-container">
      <nav className="main-nav">
        <h1>Career Saathi Management</h1>
        <div className="nav-buttons">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignup(true)}>Signup</button>
        </div>
      </nav>

      <div className="hero-section">
        <div className="content-box">
          <p className="description-text">
          Welcome to Career Saathi Management System for Rural Students in Nirmaan’s Education Program! Our platform is designed
              to support academically talented yet economically disadvantaged students from rural areas. We streamline student selection,
              automate financial aid distribution, and provide career guidance through mentorship programs. Join us to access financial
              support, enhance your skills through expert-led training, and connect with industry professionals to build a brighter future.
          </p>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <span className="close-btn" onClick={() => setShowLogin(false)}>×</span>
            <h3 style={{ textAlign: "center" }}>Login</h3>
            <form onSubmit={login}>
              <div className="form-group">
                <select
                  id="loginRole"
                  value={formData.loginRole}
                  onChange={handleInput}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="coordinator">Coordinator</option>
                  <option value="mentor">Mentor</option>
                  <option value="donor">Donor</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="loginUser"
                  placeholder="Username"
                  value={formData.loginUser}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="loginPass"
                  placeholder="Password"
                  value={formData.loginPass}
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit" onClick={()=>navigate("/LandingPage")}>Login</button>
              <button type="submit"  onClick={resetPassword}>Forgot Password?</button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay">
          <div className="auth-modal">
            <span className="close-btn" onClick={() => setShowSignup(false)}>×</span>
            <h3 style={{ textAlign: "center" }}>Sign Up</h3>
            <form onSubmit={register}>
              <div className="form-group">
                <input
                  type="text"
                  id="signUser"
                  placeholder="Username"
                  value={formData.signUser}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="signEmail"
                  placeholder="Email"
                  value={formData.signEmail}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="signPass"
                  placeholder="Password"
                  value={formData.signPass}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="signConfirm"
                  placeholder="Confirm Password"
                  value={formData.signConfirm}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  id="signRole"
                  value={formData.signRole}
                  onChange={handleInput}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="coordinator">Coordinator</option>
                  <option value="mentor">Mentor</option>
                  <option value="donor">Donor</option>
                </select>
              </div>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;




















// // src/App.js
// import React, { useState, useEffect } from 'react';
// import '../styles/Signup.css';
// import { Navigate } from 'react-router-dom';

// function Signup() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     loginUser: '',
//     loginPass: '',
//     loginRole: '',
//     signUser: '',
//     signEmail: '',
//     signPass: '',
//     signConfirm: '',
//     signRole: ''
//   });

//   // Load users and handle account unlocking
//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const updatedUsers = storedUsers.map(user => ({
//       ...user,
//       ...(user.lockUntil && Date.now() > user.lockUntil && { 
//         lockUntil: null, 
//         failedAttempts: 0 
//       })
//     }));
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//   }, []);

//   const handleInput = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const register = (e) => {
//     e.preventDefault();
//     const { signUser, signEmail, signPass, signConfirm, signRole } = formData;

//     if (!signRole) return alert("Select role!");
//     if (signPass !== signConfirm) return alert("Password mismatch!");
//     if (users.some(u => u.username === signUser)) return alert("User exists!");

//     const newUser = {
//       username: signUser,
//       email: signEmail,
//       password: signPass,
//       role: signRole,
//       failedAttempts: 0,
//       lockUntil: null
//     };

//     const updated = [...users, newUser];
//     setUsers(updated);
//     localStorage.setItem("users", JSON.stringify(updated));
//     alert(`✅ ${signRole} registered!`);
//     setShowSignup(false);
//     setShowLogin(true);
//   };

//   const login = (e) => {
//     e.preventDefault();
//     const { loginUser, loginPass, loginRole } = formData;
//     const user = users.find(u => u.username === loginUser);

//     if (!loginRole) return alert("Select role!");
//     if (!user) return alert("Invalid user!");
//     if (user.lockUntil && Date.now() < user.lockUntil) {
//       const mins = Math.ceil((user.lockUntil - Date.now()) / 60000);
//       return alert(`🔒 Locked! Try after ${mins} minutes`);
//     }

//     if (user.password !== loginPass) {
//       const updated = users.map(u => u.username === user.username ? {
//         ...u,
//         failedAttempts: (u.failedAttempts || 0) + 1,
//         ...((u.failedAttempts || 0) + 1 >= 3 && { 
//           lockUntil: Date.now() + 300000 
//         })
//       } : u);
//       setUsers(updated);
//       localStorage.setItem("users", JSON.stringify(updated));
//       return alert(`❌ Wrong password! ${3 - (user.failedAttempts || 0) - 1} tries left`);
//     }

//     if (user.role !== loginRole) return alert(`Role mismatch! You're ${user.role}`);

//     const updated = users.map(u => u.username === user.username ? 
//       { ...u, failedAttempts: 0, lockUntil: null } : u
//     );
//     setUsers(updated);
//     localStorage.setItem("users", JSON.stringify(updated));
//     localStorage.setItem("currentUser", JSON.stringify(user));
//     alert(`✅ Welcome ${loginRole}!`);
//     window.location.href = `${loginRole}-dashboard.html`;
//   };

//   const resetPassword = () => {
//     const username = prompt("Enter username:");
//     const user = users.find(u => u.username === username);
//     if (!user) return alert("User not found!");
    
//     const newPass = prompt("New password:");
//     const updated = users.map(u => u.username === username ? 
//       { ...u, password: newPass, failedAttempts: 0, lockUntil: null } : u
//     );
//     setUsers(updated);
//     localStorage.setItem("users", JSON.stringify(updated));
//     alert("Password reset!");
//   };

  

//   return (
//     <div className="app-container">
//       <nav className="main-nav">
//         <h1>Career Saathi Management</h1>
//         <div className="nav-buttons">
//           <button onClick={() => setShowLogin(true)}>Login</button>
//           <button onClick={() => setShowSignup(true)}>Signup</button>
//         </div>
//       </nav>

//       <div className="hero-section">
//         <div className="content-box">
         
//           <p className="description-text">
//           Welcome to Career Saathi Management System for Rural Students in Nirmaan’s Education Program! Our platform is designed to support academically 
//           talented yet economically disadvantaged students from rural areas. We streamline student selection, automate financial aid distribution, 
//           and provide career guidance through mentorship programs. Join us to access financial support, 
//           enhance your skills through expert-led training, and connect with industry professionals to build a brighter future.
//           </p>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="modal-overlay">
//           <div className="auth-modal">
//             <span className="close-btn" onClick={() => setShowLogin(false)}>×</span>
//             <h3 style={{"textAlign":"center"}}>Login</h3>
//             <form onSubmit={login}>
//               <div className="form-group">
//                 <select 
//                   id="loginRole" 
//                   value={formData.loginRole}
//                   onChange={handleInput}
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="student">Student</option>
//                   <option value="coordinator">Coordinator</option>
//                   <option value="mentor">Mentor</option>
//                   <option value="donor">Donor</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="loginUser"
//                   placeholder="Username"
//                   value={formData.loginUser}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="loginPass"
//                   placeholder="Password"
//                   value={formData.loginPass}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <button type="submit" onClick={()=>Navigate("/LandingPage")}>Login</button>
//               <button type="submit" onClick={resetPassword}>Forgot Password?</button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Signup Modal */}
//       {showSignup && (
//         <div className="modal-overlay">
//           <div className="auth-modal">
//             <span className="close-btn" onClick={() => setShowSignup(false)}>×</span>
//             <h3 style={{"text-align": "center"}}>Sign Up</h3>
//             <form onSubmit={register}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="signUser"
//                   placeholder="Username"
//                   value={formData.signUser}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   id="signEmail"
//                   placeholder="Email"
//                   value={formData.signEmail}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="signPass"
//                   placeholder="Password"
//                   value={formData.signPass}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="signConfirm"
//                   placeholder="Confirm Password"
//                   value={formData.signConfirm}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <select
//                   id="signRole"
//                   value={formData.signRole}
//                   onChange={handleInput}
//                   required
//                 >
//                   <option value="">Select Role</option>
//                   <option value="student">Student</option>
//                   <option value="coordinator">Coordinator</option>
//                   <option value="mentor">Mentor</option>
//                   <option value="donor">Donor</option>
//                 </select>
//               </div>
//               <button type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;