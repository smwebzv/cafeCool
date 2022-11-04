import axios from "axios";
import axiosInstance from "../../helpers/axiosInterceptor";

export const register = (registData) => {
  return axios.post("http://18.193.130.171/users", registData);
};

export const login = (loginData) => {
  return axios.post("http://18.193.130.171/auth/login", loginData);
};

export const saveFAQS = (data) => {
  return axiosInstance.post("faqs", data);
};
