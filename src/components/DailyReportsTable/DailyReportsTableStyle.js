import styled from "styled-components";

export const DailyReportsTableFrame = styled.div`
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
                height: 32px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                text-align: center;

                .arrow{
                    padding-left: 11px;
                }
            }
            th:first-child{
                text-align: left;
                padding-left: 12px;
                display: flex;
                align-items: center;
            }
            th:last-child{
                width: 122.5px;
            }
        }

        tbody{
            background-color: #fff;
            text-align: right;

            .hovered{
                background: #EFEFEF;
                cursor: pointer; 
            }
            tr{
                background: #fff;   
            }
            td{
                height: 32px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
            }
            td:first-child{
                text-align: left;
                padding-left: 12px;
                color: #999999;
            }
            td:nth-child(2){
                color: #999999;
                text-align: center;
            }
            td:nth-child(3){
                color: #999999;
                text-align: center;
            }
            td:nth-child(4){
                color: #4D4D4D;
                text-align: center;
            }
            td:nth-child(5){
                color: #4D4D4D;
                text-align: center;
            }
            td:nth-child(6){
                display: flex;
                align-items: center;
                flex-direction: row;
                cursor: pointer;
                justify-content: flex-end;
                padding-right: 12px;

                span:nth-child(2){
                    padding: 0 20px;
                }
            }
        }
        tr:last-child{
            td{
                border-bottom: 0;
            }
        }
    }
    .prewIcon:hover{
        path{
            fill: #2F4B9F;
            fill-opacity: 100%;
        }
    }
    .updateIcon:hover{
        path{
            fill: #2F4B9F;
            fill-opacity: 100%;
        }
    }
    .deleteIcon:hover{
        path{
            fill: #FB0D0D;
            fill-opacity: 100%;
        }
    }
    .arrow{
        svg:hover{
            path{
            fill: #2F4B9F;
            }
        }
    }
`;