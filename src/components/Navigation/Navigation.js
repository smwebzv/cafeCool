import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewFaq from "../AddNewFaq/AddNewFaq";
import Login from "../Login/Login";
import AddDailyReports from "../AddDailyReports/AddDailyReports";
import Faqs from "../Faqs/Faqs";
import Registration from "../Registration/Registration";
import DailyReports from "../DailyReports/DailyReports";

const Navigation = () => {
  const token = localStorage.getItem("userToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<DailyReports />} />
              <Route path="/addDailyReports" element={<AddDailyReports /> } />
              <Route path="/addNewFaq" element={<AddNewFaq />} />
              <Route path="/faqs" element={<Faqs />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
