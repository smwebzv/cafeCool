import { register } from "../../context/actions/autentificationActions";
import {
  RegistrationFrame,
  RegistrationBox,
  CheckBoxAdmin,
  Logo,
} from "./RegistrationStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

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
    register(registData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
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
        <Logo />
        <Input
          onChange={(name) => handleRegData(name)}
          name="username"
          type="text"
          placeHolder="Username"
        />
        <Input
          onChange={(name) => handleRegData(name)}
          name="password"
          type="password"
          placeHolder="Password"
        />
        <Input
          onChange={(name) => handleRegData(name)}
          name="email"
          type="email"
          placeHolder="Email"
        />

        <CheckBoxAdmin>
          <input
            onChange={() => changeCheckBtn()}
            className="checkAdminInput"
            type="checkbox"
            id="scales"
            name="admin"
            value={checkedBox}
          />
          <div>Admin?</div>
        </CheckBoxAdmin>

        <Button name="Registration" onClick={() => handleRegister()} />
      </RegistrationBox>
    </RegistrationFrame>
  );
};

export default Registration;
