import { LoginBox, LoginFrame, Logo, Error } from "./LoginStyle";
import { useState } from "react";
import { login } from "../../context/actions/autentificationActions";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

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
    setLoginData(data);
  };

  const handleLogin = () => {
    login(loginData)
      .then((res) => {
        localStorage.setItem("userToken", res.data.access_token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.loggedUser));
        window.location.reload(false);
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      });
  };

  const chanhgeScreen = () => {
    navigate("/registration")
  }

  return (
    <LoginFrame>
      <LoginBox>
        <Logo />
        <Input
          onChange={(name) => loginDataa(name)}
          type="text"
          placeHolder="Username"
          name="username"
        />
        <Input
          onChange={(name) => loginDataa(name)}
          type="password"
          placeHolder="Password"
          name="password"
        />
        <Error>{error}</Error>
        <Button name="Log in" onClick={() => handleLogin()} />
        <Button name="Registration" onClick={() => chanhgeScreen()}>
        </Button>
      </LoginBox>
    </LoginFrame>
  );
};

export default Login;
