import React, { useState } from 'react';

export const RegistrationForm = () => {
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

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="on">
        <div>
          <label htmlFor="name">
            Ім'я:
            <input
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
            <input
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};
