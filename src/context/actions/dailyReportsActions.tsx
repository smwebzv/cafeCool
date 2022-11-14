import axiosInstance from "../../helpers/axiosInterceptor";

export const SendDailyReports = (data:any) => {
  return axiosInstance.post("daily-reports", data);
};

export const GetDailyReports = () => {
  return axiosInstance.get("daily-reports");
};

export const DeleteDailyReports = (id:any) => {
  return axiosInstance.delete(`daily-reports/${id}`);
};

export const UpdateDailyReports = (id:any, data:any) => {
    return axiosInstance.patch(`daily-reports/${id}`, data);
}
