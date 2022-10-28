import {
  RegistrationFrame,
  RegistrationBox,
  RegistrationTitle,
  RegistrationButton,
  CheckBoxAdmin,
} from "./RegistrationStyle";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Login from "../Login/Login";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Registration = ({ navigation }) => {
  let navigate = useNavigate();
  const [registData, setRegistData] = useState({
    username: "",
    password: "",
    email: "",
    admin: 0,
  });
  const [displaySpan, setSpan] = useState(false);
  const [checkedBox, setCheckedBox] = useState(registData.admin);
  console.log(checkedBox);
  const checkBox = () => {
    setCheckedBox(checkedBox === 1);
    console.log(checkedBox);
  };

  const handleRegData = (e) => {
    const { name, value } = e.target;
    const data = registData;
    data[name] = value;
    setRegistData(data);
    console.log(registData.admin);
  };

  const register = () => {
    console.log(registData);
    return axios.post("http://18.193.130.171/users", registData);
  };

  const handleRegister = () => {
    register()
      .then((res) => {
        navigate("/loginPage");
      })
      .catch((err) => {
        console.log(err);
        setSpan(true);
      });
  };

  return (
    <RegistrationFrame>
      <RegistrationBox>
        <RegistrationTitle>REGISTRATION</RegistrationTitle>
        <input
          onChange={(name) => handleRegData(name)}
          name="username"
          type="text"
          placeholder="User name"
        />
        <input
          onChange={(name) => handleRegData(name)}
          name="password"
          type="text"
          placeholder="Password"
        />
        <input
          onChange={(name) => handleRegData(name)}
          name="email"
          type="email"
          placeholder="Email"
        />

        <CheckBoxAdmin>
          <input
            onChange={() => checkBox()}
            className="checkAdminInput"
            type="checkbox"
            id="scales"
            name="admin"
            value={checkedBox}
          />
          <div>Are you admin?</div>
        </CheckBoxAdmin>

        {displaySpan && (
          <>
            <span>Please check your data!</span>
          </>
        )}

        <RegistrationButton onClick={() => handleRegister()}>
          Registration
        </RegistrationButton>
      </RegistrationBox>
    </RegistrationFrame>
  );
};

export default Registration;
