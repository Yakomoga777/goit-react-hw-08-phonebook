import React from 'react';

export const LoginForm = () => {
  return (
    <form
      // onSubmit={ }
      autoComplete="off"
    >
      <div>
        {' '}
        <label>
          Email
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </div>

      <button type="submit">Log In</button>
    </form>
  );
};
