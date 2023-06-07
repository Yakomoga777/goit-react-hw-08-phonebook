import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <p>Привіт, {}</p>
      <button type="button" onClick={onLogOut}>
        Log Out
      </button>
    </>
  );
};
