import styled from "styled-components";
import document from "../../assets/icon/document.png";
import edit from "../../assets/icon/edit.png";
import del from "../../assets/icon/delete.png";


export const FirstPageFrame = styled.div`
    height: 100vh;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 479px){
        background: #d3d3d3;
    }

    .searchInput{
        height: 40px;
        background-color: #fff;
        border-radius: 10px;
        border: none;
        outline: none;
        font-family: cursive;
        font-size: 15px;
        padding: 0 20px;
        box-sizing: border-box;

        @media only screen and (max-width: 479px){
            padding: 5px 20px;
            font-size: 10px;
        }
    }
    .buttons{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .button{
            margin: 0px;
            display: flex;
            align-items: center;

            @media only screen and (max-width: 663px){
                font-size: 15px;
                padding: 15px 30px;
            }
            @media only screen and (max-width: 512px){
                font-size: 10px;
                padding: 15px 20px;
            }
            @media only screen and (max-width: 395px){
                font-size: 10px;
                padding: 10px 20px;
            }
        }
        .button:nth-child(2){
            margin: 0px 10px 0px 10px;

            @media only screen and (max-width: 479px){
                display: none;
            }
        }
        
        .button:nth-child(1){
            @media only screen and (max-width: 479px){
                display: none;
            }
        }
    }
    .inputHolder{
        width: 100%;
        text-align: right;
        margin-top: 15px;
    }
    table{
        border: 1px solid black;
        max-width: 1200px;
        margin-top: 15px;
        font-family: cursive;

        @media only screen and (max-width: 479px){
            font-size: 15px;
        }
        @media only screen and (max-width: 360px){
            font-size: 10px;
        }

        thead{
            background-color: coral;
            color: #fff;
            font-size: 20px;

            th{
                border: 1px solid black;
                height: 40px;
            }

            @media only screen and (max-width: 569px){
                font-size: 16px;
            }
            
            @media only screen and (max-width: 555px){
                font-size: 14px;
            }

            @media only screen and (max-width: 510px){
                font-size: 12px;
            }
            @media only screen and (max-width: 425px){
                font-size: 10px;
            }
        }
        tbody{
            font-size: 18px;
            background-color: #fff;
            text-align: center;

            td{
                border: 1px solid black;
                height: 40px;
    
                &.doc{
                    background-color: #fff;
                    background-image: url(${document});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 20px;
                    width: 40px;
                }
                &.pen{
                    background-color: #fff;
                    background-image: url(${edit});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 20px;
                    width: 40px;
    
                }
                &.delete{
                    background-color: #fff;
                    background-image: url(${del});
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 20px;
                    width: 40px;
                }
    
    
            }

            @media only screen and (max-width: 569px){
                font-size: 16px;
            }
            
            @media only screen and (max-width: 555px){
                font-size: 14px;
            }

            @media only screen and (max-width: 510px){
                font-size: 12px;
            }
            @media only screen and (max-width: 425px){
                font-size: 10px;
            }
        }
    }
`;

export const CaffeCoolTitle = styled.div`
    font-size: 60px;
    font-weight: bold;
    font-family: cursive;
    color: #fff;
    padding: 10px 0 30px;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 479px){
        font-size: 40px;
    }
`;
