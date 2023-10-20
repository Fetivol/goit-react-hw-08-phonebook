import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Label, StyledField, StyledForm } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <StyledField type="email" name="email" />
      </Label>
      <Label>
        Password
        <StyledField type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};
