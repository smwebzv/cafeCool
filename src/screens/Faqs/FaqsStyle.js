import styled from "styled-components";

export const SecondTableHolder = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  margin: 10px 0;
`;

export const SecondTableFrame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  table {
    border: 1px solid #999999;
    border-spacing: 0px;
    font-size: 0.9em;
    min-width: 780px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    .iconDown{
      padding-left: 10px;
    }

    thead tr{
      background-color: #fff;
      color: #4D4D4D;
      font-size: 14px;
      text-align: left;
    }

    th {
      padding: 6px 0;
      text-align: center;

      &:last-child:not(.alignLeft){
        padding-right: 20px;
        text-align: right;
      } 

      &:first-child{
        padding-left: 13px;
      } 

      &:nth-child(2){
        text-align: left;
      }

      input{
        margin: 0 7px 0 0;
        height: 14px;
        width: 14px;
      }
    }

    tbody {
      background-color: #fff;
      color: #999999;
      width:100%:      
    }  
    
    td {
      padding: 6px 0;
      cursor: pointer;
      max-width: 80px;
      border-top: 1px solid #999999;
      text-align: center;

      &:first-child{
        padding-left: 13px;
        width: 47px;
      } 

      &:nth-child(2){
        text-align: left;
      } 

      &:last-child:not(.alignLeft){
        padding-right: 20px;
        text-align: right;
        color: #4D4D4D !important;
      } 

      &:nth-child(5):not(.alignLeft){
        color: #4D4D4D !important;
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

    .withoutBorder{
      border-top: 1px solid transparent !important;
    }

    tr{
      max-width: 32px;

      .container {
        position: relative;

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 9px;
          left: 13px;
          height: 14px;
          width: 14px;
          background-color: #D9D9D9;
          cursor: pointer;
        }

        .stall{
          position: absolute;
          right: 11px;
          top: 7px;
        }
      }

      .container:hover input ~ .checkmark {
        background-color: #ccc;
      }

      .container input:checked ~ .checkmark {
        background-color: #0A3CBB;
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
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(37deg);
      }
    }

    .dropDown{
      background-color: transparent;
    }
  }
`;
