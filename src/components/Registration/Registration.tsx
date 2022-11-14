import React, { useState } from "react";
import { register } from "../../context/actions/autentificationActions";
import {
  RegistrationFrame,
  RegistrationBox,
  RegistrationTitle,
  RegistrationButton,
  CheckBoxAdmin,
} from "./RegistrationStyle";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  let navigate = useNavigate();
  const [checkedBox, setCheckedBox] = useState<any>(true);
  const [registData, setRegistData] = useState<any>({
    username: "",
    password: "",
    email: "",
    admin: 0,
  });
  const [errors, setErrors] = useState<any>([]);

  const handleRegData = (e:any) => {
    setErrors([]);
    const { name, value } = e.target;
    const data = registData;
    data[name] = value;
    setRegistData(data);
  };

  const handleErrors = (name:any) => {
    const e = errors?.find((item:any) => {
      if (item.includes(name)) return item;
    });
    return e;
  };

  const handleRegister = () => {
    register(registData)
      .then((res:any) => {
        navigate("/");
      })
      .catch((err:any) => {
        setErrors(err?.response?.data?.message);
      });
  };

  const changeCheckBtn = () => {
    const check = checkedBox;
    setCheckedBox(!checkedBox);
    const data = registData;
    data["admin"] = check ? 1 : 0;
    setRegistData(data);
  };

  return (
    <RegistrationFrame>
      <RegistrationBox>
        <RegistrationTitle>REGISTRATION</RegistrationTitle>
        <input
          onChange={(name) => handleRegData(name)}
          name="username"
          type="text"
          placeholder="Username"
        />
        <div className="error">{handleErrors("username")}</div>
        <input
          onChange={(name) => handleRegData(name)}
          name="password"
          type="password"
          placeholder="Password"
        />
        <div className="error">{handleErrors("password")}</div>

        <input
          onChange={(name) => handleRegData(name)}
          name="email"
          type="email"
          placeholder="Email"
        />
        <div className="error">{handleErrors("email")}</div>

        <CheckBoxAdmin isChecked={registData.admin}>
          <div className="handleCheck" onClick={() => changeCheckBtn()}></div>
          <p>Admin?</p>
        </CheckBoxAdmin>

        <RegistrationButton onClick={() => handleRegister()}>
          Registration
        </RegistrationButton>
      </RegistrationBox>
    </RegistrationFrame>
  );
};

export default Registration;
