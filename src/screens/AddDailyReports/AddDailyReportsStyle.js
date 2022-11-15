import styled from "styled-components";

export const AddDailyReportsFrame = styled.div`
    display: flex;
    align-items: flex-start;
    background: #EFEFEF;


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
                height: 32px;
                border-bottom: 1px solid #999999;
            }

            th:first-child{
                text-align: left;
                padding-left: 35px;
                display: flex;
                align-items: center;
            }
            th:last-child{
                padding-right: 35px;
            }
        }

        tbody{
            background-color: #fff;
            text-align: right;
            padding-left: 35px;

            td{
                height: 32px;
                border-bottom: 1px solid #999999;
                width: 15%;

                .potrosnjaInpt{
                    text-align: right;
                    font-family: cursive;
                    outline: none;
                    height: 80%;
                    border: none;
                }
                &.preneseno{
                    font-family: cursive;
                    outline: none;
                    text-align: right;
                }
            }

            td:first-child{
                text-align: left;
                padding-left: 35px;
                width: 25%;
            }
            td:last-child{
                padding-right: 35px;
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
