import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantService from '../services/ApplicantService';
import '../styles/FinancialAidForm.css';

const FinancialAidForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        emailId: '',
        annualIncome: '',
        financialNeed: '',
        supportingDocuments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // We only save the file name since backend expects JSON
            setFormData(prev => ({
                ...prev,
                supportingDocuments: file.name
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const applicantPayload = {
            name: formData.name,
            emailId: formData.emailId,
            annualIncome: Number(formData.annualIncome),
            financialNeed: formData.financialNeed,
            supportingDocuments: formData.supportingDocuments.filename
        };

        console.log('Sending applicant JSON:', JSON.stringify(applicantPayload));

        ApplicantService.createApplicant(applicantPayload)
            .then(() => navigate('/profile'))
            .catch(error => {
                console.error('Submission error:', error);
            });
    };

    return (
        <form className="financial-aid-form" onSubmit={handleSubmit}>
            <h2>New Financial Aid Application</h2>

            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Email Address:</label>
                <input
                    type="email"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Annual Income ($):</label>
                <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleInputChange}
                    min="0"
                    required
                />
            </div>

            <div className="form-group">
                <label>Financial Need Description:</label>
                <textarea
                    name="financialNeed"
                    value={formData.financialNeed}
                    onChange={handleInputChange}
                    rows="4"
                    required
                />
            </div>

            <div className="form-group">
                <label>Supporting Documents (just file name will be sent):</label>
                <input
                    type="file"
                    name="supportingDocuments"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    required
                />
            </div>

            <div className="form-actions">
                <button type="submit" className="submit-button">
                    Submit Application
                </button>
            </div>
        </form>
    );
};

export default FinancialAidForm;













// import React, { Component } from 'react'
// import ApplicantService from '../services/ApplicantService';
// import '../styles/FinancialAidForm.css'

// import { withRouter } from 'react-router-dom';



// class FinancialAidForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // step 2
//             id: this.props.match.params.id,
//             name: "",
//             emailId: "",
//             annualIncome: "",
//             financialNeed: "",
//             supportingDocuments: "",
//         }
//         this.changeNameHandler = this.changeNameHandler.bind(this);
//         this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
//         this.changeAnnualIncomeHandler=this.changeAnnualIncomeHandler.bind(this);
//         this.changeFinancialNeedHandler=this.changeFinancialNeedHandler.bind(this);
//         this.changeSupportingDocumentsHandler=this.changeSupportingDocumentsHandler.bind(this);
//         this.saveOrUpdateApplicant= this.saveOrUpdateApplicant.bind(this);
//     }

//     // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             ApplicantService.getApplicantById(this.state.id).then( (res) =>{
//                 let applicant = res.data;
//                 this.setState({name: applicant.namr,
//                               emailId : applicant.emailId,
//                               annualIncome:applicant.annualIncome,
//                               financialNeed: applicant.financialNeed,
//                               supportingDocuments: applicant.supportingDocuments,

//                 });
//             });
//         }        
//     }
//     saveOrUpdateApplicant = (e) => {
//         e.preventDefault();
//         let applicant = {name: this.state.name,emailId: this.state.emailId,annualIncome:this.state.annualIncome,financialNeed:this.state.financialNeed};
//         console.log('Applicant => ' + JSON.stringify(applicant));

//         // step 5
//         if(this.state.id === '_add'){
//             ApplicantService.createApplicant(applicant).then(res =>{
//                 this.props.history.push('/applicants');
//             });
//         // }else{
//         //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
//         //         this.props.history.push('/employees');
//         //     });
//         }
//     }
    
//     changeNameHandler= (event) => {
//         this.setState({name: event.target.value});
//     }

//     changeEmailIdHandler= (event) => {
//         this.setState({emailId: event.target.value});
//     }

//     changeAnnualIncomeHandler= (event) => {
//         this.setState({annualIncome: event.target.value});
//     }
//     changeFinancialNeedHandler= (event) => {
//       this.setState({financialNeed: event.target.value});
//   }
//   changeSupportingDocumentsHandler= (event) => {
//     this.setState({supportingDocuments: event.target.value});
// }


//     cancel(){
//         this.props.history.push('/applicants');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add Employee</h3>
//         }else{
//             return <h3 className="text-center">Update Employee</h3>
//         }
//     }
//     render() {
      
//     return (
//       <form className="financial-aid-form">
//         <h2>Apply for Financial Aid</h2>
  
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.changeNameHandler}
//           required
//         />
  
//         <label>Email Id:</label>
//         <input
//           type="text"
//           name="emailId"
//           value={this.state.emailId}
//           onChange={this.changeEmailIdHandler}
//           required
//         />
  
//         <label>Annual Income:</label>
//         <input
//           type="number"
//           name="annualIncome"
//           value={this.state.annualIncome}
//           onChange={this.changeAnnualIncomeHandler}
//           required
//         />
  
//         <label>Financial Need (Brief Description):</label>
//         <textarea
//           name="financialNeed"
//           value={this.state.financialNeed}
//           onChange={this.changeFinancialNeedHandler}
//           required
//         />
  
//         <label>Upload Supporting Documents (if any):</label>
//         <input
//           type="file"
//           name="supportingDocuments"
//           onChange={this.changeSupportingDocumentsHandler}
//         />
  
//         <button type="submit" onClick={this.saveOrUpdateApplicant}>Submit Application</button>
//       </form>
//     );
//   };
// }


// export default withRouter(FinancialAidForm);

















// import React, { useState } from "react";
// import "../styles/FinancialAidForm.css";

// const FinancialAidForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     emailId: "",
//     annualIncome: "",
//     financialNeed: "",
//     supportingDocuments: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Normally, you would submit the form data to a server here (e.g., using an API)
//     console.log("Financial Aid Form Submitted:", formData);

//     // On successful submission, update the state to show success message
//     setIsSubmitted(true);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="success-message">
//         <h2>Success!</h2>
//         <p>Your Financial Aid Application has been successfully submitted. We will notify you once it's processed.</p>
//       </div>
//     );
//   }

//   return (
//     <form className="financial-aid-form" onSubmit={handleSubmit}>
//       <h2>Apply for Financial Aid</h2>

//       <label>Name:</label>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <label>Email Id:</label>
//       <input
//         type="text"
//         name="emailId"
//         value={formData.emailId}
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

//       <label>Financial Need (Brief Description):</label>
//       <textarea
//         name="financialNeed"
//         value={formData.financialNeed}
//         onChange={handleChange}
//         required
//       />

//       <label>Upload Supporting Documents (if any):</label>
//       <input
//         type="file"
//         name="supportingDocuments"
//         onChange={handleChange}
//       />

//       <button type="submit">Submit Application</button>
//     </form>
//   );
// };

// export default FinancialAidForm;