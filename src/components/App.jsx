import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../Redux/slises/operations.js';
import { selectIsLoading } from '../Redux/slises/selectors';
import { StyledContainer, H1, H2 } from './Container/Container';
import { Route, Routes } from 'react-router';
import { Navigation } from './Navigation/Navigation';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const theme = {};

export const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route
            index
            element={
              <StyledContainer>
                <H1>Phonebook</H1>
                <ContactForm btn="Add contact" />
                {/* <H2>Contacts</H2>
                <Filter />
                {isLoading && <p>Loading...</p>}
                <ContactList /> */}
              </StyledContainer>
            }
          ></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path={'*'} element={'Page NOT FOUND'}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
