import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";
export const FakFrameFirst = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  padding: 30px 50px 0px 101px;
`;

export const FakBox = styled.div`
  width: 704px;
  box-sizing: border-box;

  table {
    position: relative;
    z-index: 1;
    width: 704px;
    box-shadow:${appMainStyle.appShadow}
    border-radius: 5px;
    background-color: ${appMainStyle.white};
    border-spacing: 0 !important;

    tr {
      height: 32px;
    }

    thead {
      width: 100%;
      color: ${appMainStyle.white};
    }

    th {
      width: 25%;
      color: ${appMainStyle.darkSilver};
      text-align: left;
      height: 32px;
      font-size: 14px;
      font-weight: 600;
    }
    th:nth-child(1) {
      padding-left: 12px;
    }

    th:nth-child(3) {
      text-align: center;
    }

    th:nth-child(4) {
      text-align: right;
      padding-right: 12px;
    }

    td {
      font-size: 14px !important;
      text-align: left;
      font-weight: 400;
      color: ${appMainStyle.silverColor};
      border-top: 1px solid ${appMainStyle.borderLine} !important;
    }

    td:nth-child(1) {
      padding-left: 12px;
    }
    td:nth-child(3) {
      text-align: center;
    }
    td:nth-child(4) {
      text-align: right;
      padding-right: 12px;
    }

    .quantity,
    .price {
      width: 53px;

      height: 22px;
      box-sizing: border-box;
      border: none;
      outline: none;
      background-color: ${appMainStyle.inputBg};
      color: ${appMainStyle.white};
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
    }

    input:hover {
      background-color: ${appMainStyle.silverColor};
    }

    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input::placeholder {
      color: ${appMainStyle.white};
    }
    input:focus {
      background-color: ${appMainStyle.inputFocus};
    }
  }

  .new-product-holder{
    text-align: right;
    .new-product-button{
      margin-top: 20px;
      display: inline-block;
    }
  }
`;

export const HolderinputAndSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
  box-shadow:${appMainStyle.appShadow}
  border-radius: 5px;

  .inputAndSelect {
    width: 228px;
  }

  .total-value-div{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    background-color: #ffffff;
    padding: 8px 8px 8px 9px;
    border-radius: 5px;
    margin-top: 5px;
    color: #4D4D4D;
  }

  .fakNumber {
    width: 100%;
    height: 34px;

    border: none;
    padding: 10px 0px 7px 9px;

    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid ${appMainStyle.borderLine};
    border-radius: 5px 5px 0px 0px;
  }
  .selectDiv {
    background-color: ${appMainStyle.white};
    padding: 8px 8px 8px 9px;
    border-radius: 0px 0px 5px 5px;
  }
`;
export const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
`;
