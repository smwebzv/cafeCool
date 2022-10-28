import axios from "axios";

export const register = (registData) => {
  return axios.post("http://18.193.130.171/users", registData);
};

export const login = (loginData) => {
  return axios.post("http://18.193.130.171/auth/login", loginData);
};
