import styled from "styled-components";
import dropDown from "../../assets/icon/dropDown.svg";
import dropUp from "../../assets/icon/dropUp.svg";

export const DropDownContainer = styled.div`
  position: relative;
`;

export const SelectDiv = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: #999999;
  background-image: url(${(props) =>
    props.dropDownIndex === props.index ? dropUp : dropDown});
  background-repeat: no-repeat;
  background-position: right 8px;

  font-size: 14px;
  width: 130px;
  cursor: pointer;
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
  z-index: 10;
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
