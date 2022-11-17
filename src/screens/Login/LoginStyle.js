import styled from "styled-components";
import loginLogo from "../../assets/icon/loginLogo.jpg";

export const LoginFrame = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginBox = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 20px;
`;

export const Error = styled.div`
  background-color: red;
  // margin: ${(error) => (error ? "10px" : "none")};
`;

export const Logo = styled.div`
  width: 108px;
  height: 75px;
  margin-bottom: 10px;

  background-image: url(${loginLogo});
  background-repeat: no-repeat;
`;

export const LoginButton = styled.div`
  display: inline-block;

  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: cursive;
  font-size: 20px;
  margin: 20px 0 40px;
  cursor: pointer;
`;
