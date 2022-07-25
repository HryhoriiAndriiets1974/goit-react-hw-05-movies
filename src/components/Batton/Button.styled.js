import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: black;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  padding: 5px;
  font-weight: 700;
  &:hover {
    box-shadow: 0 0 13px 3px #de14b9;
  }
`;

export const BtnLabel = styled.span`
  margin-left: 10px;
  color: #7bd4eb;
  font-weight: 700;
  padding: 5px;
`;
