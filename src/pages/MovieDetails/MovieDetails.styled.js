import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const MovieInfo = styled.div`
  display: block;
  padding: 15px;
  margin-left: 20px;
  color: #7bd4eb;
`;

export const MovieHorizontal = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px 1px #7bd4eb;
  background-image: repeating-linear-gradient(
    -45deg,
    #7bd4eb,
    #7bd4eb 15px,
    #fcfcfc 15px,
    #fcfcfc 30px
  );
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
  &.active {
    color: #de14b9;
    box-shadow: 0 0 13px 3px #de14b9;
  }
`;

export const MovieH2 = styled.h2`
  color: #7bd4eb;
`;

export const MovieH3 = styled.h3`
  color: #7bd4eb;
`;
