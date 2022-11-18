import styled from "styled-components";

export const HolderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 11px;
  padding: 8px 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  outline: none;
  border: 1px solid #999999;
  font-size: 14px;
  color: #999999;
  cursor: pointer;

  &:hover {
    background-color: #0a3cbb;
    color: white;
    font-size: 14px;
    border: 1px solid #0a3cbb;
  }
  &.saveFak {
    margin-left: 16px;
  }
  &.saveFaqs{
    margin-bottom: 0px;
  }
`;
