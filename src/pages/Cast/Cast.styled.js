import styled from "styled-components";

export const CastGallery = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
`;

export const CastCard = styled.li`
  border-radius: 10px;
  padding: 35px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const CastName = styled.h3`
font-weight: bold;
color: #de14b9;
`;

export const CastP = styled.p`
display: flex;
flex-direction: column;
font-weight: bold;
color: #7bd4eb;
`;

export const CastSpan = styled.span`
  font-weight: bold;
  color: #7bd4eb;
`;
