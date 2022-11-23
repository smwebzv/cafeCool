import styled from "styled-components";
import dropDown from "../../assets/icon/dropDown.svg";
import dropUp from "../../assets/icon/dropUp.svg";
export const SelectDivDeliverer = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: #999999;

  font-size: 14px;
  width: 210px;
  cursor: pointer;
  background-image: url(${(props) =>
    props.dropDownDostavljaca ? dropUp : dropDown});
  background-repeat: no-repeat;
  background-position: right 8px;
`;
export const DropDownListContainerDeliverer = styled.div`
  position: absolute;
  right: -9px;
  top: 33px;
  border-radius: 2px;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  max-height: 189px;
  padding: 5px;
  background-color: #fff;
`;
export const DropDownListDeliverer = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
`;
export const ListItemDeliverer = styled.div`
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
