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
import { useState } from "react";

const Registration = ({ navigation }) => {
  let navigate = useNavigate();
  const [checkedBox, setCheckedBox] = useState(true);

  const [registData, setRegistData] = useState({
    username: "",
    password: "",
    email: "",
    admin: 0,
  });
  console.log(registData.admin);
  const [errors, setErrors] = useState("");
  const handleRegData = (e) => {
    setErrors("");
    const { name, value } = e.target;
    const data = registData;
    data[name] = value;
    setRegistData(data);
  };

  const handleRegister = () => {
    console.log(registData);
    register(registData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setErrors(err?.response?.data?.message[0]);
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
          placeholder="User name"
        />
        {errors.includes("username") && <div className="error">{errors}</div>}
        <input
          onChange={(name) => handleRegData(name)}
          name="password"
          type="text"
          placeholder="Password"
        />
        {errors.includes("password") && <div className="error">{errors}</div>}

        <input
          onChange={(name) => handleRegData(name)}
          name="email"
          type="email"
          placeholder="Email"
        />
        {errors.includes("email") && <div className="error">{errors}</div>}
        <CheckBoxAdmin checkedBox={registData.admin === 1}>
          <div className="handleCheck" onClick={() => changeCheckBtn()}></div>
          <p>Are you admin?</p>
        </CheckBoxAdmin>

        <RegistrationButton onClick={() => handleRegister()}>
          Registration
        </RegistrationButton>
      </RegistrationBox>
    </RegistrationFrame>
  );
};

export default Registration;
