import axios from "axios";
import axiosInstance from "../../helpers/axiosInterceptor";

const GetDrinks = () => {
  return axiosInstance.get("drinks");
};

export default GetDrinks;
