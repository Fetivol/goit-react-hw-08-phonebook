import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogInWrapper } from './Pages.styled';

export default function Login() {
  return (
    <LogInWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </LogInWrapper>
  );
}
