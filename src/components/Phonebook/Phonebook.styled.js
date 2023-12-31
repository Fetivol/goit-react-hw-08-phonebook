import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-top: 20px;
  width: 350px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f1f1;
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
  background-color: #e8edfc;
  border-radius: 10px;
  padding-left: 5px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;
export const Button = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 250ms;

  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: #fff;
    scale: 1.1;
  }
`;
