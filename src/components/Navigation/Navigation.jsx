import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { StyledLink, StyledNavigation } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledNavigation>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/contacts">Contacts</StyledLink>
      </StyledNavigation>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
