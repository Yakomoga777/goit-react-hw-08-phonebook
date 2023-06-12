import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { NavigationWrap } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <NavigationWrap>
          <Navigation />
        </NavigationWrap>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {isLoggedIn && (
        <footer>
          <p>Created by Roman Petrenko</p>
        </footer>
      )}
    </>
  );
};
export default AppBar;
