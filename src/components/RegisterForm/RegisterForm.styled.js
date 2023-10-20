import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 20px;
  width: 300px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f1f1;
`;

export const StyledField = styled.input`
  background-color: #e8edfc;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: #fff;
    scale: 1.1;
  }
`;
