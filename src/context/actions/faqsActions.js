import axiosInstance from "../../helpers/axiosInterceptor";

export const GetFaqs = () => {
  return axiosInstance.get("faqs");
};
