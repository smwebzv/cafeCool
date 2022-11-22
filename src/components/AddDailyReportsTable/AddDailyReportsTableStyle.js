import styled from "styled-components";

export const AddDailyReportsTableFrame = styled.div`
    table{
        min-width: 720px;
        font-size: 14px;
        font-weight: 600;
        border-bottom: none;
        border-spacing: 0px;
        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
        border-radius: 5px;
        overflow: hidden;

        thead{
            background-color: #fff;
            color: #4D4D4D;
            text-align: right;

            th{
                height: 32px;
                border-bottom: 1px solid rgba(0,0,0,0.25);
                text-align: center;
            }

            th:first-child{
                text-align: left;
                padding-left: 12px;
                display: flex;
                align-items: center;
                width: 135px;
            }
            th:last-child{
                width: 89px;
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
                text-align: center;

                .potrosnjaInpt{
                    width: 53px;
                    height: 22px;
                    text-align: right;
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
                width: 100px;
            }
            td:last-child{
                color: #4D4D4D;
                width: 89px;
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
            tr:last-child{
                td{
                    border-bottom: 0;
                }
            }   
        }
    }
`;