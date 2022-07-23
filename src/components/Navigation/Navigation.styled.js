import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const LinkEl = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #7bd4eb;
  &.active {
    color: #de14b9;
  }
`;
