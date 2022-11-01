import { register } from "../../context/actions/autentificationActions";
import {
  RegistrationFrame,
  RegistrationBox,
  RegistrationTitle,
  RegistrationButton,
  CheckBoxAdmin,
  CheckBtn,
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
  const [checkedBox, setCheckedBox] = useState(true);
  console.log(checkedBox);
  const [errors, setErrors] = useState("");
  const handleRegData = (e) => {
    setErrors("");
    const { name, value } = e.target;
    const data = registData;
    data[name] = value;
    setRegistData(data);
    console.log(registData.admin);
  };

  const handleRegister = () => {
    register(registData)
      .then((res) => {})
      .catch((err) => {
        // console.log(err);
        setSpan(true);
        setErrors(err?.response?.data?.message[0]);
        console.log(err.response);
      });
  };

  const changeCheckBtn = () => {
    setCheckedBox(!checkedBox);
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
        {errors.includes("username") && <div>{errors}</div>}
        <input
          onChange={(name) => handleRegData(name)}
          name="password"
          type="text"
          placeholder="Password"
        />
        {errors.includes("password") && <div>Password error</div>}

        <input
          onChange={(name) => handleRegData(name)}
          name="email"
          type="email"
          placeholder="Email"
        />
        {errors.includes("email") && <div>Email error</div>}

        <CheckBoxAdmin>
          <div onClick={() => changeCheckBtn()}>
            {checkedBox && <CheckBtn></CheckBtn>}
          </div>

          <p>Are you admin?</p>
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
