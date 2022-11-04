import {
  Error,
  LoginBox,
  LoginButton,
  LoginFrame,
  LoginTitle,
  RegistrationBnt,
} from "./LoginStyle";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { login } from "../../context/actions/autentificationActions";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Input } from "../../AppStyle";

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
        window.location.reload(false);
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
        console.log(err?.response?.data?.message);
      });
  };

  return (
    <LoginFrame style={{height: "100vh"}}>
      <LoginBox>
        <LoginTitle>LOG IN</LoginTitle>
        <Input 
          type="text"
          placeholder="Username"
          name="username"
          onChange={(name) => loginDataa(name)}
        />
        <Input 
          type="text"
          placeholder="Password"
          name="password"
          onChange={(name) => loginDataa(name)}
        />
        <Error>{error}</Error>
        <LoginButton onClick={() => handleLogin()}>Log in</LoginButton>
        <RegistrationBnt>
          <NavLink
            style={{ color: "#000", textDecoration: "none" }}
            to="/registration"
          >
            Registration
          </NavLink>
        </RegistrationBnt>
      </LoginBox>
    </LoginFrame>
  );
};

export default Login;
