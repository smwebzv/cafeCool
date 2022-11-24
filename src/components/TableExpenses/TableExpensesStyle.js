import styled from "styled-components";
import { appMainStyle } from "../../AppStyle";
export const TableExpensesFrame = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 32px;

    table{
        min-width: 307px !important;
        background: ${appMainStyle.white};
        margin-right: 21px;
        box-shadow:${appMainStyle.appShadow}
        border-radius: 5px;
        overflow: hidden;
        font-size: 13px;
        
        td{
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.25);
            padding: 0;

            .rashodiOpis{
                width: 100%;
                color: ${appMainStyle.silverColor};
                font-size: 13px;
                font-weight: 400;
                overflow: auto;
                resize: none;
                display: flex;
                outline: none;
                box-sizing: border-box;
                border: none;
                padding: 4px 0 0 12px;
                font-family: inherit;
            }

            .input{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                .potrosnjaInpt{
                    width: 53px;
                    height: 22px;
                    outline: none;
                    border: none;
                    text-align: right;
                    background: ${appMainStyle.inputBg};
                    border-radius: 3px;
                    color: ${appMainStyle.white};
                    cursor: pointer;
                    padding-right: 11px;
                    box-sizing: border-box;
                    margin: 0 2px 3px 0;
                }

                .potrosnjaInpt:hover{
                    background: ${appMainStyle.silverColor};
                }
                .potrosnjaInpt:focus{
                    background: ${appMainStyle.inputFocus};
                }
            }
        }
        tr:last-child{
            td{
                border-bottom: 0;
                height: 32px;
            }
        }
        .total{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            padding: 0 12px;

            .totalSize{
                font-size: 14px;
            }
        }
    }   
`;
