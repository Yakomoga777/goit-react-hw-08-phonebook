import React, { Suspense, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
// import ContactList from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../Redux/slises/operations.js';
import { selectIsLoading } from '../Redux/slises/selectors';
import { StyledContainer, H1, H2 } from './Container/Container';
import { Outlet, Route, Routes } from 'react-router';
// import LoginPage from 'pages/LoginPage';
// import SignupPage from 'pages/SignupPage';
// import AppBar from './AppBar/AppBar';
import { selectedIsToken } from 'Redux/auth/selectors';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'Redux/store';
import { refreshUser } from 'Redux/auth/operations';
import { lazy } from 'react';
import PrivateRoute from './Routes/PrivateRoute';
// import HomePage from 'pages/HomePage';

const HomePage = lazy(() => import('../pages/HomePage'));
const SignupPage = lazy(() => import('../pages/SignupPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const AppBar = lazy(() => import('../components/AppBar/AppBar'));
const ContactList = lazy(() => import('../components/ContactList/ContactList'));

const theme = {};

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);
  const isToken = useSelector(selectedIsToken);

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="contacts" element={<ContactList />} />

                <Route path="register" element={<SignupPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={'Page NOT FOUND'} />
              </Route>
              {/* <>
                <PrivateRoute path="contacts">
                  <ContactList />
                </PrivateRoute>
              </> */}
            </Routes>
          </Suspense>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
