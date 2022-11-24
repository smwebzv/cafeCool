import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";

import dropDown from "../../assets/icon/dropDown.svg";
import dropUp from "../../assets/icon/dropUp.svg";

export const DropDownContainer = styled.div`
  position: relative;
`;

export const SelectDiv = styled.div`
  position: relative;
  outline: none;
  border: none;
  color: ${appMainStyle.silverColor};

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
  box-shadow: ${appMainStyle.appShadow};
  max-height: 153px;
  overflow-y: scroll;
  padding: 4px;
  background-color: ${appMainStyle.white};

  z-index: 10;
`;

export const DropDownList = styled.div`
  margin: 0;
  box-sizing: border-box;
  background-color: ${appMainStyle.white};
`;
export const ListItem = styled.div`
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
