import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  border-radius: 10px;
  transition: all 250ms;

  &:hover {
    background-color: #fff;
    scale: 1.1;
  }
`;
