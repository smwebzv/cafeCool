import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";
export const DailyReportsFrame = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TableAndInputFrame = styled.div`

  padding: 30px 0px 32px 101px;
  display: flex;
  flex-direction: column;
  max-width: 780px;

  table {
    min-width: 780px;
    font-size: 14px;
    border-bottom: none;
    border-spacing: 0px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: ${appMainStyle.appShadow};
    thead {
      background-color: ${appMainStyle.white};
      color: ${appMainStyle.darkSilver};
      text-align: right;

      th {
        height: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        text-align: center;

        .arrow {
          padding-left: 11px;
        }
      }
      th:first-child {
        text-align: left;
        padding-left: 12px;
        display: flex;
        align-items: center;
      }
      th:last-child {
        width: 122.5px;
      }
    }

    tbody {
      background-color: ${appMainStyle.white};
      text-align: right;

      .hovered {
        background: ${appMainStyle.hoverTable};
        cursor: pointer;
      }
      tr {
        background: ${appMainStyle.white};
      }
      td {
        height: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      }
      td:first-child {
        text-align: left;
        padding-left: 12px;
        color: ${appMainStyle.silverColor};
      }
      td:nth-child(2) {
        color: ${appMainStyle.silverColor};
        text-align: center;
      }
      td:nth-child(3) {
        color: ${appMainStyle.silverColor};
        text-align: center;
      }
      td:nth-child(4) {
        color: ${appMainStyle.darkSilver};
        text-align: center;
      }
      td:nth-child(5) {
        color: ${appMainStyle.darkSilver};
        text-align: center;
      }
      td:nth-child(6) {
        display: flex;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
        justify-content: flex-end;
        padding-right: 12px;

        span:nth-child(2) {
          padding: 0 20px;
        }
      }
    }
    tr:last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  .prewIcon:hover {
    path {
      fill: ${appMainStyle.blueColor};
      fill-opacity: 100%;
    }
  }
  .updateIcon:hover {
    path {
      fill: ${appMainStyle.blueColor};
      fill-opacity: 100%;
    }
  }
  .deleteIcon:hover {
    path {
      fill: ${appMainStyle.deleteColor};
      fill-opacity: 100%;
    }
  }

`;
