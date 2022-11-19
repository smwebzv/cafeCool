import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const MenuFrame = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  -webkit-transition: width 0.4s ease-in-out;
  -moz-transition: width 0.4s ease-in-out;
  -o-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  box-shadow: ${appMainStyle.appShadow};
  width: 50px;
  z-index: 100;

  &:hover {
    width: 180px;

    .text {
      opacity: 1 !important;
    }
  }
`;

export const MenuFrame1 = styled.div`
  position: absolute;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 17px 0;
  height: 100%;
  box-sizing: border-box;
`;

export const MenuFrame2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconFrame = styled.div`
    height: 39px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    padding-left: 17px;

    .text{
        opacity: 0;
        padding-left: 8px;

        -webkit-transition: opacity 0.3s ease-in-out;
        -moz-transition: opacity 0.3s ease-in-out;
        -o-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;

        text-align: left;
        font-weight: 400;
        color: #787878;
    }
    
    &:hover{
        background: #BFBFBF;

        .text{
            color: #fff !important;
        }

        svg{
            path{
                fill: #fff;
            }
            .info{
                fill: #999999;
            }
    }
`;

export const LogoFrame = styled.div`
  margin-bottom: 5px;
  padding-left: 10px;
`;
