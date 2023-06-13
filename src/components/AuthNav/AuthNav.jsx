import React from 'react';
import { Link } from 'react-router-dom';
import { AuthWrap, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthWrap>
        <StyledLink to="/login">Log In</StyledLink>
        <StyledLink to="/register">Sing In</StyledLink>
      </AuthWrap>
    </>
  );
};
