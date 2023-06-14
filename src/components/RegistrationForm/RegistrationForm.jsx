import React, { useState } from 'react';
import { register } from '../../Redux/auth/operations';
import { useDispatch } from 'react-redux';
import {
  StyledRegButton,
  StyledRegForm,
  StyledRegInput,
} from './RegistrationForm.styled';
import { StyledContainer } from 'components/Container/Container';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };
    dispatch(register(userData));
    setPassword('');
    console.log(userData);
  };

  return (
    <StyledContainer>
      <StyledRegForm onSubmit={onSubmit} autoComplete="on">
        <div>
          <label htmlFor="name">
            Ім'я:
            <StyledRegInput
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Пошта:
            <StyledRegInput
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Пароль:
            <StyledRegInput
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <StyledRegButton type="submit">Зареєструватися</StyledRegButton>
      </StyledRegForm>
    </StyledContainer>
  );
};
