import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://${window.location.hostname}:8081/api/`,
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

export default {
  login(credentials: credentials) {
    return apiClient.post("auth/authenticate", credentials);
  },
  register(registerData: RegisterData) {
    return apiClient.post("auth/register", registerData);
  },
  logout() {
    return apiClient.post("auth/logout");
  },
};
