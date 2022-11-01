import styled from "styled-components";

export const LoginFrame = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 479px) {
    background: #d3d3d3;
  }
`;
export const LoginBox = styled.div`
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #e3be30;
  border-radius: 20px;

  .loginInput {
    width: 80%;
    height: 40px;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    outline: none;
    font-family: cursive;
    font-size: 15px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .error {
    background-color: red;
  }
`;

export const LoginTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: cursive;
  color: #fff;
  padding: 20px 0;
`;

export const LoginButton = styled.div`
  display: inline-block;
  background-color: coral;
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: cursive;
  font-size: 20px;
  margin: 20px 0 40px;
  cursor: pointer;
`;
export const RegistrationBnt = styled.div`
  margin: 10px;
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
`;
