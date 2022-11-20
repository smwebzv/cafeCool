import { Route, Routes } from "react-router-dom";
import AddNewFaq from "../AddNewFaq/AddNewFaq";
import Login from "../Login/Login";
import AddDailyReports from "../AddDailyReports/AddDailyReports";
import Faqs from "../Faqs/Faqs";
import Registration from "../Registration/Registration";
import DailyReports from "../DailyReports/DailyReports";
import DailyReportsMobile from "../DailyReports/DailyReportsMobile/DailyReportsMobile";
import AddDailyReportsMobile from "../AddDailyReports/AddDailyReportsMobile/AddDailyReportsMobile";
import FaqsMobile from "../Faqs/FaqsMobile/FaqsMobile";

const Navigation = () => {
  const token = localStorage.getItem("userToken");

  return (
    <>
      <Routes>
        {token ? (
          <>
            <Route path="/" element={window.outerWidth > 420 ? <DailyReports /> :  <DailyReportsMobile/>}/>
            <Route path="/unos-smene" element={window.outerWidth > 420 ? <AddDailyReports /> : <AddDailyReportsMobile/>} />
            <Route path="/unos-fakture" element={<AddNewFaq />} />
            <Route path="/fakture" element={window.outerWidth > 420 ? <Faqs /> : <FaqsMobile/>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default Navigation;
