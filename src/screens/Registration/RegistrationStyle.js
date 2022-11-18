import styled from "styled-components";
import LogoIcon from "../../assets/icon/LogoIcon.svg";

export const RegistrationFrame = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RegistrationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;

  border-radius: 20px;

  .error {
    margin: 0px;
    color: red;
    font-size: 14px;
  }
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

export const CheckBoxAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-bottom: 18px;
`;
