import React from 'react';
import { Link } from 'react-router-dom';
import { AuthWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthWrap>
        <Link to="/login">Log In</Link>
        <Link to="/register">Sing In</Link>
      </AuthWrap>
    </>
  );
};
