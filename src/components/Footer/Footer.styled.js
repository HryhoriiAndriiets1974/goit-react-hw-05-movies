import styled from "styled-components";
import {BsGithub} from 'react-icons/bs';

export const FooterContainer = styled.footer`
  display: flex;
`;

export const FooterData = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
padding: 15px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
text-align: center;
color: #7bd4eb;
box-shadow: 0 0 10px 1px #7bd4eb;
`;

export const FooterIcon = styled(BsGithub)`
  margin-left: 5px;
  color: #de14b9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform var(--animation-duration) var(--timing-function);
  &:hover {
    box-shadow: 0 0 13px 3px #de14b9;
    transform: scale(1.3);
  }
`;
