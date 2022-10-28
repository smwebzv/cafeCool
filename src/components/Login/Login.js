import { LoginBox, LoginButton, LoginFrame, LoginTitle } from "./LoginStyle";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [errorSpanLogin, setErrorSpanLogin] = useState(false);

  const login = () => {
    console.log(loginData);
    return axios.post("http://18.193.130.171/auth/login", loginData);
  };

  const handleLogin = () => {
    login()
      .then((res) => {
        navigate("/firstPage");
      })
      .catch((err) => {
        console.log(err);
        setErrorSpanLogin(true);
      });
  };

  const loginDataa = (e) => {
    const { name, value } = e.target;
    const data = loginData;
    data[name] = value;
    console.log(data);
    setLoginData(data);
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
        {errorSpanLogin && (
          <>
            <span className="spanErrorLogin">Please check your data!</span>
          </>
        )}

        <LoginButton onClick={() => handleLogin()}>Log in</LoginButton>
      </LoginBox>
    </LoginFrame>
  );
};

export default Login;
