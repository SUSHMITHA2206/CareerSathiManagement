import axios from 'axios';

const CAR_API_BASE_URL = "http://localhost:8080/api/v1/training";

class SessionService {
  
  // GET all applicants
  getSessions() {
    return axios.get(CAR_API_BASE_URL);
  }

  }

export default new SessionService();
































































