import styled from "styled-components";

export const AddDailyReportsHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AddDailyReportsFrame = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;

    table{
        border: 1px solid black;
        font-family: cursive;
        height: 100vh;
        max-width: 1200px;

        thead{
            background-color: coral;
            color: #fff;
            font-size: 20px;

            th{
                border: 1px solid black;
            }
        }

        tbody{
            background-color: antiquewhite;
            color: #000;

            td{
                text-align: center;
                border: 1px solid black;

                .potrosnjaInpt{
                    text-align: center;
                    font-family: cursive;
                    outline: none;
                    width: 130px;
                    height: 80%;
                }
                &.preneseno{
                    background-color: silver;
                    width: 130px;
                    font-family: cursive;
                    outline: none;
                    text-align: center;
                }
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

export const FrameButton = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;