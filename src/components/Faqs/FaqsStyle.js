import styled from "styled-components";

export const SecondTableHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const SecondTableFrame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  table {
    border: 1px solid black;
    border-spacing: 0px;
    font-family: cursive;
    border-collapse: collapse;
    margin: 25px 0px;
    font-size:0.9em;
    min-width:1200px;

    thead tr{
      background-color: coral;
      color: #fff;
      font-size: 20px;
      text-align: left;
    }
    th {
      padding: 20px;
      border-bottom: 1px solid black;      
    }

    tbody {
      background-color: #fff;
      color: #000;
      width:100%:      
    }  
    
    td {
      padding: 20px;
      border-bottom: 1px solid black;
    }
  }
`;
