import axiosInstance from "../../helpers/axiosInterceptor";

export const register = (registData:any) => {
  return axiosInstance.post("users", registData);
};

export const login = (loginData:any) => {
  return axiosInstance.post("auth/login", loginData);
};
