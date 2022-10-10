import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  LoginPageButton,
  LoginPageContainer,
  LoginPageForm,
  LoginPageInput,
  LoginPageLabel,
  LoginPageText,
  LoginPageTitle,
} from './LoginPage.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }));
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' ? setEmail(value) : setPassword(value);
  };

  return (
    <LoginPageContainer>
      <LoginPageTitle>Login form</LoginPageTitle>

      <LoginPageForm autoComplete="off" onSubmit={handleSubmit}>
        <LoginPageLabel>
          <LoginPageText>Your email</LoginPageText>
          <LoginPageInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </LoginPageLabel>
        <LoginPageLabel>
          <LoginPageText>Your password</LoginPageText>
          <LoginPageInput
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </LoginPageLabel>
        <LoginPageButton type="submit" />
      </LoginPageForm>
    </LoginPageContainer>
  );
};
