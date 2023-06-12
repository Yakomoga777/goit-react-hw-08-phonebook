import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { selectUser } from 'Redux/auth/selectors';
import { clearContactList } from 'Redux/slises/contactSlise';
import { StyledButton, StyledUserMenu, StyledWelcome } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const onLogOut = () => {
    dispatch(clearContactList([]));
    dispatch(logOut());
  };
  return (
    <StyledUserMenu>
      <StyledWelcome>Привіт, {name}</StyledWelcome>
      <StyledButton type="button" onClick={onLogOut}>
        Log Out
      </StyledButton>
    </StyledUserMenu>
  );
};
