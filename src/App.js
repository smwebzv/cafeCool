import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import Faktura from "./components/Faktura/Faktura";
import Login from "./components/Login/Login";
import FirstTable from "./components/FirstTable/FirstTable";
import SecondTable from "./components/SecondTable/SecondTable";
import { useEffect } from "react";
import axios from "axios";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registrationPage" element={<Registration />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/firstTable" element={<FirstTable />} />
          <Route path="/secondTable" element={<SecondTable />} />
          <Route path="/faktura" element={<Faktura />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
