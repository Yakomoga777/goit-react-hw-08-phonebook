import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { NavigationWrap } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <NavigationWrap>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </NavigationWrap>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
