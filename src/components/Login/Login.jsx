import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/operations';

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
    <form onSubmit={onSubmit} autoComplete="on">
      <div>
        {' '}
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};
