import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterWrapper } from './Pages.styled';

export default function Register() {
  return (
    <RegisterWrapper>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </RegisterWrapper>
  );
}
