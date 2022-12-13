import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  max-width: max-content;
  margin: 0 auto;
  background-color: rgb(240, 240, 240, 0.6);
`;

export const Link = styled.a`
  display: inline-block;
`;
export const NavLi = styled(NavLink)`
  padding: 5 px;
  display: inline-block;
`;

export const HelloText = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const Block = styled.span`
  display: contents;
  font-weight: 600;
`;
