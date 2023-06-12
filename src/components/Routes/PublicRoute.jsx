import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn, selectIsRefreshing } from 'Redux/auth/selectors';

const PablicRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PablicRoute;
