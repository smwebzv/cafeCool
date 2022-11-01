import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "../FirstPage/FirstPage";
import Faktura from "../Faktura/Faktura";
import Login from "../Login/Login";
import FirstTable from "../FirstTable/FirstTable";
import SecondTable from "../SecondTable/SecondTable";
import Registration from "../Registration/Registration";

const Navigation = () => {
  const token = localStorage.getItem("userToken");
  return (
    <>
      <Router>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<FirstPage />} />
              <Route path="/firstTable" element={<FirstTable />} />
              <Route path="/secondTable" element={<SecondTable />} />
              <Route path="/faktura" element={<Faktura />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/registrationPage" element={<Registration />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default Navigation;
