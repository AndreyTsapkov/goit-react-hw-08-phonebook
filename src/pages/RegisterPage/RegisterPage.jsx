import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  RegisterPageButton,
  RegisterPageContainer,
  RegisterPageForm,
  RegisterPageInput,
  RegisterPageLabel,
  RegisterPageText,
  RegisterPageTitle,
} from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(register({ name, email, password }));
    reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' ? setEmail(value) : setPassword(value);
  };

  return (
    <RegisterPageContainer>
      <RegisterPageTitle>Registration form</RegisterPageTitle>

      <RegisterPageForm autoComplete="off" onSubmit={handleSubmit}>
        <RegisterPageLabel>
          <RegisterPageText>Name</RegisterPageText>
          <RegisterPageInput
            type="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </RegisterPageLabel>
        <RegisterPageLabel>
          <RegisterPageText>Your email</RegisterPageText>
          <RegisterPageInput
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </RegisterPageLabel>
        <RegisterPageLabel>
          <RegisterPageText>Your password</RegisterPageText>
          <RegisterPageInput
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </RegisterPageLabel>
        <RegisterPageButton type="submit" />
      </RegisterPageForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
