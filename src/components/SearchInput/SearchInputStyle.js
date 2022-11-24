import styled, { keyframes, css } from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const inputAnimOpen = keyframes`
  0% {
    width: 0px;
  }
  
  100% {
    width: 150px;
  }
`;

export const ShiftAndInputFrame = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 17px;
`;

export const ShiftEntry = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: ${appMainStyle.silverColor};
  height: 45px;
  display: flex;
  align-items: center;
`;

export const SearchInputFrame = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 10px 0 3px;
  margin-left: ${(props) => (props.screenWidth > 420 ? "13px" : "0")};
  border-radius: 5px;
  background: ${appMainStyle.white};
  box-shadow: ${appMainStyle.appShadow};
  cursor: pointer;
  position: relative;

  form {
    display: flex;
    align-items: center;


    input {
      width: 150px;
      height: 26px;
      border: none;
      outline: none;
      background: ${(props) => (props.hover ? "#999999" : "#fff")};
      border-radius: 3px;
      padding-left: 26px;
      box-sizing: border-box;
      color: ${appMainStyle.white};
      animation: ${inputAnimOpen} 0.3s linear;
    }



    input::placeholder {
      color: ${appMainStyle.white};
      font-size: 14px;
    }
  }

  .searchIcon {
    position: absolute;
    left: 8px;
    height: 100%;

    path {
      fill: ${(props) =>
        props.hover ? `${appMainStyle.white}` : `${appMainStyle.silverColor}`};
    }
  }

  .deleteIcon:hover {
    path {
      fill: #fb0d0d;
      fill-opacity: 100%;
    }
  }
`;

export const PlusFrame = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${appMainStyle.white};
  box-shadow: ${appMainStyle.appShadow};
  border-radius: 3px;
  margin-left: 6px;
  cursor: pointer;

  svg:hover {
    path {
      fill: ${appMainStyle.blueColor};
      fill-opacity: 100%;
    }
  }
`;
