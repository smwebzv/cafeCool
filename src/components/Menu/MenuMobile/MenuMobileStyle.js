import styled from "styled-components";
import { appMainStyle } from "../../../AppStyle";
export const MainHolder = styled.div`
  background-color: ${appMainStyle.white};
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  .bluredBackground {
    width: ${window.outerWidth}px;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: ${appMainStyle.lightSilverColor};
    top: 0;
    left: 0;
  }
  .menu {
    width: 75px;
    height: 100%;
    background-color: ${appMainStyle.white};
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 14px 0 17px 0;

    .topButtonsHolder {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const IconFrame = styled.div`
  margin-bottom: 48px;
  svg {
    width: 23px;
    height: 32px;
  }
`;

export const LogoFrame = styled.div`
  margin-bottom: 30px;
  svg {
    width: 54px;
    height: 40px;
  }
`;
