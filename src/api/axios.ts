import axios from "axios";

const api = axios.create({
  baseURL: "127:0.0.1/v1",
});

export default api;
