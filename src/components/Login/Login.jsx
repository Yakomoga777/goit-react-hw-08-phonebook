import { StyledContainer } from 'components/Container/Container';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';
import {
  StyledLoginButton,
  StyledLoginForm,
  StyledLoginInput,
} from './Login.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(logIn(userData));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <StyledContainer>
      <StyledLoginForm onSubmit={onSubmit} autoComplete="on">
        {' '}
        <label>
          Email
          <StyledLoginInput
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <StyledLoginInput
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <StyledLoginButton type="submit">Log In</StyledLoginButton>
      </StyledLoginForm>
    </StyledContainer>
  );
};
