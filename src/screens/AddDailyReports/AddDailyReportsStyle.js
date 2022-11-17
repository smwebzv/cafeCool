import styled from "styled-components";

export const AddDailyReportsFrame = styled.div`
    display: flex;
    align-items: flex-start;
    background: #EFEFEF;


    table{
        min-width: 780px;
        font-size: 14px;
        font-weight: 600;
        border-bottom: none;
        border-spacing: 0px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

        thead{
            background-color: #fff;
            color: #4D4D4D;
            text-align: right;

            th{
                height: 32px;
                border-bottom: 1px solid #999999;
                text-align: center;
            }

            th:first-child{
                text-align: left;
                padding-left: 12px;
                display: flex;
                align-items: center;
            }
            th:nth-child(2){
                text-align: right;
            }
            th:nth-child(3){
                text-align: right;
            }
        }

        tbody{
            background-color: #fff;
            text-align: right;
            color: #999999;

            td{
                height: 32px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                width: 15%;
                text-align: center;

                .potrosnjaInpt{
                    width: 53px;
                    height: 22px;
                    text-align: right;
                    font-family: cursive;
                    outline: none;
                    height: 80%;
                    border: none;
                    text-align: center;
                    background: #BFBFBF;
                    border-radius: 3px;
                    color: #fff; 
                    cursor: pointer;
                }
                &.preneseno{
                    font-family: cursive;
                    outline: none;
                    text-align: right;
                }
                .potrosnjaInpt:hover{
                    background: #999999;
                }
                .potrosnjaInpt:focus{
                    background: #474747;
                }
            }

            td:first-child{
                text-align: left;
                padding-left: 12px;
                width: 15%;
            }
            td:last-child{
                padding-right: 12px;
                color: #4D4D4D;
            }
            td:nth-child(2){
                text-align: right;
            }
            td:nth-child(3){
                text-align: right;
            }
            td:nth-child(5){
                color: #4D4D4D;
            }
            .rashodi{
                font-size: 25px;
                height: 50px;
                background-color: #fff;

                .rashodiOpis{
                    width: 100% !important;
                    height: 40px;
                    overflow: auto;
                    resize: none;
                    display: flex;
                    outline: none;
                    padding: 10px;
                    box-sizing: border-box;
                    font-family: cursive;
                }
            }   
        }
    }
`;

export const TableExpenses = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 32px;
    font-size: 13px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    overflow: hidden;

    table{
        min-width: 307px;
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
    }

    .rashodi{
        width: 307px !important;
        background: #fff;
        margin-right: 21px; 
        
        th{
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.25);

            .rashodiOpis{
                width: 100%;
                color: #999999;
                font-size: 13px;
                font-weight: 400;
                overflow: auto;
                resize: none;
                display: flex;
                outline: none;
                box-sizing: border-box;
                border: none;
                padding-left: 12px;
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
                    background: #BFBFBF;
                    border-radius: 3px;
                    color: #fff;
                    cursor: pointer;
                    padding-right: 11px;
                    box-sizing: border-box;
                }

                .potrosnjaInpt:hover{
                    background: #999999;
                }
                .potrosnjaInpt:focus{
                    background: #474747;
                }
            }

            .sumamryText{
                color: #848484;
                font-weight: 600;
            }
            .summarytotal{
                color: #4D4D4D;
            }
        }
        .summaryFrame{
            height: 32px;
        }
    }   
}
`;
