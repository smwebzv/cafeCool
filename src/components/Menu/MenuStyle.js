import styled from "styled-components";

export const MenuFrame = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 60px 0 50px 0;
    box-sizing: border-box;
    position: fixed;
    top: 0;

    &:hover{
        width: 160px;
    }
`;

export const MenuFrame1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const IconFrame = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    cursor: pointer;

    .text{
        padding-left: 16px;
        font-size: 12px;
        font-weight: 400;
        color: #787878;
    }
    
    .text:hover{
        color: #0A3CBB;
    }

    &:hover{
        svg{
            path{
                fill: #0A3CBB;
            }
    }
`;

export const LogoFrame = styled.div`
    padding-bottom: 32px;
`;

