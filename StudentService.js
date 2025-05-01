import axios from 'axios';

const CAREER_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  
  // GET all applicants
  getStudents() {
    return axios.get(CAREER_API_BASE_URL);
  }

  // POST a new applicant
  createStudent(formPayload) {
    return axios.post(CAREER_API_BASE_URL, formPayload);
  }

  // GET applicant by ID
  getStudentById(studentId) {
    return axios.get(`${CAREER_API_BASE_URL}/${studentId}`);
  }

  // PUT to update applicant
  updateStudent(student, studentId) {
    return axios.put(`${CAREER_API_BASE_URL}/${studentId}`, student);
  }

  // DELETE an applicant
  deleteStudent(studentId) {
    return axios.delete(`${CAREER_API_BASE_URL}/${studentId}`);
  }
}

export default new StudentService();



































































