import styled from "styled-components";

export const SearchInputFrame = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 10px 0 12px;
    margin-left: 13px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    svg{
        opacity: 50%;
    }

    svg:hover{
        opacity: 100%;
        path{
            fill: DC4E4E;
        }
    }
    svg:focus{
        opacity: 100%;
        path{
            fill: FB0D0D;
        }
    }
`;

export const PlusFrame = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    margin-left: 6px;
    cursor: pointer;

    svg:hover{
        path{
            fill: #999999;
        }
    }
    svg:focus{
        path{
            fill: 474747;
        }
    }
`;