import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  border: 0;
  color: black;
  cursor: pointer;
  display: block;
  font-size: 24px;
  font-weight: 600;

  padding: 8px 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    font-weight: 800;
  }
  &.active::after {
    content: '';
    position: absolute;
    display: block;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 2px;
  }
`;
