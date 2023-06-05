import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthWrap, NavigationWrap } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <header>
        <NavigationWrap>
          <Link to="/">Home</Link>
          <AuthWrap>
            <Link to="/login">Log In</Link>
            <Link to="/register">Sing In</Link>
          </AuthWrap>
        </NavigationWrap>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
