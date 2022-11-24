import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const HolderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95px;
  box-sizing: border-box;
  margin-bottom: 11px;
  padding: 7px 10px;
  box-shadow: ${appMainStyle.appShadow};
  border-radius: 8px;
  outline: none;
  border: 1px solid ${appMainStyle.white};
  font-size: 12px;
  color: ${appMainStyle.silverColor};
  cursor: pointer;
  background-color: ${appMainStyle.white};

  &:hover {
    background-color: ${appMainStyle.blueColor};
    color: ${appMainStyle.white};
    border: 1px solid ${appMainStyle.blueColor};
  }
  &.saveFak {
    margin-left: 16px;
  }
  &.saveFaqs {
    margin-bottom: 0px;
  }
`;
