import axios from "axios";

const apiCall = axios.create({
  baseURL: "http://127.0.0.1:8000/learnright/api/v1/",
});

export default apiCall;
