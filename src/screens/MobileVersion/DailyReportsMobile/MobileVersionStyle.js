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
    padding: 10px 20px 30px 20px;
    

    .row{
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        margin-bottom: 7px;

        .leftText{
            color:#4D4D4D;
            font-weight: 600;
        }
        .rightText{
            color:#4D4D4D;
        }
    }

    .borderBottom{
        border-bottom: 1px solid #00000040;
    }

    .dropdownMenu{
        background-color:#EFEFEF;
        padding: 3px 3px 0px 3px;
    }
    
`;