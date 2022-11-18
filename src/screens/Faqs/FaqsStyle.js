import styled from "styled-components";

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
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    background-color: #fff;
    position: relative;

    .tableBody{
      display: ${props => props.showFaqs ? "table-row-group" : "none"};
    }

    .dropdownHead{
      background-color: #EFEFEF;

    }

    .dropdownHead th{
      font-weight: 400 !important;
      color: #4D4D4D;
    }

    .iconDown{
      padding-left: 8px;
      cursor: pointer;
    }

    thead tr{
      background-color: #fff;
      color: #4D4D4D;
      font-size: 14px;
      text-align: left;

      svg{
        transform: ${props => !props.showFaqs && "rotateX(180deg)"}
      }
  
      svg:hover{
        path{
          fill: #2F4B9F;
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
      background-color: #fff;
      color: #999999;
      width:100%:   
      
      .hovered{
        background: #EFEFEF;
        cursor: pointer; 
    }
    .withoutBorder{
      border-top: 1px solid transparent !important;
      background-color: #EFEFEF;

      th{
        color: #4D4D4D !important;
        font-weight: 400 !important;
        background-color: #EFEFEF;
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
        color: #4D4D4D;
      }

      &:last-child:not(.alignLeft){
        padding-right: 26px;
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
          background-color: #D9D9D9;
          cursor: pointer;
          border-radius: 1px;
          margin-right: 12px;
        }

        .stall{
          margin-right: 11px;
        }
      }

      .checkmark {
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
  }
`;
