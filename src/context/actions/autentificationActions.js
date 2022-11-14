import axiosInstance from "../../helpers/axiosInterceptor";

export const register = (registData) => {
  return axiosInstance.post("users", registData);
};

export const login = (loginData) => {
  return axiosInstance.post("auth/login", loginData);
};
