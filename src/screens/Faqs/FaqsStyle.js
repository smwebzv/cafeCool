import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";
export const SecondTableHolder = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SecondTableFrame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  table {
    border-spacing: 0px;
    font-size: 0.9em;
    min-width: 780px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow:${appMainStyle.appShadow};
    background-color: ${appMainStyle.white};
    position: relative;

    .dropdownHead{
      background-color: ${appMainStyle.hoverTable};

    }

    .dropdownHead th{
      font-weight: 400 !important;
      color: ${appMainStyle.darkSilver};
    }

    .iconDown{
      padding-left: 8px;
      cursor: pointer;
    }

    thead tr{
      background-color:${appMainStyle.white};
      color:${appMainStyle.darkSilver}
      font-size: 14px;
      text-align: left;

      svg{
        transform: ${(props) => !props.showFaqs && "rotateX(180deg)"}
      }
  
      svg:hover{
        path{
          fill: ${appMainStyle.blueColor};
        }
      }
    }

    .stallDropdown{
      margin-right: 34px;
      margin-left: 3px;
    }

    th {
      text-align: center;
      font-weight: 600 !important;

      &:last-child:not(.alignLeft){
        padding-right: 11px;
        text-align: right;
      } 

      &:first-child{
        padding-left: 13px;
        text-align: left;
      } 

      &:nth-child(2){
        width: 205px;
      }

      &:nth-child(3){
        width: 135px;
        text-align: left;
      }

      &:nth-child(4){
        width: 146px;
      }

      input{
        margin: 0 7px 0 0;
        height: 14px;
        width: 14px;
      }
    }

    tbody {
      background-color: ${appMainStyle.white};
      color: ${appMainStyle.silverColor};
      width:100%:   
      
      .hovered{
        background: ${appMainStyle.hoverTable};
        cursor: pointer; 
    }
    .withoutBorder{
      border-top: 1px solid transparent !important;
      background-color: ${appMainStyle.hoverTable};

      th{
        color: ${appMainStyle.darkSilver} !important;
        font-weight: 400 !important;
        background-color: ${appMainStyle.hoverTable};
      }

      &:first-child{
        text-align: left;
      }
    }
    }  
    
    td {
      cursor: pointer;
      text-align: center;

      .checkmark{
        margin-right: 32px !important;
      }

      &:first-child{
        padding-left: 13px;
      } 

      &:nth-child(3){
        text-align: left !important;
      } 

      &:nth-child(4){
        color: ${appMainStyle.darkSilver};
      }

      &:last-child:not(.alignLeft){
        padding-right: 26px;
        text-align: right;
        color: ${appMainStyle.darkSilver} !important;
      } 

      &:nth-child(5):not(.alignLeft){
        color: ${appMainStyle.darkSilver} !important;
      } 

      &.rightAlign{
        text-align: right;
      }

      input{
        height: 14px;
        width: 14px;
        margin: 0;
      }
    }

    

    tr{
      height: 32px;

      .container {
        position: relative;
        display: flex;
        align-items: center;

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: relative;
          height: 14px;
          width: 14px;
          background-color:${appMainStyle.optionHover};
          cursor: pointer;
          border-radius: 1px;
          margin-right: 12px;
        }

        .stall{
          margin-right: 11px;
        }
      }

      .checkmark {
        background-color: ${appMainStyle.lightSilverColor};
      }

      .container input:checked ~ .checkmark {
        background-color: ${appMainStyle.white};
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .container input:checked ~ .checkmark:after {
        display: block;
      }

      .container .checkmark:after {
        left: 4px;
        top: 0px;
        width: 3px;
        height: 9px;
        border: solid ${appMainStyle.white};
        border-width: 0 2px 2px 0;
        transform: rotate(37deg);
      }
    }
  }
`;
