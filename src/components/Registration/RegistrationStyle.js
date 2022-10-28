import styled from "styled-components";

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
  width: 360px;
  background-color: #e3be30;
  border-radius: 20px;

  input {
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
  span {
    display: ${(displaySpan) => (displaySpan ? displaySpan : "none")};
    margin-top: 10px;
    padding: 8px;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 20px;
    font-size: 14px;
    color: red;
    font-family: cursive;
  }
`;
export const RegistrationTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  font-family: cursive;
  color: #fff;
  padding: 20px 0;
`;
export const RegistrationButton = styled.div`
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
export const CheckBoxAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  .checkAdminInput {
    margin: 0px 5px 0px 0px;
    width: 20px;
    height: 20px;
  }
  div {
    font-family: cursive;
  }
`;
