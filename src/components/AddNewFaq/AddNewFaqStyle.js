import styled from "styled-components";

export const FakFrameFirst = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const FakFrame = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;

    @media only screen and (max-width: 479px){
        background: #d3d3d3;
    }
`;

export const FakHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color: coral;
    font-size: 25px;
    font-family: cursive;
    color: #fff;
    border: 1px solid black;
    border-radius: 7px 7px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    padding: 0 20px;
    box-sizing: border-box;
`;

export const FakBox = styled.div`
    width: 100%;
    border: 1px solid black;
    border-radius: 0px 0px 7px 7px;
    box-sizing: border-box;
    border-top: none;
    background-color: #fff;
    padding: 20px;

    .inputAndSelect{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        .fakNumber{
            width: 250px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            font-family: cursive;
            outline: none;
        }
        .selectItems{
            width: 170px;
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            outline: none;
            cursor: pointer;
            font-family: cursive;
        }
    }
    table{
        font-family: cursive;
        border: 1px solid black;
        max-width: 1200px;
        
        thead{
            background-color: coral;
            color: #fff;
        }
        th{
            font-size: 20px;
            border: 1px solid black;
        }
        td{
            border: 1px solid black;
            height: 40px;
            font-size: 15px;
            text-align: center;
        }

        .quantity{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: none;
            text-align: center;
            outline: none;
            font-family: cursive;
        }
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        .price{
            width: 80%;
            height: 100%;
            box-sizing: border-box;
            border: none;
            text-align: center;
            outline: none;
            font-family: cursive;
        }
    }
    .selectProd{
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-family: cursive;
    }
`;

export const FakTitle = styled.div`
    color: #000; 
    font-family: cursive;
    font-size: 25px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

export const ButtonsFrame = styled.div`
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 15px;
    flex-direction: column;

    .saveFak{
        background-color: midnightblue;
    }
`;

export const AddProd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background-color: brown;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: cursive;
    padding: 10px 15px;
`;
