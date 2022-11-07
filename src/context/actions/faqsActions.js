import axiosInstance from "../../helpers/axiosInterceptor";

export const GetFaqs = () => {
  return axiosInstance.get("faqs");
};

export const saveFAQS = (data) => {
  return axiosInstance.post("faqs", data);
};
