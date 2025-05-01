import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../styles/UpdateProfileForm.css";
import StudentService from "../services/StudentService";

const UpdateProfileForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: id,
    name: "",
    major: "",
    gpa: "",
    annualIncome: "",
    dependents: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicantPayload = {
      id:formData.id,
      name: formData.name,
      major: formData.major,
      gpa: formData.gpa,
      annualIncome: formData.annualIncome,
      dependents: formData.dependents,
    };

    console.log("Sending applicant JSON:", JSON.stringify(applicantPayload));

    // Submit logic here if needed

    
    StudentService.createStudent(applicantPayload)
    .then(() => navigate('/profile'))
    .catch(error => {
        console.error('Submission error:', error);
    });

    alert("Profile updated successfully!");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>Success!</h2>
        <p>Your profile has been updated successfully, and your financial aid eligibility is being assessed.</p>
      </div>
    );
  }

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <h2>Update Profile</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Major:</label>
      <input
        type="text"
        name="major"
        value={formData.major}
        onChange={handleChange}
        required
      />

      <label>GPA:</label>
      <input
        type="number"
        step="0.01"
        name="gpa"
        value={formData.gpa}
        onChange={handleChange}
        required
      />

      <label>Annual Income:</label>
      <input
        type="number"
        name="annualIncome"
        value={formData.annualIncome}
        onChange={handleChange}
        required
      />

      <label>Family Size:</label>
      <input
        type="number"
        name="dependents"
        value={formData.dependents}
        onChange={handleChange}
        required
      />

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateProfileForm;












// import React, { useState } from "react";
// import "../styles/UpdateProfileForm.css";

// const UpdateProfileForm = () => {
//   const [formData, setFormData] = useState({
//     id:id,
//     name: "",
//     major: "",
//     gpa: "",
//     annualIncome: "",
//     dependents: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false); // Track submission

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
  
//   //   console.log("Form submitted:", formData);
  
//   //   alert("Profile updated successfully!");
  
//   //   setIsSubmitted(true);
//   // };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const applicantPayload = {
//         name: formData.name,      
//           major: formData.major,
//           gpa: formData.gpa,
//           annualIncome: formData.annualIncome,
//           dependents: formData.dependents,
//     };

//     console.log('Sending applicant JSON:', JSON.stringify(applicantPayload));

//     // ApplicantService.createApplicant(applicantPayload)
//     //     .then(() => navigate('/confirmation'))
//     //     .catch(error => {
//     //         console.error('Submission error:', error);
//     //     });

//         // In your handleSubmit function


//   // if (isSubmitted) {
//   //   return (
//   //     <div className="success-message">
//   //       <h2>Success!</h2>
//   //       <p>Your profile has been updated successfully, and your financial aid eligibility is being assessed.</p>
//   //     </div>
//   //   );
//   // }

//   return (
//     <form className="update-form" onSubmit={handleSubmit}>
//       <h2>Update Profile</h2>

     

//       <label>Name:</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <label>Major:</label>
//       <input
//         type="text"
//         name="major"
//         value={formData.major}
//         onChange={handleChange}
//         required
//       />

//       <label>GPA:</label>
//       <input
//         type="number"
//         step="0.01"
//         name="gpa"
//         value={formData.gpa}
//         onChange={handleChange}
//         required
//       />

//       <label>Annual Income:</label>
//       <input
//         type="number"
//         name="annualIncome"
//         value={formData.annualIncome}
//         onChange={handleChange}
//         required
//       />

//       <label>Family Size:</label>
//       <input
//         type="number"
//         name="dependents"
//         value={formData.dependents}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Update Profile</button>
//     </form>
//   );
// };
// }

// export default UpdateProfileForm;
