import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8081/api/offers",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getOffersDefault() {
    return apiClient.get("");
  },
  getOffers(page: number, size: number) {
    return apiClient.get(`?page=${page}&size=${size}`);
  },
};
