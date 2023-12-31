import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Label, StyledField, StyledForm } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <StyledField type="text" name="name" />
      </Label>
      <Label>
        Email
        <StyledField type="email" name="email" />
      </Label>
      <Label>
        Password
        <StyledField type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
