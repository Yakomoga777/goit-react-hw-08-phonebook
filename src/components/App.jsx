import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Provider, useDispatch } from 'react-redux';
import { fetchContacts } from '../Redux/slises/operations.js';
import { Route, Routes } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'Redux/store';
import { refreshUser } from 'Redux/auth/operations';
import { lazy } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
import PablicRoute from './Routes/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AppBar = lazy(() => import('../components/AppBar/AppBar'));
const ContactList = lazy(() => import('../components/ContactList/ContactList'));

const theme = {};

export const App = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route
                  path="contacts"
                  element={
                    <PrivateRoute
                      redirectTo="/login"
                      component={<ContactList />}
                    />
                  }
                />
                <Route
                  path="login"
                  element={
                    <PablicRoute path="contacts" component={<LoginPage />} />
                  }
                />
                <Route
                  path="register"
                  element={
                    <PablicRoute path="contacts" component={<SignupPage />} />
                  }
                />

                <Route path="*" element={'Page NOT FOUND'} />
              </Route>
            </Routes>
          </Suspense>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
