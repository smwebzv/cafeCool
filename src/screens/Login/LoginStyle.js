import styled from "styled-components";
import LogoIcon from "../../assets/icon/LogoIcon.svg";
import { appMainStyle } from "../../AppStyle";
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
  color: #ff0000;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Logo = styled.div`
  width: 108px;
  height: 75px;
  margin-bottom: 10px;

  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const LoginButton = styled.div`
  display: inline-block;

  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  color: ${appMainStyle.white};
  font-family: cursive;
  font-size: 20px;
  margin: 20px 0 40px;
  cursor: pointer;
`;
