import styled from "styled-components";
import FindMeGif from "../Images/giphy.gif";

export const FindMeContainer = styled.div`
  width: 65%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const FindMeImg = styled.div`
  width: 720px;
  height: 480px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-image: url(${FindMeGif});
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #7bd4eb;
`;
