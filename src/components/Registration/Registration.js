import { register } from "../../context/actions/autentificationActions";
import {
  RegistrationFrame,
  RegistrationBox,
  RegistrationTitle,
  RegistrationButton,
  CheckBoxAdmin,
} from "./RegistrationStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  let navigate = useNavigate();
  const [checkedBox, setCheckedBox] = useState(true);

  const [registData, setRegistData] = useState({
    username: "",
    password: "",
    email: "",
    admin: 0,
  });
  const [errors, setErrors] = useState();
  console.log(errors);
  const handleRegData = (e) => {
    setErrors();
    const { name, value } = e.target;
    const data = registData;
    data[name] = value;
    setRegistData(data);
  };

  const handleErrors = (name) => {
    const e = errors?.find((item) => {
      if (item.includes(name)) return item;
    });
    return e;
  };
  const handleRegister = () => {
    console.log(registData);
    register(registData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setErrors(err?.response?.data?.message);
        console.log(err);
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

        <CheckBoxAdmin checkedBox={registData.admin === 1}>
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
