import styled from "styled-components";
import searchIcon from "../../assets/icon/searchIcon.jpg";
import dropDownIcon from "../../assets/icon/dropDownIcon.jpg";
export const FakFrameFirst = styled.div`
  min-height: 100vh;
  background-color: #efefef;
  padding: 0px 50px 0px 163px;
`;
export const Title = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  p {
    font-size: 36px;
    font-weight: 600;
    color: #999999;
  }
  input {
    width: 70%;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 10px;
    height: 32px;
    background-size: 11px;
    border: 1px solid #999999;
    outline: none;
    border-radius: 5px;
    padding-left: 30px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const FakBox = styled.div`
  width: 780px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  table {
    position: relative;
    width: 780px;
    border: 1px solid #999999;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 5px 0px 0px;
    background-color: #fff;

    thead {
      width: 100%;
      color: #fff;
      border-bottom: 1px solid #999999;
    }

    th {
      width: 25%;
      color: #000000;
      text-align: left;
      height: 32px;
      padding-left: 1px;
    }
    th:nth-child(1) {
      padding-left: 36px;
    }

    td {
      font-size: 15px;
      text-align: left;
    }
    td:nth-child(1) {
      padding-left: 36px;
    }

    .quantity,
    .price {
      width: 90%;
      height: 100%;
      box-sizing: border-box;
      border: none;
      outline: none;
      padding: 0;
    }

    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
export const SelectDiv = styled.div`
  outline: none;
  border: none;
  color: #999999;
  background-image: url(${dropDownIcon});
  background-repeat: no-repeat;
  background-position: right 8px;
  font-size: 14px;
  width: 140px;
  cursor: pointer;
`;
export const DropDownContainer = styled.div`
  position: relative;
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  top: 20px;
  border-radius: 10px;
  background-color: red;
  width: 200px;
  max-height: 400px;
  overflow: auto;
`;

export const DropDownList = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #999999;
  &:first-child {
    padding-top: 7px;
  }
`;
export const ListItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  border-top: 1px solid #fff;
`;

export const HolderinputAndSelect = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;

  .inputAndSelect {
    width: 307px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #999999;
  }

  .fakNumber {
    width: 100%;
    border: none;
    padding: 8px 17px 8px 21px;

    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid #999999;
    border-radius: 5px 5px 0px 0px;
  }
  .selectItems {
    width: 100%;
    border: none;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
  }
  .selectDiv {
    padding: 5px 96px 5px 17px;
    background-color: #fff;
    border-radius: 0px 0px 5px 5px;
  }
`;
export const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const AddProd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: brown;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: cursive;
  padding: 10px 15px;
`;
