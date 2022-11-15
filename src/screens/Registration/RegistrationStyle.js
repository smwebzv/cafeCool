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
  justify-content: space-between;
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
    margin: 10px 0px;
  }
  .error {
    margin: 0px;
    color: red;
    font-size: 14px;
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
  p {
    font-family: cursive;
  }
  .handleCheck {
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    background-color: ${(props) => (props.checkedBox ? "blue" : "white")};
  }
`;
// export const CheckBtn = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: ${(checkedBox) => (checkedBox ? "" : "white")};

//   margin-right: 5px;
// `;
