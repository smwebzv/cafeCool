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
    padding: 10px 0 30px 0;
    

    .row{
        display: flex;
        justify-content: space-between;
        padding: 0 20px 8px 20px;
        margin-bottom: 7px;

        .leftText{
            color: ${appMainStyle.darkSilver};
            font-weight: 600;
        }
        .userArrowFrame{
            display: flex;
            align-items: center;
        }
        .rightText{
            color:#4D4D4D;
        }
        .rightText:first-child{
            padding-right: 13px;
        }
        svg:hover{
            transform: ${props => props.dropDownIndex ? `rotate(-0deg)` : `rotate(-180deg)`};
            path{
                fill: #2F4B9F;
            }
        }
    }
    .rightText {
      color: ${appMainStyle.darkSilver};
    }
  }


  .borderBottom {
    border-bottom: 1px solid ${appMainStyle.borderLine};
  }
    .dropdownMenu{
        background-color: ${appMainStyle.hoverTable};
        padding: 7px 0;
    }
    .dropdownMenu:last-child{
        padding-bottom: 0;
    }
    
`;

