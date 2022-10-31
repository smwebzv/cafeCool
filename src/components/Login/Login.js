import {
  LoginBox,
  LoginButton,
  LoginFrame,
  LoginTitle,
  RegistrationBnt,
} from "./LoginStyle";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../context/actions/autentificationActions";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const loginDataa = (e) => {
    setError("");
    const { name, value } = e.target;
    const data = loginData;
    data[name] = value;
    console.log(data);
    setLoginData(data);
  };

  const handleLogin = () => {
    login(loginData)
      .then((res) => {
        localStorage.setItem("userToken", res.data.access_token);
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
        console.log(err?.response?.data?.message);
      });
  };

  return (
    <LoginFrame>
      <LoginBox>
        <LoginTitle>LOG IN</LoginTitle>
        <input
          onChange={(name) => loginDataa(name)}
          className="loginInput"
          type="text"
          placeholder="Username"
          name="username"
        />
        <input
          onChange={(name) => loginDataa(name)}
          className="loginInput"
          type="text"
          placeholder="Password"
          name="password"
        />
        <div className="error">{error}</div>

        <LoginButton onClick={() => handleLogin()}>Log in</LoginButton>
        <RegistrationBnt>
          <NavLink
            style={{ color: "#000", textDecoration: "none" }}
            to="/registrationPage"
          >
            {" "}
            Registration
          </NavLink>
        </RegistrationBnt>
      </LoginBox>
    </LoginFrame>
  );
};

export default Login;
