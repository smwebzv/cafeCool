import styled from "styled-components";

export const HolderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 11px;
  padding: 8px 14px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  outline: none;
  border: 1px solid #ffffff;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    background-color: #2f4b9f;
    color: white;
    font-size: 14px;
    border: 1px solid #2f4b9f;
  }
  &.saveFak {
    margin-left: 16px;
  }
  &.saveFaqs{
    margin-bottom: 0px;
  }
`;
