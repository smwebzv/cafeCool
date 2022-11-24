import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";
import dropDown from "../../assets/icon/dropDown.svg";
import dropUp from "../../assets/icon/dropUp.svg";
export const SelectDivDeliverer = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: ${appMainStyle.silverColor};

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
  box-shadow:${appMainStyle.appShadow}
  max-height: 189px;
  padding: 5px;
  background-color: ${appMainStyle.white};
`;
export const DropDownListDeliverer = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: ${appMainStyle.white};
`;
export const ListItemDeliverer = styled.div`
  min-width: 136px;
  max-width: 136px;
  cursor: pointer;
  font-size: 14px;
  padding: 3px 6px;
  border-top: 1px solid ${appMainStyle.white};
  color: ${appMainStyle.darkSilver};
  box-sizing: border-box;

  :hover {
    background-color: ${appMainStyle.optionHover};
    border-radius: 2px;
  }
`;
