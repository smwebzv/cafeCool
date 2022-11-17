import styled from "styled-components";

export const DailyReportsFrame = styled.div`
    height: 100vh;
    display: flex;
    align-items: flex-start;
    background: #EFEFEF;
`;

export const TableFrame = styled.div`

    table{
        min-width: 780px;
        font-size: 14px;
        border-bottom: none;
        border-spacing: 0px;
        border-radius: 5px;
        overflow: hidden;
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
        
        thead{
            background-color: #fff;
            color: #4D4D4D;
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

            tr{
                background: ${props => props.hover ? "#EFEFEF" : "#fff"}
            }
            td{
                height: 50px;
                border-bottom: 1px solid #999999;
            }
            td:first-child{
                text-align: left;
                padding-left: 26px;
                color: #999999;
            }
            td:nth-child(2){
                color: #999999;
            }
            td:nth-child(3){
                color: #999999;
            }
            td:nth-child(4){
                color: #4D4D4D;
            }
            td:nth-child(6){
                width: 30px;
                padding-left: 74px;
                cursor: pointer;
            }
            td:nth-child(7){
                width: 10px;
                padding: 0 29px;
                cursor: pointer
            }
            td:nth-child(8){
                width: 10px;
                padding-right: 35px;
                cursor: pointer;
            }
        }
    }

    svg:hover{
        path{
            fill: DC4E4E;
        }
    }
`;

export const TableAndInputFrame = styled.div`
    max-width: 1067px;
    padding: 44px 0 32px 163px;
    display: flex;
    flex-direction: column;
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
