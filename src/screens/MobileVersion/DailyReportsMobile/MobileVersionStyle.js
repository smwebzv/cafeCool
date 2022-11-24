import styled from "styled-components";

export const MainHolder = styled.div`
    height:100%;
    width:100%;
    .holder{
        width: calc(100% - 40px);
        padding:0 20px;
    }
`;

export const ListHolder = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
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
            color:#4D4D4D;
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

    .borderBottom{
        border-bottom: 1px solid #00000040;
    }

    .dropdownMenu{
        background-color:#EFEFEF;
        padding: 7px 0;
    }
    .dropdownMenu:last-child{
        padding-bottom: 0;
    }
    
`;