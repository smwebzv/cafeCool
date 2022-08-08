import { LoginBox, LoginButton, LoginFrame, LoginTitle } from "./LoginStyle";
import { NavLink } from "react-router-dom";

const Login = () => {

    return (
        <LoginFrame>
            <LoginBox>
                <LoginTitle>LOG IN</LoginTitle>
                <input className="loginInput" type="text" placeholder="Username"></input>
                <input className="loginInput" type="text" placeholder="Password"></input>
                <LoginButton>
                    <NavLink to='/firstPage' style={{color:"#fff", textDecoration: "none"}}>
                        Log in
                    </NavLink>
                </LoginButton>
            </LoginBox>
        </LoginFrame>
    );
}

export default Login;