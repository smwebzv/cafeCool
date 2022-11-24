import styled from "styled-components";
import { appMainStyle } from "../../../AppStyle";
export const MainHolder = styled.div`
  height: 100%;
  width: 100%;
  .holder {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export const ListHolder = styled.div`
  background-color: ${appMainStyle.white};
  box-shadow: ${appMainStyle.appShadow};
  border-radius: 5px;
`;

export const Cart = styled.div`
  padding: 10px 20px 30px 20px;

  .row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin-bottom: 7px;

    .leftText {
      color: ${appMainStyle.darkSilver};
      font-weight: 600;
    }
    .rightText {
      color: ${appMainStyle.darkSilver};
    }
  }

  .borderBottom {
    border-bottom: 1px solid ${appMainStyle.borderLine};
  }

  .dropdownMenu {
    background-color: ${appMainStyle.hoverTable};
    padding: 3px 3px 0px 3px;
  }
`;
