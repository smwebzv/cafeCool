import styled from "styled-components";
import dropDown from "../../assets/icon/dropDown.svg";
import dropUp from "../../assets/icon/dropUp.svg";

export const FakFrameFirst = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #efefef;
  padding: 30px 50px 0px 101px;
`;

export const FakBox = styled.div`
  width: 704px;
  box-sizing: border-box;

  table {
    position: relative;
    z-index: 9999;
    width: 704px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    background-color: #fff;
    border-spacing: 0 !important;

    tr {
      height: 32px;
    }

    thead {
      width: 100%;
      color: #fff;
    }

    th {
      width: 25%;
      color: #4d4e50;
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
      color: #999999;
      border-top: 1px solid #00000040 !important;
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
      background-color: #bfbfbf;
      color: #ffffff;
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
    }

    input:hover {
      background-color: #999999;
    }

    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input::placeholder {
      color: #fff;
    }
    input:focus {
      background-color: #474747;
    }
  }
`;

export const SelectDiv = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: #999999;
  background-image: url(${(props) =>
    props.dropDownIndex ? dropDown : dropUp});
  background-repeat: no-repeat;
  background-position: right 8px;
  font-size: 14px;
  width: 130px;
  cursor: pointer;
`;
export const DropDownContainer = styled.div`
  position: relative;
`;
export const DropDownListContainer = styled.div`
  position: absolute;
  right: 23px;
  top: 28px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  max-height: 189px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  padding: 4px;
  background-color: #fff;
`;

export const DropDownList = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
`;
export const ListItem = styled.div`
  min-width: 136px;
  max-width: 136px;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 6px;
  border-top: 1px solid #fff;
  color: #4d4d4d;
  box-sizing: border-box;

  :hover {
    background-color: #d9d9d9;
    border-radius: 2px;
  }
`;

export const HolderinputAndSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  border-radius: 5px;

  .inputAndSelect {
    width: 228px;
  }

  .fakNumber {
    width: 100%;
    height: 34px;

    border: none;
    padding: 10px 0px 7px 9px;

    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid #00000040;
    border-radius: 5px 5px 0px 0px;
  }
  .selectDiv {
    background-color: #fff;
    padding: 8px 8px 8px 9px;
    border-radius: 0px 0px 5px 5px;
  }
  .selectItems {
    width: 100%;
    border: none;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    background-image: url(${(props) =>
      props.dropDownDostavljaca ? dropUp : dropDown});
    background-repeat: no-repeat;
    background-position: right 8px;

    border-radius: 0px 0px 5px 5px;
    color: #4d4d4d;
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
export const SelectDivDostavljac = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: #999999;

  font-size: 14px;
  width: 196px;
  cursor: pointer;

  .selectItems {
  }
`;
export const DropDownListContainerDostavljaca = styled.div`
  position: absolute;
  right: -7px;
  top: 33px;
  border-radius: 2px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  max-height: 189px;
  padding: 5px;
  background-color: #fff;
`;

export const DropDownListDostavljaca = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
`;
