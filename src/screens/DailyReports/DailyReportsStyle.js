import styled from "styled-components";

export const DailyReportsFrame = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    background: #EFEFEF;
`;

export const TableFrame = styled.div`
    table{
        width: 100%;
        font-size: 14px;
        border: 1px solid #999999;
        border-bottom: none;
        border-spacing: 0px;
        
        thead{
            background-color: #fff;
            color: #000;
            text-align: right;
            
            th{
                height: 50px;
                border-bottom: 1px solid #999999;

                .arrow{
                    padding-left: 11px;
                }
            }
            th:first-child{
                text-align: left;
                padding-left: 26px;
                display: flex;
                align-items: center;
            }
            th:last-child{
                padding-right: 16px;
            }
        }

        tbody{
            background-color: #fff;
            text-align: right;

            tr:hover{
                background: #EFEFEF;
            }

            td{
                height: 50px;
                border-bottom: 1px solid #999999;
            }
            td:first-child{
                text-align: left;
                padding-left: 26px;
            }
            td: nth-child(6){
                width: 30px;
                padding-left: 74px;
                cursor: pointer;
            }
            td: nth-child(7){
                width: 10px;
                padding: 0 29px;
                cursor: pointer
            }
            td: nth-child(8){
                width: 10px;
                padding-right: 35px;
                cursor: pointer;
            }
        }
    }
`;

export const TableAndInputFrame = styled.div`
    padding: 44px 0px 32px 163px;
    display: flex;
    flex-direction: column;
    max-width: 780px;
`;

export const ShiftEntry = styled.div`
    font-weight: 600;
    font-size: 36px;
    color: #999999;
    height: 45px;
    display: flex;
    align-items: center;
`;

export const ShiftAndInputFrame = styled.div`
    display: flex;
    align-items: end;
    margin-bottom: 25px;
`;
