import axios from 'axios';

const CAREER_API_BASE_URL = "http://localhost:8080/api/v1/applications";

class ApplicantService {
  
  // GET all applicants
  getApplicants() {
    return axios.get(CAREER_API_BASE_URL);
  }

  // POST a new applicant
  createApplicant(formPayload) {
    return axios.post(CAREER_API_BASE_URL, formPayload);
  }

  // GET applicant by ID
  getApplicantById(applicantId) {
    return axios.get(`${CAREER_API_BASE_URL}/${applicantId}`);
  }

  // PUT to update applicant
  updateApplicant(applicant, applicantId) {
    return axios.put(`${CAREER_API_BASE_URL}/${applicantId}`, applicant);
  }

  // DELETE an applicant
  deleteApplicant(applicantId) {
    return axios.delete(`${CAREER_API_BASE_URL}/${applicantId}`);
  }
}

export default new ApplicantService();



































































// import axios from 'axios';

// const CAREER_API_BASE_URL = "http://localhost:8080/api/v1/applications";

// class ApplicantService {

//     getApplicants(){
//         return axios.get(CAREER_API_BASE_URL);
//     }

//     createApplicants(applicant){
//         return axios.post(CAREER_API_BASE_URL, applicant);
//     }

//     // getApplicantById(employeeId){
//     //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     // }

//     // updateEmployee(employee, employeeId){
//     //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//     // }

//     // deleteEmployee(employeeId){
//     //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     // }
// }

// export default new ApplicantService()