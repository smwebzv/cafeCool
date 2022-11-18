import styled from "styled-components";

export const MenuFrame = styled.div`  
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    -webkit-transition: width 0.4s ease-in-out;
    -moz-transition: width 0.4s ease-in-out;
    -o-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    width: ${props => props.hover ? "150px" : "50px"};
`;

export const MenuFrame1 = styled.div`
    width: ${props => props.hover ? "150px" : "50px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 17px 0;
    height: 100%;
    box-sizing: border-box;
`;

export const MenuFrame2 = styled.div`
    width: ${props => props.hover ? "150px" : "50px"};  
    display: flex;
    flex-direction: column;
    align-items: ${props => props.hover ? "flex-start" : "center"};
    justify-content: space-between;
`;

export const IconFrame = styled.div`
    width: ${props => props.hover ? "150px" : "50px"};
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.hover ? "flex-start" : "center"};
    padding-left: ${props => props.hover ? "17px" : "0px"};
    cursor: pointer;
    box-sizing: border-box;

    .text{
        padding-left: ${props => props.hover ? "8px" : "0px"};
        text-align: left;
        font-weight: 400;
        color: #787878;
        -webkit-transition: font-size 0.4s ease-in-out;
        -moz-transition: font-size 0.4s ease-in-out;
        -o-transition: font-size 0.4s ease-in-out;
        transition: font-size 0.4s ease-in-out;
        font-size: ${props => props.hover ? "12px" : "0px"};
    }
    
    &:hover{
        background: #BFBFBF;
    }

    &:hover{
        svg{
            path{
                fill: #fff;
            }
            .info{
                fill: #999999;
            }
    }
`;

export const LogoFrame = styled.div`
    padding-left: ${props => props.hover ? "10px" : "0"};
`;


