import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'Redux/auth/selectors';

const PablicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export default PablicRoute;
