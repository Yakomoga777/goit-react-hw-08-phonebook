import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const LogBar = () => {
  return (
    <>
      <button type="button">Log In</button>
      <button type="button">Sing In</button>
      <Outlet />
    </>
  );
};
