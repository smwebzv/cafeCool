import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";

export const Inputs = styled.div`
  input {
    width: 250px;
    height: 32px;
    border-radius: 8px;
    outline: none;
    border: none;
    padding: 0px 12px;
    font-size: 12px;
    margin-bottom: 11px;
    box-shadow: ${appMainStyle.appShadow};
    background-color: ${appMainStyle.white};
  }
`;
