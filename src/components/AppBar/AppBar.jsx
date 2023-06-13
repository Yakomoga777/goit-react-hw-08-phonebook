import { Navigation } from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsLoggedIn } from 'Redux/auth/selectors';
import { FooterWrap, MainContainer, NavigationWrap } from './AppBar.styled';

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
        <MainContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
      {isLoggedIn && (
        <footer>
          <FooterWrap>
            <p>Created by Roman Petrenko</p>
          </FooterWrap>
        </footer>
      )}
    </>
  );
};
export default AppBar;
