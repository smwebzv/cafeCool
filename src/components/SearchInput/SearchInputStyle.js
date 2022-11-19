import styled, { keyframes } from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const inputAnim = keyframes`
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
    color: #999999;
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
    margin-left: 13px;
    border-radius: 5px;
    background: #fff;
    box-shadow: ${appMainStyle.appShadow};
    cursor: pointer;
    position: relative;

    form{
        display: flex;
        align-items: center;

        input{
            width: 150px;
            height: 26px;
            border: none;
            outline: none;
            background: ${props => props.hover ?  "#999999" : "#fff"};
            border-radius: 3px;
            padding-left: 26px; 
            box-sizing: border-box;
            color: #fff;
            animation: ${inputAnim} 0.3s linear;
        }

        input::placeholder{
            color: #fff;
            font-size: 14px;
        }
    }

    .searchIcon{
        position: absolute;
        left: 8px;
        height: 100%;

        path{
            fill: ${props => props.hover ? "#fff" : "#99999"};
        }
    }

    .deleteIcon:hover{
        path{
            fill: #FB0D0D;
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
    background: #FFFFFF;
    box-shadow: ${appMainStyle.appShadow};
    border-radius: 3px;
    margin-left: 6px;
    cursor: pointer;

    svg:hover{
        path{
            fill: #2F4B9F;
            fill-opacity: 100%;
        }
    }

`;