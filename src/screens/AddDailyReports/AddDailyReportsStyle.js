import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const AddDailyReportsFrame = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const TableAndInputFrame = styled.div`
  padding: 30px 0px 32px 101px;
  display: flex;
  flex-direction: column;
  max-width: 720px;

  table {
    min-width: 720px;
    font-size: 14px;
    font-weight: 600;
    border-bottom: none;
    border-spacing: 0px;
    box-shadow: ${appMainStyle.appShadow};
    border-radius: 5px;
    overflow: hidden;

    thead {
      background-color: ${appMainStyle.white};
      color: ${appMainStyle.darkSilver};
      text-align: right;

      th {
        height: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        text-align: center;
      }

      th:first-child {
        text-align: left;
        padding-left: 12px;
        display: flex;
        align-items: center;
        width: 135px;
      }
      th:last-child {
        width: 89px;
      }
      th:nth-child(2) {
        text-align: right;
      }
      th:nth-child(3) {
        text-align: right;
      }
    }

    tbody {
      background-color: ${appMainStyle.white};
      text-align: right;
      color: ${appMainStyle.silverColor};

      td {
        height: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        text-align: center;

        .potrosnjaInpt {
          width: 53px;
          height: 22px;
          text-align: right;
          outline: none;
          height: 80%;
          border: none;
          text-align: center;
          background: ${appMainStyle.inputBg};
          border-radius: 3px;
          color: ${appMainStyle.white};
          cursor: pointer;
        }
        &.preneseno {
          outline: none;
          text-align: right;
        }
        .potrosnjaInpt:hover {
          background: ${appMainStyle.silverColor};
        }
        .potrosnjaInpt:focus {
          background: ${appMainStyle.inputFocus};
        }
      }

      td:first-child {
        text-align: left;
        padding-left: 12px;
        width: 100px;
      }
      td:last-child {
        color: ${appMainStyle.darkSilver};
        width: 89px;
      }
      td:nth-child(2) {
        text-align: right;
      }
      td:nth-child(3) {
        text-align: right;
      }
      td:nth-child(5) {
        color: ${appMainStyle.darkSilver};
      }
      tr:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
`;
