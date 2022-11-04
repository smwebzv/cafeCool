import styled from "styled-components";

export const AddNewFaqHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const AddNewFaqFrame = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;

        table{
            border: 1px solid black;
            border-spacing: 0px;
            font-family: cursive;
            max-width: 1200px;

            thead{
                background-color: coral;
                color: #fff;
                font-size: 20px;
                text-align: left
            }
            th{
                padding: 20px;
                border-bottom: 1px solid black;
            }

            tbody{
                background-color: #fff;
                color: #000;
            }
            tr{
                height: 50px;
            }
            td{
                padding: 20px;
                border-bottom: 1px solid black;
            }
        }
`;

