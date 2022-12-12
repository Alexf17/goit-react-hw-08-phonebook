import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled.a`
  display: inline-block;
`;
export const NavLi = styled(NavLink)`
  padding: 5 px;
  display: inline-block;
`;
