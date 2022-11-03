import axiosInstance from "../../helpers/axiosInterceptor"

export const SendDailyReports = (data) => {

    return axiosInstance.post("daily-reports", data) 
};

export const GetDailyReports = () => {

    return axiosInstance.get("daily-reports"); 
};

