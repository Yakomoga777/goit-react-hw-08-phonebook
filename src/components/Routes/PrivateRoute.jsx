import { useSelector } from 'react-redux';
// import {  } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

import { selectIsLoggedIn } from 'Redux/auth/selectors';

export default function PrivateRoute({ children, ...routProps }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Route {...routProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
