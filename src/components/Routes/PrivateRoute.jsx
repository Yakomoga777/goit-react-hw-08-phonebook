import { useSelector } from 'react-redux';

import { Route, Redirect, Navigate, Outlet } from 'react-router-dom';

import { selectIsLoggedIn, selectIsRefreshing } from 'Redux/auth/selectors';

// export default function PrivateRoute({ children, ...routProps }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   console.log(isLoggedIn);

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
//   // return (
//   //   <Route {...routProps}>
//   //     {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
//   //   </Route>
//   // );
// }

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
