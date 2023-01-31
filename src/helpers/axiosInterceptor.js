import axios from "axios";
let userToken = localStorage.getItem("userToken");
const axiosInstance = axios.create({
  //baseURL: "http://localhost:3001/",
  baseURL: "http://18.193.130.171/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${userToken}`,
  },
});

export default axiosInstance;
